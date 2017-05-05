function quitaArticulos(palabra) {
  return palabra.replace("DEL ", "").replace("LAS ", "").replace("DE ",
  "").replace("LA ", "").replace("Y ", "").replace("A ", "");
}

function esVocal(letra) {
  if (letra == 'A' || letra == 'E' || letra == 'I' || letra == 'O'
  || letra == 'U' || letra == 'a' || letra == 'e' || letra == 'i'
  || letra == 'o' || letra == 'u')
  return true;
  else
  return false;
}

function calculaRFC(pNombre,pApellidoPaterno,pApellidoMaterno,pFecha) {
  var nombre =pNombre.val().toUpperCase();
  var apellidoPaterno = pApellidoPaterno.val().toUpperCase();
  var apellidoMaterno = pApellidoMaterno.val().toUpperCase();
  var fecha = pFecha.val();

  var rfc = "";
  apellidoPaterno = quitaArticulos(apellidoPaterno);
  apellidoMaterno = quitaArticulos(apellidoMaterno);
  rfc += apellidoPaterno.substr(0, 1);
  var l = apellidoPaterno.length;
  if(esVocal(apellidoPaterno[0]))
  {
    apellidoPaterno=apellidoPaterno.substr(1,l);
  }
  var c;
  for (i = 0; i < l; i++) {
    c = apellidoPaterno.charAt(i);
    if (esVocal(c)) {
      rfc += c;
      break;
    }
  }

  rfc += apellidoMaterno.substr(0, 1);
  rfc += nombre.substr(0, 1);
  rfc += fecha.substr(8, 10);
  rfc += fecha.substr(3, 5).substr(0, 2);
  rfc += fecha.substr(0, 2);

  return rfc;
}
