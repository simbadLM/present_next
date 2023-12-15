let card = document.getElementById('projet');
let cardHid = document.getElementById('projet_hid');
let anim = document.getElementById('animRotate');
let time = 500;
let timerAnim = 0.5;
let displayValue = cardHid.style.display;



anim.addEventListener('mouseover', async function (event) {
    timerAnim = 0.5;
    if (cardHid.checkVisibility() == false) {
        card.style.animation = "rotateAnimation 0.5s linear";
        await setTimeout (function () {
            cardHid.style.display = "block";
            card.style.display = "none";
        }, time);
        if (!anim.matches(":hover"))  timerAnim = 0.;
        cardHid.style.animation = "rotateAnimation1 " + timerAnim + "s linear";  
    } 
    })

anim.addEventListener('mouseout', async function(event) {
    if (!anim.matches(":hover")) {
        cardHid.style.animation = "rotateAnimation " + timerAnim + "s linear";
        setTimeout (function () {
        card.style.display = "block";
        cardHid.style.display = "none";
        }, 500);
            card.style.animation = "rotateAnimation1 0.5s linear";
    }     
    })

