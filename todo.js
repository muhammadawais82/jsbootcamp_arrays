//const todo = ['study', 'classes', 'teaching', 'working', 'playing']

// console.log(`you have ${todo.length} properties`)
// console.log(`todo's: ${todo[0]}`)
// console.log(`todo's: ${todo[todo.length - 2]}`)

// todo.push('buy coffee');
// todo.splice(2,1)
// todo.shift()

// todo.forEach(function(item, index){
//     const num = index + 1
//     console.log(`${num}. ${item}`)
// })
// console.log(todo)

// for(let count = 0; count<todo.length;count++){
//     const num = count + 1
//     const todos = todo[count]
//     console.log(`${num}. ${todos}`)
// }
const todo = [{
    text: 'order cat food',
    completed: true
},
{
    text: 'Clean Kitchen',
    completed: false
},{
    text: 'Buy food',
    completed: true
},{
    text: 'Do work',
    completed: false
},{
    text: 'Exercise',
    completed: true
}]

const deleteTodo = function(todo, todoText){
    const index = todo.findIndex(function (todo){
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })

    if(index > -1){
        todo.splice(index, 1)
    }

}
deleteTodo(todo, 'buy food')
console.log(todo);
