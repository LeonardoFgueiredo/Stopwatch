
//Definindo as variáves de tempo
var segundo = 0;
var minuto  = 0;
var hora 	= 0;

//variavel global de tempo
var tempo;
var tempo1;
var tempo2;

//Temporizador com o disparo contínuo
function Iniciar(){
    tempo = setInterval(function segundos() {
		segundo++;
		//definindo a contagem de segundos
		document.getElementById("segundo").innerHTML = segundo;

		//virando o minuto
		if(segundo == 59){
			segundo = 0 ;
			tempo1  = setTimeout(function minutos() {
				minuto++;
				//definindo a contagem de minutos
				document.getElementById("minuto").innerHTML = minuto;
			}, 1000);
		}
			//virando a hora
			if(minuto == 59 && segundo == 59){
				segundo = 0;
				minuto  = 0;
				tempo2  = setTimeout(function horas() {
					hora++;
					//definindo a contagem de horas
					document.getElementById("hora").innerHTML = hora;
					//zerando os minutos
					document.getElementById("minuto").innerHTML = minuto;
				}, 1000);
				
			}		
	}, 1000);
}

//Clear no temporizador
function Parar(){
	clearInterval(tempo);
	clearInterval(tempo1);
	clearInterval(tempo2);

}