let kgbtn = document.getElementById('kg');
let poundbtn = document.getElementById('pound');

kgbtn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    let result = Math.floor(input / 2.025 ) + ' kg';
    document.getElementById('output').value = result;
})


poundbtn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    let result = Math.floor(input * 2.025 )+ ' kg';
    document.getElementById('output').value = result;
})
