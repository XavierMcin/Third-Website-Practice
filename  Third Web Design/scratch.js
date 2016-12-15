var picSlide = [ "polar.jpg", "penguin.jpg", "whale.jpg", "dogs.jpg", "wolves.jpg"]
var count = 0;
function slideShow() {
	while (count <= 4) {
		picSlide[count + 1];
		if (count = 4) {
			count = 0;
		}
		return picSlide[count];
	}
};

setInterval(slideShow,5000);
var image = document.getElementById('polarBear');

image.style.backgroundImage=url(slideShow);