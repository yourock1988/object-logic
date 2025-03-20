const o = {
  x: 42,
}

const arr = [{ x: 33 }, { x: 42 }, { x: 101 }, { x: 333 }]

function swapNumber(newNumber, oldNumber) {
  return arr.map(n => (n === oldNumber ? newNumber : n))
}

const copyArr = swapNumber({ x: 202 }, arr[2])

copyArr

console.log(copyArr === arr)
