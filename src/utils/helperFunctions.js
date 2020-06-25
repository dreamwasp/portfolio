export const imageFilter = (arr, fileName) => {
  let newArr = arr.filter(element => {
    if (element.node.base === fileName) return true
  })
  return newArr[0]
}

export const sundowning = boolean => {
  if (boolean) return "🌙"
  else return "☀️"
}
