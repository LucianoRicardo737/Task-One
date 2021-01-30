// Given an array of arrays return the top 3 most repeated items in them.
// Input: [ [11], [11, 85, 86, 25, 88, 33], [25,33], [11, 25]]
// Output: [11, 25, 33]

//array integro
let input = [ [11], [11, 85, 86, 25, 88, 33], [25,33], [11, 25]];

//concatenando para comparar
let inputConcat = input.flat();

//botón ejecutar función 
let go = document.getElementById('go');

//div donde se imprime el resultado
let output = document.getElementById('output');

const result = () =>{

let count = {};

//identificar cantidades de repeticiones
inputConcat.map((value)=>{
( count[value] = (count[value] || 0)+1); 
});

//pasando objecto a array
let toArray = Object.keys(count);

//filtrado de los 3 primeros
let filter = toArray.splice(0,3);

//print en index.html
output.innerHTML=`<p>Open the console please :)</p>
<br>
${filter}
`;
console.log(filter);
}

go.addEventListener('click', result);

//Me fue indispensable tener conexión a internet.