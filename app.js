// Les Constantes 
const btnRules = document.getElementById("btn-rules");
const mainMenu = document.querySelector(".main-menu");
const mainMenuArt = document.querySelector(".menu-art");
const menuBtn = document.getElementById("menu");
const pauseDialog = document.querySelector("dialog");
const divOpa = document.querySelector(".div-opa");
const continueBtn = document.getElementById("continue");
const btnQuitGame = document.querySelector(".btn-quitgame");
const playGameDiv = document.querySelector(".play-game");
const playerVsPlayer = document.getElementById("playervsplayer");
const timerPara = document.querySelector(".timer-para");
const btnPause = document.getElementById("btn-pause");
const cursor = document.getElementById("cursor");
const timerDiv = document.querySelector(".timer-div");
const playerTurnPara = document.querySelector(".player-turn-para");
const columns = document.querySelectorAll(".grid-col");
const footerWins = document.querySelector(".footer-wins");
const scoreOne = document.getElementById("scoreOne");
const scoreTwo = document.getElementById("scoreTwo");
const winDiv = document.querySelector(".win-div");
const chronoDiv = document.querySelector(".chrono-div");
const playerWinPara = document.querySelector(".player-win-para");
const restartBtn = document.getElementById("restart");

const grille = [
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
];

const grilleAvecGagnant1 = [
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["X", "X", "X", "X", "", "", ""],
];

const grilleAvecGagnant2 = [
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["X", "", "", "", "", "", ""],
	["X", "", "", "", "", "", ""],
	["X", "", "", "", "", "", ""],
	["X", "", "", "", "", "", ""],
];

const grilleAvecGagnant3 = [
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "X", "", "", ""],
	["", "", "X", "", "", "", ""],
	["", "X", "", "", "", "", ""],
	["X", "", "", "", "", "", ""],
];

const grilleAvecGagnant4 = [
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "X", "", "", ""],
	["", "", "X", "O", "", "", ""],
	["", "O", "O", "O", "", "", ""],
	["X", "O", "O", "O", "O", "", ""],
];

const grilleSansGagnant = [
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "X", "", "", ""],
	["", "", "X", "O", "", "", ""],
	["", "O", "O", "O", "", "", ""],
	["X", "O", "O", "X", "O", "", ""],
];

// Les Variables
let y = 0;
let chronomètre;
let timer;
let currentPlayer = 0;
let scorePlayerOne = 0;
let scorePlayerTwo = 0;
let colonneSelec = null;
let resultat = "";
let gameOver = false;
let resultats = 0;

// Les Fonctions
function resetTimer() {
	clearInterval(timer);
	chronomètre = 15;
	timerPara.textContent = `${chronomètre}s`;
	timer = setInterval(() => {
		if (chronomètre > 0) {
			chronomètre--;
			timerPara.textContent = `${chronomètre}s`;
		} else {
			resetTimer();
			if (currentPlayer % 2 === 0) {
				cursor.src = "./asset/cursor-yellow.svg";
				timerDiv.style.backgroundColor = "#ffce67";
				timerPara.style.color = "#000";
				playerTurnPara.style.color = "#000";
				playerTurnPara.textContent = "PLAYER 2’S TURN";
			} else {
				cursor.src = "./asset/cursor.svg";
				timerDiv.style.backgroundColor = "#fd6687";
				timerPara.style.color = "#fff";
				playerTurnPara.style.color = "#fff";
				playerTurnPara.textContent = "PLAYER 1’S TURN";
			}
			currentPlayer++;
		}
	}, 1000);
}

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
	btnCheck.addEventListener("mouseover", () => {
		imgCheck.src = "./asset/icon-check-hover.svg";
	});
	btnCheck.addEventListener("mouseout", () => {
		imgCheck.src = "./asset/icon-check.svg";
	});
	btnCheck.addEventListener("click", () => {
		mainMenu.style.display = "flex";
		div.style.display = "none";
	});
}

function showPause() {
	divOpa.style.display = "block";
	pauseDialog.style.display = "flex";
	continueBtn.addEventListener("click", () => {
		divOpa.style.display = "none";
		pauseDialog.style.display = "none";
	});
	clearInterval(timer);
}

function showMenu() {
	playGameDiv.style.display = "none";
	mainMenu.style.display = "flex";
	mainMenuArt.style.display = "flex";
	divOpa.style.display = "none";
	pauseDialog.style.display = "none";
	footerWins.style.display = "none";
}


