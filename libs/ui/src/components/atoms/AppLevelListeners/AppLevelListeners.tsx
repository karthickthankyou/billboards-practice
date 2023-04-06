import { useUserListener } from '@billboards-org/hooks/src/user'
import { useNotification } from '@billboards-org/hooks/src/notifications'

export interface IAppLevelListenersProps {}

export const AppLevelListeners = () => {
  useUserListener()
  useNotification()
  return null
}
