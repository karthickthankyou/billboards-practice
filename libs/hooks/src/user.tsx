import { auth } from '@billboards-org/network/src/config/firebase'
import { useAppDispatch } from '@billboards-org/store'
import { setUser } from '@billboards-org/store/user'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'

export const useUserListener = () => {
  //   useRefreshToken()
  const dispatch = useAppDispatch()

  useEffect(
    () =>
      onAuthStateChanged(auth, async (user) => {
        if (!user) {
          dispatch(setUser({}))
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
      }),
    [],
  )
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
