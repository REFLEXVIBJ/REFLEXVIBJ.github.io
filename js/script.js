document.getElementById('jugador').addEventListener("mouseover",sumarPuntos);

puntos = 0;
tiempo = 60;
necesarios = 100;
function sumarPuntos(){
   puntos++;
   document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
   randNum =  Math.round(Math.random()*570);
   randNum2 =  Math.round(Math.random()*1380);
   document.getElementById("jugador").style.marginTop =randNum + "px";
   document.getElementById("jugador").style.marginLeft =randNum2 + "px";
   if (puntos == 100) {
   	alert("Exelente lo lograste");
   }
}


function restarTiempo() {
	tiempo--;
	document.getElementById("Tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: "+tiempo;
	if (tiempo == 0) {
		alert("Fallaste :,c         Suerte la proxima :)");
		tiempo = 0;
		puntos = 0;
	}
}

setInterval(restarTiempo,1000);
