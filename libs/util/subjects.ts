import { Subject } from 'rxjs'
import { NotificationType } from '@billboards-org/types'

export const notification$ = new Subject<Omit<NotificationType, 'id'>>()
