//write your code here


const palabras= ['rock', 'paper', 'scissors', 'lizard', 'spock']

const reglas= {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['paper', 'spock'],
    spock: ['scissors', 'rock']
}

function machineGuess() {
    return palabras[Math.floor(Math.random() * palabras.length)]
}

function play(userGuess) {

    let machine = machineGuess()
    console.log(userGuess);
    
    console.log(machine);
    

    if (userGuess === machine) {
        console.log("It´s a draw");
    }else if (reglas[userGuess].includes(machine)) {
        console.log('You win!');
        
    }else {
        console.log('You are losser!');
        
    }

}

play('lizard')




