
console.log("Jeu")
var div1 = document.querySelector('#uniquecreator');

var tab1 = document.createElement('tableCrea');
div1.appendChild(tab1);

var tableaucrea = Array(10);

const ligne = 10;
const colonne = 10;
        
for(let i = 0; i < ligne; i++){
    var tr1 = document.createElement('tr');
    tab1.appendChild(tr1);
    tableaucrea[i] = Array(10);
    
    for(let j = 0; j < colonne; j++){
        var td1 = document.createElement('td');
        tr1.appendChild(td1);
        td1.dataset['ligne'] = i;
        td1.dataset['column'] = j;
        tableaucrea[i][j] = td1;
    }
}

var div2 = document.querySelector('#uniquejeu');

var tab2 = document.createElement('tableJeu');
div2.appendChild(tab2);

var tableaujeu = Array(10);
        
for(let i = 0; i < ligne; i++){
    var tr2 = document.createElement('tr');
    tab2.appendChild(tr2);
    tableaujeu[i] = Array(10);
    
    for(let j = 0; j < colonne; j++){
        var td2 = document.createElement('td');
        tr2.appendChild(td2);
        td2.dataset['ligne'] = i;
        td2.dataset['column'] = j;
        tableaujeu[i][j] = td2;
    }
}

var nbrail1=0;
var nbrail2=0;
var nombrerail1 = 0;
var nombrerail2 = 0;

cl = 0;

var cBon = 1;

//Fonction Fini//
function rotate(e){
    if (e.keyCode == 82){
        var currentCrea = document.querySelector('#currentCrea');

        //Fait tourner les rails droits
        if (currentCrea.classList.contains('rail1')){
            currentCrea.className = 'rail2';
            cl = 2;
        }
        else if (currentCrea.classList.contains('rail2')){
            currentCrea.className = 'rail1';
            cl = 1;
        }
        else if (currentCrea.classList.contains('rail1_pont')){
            currentCrea.className = 'rail2_pont';
            cl = 2.1;
        }
        else if (currentCrea.classList.contains('rail2_pont')){
            currentCrea.className = 'rail1_pont';
            cl = 1.1;
        }
        else if (currentCrea.classList.contains('rail1_aposer')){
            currentCrea.className = 'rail2_aposer';
            cl = -2;
        }
        else if (currentCrea.classList.contains('rail2_aposer')){
            currentCrea.className = 'rail1_aposer';
            cl = -1;
        }
        else if (currentCrea.classList.contains('rail1_droit_begin')){
            currentCrea.className = 'rail1_droit_finish'
            cl = -10;
        }
        else if (currentCrea.classList.contains('rail1_droit_finish')){
            currentCrea.className = 'rail2_droit_begin';
            cl = 11;
        }
        else if (currentCrea.classList.contains('rail2_droit_begin')){
            currentCrea.className = 'rail2_droit_finish'
            cl = -11;
        }
        else if (currentCrea.classList.contains('rail2_droit_finish')){
            currentCrea.className = 'rail1_droit_begin';
            cl = 10;
        }

        //Fait tourner les rails angles
        else if (currentCrea.classList.contains('railt1')){
            currentCrea.className = 'railt2';
            cl = 4;
        }
        else if (currentCrea.classList.contains('railt2')){
            currentCrea.className = 'railt3';
            cl = 5;
        }
        else if (currentCrea.classList.contains('railt3')){
            currentCrea.className = 'railt4';
            cl = 6;
        }
        else if (currentCrea.classList.contains('railt4')){
            currentCrea.className = 'railt1';
            cl = 3;
        }
        else if (currentCrea.classList.contains('railt1_pont')){
            currentCrea.className = 'railt2_pont';
            cl = 4.1;
        }
        else if (currentCrea.classList.contains('railt2_pont')){
            currentCrea.className = 'railt3_pont';
            cl = 5.1;
        }
        else if (currentCrea.classList.contains('railt3_pont')){
            currentCrea.className = 'railt4_pont';
            cl = 6.1;
        }
        else if (currentCrea.classList.contains('railt4_pont')){
            currentCrea.className = 'railt1_pont';
            cl = 3.1;
        }
        else if (currentCrea.classList.contains('railt1_aposer')){
            currentCrea.className = 'railt2_aposer';
            cl = -4;
        }
        else if (currentCrea.classList.contains('railt2_aposer')){
            currentCrea.className = 'railt3_aposer';
            cl = -5;
        }
        else if (currentCrea.classList.contains('railt3_aposer')){
            currentCrea.className = 'railt4_aposer';
            cl = -6;
        }
        else if (currentCrea.classList.contains('railt4_aposer')){
            currentCrea.className = 'railt1_aposer';
            cl = -3;
        }
        else if (currentCrea.classList.contains('gare1')){
            currentCrea.className = 'gare2';
            cl = 25;
        }
        else if (currentCrea.classList.contains('gare2')){
            currentCrea.className = 'gare1';
            cl = 24;
        }
        else if (currentCrea.classList.contains('eau')){
            currentCrea.className = 'herbeeau1';
            cl = 26;
        }
        else if (currentCrea.classList.contains('herbeeau1')){
            currentCrea.className = 'herbeeau1_2';
            cl = 26.2;
        }
        else if (currentCrea.classList.contains('herbeeau1_2')){
            currentCrea.className = 'herbeeau1_4';
            cl = 26.4;
        }
        else if (currentCrea.classList.contains('herbeeau1_4')){
            currentCrea.className = 'herbeeau1_5';
            cl = 26.5;
        }
        else if (currentCrea.classList.contains('herbeeau1_5')){
            currentCrea.className = 'herbeeau1_7';
            cl = 26.7;
        }
        else if (currentCrea.classList.contains('herbeeau1_7')){
            currentCrea.className = 'herbeeau1_8';
            cl = 26.8;
        }
        else if (currentCrea.classList.contains('herbeeau1_8')){
            currentCrea.className = 'eau';
            cl = 23;
        }

        else if (currentCrea.classList.contains('boueeau1')){
            currentCrea.className = 'boueeau2';
            cl = 30.2;
        }
        else if (currentCrea.classList.contains('boueeau2')){
            currentCrea.className = 'boueeau3';
            cl = 30.3;
        }
        else if (currentCrea.classList.contains('boueeau3')){
            currentCrea.className = 'boueeau4';
            cl = 30.4;
        }
        else if (currentCrea.classList.contains('boueeau4')){
            currentCrea.className = 'boueeau1';
            cl = 30.1;
        }
    }
}
document.addEventListener('keydown', rotate);

