export const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY'
export const REFRESH_TOKEN_KEY = 'REFRESH_TOKEN_KEY'
export const getStringFromStorageGenerator = (key: string): string | null => {
  let stringFromStorage;
  // @ts-ignore
  stringFromStorage = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null
  return stringFromStorage;
}

export const writeStringToStorageGenerator = (key: string, value: string) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const removeStringFromStorageGenerator = (key: string) => {
  localStorage.removeItem(key)
}

