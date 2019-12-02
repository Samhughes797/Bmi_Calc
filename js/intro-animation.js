function navToMenu()
{
	console.log("trigger");
	$.mobile.navigate("#intro");
}

gsap.to(".logo", {duration: 2, x: 300});

Gsap.to(".logo",{
  duration: 2,
  y: - 50,
  opacity:1,
  onComplete: navToMenu();
});