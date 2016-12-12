const checkABBA = (ip) => {
  const bracketTLS = /(([a-z])([a-z](?!\2))\3\2)+(?=[^[]*])/
  const offBrackts = /(([a-z])([a-z](?!\2))\3\2)/

  if(bracketTLS.test(ip)) {
    return false
  }

  if(offBrackts.test(ip)) {
    return true
  }

  return false

}

const checkSSL = (ip) => {
  const outside = /(([a-z])((?!\2)[a-z])\2)+(?![^[]*])/g
  const inside = /(\[\w*\])/g

  let content = ip.match(inside)
  let patterns = []
  let isSLL = false

  //Resolve overlap
  let match
  let regex = new RegExp(outside, "g")

  while(match = regex.exec(ip)) {
    patterns.push(match[0]);
    regex.lastIndex = match.index+1;
  }

  patterns.forEach((chars) => {
    let first = chars.charAt(1)
    let check = `${first}${chars.charAt(0)}${first}`

    let regex = new RegExp(check, "g")

    content.forEach((item) => {
      if(regex.test(item)) {
        isSLL = true
      }
    })

  })

  return isSLL

}

const firstAnswer = (input) => {

  const ips = input.split('\n')
  let count = 0

  ips.forEach((ip) => {
    let isABBA = checkABBA(ip)
    if (isABBA) {
      count++
    }
  })

  return count

}

const secondAnswer = (input) => {

  const ips = input.split('\n')
  let count = 0

  ips.forEach((ip) => {
    let isSLL = checkSSL(ip)
    if (isSLL) {
      count++
    }
  })

  return count

}

module.exports = { firstAnswer, secondAnswer, checkABBA, checkSSL }
