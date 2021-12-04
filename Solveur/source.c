#include<stdio.h>
#include<stdlib.h>
#include<stdbool.h>
#include<time.h>
#include<locale.h>

/*void affichertab10(int(*tab)[10], unsigned n, unsigned m)
{
	for (unsigned i = 0; i < n; ++i) {

		for (unsigned j = 0; j < m; ++j) {
			printf(" %d|", tab[i][j]);
		}
		printf_s("\n");
	}
}


int transitiontab6(int(*tab)[6], unsigned n, unsigned m) {
	int tableau1D[36];
	for (unsigned i = 0; i < n; i++) {
		for (unsigned j = 0; j < m; j++) {
			tableau1D[i+j] = tab[i][j];
		}
	}
	return (tableau1D);

}

void affiche_tableau(int* tab, unsigned taille)
{
	for (unsigned i = 0; i < taille; ++i)
		printf("tab[%u] = %d\n", i, tab[i]);
}
*/



// fonction pour afficher un tableau 
void affichertab6(int(*tab)[10], unsigned longueur, unsigned largeur)
{
	printf_s("\n");
	for (unsigned i = 0; i < longueur; ++i) {

		for (unsigned j = 0; j < largeur; ++j) {
			printf(" %d|", tab[i][j]);
		}
		printf_s("\n");
	}
}

//fonction pour trouver la position en x du train 
int recherchetrainx(int(*tab)[10], unsigned  int longueur,unsigned int largeur) {
	int x = 0;
	
	int secu = 0;
	for (unsigned i = 0; i < longueur; ++i) {

		for (unsigned j = 0; j < largeur; ++j) {
			if (tab[i][j] == 7) {
				x = i;
				secu++;
			}
		}
	}
	if (secu == 0) {
		return(EXIT_FAILURE);
	}
	else {
		return(x);
	}
}

// fonction pour trouver la position en y du train 
int recherchetrainy(int(*tab)[10], unsigned longueur, unsigned largeur) {
	
	int y = 0;
	int secu = 0;
	for (unsigned i = 0; i < longueur; ++i) {

		for (unsigned j = 0; j < largeur; ++j) {
			if (tab[i][j] == 7) {
				y = j;
				secu++;
			}
		}
	}
	if (secu == 0) {
		return(EXIT_FAILURE);
	}
	else {
		return(y);
	}
}

int recherchearriveey(int(*tab)[10], unsigned longueur, unsigned largeur) {

	int y = 0;
	int secu = 0;
	for (unsigned i = 0; i < longueur; ++i) {

		for (unsigned j = 0; j < largeur; ++j) {
			if (tab[i][j] == 10) {
				y = j;
				secu++;
			}
		}
	}
	if (secu == 0) {
		return(EXIT_FAILURE);
	}
	else {
		return(y);
	}
}

int recherchearriveex(int(*tab)[10], unsigned longueur, unsigned largeur) {
	int x = 0;

	int secu = 0;
	for (unsigned i = 0; i < longueur; ++i) {

		for (unsigned j = 0; j < largeur; ++j) {
			if (tab[i][j] == 10) {
				x = i;
				secu++;
			}
		}
	}
	if (secu == 0) {
		return(EXIT_FAILURE);
	}
	else {
		return(x);
	}
}

int addsolution(int(*tab)[10], unsigned longueur, unsigned largeur) {
	affichertab6(tab, longueur, largeur);
	return(tab);
}
//fonction pour trouver le sens autour d'une case 
int senstab(int(*tableau)[10], int longueur, int largeur,int x,int y) {
	int sens;
	int test = 0;

	//test sur case dessus 
	if (tableau[x - 1][y] == 5 || tableau[x - 1][y] == 1 || tableau[x - 1][y] == 3 || tableau[x - 1][y] == 10) {
		sens = 3;
		test++;
	}

	//test case à droite 
	if (tableau[x][y + 1] == 2 || tableau[x][y + 1] == 3 || tableau[x][y + 1] == 4 || tableau[x][y + 1] == 10) {
		sens = 1;
		test++;
	}
	//test case à gauche 
	if (tableau[x][y - 1] == 2 || tableau[x][y - 1] == 5 || tableau[x][y - 1] == 6 || tableau[x][y - 1] == 10) {
		sens = 2;
		test++;
	}
	//test case en dessous 
	if (tableau[x + 1][y] == 1 || tableau[x + 1][y] == 4 || tableau[x + 1][y] == 6 || tableau[x + 1][y] == 10) {
		sens = 4;
		test++;
	}

	if (test == 1) {
		return(sens);
	}
	else { return(-1);
	printf_s("vous ne pouvez pas démarrer");
	}
}

