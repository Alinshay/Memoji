

var N=12; //кол-во карточек

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

//сделать класс таймер?
function Card(id)
{
    this.check = document.getElementById(id);
    this.front = document.getElementById(id).nextElementSibling;
    this.back = document.getElementById(id).nextElementSibling.nextElementSibling;
    this.state = document.getElementById(id).nextElementSibling.nextElementSibling.getAttribute('data-state');
    this.pic = document.getElementById(id).nextElementSibling.nextElementSibling.innerHTML;


    this.change = function (){

    }


    this.flip = function(){
        this.check.click();//сделать что-то более здоровое
    }
}



function logic() {

    var card = [];//массив объектов карточек
    for (var i = 1; i < N; i++)
        card.push(new Card('check' + i));

    timer(); //функция, запускающая таймер

    for (var i = 0; i < card.length; i++) {
        card[i].front.addEventListener('click', click, true);
    }


    function click(){
        alert(card[0]);
    }




    /*Функция работы с таймером*/
    function timer() {
        var time = 60; //время одной игры

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
        }, 100);
    }


    /*Функция перезапуска игры*/
    var button1 = document.getElementById('again1');
    button1.addEventListener('click', again);

    var button2 = document.getElementById('again2');
    button2.addEventListener('click', again);

    function again() {
        document.getElementById('win').setAttribute('data-state', 'no');
        document.getElementById('lose').setAttribute('data-state', 'no');
        document.getElementById('dark').setAttribute('data-state', 'no');

        for (var i = 0; i < card.length; i++) {

            if (card[i].state !== 'close') {
                card[i].check.click();
                card[i].back.setAttribute('data-state', 'close');
            }
        }

        logic();}


    }

/*
document.addEventListener('click', function () {
    //event.preventDefault();
    alert(event.target);
});


*/
