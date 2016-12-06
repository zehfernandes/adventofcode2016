import MD5 from './MD5'

const firstAnswer = (input) => {
  let code  = ""
  let count = 0
  let i = 0 //Performance option

  while (i < 8) {
    const hash = `${input}${count}`
    const md5 = MD5(hash)

    if(md5.substring(0,5) === "00000") {
      let char = md5.charAt(5)
      code += char

      i++
    }

    count++
  }

  return code

}

const secondAnswer = (input) => {
  let code  = [0,0,0,0,0,0,0,0]
  let count = 0
  let i = 0

  while (i < 8) {
    const hash = `${input}${count}`
    const md5 = MD5(hash)

    if(md5.substring(0,5) === "00000") {
      let position = parseInt(md5.charAt(5))
      console.log(position)
      if (position <= 7) {
        let char = md5.charAt(6)
        code[position] = char

        i++
      }
    }

    count++
  }

  formatCode = ""
  code.map((n) =>{ formatCode += n })

  return formatCode

}

module.exports = {
  firstAnswer: firstAnswer,
  secondAnswer: secondAnswer,
}