int checkmove(int(*tableau)[10], unsigned longueur, unsigned largeur)
{
	
	int x = recherchetrainx(tableau, longueur, largeur);
	int y = recherchetrainy(tableau, longueur, largeur);
	int sens = senstab(tableau, longueur, largeur, x, y);
	int good = 0; 


	int tmp = 0;
	int stop = 0;

	if (sens == -1) {
		stop = 1;
		
		//printf_s("Vous ne pouvez pas demarrer, impossible de savoir ou le train demarre");
	
	}
	
	while (stop == 0) {
		// rail bon au dessus du train 
		if (tableau[x - 1][y] == 5 || tableau[x - 1][y] == 1 || tableau[x - 1][y] == 3 || tableau[x - 1][y] == 10) {
			if (tmp != 5 && tmp != 3 && sens == 3 && tableau[x - 1][y] != -1){
				if (tableau[x - 1][y] == 10) {
					stop = 1;
					//printf_s("Vous avez Reussi");
					good = 1;
				}
				if (tableau[x - 1][y] == 5) {
					sens = 1;
				}
				if (tableau[x - 1][y] == 3) {
					sens = 2;
				}
				if (tableau[x - 1][y] == 1) {
					sens = 3;
				}
				/*tableau[x][y] = tmp;
				tmp = tableau[x - 1][y];
				tableau[x - 1][y] = 7; */
				x = x - 1;


		
			}
		
		}
		// rail bon à droite 
		if (tableau[x][y + 1] == 2 || tableau[x][y + 1] == 3 || tableau[x][y + 1] == 4 || tableau[x][y + 1] == 10) {
			if (tmp != 3 && tmp != 4 && sens == 1 &&tableau[x][y + 1] != -1) {
				if (tableau[x][y + 1] == 10) {
					stop = 1;
					//printf_s("Vous avez Reussi");
					good = 1;
					
				}
				if (tableau[x][y + 1] == 2) {
					sens = 1;
				}
				if (tableau[x][y + 1] == 3) {
					sens = 4;
				}
				if (tableau[x][y + 1] == 4) {
					sens = 3;
				}
				/*tableau[x][y] = tmp;
				tmp = tableau[x][y + 1];
				tableau[x][y + 1] = 7; */
				y = y + 1;

				
			}
			
		}
		// rail bon à gauche 
		if (tableau[x][y - 1] == 2 || tableau[x][y - 1] == 5 || tableau[x][y - 1] == 6 || tableau[x][y - 1] == 10) {
			if (tmp != 5 && tmp != 6 && sens == 2 && tableau[x][y - 1] != -1){
				if (tableau[x][y - 1] == 10) {
					stop = 1;
					//printf_s("Vous avez Reussi");
					good = 1; 
				}
				if (tableau[x][y - 1] == 2) {
					sens = 2;
				}
				if (tableau[x][y - 1] == 5) {
					sens = 4;
				}
				if (tableau[x][y - 1] == 6) {
					sens = 3;
				}
				/*tableau[x][y] = tmp;
				tmp = tableau[x][y - 1];
				tableau[x][y - 1] = 7; */
				y = y - 1;

				
			}
		}

		// rail bon en bas 

		if (tableau[x + 1][y] == 1 || tableau[x + 1][y] == 4 || tableau[x + 1][y] == 6 || tableau[x + 1][y] == 10) {
			if (tmp != 4 && tmp != 6 && sens == 4 && tableau[x + 1][y] != -1) {
				if (tableau[x + 1][y] == 10) {
					stop = 1;
					good = 1; 
					//printf_s("Vous avez Reussi");
				}
				if (tableau[x + 1][y] == 1) {
					sens = 4;
				}
				if (tableau[x + 1][y] == 4) {
					sens = 2;
				}
				if (tableau[x + 1][y] == 6) {
					sens = 1;
				}
				/*tableau[x][y] = tmp;
				tmp = tableau[x + 1][y];
				tableau[x + 1][y] = 7; */
				x = x + 1;

			
			}
		}
		
		//rail mauvais à droite 
		if (good !=1) {


			if (sens == 1) {
				if (tableau[x][y + 1] == 5 || tableau[x][y + 1] == 6 || tableau[x][y + 1] == 1 || tableau[x][y + 1] == -1 || (y + 1) >= largeur) {
					stop = 1;
					good = 0;
					//printf_s("\nmauvais chemin");
				}
			}
			//rail mauvais à gauche 
			if (sens == 2) {
				if (tableau[x][y - 1] == 3 || tableau[x][y - 1] == 4 || tableau[x][y - 1] == 1 || tableau[x][y - 1] == -1 ||(y - 1) < 0) {
					stop = 1;
					good = 0;
					//printf_s("\nmauvais chemin");
				}
			}
			//rail mauvais au dessus
			if (sens == 3) {
				if (tableau[x - 1][y] == 4 || tableau[x - 1][y] == 6 || tableau[x - 1][y] == 2 || tableau[x - 1][y] == -1 || (x - 1) < 0) {
					stop = 1;
					good = 0;
					//printf_s("\nmauvais chemin");
				}
			}
			//rail mauvais en dessous
			if (sens == 4) {
				if (tableau[x + 1][y] == 3 || tableau[x + 1][y] == 5 || tableau[x + 1][y] == 2 || tableau[x + 1][y] == -1|| (x + 1) >= longueur) {
					stop = 1;
					good = 0;
					//printf_s(" \nmauvais chemin");
				}
			}
		}

	}
	
	return(good); 
	


}

