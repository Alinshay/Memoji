

function random()
{
    var mas = ['🐭' ,'🐭', '🐸','🐸','🐱','🐱','🐷','🐷','🐶','🐶','🐵','🐵'];

    mas =mas.sort(function(){
        return Math.random() - 0.5;
    });

    var collection = document.querySelectorAll('.back ');
    for(var i=0; i<collection.length; i++)
        collection[i].innerHTML = mas[i];

    alert(collection.length);


}