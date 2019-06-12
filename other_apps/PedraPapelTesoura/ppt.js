/*
0 - Pedra
1 - Papel
2 - Tesoura
*/

var jogadaP1, jogadaIa, pP1 = 0, pIa = 0;

while(pP1 != 2 && pIa != 2){
	jogadaP1 = prompt("Qual sua jogada? (0 - Pedra | 1 - Papel | 2 - Tesoura)");

	jogadaIa = Math.trunc(Math.random() * 3);

	//document.getElementById("jogadaP1").innerHTML = jogadaP1;
	//document.getElementById("jogadaIa").innerHTML = jogadaIa;

	if(jogadaP1==0 && jogadaIa==1){
		//p2 wins
		pIa++;
		document.write("IA wins!");
	}
	else if(jogadaP1==0 && jogadaIa==2){
		//p1 wins
		pP1++;
		document.write("You win!");
	}
	else if(jogadaP1==1 && jogadaIa==0){
		//p1 wins
		pP1++;
		document.write("You win!");
	}
	else if(jogadaP1==1 && jogadaIa==2){
		//p2 wins
		pIa++;
		document.write("IA wins!");
	}
	else if(jogadaP1==2 && jogadaIa==0){
		//p2 wins
		pIa++;
		document.write("IA wins!");
	}
	else if(jogadaP1==2 && jogadaIa==1){
		//p1 wins
		pP1++;
		document.write("You win!");
	}

	else {
		//empate
		document.write("Draw!");	
	}
}

if(pP1 == 2){
	document.write("<br>")
	document.write("Voce ganhou bro!")
}
else{
	document.write("<br>")
	document.write("Perdeu playboy!")
}