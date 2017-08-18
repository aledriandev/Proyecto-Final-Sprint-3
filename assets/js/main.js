var start = document.getElementById('start-button');
var menu = document.getElementById('menu');
var level_1 = document.getElementById('level-1');
var tableros = document.createElement('div');
var x; //Posicion actual x
var y; //Posicion actual y
var filas; // filas del mapa
var columnas; // columnas del mapa
var arrayMapa = [];
var tabla;
var level = 0; //contador de niveles, para que cambie de mapa
level_1.appendChild(tableros);

var map1 = [" * * * * * * * * * * * * * * * * * * * * ",
    " * *           * * *             * *   * ",
    " * *             W                 *   * ",
    " *                           *     *   * ",
    " *         *                       *   * ",
    " *   * * * *             *         *   * ",
    " *     *     * *       *   *       *   * ",
    " *   * I o   * *         *   * * * *   * ",
    " *     *     * *   * *  **           I * ",
    " *   *          *        *         * * * ",
    " *           * ***   *   *     *   * * * ",
    " *       *      *        * *       * * * ",
    " *     * *             ***         * * * ",
    " * *   *           *     *         *   * ",
    " *     *   *      *      *     *       * ",
    " * *        *     *      *         *   * ",
    " * * * * * * * * * * * * * * * * * * * * "];
var map2 = [" * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ",
    " * *                                 *             * * * * ",
    " * *   *                             *       *       * * * ",
    " *   *   *            *              *     * *     *     * ",
    " *         *           * *           * * *       *   *   * ",
    " *     * *       *           *       *   *     *     *   * ",
    " *   *                       *       *   *   *       *   * ",
    " * *                             *   *   I          W* * * ",
    " * *              **     * *                             * ",
    " * *             *     I           *                     * ",
    " *               *   *         *                     *   * ",
    " *   *   *     *       *   *                             * ",
    " *     *                             *                   * ",
    " *       * *        *    *   *     * * *           *     * ",
    " *       * *                         *     *       *     * ",
    " * *             *       *       *                       * ",
    " *       *     *       *   * *     *     *   * *         * ",
    " *     *           *  o*   * *   *   *       * * *       * ",
    " * * *      *          * *         *   *             * * * ",
    " * * * * * * * * * * * * * * * * * * * * * * * * * * * * * "];
var map3 = [" * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ",
    " * * * * * * * * * * *                                           ",
    " *       *  *  *       * *                                W*     ",
    " *               *     * * *           *                   I     ",
    " * *       *               * *                                   ",
    " *    *    * *   I           * *         *   *                   ",
    " *                   ****      * * * *   *     *         *       ",
    " *         *                 *           *   *                   ",
    " *       *                 *   *                                 ",
    " *         *   *         *       *   *                           ",
    " *             *         *                                       ",
    " * *                ** *                                   *     ",
    " *                **         * *                                 ",
    " *  **   *   *  **                     * *                 * *   ",
    " * *   *   *   *       * *                   * *           * *   ",
    " *                                         *   *                 ",
    " *               *     *               ***   * *                 ",
    " *             *               *                                 ",
    " *                       *         * *                           ",
    " *o  *       *           *       * *                           * ",
    " * * *           *                                         *     ",
    " * * * *                                  *                *     ",
    " * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * "];
var map4 = ["                                                                 ",
    " *   o       * **  ** *                                  *****    ",
    "    *                                                        *    ",
    "    *           **                                           *    ",
    "   ** **************         **             ****             *    ",
    "   **          *           * *                              I*  * ",
    "   **                                        *                    ",
    "   *****************                         ****                 ",
    "       *************                                              ",
    "     ***************   *   W                                      ",
    "            ** **      **  **                                     ",
    "                      *    **                                     ",
    "  *                  *******                                      ",
    "   *****            **                                      W     ",
    "   ***        **  **          *                            ***    ",
    " **************************************************************** ",
    "   I  **       *           * *                             ***    ",
    " *            *                    ** * * * *       *      ***    ",
    "               *        *                           *       *     ",
    "    *                  ** *                         *    W        ",
    " *  **                  *           *             *               ",
    " *  ****                   *                 *    *          ***  ",
    " *  *******                *                ****  **              ",
    " *  ****                  **                ***   ****            ",
    " *  ***       *         W                   *****     *******     ",
    " **  *        **    *                        ***  ***********     ",
    " **    **                                    ****************     ",
    " **     ** *****       *  *****                 **                ",
    "           *    * ** **    ****                   *               ",
    " ** W****************    * ****                    *      ******* ",
    "                                                                  "];
