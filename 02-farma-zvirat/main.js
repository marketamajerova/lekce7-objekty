let poleZvirat = [  
    {jmeno: 'Husa', foto: 'obrazky/husa.jpg'},
    {jmeno: 'Kocka', foto: 'obrazky/kocka.jpg'},
    {jmeno: 'Kravicka', foto: 'obrazky/krava.jpg'},
    {jmeno: 'Kun', foto: 'obrazky/kun.jpg'},
    {jmeno: 'Ovecka', foto: 'obrazky/ovce.jpg'},
    {jmeno: 'Pes', foto: 'obrazky/pes.jpg'}
]

// Pridani cele farmy 

poleZvirat.forEach(function(zvire, indx){
    zvire = document.createElement('div');
    zvire.className = 'zvire';

    let fotoZvirete = document.createElement('img');
    fotoZvirete.className = 'foto';
    fotoZvirete.src = poleZvirat[indx].foto;

    let jmenoZvirete = document.createElement('span');
    jmenoZvirete.className = 'jmeno';
    jmenoZvirete.innerHTML = poleZvirat[indx].jmeno;

    zvire.appendChild(fotoZvirete);
    zvire.appendChild(jmenoZvirete);

    let farma = document.querySelector('.farma');
    
    farma.appendChild(zvire);
})
