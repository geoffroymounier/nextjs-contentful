const isBrowser = () => !!process.browser
const getWidth = () => {
  return isBrowser() ? window.innerWidth : 0
}
export {getWidth,isBrowser}