import MD5 from './MD5'

const firstAnswer = (input) => {
  let code  = ""
  let count = 0

  while (code.length < 8) {
    const hash = `${input}${count}`
    const md5 = MD5(hash)

    if(md5.substring(0,5) === "00000") {
      let char = md5.charAt(5)
      code += char
    }

    count++
  }

  return code

}

const secondAnswer = (input) => {

}

module.exports = {
  firstAnswer: firstAnswer,
  secondAnswer: secondAnswer,
}
