// METODO FOREACH
/*var clase = [
  {

  nombre : 'jorge',
  edad: 18,
  alturacm : 200
},

{
  nombre : 'yeray',
  edad: 18,
  alturacm : 150
},
{
  nombre : 'Alvaro',
  edad: 18,
  alturacm : 300
} ]

clase.forEach (function(obj) {

  if (obj.edad == 18) {obj.edad = 24}

  console.log(clase)
}
)


var numbers = [1,12,4,18,9,7,11,3,101,5,6];

var strings = ['this','is','a','collection','of','words'];

var students = [{name : 'Luis', email : 'luis@reboot' }, {name : 'Luigi', email : 'luigi@reboot' } ];


numbers.forEach(function(item, index) {

 

  var jorge = numbers[item];


  console.log('El número de la posicion ' + index + ' es ' +  item)


})




strings.forEach(function(item, index) {

  console.log('El número de la posicion ' + index + ' es ' +  item)

})


students.forEach(function(item, index) {



  console.log('El número de la posicion ' + index + ' es ' +  item.name)

})*/


//METODO MAP

var numbers = [1,12,4,18,9,7,11,3,101,5,6];

var strings = ['this','is','a','collection','of','words'];

var students = [{name : 'Luis', email : 'luis@reboot' }, {name : 'Luigi', email : 'luigi@reboot' } ];


let arrNumbers = numbers.map(function(element) {
  return element ** 2;
})

console.log(arrNumbers);



let arrStr = strings.map(function(element){
  return element.toUpperCase()
})
console.log(arrStr);


let arrStd = students.map(function(element){
  return element.email;
})
console.log(arrStd)