//Fonction Fini//
//SETCREA//
function setcrea(row, column, decor){
    var elt = tableaucrea[row][column];
    
    //Rail Droit et Rail Tournant
    if (decor == 1){
    elt.className = 'rail1';
    }
    else if (decor == 2){
        elt.className = 'rail2'
    }
    else if (decor == 1.1){
        elt.className = 'rail1_pont';
    }
    else if (decor == 2.1){
        elt.className = 'rail2_pont'
    }
    else if (decor == -1){
        elt.className = 'rail1_aposer';
    }
    else if (decor == -2){
        elt.className = 'rail2_aposer';
    }
    else if (decor == 3){
        elt.className = 'railt1';
    }
    else if (decor == 4){
        elt.className = 'railt2';
    }
    else if (decor == 5){
        elt.className = 'railt3';
    }
    else if (decor == 6){
        elt.className = 'railt4';
    }
    else if (decor == 3.1){
        elt.className = 'railt1_pont';
    }
    else if (decor == 4.1){
        elt.className = 'railt2_pont';
    }
    else if (decor == 5.1){
        elt.className = 'railt3_pont';
    }
    else if (decor == 6.1){
        elt.className = 'railt4_pont';
    }
    else if (decor == -3){
        elt.className = 'railt1_aposer';
    }
    else if (decor == -4){
        elt.className = 'railt2_aposer';
    }
    else if (decor == -5){
        elt.className = 'railt3_aposer';
    }
    else if (decor == -6){
        elt.className = 'railt4_aposer';
    }
    
    //Rail FIN DEBUT
    else if ((decor == 10)&&((row == 0)||(row == 9))){
        elt.className = 'rail1_droit_begin';
    }
    else if ((decor == 11)&&((column == 0)||(column == 9))){
        elt.className = 'rail2_droit_begin';
    }
    else if ((decor == -11)&&((column == 0)||(column == 9))){
        elt.className = 'rail2_droit_finish';
    }
    else if ((decor == -10)&&((row == 0)||(row == 9))){
        elt.className = 'rail1_droit_finish';
    }
    
    //Decors
    else if (decor == 21){
        elt.className = 'arbre1';
    }
    else if (decor == 22){
        elt.className = 'cowboy';
    }
    else if (decor == 23){
    elt.className = 'eau';
    }
    else if (decor == 24){
        elt.className = 'gare1';
    }
    else if (decor == 25){
        elt.className = 'gare2';
    }
    else if (decor == 26){
        elt.className  = 'herbeeau1';
    }
    else if (decor == 26.2){
        elt.className  = 'herbeeau1_2';
    }
    else if (decor == 26.4){
        elt.className  = 'herbeeau1_4';
    }
    else if (decor == 26.5){
        elt.className  = 'herbeeau1_5';
    }
    else if (decor == 26.7){
        elt.className  = 'herbeeau1_7';
    }
    else if (decor == 26.8){
        elt.className  = 'herbeeau1_8';
    }
    
    else if (decor == 27){
        elt.className = 'herbeeau2';
    }
    else if (decor == 27.2){
        elt.className = 'herbeeau2_2';
    }
    else if (decor == 27.3){
        elt.className = 'herbeeau2_3';
    }
    else if (decor == 27.4){
        elt.className = 'herbeeau2_4';
    }
    
    else if (decor == 28){
        elt.className = 'rocher';
    }
    else if (decor == 29){
        elt.className = 'pont';
    }

    else if (decor == 30.1){
        elt.className = 'boueeau1';
    }
    else if (decor == 30.2){
        elt.className = 'boueeau2';
    }
    else if (decor == 30.3){
        elt.className = 'boueeau3';
    }
    else if (decor == 30.4){
        elt.className = 'boueeau4';
    }
}

//Fonction Fini//
function EnregistrementCrea(e){

    var laCible = event.target

    if (laCible.classList.contains('herbe')){
        cl = 0;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'herbe';
        
    }
    else if (laCible.classList.contains('rail1')){
        cl = 1;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'rail1';
        
    }
    else if (laCible.classList.contains('rail2')){
        cl = 2;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'rail2';
        
    }
    else if (laCible.classList.contains('rail1_pont')){
        cl = 1.1;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'rail1_pont';
        
    }
    else if (laCible.classList.contains('rail2_pont')){
        cl = 2.1;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'rail2_pont';
        
    }
    else if (laCible.classList.contains('rail1_aposer')){
        cl = -1;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'rail1_aposer';
        
    }
    else if (laCible.classList.contains('rail2_aposer')){
        cl = -2;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'rail2_aposer';
        
    }
    else if (laCible.classList.contains('railt1')){
        cl = 3;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'railt1';
    }
    else if (laCible.classList.contains('railt2')){
        cl = 4;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'railt2';
    }
    else if (laCible.classList.contains('railt3')){
        cl = 5;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'railt3';
    }
    else if (laCible.classList.contains('railt4')){
        cl = 6;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'railt4';
    }
    else if (laCible.classList.contains('railt1_pont')){
        cl = 3.1;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'railt1_pont';
    }
    else if (laCible.classList.contains('railt2_pont')){
        cl = 4.1;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'railt2_pont';
    }
    else if (laCible.classList.contains('railt3_pont')){
        cl = 5.1;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'railt3_pont';
    }
    else if (laCible.classList.contains('railt4_pont')){
        cl = 6.1;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'railt4_pont';
    }
    else if (laCible.classList.contains('railt1_aposer')){
        cl = -3;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'railt1_aposer';
    }
    else if (laCible.classList.contains('railt2_aposer')){
        cl = -4;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'railt2_aposer';
    }
    else if (laCible.classList.contains('railt3_aposer')){
        cl = -5;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'railt3_aposer';
    }
    else if (laCible.classList.contains('railt4_aposer')){
        cl = -6;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'railt4_aposer';
    }
    
    else if (laCible.classList.contains('rail1_droit_begin')){
        cl = 10;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'rail1_droit_begin';
    }
    else if (laCible.classList.contains('rail2_droit_begin')){
        cl = 11;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'rail2_droit_begin';
    }
    else if (laCible.classList.contains('rail1_droit_finish')){
        cl = -10;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'rail1_droit_finish';
    }
    else if (laCible.classList.contains('rail2_droit_finish')){
        cl = -11;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'rail2_droit_finish';
    }


    else if (laCible.classList.contains('arbre1')){
        cl = 21;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'arbre1';
        
    }
    else if (laCible.classList.contains('cowboy')){
        cl = 22;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'cowboy';
    }
    else if (laCible.classList.contains('eau')){
        cl = 23;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'eau';
    
    }
    else if (laCible.classList.contains('gare1')){
        cl = 24;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'gare1';
    
    }
    else if (laCible.classList.contains('gare2')){
        cl = 25;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'gare2';
        
    }
    else if (laCible.classList.contains('herbeeau1')){
        cl = 26;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'herbeeau1';
    }
    else if (laCible.classList.contains('herbeeau1_2')){
        cl = 26.2;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'herbeeau1_2';
    }
    else if (laCible.classList.contains('herbeeau1_4')){
        cl = 26.4;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'herbeeau1_4';
    }
    else if (laCible.classList.contains('herbeeau1_5')){
        cl = 26.5;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'herbeeau1_5';
    }
    else if (laCible.classList.contains('herbeeau1_7')){
        cl = 26.7;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'herbeeau1_7';
    }
    else if (laCible.classList.contains('herbeeau1_8')){
        cl = 26.8;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'herbeeau1_8';
    }
    else if (laCible.classList.contains('herbeeau2')){
        cl = 27;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'herbeeau2';
    }
    else if (laCible.classList.contains('herbeeau2_2')){
        cl = 27.2;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'herbeeau2_2';
    }
    else if (laCible.classList.contains('herbeeau2_3')){
        cl = 27.3;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'herbeeau2_3';
    }
    else if (laCible.classList.contains('herbeeau2_4')){
        cl = 27.4;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'herbeeau2_4';
    }
    else if (laCible.classList.contains('rocher')){
        cl = 28;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'rocher';
        
    }
    else if (laCible.classList.contains('pont')){
        cl = 29;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'pont';
    }
    else if (laCible.classList.contains('boueeau1')){
        cl = 30.1;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'boueeau1';
    }
    else if (laCible.classList.contains('boueeau2')){
        cl = 30.2;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'boueeau2';
    }
    else if (laCible.classList.contains('boueeau3')){
        cl = 30.3;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'boueeau3';
    }
    else if (laCible.classList.contains('boueeau4')){
        cl = 30.4;
        var currentCrea = document.querySelector('#currentCrea');
        currentCrea.className = 'boueeau4';
    }
    
else {
        return false;
    }
}

