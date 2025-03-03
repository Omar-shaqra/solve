
let list = [ 1 , 2,  5,"Ban" , 9 , 20 ,18 , 15 , "omar" , "test"];

let numbers = [];
const strings = [];

list.forEach((element)=>{

    if(typeof element === "number"){
        numbers.push(element);
    } else {
        strings.push(element);
    }
})
console.log(numbers)


numbers.sort((a, b) => a - b);
console.log(numbers)
console.log(list)
list = numbers.concat(strings);
console.log(list)
