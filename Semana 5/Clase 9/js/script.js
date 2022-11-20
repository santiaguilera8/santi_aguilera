const dato1 = parseInt(prompt("Ingrese un numero"));
const dato2 = parseInt(prompt("Ingrese otro numero"));
const dato3 = parseInt(prompt("Ingrese otro numero"));

if (dato1 == dato2 && dato1 == dato3) {
   document.write("no seas boludo, cambia los datos");
} 
 else {
    if (dato1>dato2) {
        if (dato1>dato3) {
            document.write("El primer número ingresado es el más grande");
        } else {
            document.write("El tercer número ingresado es el más grande");
        }
    } else {
        if (dato2>dato3) {
            document.write("El segundo número ingresado es el más grande");
        } else {
            document.write("El tercer número ingresado es el más grande");
        }
    }
}


// 

const num = parseInt(prompt("Ingrese un numero"));

if (num % 2 ==0){
    document.write("El número es par")
} else{
    document.write("El número")
}
