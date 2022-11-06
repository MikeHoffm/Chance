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


/* Button for Roll Dice */
    const rollBtn = document.querySelector(".roll");

    rollBtn.addEventListener('click', function(){
    dicePicks = [];

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
            one.style.backgroundColor = 'red';
        } else if (dicePicks[0] == 'blue') {
            one.style.backgroundColor = 'blue';
        }

        if (dicePicks[1] == 'red'){
            two.style.backgroundColor = 'red';
        } else if (dicePicks[1] == 'blue') {
            two.style.backgroundColor = 'blue';
        }

        if (dicePicks[2] == 'red'){
            three.style.backgroundColor = 'red';
        } else if (dicePicks[2] == 'blue') {
            three.style.backgroundColor = 'blue';
        }

        if (dicePicks[3] == 'red'){
            four.style.backgroundColor = 'red';
        } else if (dicePicks[3] == 'blue') {
            four.style.backgroundColor = 'blue';
        }
    }
