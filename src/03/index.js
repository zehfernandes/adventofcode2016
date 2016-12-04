const groupRowBy = (array, num) => {
  let group = []
  let groupedArray = []

  array.forEach((item) => {
    group.push(item.split(/\s+/).slice(1))

    if (group.length >= num) {
      groupedArray.push(group)
      group = []
    }
  })

  return groupedArray
}

const isValidTriangle = (a,b,c) => {

  let longestSide = Math.max(a,b,c)
  let sumOfAll = parseInt(a) + parseInt(b) + parseInt(c)

  return longestSide < sumOfAll - longestSide

}

const firstAnswer = (input) => {

  const triangles = input.split('\n')
  let validTriangles = 0

  triangles.forEach((triangle) => {

    let sides = triangle.split(/\s+/)

    // console.log(`Triangle ${index}`)
    if (isValidTriangle(sides[1] , sides[2] , sides[3])) {
      validTriangles++
    }
  })

  return validTriangles
}

const secondAnswer = (input) => {

  const triangles = input.split('\n')
  const trianglesGroup = groupRowBy(triangles, 3)
  let validTriangles = 0

  trianglesGroup.forEach((triangle) => {
    for (var i = 0; i <= 2; i++) {
      let a = triangle[0][i]
      let b = triangle[1][i]
      let c = triangle[2][i]

      if (isValidTriangle(a , b , c)) {
        validTriangles++
      }
    }
  })

  return validTriangles
}

module.exports = {
  firstAnswer: firstAnswer,
  secondAnswer: secondAnswer,
}
