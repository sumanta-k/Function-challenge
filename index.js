// temperature program
// function getCelsius(f){
//   const celsius = ((f-32)*5)/9;
//   return celsius;
// }

//arrow function
const getCelsius =(f)=>{
  const output = ((f-32)*5)/9;
  return output;
};

const ans = getCelsius(50);
console.log(`The temperature is ${ans}\xB0C`);

//second challenge
const minMax=(arr)=>{
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return {min:min,
    max:max};
}
console.log(minMax([1,2,3,4,5,6]));