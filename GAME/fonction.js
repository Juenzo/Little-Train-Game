console.log('yo');
var div = document.querySelector('#unique');

// On commence par vider la balise
div.innerHTML = '';


const ligne = 6;
const colonne = 7;

var tab = document.createElement('table');
div.appendChild(tab);

var tableau = Array(10);


for(let i = 0; i < ligne; i++){
    var tr = document.createElement('tr');
    tab.appendChild(tr);


    tableau[i] = Array(10);

    for(let j = 0; j < colonne; j++){
        var td = document.createElement('td');
        tr.appendChild(td);
        td.dataset['column'] = j;
        tableau[i][j] = td;
    }
}

var turn = 1;

function set(row, column, player){
  var elt = tableau[row][column];
  if (player > 0){
    
    elt.className = 'joueur1';
  }
  else{
    elt.className = 'joueur2';
  }
}

function play( column ){
  var y = 0;
  
  for(let i = 0; i < 6; i++){
    var elt = tableau[i][column];
    if(elt.classList.contains('joueur1') == true || elt.classList.contains('joueur2') == true ){
      if(i == 0){
        alert('Vous ne pouvez rien placer ici');
        return;
      }
      i--;
      y = i;
      break;
    }
    else{
      y = i;
    }
  }

  set(y, column, turn);
  turn = -turn;
}



var evts = document.querySelector('#events');

function action(e) {
    
    var col = e.target.dataset.column;

    console.log(col);
    play(col);
}

tab.addEventListener('click', action);