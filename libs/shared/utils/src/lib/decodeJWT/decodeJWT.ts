import jwt_decode from 'jwt-decode'

export function decodeJWT(token: string) {
  const decoded = jwt_decode(token)
  return decoded
}