var creator = document.querySelector('#creator');
creator.addEventListener('click', EnregistrementCrea);

//Fonction Fini//
function place(e) {
    
    var laCible = event.target;
    var col = laCible.dataset.column;
    var li = laCible.dataset.ligne;
    cBon =0;
    setcrea(li, col, cl);       
}
tab1.addEventListener('click', place);

//Verifie si le niveau est possible
//Fonction Fini//
function verifCreator (e){
        var stoptrain = 0;
        var dir = 1;
        var debX=0;
        var debY=0;


        var tabN = Array(10);

        for (let i = 0; i < ligne; i++){

            tabN[i] = Array(10);

            for (let j = 0; j < colonne; j++){

                var test = tableaucrea[i][j];

                //On cherche le rail de depart et on met ses coordonnée dans debX et debY
                if ((test.classList.contains('rail1_droit_begin'))||(test.classList.contains('rail2_droit_begin'))){
                    debX = i;
                    debY = j;
                    console.log('i:',i);
                    console.log('j:',j);

                    //Sur la premiere colonne et allant vers la droite
                    if ((j==0) && (test.classList.contains('rail2_droit_begin'))){
                        dir=1; //Directiton : droite
                    }

                    //Sur la premiere ligne et allant vers le bas
                    else if ((i==0) && (test.classList.contains('rail1_droit_begin'))){
                        dir=4; //Directiton : bas
                    }

                    //Sur la derniere colonne et allant vers la gauche
                    else if ((j==9) && (test.classList.contains('rail2_droit_begin'))){
                        dir=3; //Directiton : gauche
                    }

                    //Sur la derneire ligne et allant vers le haut
                    else if ((i==9) && (test.classList.contains('rail1_droit_begin'))){
                        dir=2; //Directiton : haut
                    }
                }
                else if ((test.classList.contains('rail1_aposer'))||(test.classList.contains('rail2_aposer'))){
                    nbrail1++;
                    console.log('nombrerail1:',nbrail1);
                }
                else if ((test.classList.contains('railt1_aposer'))||(test.classList.contains('railt2_aposer'))||(test.classList.contains('railt3_aposer'))||(test.classList.contains('railt4_aposer'))){
                    nbrail2++;
                    console.log('nombrerail2:',nbrail2);
                }      
            }
        }

        var sens = dir;   
        var x = debX;
        var y = debY;

        var grille = convertNumberCrea();

        while (stoptrain == 0){

            console.log('y:',y);
            console.log('x:',x);
            console.log('sens:',sens);
            
            if (sens == 1){
                if (y+1 >= colonne){
                    stoptrain = 1;
                }
                else if ((grille[x][y+1] == 2)||(grille[x][y+1] == -2)||(grille[x][y+1] == 2.1)){
                    y++;
                }
                else if ((grille[x][y+1] == 4)||(grille[x][y+1] == -4)||(grille[x][y+1] == 4.1)){
                    y++;
                    sens = 4;
                }
                else if ((grille[x][y+1] == 5)||(grille[x][y+1] == -5)||(grille[x][y+1] == 5.1)){
                    y++;
                    sens = 2;
                }
                else if ((grille[x][y+1] == -11) || (grille[x][y+1] == -10)){
                    win();
                    return 0
                }
                else{stoptrain = 1}
            }

            else if (sens == 2){
                console.log('grille[x-1][y]:',grille[x-1][y]);
                if (x-1 < 0){
                    stoptrain = 1;
                }
                else if ((grille[x-1][y] == 1)||(grille[x-1][y] == -1)||(grille[x-1][y] == 1.1)){
                    x--;
                }
                else if ((grille[x-1][y] == 3)||(grille[x-1][y] == -3)||(grille[x-1][y] == 3.1)){
                    x--;
                    sens = 1;
                }
                else if ((grille[x-1][y] == 4)||(grille[x-1][y] == -4)||(grille[x-1][y] == 4.1)){
                    x--;
                    sens = 3;
                }
                else if ((grille[x-1][y] == -11) || (grille[x-1][y] == -10)){
                    win();
                    return 0
                }
                else{stoptrain = 1}
            }


            else if (sens == 3){
                if (y-1 < 0){
                    stoptrain = 1;
                }
                else if ((grille[x][y-1] == 2)||(grille[x][y-1] == -2)||(grille[x][y-1] == 2.1)){
                    y--;
                }
                else if ((grille[x][y-1] == 3)||(grille[x][y-1] == -3)||(grille[x][y-1] == 3.1)){
                    y--;
                    sens = 4;
                }
                else if ((grille[x][y-1] == 6)||(grille[x][y-1] == -6)||(grille[x][y-1] == 6.1)){
                    y--;
                    sens = 2;
                }
                else if ((grille[x][y-1] == -11) || (grille[x][y-1] == -10)){
                    win();
                    return 0
                }
                else{stoptrain = 1}
            }

            else if (sens == 4){
                if (x+1 >= ligne){
                    stoptrain = 1;
                }
                else if ((grille[x+1][y] == 1)||(grille[x+1][y] == -1)||(grille[x+1][y] == 1.1)){
                    x++;
                }
                else if ((grille[x+1][y] == 5)||(grille[x+1][y] == -5)||(grille[x+1][y] == 5.1)){
                    x++;
                    sens = 3;
                }
                else if ((grille[x+1][y] == 6)||(grille[x+1][y] == -6)||(grille[x+1][y] == 6.1)){
                    x++;
                    sens = 1;
                }
                else if ((grille[x+1][y] == -11) || (grille[x+1][y] == -10)){
                    win();
                    return 0
                }
                else{stoptrain = 1}
            }
            
        }   

        if (gameo.classList.contains('over')){
        
            gameo.removeChild(texte);
            gameo.className='';
        }
        over();




}  

