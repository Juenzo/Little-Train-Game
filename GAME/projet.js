console.log('yo');

var div = document.querySelector('#unique');

var tab = document.createElement('table');
div.appendChild(tab);

var tableau = Array(10);

const ligne = 10;
const colonne = 10;

gamew = document.querySelector('#test2');
gameo = document.querySelector('#test');

nbLvl = 5;
niveau = 1;
cl = 0;


function set(row, column, decor){
    var elt = tableau[row][column];
    if (decor == 1){
      
      elt.className = 'arbre1';
    }
    else if (decor == -1){

        elt.className = 'gare1';
    }
    else if (decor == -2){
        elt.className = 'gare2';
    }
    else if (decor == 2){
      elt.className = 'rocher';
    }
    else if (decor == 3){
        elt.className = 'rail1';
    }
    else if (decor == 3.1){
        elt.className = 'railp1'
    }
    else if (decor == 4){
        elt.className = 'rail2'
    }
    else if (decor == 4.1){
        elt.className = 'railp2'
    }
    else if (decor == 5){
        elt.className = 'railt1';
    }
    else if (decor == 5.1){
        elt.className = 'railtp1'
    }
    else if (decor == 6){
        elt.className = 'railt2';
    }
    else if (decor == 6.1){
        elt.className = 'railtp2'
    }
    else if (decor == 7){
        elt.className = 'railt3';
    }
    else if (decor == 7.1){
        elt.className = 'railtp3'
    }
    else if (decor == 8){
        elt.className = 'railt4';
    }
    else if (decor == 8.1){
        elt.className = 'railtp4'
    }
    else if (decor == 9){
        elt.className = 'pont';
    }
    else if (decor == 10){
        elt.className = 'finish1';
    }
    else if (decor == 11){
        elt.className = 'finish2';
    }
    else if (decor == 16){
        elt.className = 'finish3'
    }
    else if (decor == 18){
        elt.className = 'finish4'
    }
    else if (decor == 12){
        elt.className = 'herbeeau1_1';
    }
    else if (decor == 12.1){
        elt.className = 'herbeeau1_2';
    }
    else if (decor == 12.2){
        elt.className = 'herbeeau1_3';
    }
    else if (decor == 12.3){
        elt.className = 'herbeeau1_4';
    }
    else if (decor == 12.4){
        elt.className = 'herbeeau1_5';
    }
    else if (decor == 12.5){
        elt.className = 'herbeeau1_6';
    }
    else if (decor == 12.6){
        elt.className = 'herbeeau1_7';
    }
    else if (decor == 12.7){
        elt.className = 'herbeeau1_8';
    }
    else if (decor == 13){
        elt.className  = 'herbeeau2_1';
    }
    else if (decor == 13.1){
        elt.className  = 'herbeeau2_2';
    }
    else if (decor == 13.2){
        elt.className  = 'herbeeau2_3';
    }
    else if (decor == 13.3){
        elt.className  = 'herbeeau2_4';
    }
    else if (decor == 14){
        elt.className = 'eau';
    }
    else if (decor == 14.1){
        elt.className = 'eau2';
    }
    else if (decor == 15){
        elt.className = 'cowboy';
    }
    else if (decor == 17){
        elt.className = 'boueeau1';
    }
    else if (decor == 17.1){
        elt.className = 'boueeau2';
    }
    else if (decor == 17.2){
        elt.className = 'boueeau3';
    }
    else if (decor == 17.3){
        elt.className = 'boueeau4';
    }
  }

function obstacle(laCible){
      if (laCible.classList.contains('arbre1')){
          return true;
      }
      else if (laCible.classList.contains('rocher')){
          return true;
      }
      else if (laCible.classList.contains('gare1')){
          return true;
      }
      else if (laCible.classList.contains('gare2')){
          return true;
      }
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
    else if (laCible.classList.contains('railp1')){
        return true;
    }
    else if (laCible.classList.contains('railp2')){
        return true;
    }
    else if (laCible.classList.contains('railtp1')){
        return true;
    }
    else if (laCible.classList.contains('railtp2')){
        return true;
    }
    else if (laCible.classList.contains('railtp3')){
        return true;
    }
    else if (laCible.classList.contains('railtp4')){
        return true;
    }
    else{
          return false;
      }
  }



  var sel1 = document.querySelector('#select1')
  var sel2 = document.querySelector('#select2')



  function select1(e){

    if (nbrail1 > 0){
        cl = 3;
        var current = document.querySelector('#current');
        current.className = 'railg1';
    }

  }

