//write your code here


const palabras = ['rock', 'paper', 'scissors', 'lizard', 'spock']

const jugadaGanadora = ['rock-scissors',
    'rock-lizards',
    `paper-rock`,
    'paper-spock',
    'scissors-paper',
    'scissors-lizard',
    'lizard-paper',
    'lizard-spok',
    'spok-scissors',
    'spok-rock']


const machineChoose = (palabras) => {

    let index = Math.floor(Math.random() * palabras.length)
    return palabras[index]

}

function checkGuess() {
    
    let userChoose = prompt('elige entre estas opciones: rock, paper, scissors, lizard, spock').toLowerCase();

    console.log(`User choose: ${userChoose}`);
    

    let computer = machineChoose(palabras);

    console.log(`Machine choose: ${computer}`);
    
    let play = userChoose + '-' + computer

    if (userChoose === computer) {
        console.log('It`s a draw!!');
         

    }else if (jugadaGanadora.includes(play)) {
        console.log(`You win`);
        
    }else {
        console.log('You loose');
        
    }

}


checkGuess()
 