//Convertie la grille de décors en numéro
//Fonction Fini
function convertNumberCrea(){

        var tabN = Array(10);

        for (let i = 0; i < ligne; i++){

            tabN[i] = Array(10);

            for (let j = 0; j < colonne; j++){

                var test = tableaucrea[i][j];

                //Rails Droit
                if (test.classList.contains('rail1')){
                    tabN[i][j] = 1;
                }
                else if (test.classList.contains('rail2')){
                    tabN[i][j] = 2;
                }
                else if (test.classList.contains('rail1_pont')){
                    tabN[i][j] = 1.1;
                }
                else if (test.classList.contains('rail2_pont')){
                    tabN[i][j] = 2.1;
                }
                else if (test.classList.contains('rail1_aposer')){
                    tabN[i][j] = -1;
                }
                else if (test.classList.contains('rail2_aposer')){
                    tabN[i][j] = -2;
                }

                //Rails Tourne
                else if (test.classList.contains('railt1')){
                    tabN[i][j] = 3;
                }
                else if (test.classList.contains('railt2')){
                    tabN[i][j] = 4;
                }
                else if (test.classList.contains('railt3')){
                    tabN[i][j] = 5;
                }
                else if (test.classList.contains('railt4')){
                    tabN[i][j] = 6;
                }
                else if (test.classList.contains('railt1_pont')){
                    tabN[i][j] = 3.1;
                }
                else if (test.classList.contains('railt2_pont')){
                    tabN[i][j] = 4.1;
                }
                else if (test.classList.contains('railt3_pont')){
                    tabN[i][j] = 5.1;
                }
                else if (test.classList.contains('railt4_pont')){
                    tabN[i][j] = 6.1;
                }
                else if (test.classList.contains('railt1_aposer')){
                    tabN[i][j] = -3;
                }
                else if (test.classList.contains('railt2_aposer')){
                    tabN[i][j] = -4;
                }
                else if (test.classList.contains('railt3_aposer')){
                    tabN[i][j] = -5;
                }
                else if (test.classList.contains('railt4_aposer')){
                    tabN[i][j] = -6;
                }

                //Premier Rails
                else if (test.classList.contains('rail1_droit_begin')){
                    tabN[i][j] = 10;
                }
                //Dernier Rails
                else if (test.classList.contains('rail1_droit_finish')){
                    tabN[i][j] = -10;
                }
                else if (test.classList.contains('rail2_droit_begin')){
                    tabN[i][j] = 11;
                }
                //Dernier Rails
                else if (test.classList.contains('rail2_droit_finish')){
                    tabN[i][j] = -11;
                }
                //Decors
                else if (test.classList.contains('arbre1')){
                    tabN[i][j] = 21;
                }
                //Dernier Rails
                else if (test.classList.contains('cowboy')){
                    tabN[i][j] = 22;
                }
                else if (test.classList.contains('eau')){
                    tabN[i][j] = 23;
                }
                //Dernier Rails
                else if (test.classList.contains('gare1')){
                    tabN[i][j] = 24;
                }
                else if (test.classList.contains('gare2')){
                    tabN[i][j] = 25;
                }
                else if (test.classList.contains('herbeeau1')){
                    tabN[i][j] = 26;
                }
                else if (test.classList.contains('herbeeau1_2')){
                    tabN[i][j] = 26.2;
                }
                else if (test.classList.contains('herbeeau1_4')){
                    tabN[i][j] = 26.4;
                }
                else if (test.classList.contains('herbeeau1_5')){
                    tabN[i][j] = 26.5;
                }
                else if (test.classList.contains('herbeeau1_7')){
                    tabN[i][j] = 26.7;
                }
                else if (test.classList.contains('herbeeau1_8')){
                    tabN[i][j] = 26.7;
                }
                else if (test.classList.contains('herbeeau2')){
                    tabN[i][j] = 27;
                }
                else if (test.classList.contains('herbeeau2_2')){
                    tabN[i][j] = 27.2;
                }
                else if (test.classList.contains('herbeeau2_3')){
                    tabN[i][j] = 27.3;
                }
                else if (test.classList.contains('herbeeau2_4')){
                    tabN[i][j] = 27.4;
                }

                else if (test.classList.contains('boueeau1')){
                    tabN[i][j] = 30.1;
                }
                else if (test.classList.contains('boueeau2')){
                    tabN[i][j] = 30.2;
                }
                else if (test.classList.contains('boueeau3')){
                    tabN[i][j] = 30.3;
                }
                else if (test.classList.contains('boueeau4')){
                    tabN[i][j] = 30.4;
                }
                //Dernier Rails
                else if (test.classList.contains('rocher')){
                    tabN[i][j] = 28;
                }
                else if (test.classList.contains('pont')){
                    tabN[i][j] = 29;
                }
                
            }
        }

        return tabN;
}

