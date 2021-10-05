const map = [
    'aaaaaa',
    'bbbbbb',
    'cccccc',
    'dddddd',
    'eeeeee',
    'ffffff',
    'gggggg'
]

const $wrapper = document.querySelector('#wrapper');


for (let i = 0; i < map.length; i++) {
    //criando as colunas 
    let col = document.createElement('section');

    //identificação 
    col.classList = `column column_${i+1}`;

    //ppendurando as colunas no html
    $wrapper.appendChild(col);

    for (let j = 0; j < map[i].length; j++) {
        //criando as divs
        let div = document.createElement('div');

        //identificação 
        div.classList = `column${i+1}`;

        //pendurando as div nas seção
        col.appendChild(div);
    }
}

let usuario = true;
let win = 0; //variavel para as condições de vitória
let arr = []; //array para as condições de vitória
const $column = document.querySelectorAll('.column');
$column.forEach(collumn => {
    collumn.addEventListener('click', (ev) => {
        //condição de vitória horizontal
        for (let x = 1; x <= 7; x++) {
            arr.push(document.querySelector(`.column_${x}`).children);
        }
        let teste = arr[0][0].children.classList; //salvar o nome da class pra fazer a validação a partir dela
        console.log(teste);
        //adicionar os discos
        let append = ev.currentTarget.children; //cria um array com os filhos
        let index = 0;
        let valid = 0;

        if (usuario) {
            const disc = document.createElement('div');
            disc.classList = 'disc';

            //coluna adicina um disco no ultimo filho que estiver vazio 
            while (valid === 0 && append[5].hasChildNodes() === false) {
                if (append[index].hasChildNodes() === false) {
                    append[index].appendChild(disc);
                    usuario = false;
                    valid++;
                } else {
                    index++;
                }
            }
        } else {
            const disc = document.createElement('div');
            disc.classList = 'discB';

            //coluna adicina um disco no ultimo filho que estiver vazio
            while (valid === 0 && append[5].hasChildNodes() === false) {
                if (append[index].hasChildNodes() === false) {
                    append[index].appendChild(disc);
                    usuario = true;
                    valid++;
                } else {
                    index++;
                }
            }
        }


    });
});



let CheckMap = function() {
    let piece1 = document.querySelectorAll('.column1')
    let piece2 = document.querySelectorAll('.column2')
    let piece3 = document.querySelectorAll('.column3')
    let piece4 = document.querySelectorAll('.column4')
    let piece5 = document.querySelectorAll('.column5')
    let piece6 = document.querySelectorAll('.column6')
    let piece7 = document.querySelectorAll('.column7')

    let arr = [piece1, piece2, piece3, piece4, piece5, piece6, piece7]
    let result = []
    arr.forEach(section => { result.push(mapMaker(section)) })
    return result
}

let mapMaker = function(x) {
    let result = []
    for (i = 0; i < x.length; i++) {
        if (x[i].hasChildNodes() === false) { result.push(0) } else {
            if (x[i].firstElementChild.classList.contains('disc')) { result.push(1) } else { result.push(2) }
        }
    }
    return result
}

let verticalVictory = function(churrus) {
    const edgeX = churrus[0].length - 2;
    const edgeY = churrus.length - 2;

    for (let y = 0; y < churrus.length; y++) {

        for (let x = 0; x < edgeX; x++) {
            let cell = churrus[y][x];

            if (cell !== 0) {

                if (cell === churrus[y][x + 1] && cell === churrus[y][x + 2] && cell === churrus[y][x + 3]) {
                    console.log("3 in a row found at " + (x + 1) + ":" + (y + 1))
                }
            }
        }
    }
}

let horizontalVictory = function(churrus) {
    const edgeX = churrus[0].length - 2;
    const edgeY = churrus.length - 2;

    for (let y = 0; y < edgeY; y++) {

        for (let x = 0; x < churrus[0].length; x++) {
            let cell = churrus[y][x];

            if (cell !== 0) {

                if (cell === churrus[y + 1][x] && cell === churrus[y + 2][x] && cell === churrus[y + 3][x]) {
                    console.log("3 em sequência encontrados em " + (x + 1) + ":" + (y + 1))
                }
            }
        }
    }
}