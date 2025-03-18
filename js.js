const o = { x: 42 }

// const arr = []

// arr.push({ x: 42 })
// arr.push({ x: 42 })
// arr.push({ x: 42 })
// arr.push({ x: 42 })
// arr.push({ x: 42 })
// arr.push({ x: 42 })
// arr.push({ x: 42 })
// arr.push({ x: 42 })
// arr.push({ x: 42 })
// arr.push({ x: 42 })

// arr[3].x = 101

// console.log(arr[7].x)

function superFunc(obj) {
  obj.x = 101
}

superFunc(o)

console.log(o.x)
