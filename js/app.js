// dichiarare una variabile associata all'elemento root
const r = document.querySelector(':root');

// ascoltare il click sul bottone inizia
    // associare il bottone ad una variabile per poter interagire con lui
    const startButton = document.getElementById('start-btn'); //object

    // associare il wrapper ad una variabile per poter interagire con lui
    const restartField = document.querySelector('.wrapper'); //object
    
    // ascoltarne il click
    startButton.addEventListener('click', function (){
        //azzerare il campo in caso fosse già stato cliccato il bottone
        restartField.innerHTML ='';

        //ascoltare il click sul select che sceglie la difficoltà e associarne il valore ad una variabile
        const difficultySelection = document.getElementById('difficulty') //object
        const difficulty = difficultySelection.value;
        
       

        //controllare la difficoltà per stabilire il lato del quadrato
            if (difficulty == 1){
                gridSide = 10; //number
            } else if (difficulty == 2){
                gridSide = 9; //number
            } else {
                gridSide = 7; //number               
            }

        //invocare la variabile che cambia il valore di side nel css
        setSide(gridSide);

        //invocare la funzione che genera il campo
         createField(gridSide);
    })

// generare il campo minato
function createField(side){
    // associare il wrapper ad una variabile per poter interagire con lui
    const field = document.querySelector('.wrapper'); //object

    //dichiarare una variabile con il numero totale di elementi da creare nel DOM
    const area = side**2; //number

    //creare gli elementi da inserire nel DOM per ogni casella
    for(let i = 0; i < area; i++){
        //creare una variabile numero da inserire all'interno della cella
        let num = i + 1; //numbre
        
        //creare l'oggetto da posizionare nel DOM e inserirlo in una variabile
        const fieldElement = document.createElement('div'); // object
        
        //dichiarare la classe cell come classe dell'elemento appena creato
        fieldElement.className = 'cell';

        // inserire all'interno del codice html il numero della casella corrispondente 
        fieldElement.innerHTML = num;

        //aggiungere l'elemento creato all'interno del campo
        field.append(fieldElement);

        //ascoltare il click sulla casella 
        fieldElement.addEventListener('click', function(){
            // aggiungere o togliere la classe che ne colora il backgroud
            fieldElement.classList.toggle('clicked');

            console.log(`cliccata casella numero: ${num}`);
        })
    }
}

function setSide (value){
    r.style.setProperty('--side', value);
}
