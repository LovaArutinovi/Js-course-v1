let students = [
   {name: 'lova',age: 20,city:'Tbilisi', horoskop: {first: 'lion',last:'fire'}},
   {name: 'luka',age: 23,city:'Tbilisi', horoskop: {first: 'lion',last:'fire'}},
   {name: 'tiko',age: 24,city:'Batumi', horoskop: {first: 'lion',last:'fire'}},
   {name: 'nika',age: 40,city:'Batumi', horoskop: {first: 'fish',last:'water'}},
   {name: 'gio',age: 50,city:'Tbilisi', horoskop: {first: 'fish',last:'water'}}
]



// function getName(name){

//    console.log(name)

// }

// getName('luka')
let filteredStudents = students
   .filter(person => person.horoskop.first === 'lion')
   .filter(person => person.city === 'Tbilisi')
   .map(person => person.name)

console.log(filteredStudents)
// console.log(filteredStudents222)
// console.log(students)

// const wrapper = document.querySelector('body')

// wrapper.innerHTML = filteredStudents


// console.log(students)
//  const wrapper = document.querySelector('body')

// students.forEach(person => console.log(person));


// for (let i = 0; i < students.length; i++){
//    console.log(students[i].name)
// }


// const wrapper = document.querySelector('body')

// for ( person of students){
//    let p  = document.createElement('p')
//    p.innerHTML = `name =  ${person.name}, age = ${person.age}, city = ${person.city}`
//    wrapper.append(p)
// }