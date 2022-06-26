// Al seleccionar una cuenta, debes ingresar el password asociado a la cuenta. Si el password es incorrecto, debes notificar al usuario y permitirle intentarlo nuevamente. Si el password es correcto, debes mostrar las siguientes opciones:

// Consultar saldo
// Ingresar monto
// Retirar Monto

// Al seleccionar consultar saldo, debe mostrar en pantalla el saldo actual de la cuenta

// Al seleccionar ingresar monto, el usuario debe escribir el monto a ingresar. Al ingresar el monto, debe mostrarle al usuario el monto ingresado y el nuevo saldo total.

// Al seleccionar retirar monto, el usuario debe escribir el monto a retirar. Al retirar el monto, debe mostrarle al usuario el monto retirado y el nuevo saldo total.

// Como regla de negocio, una cuenta no debe de tener más de $990 y menos de $10. Es necesario hacer las validaciones pertinentes para que no se rompa esta regla de negocio.
let  cuentas = [
    { nombre: 'Mali', saldo: 200, password: 123},
    { nombre: 'Gera', saldo: 290, password: 1234},
    { nombre: 'Maui', saldo: 67, password: 12345}
  ];
  var saldoMali = 200;
  var saldoGera = 290;
  var saldoMaui = 67;
  

function login(form){ 
    
    const usuario =form.usuario.value 
    const password =form.password.value

        if ("Mali" === usuario && "123" === password){
            alert ("Bienvenido Mali");
           location.href="index.html";

        } else if ("Gera" === usuario && "1234" === password){
            alert ("Bienvenido Gera");
            location.href="index2.html";

        } else if ("Maui" === usuario && "12345" === password){
            alert ("Bienvenido Maui");
            location.href="index3.html";

         } else {
            alert ("Ingreso mal la cuenta o la contraseña, intente de nuevo gracias.");
         }
            
        

}
  function saldoMali()  {
   
    document.getElementById("saldoMali").innerHTML = saldoMali;
  }   
  function depositarMali()  {
    
    var deposito = parseInt(prompt("Escribe la cantida a depositar"));
    
    saldoMali = saldoMali + deposito ;
    
    document.getElementById("saldoMali").innerHTML = saldoMali;
  }   

  function retiroMali()  {
    
    var retiro = parseInt(prompt("Escribe la cantida a retirar"));

    if ( retiro  > saldoMali  ){
        alert("saldo insuficiente")

    } else {
        saldoMali = saldoMali - retiro  ;
        document.getElementById("saldoMali").innerHTML = saldoMali;
    }


  }  
  

function saldoGera()  {
 
  document.getElementById("saldoGera").innerHTML = saldoGera;
}   
function depositarGera()  {
  
  var deposito = parseInt(prompt("Escribe la cantida a depositar"));
  saldoGera = saldoGera + deposito;
  document.getElementById("saldoGera").innerHTML = saldoGera;
}   

function retiroGera()  {
  
  var retiro = parseInt(prompt("Escribe la cantida a retirar"));

  if (retiro > saldoGera) {
      alert("saldo insuficiente")
  } else {
      saldoGera = saldoGera - retiro ;
      document.getElementById("saldoGera").innerHTML = saldoGera;
  }


} 

function saldoMaui()  {
 
  document.getElementById("saldoGera").innerHTML = saldoMaui;
}   
function depositarMaui()  {
  
  var deposito = parseInt(prompt("Escribe la cantida a depositar"));
  saldoMaui = saldoMaui + deposito;
  document.getElementById("saldoMaui").innerHTML = saldoMaui;
}   

function retiroMaui()  {
  
  var retiro = parseInt(prompt("Escribe la cantida a retirar"));

  if (retiro > saldoMaui) {
      alert("saldo insuficiente")
  } else {
      saldoMaui = saldoMaui - retiro ;
      document.getElementById("saldoMaui").innerHTML = saldoMaui;
  }


}
 
// Que te lleve a la otra página e identificar y guardar la cuenta con la que estamos iniciando sesión, en la otra página necesitamos saber el usuario que inició sesión