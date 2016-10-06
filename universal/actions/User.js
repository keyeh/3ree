export function login(data) {
  return {
    type: 'USER_LOGGED_IN',
    payload: data
  }
}

export function logout() {
  return {
    type: 'USER_LOGGED_OUT'
  }
}