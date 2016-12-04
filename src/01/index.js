const firstAnswer = (input) => {

  const result = walk(input)
  return result.firstAnswer

}
const secondAnswer = (input) => {

  const result = walk(input)
  return result.secondAnswer

}

const walk = (input) => {

	let direction = 0
	let walk = {x: 0, y:0}
	let logging = new Set()
	let answer2 = 0

	let instructions = input.split(", ");
	for (var i = 0; i < instructions.length; i++) {

		let m = /([L|R])(\d+)/.exec(instructions[i])
      	let l = m[1]
      	let block = parseInt(m[2])

		if(l  === "L") {
			direction = direction -1
		} else if( l === "R") {
			direction = direction + 1
		}

		if(direction<0) direction = 3;
    	if(direction>3) direction = 0;

    	for(var k = 0; k < block; k++) {

			if(direction == 0){
				walk.y = walk.y + 1
			}
			if(direction == 1){
				walk.x = walk.x + 1
			}
			if(direction == 2){
				walk.y = walk.y - 1
			}
			if(direction == 3){
				walk.x = walk.x - 1
			}

			let key = `${walk.x},${walk.y}`;

			if( logging.has(key) && answer2 == 0) {
          answer2 = Math.abs(walk.x) + Math.abs(walk.y);
      }

      logging.add(key)

    }

	}

	return {
    firstAnswer: Math.abs(walk.x) + Math.abs(walk.y),
    secondAnswer: answer2
  }

}

module.exports = {
  firstAnswer: firstAnswer,
  secondAnswer: secondAnswer,
}
