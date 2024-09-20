// src/pages/online/utils.tsx

export const getImageSrc = (imgUrl: string) => {
  //把http的链接换成https
  if (imgUrl.startsWith('http://')) {
    imgUrl = imgUrl.replace('http://', 'https://')
  }
  return `${imgUrl}?param=200y200`
}