int deplacementtrain(int(*tableau)[10], unsigned longueur, unsigned largeur) {
	
	int x = recherchetrainx(tableau,longueur,largeur);
	int y = recherchetrainy(tableau, longueur, largeur);
	int sens =senstab(tableau, longueur, largeur,x,y); 

	int tmp = 0;
	int stop = 0;

	if (sens == -1) { stop = 1;
	printf_s("Vous ne pouvez pas demarrer, impossible de savoir ou le train demarre");
	}
	/*while (stop == 0) {
		// check haut 
		if (tab[a - 1][b] == 1 || tab[a - 1][b] == 3 || tab[a - 1][b] == 5 || tab[a - 1][b] == 10) {
			if (sens == 3 && tmp != 5 && tmp != 3) {
				if (tab[a - 1][b] == 10) {
					stop = 1;
				}
				if (tab[a - 1][b] == 5) {
					sens = 1;
				}
				if (tab[a - 1][b] == 3) {
					sens = 2;
				}
				if (tab[a - 1][b] == 1) {
					sens = 3;
				}
				tab[a][b] = tmp;
				tmp = tab[a - 1][b];
				tab[a - 1][b] = 7;
				a = a - 1;
			}
		}

		//check rail bas 
		if (tab[a + 1][b] == 1 || tab[a + 1][b] == 4 || tab[a + 1][b] == 6 || tab[a + 1][b] == 10) {
			if (sens == 4 && tmp != 4 && tmp != 6) {
				if (tab[a + 1][b] == 10) {
					stop = 1;
				}
				if (tab[a + 1][b] == 4) {
					sens = 2;
				}
				if (tab[a + 1][b] == 6) {
					sens = 1;
				}
				if (tab[a + 1][b] == 1) {
					sens = 4;
				}
				tab[a][b] = tmp;
				tmp = tab[a + 1][b];
				tab[a + 1][b] = 7;
				a = a + 1;
			}
		}

		//check rail droite
		if (tab[a][b + 1] == 10 || tab[a][b + 1] == 2 || tab[a][b + 1] == 3 || tab[a][b + 1] == 4) {
			if (tmp != 3 && tmp != 4 && sens == 1) {

				if (tab[a][b + 1] == 10) {
					stop = 1;
				}
				if (tab[a][b + 1] == 2) {
					sens = 1;
				}
				if (tab[a][b + 1] == 3) {
					sens = 4;
				}
				if (tab[a][b + 1] == 4) {
					sens = 3;
				}

				tab[a][b] = tmp;
				tmp = tab[a][b + 1];
				tab[a][b + 1] = 7;
				b = b + 1;
			}
		}
		// check rail gauche 
		if (tab[a][b - 1] == 10 || tab[a][b - 1] == 2 || tab[a][b - 1] == 5 || tab[a][b - 1] == 6) {
			if (tmp != 5 && tmp != 6 && sens == 1) {
				if (tab[a][b - 1] == 10) {
					stop = 1;
				}
				if (tab[a][b - 1] == 2) {
					sens = 1;
				}
				if (tab[a][b - 1] == 5) {
					sens = 4;
				}
				if (tab[a][b - 1] == 6) {
					sens = 3;
				}
			
				tab[a][b] = tmp;
				tmp = tab[a][b - 1];
				tab[a][b - 1] = 7;
				b = b - 1;
			}
		}
		printf_s("%d %d %d %d\n ", a, b, tmp, sens);
		affichertab6(tab, 7, 7);
	}*/
	while (stop == 0) {


		// rail bon au dessus du train 
		if (tableau[x - 1][y] == 5 || tableau[x - 1][y] == 1 || tableau[x - 1][y] == 3 || tableau[x - 1][y] == 10) {
			if (tmp != 5 && tmp != 3 && sens == 3) {
				if (tableau[x - 1][y] == 10) {
					stop = 1;
					printf_s("Vous avez Reussi");
				}
				if (tableau[x - 1][y] == 5) {
					sens = 1;
				}
				if (tableau[x - 1][y] == 3) {
					sens = 2;
				}
				if (tableau[x - 1][y] == 1) {
					sens = 3;
				}
				/*tableau[x][y] = tmp;
				tmp = tableau[x - 1][y];
				tableau[x - 1][y] = 7; */
				x = x - 1;
				

				affichertab6(tableau, longueur, largeur);
			}
			printf_s("\n%d %d %d ", tmp, x, y);
		}


		// rail bon à droite 
		if (tableau[x][y + 1] == 2 || tableau[x][y + 1] == 3 || tableau[x][y + 1] == 4 || tableau[x][y + 1] == 10) {
			if (tmp != 3 && tmp != 4 && sens == 1) {
				if (tableau[x][y + 1] == 10) {
					stop = 1;
					printf_s("Vous avez Reussi");
				}
				if (tableau[x][y + 1] == 2) {
					sens = 1;
				}
				if (tableau[x][y + 1] == 3) {
					sens = 4;
				}
				if (tableau[x][y + 1] == 4) {
					sens = 3;
				}
				/*tableau[x][y] = tmp;
				tmp = tableau[x][y + 1];
				tableau[x][y + 1] = 7; */
				y = y + 1;

				affichertab6(tableau, longueur, largeur);
			}
			printf_s("\n%d %d %d ", tmp, x, y);
		}


		// rail bon à gauche 
		if (tableau[x][y - 1] == 2 || tableau[x][y - 1] == 5 || tableau[x][y - 1] == 6 || tableau[x][y - 1] == 10) {
			if (tmp != 5 && tmp != 6 && sens == 2) {
				if (tableau[x][y - 1] == 10) {
					stop = 1;
					printf_s("Vous avez Reussi");
				}
				if (tableau[x][y - 1] == 2) {
					sens = 2;
				}
				if (tableau[x][y - 1] == 5) {
					sens = 4;
				}
				if (tableau[x][y - 1] == 6) {
					sens = 3;
				}
				/*tableau[x][y] = tmp;
				tmp = tableau[x][y - 1];
				tableau[x][y - 1] = 7; */
				y = y - 1;

				affichertab6(tableau, longueur, largeur);
			}printf_s("\n%d %d %d ", tmp,x,y);
		}

		// rail bon en bas 

		if (tableau[x + 1][y] == 1 || tableau[x + 1][y] == 4 || tableau[x + 1][y] == 6 || tableau[x + 1][y] == 10) {
			if (tmp != 4 && tmp != 6 && sens == 4) {
				if (tableau[x + 1][y] == 10) {
					stop = 1;
					printf_s("Vous avez Reussi");
				}
				if (tableau[x + 1][y] == 1) {
					sens = 4;
				}
				if (tableau[x + 1][y] == 4) {
					sens = 2;
				}
				if (tableau[x + 1][y] == 6) {
					sens = 1;
				}
				/*tableau[x][y] = tmp;
				tmp = tableau[x + 1][y];
				tableau[x + 1][y] = 7; */
				x = x + 1;

				affichertab6(tableau, longueur, largeur);

			}
		}printf_s("\n%d %d %d ", tmp, x, y);

	}

	return(tableau); 
}



