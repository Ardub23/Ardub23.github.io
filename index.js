const transitionTime = 500; // ms

const main = document.getElementById("main-container");
const deets = document.getElementById("details-container");
const deetsPanels = [
	document.getElementById("space-out-details"),
	document.getElementById("pips-journey-details"),
	document.getElementById("msifire-details"),
];

function hide(el, direction) {
	direction ??= "left";
	
	el.style.pointerEvents = "none";
	el.classList.add("hiding-" + direction);
	
	setTimeout(() => { el.style.display = "none"; }, transitionTime);
}

function show(el, direction) {
	direction ??= "left";
	
	el.style.display = "";
	// Dumb thing won't do its transition if you clear "display: none" and change classList at the same time
	setTimeout(() => {
		el.classList.remove("hiding-" + direction);
	}, 1);
	
	setTimeout(() => { el.style.pointerEvents = "auto"; }, transitionTime);
}

function showDeets(id) {
	id ??= "space-out-details";
	
	for (const el of deetsPanels) {
		if (el && el.style) {
			el.style.display = (el.id === id) ? "" : "none";
		}
	}
	
	hide(main, "left");
	show(deets, "right");
}

document.getElementById("space-out-learn-more").addEventListener("click", () => {
	showDeets("space-out-details");
});

document.getElementById("pips-journey-learn-more").addEventListener("click", () => {
	showDeets("pips-journey-details");
});

document.getElementById("details-back-button").addEventListener("click", () => {
	hide(deets, "right");
	show(main, "left");
});
