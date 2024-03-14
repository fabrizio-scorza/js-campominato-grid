// dichiarare una variabile associata all'elemento root
const r = document.querySelector(':root');

// ascoltare il click sul bottone inizia
    // associare il bottone ad una variabile per poter interagire con lui
    const startButtonElement = document.getElementById('start-btn'); //object

    // associare il wrapper ad una variabile per poter interagire con lui
    const fieldElement = document.querySelector('.wrapper'); //object
    
    // ascoltarne il click
    startButtonElement.addEventListener('click', startGame);

//funzione che inizia il gioco
function startGame(){
    //azzerare il campo in caso fosse già stato cliccato il bottone
    fieldElement.innerHTML ='';

    //assegnare alla variabile il risultato della funzione che definisce la dimensione in base al livello
    let gridSide = getSize (); //number

    //invocare la funzione che cambia il valore di side nel css
    setSide(gridSide);

    //invocare la funzione che genera il campo
    createField(gridSide);
}

//funzione che ritora il lato del campo in base alla difficoltà
function getSize(){
     //ascoltare il click sul select che sceglie la difficoltà e associarne il valore ad una variabile
     const difficultySelection = document.getElementById('difficulty') //object
     const difficulty = difficultySelection.value;             

     //controllare la difficoltà per stabilire il lato del quadrato
        let difficutlySide = 10 //number 

         if (difficulty === '3'){
             difficutlySide = 7; //number
         } else if (difficulty === '2'){
             difficutlySide = 9; //number
         }

         return difficutlySide;
}

//funzione che modifica la variabile nel css
function setSide (value){
    r.style.setProperty('--side', value);
}

// funzione che genera il campo minato
function createField(side){
    //dichiarare una variabile con il numero totale di elementi da creare nel DOM
    const area = side**2; //number

    //creare gli elementi da inserire nel DOM per ogni casella
    for(let i = 0; i < area; i++){
        //creare una variabile numero da inserire all'interno della cella
        let num = i + 1; //numbre
        
        //creare l'oggetto da posizionare nel DOM e inserirlo in una variabile
        const cellElement = document.createElement('div'); // object
        
        //dichiarare la classe cell come classe dell'elemento appena creato
        cellElement.className = 'cell';

        // inserire all'interno del codice html il numero della casella corrispondente 
        cellElement.innerHTML = num;

        //aggiungere l'elemento creato all'interno del campo
        fieldElement.append(cellElement);

        //ascoltare il click sulla casella 
        cellElement.addEventListener('click', function(){
            // aggiungere o togliere la classe che ne colora il backgroud
            cellElement.classList.toggle('clicked');

            console.log(`cliccata casella numero: ${num}`);
        })
    }
}


