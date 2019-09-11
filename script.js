

function random() {
    var mas = ['🐭', '🐭', '🐸', '🐸', '🐱', '🐱', '🐷', '🐷', '🐶', '🐶', '🐵', '🐵'];

    mas = mas.sort(function () {
        return Math.random() - 0.5;
    });

    var collection = document.querySelectorAll('.back ');
    for (var i = 0; i < collection.length; i++)
    {collection[i].innerHTML = mas[i];
     collection[i].setAttribute('data-state','close');}
}


var vic =0;



function logic() {

    //начинать все сначала
    //random();


    var time = 60;
    var interval = setInterval(function () {
        if (time > 0) {
            time = time - 1;
            if (time > 9) {
                document.getElementById('time').innerHTML = '00:' + time;
                document.getElementById('time').style.color = 'black';
            } else {
                document.getElementById('time').innerHTML = '00:0' + time;
                document.getElementById('time').style.color = 'red';
            }
        } else {
            document.getElementById('time').innerHTML = '';
            document.getElementById('lose').setAttribute('data-state', 'yes');
            document.getElementById('dark').setAttribute('data-state', 'yes');
            clearInterval(interval);
        }
    }, 1000);


    var card = document.querySelectorAll('.front ');
    for (var i = 0; i < card.length; i++) {

        card[i].addEventListener('click', click, true);
    }


    function click() {
        backs = document.querySelectorAll('.back ');

        //поменять на что-то более норм
        var op = 0;
        top:
            for (var i = 0; i < backs.length; i++) {

                if (backs[i].dataset.state == 'open') {
                    op = 1;

                    if (backs[i].innerHTML == this.nextElementSibling.innerHTML) {
                        this.nextElementSibling.dataset.state = 'green';
                        //this.previousElementSibling.setAttribute('checked', true);
                        //this.previousElementSibling.setAttribute('disabled', true);

                        backs[i].dataset.state = 'green';
                        //backs[i].previousElementSibling.previousElementSibling.setAttribute('checked', true);
                        //backs[i].previousElementSibling.previousElementSibling.setAttribute('disabled', true);
                        //disabled checked
                        //блокируются


                        vic = 1;
                        var green = 0;
                        for (var i = 0; i < backs.length; i++) {
                            if (backs[i].dataset.state != 'green')
                                green += 1;
                        }
                        if (green == 0) {
                            clearInterval(interval);
                            document.getElementById('win').setAttribute('data-state', 'yes');
                            document.getElementById('dark').setAttribute('data-state', 'yes');
                        }
                        break top;
                    } else {
                        this.nextElementSibling.dataset.state = 'red';
                        backs[i].dataset.state = 'red';

                        //backs[i].previousElementSibling.previousElementSibling.setAttribute('checked', true);
                        //backs[i].previousElementSibling.previousElementSibling.setAttribute('disabled', false);
                        //this.previousElementSibling.setAttribute('checked', true);
                        //this.previousElementSibling.setAttribute('disabled', false);

                        break top;

                    }
                }


            }


        if (op == 0) {
            this.nextElementSibling.dataset.state = 'open';
            //this.previousElementSibling.setAttribute('checked', true);
            //this.previousElementSibling.setAttribute('disabled', true);

            var red1;
            var red2;
            for (var i = 0; i < backs.length; i++) {
                if (backs[i].dataset.state == 'red') {
                    if (red1 == undefined) {
                        red1 = backs[i].previousElementSibling.previousElementSibling.getAttribute('id');
                        document.getElementById(red1).click();
                    } else {
                        red2 = backs[i].previousElementSibling.previousElementSibling.getAttribute('id');
                        document.getElementById(red2).click();
                    }
                    backs[i].dataset.state = 'close';
                }
            }


        }


    }
}



function again(){
    document.getElementById('win').setAttribute('data-state', 'no');
    document.getElementById('lose').setAttribute('data-state', 'no');
    document.getElementById('dark').setAttribute('data-state', 'no');

    var card = document.querySelectorAll('.check');
    for(var i=0; i<card.length; i++) {

        if(card[i].nextElementSibling.nextElementSibling.getAttribute('data-state') !='close')
        {
         card[i].click();
         card[i].nextElementSibling.nextElementSibling.setAttribute('data-state','close');
        }
    }

    logic();

}


/*
function Card(id)
{
this.check = document.getElementById('id');
this.front = document.getElementById('id').nextElementSibling;
this.back = document.getElementById('id').nextElementSibling.nextElementSibling;
this.pic = document.getElementById('id').nextElementSibling.nextElementSibling.innerHTML;
}


var mas =[];

for(var i =0; i<12; i++)
    mas.push = new Card('check'+1);

alert(mas);
}
*/






//TODO
//сделать, чтобы класс карточки запоминал и input, и back, и front
//перемешивать правильно
//сделать верстку адаптивной
//нельза кликать на уже открытую, зеленую или красную


