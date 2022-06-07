const switchBtn = document.querySelector('.switch-btn');

const videoContainer = document.querySelector('.video-container');


switchBtn.addEventListener( 'click',  function(){
	if(!switchBtn.classList.contains('slide')){

		switchBtn.classList.add('slide');
		videoContainer.pause();

	}else{
		switchBtn.classList.remove('slide');
		videoContainer.play();
	}
});

const preLoader = document.querySelector('.preloader');

window.addEventListener('load', function(){

preLoader.classList.add('hide-preloader');
})