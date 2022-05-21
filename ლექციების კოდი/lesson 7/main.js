const btn = document.querySelector('#add');
const card = document.querySelector('.card');

/*----------------------------------- */
// try/catch
try{
   input.onclick = function(){
      alert('hello')
   }
}catch (error){
   console.log(error)
}

console.log(15)


/*----------------------------------- */
// sessionStorage

// sessionStorage.setItem('cardsCount', 1)
// console.log(sessionStorage.getItem('cardsCount'))

/*----------------------------------- */
// localStorage

// let cardsCount = JSON.parse(localStorage.getItem('cardsCount')) ?? 0

// drawCard()

// btn.onclick = function(){
//    cardsCount++
//    drawCard()
// }

// function drawCard(){
//    localStorage.setItem('cardsCount',JSON.stringify(cardsCount))
//    card.innerHTML = cardsCount
// }

/*----------------------------------- */

// reduce example
// let students = [
//    {name: 'lova',age: 20,city:'Tbilisi', horoskop: {first: 'lion',last:'fire'}},
//    {name: 'luka',age: 23,city:'Tbilisi', horoskop: {first: 'lion',last:'fire'}},
//    {name: 'tiko',age: 24,city:'Batumi', horoskop: {first: 'lion',last:'fire'}},
//    {name: 'nika',age: 40,city:'Batumi', horoskop: {first: 'fish',last:'water'}},
//    {name: 'gio',age: 50,city:'Tbilisi', horoskop: {first: 'fish',last:'water'}}
// ]


// let b = students.map(function(element){
//    return element.age
// })
// let agesSum = getSum(b)
// console.log(agesSum)

// function getSum(arr){
//    return arr.reduce(function(accum,item){
//       if(item > 0){
//          return accum + item
//       }
//       return accum
//    },0)
// }


/*----------------------------------- */

// reduce

// const a = [-5,1,2,3,-1,4,5,-4]

// let b = a.reduce(function(accum,item){
//    if(item > 0){
//       console.log(accum , item)
//       return accum + item
//    }
//    return accum
// },0)

// console.log(b)

/*----------------------------------- */

// some

// const a = [1,2,3,4,5,-1]

// let b = a.some(function(item){
//    if(item > 4){
//       return true
//    }
// })

// console.log(b)

/*----------------------------------- */

// every

// const a = [1,2,3,4,5,-1]

// let b = a.every(function(item){
//    if(item > 0){
//       return true
//    }
// })

// console.log(b)