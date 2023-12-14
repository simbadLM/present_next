let card = document.getElementById('projet');
let cardHid = document.getElementById('projet_hid');
let time = 500;


card.addEventListener('mouseover', function(event) {
    setTimeout (function () {
        card.style.display = "none";
        cardHid.style.display = "block";
       
    }, time);  
    })

    cardHid.addEventListener('mouseout', function(event) {
        if (!cardHid.matches(":hover")){
            setTimeout (function () {
                card.style.display = "block";
                cardHid.style.display = "none";
            }, 0);
        }
         
        })
    
