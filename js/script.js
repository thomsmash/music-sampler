let buckminster = document.querySelector('#buckminster');
let expert = document.querySelector('#expert');
let magnificent = document.querySelector('#magnificent');
let zastera = document.querySelector('#zastera');
let house = document.querySelector('#house');
let archery = document.querySelector('#archery');
let future = document.querySelector('#future');
let here = document.querySelector('#here');

let song = "buckminster";
runPlayers(song);

buckminster.onclick = () => {
	
	let song = "buckminster";
	runPlayers(song);	
	
}
expert.onclick = () => {
	
			
	let song = "expert";
	runPlayers(song);
	
}
magnificent.onclick = () => {
	
		let song = "magnificent";
	runPlayers(song);	
		
}
zastera.onclick = () => {
	
		let song = "zastera";
	runPlayers(song);	
		
}

function runPlayers(id) {
	let players = document.querySelectorAll('audio');
	players.forEach(function(el) {
        el.pause();
        el.currentTime = 0;
    });

	
	switch(id){
		case "buckminster":
			house.style.display = 'initial';
			archery.style.display = 'none';
			future.style.display = 'none';
			here.style.display = 'none';
		break;
		case "expert":
			house.style.display = 'none';
			archery.style.display = 'initial';
			future.style.display = 'none';
			here.style.display = 'none';
		break;
		case "magnificent":
			house.style.display = 'none';
			archery.style.display = 'none';
			future.style.display = 'initial';
			here.style.display = 'none';
		break;
		case "zastera":
			house.style.display = 'none';
			archery.style.display = 'none';
			future.style.display = 'none';
			here.style.display = 'initial';
		break;
	}
}