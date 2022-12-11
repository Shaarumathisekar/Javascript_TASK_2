//Sum of all odd numbers

const numbers = [8, 19, 5, 6, 14, 9, 13];
const odds = [];
for (const num of numbers) {
  if (num % 2 === 1) {
    odds.push(num);
  }
}
console.log(odds); 

//Sum all numbers in array function not returning the sum

function getSum(ary){
    return ary.reduce(function(sum, value) {
        return sum + value;
    });
}

//prime numbers

function isPrime1(n) {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
    var m = Math.sqrt(n); //returns the square root of the passed value
    for (var i = 2; i <= m; i++)
        if (n % i == 0) return false;
    return true;
}

console.log(isPrime1(7)); //Output: True
console.log(isPrime1(6)); //Output: False

//palindrome

const getAllPalindromes = function (words) {
 return words.filter(function (word) {
    return word.split("").reverse().join("") === word;
  });
};

console.log(getAllPalindromes(["hello", "noon"]));

//remove duplicate in an array
var array = [1,3,2,1,3,4,5,6,7,3,5,6,4,3]
let output = []

function removeDuplicates(array){

for(let item of array){
    
    if(!output.includes(item))
      output.push(item)
}

return output

}
console.log(removeDuplicates(array));


//return median of an array in same size

for (let i = 0, r1 = 0, r2 = 0; i <= half; i++) {
    prev = current;
    if (r1 < nums1.length && r2 < nums2.length) {
      if (nums1[r1] < nums2[r2]) {
        current = nums1[r1++];
      } else {
        current = nums2[r2++];
      }
    } else if (r1 < nums1.length) {
      current = nums1[r1++];
    } else if (r2 < nums2.length) {
      current = nums2[r2++];
    }
  }

  if (prev === undefined) {
    return current;
  }

  if (len % 2 === 0) {
    return (prev + current) / 2;
  }
  return current;
  
////convert all the strings to title caps in a single array in javascript
  
  
function titleCase(str) {
  str.toLowerCase();
  var strAr = str.split(" ");
  for (var i = 0; i < strAr.length; i++) {
    strAr[i].charAt(0).toUpperCase();
  }
  str = strAr.join(" ");
  return str;
}

titleCase("today is a code day");