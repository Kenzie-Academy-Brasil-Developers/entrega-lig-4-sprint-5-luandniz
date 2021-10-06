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

let wins=0;

let usuario = true;
const $column = document.querySelectorAll('.column');
$column.forEach(collumn => {
    collumn.addEventListener('click', (ev) => {
        if(wins === 0){
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
            verticalVictory(CheckMap());
            horizontalVictory(CheckMap());
            diagonalRightVictory(CheckMap());
            diagonalLeftVictory(CheckMap());
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
        if (x[i].hasChildNodes() === false) { 
            result.push(0) 
        } else {
            if (x[i].firstElementChild.classList.contains('disc')) { 
                result.push(1) 
            } else { 
                result.push(2) 
            }
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
                    if(churrus[y][x] === 1){
                        const win = document.querySelector('body');
                        const span = document.createElement('span');
                        const script = document.querySelector('script');
                        const txt = document.createTextNode('Vitória do Vermelho');
                        span.appendChild(txt);
                        win.insertBefore(span, script);
                        wins++;
                        reset();
                    } else if (churrus[y][x] === 2){
                        const win = document.querySelector('body');
                        const span = document.createElement('span');
                        const script = document.querySelector('script');
                        const txt = document.createTextNode('Vitória do Preto');
                        span.appendChild(txt);
                        win.insertBefore(span, script);
                        wins++;
                        reset();
                    }
                }
            }
        }
    }
}

let horizontalVictory = function(churrus) {
    const edgeX = churrus[0].length - 2;
    const edgeY = churrus.length - 3;

    for (let y = 0; y < edgeY; y++) {

        for (let x = 0; x < churrus[0].length; x++) {
            let cell = churrus[y][x];

            if (cell !== 0) {

                if (cell === churrus[y + 1][x] && cell === churrus[y + 2][x] && cell === churrus[y + 3][x]) {
                    if(churrus[y][x] === 1){
                        const win = document.querySelector('body');
                        const span = document.createElement('span');
                        const script = document.querySelector('script');
                        const txt = document.createTextNode('Vitória do Vermelho');
                        span.appendChild(txt);
                        win.insertBefore(span, script);
                        wins++;
                        reset();
                    } else if (churrus[y][x] === 2){
                        const win = document.querySelector('body');
                        const span = document.createElement('span');
                        const script = document.querySelector('script');
                        const txt = document.createTextNode('Vitória do Preto');
                        span.appendChild(txt);
                        win.insertBefore(span, script);
                        wins++;
                        reset();
                    }
                }
            }
        }
    }
}
// Função de vitoria diagonal direita ESTÁ PEGANDO
let diagonalRightVictory = function(board){
    const edgeX = board[0].length - 3;
    const edgeY = board.length - 3;
    // itere cada linha
    for (let y = 0; y < edgeY; y++) {
        //itere cada célula em cada linha
        for (let x = 0; x < edgeX; x++) {
            cell = board[y][x];
            //Checa somente se a célula está preenchida
            if (cell !== 0) {
                // Checa as próximas três células para o mesmo valor
                if (cell === board[y + 1][x + 1] && cell === board[y + 2][x + 2] && cell === board[y + 3][x + 3]) {
                    if(board[y][x] === 1){
                        const win = document.querySelector('body');
                        const span = document.createElement('span');
                        const script = document.querySelector('script');
                        const txt = document.createTextNode('Vitória do Vermelho');
                        span.appendChild(txt);
                        win.insertBefore(span, script);
                        wins++;
                        reset();
                    } else if (board[y][x] === 2){
                        const win = document.querySelector('body');
                        const span = document.createElement('span');
                        const script = document.querySelector('script');
                        const txt = document.createTextNode('Vitória do Preto');
                        span.appendChild(txt);
                        win.insertBefore(span, script);
                        wins++;
                        reset();
                    }
                }
            }
        }
    }
}
// Função de vitoria diagonal esquerda ESTÁ PEGANDO
let diagonalLeftVictory = function(board){
    const edgeX = board[0].length - 2;
    const edgeY = board.length - 2;
    // itere cada linha
    for (let coluna = 3; coluna < board.length; coluna++) {
         //itere cada célula em cada linha
        for (let linha = 0; linha < edgeX; linha++) {
            cell = board[coluna][linha];
             //Checa somente se a célula está preenchida
            if (cell !== 0) {
            // Checa as próximas três células para o mesmo valor
                if (cell === board[coluna - 1][linha + 1] && cell === board[coluna - 2][linha + 2] && cell === board[coluna - 3][linha + 3]) {
                    if(board[coluna][linha] === 1){
                        const win = document.querySelector('body');
                        const span = document.createElement('span');
                        const script = document.querySelector('script');
                        const txt = document.createTextNode('Vitória do Vermelho');
                        span.appendChild(txt);
                        win.insertBefore(span, script);
                        wins++;
                        reset();
                    } else if (board[coluna][linha] === 2){
                        const win = document.querySelector('body');
                        const span = document.createElement('span');
                        const script = document.querySelector('script');
                        const txt = document.createTextNode('Vitória do Preto');
                        span.appendChild(txt);
                        win.insertBefore(span, script);
                        wins++;
                        reset();
                    }
                }
            }
        }
    }
}

let reset = function(){
    const reset = document.querySelector('body');
    const script = document.querySelector('script');
    const button = document.createElement('button');
    const txt = document.createTextNode('Jogar Novamente');
    button.appendChild(txt);
    reset.insertBefore(button, script);
    button.addEventListener('click', (e) => location.reload());
}
