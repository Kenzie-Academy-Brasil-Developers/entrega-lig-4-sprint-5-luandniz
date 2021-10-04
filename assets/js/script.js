const map = [
    'aaaaaaa',
    'bbbbbbb',
    'ccccccc',
    'ddddddd',
    'eeeeeee',
    'fffffff'
]

const $wrapper = document.querySelector('#wrapper');


for(let i=0; i<map.length; i++){
    //criando as colunas 
    let col = document.createElement('section');

    //identificação 
    col.dataset.columnNumber = `${i+1}`;

    //identificação 
    col.classList = 'column';

    //ppendurando as colunas no html
    $wrapper.appendChild(col);

    for(let j=0; j<map[i].length; j++){
        //criando as divs
        let div = document.createElement('div');

        //identificação 
        div.dataset.indexNumber = `${j+1}`;

        //pendurando as div nas seção
        col.appendChild(div);
    }
}

// const disc = document.createElement('span');

let usuario = true;


const $column = document.querySelectorAll('.column');
$column.forEach(collumn => {
    collumn.addEventListener('click', (ev)=>{
        console.log(ev.target);//representa 
        console.log(ev.currentTarget);//representa a coluna/section


        if(usuario){
            const disc = document.createElement('div');
            // disc.style.backgroundColor = 'red';
            disc.classList = 'disc';

            //coluna adicina um disco no ultimo filho
            ev.currentTarget.firstChild.appendChild(disc);
            usuario = false;
        }else{
            const disc = document.createElement('div');
            // disc.style.backgroundColor = 'red';
            disc.classList = 'discB';

            //coluna adicina um disco no ultimo filho
            ev.currentTarget.firstChild.appendChild(disc);
            usuario = true;
        }

        
    });
});



document.querySelector('.disc').style.backgroundColor = 'red'

    