var map5 = ["                                                                 ",
    "                                W                     W          ",
    "         *                                       *               ",
    "   *                    *                            *           ",
    "                                              *                  ",
    "                                                  *        *     ",
    "   *                         W            *         *            ",
    "          *                                    *            *    ",
    "                                      *                      *   ",
    "                                           *                  I  ",
    "         *                             *                       W ",
    "  *            *       *                                         ",
    "                                                                 ",
    "                                                   *             ",
    "    *               **W*************W********             *      ",
    "          *         *                       *                    ",
    "                    *   ******W**********   *                  * ",
    "                    *   *               *   *       *            ",
    "                    *   *   **********  *   W                    ",
    "                    *   W   *        *  *   *                    ",
    "         *          *   *   *        I  *   *                    ",
    "   *                *   *   ******** *  *   *    W               ",
    "                    *   *            *  W   *        *           ",
    "                    *   **************  *   W               ***  ",
    "          *         *                   *   *               **   ",
    "     *              *********************   *        *           ",
    "          *                                 *        *        W  ",
    "  *                                         *        *        *  ",
    "      *       ***W*********W****W****W*******        *******  *  ",
    " o *                                                             ",
    "                                                                 "] ;
var map6 = [  "                                                 ",
    "                                                 ",
    "                                                 ",
    "       **o        ***                **W         ",
    "                  ***                 *          ",
    "                  *              *               ",
    "                  *                     *        ",
    "     *  *                     *   *     *        ",
    "      * *                    **** *              ",
    "      *                                 *        ",
    "                                       **        ",
    "                         **            **        ",
    "                          *                      ",
    "              ** *       ***                     ",
    "              ***                                ",
    "              **                  **             ",
    "       **                         **             ",
    "       **                         *              ",
    "         *            **                         ",
    "                     ***                         ",
    "                    * **                         ",
    "                                                 ",
    "                                                 "];

var mapas = [map1, map2, map3, map4, map5, map6]; //contenedor de mapas
var mapa = [];

function selectLevel(){

}

function generaMapa(){
	mapa = mapas[level];
	for (var i = 0; i < mapa.length; i++) {
	  for (var j = 0; j < mapa[i].length; j++) {
	    var M= mapa[i].split("");
	  }
	  arrayMapa.push(M);
	}

	filas = mapa.length;
	columnas = mapa[0].length;

	tabla = document.createElement('table');
	tabla.border = "0";
	for (var i = 0; i < filas; i++) {
	  var fila = document.createElement('tr');
	  for (var j = 0; j < columnas; j++) {
	    var celda = document.createElement('td');
	    if (mapa[i][j] == "*") {
	      celda.setAttribute('class', 'pared');
	    }else if(mapa[i][j] == "o") {
	      celda.setAttribute('class','inicio')
	      x = i;
	      y = j;
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

}

start.addEventListener('click',play);

function play(){
	menu.style.display = "none";
	generaMapa();
}


//keycode de las teclas
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var t = null;
//evento 
document.addEventListener("keydown", movimiento);

function mover(a,b){
	
	if(mapa[x+a][y+b] != "*"){      	
	    if ( x != 0 || y != 0 || x != filas -1 || y != columnas-1){
	      arrayMapa[x+a][y+b].style.backgroundColor = "red";
	      arrayMapa[x][y].style.background = 'none';

		    if( mapa[x+a][y+b]=="W" ){
		      alert("Ganaste...!");
		      level++;
		      tableros.removeChild(tabla);
		      generaMapa();
		    }
		    x=x+a;
		    y=y+b;

			t = setTimeout(function(){ mover(a, b) }, 150);
	    }
	    if( x == 0 || y == 0 || x == filas -1 || y == columnas-1){
	        clearTimeout(t);

	    	tableros.removeChild(tabla);
		    generaMapa();
	    }

	} else {
		 clearTimeout(t);
	}
}


function movimiento(evento)
{

	evento.preventDefault();
	
	var tt = setTimeout ( function () {
	  switch(evento.keyCode)
	      {
	    case teclas.UP:
	    	mover(-1, 0);	
	    	
	        break;
	    case teclas.DOWN:
	    	mover(1, 0);	
	    	
	        break;
	    case teclas.LEFT:
	    	 mover(0, -1);		
	    	  
	        break;
	    case teclas.RIGHT:
	    	mover(0, 1);
	    	
	      	break;
	 	}
	}, 200);
}



document.getElementById('level-button').addEventListener('click',levelMap);
//document.getElementById('btnLevel').addEventListener('click',seleccionNiveles);
var espacioTablero = document.getElementById('tablero');
var levelEs= document.createElement('div');
	levelEs.setAttribute('id','espacioLevel');
	espacioTablero.appendChild(levelEs);
	levelEs.style.display = "none";
var inputLevel = document.createElement('input');
	inputLevel.setAttribute('id','inputEspacio');
	inputLevel.setAttribute('placeholder',"1-5");
	inputLevel.setAttribute('min',"0");
	inputLevel.setAttribute('max',"5");

	inputLevel.setAttribute('type','number');
var botonLevel =  document.createElement('button');
	botonLevel.setAttribute('id','btnLevel');
	botonLevel.innerHTML = "Level"
	levelEs.appendChild(inputLevel) ;
	levelEs.appendChild(botonLevel);

function levelMap(){
	menu.style.display = "none";
	levelEs.style.display = "block";
}
