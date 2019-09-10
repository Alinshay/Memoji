

function random() {
    var mas = ['🐭', '🐭', '🐸', '🐸', '🐱', '🐱', '🐷', '🐷', '🐶', '🐶', '🐵', '🐵'];

    mas = mas.sort(function () {
        return Math.random() - 0.5;
    });

    var collection = document.querySelectorAll('.back ');
    for (var i = 0; i < collection.length; i++)
        collection[i].innerHTML = mas[i];
}


var vic =0;

function logic(){



    var card = document.querySelectorAll('.front ');
    for(var i=0; i<card.length; i++) {

        card[i].addEventListener('click', click, true);
    }



    function click()
    {
        backs = document.querySelectorAll('.back ');
        //проверка не все ли зеленые?


        //поменять на что-то более норм
        var op=0;
        top:
            for(var i=0; i<backs.length; i++)  {

                if (backs[i].dataset.state == 'open')
                {
                    op = 1;

                    if (backs[i].innerHTML == this.nextElementSibling.innerHTML)
                    {
                        this.nextElementSibling.dataset.state = 'green';
                        //this.previousElementSibling.setAttribute('checked', true);
                        //this.previousElementSibling.setAttribute('disabled', true);

                        backs[i].dataset.state = 'green';
                        //backs[i].previousElementSibling.previousElementSibling.setAttribute('checked', true);
                        //backs[i].previousElementSibling.previousElementSibling.setAttribute('disabled', true);
                        //disabled checked
                        //блокируются


                        vic=1;var green =0;
                        for(var i=0; i<backs.length; i++) {
                            if (backs[i].dataset.state!= 'green')
                                green+=1;
                        }
                        if(green==0)
                        {document.getElementById('win').setAttribute('data-state', 'yes');
                        document.getElementById('dark').setAttribute('data-state', 'yes');}

                    }

                    else
                    {
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


                        if(op==0) {
            this.nextElementSibling.dataset.state = 'open';
            //this.previousElementSibling.setAttribute('checked', true);
            //this.previousElementSibling.setAttribute('disabled', true);

            var red1; var red2;
            for(var i=0; i<backs.length; i++)
            {
                if(backs[i].dataset.state == 'red') {
                    if (red1 == undefined)
                        red1 = backs[i].previousElementSibling.previousElementSibling.getAttribute('id');

                    else red2 = backs[i].previousElementSibling.previousElementSibling.getAttribute('id');

                    backs[i].dataset.state = 'close';
                }
            }

            document.getElementById(red1).click();
            document.getElementById(red2).click();


        }


    }






}

function again(){
    document.getElementById('win').setAttribute('data-state', 'no');
    document.getElementById('dark').setAttribute('data-state', 'no');
    /*СДЕЛАТЬ ЦИКЛ!*/
    document.getElementById('check1').click();
    document.getElementById('check2').click();
    document.getElementById('check3').click();
    document.getElementById('check4').click();
    document.getElementById('check5').click();
    document.getElementById('check6').click();
    document.getElementById('check7').click();
    document.getElementById('check8').click();
    document.getElementById('check9').click();
    document.getElementById('check10').click();
    document.getElementById('check11').click();
    document.getElementById('check12').click();


}

//сделать, чтобы класс карточки запоминал и input, и back, и front


//TODO
//нельза кликать на уже открытую, зеленую или красную
//alert в случае победы и кнопка перезапуска
//таймер и alert в случае поражения