//Sert a reset
//Fonction Fini//
function initCreator (e){
    console.log('Fonction initCreator faite');
    for (let i = 0; i < ligne; i++){
        for (let j = 0; j < colonne; j++){
            tableaucrea[i][j].className = '';
        }
    }
}

function resetcrea (e){

    initCreator();
    console.log('Fonction reset faite');
    nbrail1=0;
    nbrail1=0;

    if (gameo.classList.contains('over')){
    
        gameo.removeChild(texte);
        gameo.className='';
        
    }
    else if (gamew.classList.contains('win')){

        gamew.removeChild(texte);
        gamew.className='';
    }
}

function Try(){
    console.log("Fonction Try");
    if (cBon == 1){
        gamew.className = 'win';
    
        texte = document.createElement('h2');
        gamew.appendChild(texte);

        texte.innerHTML = 'You must Verify before'

    gamew.addEventListener('click', reset);
    }
    else if (cBon == 0){
    var modecrea = document.querySelector('.modecrea');
    modecrea.classList.add('invisible');
    var modejeu = document.querySelector('.modejeu');
    modejeu.classList.remove('invisible');
    if (gamew.classList.contains('win')){

        gamew.removeChild(texte);
        gamew.className='';
    }
    document.getElementById("nbrail1").innerHTML=nbrail1 + "x";
    document.getElementById("nbrail2").innerHTML=nbrail2 + "x";

    nombrerail1 = nbrail1;
    nombrerail2 = nbrail2;

    initJeu();
    }
}

//JEu
//Fonction fini
function initJeu (e){
            console.log("Fonction initJeu");
            for (let i = 0; i < ligne; i++){
                for (let j = 0; j < colonne; j++){
                    tableaujeu[i][j].className = '';
                }
            }
            for (let i = 0; i < ligne; i++){
    
                for (let j = 0; j < colonne; j++){
    
                    var test = tableaucrea[j][i];
    
                    //On cherche le rail de depart et on met ses coordonnée dans debX et debY
                    if (test.classList.contains('herbe1')){
                        setJeu(j,i,0);
                    }
                    else if (test.classList.contains('rail1')){
                        setJeu(j,i,1);
                    }
                    else if (test.classList.contains('rail2')){
                        setJeu(j,i,2);
                    }
                    else if (test.classList.contains('rail1_pont')){
                        setJeu(j,i,1.1);
                    }
                    else if (test.classList.contains('rail2_pont')){
                        setJeu(j,i,2.1);
                    }
                    else if (test.classList.contains('rail1_aposer')){
                        setJeu(j,i,0);
                    }
                    else if (test.classList.contains('rail2_aposer')){
                        setJeu(j,i,0);
                    }
                    else if (test.classList.contains('railt1')){
                        setJeu(j,i,3);
                    }
                    else if (test.classList.contains('railt2')){
                        setJeu(j,i,4);
                    }
                    else if (test.classList.contains('railt3')){
                        setJeu(j,i,5);
                    }
                    else if (test.classList.contains('railt4')){
                        setJeu(j,i,6);
                    }
                    else if (test.classList.contains('railt1_pont')){
                        setJeu(j,i,3.1);
                    }
                    else if (test.classList.contains('railt2_pont')){
                        setJeu(j,i,4.1);
                    }
                    else if (test.classList.contains('railt3_pont')){
                        setJeu(j,i,5.1);
                    }
                    else if (test.classList.contains('railt4_pont')){
                        setJeu(j,i,6.1);
                    }
                    else if (test.classList.contains('railt1_aposer')){
                        setJeu(j,i,0);
                    }
                    else if (test.classList.contains('railt2_aposer')){
                        setJeu(j,i,0);
                    }
                    else if (test.classList.contains('railt3_aposer')){
                        setJeu(j,i,0);
                    }
                    else if (test.classList.contains('railt4_aposer')){
                        setJeu(j,i,0);
                    }
                    else if (test.classList.contains('rail1_droit_begin')){
                        setJeu(j,i,10);
                    }
                    else if (test.classList.contains('rail1_droit_finish')){
                        setJeu(j,i,-10);
                    }
                    else if (test.classList.contains('rail2_droit_begin')){
                        setJeu(j,i,11);
                    }
                    else if (test.classList.contains('rail2_droit_finish')){
                        setJeu(j,i,-11);
                    }

                    else if (test.classList.contains('arbre1')){
                        setJeu(j,i,21);
                    }
                    else if (test.classList.contains('cowboy')){
                        setJeu(j,i,22);
                    }
                    else if (test.classList.contains('eau')){
                        setJeu(j,i,23);
                    }
                    else if (test.classList.contains('gare1')){
                        setJeu(j,i,24);
                    }
                    else if (test.classList.contains('gare2')){
                        setJeu(j,i,25);
                    }
                    else if (test.classList.contains('herbeeau1')){
                        setJeu(j,i,26);
                    }
                    else if (test.classList.contains('herbeeau1_2')){
                        setJeu(j,i,26.2);
                    }
                    else if (test.classList.contains('herbeeau1_4')){
                        setJeu(j,i,26.4);
                    }
                    else if (test.classList.contains('herbeeau1_5')){
                        setJeu(j,i,26.5);
                    }
                    else if (test.classList.contains('herbeeau1_7')){
                        setJeu(j,i,26.7);
                    }
                    else if (test.classList.contains('herbeeau1_8')){
                        setJeu(j,i,26.8);
                    }
                    else if (test.classList.contains('herbeeau2')){
                        setJeu(j,i,27);
                    }
                    else if (test.classList.contains('herbeeau2_2')){
                        setJeu(j,i,27.2);
                    }
                    else if (test.classList.contains('herbeeau2_3')){
                        setJeu(j,i,27.3);
                    }
                    else if (test.classList.contains('herbeeau2_4')){
                        setJeu(j,i,27.4);
                    }
                    else if (test.classList.contains('rocher')){
                        setJeu(j,i,28);
                    }
                    else if (test.classList.contains('pont')){
                        setJeu(j,i,29);
                    }
                    else if (test.classList.contains('boueeau1')){
                        setJeu(j,i,30.1);
                    }
                    else if (test.classList.contains('boueeau2')){
                        setJeu(j,i,30.2);
                    }
                    else if (test.classList.contains('boueeau3')){
                        setJeu(j,i,30.3);
                    }
                    else if (test.classList.contains('boueeau4')){
                        setJeu(j,i,30.4);
                    }
                }
            }
    
        
}


gamew = document.querySelector('#test2');
gameo = document.querySelector('#test');

