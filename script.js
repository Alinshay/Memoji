

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


    this.reload = function () {
        this.pic = document.getElementById(id).nextElementSibling.nextElementSibling.innerHTML;
    }


    this.change = function (str) {
        if((str==='open')||(str==='red')||(str==='green')){
        document.getElementById(id).nextElementSibling.nextElementSibling.setAttribute('data-state', str);
        this.state = document.getElementById(id).nextElementSibling.nextElementSibling.getAttribute('data-state');
        document.getElementById(id).parentElement.classList.add('dis');}
        if(str==='close')
        {
            document.getElementById(id).parentElement.classList.remove('dis');
        }
    }

    this.flip = function(){
        this.back.click();//сделать что-то более здоровое
        document.getElementById(id).nextElementSibling.nextElementSibling.setAttribute('data-state', 'close');
        this.state = document.getElementById(id).nextElementSibling.nextElementSibling.getAttribute('data-state');
        this.change('close');
    }

}


function logic() {
    var time = 60; //время одной игры
    function timer(){
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
    }

        random();
        var card = [];//массив объектов карточек
        for (let i = 0; i < N; i++) {
            card.push(new Card('check' + i));
        }


        /* Работа с таймером*/

        var interval = setInterval(timer, 1000);


        /*Навешиваем обработчик событий на все карточки*/
        var listen = document.querySelectorAll('.front');
        for (var i = 0; i < listen.length; i++) {

            listen[i].addEventListener('click', click);
            listen[i].param = i;
        }


        function click(num) {

            let cur = num.target.param; //индекс последней открытой карточки

            let op = -1;

            for (let i = 0; i < card.length; i++) {
                if (card[i].state === 'open') {
                    op = i;
                }
            }

            if (op === -1) {
                card[cur].change('open');

                for (let i = 0; i < card.length; i++) {
                    if (card[i].state === 'red')
                        card[i].flip();
                }
                //находим красные и переворачиваем
            } else {
                if (card[cur].pic === card[op].pic) {
                    card[cur].change('green');
                    card[op].change('green');


                    let green = 0;
                    for (let i = 0; i < card.length; i++) {
                        if (card[i].state !== 'green')
                            green += 1;
                    }

                    if (green === 0) {
                        clearInterval(interval);
                        document.getElementById('win').setAttribute('data-state', 'yes');
                        document.getElementById('dark').setAttribute('data-state', 'yes');
                    }

                } else {
                    card[cur].change('red');
                    card[op].change('red');
                }
            }


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
                    card[i].flip();
                }
            }

            random();
            for(let i=0; i< card.length; i++)
                card[i].reload();
            clearInterval(interval);//перезапускаем таймер
            time=60;
            interval = setInterval(timer, 1000);
        }

}




//TODO
//перемешивать правильно
//сделать верстку адаптивной + mobile
//сделать разные варианты поля


