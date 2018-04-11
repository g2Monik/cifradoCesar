var text = prompt ("Ingresa una frase") // se pide la frase al usuario.

while(text == '' || text.replace(/[^0-9]/g, ' ' ) == text){
  alert('solo se admiten letras');
  var text = prompt('Ingrese la frase a cambiar'); // Si el usuario ingresa otro tipo de dato se le seguira pidiendo una frase valida que solo contenga letras.
}

var process = prompt("Ingrese opción \n 1. Codificar en Cesar \n 2. Decodificar en Cesar"); // se le pregunta al usuario que operacion desea realizar.

while(process == "" || process > 2 || process.replace(/[^a-z]/g, "") ){
  alert('solo puede elegir 1 ó 2');
  process = prompt("Ingrese la opción \n 1. Codificar en Cesar \n 2. Decodificar en Cesar");// Si el usuario ingresa otro tipo de dato se le seguira pidiendo un numero de operacion valido.
}

if (process ==1){ // si la opcion fue 1 se iniciara la funcion cipher.
  alert("Vamos a codificar");
  cipher(text);
} else if (process ==2){ //si la opcion fue 2 se iniciara la funcion decipher.
  alert("Vamos a decodificar");
  decipher (text);
}