//Verifie si le niveau est possible
//Fonction fini
function verif(e){
            var stoptrain = 0;
            var debX=0;
            var debY=0;
        
            var tabN = Array(10);
        
            for (let i = 0; i < ligne; i++){
        
                tabN[i] = Array(10);
        
                for (let j = 0; j < colonne; j++){
        
                    var test = tableaujeu[i][j];
        
                    //On cherche le rail de depart et on met ses coordonnée dans debX et debY
                    if ((test.classList.contains('rail1_droit_begin'))||(test.classList.contains('rail2_droit_begin'))){
                        debX = i;
                        debY = j;
        
                        //Sur la premiere colonne et allant vers la droite
                        if ((j==0) && (test.classList.contains('rail2_droit_begin'))){
                            dir=1; //Directiton : droite
                        }
        
                        //Sur la premiere ligne et allant vers le bas
                        else if ((i==0) && (test.classList.contains('rail1_droit_begin'))){
                            dir=4; //Directiton : bas
                        }
        
                        //Sur la derniere colonne et allant vers la gauche
                        else if ((j==9) && (test.classList.contains('rail2_droit_begin'))){
                            dir=3; //Directiton : gauche
                        }
        
                        //Sur la derneire ligne et allant vers le haut
                        else if ((i==9) && (test.classList.contains('rail1_droit_begin'))){
                            dir=2; //Directiton : haut
                        }
                    }
                }
            }
        
            var sens = dir;   
            var x = debX;
            var y = debY;
            
        
            var grille = convertNumberJeu();
        
        
            while (stoptrain == 0){
        
                if (sens == 1){
                    if (y+1 >= colonne){
                        stoptrain = 1;
                    }
                    else if ((grille[x][y+1] == 2)||(grille[x][y+1] == 2.1)){
                        y++;
                    }
                    else if ((grille[x][y+1] == 4)||(grille[x][y+1] == 4.1)){
                        y++;
                        sens = 4;
                    }
                    else if ((grille[x][y+1] == 5)||(grille[x][y+1] == 5.1)){
                        y++;
                        sens = 2;
                    }
                    else if ((grille[x][y+1] == -11) || (grille[x][y+1] == -10)){
                        youwin();
                        return 0
                    }
                    else{stoptrain = 1}
                }
        
                else if (sens == 2){
                    if (x-1 < 0){
                        stoptrain = 1;
                    }
                    else if ((grille[x-1][y] == 1)||(grille[x-1][y] == 1.1)){
                        x--;
                    }
                    else if ((grille[x-1][y] == 3)||(grille[x-1][y] == 3.1)){
                        x--;
                        sens = 1;
                    }
                    else if ((grille[x-1][y] == 4)||(grille[x-1][y] == 4.1)){
                        x--;
                        sens = 3;
                    }
                    else if ((grille[x-1][y] == -11) || (grille[x-1][y] == -10)){
                        youwin();
                        return 0
                    }
                    else{stoptrain = 1}
                }
        
        
                else if (sens == 3){
                    if (y-1 < 0){
                        stoptrain = 1;
                    }
                    else if ((grille[x][y-1] == 2)||(grille[x][y-1] == 2.1)){
                        y--;
                    }
                    else if ((grille[x][y-1] == 3)||(grille[x][y-1] == 3.1)){
                        y--;
                        sens = 4;
                    }
                    else if ((grille[x][y-1] == 6)||(grille[x][y-1] == 6.1)){
                        y = y--;
                        sens = 2;
                    }
                    else if ((grille[x][y-1] == -11) || (grille[x][y-1] == -10)){
                        youwin();
                        return 0
                    }
                    else{stoptrain = 1}
                }
        
                else if (sens == 4){
                    if (x+1 >= ligne){
                        stoptrain = 1;
                    }
                    else if ((grille[x+1][y] == 1)||(grille[x+1][y] == 1.1)){
                        x++;
                    }
                    else if ((grille[x+1][y] == 5)||(grille[x+1][y] == 5.1)){
                        x++;
                        sens = 3;
                    }
                    else if ((grille[x+1][y] == 6)||(grille[x+1][y] == 6.1)){
                        x++;
                        sens = 1;
                    }
                    else if ((grille[x+1][y] == -11) || (grille[x+1][y] == -10)){
                        youwin();
                        return 0
                    }
                    else{stoptrain = 1}
                }
                
            }   
        
            if (gameo.classList.contains('youlost')){
            
                gameo.removeChild(texte);
                gameo.className='';
            }
            youlost();
        
        
        
        
}

