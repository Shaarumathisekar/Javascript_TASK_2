

let cities = ["Mylapore","OMR","Guindy" ]
let uberPrice = [5, 10, 15]
let customerName = prompt("name") 
let customerPlace = prompt("city") 

console.log("Hello", customerName+ ")


function getPrice(customerPlace) {
  
 function uberPrice(customerPlace, index) { 
    
let finalPrice = (uberRates[index]) * baseFee
return finalPrice 
 }
  

console.log(customerPlace, "rate is:", uberPrice(customerPlace, cities.indexOf(customerPlace))) 
  
}

getRate(customerPlace)
