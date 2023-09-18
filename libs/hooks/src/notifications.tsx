import { useAppDispatch } from '@billboards-org/store'
import {
  removeNotification,
  addNotification,
} from '@billboards-org/store/utils/utilsStore'
import { notification$ } from '@billboards-org/util/subjects'
import { useEffect } from 'react'
import {
  debounceTime,
  distinctUntilChanged,
  map,
  tap,
  catchError,
  EMPTY,
  timer,
} from 'rxjs'
import { makeId } from '@billboards-org/util'
import { delayWhen } from 'rxjs/operators'

export const useNotification = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const subscription = notification$
      .pipe(
        debounceTime(100),
        distinctUntilChanged(),
        map((v) => ({ ...v, id: makeId(12) })),
        tap((v) => {
          dispatch(addNotification(v))
        }),
        delayWhen((v) => timer(v.duration || 4000)),
        tap((v) => {
          dispatch(removeNotification(v.id))
        }),
        catchError((e) => {
          return EMPTY
        }),
      )
      .subscribe()
    return () => {
      subscription.unsubscribe()
    }
  }, [dispatch])
}