//Convertie la grille de décors en numéro
//Fonction fini//
function convertNumberJeu(){

            var tabN = Array(10);

            for (let i = 0; i < ligne; i++){

                tabN[i] = Array(10);

                for (let j = 0; j < colonne; j++){

                    var test = tableaujeu[i][j];

                    //Rails Droit
                    if (test.classList.contains('rail1')){
                        tabN[i][j] = 1;
                    }
                    else if (test.classList.contains('rail2')){
                        tabN[i][j] = 2;
                    }
                    else if (test.classList.contains('rail1_pont')){
                        tabN[i][j] = 1.1;
                    }
                    else if (test.classList.contains('rail2_pont')){
                        tabN[i][j] = 2.1;
                    }
                    else if (test.classList.contains('rail1_aposer')){
                        tabN[i][j] = -1;
                    }
                    else if (test.classList.contains('rail2_aposer')){
                        tabN[i][j] = -2;
                    }

                    //Rails Tourne
                    else if (test.classList.contains('railt1')){
                        tabN[i][j] = 3;
                    }
                    else if (test.classList.contains('railt2')){
                        tabN[i][j] = 4;
                    }
                    else if (test.classList.contains('railt3')){
                        tabN[i][j] = 5;
                    }
                    else if (test.classList.contains('railt4')){
                        tabN[i][j] = 6;
                    }
                    else if (test.classList.contains('railt1_pont')){
                        tabN[i][j] = 3.1;
                    }
                    else if (test.classList.contains('railt2_pont')){
                        tabN[i][j] = 4.1;
                    }
                    else if (test.classList.contains('railt3_pont')){
                        tabN[i][j] = 5.1;
                    }
                    else if (test.classList.contains('railt4_pont')){
                        tabN[i][j] = 6.1;
                    }
                    else if (test.classList.contains('railt1_aposer')){
                        tabN[i][j] = -3;
                    }
                    else if (test.classList.contains('railt2_aposer')){
                        tabN[i][j] = -4;
                    }
                    else if (test.classList.contains('railt3_aposer')){
                        tabN[i][j] = -5;
                    }
                    else if (test.classList.contains('railt4_aposer')){
                        tabN[i][j] = -6;
                    }

                    //Premier Rails
                    else if (test.classList.contains('rail1_droit_begin')){
                        tabN[i][j] = 10;
                    }
                    //Dernier Rails
                    else if (test.classList.contains('rail1_droit_finish')){
                        tabN[i][j] = -10;
                    }
                    else if (test.classList.contains('rail2_droit_begin')){
                        tabN[i][j] = 11;
                    }
                    //Dernier Rails
                    else if (test.classList.contains('rail2_droit_finish')){
                        tabN[i][j] = -11;
                    }
                    //Decors
                    else if (test.classList.contains('arbre1')){
                        tabN[i][j] = 21;
                    }
                    //Dernier Rails
                    else if (test.classList.contains('cowboy')){
                        tabN[i][j] = 22;
                    }
                    else if (test.classList.contains('eau')){
                        tabN[i][j] = 23;
                    }
                    //Dernier Rails
                    else if (test.classList.contains('gare1')){
                        tabN[i][j] = 24;
                    }
                    else if (test.classList.contains('gare2')){
                        tabN[i][j] = 25;
                    }
                    else if (test.classList.contains('herbeeau1')){
                        tabN[i][j] = 26;
                    }
                    else if (test.classList.contains('herbeeau1_2')){
                        tabN[i][j] = 26.2;
                    }
                    else if (test.classList.contains('herbeeau1_4')){
                        tabN[i][j] = 26.4;
                    }
                    else if (test.classList.contains('herbeeau1_5')){
                        tabN[i][j] = 26.5;
                    }
                    else if (test.classList.contains('herbeeau1_7')){
                        tabN[i][j] = 26.7;
                    }
                    else if (test.classList.contains('herbeeau1_8')){
                        tabN[i][j] = 26.7;
                    }
                    else if (test.classList.contains('herbeeau2')){
                        tabN[i][j] = 27;
                    }
                    else if (test.classList.contains('herbeeau2_2')){
                        tabN[i][j] = 27.2;
                    }
                    else if (test.classList.contains('herbeeau2_3')){
                        tabN[i][j] = 27.3;
                    }
                    else if (test.classList.contains('herbeeau2_4')){
                        tabN[i][j] = 27.4;
                    }

                    else if (test.classList.contains('boueeau1')){
                        tabN[i][j] = 30.1;
                    }
                    else if (test.classList.contains('boueeau2')){
                        tabN[i][j] = 30.2;
                    }
                    else if (test.classList.contains('boueeau3')){
                        tabN[i][j] = 30.3;
                    }
                    else if (test.classList.contains('boueeau4')){
                        tabN[i][j] = 30.4;
                    }
                    //Dernier Rails
                    else if (test.classList.contains('rocher')){
                        tabN[i][j] = 28;
                    }
                    else if (test.classList.contains('pont')){
                        tabN[i][j] = 29;
                    }
                    
                }
            }

            return tabN;
}
        
function resetJeu (e){
    console.log("Fonction ResetJeu");
    nbrail1 = nombrerail1;
    nbrail2 = nombrerail2;
            
    if (gameo.classList.contains('youlost')){
                
        gameo.removeChild(texte);
        gameo.className='';
    }
    else if (gamew.classList.contains('youwin')){

        gamew.removeChild(texte);
        gamew.className='';
    }
    
    document.getElementById("nbrail1").innerHTML=nbrail1 + "x";
    document.getElementById("nbrail2").innerHTML=nbrail2 + "x";

    initJeu();
}

console.log('nbrail1 :',nbrail1);
console.log('nbrail2 :',nbrail2); 

var sel1 = document.querySelector('#select1')
var sel2 = document.querySelector('#select2')

//Fonction fini//
function select1(e){

    if (nbrail1 > 0){
        cl = 1;
        var currentJeu = document.querySelector('#currentJeu');
        currentJeu.className = 'rail1';
    }
}
sel1.addEventListener('click', select1);

function select2(e){

    if (nbrail2 > 0){
        cl = 5;
        var currentJeu = document.querySelector('#currentJeu');
        currentJeu.className = 'railt1';
    }
}
sel2.addEventListener('click', select2);

console.log('nbrail1 :',nbrail1);
console.log('nbrail2 :',nbrail2); 

//Fonction Fini//
function rotateJeu(e){
    if (e.keyCode == 82){
        
        var currentJeu = document.querySelector('#currentJeu');

        //Fait tourner les rails droits
        if (currentJeu.classList.contains('rail1')){
            currentJeu.className = 'rail2';
            cl = 2;
        }
        else if (currentJeu.classList.contains('rail2')){
            currentJeu.className = 'rail1';
            cl = 1;
        }

        //Fait tourner les rails angles
        else if (currentJeu.classList.contains('railt1')){
            currentJeu.className = 'railt2';
            cl = 4;
        }
        else if (currentJeu.classList.contains('railt2')){
            currentJeu.className = 'railt3';
            cl = 5;
        }
        else if (currentJeu.classList.contains('railt3')){
            currentJeu.className = 'railt4';
            cl = 6;
        }
        else if (currentJeu.classList.contains('railt4')){
            currentJeu.className = 'railt1';
            cl = 3;
        }
    }
}
document.addEventListener('keydown', rotateJeu);
        
//Fonction Fini
function obstacle(laCible){

            //Décors
            if (laCible.classList.contains('arbre1')){
                return true;
            }
            else if (laCible.classList.contains('cowboy')){
                return true;
            }
            else if (laCible.classList.contains('eau')){
                return true;
            }
            else if (laCible.classList.contains('gare1')){
                return true;
            }
            else if (laCible.classList.contains('gare2')){
                return true;
            }
            else if (laCible.classList.contains('herbeeau1')){
                return true;
            }
            else if (laCible.classList.contains('herbeeau2')){
                return true;
            }
            else if (laCible.classList.contains('rocher')){
                return true;
            }
            else if (laCible.classList.contains('pont')){
                return true;
            }


            //Rails
            else if (laCible.classList.contains('rail1')){
                return true;
            }
            else if (laCible.classList.contains('rail2')){
                return true;
            } 
            else if (laCible.classList.contains('railt1')){
                return true;
            }
            else if (laCible.classList.contains('railt2')){
                return true;
            }
            else if (laCible.classList.contains('railt3')){
                return true;
            }
            else if (laCible.classList.contains('railt4')){
                return true;
            }
            else {
                return false;
            }
}
        
