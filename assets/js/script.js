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
for(let i=0; i<map.length; i++){
    //criando as colunas 
    let col = document.createElement('section');
    //identificação 
    col.classList = `column column_${i+1}`;
    //ppendurando as colunas no html
    $wrapper.appendChild(col);
    for(let j=0; j<map[i].length; j++){
        //criando as divs
        let div = document.createElement('div');
        //identificação 
        div.classList= `column${i+1}`;
        //pendurando as div nas seção
        col.appendChild(div);
    }
}

let usuario = true;
let win = 0; //variavel para as condições de vitória
let arr = []; //array para as condições de vitória

const $column = document.querySelectorAll('.column');
$column.forEach(collumn => {
    collumn.addEventListener('click', (ev)=>{
        //condição de vitória horizontal
        for(let x =1; x<=7; x++){
            arr.push(document.querySelector(`.column_${x}`).children);
        }
        let teste = arr[0][0].children.classList;//salvar o nome da class pra fazer a validação a partir dela
        //adicionar os discos
        let append = ev.currentTarget.children;//cria um array com os filhos
        let index = 0;
        let valid=0;

        if(usuario){
            const disc = document.createElement('div');
            disc.classList = 'disc';

            //coluna adicina um disco no ultimo filho que estiver vazio 
            while(valid === 0 && append[5].hasChildNodes() === false){
                if(append[index].hasChildNodes() === false){
                    append[index].appendChild(disc);
                    usuario = false;
                    valid++;
                }else{
                    index++;
                }
            }
        }else{
            const disc = document.createElement('div');
            disc.classList = 'discB';
            //coluna adicina um disco no ultimo filho que estiver vazio
            while(valid === 0 && append[5].hasChildNodes() === false){
                if(append[index].hasChildNodes() === false){
                    append[index].appendChild(disc);
                    usuario = true;
                    valid++;
                }else{
                    index++;                   
                }               
            }           
        }          
    });
});
//  








