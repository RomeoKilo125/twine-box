const array = new Array(10)

for (let i = 0; i < array.length; i++) {
  array[i] = new Array(10).fill(null)
}

const id = 'test'
const x = 3
const y = 2
const w = 5
const h = 5

for (let r = y; r < y + h; r++) {
  for (let c = x; c < x + w; c++) {
    console.log(id + ' ' + c + ' ' + r + ' ' + array[r][c])
    if (!array[r][c]) {
      array[r][c] = id
    } else {
      array[r][c] = 'x'
    }
    console.log(array[r][c])
  }
}

console.table(array)