//Fonction Fini
function placeJeu(e) {
        
            var laCible = event.target;
            var col = laCible.dataset.column;
            var li = laCible.dataset.ligne;
        
            if(cl == 1 && obstacle(laCible) == false && nbrail1 > 0){
                setJeu(li, col, cl);
                nbrail1--;
                document.getElementById("nbrail1").innerHTML=nbrail1 + "x";
            }
            if(cl == 2 && obstacle(laCible) == false && nbrail1 > 0){
                setJeu(li, col, cl);
                nbrail1--;
                document.getElementById("nbrail1").innerHTML=nbrail1 + "x";
                
            }
            if(cl == 3 && obstacle(laCible) == false && nbrail2 > 0){
                setJeu(li, col, cl);
                nbrail2--;
                document.getElementById("nbrail2").innerHTML=nbrail2 + "x";
            }
            if(cl == 4 && obstacle(laCible) == false && nbrail2 > 0){
                setJeu(li, col, cl);
                nbrail2--;
                document.getElementById("nbrail2").innerHTML=nbrail2 + "x";
                
            }
            if(cl == 5 && obstacle(laCible) == false && nbrail2 > 0){
                setJeu(li, col, cl);
                nbrail2--;
                document.getElementById("nbrail2").innerHTML=nbrail2 + "x";
                
            }
            if(cl == 6 && obstacle(laCible) == false && nbrail2 > 0){
                setJeu(li, col, cl);
                nbrail2--;
                document.getElementById("nbrail2").innerHTML=nbrail2 + "x";
                
            }
}
tab2.addEventListener('click', placeJeu);
    
gamew = document.querySelector('#test2');
gameo = document.querySelector('#test');
    
//Fonction Fini
function setJeu(row, column, decor){
    var elt = tableaujeu[row][column];
    
    //Rail Droit et Rail Tournant
    if (decor == 1){
    elt.className = 'rail1';
    }
    else if (decor == 2){
        elt.className = 'rail2'
    }
    else if (decor == 1.1){
        elt.className = 'rail1_pont';
    }
    else if (decor == 2.1){
        elt.className = 'rail2_pont'
    }
    else if (decor == -1){
        elt.className = 'rail1_aposer';
    }
    else if (decor == -2){
        elt.className = 'rail2_aposer';
    }
    else if (decor == 3){
        elt.className = 'railt1';
    }
    else if (decor == 4){
        elt.className = 'railt2';
    }
    else if (decor == 5){
        elt.className = 'railt3';
    }
    else if (decor == 6){
        elt.className = 'railt4';
    }
    else if (decor == 3.1){
        elt.className = 'railt1_pont';
    }
    else if (decor == 4.1){
        elt.className = 'railt2_pont';
    }
    else if (decor == 5.1){
        elt.className = 'railt3_pont';
    }
    else if (decor == 6.1){
        elt.className = 'railt4_pont';
    }
    else if (decor == -3){
        elt.className = 'railt1_aposer';
    }
    else if (decor == -4){
        elt.className = 'railt2_aposer';
    }
    else if (decor == -5){
        elt.className = 'railt3_aposer';
    }
    else if (decor == -6){
        elt.className = 'railt4_aposer';
    }
    
    //Rail FIN DEBUT
    else if (decor == 10){
        elt.className = 'rail1_droit_begin';
    }
    else if (decor == 11){
        elt.className = 'rail2_droit_begin';
    }
    else if (decor == -11){
        elt.className = 'rail2_droit_finish';
    }
    else if (decor == -10){
        elt.className = 'rail1_droit_finish';
    }
    
    //Decors
    else if (decor == 21){
        elt.className = 'arbre1';
    }
    else if (decor == 22){
        elt.className = 'cowboy';
    }
    else if (decor == 23){
    elt.className = 'eau';
    }
    else if (decor == 24){
        elt.className = 'gare1';
    }
    else if (decor == 25){
        elt.className = 'gare2';
    }
    else if (decor == 26){
        elt.className  = 'herbeeau1';
    }
    else if (decor == 26.2){
        elt.className  = 'herbeeau1_2';
    }
    else if (decor == 26.4){
        elt.className  = 'herbeeau1_4';
    }
    else if (decor == 26.5){
        elt.className  = 'herbeeau1_5';
    }
    else if (decor == 26.7){
        elt.className  = 'herbeeau1_7';
    }
    else if (decor == 26.8){
        elt.className  = 'herbeeau1_8';
    }
    
    else if (decor == 27){
        elt.className = 'herbeeau2';
    }
    else if (decor == 27.2){
        elt.className = 'herbeeau2_2';
    }
    else if (decor == 27.3){
        elt.className = 'herbeeau2_3';
    }
    else if (decor == 27.4){
        elt.className = 'herbeeau2_4';
    }
    
    else if (decor == 28){
        elt.className = 'rocher';
    }
    else if (decor == 29){
        elt.className = 'pont';
    }

    else if (decor == 30.1){
        elt.className = 'boueeau1';
    }
    else if (decor == 30.2){
        elt.className = 'boueeau2';
    }
    else if (decor == 30.3){
        elt.className = 'boueeau3';
    }
    else if (decor == 30.4){
        elt.className = 'boueeau4';
    }
}

function over(e){
    
    gameo.className = 'over';
    
    texte = document.createElement('h2');
    gameo.appendChild(texte);

    texte.innerHTML = 'The path does not work'

    gameo.addEventListener('click', reset);

}

function youlost(e){
    
    gameo.className = 'youlost';
    
    texte = document.createElement('h2');
    gameo.appendChild(texte);

    texte.innerHTML = 'GAME OVER'

    gameo.addEventListener('click', reset);

}

function youwin(e){

    
    cBon = 0;
    console.log('cBon:',cBon);
    gamew.className = 'youwin';
    
    texte = document.createElement('h2');
    gamew.appendChild(texte);

    texte.innerHTML = 'You Win'

    gamew.addEventListener('click', reset);
}

function win(e){

    
    cBon = 0;
    console.log('cBon:',cBon);
    gamew.className = 'win';
    
    texte = document.createElement('h2');
    gamew.appendChild(texte);

    texte.innerHTML = 'The path work'

    gamew.addEventListener('click', reset);
}

function GoCrea(){
    var modejeu = document.querySelector('.modejeu');
    modejeu.classList.add('invisible');
    var modecrea = document.querySelector('.modecrea');
    modecrea.classList.remove('invisible');
    nombrerail1 = 0;
    nombrerail2 = 0;
}





