import { useFormContext, useWatch } from 'react-hook-form'

import { searchFormAdapter } from '../adapters/searchFormAdapter'

import { useEffect, useState } from 'react'
import { useDebouncedValue } from '@billboards-org/hooks/src/async'

import { SearchBillboardFormType } from '../searchBillboards'
import { SearchBillboardsQueryVariables } from '@billboards-org/network/src/generated'
import { notification$ } from '@billboards-org/util/subjects'
import { storage } from '@billboards-org/network/src/config/firebase'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

export const useConvertSearchFormToVariables = () => {
  const [variables, setVariables] = useState<SearchBillboardsQueryVariables>(
    () => ({
      locationFilter: { nw_lat: 0, nw_lng: 0, se_lat: 0, se_lng: 0 },
      dateFilter: {
        endDate: new Date().toISOString(),
        startDate: new Date().toISOString(),
      },
    }),
  )

  const {
    setError,
    clearErrors,
    formState: { dirtyFields },
  } = useFormContext<SearchBillboardFormType>()
  const formState = useWatch<SearchBillboardFormType>()

  const debouncedForm = useDebouncedValue(formState, 500)

  useEffect(() => {
    const vars = searchFormAdapter(dirtyFields, debouncedForm)

    if (!vars) return

    if (!vars.locationFilter) return

    setVariables(vars)
  }, [debouncedForm, dirtyFields, setError, clearErrors])

  // Convert form data to query variables
  return { variables }
}

export const useImageUpload = () => {
  const [uploading, setUploading] = useState(false)
  const [percent, setPercent] = useState(0)

  const handleUpload = async (files: any): Promise<string[]> => {
    if (!files?.length) {
      notification$.next({
        message: 'Images empty.',
        type: 'error',
      })
      return []
    }

    setUploading(true)

    const uploadTasks = Array.from(files).map((file: any) => {
      console.log('file name ', file.name, file)
      const storageRef = ref(storage, `/files/${file.name}`)
      const uploadTask = uploadBytesResumable(storageRef, file)

      return new Promise<string>((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const percent = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
            )
            setPercent(percent)
          },
          reject,
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(resolve).catch(reject)
          },
        )
      })
    })

    try {
      const imageUrls = await Promise.all(uploadTasks)
      notification$.next({ message: `Image uploaded.` })
      setUploading(false)
      return imageUrls
    } catch (err) {
      console.log(err)
      setUploading(false)
      return []
    }
  }

  return [{ uploading, percent }, handleUpload] as const
}

type SetValue<T> = (value: T | ((val: T) => T)) => void

export const useLocalStorage = <T>(
  key: string,
  initialValue?: T,
): [T, SetValue<T>] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue: SetValue<T> = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}
