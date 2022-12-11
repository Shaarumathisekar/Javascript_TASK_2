  //Arrow function
  
  // return prime number in an array 
  
var numbers = [1,2,3,4,5]
es6_square = numbers.map(number=>{return number*number})
console.log(es6_square);


//print odd number in an array

var evens = () => {
          return 
		  numbers.filter(n => n % 2 == 0);
        }
		
//sum of all number in an array

 sum = (a, b) => {
  return(a+b)
}
  x= sum(34,87)
  console.log(x)


//palindrome in an array

const getAllPalindromes = (words) => words.filter((word) => word.split("").reverse().join("") === word);
console.log(getAllPalindromes(["hello", "noon"]));

//titleCase

function titleCase(str) {
    str = str.split(' ').map(i =>  i[0].toUpperCase() + i.substr(1).toLowerCase()).join(' ')
    return str;
  }
   console.log(titleCase("today is a good day")); 