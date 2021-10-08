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
const createTable=()=>{

    for (let i = 0; i < map.length; i++) {
        let col = document.createElement('section');
        col.classList = `column column_${i+1}`;

        col.id = `section_${i+1}`;
        $wrapper.appendChild(col);
    
        for (let j = 0; j < map[i].length; j++) {
            let div = document.createElement('div');
            div.classList = `cellStyle column${i+1}`;
            col.appendChild(div);
        }
    }
};createTable();

let wins = 0;

let usuario = true;
const $column = document.querySelectorAll('.column');
$column.forEach(collumn => {
    collumn.addEventListener('click', (ev) => {
        if (wins === 0) {
            let append = ev.currentTarget.children; 
            let index = 0;
            let valid = 0;

            if (usuario) {
                const disc = document.createElement('div');
                disc.classList = 'disc';
                while (valid === 0 && append[5].hasChildNodes() === false) {
                    if (append[index].hasChildNodes() === false) {
                        append[index].appendChild(disc);
                        usuario = false;
                        animationRed(ev.currentTarget.id);
                        valid++;
                    } else {
                        index++;
                    }
                }
            } else {
                const disc = document.createElement('div');
                disc.classList = 'discB';
                while (valid === 0 && append[5].hasChildNodes() === false) {
                    if (append[index].hasChildNodes() === false) {
                        append[index].appendChild(disc);
                        usuario = true;
                        animationBlack(ev.currentTarget.id);
                        valid++;
                    } else {
                        index++;
                    }
                }
            }
            verticalVictory();
            horizontalVictory();
            diagonalRightVictory();
            diagonalLeftVictory();
            drawVerificator();
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

const messageWinRed = () => {
    let messageBox = document.querySelector(".hiddenRed")
    messageBox.classList.replace("hiddenRed","winnerRed")
}
const messageWinBlack = () => {
    let messageBox = document.querySelector(".hiddenBlack")
    messageBox.classList.replace("hiddenBlack","winnerBlack")
}
const messageDraw = () => {
    let messageBox = document.querySelector(".hiddenDraw")
    messageBox.classList.replace("hiddenDraw","gameDraw")
}

let verticalVictory = function() {
    const edgeX = CheckMap()[0].length - 2;
    const edgeY = CheckMap().length - 2;

    for (let y = 0; y < CheckMap().length; y++) {

        for (let x = 0; x < edgeX; x++) {
            let cell = CheckMap()[y][x];

            if (cell !== 0) {

                if (cell === CheckMap()[y][x + 1] && cell === CheckMap()[y][x + 2] && cell === CheckMap()[y][x + 3]) {
                    if (CheckMap()[y][x] === 1) {
                        messageWinRed()
                        wins++;
                        reset();
                    } else if (CheckMap()[y][x] === 2) {
                        messageWinBlack()
                        wins++;
                        reset();
                    }
                }
            }
        }
    }
}

let horizontalVictory = function() {
        const edgeX = CheckMap()[0].length - 2;
        const edgeY = CheckMap().length - 3;

        for (let y = 0; y < edgeY; y++) {

            for (let x = 0; x < CheckMap()[0].length; x++) {
                let cell = CheckMap()[y][x];

                if (cell !== 0) {

                    if (cell === CheckMap()[y + 1][x] && cell === CheckMap()[y + 2][x] && cell === CheckMap()[y + 3][x]) {
                        if (CheckMap()[y][x] === 1) {
                            messageWinRed()
                            wins++;
                            reset();
                        } else if (CheckMap()[y][x] === 2) {
                            messageWinBlack()
                            wins++;
                            reset();
                        }
                    }
                }
            }
        }
    }
    
let diagonalRightVictory = function() {
        const edgeX = CheckMap()[0].length - 3;
        const edgeY = CheckMap().length - 3;
        for (let y = 0; y < edgeY; y++) {
            for (let x = 0; x < edgeX; x++) {
                cell = CheckMap()[y][x];
                if (cell !== 0) {
                    if (cell === CheckMap()[y + 1][x + 1] && cell === CheckMap()[y + 2][x + 2] && cell === CheckMap()[y + 3][x + 3]) {
                        if (CheckMap()[y][x] === 1) {
                            messageWinRed()
                            wins++;
                            reset();
                        } else if (CheckMap()[y][x] === 2) {
                            messageWinBlack()
                            wins++;
                            reset();
                        }
                    }
                }
            }
        }
    }

let diagonalLeftVictory = function() {
    const edgeX = CheckMap()[0].length - 2;
    const edgeY = CheckMap().length - 2;
    for (let coluna = 3; coluna < CheckMap().length; coluna++) {
        for (let linha = 0; linha < edgeX; linha++) {
            cell = CheckMap()[coluna][linha];
            if (cell !== 0) {
                if (cell === CheckMap()[coluna - 1][linha + 1] && cell === CheckMap()[coluna - 2][linha + 2] && cell === CheckMap()[coluna - 3][linha + 3]) {
                    if (CheckMap()[coluna][linha] === 1) {
                        messageWinRed()
                        wins++;
                        reset();
                    } else if (CheckMap()[coluna][linha] === 2) {
                        messageWinBlack()
                        wins++;
                        reset();
                    }
                }
            }
        }
    }
}

let reset = function() {
    let buttonReload = document.querySelector(".hidden")
    buttonReload.classList.replace("hidden","buttonReset")
    buttonReload.addEventListener('click', (e) => location.reload());
}

let draw = function(x) {
    let arrayMap = CheckMap()
    arrayMap = arrayMap[x]
    if (arrayMap.includes(0) === false) { return true } else { return false }
}

let drawVerificator = function() {

    if (draw(0) === true && draw(1) === true && draw(2) === true && draw(3) === true && draw(4) === true && draw(5) === true && draw(6) === true) {
        wins++;
        messageDraw();
        reset();
       
    } else { return false }
}

/*******************************************************************************************************/
const animationRed =(section)=>{
    let divs = document.querySelectorAll(`#${section}>div`);

   for(let o=0; o<divs.length; o++){

        if(!divs[o].hasChildNodes()){
            divs[o].classList.add('animation_red');
        
            setTimeout(function() {
            divs[o].classList.remove('animation_red')
            }, 2800)
        }
    }

}

const animationBlack =(sectionm)=>{
    let divz = document.querySelectorAll(`#${sectionm}>div`);

   for(let a=0; a<divz.length; a++){

        if(!divz[a].hasChildNodes()){
            divz[a].classList.add('animation_black');
        
            setTimeout(function() {
            divz[a].classList.remove('animation_black')
            }, 2800)
        }
    }

}




const playMusic = document.querySelector(".far")
playMusic.addEventListener("click", function (){
    const audio = document.querySelector("#super-mario-theme")
    audio.play()
    audio.volume = 0.06;
})

const pause = document.querySelector(".fas")
pause.addEventListener("click", function (){
    const audio = document.querySelector("#super-mario-theme")
    audio.pause()
})

