const knowText = document.querySelector('.indicator');
const phrases = [
    'Al que va por mal camino tarde que temprano lo atrapan!',
    'Me encanta que estes aqui!',
    'Linux es gratis!',
    'Ya eres todo un Pentester!',
    'Los Blue Team se encargan de defender',
    'Los Red Team se encargan de atacar',
    'El comando <ls> sirve para listar los archivos'
];
const phrasesRandom = phrases[Math.floor(Math.random() * phrases.length)];
knowText.textContent = phrasesRandom;