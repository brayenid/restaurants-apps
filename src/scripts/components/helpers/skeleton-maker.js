import '../SkeletonElement'
const makeItemListSkeleton = (number) => {
  let el = ''
  for (let i = 0; i < number; i++) {
    el += `<skeleton-element></skeleton-element>`
  }
  return el
}

export default makeItemListSkeleton
