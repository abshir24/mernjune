// let names = ["John",  "Watson", "221B Baker Street"]

// let userObject = {
//     "firstname" : "John",
//     "lastname" : "Watson",
//     "address": "221B Baker Street"
// }

// console.log(names[0]) // John
// console.log(names[1]) // Watson

// console.log(userObject["firstname"]) // John
// console.log(userObject["lastname"]) // Watson




function sum(number1, number2, number3){
    return number1 + number2 + number3
}

console.log(sum(1,2,3))

// var numbers = [1,2,3]

// console.log( ...numbers )


// console.log( sum( ...numbers ) )





const numbers = [1,2,3];

const [one, two, three] = numbers;
  
// console.log(one, two, three);


async function test(){
    let test = await sum(1,2,3)
}

let test =  async () => {

}