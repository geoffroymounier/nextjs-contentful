const isBrowser = () => !!process.browser
const isDev = process.env.NODE_ENV === 'development'
const getWidth = () => {
  return isBrowser() ? window.innerWidth : 0
}
export {getWidth,isBrowser,isDev}