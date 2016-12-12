const printResult = (array, row) => {

  const rowArray = array.map((elem, index)=>{
    if (elem.row === row) {
      return elem
    }
  })

  rowArray.sort((a, b) => {
    if (a.count < b.count) return -1
    if (a.count > b.count) return 1
  })

  return rowArray[0].letter
}

const firstAnswer = (input) => {

  const messages = input.split('\n')
  const countObject = []

  messages.forEach((msg) => {

    for (var i = 0; i < msg.length; i++) {
      let letter = msg.charAt(i)

      let newLetter = countObject.some((elem,index) => {
        if (elem.letter === letter && elem.row === i) {
          countObject[index].count++
          return true
        }
      })

      if (!newLetter) countObject.push({'row': i, 'letter': letter, 'count': 1})
    }

  })


  let formatCode = ""
  for (var i = 0; i < 8; i++) {
    formatCode += printResult(countObject, i)
  }

  return formatCode

}

const secondAnswer = (input) => {

}

module.exports = { firstAnswer, secondAnswer }
