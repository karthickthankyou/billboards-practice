import { useFormContext, useWatch } from 'react-hook-form'

import { searchFormAdapter } from '../adapters/searchFormAdapter'

import { useEffect, useState } from 'react'
import { useDebouncedValue } from '@billboards-org/hooks/src/async'

import { SearchBillboardFormType } from '../searchBillboards'
import { SearchBillboardsQueryVariables } from '@billboards-org/network/src/generated'

const useConvertSearchFormToVariables = () => {
  const [variables, setVariables] = useState<SearchBillboardsQueryVariables>(
    () => ({
      locationFilter: { nw_lat: 0, nw_lng: 0, se_lat: 0, se_lng: 0 },
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

export { useConvertSearchFormToVariables }
