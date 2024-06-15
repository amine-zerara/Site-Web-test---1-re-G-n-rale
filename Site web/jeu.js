
// Définition des variables
var largeur=500;
var hauteur=350;

//coord du coin en haut à gauche de l'image
var coinX=520; 
var coinY=200; 

// compteur
var compteur=0;

// Generer un nombre aleatoire situe entre 0 et dimension
function creerNombreAleatoire(min,dimension) {
	return Math.floor (min+Math.random() * dimension);
}

// Créer la position de la cible de manière aléatoire
var cible_X=creerNombreAleatoire(coinX,largeur);
var cible_Y=creerNombreAleatoire(coinY,hauteur);


// Calculer la distance entre un evenement de clic et la cible
function calculerDistance(X,Y,cible_X,cible_Y) {
	var diffX = X - cible_X;
	var diffY = Y - cible_Y;
	return Math.sqrt((diffX * diffX) + (diffY * diffY));
}


// Generer une chaine de caracteres correspondant a la distance
function creerIndiceDistance(distance) {
	if (distance < 20) {
		return "Tu brules !";
	} 
	else if (distance < 60) {
		return "Tu chauffes !";
	}
	else if (distance < 100) {
		return "Tu es tiède !";
	}
	else if (distance < 200) {
		return "Tu es froid !";
	}
	else{
		return "Tu gèles !";
	}
}




// gestion de l'affichage
function afficher(){
	
	// position souris
	var souris_X=event.clientX
	var souris_Y=event.clientY
	texte_souris.innerHTML="souris : "+souris_X +"    "+souris_Y
	
	//cible
	texte_cible.innerHTML="cible : " +cible_X+"   "+cible_Y
	
}

// fonction gestion
function gestion(){
	
	//insertion de l'image
	carte.src = "images/micromacro.png";	
	
	// gestion du compteur
	compteur=compteur+1
	texte_compteur.innerHTML="nbr clic : "+compteur;

	//récupération des coord du clic
	var X=event.clientX;
	var Y=event.clientY;
	
	//calculer distance entre clic et cible
	var distance=calculerDistance(X,Y,cible_X,cible_Y);
	texte_distance.innerHTML  = "distance : "+distance;
	
	//convertir distance en un indice
	var indice=creerIndiceDistance(distance);
	texte_indice.innerHTML=indice;
	
	// fin partie
	if (distance<20){
		texte_gagner.innerHTML="Bravo, tu as gagné !";
	}
}




