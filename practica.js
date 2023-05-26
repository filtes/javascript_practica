

function reto(dato){
    console.log(typeof(dato))

}

reto("Jose");
reto(true);
reto("Reto");
reto(46);
reto([15,58,98,65,32,"maria"])
reto(['Sonia','Rut'])

console.clear(5);
console.log("Dios es Amor")
console.log(98*5)



// function suma(n=5, m=9){
//     console.log(n+m)
// }
// suma(987,654)



// console.log(suma(9,8))

// Funciones con variables

// var suma =function(a,b){
//     var resultado= a + b;

// }


// Función anónima

// const saludo = function(){


// }

// Función Constructora

// let usuario=new function(){


// }

// Funciones tipo flechas

// const func = function(){
//     return "Funcion Tradicional";
// }

// const func = ()=>{
//     return "Funcion Flecha";
// }

console.log( "3 + 7 ")


// 

var nombre;
console.log(nombre)

let apellidos;
const edad=25;

// Con var es variable global
var nombre= 'José Alfredo'
// let apellidos= 'Jordan'  No se puede volver a utilizar con let

console.log(nombre)
console.log(apellidos)

a= (2**10)
console.log(a)
console.log(a**(1/2))


console.log(2+3)
console.log(2-3)
console.log(2*3)
console.log(12/3)
console.log(2%3)
console.log(21%5)


console.log('José '+'María')

// Operador incremento o decremento

var numero =0;
console.log(numero)
console.log(numero+5)
// La variable numero primero hace y luego incrementa
numero++
console.log(numero)
console.log(++numero)
console.log(numero++)
console.log(numero++)

// La variable numero primero incrementa y luego realiza acciones.
console.log(++numero)
// Un solo igual = es asignar un valor
var n=0;
var n = ((n++) + (++n));
console.log(n)

// a+=b
console.log(n+=3)
// a-=b
console.log(n-=2)
// a*=b
console.log(n*=2)
// a+=b
console.log(n/=2)
// a**=b
console.log(n**=5)
// a%=b
console.log(n%=5)

// Operadores de Comparación ==

var v=0;
var v2="0";
console.log(v==v2)

// Comparación mas estricta los tres iguales ===
console.log(v===v2)

// Desigualdades 

console.log(v!=v2)
console.log(v!==v2)

// Negaciones

console.log(!true)
console.log(!false)
console.log(!(a>=10) && (a<=20))

// Operador de disyunción lógico

var a =15
var b =5
//  Operador &&
console.log((a>=10) && (a<=20))
console.log((a>=16) && (a<=20))

console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)


//  Operador ||
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

// Operador unión lógico



// Operador de decisión

if(true){
    console.log('Es Verdad')
}

// NO ejecuta sino es verdadero
if(false){
    console.log('Es falso')
}

if(false){
    console.log('Es Verdad')
    } else if(9!==9){
            console.log('Es igual')
    }else{
        console.log('Es igual')
    }

// Operador Ternario
numero=3;

if(numero%2===0){
    console.log('es par')
}else{
    console.log('es impar')
}
console.log(numero%2==0 ? "par" : "impar")


// Ciclos Repetitivos

for (var i=1; i<=10; i++){
    console.log(i)
}

var array=[65,69,68,57,25,32,24,15,26,39,58,67,45,12,25,26,39,54]
for (var i=0; i<array.length; i++){
    console.log(array[i])
}

for (var i=array.length -1;  i >= 0;  i--){
    console.log(array[i])
}