/*int solveur(int(*tableau)[7], unsigned longueur, unsigned largeur,int railtournant,int rail ) {
	int x = recherchetrainx;
	int y = recherchetrainy; 

	int a = recherchearriveex;
	int b = recherchearriveey; 

	int tabtmp = tableau; 
	if (x == a && y == b) {
		addsolution(tabtmp, longueur, largeur); 
		return ;
	}
	
	for (int e; e <= (railtournant + rail); e++) {
		for (int f = 0 ; f< 4)

	}
	
	

}*/

void affinageobjet(int(*tab)[10], unsigned longueur, unsigned largeur) {
	int valeur = 0; 
	for (int i = 0; i < longueur; i++) {
		for (int j = 0; j < largeur; j++) {
			if (tab[i][j] == -1) {
				// au dessous
				if (tab[i + 1][j] == 1 || tab[i + 1][j] == 4 || tab[i + 1][j] == 6) {
					while (tab[i + 1][j] != 2 && tab[i + 1][j] != 3 && tab[i + 1][j] != 5) {
						valeur = rand() % 7;
						tab[i + 1][j] = valeur;
					}
				}
				// au dessus
				if (tab[i - 1][j] == 1 || tab[i - 1][j] == 3 || tab[i - 1][j] == 5) {
					while (tab[i - 1][j] != 2 && tab[i - 1][j] != 4 && tab[i - 1][j] != 6) {
						valeur = rand() % 7;
						tab[i - 1][j] = valeur;
					}
				}
				// à droite 
				if (tab[i][j + 1] == 2 || tab[i][j + 1] == 3 || tab[i][j + 1] == 4) {
					while (tab[i][j + 1] != 1 && tab[i][j + 1] != 5 && tab[i][j + 1] != 6) {
						valeur = rand() % 7;
						tab[i][j + 1] = valeur;
					}
				}
				// à gauche 
				if (tab[i][j - 1] == 2 || tab[i][j - 1] == 5 || tab[i][j - 1] == 6) {
					while (tab[i][j - 1] != 1 && tab[i][j - 1] != 3 && tab[i][j - 1] != 4) {
						valeur = rand() % 7;
						tab[i][j - 1] = valeur;
					}
				}
			}
		}
	}


}
void affinagebord(int(*tab)[10], unsigned longueur, unsigned largeur) {
	int valeur = 0;

	//check bord haut
	for (int i = 0; i < largeur; i++) {
		if (tab[0][i] == 1 || tab[0][i] == 4 || tab[0][i] == 6) {
			while (tab[0][i] != 2 && tab[0][i] != 3 && tab[0][i] != 5) {
				valeur = rand() % 7;
				tab[0][i] = valeur;
			}
		}
	}
	//check bord bas 
	for (int i = 0; i < largeur; i++) {
		if (tab[largeur -1][i] == 1 || tab[largeur-1][i] == 3 || tab[largeur-1][i] == 5) {
			while (tab[largeur -1][i] != 2 && tab[largeur -1][i] != 4 && tab[largeur -1][i] != 6) {
				valeur = rand() % 7;
				tab[largeur-1][i] = valeur;
			}
		}
	}
	//check bord gauche 
	for (int i = 0; i < longueur; i++) {
		if (tab[i][0] == 2 || tab[i][0] == 3 || tab[i][0] == 4) {
			while (tab[i][0] != 1 && tab[i][0] != 5 && tab[i][0] != 6) {
				valeur = rand() % 7;
				tab[i][0] = valeur;
			}
		}
	}
	//check bord droit 
	for (int i = 0; i < longueur; i++) {
		if (tab[i][longueur-1] == 2 || tab[i][longueur-1] == 5 || tab[i][longueur-1] == 6) {
			while (tab[i][longueur-1] != 1 && tab[i][longueur-1] != 3 && tab[i][longueur-1] != 4) {
				valeur = rand() % 7;
				tab[i][longueur-1] = valeur;
			}
		}
	}

}
int solveurbrut(int(*tableau)[10], unsigned longueur, unsigned largeur) {
	
	
	int valeur = 0; 
	int check = 0; 
	int tab[10][10];
	unsigned long long int compteur = 0; 
	int tabtmp[10][10];



	for (int i = 0; i < longueur; i++) {
		for (int j = 0; j < largeur; j++) {
			tab[i][j] = tableau[i][j];
		}
	}

	while (check == 0 ) {
		//initialisation tableau
		for (int i = 0; i < longueur; i++) {
			for (int j = 0; j < largeur; j++) {
				while (tab[i][j] == 0) {
					
					valeur = rand()% 7;
					tab[i][j] = valeur;
					valeur = 0;
				}
			}
		}
		//afinnage obstacle 
		affinageobjet(tab, longueur, largeur);

		// affinnage sortie 
		affinagebord(tab, longueur, largeur);



			//affichertab6(tab, 10, 10);
		compteur++;
		//printf_s("%d\n", compteur);
		if (compteur == 10000 || compteur == 100000 || compteur == 1000000 || compteur == 10000000 || compteur == 15000000 || compteur == 20000000 || compteur == 100000000) {
			printf_s("%d", compteur);
		}
		if (checkmove(tab, longueur, largeur) == 1) {
			
			check ++; 
			//printf_s("Vous avez réussi %d \n", checkmove(tab, longueur, largeur));
			printf_s("Vous avez réussi %d \n",check);
			affichertab6(tab, longueur, largeur);
			
			printf_s("%d", compteur);
			//printf_s(" \n VOICI LE CHECK : %d \n", check);
			
		}
		
		if (check ==0){
			for (int i = 0; i < longueur; i++) {
				for (int j = 0; j < largeur; j++) {
					tab[i][j] = tableau[i][j];
				}	
			}
		} 
		
	}
	

	
	return(tableau);
	

}



