// ascoltare il click sul bottone inizia
    // associare il bottone ad una variabile per poter interagire con lui
    const startButton = document.getElementById('start-btn'); //object 
    // ascoltarne il click
    startButton.addEventListener('click', function (){
        createField();
    })

// generare il campo minato
function createField(){
    // associare il wrapper ad una variabile per poter interagire con lui
    const field = document.querySelector('.wrapper'); //object

    //dichiare una variabile con il numero di celle presenti in una riga
    const side = 10; //number

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
