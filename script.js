

function random() {
    var mas = ['🐭', '🐭', '🐸', '🐸', '🐱', '🐱', '🐷', '🐷', '🐶', '🐶', '🐵', '🐵'];

    mas = mas.sort(function () {
        return Math.random() - 0.5;
    });

    var collection = document.querySelectorAll('.back ');
    for (var i = 0; i < collection.length; i++)
        collection[i].innerHTML = mas[i];
}



function logic(){

    var card = document.querySelectorAll('.front ');
    for(var i=0; i<card.length; i++) {

        card[i].addEventListener('click', click, true);
    }




    function click()
    {
        var backs = document.querySelectorAll('.back ');
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

    /*
    var green =0;
        for(var i=0; i<backs.length; i++) {
            if (backs[i].dataset.state!= 'green')
                green+=1;
        }
        if(green==0)
            alert('ура!');
     */

}

function animation(){


}

//TODO
//закрывать самим