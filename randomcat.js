var cats = new Array();

cats[1] = 'cats/1.jpg';
cats[2] = 'cats/2.jpg';
cats[3] = 'cats/3.jpg';
cats[4] = 'cats/4.jpg';
cats[5] = 'cats/5.jpg';
cats[6] = 'cats/6.jpg';
cats[7] = 'cats/7.jpg';
cats[8] = 'cats/8.jpg';
cats[9] = 'cats/9.jpg';
cats[10] = 'cats/10.jpg';

var selectedCat = undefined;
while (selectedCat == undefined){
	selectedCat = cats[Math.floor(Math.random()*cats.length)];
}

document.write('<img src="'+selectedCat+'" class="pic">');