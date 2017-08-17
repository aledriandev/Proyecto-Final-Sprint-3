var start = document.getElementById('start-button');
var menu = document.getElementById('menu');
var level_1 = document.getElementById('level-1');
var tableros = document.createElement('div');
level_1.appendChild(tableros);
mapa=[  "*************************************************",
		"*_______________________________________________*",
		"*_______________________________________________*",
		"*______**o________***________________**W________*",
		"*_________________***_________________*_________*",
		"*_________________*______________*______________*",
		"*_________________*_____________________*_______*",
		"*____*__*_____________________*___*_____*_______*",
		"*_____*_*____________________****_*_____________*",
		"*_____*_________________________________*_______*",
		"*______________________________________**_______*",
		"*________________________**____________**_______*",
		"*_________________________*_____________________*",
		"*_____________**_*_______***____________________*",
		"*_____________***_______________________________*",
		"*_____________**__________________**____________*",
		"*______**_________________________**____________*",
		"*______**_________________________*_____________*",
		"*________*____________**________________________*",
		"*____________________***________________________*",
		"*___________________*_**________________________*",
		"*_______________________________________________*",

		"*************************************************"];

	var arrayMapa = [];
	for (var i = 0; i < mapa.length; i++) {
	  for (var j = 0; j < mapa[i].length; j++) {
	    var M= mapa[i].split("");
	  }
	  arrayMapa.push(M);
	}

	var n = mapa.length;
	var m = mapa[0].length;

	var tabla = document.createElement('table');
	tabla.border = "0";
	for (var i = 0; i < n; i++) {
	  var fila = document.createElement('tr');
	  for (var j = 0; j < m; j++) {
	    var celda = document.createElement('td');
	    if (mapa[i][j] == "*") {
	      celda.setAttribute('class', 'pared');
	    }else if(mapa[i][j] == "o") {
	      celda.setAttribute('class','inicio')
	      var x = i;
	      var y = j;
	    }else if(mapa[i][j] == "W") {
	      celda.setAttribute('class','final')
	    }else{
	      celda.setAttribute('class','blanco');
	    }
	    fila.appendChild(celda);
	    arrayMapa[i][j] = celda;
	  }
	  tabla.appendChild(fila);
	}
	tableros.appendChild(tabla);

start.addEventListener('click',play);
tableros.style.display = "none";

function play(){
	menu.style.display = "none";
	tableros.style.display = "block";
}


//keycode de las teclas
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

//evento 
document.addEventListener("keydown", movimiento);


//variables constantes


function mover(a,b){
  while(true){
    if (mapa[x+a][y+b]=="_" || mapa[x+a][y+b]=="W" || mapa[x+a][y+b]=="o"){
      arrayMapa[x+a][y+b].style.backgroundImage = "url(assets/img/pelota.png)";
      arrayMapa[x][y].style.background = 'none';

      if( mapa[x+a][y+b]=="W" ){
        alert("Ganaste...!");
      }
      x=x+a;
      y=y+b;
    }
    break;
  }
}

function movimiento(evento)
{
	evento.preventDefault();
  switch(evento.keyCode)
      {
    case teclas.UP:
    	while(mapa[x-1][y] == "_" || mapa[x-1][y]=="W" || mapa[x-1][y]=="o"){
      		mover(-1, 0);	
    	}
        break;
    case teclas.DOWN:
    	while(mapa[x+1][y] == "_" || mapa[x+1][y] == "o"){
    	  	mover(1, 0);	
    	}
        break;
    case teclas.LEFT:
    	while(mapa[x][y-1] == "_"){
    		mover(0, -1);		
    	}  
        break;
    case teclas.RIGHT:
    	while(mapa[x][y+1] == "_"){
      		mover(0, 1);
    	}
      	break;
 	}
}



/*
class Taxi{
	constructor(x,y){
		this.posicion_x = parseInt(x);
		this.posicion_y = parseInt(y);
	}
	right(max){
		(max > this.posicion_y + 1) ? this.posicion_y++ : max-1;
	}
	left(){
		(0 < this.posicion_y) ? this.posicion_y-- : 0;
	}
	up(){
		(0 < this.posicion_x) ? this.posicion_x-- : 0;
	}
	down(max){
		(max > this.posicion_x + 1) ? this.posicion_x++ : max-1;
	}
	coordenadas(){
		console.log(this.posicion_x + " , " + this.posicion_y)
	}
}

class Tablero{
	constructor(x,y,selector,taxi){
		this.tablero = new Array(y);
		for(var i = 0; i < this.tablero.length; i++){
			this.tablero[i] = new Array(x);
			for (var j = 0; j < this.tablero[i].length; j++) {
				this.tablero[i][j] = "empty";
			}
		}
		this.box = document.querySelector(selector);
		this.taxi = taxi;
		this.tablero[taxi.posicion_x][taxi.posicion_y] = "taxi";
	}
	dibujarTablero(){
		var casilla, fila;
		this.box.innerHTML = "";
		for(var i = 0; i < this.tablero.length; i++){
			fila = document.createElement("div");
			fila.classList.add("fila");
			this.box.appendChild(fila);
			for (var j = 0; j < this.tablero[i].length; j++) {
				casilla = document.createElement("div");
				casilla.classList.add(this.tablero[i][j]);
				fila.appendChild(casilla);
			}
		}
	}
	posicionarTaxi(){
		this.tablero[this.taxi.posicion_x][this.taxi.posicion_y] = "taxi";
	}
	posVisitada(){
		this.tablero[this.taxi.posicion_x][this.taxi.posicion_y] = "visitada";
	}
}

function controls(coord_x,coord_y){
	var miTaxi = new Taxi(coord_x,coord_y);
	var x = 10;
	var y = 6;
	var miTablero = new Tablero(x, y, "#tablero", miTaxi);
	miTablero.dibujarTablero();
	
	document.addEventListener("keydown", function(e){
		e.preventDefault();
		if(e.keyCode >= 37 && e.keyCode <= 40){
			miTablero.posVisitada();
			if(e.keyCode == 39){ //right
				console.log("presione derecha");
				miTaxi.right(x);				
			}
			if(e.keyCode == 37){ //left
				miTaxi.left();
			}
			if(e.keyCode == 38){ //up
				miTaxi.up();
			}
			if(e.keyCode == 40){ //down 
				miTaxi.down(y);
			}
			miTaxi.coordenadas();
			miTablero.posicionarTaxi();
			miTablero.dibujarTablero();
		}else{
			return false;
		}
	});
}

document.getElementById("start-button").addEventListener("click", function(e){
	e.preventDefault();
	var x = document.getElementById("coord_x").value;
	var y = document.getElementById("coord_y").value;	
	controls(x,y);
});

*/