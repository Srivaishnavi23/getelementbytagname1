var li = document.getElementById('li');
console.log('li');
console.log(li[1]);
li[1].textContent = 'Hello2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor =  'green';
for(var i = 0; i < li.length; i++){
    li[1].style.backgroundColor = ' #f4f4f4';
}