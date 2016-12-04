import caesarShift from './caesarShift.js'

const parseRoom = (roomName) => {
  let object = []

  for (let i = 0; i < roomName.length; i++) {
    let letter = roomName.charAt(i)

    let newLetter = object.some((elem,index) => {
      if (elem.letter === letter) {
        object[index].count++
        return true
      }
    })

    if (!newLetter) object.push({'letter': letter, 'count': 1})

  }

  // Sort array first alpha
  object.sort((a, b) => {
    if (a.count < b.count) return 1
    if (a.count > b.count) return -1
    return a.letter.localeCompare(b.letter)
  })

  return object
}

const isRealRoom = (roomName, checksum) => {
  let roomObject = parseRoom(roomName.replace(/-/g, ''))
  // console.log(roomObject)
  let mirrorSum = ''

  for (let i = 0; i <= 4; i++) {
    mirrorSum += roomObject[i].letter
  }

  // console.log(mirrorSum)
  // console.log(checksum)
  return mirrorSum === checksum.replace(/\[|\]/g, '')

}

const clearRoomData = (input) => {

  const rooms = input.split('\n')
  const regex = /([0a-z\-]+)(\d*)(\[[a-z]*\])/
  let validRooms = []

  rooms.forEach((room) => {

    let decode = regex.exec(room)
    let roomName = decode[1]
    let id = parseInt(decode[2])
    let checksum = decode[3]

    if (isRealRoom(roomName, checksum)) {
      validRooms.push(
        {
          'name': roomName,
          'id': id,
          'checksum': checksum,
        }
      )
    }

  })

  return validRooms

}

const firstAnswer = (input) => {

  const validRooms = clearRoomData(input)
  let sumID = 0

  validRooms.forEach((room) => {
    sumID = sumID + room.id
  })

  return sumID

}

const secondAnswer = (input) => {

  const validRooms = clearRoomData(input)
  let decrypt = []
  let findRoom = ''

  validRooms.forEach((room) => {
    let leg = caesarShift(room.name.replace(/-/g, ' '), room.id)
    decrypt.push([leg, room.id])
  })

  decrypt.map((elem) => {
    if (elem[0].match(/(northpole)/)) {
      findRoom = elem[1]
    }
  })

  return findRoom

}

module.exports = {
  firstAnswer: firstAnswer,
  secondAnswer: secondAnswer,
  isRealRoom: isRealRoom,
}
