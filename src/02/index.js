let walk
let move = {
    "L": {x:-1, y:0},
    "R": {x:1, y:0},
    "U": {x:0, y:-1},
    "D": {x:0, y:1}
}

const firstAnswer = (input) => {
  const keypad = [ // 0 // 1 // 2
        [1,2,3], // 0
        [4,5,6], // 1
        [7,8,9], // 2
  ]

  walk = { x:1, y:1 }

  return moveAtKeypad(input, keypad)

}


const secondAnswer = (input) => {
  const n = null
  const keypad = [
        [n,  n ,  1 ,  n , n],
        [n,  2 ,  3 ,  4 , n],
        [5,  6 ,  7 ,  8 , 9],
        [n, "A", "B", "C", n],
        [n,  n , "D",  n , n],
  ]

  walk = { x:0, y:2 }
  moveAtKeypad(input, keypad)

  return moveAtKeypad(input, keypad)
}

const moveAtKeypad = (data, keypad) => {
  let bathroomCode = ""
	let instructions = data.split('\n')
	for (var i = 0; i < instructions.length; i++) {

    const string = instructions[i]

		for (var d = 0; d < string.length; d++) {
			let direction = string.charAt(d);

			walk.x = walk.x + move[direction].x
    	walk.y = walk.y + move[direction].y

    	if(walk.y > keypad.length-1) {
    		walk.y = keypad.length-1
    		continue
    	} else if(walk.y < 0) {
    		walk.y = 0
    		continue
    	}

    	if(walk.x > keypad.length-1) {
    		walk.x = keypad.length-1
    		continue
    	} else if(walk.x < 0) {
    		walk.x = 0
    		continue
    	}

    	if(keypad[walk.y][walk.x] === null) {
    		walk.x = walk.x - move[direction].x
    		walk.y = walk.y - move[direction].y
    	}

    }

    bathroomCode += keypad[walk.y][walk.x]

	}

  return bathroomCode

}

module.exports = {
  firstAnswer: firstAnswer,
  secondAnswer: secondAnswer,
}
