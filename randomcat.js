var cats = new Array();

cats[1] = 'cats/1.jpg';
cats[2] = 'cats/2.jpg';
cats[3] = 'cats/3.jpg';
cats[4] = 'cats/4.jpg';
cats[5] = 'cats/5.jpg';
cats[6] = 'cats/6.jpg';

var selectedCat = cats[Math.floor(Math.random()*cats.length)];

document.write('<img src="'+selectedCat+'" class="pic">');