export const imageFilter = (arr, fileName) => {
  let newArr = arr.filter(element => {
    console.log(element.node.base, fileName)
    if (element.node.base === fileName) return true
  })
  return newArr[0]
}
