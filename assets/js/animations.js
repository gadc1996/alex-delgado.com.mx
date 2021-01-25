class Animation {
	constructor(animationItem, direction) {
		this.isAnimated = false;
		this.animationItem = animationItem;
		this.animationDirection = direction;
		this.animate();
	}
	animate() {
		if (this.isAnimated == false) {
			switch (this.animationDirection) {
				case "left":
					this.animationItem.style.animation =
						"left 2s";
					break;
				case "right":
					this.animationItem.style.animation =
						"right 2s";
					break;
				case "up":
					this.animationItem.style.animation =
						"up 2s";
					break;
				case "down":
					this.animationItem.style.animation =
						"down 2s";
					break;
				case "scale":
					this.animationItem.style.animation =
						"scale 2s";
				default:
					break;
			}
			this.animationItem.style.opacity = "1";
			this.isAnimated = true;
		}
	}
}
let animationOptions = {
	threshold: 0,
	rootMargin: "0px 0px -30% 0px",
};
let animationList = document.querySelectorAll(".animation");
let animationObserver = new IntersectionObserver((animationList) => {
	animationList.forEach((animationItem) => {
		if (animationItem.isIntersecting) {
			let direction = animationItem.target.getAttribute(
				"data-direction"
			);
			let delay = animationItem.target.getAttribute(
				"data-delay"
			);
			setTimeout(
				() =>
					new Animation(
						animationItem.target,
						direction
					),
				delay
			);
			animationObserver.unobserve(animationItem.target);
		}
	});
}, animationOptions);

animationList.forEach((animationItem) =>
	animationObserver.observe(animationItem)
);
