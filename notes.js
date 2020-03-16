const note = ['note 1', 'note 2', 'note 3']

// console.log(note.pop())
// note.push('Welcome for arrays')
// console.log(note.shift())
// note.shift()
// note.unshift('this is my 1st note')

note.splice(1, 1,'this is new 2nd note')

note.forEach(function (item, index) {
    console.log(item)
    console.log(index)
})
console.log(note)

for(let count = 0; count < note.length; count++){
    console.log(note[count])
}