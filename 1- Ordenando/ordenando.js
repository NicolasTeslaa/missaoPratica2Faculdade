const listaValores = [];
const lista = document.getElementById('valores');
function Add() {
    const valorInput = document.getElementById('value');
    if (valorInput.value == '') {
        alert('[ERRO] Digite um número!');
    }
    else {
        const node = document.createElement('li');
        const valorDigitado = valorInput.value;
        const textNode = document.createTextNode(valorDigitado);
        node.appendChild(textNode);
        listaValores.push(parseInt(valorDigitado));
        lista.appendChild(node);
        valorInput.value = '';
    }
}

function Ordenar() {
    const listaSelecao = document.getElementById('algoritmo');
    const algoritmoSelecionado = listaSelecao.value;
    if (algoritmoSelecionado === 'bubble') {
        bubbleSort();
    } else if (algoritmoSelecionado === 'selection') {
        selectionSort();
    } else if (algoritmoSelecionado === 'quick') {
        quickSort();
    }
}

function bubbleSort() {
    atualizarLista();
    var len = lista.length;
    var swapped;
    do {
        swapped = false;

        for (var i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // inverte as posições
                arr[i], arr[i+1] = arr[i+1], arr[i]
                swapped = true;
            }
        }
        len--;
    } while (swapped);

    lista.innerHTML = arr;
}

function Limpar(){
    lista.innerHTML = ''
}

function selectionSort() {
    atualizarLista();
    var len = lista.length;
    for (var i = 0; i < len - 1; i++) {
        var minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    lista.innerHTML = arr;
}

function atualizarLista() {
    const lista = document.getElementById('valores');
    const itens = Array.from(lista.children).sort((a, b) => {
        const valorA = parseInt(a.textContent);
        const valorB = parseInt(b.textContent);
        return valorA - valorB;
    });

    for (let i = 0; i < itens.length; i++) {
        lista.appendChild(itens[i]);
    }
}

function quickSort() {
    atualizarLista();
}

function Misturar() {
    shuffle(listaValores);
}



function shuffle(array) {
    var arr = array.sort(() => Math.random() - 0.5);
    lista.innerHTML = arr;
    atualizarLista();
}
