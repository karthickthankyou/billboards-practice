import { auth } from '@billboards-org/network/src/config/firebase'
import { useAppDispatch } from '@billboards-org/store'
import { setUser } from '@billboards-org/store/user'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'

interface User {
  uid: string
  email: string
  displayName: string
  roles: string[]
  token: string | undefined
}

type OnUserChangedCallback = (user: User | null) => void

export const useUserListener = () => {
  //   useRefreshToken()
  const dispatch = useAppDispatch()

  useEffect(() => {
    return onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setUser(null)
        return
      }

      const tokenResult = await auth.currentUser?.getIdTokenResult()
      const roles = tokenResult?.claims.roles || []
      const { displayName, email, uid } = user
      dispatch(
        setUser({
          uid,
          email: email || '',
          displayName: displayName || '',
          roles,
          token: tokenResult?.token,
        }),
      )
    })
  }, [setUser])
}

// export const useRefreshToken = () => {
//   const dispatch = useAppDispatch()

//   useEffect(() => {
//     const refreshToken = setInterval(async () => {
//       if (auth.currentUser) {
//         try {
//           const token = await auth.currentUser.getIdToken(true)
//           dispatch(
//             setUser({
//               token,
//             }),
//           )
//         } catch (error) {
//           console.log(error)
//         }
//       }
//     }, 59 * 60 * 1000)

//     return () => clearInterval(refreshToken)
//   }, [dispatch])
// }