sel1.addEventListener('click', select1);

function select2(e){

    if (nbrail2 > 0){
        cl = 5;
        var current = document.querySelector('#current');
        current.className = 'railtg1';
    }
    
  }

sel2.addEventListener('click', select2);

  function place(e) {
    
    var laCible = event.target;
    var col = laCible.dataset.column;
    var li = laCible.dataset.ligne;



    if(cl == 3 && obstacle(laCible) == false && nbrail1 > 0){
        if (laCible.classList.contains('pont')){
            cl = 3.1;
            set(li, col, cl);
            nbrail1--;
            document.getElementById("nbrail1").innerHTML=nbrail1 + "x";
            cl = 3;
        }
        else{

        set(li, col, cl);
        nbrail1--;
        document.getElementById("nbrail1").innerHTML=nbrail1 + "x";
        }
    }
    else if(cl == 4 && obstacle(laCible) == false && nbrail1 > 0){
        if (laCible.classList.contains('pont')){
            cl = 4.1;
            set(li, col, cl);
            nbrail1--;
            document.getElementById("nbrail1").innerHTML=nbrail1 + "x";
            cl = 4;
        }
        else {
        set(li, col, cl);
        nbrail1--;
        document.getElementById("nbrail1").innerHTML=nbrail1 + "x";
        }
        
    }
    else if (cl == 5 && obstacle(laCible) == false && nbrail2 > 0){
        if (laCible.classList.contains('pont')){
            cl = 5.1;
            set(li, col, cl);
            nbrail2--;
            document.getElementById("nbrail2").innerHTML=nbrail1 + "x";
            cl = 5;
        }
        else {
        set(li, col, cl);
        nbrail2--;
        document.getElementById("nbrail2").innerHTML=nbrail2 + "x";
        }
    }
    else if(cl == 6 && obstacle(laCible) == false && nbrail2 > 0){
        if (laCible.classList.contains('pont')){
            cl = 6.1;
            set(li, col, cl);
            nbrail2--;
            document.getElementById("nbrail2").innerHTML=nbrail1 + "x";
            cl = 6;
        }
        else {
        set(li, col, cl);
        nbrail2--;
        document.getElementById("nbrail2").innerHTML=nbrail2 + "x";
        }
        
    }
    else if(cl == 7 && obstacle(laCible) == false && nbrail2 > 0){
        if (laCible.classList.contains('pont')){
            cl = 7.1;
            set(li, col, cl);
            nbrail2--;
            document.getElementById("nbrail2").innerHTML=nbrail1 + "x";
            cl = 7;
        }
        else {
        set(li, col, cl);
        nbrail2--;
        document.getElementById("nbrail2").innerHTML=nbrail2 + "x";
        }
        
    }
    else if(cl == 8 && obstacle(laCible) == false && nbrail2 > 0){
        if (laCible.classList.contains('pont')){
            cl = 8.1;
            set(li, col, cl);
            nbrail2--;
            document.getElementById("nbrail2").innerHTML=nbrail1 + "x";
            cl = 8;
        }

        else {
        set(li, col, cl);
        nbrail2--;
        document.getElementById("nbrail2").innerHTML=nbrail2 + "x";
        }
        
    }
}

tab.addEventListener('click', place);



document.addEventListener('keydown', rotate);


function rotate(e){
    if (e.keyCode == 82){
        var current = document.querySelector('#current');

        if (current.classList.contains('railg1')){
            current.className = 'railg2';
            cl = 4;
        }
        else if (current.classList.contains('railg2')){
            current.className = 'railg1';
            cl = 3;
        }
        else if (current.classList.contains('railtg1')){
            current.className = 'railtg2';
            cl = 6;
        }
        else if (current.classList.contains('railtg2')){
            current.className = 'railtg3';
            cl = 7;
        }
        else if (current.classList.contains('railtg3')){
            current.className = 'railtg4';
            cl = 8;
        }
        else if (current.classList.contains('railtg4')){
            current.className = 'railtg1';
            cl = 5;
        }
    }
}