function startGame() {
	chronomètre = 15;
	resetTimer();
	scorePlayerOne = 0;
	scorePlayerTwo = 0;
	scoreOne.textContent = scorePlayerOne;
	scoreTwo.textContent = scorePlayerTwo;
	for (const row of grille) {
		row.fill("");
	}
	const pionsImgs = document.querySelectorAll(".pions-img");
	for (const pion of pionsImgs) {
		pion.src = "";
		pion.classList.add("vide");
	}
	playGameDiv.style.display = "block";
	mainMenu.style.display = "none";
	mainMenuArt.style.display = "none";
	divOpa.style.display = "none";
	pauseDialog.style.display = "none";
	footerWins.style.display = "block";
}

function checkWinner(grille) {
	for (let i = 0; i < grille.length; i++) {
		for (let j = 0; j < grille[i].length; j++) {
			if (j <= grille[i].length - 4) {
				if (
					grille[i][j] !== "" &&
					grille[i][j] == "X" &&
					grille[i][j + 1] == "X" &&
					grille[i][j + 2] == "X" &&
					grille[i][j + 3] == "X"
				) {
					return "X";
				} else if (
					grille[i][j] !== "" &&
					grille[i][j] == "O" &&
					grille[i][j + 1] == "O" &&
					grille[i][j + 2] == "O" &&
					grille[i][j + 3] == "O"
				) {
					return "O";
				}
			}
		}
	}
	// verifie les colonnes
	for (let i = 0; i < grille.length; i++) {
		for (let j = 0; j < grille[i].length; j++) {
			if (i <= grille.length - 4 && j < grille[i].length) {
				if (
					grille[i][j] !== "" &&
					grille[i][j] == "X" &&
					grille[i + 1][j] == "X" &&
					grille[i + 2][j] == "X" &&
					grille[i + 3][j] == "X"
				) {
					return "X";
				} else if (
					grille[i][j] !== "" &&
					grille[i][j] == "O" &&
					grille[i + 1][j] == "O" &&
					grille[i + 2][j] == "O" &&
					grille[i + 3][j] == "O"
				) {
					return "O";
				}
			}
		}
	}
	// verifie la diagonale descendante
	for (let i = 0; i < grille.length; i++) {
		for (let j = 0; j < grille[i].length; j++) {
			if (i <= grille.length - 4 && j >= 3) {
				if (
					grille[i][j] !== "" &&
					grille[i][j] == "X" &&
					grille[i + 1][j - 1] == "X" &&
					grille[i + 2][j - 2] == "X" &&
					grille[i + 3][j - 3] == "X"
				) {
					return "X";
				} else if (
					grille[i][j] !== "" &&
					grille[i][j] == "O" &&
					grille[i + 1][j - 1] == "O" &&
					grille[i + 2][j - 2] == "O" &&
					grille[i + 3][j - 3] == "O"
				) {
					return "O";
				}
			}
		}
	}
	for (let i = 3; i < grille.length; i++) {
		// Commence à partir de i = 3 pour éviter i - 1, i - 2, i - 3 négatifs
		for (let j = 0; j < grille[i].length - 3; j++) {
			// Vérifie que j + 3 ne dépasse pas la limite à droite
			if (grille[i][j] !== "") {
				if (
					grille[i][j] === "X" &&
					grille[i - 1][j + 1] === "X" &&
					grille[i - 2][j + 2] === "X" &&
					grille[i - 3][j + 3] === "X"
				) {
					return "X";
				} else if (
					grille[i][j] === "O" &&
					grille[i - 1][j + 1] === "O" &&
					grille[i - 2][j + 2] === "O" &&
					grille[i - 3][j + 3] === "O"
				) {
					return "O";
				}
			}
		}
	}
	return "null";
}
function createVictoryBanner(nomDuJoueur) {
	const div = createContainer("win-div", "div");
	const p = createText(
		"player-win-para",
		"f-s16",
		"f-w700",
		`PLAYER ${nomDuJoueur}`,
		"p"
	);
	const h2 = createText("win-heading", "f-s56", "f-w700", "WINS", "h2");
	const button = createText(
		"play-again-win",
		"f-s16",
		"f-w700",
		"PLAY AGAIN",
		"button"
	);

	chronoDiv.appendChild(div);
	div.append(p, h2, button);

	console.log(button);
	button.addEventListener("click", () => {
		console.log("bouton cliqué!");
		clearInterval(timer);
		chronomètre = 15;
		timerDiv.style.display = "flex";
		div.style.display = "none";

		for (const row of grille) {
			row.fill("");
		}

		cursor.style.display = "block";
		const pionsImgs = document.querySelectorAll(".pions-img");
		for (const pion of pionsImgs) {
			pion.src = "";
			pion.classList.add("vide");
		}
		y = 0;
		cursor.style.left = y + "%";
		footerWins.style.backgroundColor = "#5c2dd5";
		gameOver = false;
		let lastWinner = null;
		if (lastWinner === 1) {
			currentPlayer = 1;
		} else if (lastWinner === 2) {
			currentPlayer = 0;
		}
		resetTimer();
	});
}

