const btnRules = document.getElementById("btn-rules");
const mainMenu = document.querySelector(".main-menu");
const menuBtn = document.getElementById("menu");
const pauseDialog = document.querySelector("dialog");
const divOpa = document.querySelector(".div-opa");
const continueBtn = document.getElementById("continue");

function createContainer(Class, type) {
	const element = document.createElement(type);

	element.classList.add(Class);
	// element.id = containId;
	return element;
}

function createText(Class, fs, fw, text, type) {
	const element = document.createElement(type);

	element.classList.add(Class);
	element.classList.add(fs);
	element.classList.add(fw);
	// element.id = containId;
	element.textContent = text;
	return element;
}

function createImg(Class, type, src, alt) {
	const element = document.createElement(type);

	element.classList.add(Class);
	// element.id = containId;
	element.src = src;
	element.alt = alt;
	return element;
}
function showRules() {
	mainMenu.style.display = "none";

	const div = createContainer("rule-game", "div");
	const art = createContainer("art-rule", "article");
	const sectObj = createContainer("sect-obj", "section");
	const sectObjTwo = createContainer("sect-obj", "section");
	const ul = createContainer("how-ul", "ul");

	const h1 = createText("h-rule", "f-s56", "f-w700", "RULES", "h1");
	const h2 = createText("h2-rule", "f-s20", "f-w700", "OBJECTIVE", "h2");
	const h2Two = createText("h2-rule", "f-s20", "f-w700", "HOW TO PLAY", "h2");
	const firstPara = createText(
		"para-obj",
		"f-s16",
		"f-w500",
		"Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).",
		"p"
	);

	const rules = [
		"Red goes first in the first game.",
		"Players must alternate turns, and only one disc can be dropped in each turn.",
		"The game ends when there is a 4-in-a-row or a stalemate.",
		"The starter of the previous game goes second on the next game.",
	];

	rules.forEach((rule, index) => {
		const li = createText("li-how", "f-s16", "f-w500", rule, "li");
		const span = createText(
			"number-span",
			"f-s16",
			"f-w700",
			(index + 1).toString(),
			"span"
		);
		li.appendChild(span);
		ul.appendChild(li);
	});

	const btnCheck = createContainer("vr", "button");
	const imgCheck = createImg(
		"truc",
		"img",
		"./asset/icon-check.svg",
		"icon-check"
	);

	div.style.display = "flex";
	document.body.appendChild(div);
	div.appendChild(art);
	art.append(h1, sectObj, sectObjTwo, btnCheck);
	sectObj.append(h2, firstPara);
	sectObjTwo.append(h2Two, ul);
	btnCheck.appendChild(imgCheck);
	btnCheck.addEventListener("click", () => {
		mainMenu.style.display = "flex";
		div.style.display = "none";
	});
}

function showPause() {
    divOpa.style.display = "block";
    pauseDialog.style.display = "flex";
    continueBtn.addEventListener("click", ()=> {
        divOpa.style.display = "none";
        pauseDialog.style.display = "none";
    })
}

let scorePlayerOne = 0;
let scorePlayerTwo = 0;
let currentPlayer = 0;
let chronomètre = 30;
let colonneSelec = null;
const grille = [
    [ "", "", "", "",  "", "", "" ],
    [ "", "", "", "",  "", "", "" ],
    [ "", "", "", "",  "", "", "" ],
    [ "", "", "", "",  "", "", "" ],
    [ "", "", "", "",  "", "", "" ],
    [ "", "", "", "",  "", "", "" ]
    ];

btnRules.addEventListener("click", showRules);
menuBtn.addEventListener("click", showPause);
