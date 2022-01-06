function tabuada() {
    var num = document.querySelector('input#num');
    var tab = document.querySelector('select#selTab');

    if(num.value.length == 0){
        alert('Por favor, digite um número.');
    } else {
        var convNum = Number(num.value);
        var cont = 1;
        tab.innerHTML = '';
        while (cont <= 10){
            var item = document.createElement('option');
            item.text = `${convNum} x ${cont} = ${convNum*cont}`;
            tab.appendChild(item);
            cont++;
        }
    }
}