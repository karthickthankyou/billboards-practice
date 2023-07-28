export const getYesterday = () => {
  const today = new Date()
  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday
}

export const toLocalISOString = (date: Date): string => {
  const tzoffset = date.getTimezoneOffset() * 60000 // offset in milliseconds
  const localISOTime = new Date(date.getTime() - tzoffset).toISOString()
  // .slice(0, -1)

  return localISOTime
}
export const makeId = (length: number = 4) => {
  var result = ''
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}
