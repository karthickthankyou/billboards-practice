export type Role = 'admin' | 'owner' | 'agent' | 'advertiser'

export type GetUserType = {
  uid: string
  displayName: string
  email: string
  emailVerified: boolean
  phoneNumber: string
  roles: Role[]
}
