import fs from 'fs'
import {firstAnswer, secondAnswer} from './04'

fs.readFile('src/04/input.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err)
    return
  }

  console.log(`First Answer: ${firstAnswer(data)}`)
  console.log(`Second Answer: ${secondAnswer(data)}`)

})