int main() {
	int tableau[7][7] = {               7,0,0,0,0,0,0,
										1,0,0,0,0,0,0,
										0,0,0,0,0,0,0,
										0,2,2,2,2,3,0,
										1,5,2,2,2,4,0,
										1,1,0,0,0,1,0,
										1,6,2,2,2,10,0,
	};

	int test[7][7] = { 0,0,0,0,0,0,0,
						0,0,0,0,0,10,0,
						5,2,0,0,0,1,0,
						1,2,2,2,2,1,0,
						1,5,2,2,2,1,0,
						1,1,0,0,0,1,0,
						10,2,2,2,2,7,2, };

	int ola[7][7] = {    5,2,2,2,2,2,3,
						 1,5,2,2,2,2,4,
						 1,6,3,0,0,0,0,
						 1,5,4,0,0,0,0,
						 1,6,3,0,0,0,0,
						 1,0,1,0,0,0,0,
						 0,7,6,2,10,0,0,
	};
	int testtest[7][7] = { 7,0,2,2,0,2,10,
						5,0,0,0,0,0,0,
						0,0,0,1,0,0,0,
						0,0,0,0,0,0,0,
						0,0,0,0,0,0,0,
						0,0,0,0,0,0,0,
						0,0,0,0,0,0,0, };
	int niv1[10][10] = { 0,0,0,0,0,0,0,0,0,-1,
						0,0,-1,0,5,0,0,2,0,10,
						0,0,0,0,0,0,0,0,0,0,
						-1,0,0,0,-1,1,0,0,0,-1,
						0,0,0,0,0,0,0,0,0,0,
						0,0,0,0,0,0,-1,0,0,0,
						-1,-1,0,0,0,0,0,0,0,0,
						7,2,0,0,4,0,0,0,0,0,
						0,0,0,0,0,0,0,-1,0,-1,
						0,0,0,0,0,0,0,0,0,0, };
	int niv4[10][10] = { 0,0,0,0,0,0,0,0,0,-1,
						0,0,0,0,5,0,0,2,0,10,
						0,-1,0,0,0,0,0,0,0,0,
						0,0,0,0,0,1,0,0,0,-1,
						0,0,-1,0,0,0,0,0,0,0,
						0,0,0,0,0,0,0,0,0,0,
						0,0,0,0,0,0,0,0,0,0,
						7,2,0,0,4,0,0,-1,0,0,
						0,0,0,0,0,0,0,0,0,0,
						0,0,0,0,-1,0,0,0,0,0, };
	int niv2[10][10] = { 0,0,0,0,0,0,0,0,0,-1,
						0,-1,0,0,2,0,-1,0,-1,0,
						-1,0,0,0,-1,0,0,0,0,0,
						7,2,0,4,0,0,2,0,0,0,
						0,0,0,0,0,-1,0,-1,0,-1,
						0,-1,0,0,0,0,0,0,0,0,
						-1,0,0,0,0,0,0,0,0,0,
						0,0,0,-1,0,5,0,0,4,0,
						0,0,0,0,-1,0,0,0,0,-1,
						0,-1,0,0,-1,10,0,0,0,0, };
	int niv3[7][7] = { 0,0,0,0,0,0,0,
						0,0,0,0,0,2,7,
						0,0,0,0,0,0,0,
						10,0,0,0,0,0,0,
						0,0,0,0,0,0,0,
						0,0,0,0,0,0,0,
						0,2,0,0,0,0,0, };
	
	
	int fichier[7][7] = { 0,0,0,0,0,0,0,
						0,0,0,0,0,0,0,
						0,0,0,0,0,0,0,
						0,0,0,0,0,0,0,
						0,0,0,0,0,0,0,
						0,0,0,0,0,0,0,
						0,0,0,0,0,0,0, };

	

		solveurbrut(niv2, 10, 10);

	

}