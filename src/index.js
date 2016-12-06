import fs from 'fs'
import {firstAnswer, secondAnswer} from './05'

fs.readFile('src/05/input.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err)
    return
  }

  //console.time("firstAnswer")
  //console.log(`First Answer: ${firstAnswer(data)}`)
  //console.timeEnd("firstAnswer")

  console.time("secondAnswer")
  console.log(`Second Answer: ${secondAnswer(data)}`)
  console.timeEnd("secondAnswer")

})