function convertNumber(){

    var tabN = Array(10);

    for (let i = 0; i < ligne; i++){

        tabN[i] = Array(10);

        for (let j = 0; j < colonne; j++){

            var test = tableau[i][j];

            if (test.classList.contains('rail1') || test.classList.contains('railp1')){
                tabN[i][j] = 1;
            }
            else if (test.classList.contains('rail2') ||  test.classList.contains('railp2')){
                tabN[i][j] = 2;
            }
            else if (test.classList.contains('railt1') || test.classList.contains('railtp1')){
                tabN[i][j] = 5;
            }
            else if (test.classList.contains('railt2') || test.classList.contains('railtp2')){
                tabN[i][j] = 3;
            }
            else if (test.classList.contains('railt3') || test.classList.contains('railtp3')){
                tabN[i][j] = 4;
            }
            else if (test.classList.contains('railt4') || test.classList.contains('railtp4')){
                tabN[i][j] = 6;
            }
            else if (test.classList.contains('finish1')){
                tabN[i][j] = 10;
            }
            else if (test.classList.contains('finish2')){
                tabN[i][j] = 11;
            }
            else if (test.classList.contains('finish3')){
                tabN[i][j] = 12;
            }
            else if (test.classList.contains('gare1') || test.classList.contains('gare2') || test.classList.contains('rocher') || test.classList.contains('arbre1')){
                tabN[i][j] = -1;
            }
            else{
                tabN[i][j] = 0;
            }
            
        }
    }

    return tabN;
}

