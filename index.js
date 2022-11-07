/*Setting empty array to push the random dice roll into*/
    let dicePicks = [];


/* Array to represent one six sided die */
    const diceArray = ['red', 'red', 'red', 'blue', 'blue', 'blue'];


/*Selecting Die through DOM*/
    const diceElements = document.querySelectorAll('.dice')


    let one = document.querySelector(".one");

    let two = document.querySelector(".two");

    let three = document.querySelector(".three");

    let four = document.querySelector(".four");

/*Inner Dice Color */

    let dOne = document.querySelector(".d1");

    let dTwo = document.querySelector(".d2");

    let dThree = document.querySelector(".d3");

    let dFour = document.querySelector(".d4");



/* Dice Roll Sound */
let diceSound = new Audio('sounds/diceRoll.mp3');
diceSound.playbackRate = 0.9;

/* Button for Roll Dice */
    const rollBtn = document.querySelector(".roll");

    rollBtn.addEventListener('click', function(){
    diceSound.play();
    dicePicks = [];
        
    one.classList.toggle('rotate1');
    two.classList.toggle('rotate2');
    three.classList.toggle('rotate2');
    four.classList.toggle('rotate1');


        diceElements.forEach((dice) => {
            rando();
            
            dicePicks.push(colorSelected);
            console.log(dicePicks);
        });

        changeColor();
    });


/* Functions to roll die */
    function rando() {
        let randomDie = Math.floor(Math.random()*6);
        colorSelected = diceArray[randomDie];
            return
    }


/* Function to change Die based on rolls */
    function changeColor() {
        if (dicePicks[0] == 'red'){
            dOne.style.backgroundColor = 'rgb(237, 43, 78)';
        } else if (dicePicks[0] == 'blue') {
            dOne.style.backgroundColor = 'rgb(0, 167, 255)';
        }

        if (dicePicks[1] == 'red'){
            dTwo.style.backgroundColor = 'rgb(237, 43, 78)';
        } else if (dicePicks[1] == 'blue') {
            dTwo.style.backgroundColor = 'rgb(0, 167, 255)';
        }

        if (dicePicks[2] == 'red'){
            dThree.style.backgroundColor = 'rgb(237, 43, 78)';
        } else if (dicePicks[2] == 'blue') {
            dThree.style.backgroundColor = 'rgb(0, 167, 255)';
        }

        if (dicePicks[3] == 'red'){
            dFour.style.backgroundColor = 'rgb(237, 43, 78)';
        } else if (dicePicks[3] == 'blue') {
            dFour.style.backgroundColor = 'rgb(0, 167, 255)';
        }
    }
