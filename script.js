
const getCelsius = fahrenheit => (fahrenheit - 32) * 5 / 9;


console.log(getCelsius(32)); 
console.log(`The temperature is ${getCelsius(32)} \xB0C`); 


const minMax = arr => ({
    min: Math.min(...arr),
    max: Math.max(...arr)
  });
  
  console.log(minMax([1, 2, 3, 4, 5]));
 

(function(length, width) {
    const area = length * width;
    console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`);
  })(10, 5);
  
 