function verif (e){
    var stoptrain = 0;
    var sens = dir;
    var x = debX;
    var y = debY;


    var grille = convertNumber();


    while (stoptrain == 0){

        console.log(x);
        console.log(y);
        console.log(sens);



        if (sens == 1){
            if (y+1 >= colonne){
                stoptrain = 1;
            }
            else if (grille[x][y+1] == 2){
                y++;
            }
            else if (grille[x][y+1] == 3){
                y++;
                sens = 4;
            }
            else if (grille[x][y+1] == 4){
                y++;
                sens = 2;
            }
            else if (grille[x][y+1] == 11){
                win();
                return 0
            }
            else{stoptrain = 1}
        }

        else if (sens == 2){
            if (x-1 < 0){
                stoptrain = 1;
            }
            else if (grille[x-1][y] == 1){
                x--;
            }
            else if (grille[x-1][y] == 5){
                x--;
                sens = 1;
            }
            else if (grille[x-1][y] == 3){
                x--;
                sens = 3;
            }
            else if (grille[x-1][y] == 10 || grille[x-1][y] == 12){
                win();
                return 0
            }
            else{stoptrain = 1}
        }


        else if (sens == 3){
            if (y-1 < 0){
                stoptrain = 1;
            }
            else if (grille[x][y-1] == 2){
                y--;
            }
            else if (grille[x][y-1] == 5){
                y--;
                sens = 4;
            }
            else if (grille[x][y-1] == 6){
                y--;
                sens = 2;
            }
            else if (grille[x][y-1] == 11){
                win();
                return 0
            }
            else{stoptrain = 1}
        }

        else if (sens == 4){
            if (x+1 >= ligne){
                stoptrain = 1;
            }
            else if (grille[x+1][y] == 1){
                x++;
            }
            else if (grille[x+1][y] == 4){
                x++;
                sens = 3;
            }
            else if (grille[x+1][y] == 6){
                x++;
                sens = 1;
            }
            else if (grille[x+1][y] == 10 || grille[x+1][y] == 18){
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

function initNiv (e){
    if (niveau == 1){
        
        for (let i = 0; i < ligne; i++){
            for (let j = 0; j < colonne; j++){
                tableau[i][j].className = '';
            }
        }
    
        set(0,9,1);
        set(1,2,1);
        set(1,4,5);
        set(1,7,4);
        set(1,9,11);
        set(3,0,1);
        set(3,3,2);
        set(3,4,3);
        set(3,9,1);
        set(5,6,1);
        set(6,3,1);
        set(6,0,-1);
        set(6,1,-2);
        set(7,0,4);
        set(7,1,4);
        set(7,4,7);
        set(8,7,1);
        set(8,9,2);
            
        nbrail1 = 9;
        nbrail2 = 0;
    
        dir = 1;
        debX = 7;
        debY = 0;
    
        document.getElementById("nbrail1").innerHTML=nbrail1 + "x";
        document.getElementById("nbrail2").innerHTML=nbrail2 + "x";
    }
    if (niveau == 2){

        for (let i = 0; i < ligne; i++){
            for (let j = 0; j < colonne; j++){
                tableau[i][j].className = '';
            }
        }

        set(1,4,4);
        set(1,1,1);
        set(1,6,2);
        set(1,8,1);
        set(2,0,15);
        set(2,4,1);
        set(3,0,4);
        set(3,1,4);
        set(3,3,7);
        set(3,6,4);
        set(4,5,1);
        set(4,7,2);
        set(4,9,2);
        set(5,1,1);
        set(6,0,2);
        set(7,3,1);
        set(7,5,5);
        set(7,8,7);
        set(8,4,2);
        set(8,9,1);
        set(9,1,1);
        set(9,5,10);


        nbrail1 = 10;
        nbrail2 = 4;
    
        dir = 1;
        debX = 3;
        debY = 0;
    
        document.getElementById("nbrail1").innerHTML=nbrail1 + "x";
        document.getElementById("nbrail2").innerHTML=nbrail2 + "x";

    }
    if (niveau == 3 ){

        for (let i = 0; i < ligne; i++){
            for (let j = 0; j < colonne; j++){
                tableau[i][j].className = '';
            }
        }

        set(0,2,5);
        set(0,4,4);
        set(0,5,7);
        set(0,6,2);
        set(0,7,2);
        set(0,8,2);
        set(0,9,2);
        set(1,3,2);
        set(1,4,2);
        set(1,5,2);
        set(1,6,2);
        set(2,0,1);
        set(2,8,1);
        set(3,2,1);
        set(3,5,3);
        set(4,0,12.1);
        set(4,1,13.1);
        set(4,2,5.1);
        set(4,3,9);
        set(4,4,9);
        set(4,5,9);
        set(4,6,13.1);
        set(4,7,12.1);
        set(4,8,12.1);
        set(4,9,13.1);
        set(5,0,14.1);
        set(5,1,14.1);
        set(5,2,3.1);
        set(5,3,14.1);
        set(5,4,14.1);
        set(5,5,14.1);
        set(5,6,14.1);
        set(5,7,14.1);
        set(5,8,14.1);
        set(5,9,14.1);
        set(6,0,13.3);
        set(6,1,13.3);
        set(6,2,9);
        set(6,3,12.3);
        set(6,4,13.3);
        set(6,5,12.3);
        set(6,6,12.3);
        set(6,7,13.3);
        set(6,8,13.3);
        set(6,9,12.3);
        set(7,2,8);
        set(7,6,2);
        set(7,7,2);
        set(7,8,2);
        set(7,9,16);
        set(8,1,1);
        set(8,5,3);
        set(8,8,1);
        set(9,4,1);
        set(9,9,7);



        nbrail1 = 13;
        nbrail2 = 5;
    
        dir = 3;
        debX = 0;
        debY = 5;
    
        document.getElementById("nbrail1").innerHTML=nbrail1 + "x";
        document.getElementById("nbrail2").innerHTML=nbrail2 + "x";




    }
    if (niveau == 4){
        for (let i = 0; i < ligne; i++){
            for (let j = 0; j < colonne; j++){
                tableau[i][j].className = '';
            }
        }




        set(0,1,1);
        set(0,8,10);
        set(1,0,2);
        set(1,6,5);
        set(1,8,7);
        set(1,9,2);
        set(2,7,15);
        set(3,3,1);
        set(3,4,5);
        set(3,9,1);
        set(4,1,1);
        set(4,6,2);
        set(5,5,4);
        set(6,2,2);
        set(6,3,1);
        set(6,4,2);
        set(6,5,1);
        set(7,0,4);
        set(7,1,4);
        set(7,4,17);
        set(7,5,17.1);
        set(7,6,2);
        set(7,8,2);
        set(8,1,1);
        set(8,4,17.3);
        set(8,5,17.2);
        set(8,6,2);
        set(9,2,8);
        set(9,9,1);


        nbrail1 = 13;
        nbrail2 = 5;
    
        dir = 1;
        debX = 7;
        debY = 0;
    
        document.getElementById("nbrail1").innerHTML=nbrail1 + "x";
        document.getElementById("nbrail2").innerHTML=nbrail2 + "x";
    }
    if (niveau == 5){
        for (let i = 0; i < ligne; i++){
            for (let j = 0; j < colonne; j++){
                tableau[i][j].className = '';
            }
        }

        set(0,6,5);
        set(1,7,1);
        set(1,9,3);
        set(2,1,1);
        set(2,6,1);
        set(2,7,2);
        set(2,9,18);
        set(3,8,1);
        set(4,3,2);
        set(4,9,1);
        set(6,3,1);
        set(6,4,1);
        set(6,5,1);
        set(6,6,2);
        set(6,7,12.6);
        set(6,8,12.7);
        set(6,9,12.7);
        set(7,0,1);
        set(7,5,4);
        set(7,7,13);
        set(7,8,14);
        set(7,9,14);
        set(8,7,12.4);
        set(8,8,12.5);
        set(8,9,12.5);
        set(9,1,1);
        set(9,7,4);
        set(9,8,6);



        nbrail1 = 9;
        nbrail2 = 10;
    
        dir = 3;
        debX = 9;
        debY = 8;
    
        document.getElementById("nbrail1").innerHTML=nbrail1 + "x";
        document.getElementById("nbrail2").innerHTML=nbrail2 + "x";


    }
}

function reset (e){

    initNiv();

    if (gameo.classList.contains('over')){
    
        gameo.removeChild(texte);
        gameo.className='';
    }
    else if (gamew.classList.contains('win')){

        next.removeChild(next1);
        next.removeChild(next2);
        gamew.removeChild(next);

        precedent.removeChild(precedent1);
        precedent.removeChild(precedent2);
        gamew.removeChild(precedent);

        gamew.className='';
    }
}

function over(e){
    
    gameo.className = 'over';
    
    texte = document.createElement('h2');
    gameo.appendChild(texte);

    texte.innerHTML = 'GAME OVER'

    gameo.addEventListener('click', reset);

}

function win(e){
    
    gamew.className = 'win';

    precedent = document.createElement('div');
    gamew.appendChild(precedent);
    precedent.className = 'next';


    precedent1 = document.createElement('p');
    precedent.appendChild(precedent1);
    precedent1.innerHTML = 'Previous Level'

    precedent2 = document.createElement('img');
    precedent.appendChild(precedent2);
    precedent2.src = "img/fleche_gauche.png";


    next = document.createElement('div');
    gamew.appendChild(next);
    next.className = 'next';

    next1 = document.createElement('p');
    next.appendChild(next1);
    next1.innerHTML = 'Next Level'

    next2 = document.createElement('img');
    next.appendChild(next2);
    next2.src = "img/fleche_droite.png";


    precedent.addEventListener('click', prevLvl);
    next.addEventListener('click', nextLvl);

}

function nextLvl(e){
    if (niveau < nbLvl){
    niveau++;
    }
    reset();
}

function prevLvl(e){
    if (niveau > 1){
        niveau--;
    }
    reset();
}




 for(let i = 0; i < ligne; i++){
    var tr = document.createElement('tr');
    tab.appendChild(tr);
    tableau[i] = Array(10);
    
    for(let j = 0; j < colonne; j++){
        var td = document.createElement('td');
        tr.appendChild(td);
        td.dataset['ligne'] = i;
        td.dataset['column'] = j;
        tableau[i][j] = td;
    }

}

initNiv();





