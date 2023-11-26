import aesEncrypt from './AES';


var funcion= "E";
var dato = "56958597768";
var datoEncriptado = "56990205690";
var consumer = ["MCW", "MTV", "WE", "SP", "G*P","SMS", "APP", "APP_2"];
var aplicacion = consumer[5];
var epoch="1687443225423"
key=null; 

    if (funcion === "D") {
      try {
        
        if (datoEncriptado !== null && datoEncriptado !== "" && typeof (datoEncriptado) != 'undefined') {
          console.log("dato antes de intentar desencriptar base64: " + datoEncriptado);
          var datoEncriptado2 = decodeURIComponent(datoEncriptado);
          console.log("dato antes de intentar desencriptar: " + datoEncriptado2)
          console.log("Desencripta con key: " + key);
          console.log("Desencripta con iv: " + iv);
          var decryptedMessage = aesEncrypt(datoEncriptado2, funcion, key, iv);

          var str = decryptedMessage;
          console.log("desencriptado: " + str);

          entrada = datoEncriptado;

          if (!str || str == "" || str == null) str = "No fue posible desencriptar";

          salida = str;
        } else {
          ERROR = 2;
          Trace.info("Error - datoEncriptado no fue informado");
          msg.put("Error", ERROR);
          
        }
      }
      catch (err) {
       console.log("error en caso D es: " + err);
        ERROR = 2;
        //msg.put("Error", ERROR);
        
      }
    } else if (funcion === "E") {
      try {
       
        if (dato !== null && dato !== "" && typeof (dato) != 'undefined') {
          console.log("dato es: " + dato);
          console.log("Encripta con key: " + key);
          console.log("Encripta con iv: " + iv);
          var encrypted = aesEncrypt(dato, funcion, key, iv);
          console.log("encrypted: " + encrypted.toString());
          //msg.put('encryptedMessage', encrypted.toString());

          entrada = dato;
          salida = encrypted.toString();
        } else {
          ERROR = 3;
          Trace.info("Error - dato no fue informado");
          console.log("Error: ", ERROR);
          
        }
      }
      catch (err) {
        console.log("error en caso E es: " + err);
        ERROR = 3;
        //msg.put("Error", ERROR);
        
      }
    } else {
      Trace.error("Finaliza validacion porque funcion no es ni 'E' ni 'D'");
      ERROR = 1;
      msg.put("Error", ERROR);
      
    } 