class Spreadsheet {
  constructor(rows, cols) {
    this.sheet = new Array(rows)
    for (var i = 0; i < this.sheet.length; i++) {
      this.sheet[i] = new Array(cols)
    }
  }

  updateCell(r, c, content) {
    this.sheet[r][c] = content;
  }

  print() {
    this.sheet.forEach((e, i, a) => a[i] = e.join('|'))

    let string = this.sheet.join('\n')

    console.log(string)
  }

}

let mySheet = new Spreadsheet(3, 4)

mySheet.updateCell(0, 0, 'Hello')
mySheet.updateCell(0, 1, 'World')
mySheet.updateCell(1, 2, 'Hi')
mySheet.updateCell(1, 3, 'Jon')
mySheet.updateCell(2, 3, 'Hello')
mySheet.updateCell(2, 4, 'Hello')


mySheet.print()