function findPawnPosition(colonne, grille) {
	for (let i = grille.length - 1; i >= 0; i--) {
		if (grille[i][colonne] === "") {
			return i;
		}
	}
	return -1;
}


resultats = findPawnPosition(0, grille); // retourne 4
console.log(resultats);
resultats = findPawnPosition(2, grille); // retourne 3
console.log(resultats);
resultats = findPawnPosition(5, grille); // retourne 5
console.log(resultats);

function getVictoryPawns(line, col) {
	const symbols = grilleAvecGagnant1[line][col];
	let pion = [[line, col]];

	for (let i = col - 1; i >= 0; i--) {
		if (grilleAvecGagnant1[line][i] === symbols) {
			pion.push([line, i]);
		} else {
			break;
		}
	}
	for (let i = col + 1; i < 7; i++) {
		if (grilleAvecGagnant1[line][i] === symbols) {
			pion.push([line, i]);
		} else {
			break;
		}
	}
	return pion.length === 4 ? pion : []; 
}

let result = getVictoryPawns(5, 3);
console.log(result);

resultat = checkWinner(grilleAvecGagnant1); // retourne "X"
console.log(resultat);
resultat = checkWinner(grilleAvecGagnant2); // retourne "X"
console.log(resultat);
resultat = checkWinner(grilleAvecGagnant3); // retourne "X"
console.log(resultat);
resultat = checkWinner(grilleAvecGagnant4); // retourne "O"
console.log(resultat);
resultat = checkWinner(grilleSansGagnant); // retourne ""
console.log(resultat);

document.addEventListener("keydown", (event) => {
	const container = document.querySelector(".container");
	const parentWidth = container.offsetWidth;
	const cursorWidth = 32;
	const parentWidthInPercent = parentWidth / 100;

	if (gameOver) return;

	if (event && event.key === "ArrowLeft") {
		y -= 15.5;
		if (y < 0) {
			y = 0;
		}
		event.preventDefault();
	}

	if (event && event.key === "ArrowRight") {
		y += 15.5;
		if (y > 100 - cursorWidth / parentWidthInPercent) {
			y = 100 - cursorWidth / parentWidthInPercent;
		}
		event.preventDefault();
	}

	if (event && event.code === "Space") {
		const colIndex = Math.floor((y / 100) * columns.length);
		let col = columns[colIndex].querySelectorAll(".pions-img");

		for (let i = col.length - 1; i >= 0; i--) {
			if (col[i].classList.contains("vide") || grille[i][colIndex] === "") {
				if (currentPlayer % 2 === 0) {
					col[i].src = "./asset/pion-red.svg";
					col[i].classList.remove("vide");
					cursor.src = "./asset/cursor-yellow.svg";
					timerDiv.style.backgroundColor = "#ffce67";
					timerPara.style.color = "#000";
					playerTurnPara.style.color = "#000";
					playerTurnPara.textContent = "PLAYER 2’S TURN";
					grille[i][colIndex] = "X";
					resetTimer();
				} else {
					col[i].src = "./asset/pion-yellow.svg";
					col[i].classList.remove("vide");
					cursor.src = "./asset/cursor.svg";
					timerDiv.style.backgroundColor = "#fd6687";
					timerPara.style.color = "#fff";
					playerTurnPara.style.color = "#fff";
					playerTurnPara.textContent = "PLAYER 1’S TURN";
					grille[i][colIndex] = "O";
					resetTimer();
				}
				currentPlayer++;
				resultat = checkWinner(grille);
				if (resultat !== "null") {
					gameOver = true; // Le jeu est terminé
					if (resultat === "X") {
						footerWins.style.backgroundColor = "#fd6687";
						scorePlayerOne++;
						timerDiv.style.display = "none";
						scoreOne.textContent = scorePlayerOne;
						createVictoryBanner(1);
					} else if (resultat === "O") {
						footerWins.style.backgroundColor = "#ffce67";
						timerDiv.style.display = "none";
						scorePlayerTwo++;
						scoreTwo.textContent = scorePlayerTwo;
						createVictoryBanner(2);
					}
					cursor.style.display = "none";
				}
				console.log(grille);
				break;
			}
		}
		event.preventDefault();
	}
	cursor.style.left = y + "%";
});

// Les écouteurs
btnRules.addEventListener("click", showRules);
menuBtn.addEventListener("click", showPause);
playerVsPlayer.addEventListener("click", startGame);
btnPause.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame),
btnQuitGame.addEventListener("click", showMenu);
