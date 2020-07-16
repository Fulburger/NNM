//NNM PROJECT
//Player movement test

//===================================================
// TEST TERRAIN FOR COLISION AND PLAYER MOVEMENT
//===================================================


//}
var x = 0;
var y = 0;
var sprite = 0;
window.onload = function() {
  var joueur = document.getElementById("player");
  var joueur1 = document.getElementById("player1");
  const player = document.getElementById("joueurimg");
  const ctx001 = player.getContext("2d");
  ctx001.drawImage(joueur1,x,y,30,30);
  var id = setInterval(frame, 500);
  function frame() {
  if (sprite == 1) {
      ctx001.clearRect(x,y,30,30);
      ctx001.drawImage(joueur,x,y,30,30);
      sprite = 0;
    } else {
      ctx001.clearRect(x,y,30,30);
      ctx001.drawImage(joueur1,x,y,30,30);
      sprite = 1;
    }
  }
}
document.onkeydown = function(event)
	{
		if (event.keyCode == 37)  gauche();
		if (event.keyCode == 39) droite() ;
		if (event.keyCode == 38) haut();
		if (event.keyCode == 40) bas() ;
	} // fin fonction
function droite() {
 x++;
  var joueur = document.getElementById("player");
  const player = document.getElementById("joueurimg");
  const ctx001 = player.getContext("2d");
  ctx001.clearRect(0,0,30,30);
  ctx001.drawImage(joueur,x,y,30,30);
}
