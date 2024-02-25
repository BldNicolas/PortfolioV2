const tlParallax = gsap.timeline({
	scrollTrigger: {
		trigger: ".welcome",
		start: "top top",
		end: "bottom top",
		scrub: true
	}
});

gsap.utils.toArray(".parallax").forEach(layer => {
	const depth = layer.dataset.depth;
	const movement = -(layer.offsetHeight * depth)
	tlParallax.to(layer, {y: movement, ease: "none"}, 0)
});

const tlWelcomeText = gsap.timeline();

let typeSplit = new SplitType('.animate', {
	types: 'lines, words, chars',
	tagName: 'span'
  });
  
gsap.from('.animate .word', {
	y: '100%',
	opacity: 0,
	duration: 0.1,
	ease: 'power1.out',
	stagger: 0.1,
});
