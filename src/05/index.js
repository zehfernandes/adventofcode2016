import MD5 from './MD5'

const firstAnswer = (input) => {
  let code  = ""
  let count = 0
  let i = 0

  while (i < 8) {
    const hash = `${input}${count}`
    const md5 = MD5(hash)

    if(md5.substring(0,5).localeCompare("00000") === 0) {
      let char = md5.charAt(5)
      code += char

      i++
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
