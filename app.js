let userScore = 0
let computerScore = 0
const userScore_span = document.getElementById('user-score')
const computerScore_span = document.getElementById('computer-score')
const scoreBoard_div = document.querySelector(".score-board")
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissor_div = document.getElementById("s")

function getComputerChoice() {
	const choices = ["r", "p", "s"]
	const randomNumber = Math.floor(Math.random() * 3)
	return choices[randomNumber]
}

function convertToWord(letter) {
	switch(letter) {
		case "r":
			return "Rock"
			break
		case "p":
			return "Paper"
			break
		case "s":
			return "Scissors"
			break
	}
}

function win(userChoice, computerChoice) {
	userScore++
	userScore_span.innerHTML = userScore
	computerScore_span.innerHTML = computerScore
	result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You Win!!"
	document.getElementById(userChoice).classList.add("green-glow")
	setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow') }, 500)
}

function lose(userChoice, computerChoice) {
	computerScore++
	computerScore_span.innerHTML = computerScore
	userScore_span.innerHTML = userScore
	result_p.innerHTML = convertToWord(userChoice) + " loses to " + convertToWord(computerChoice) + ". You Lost!!"
	document.getElementById(userChoice).classList.add("red-glow")
	setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow') }, 500)
}

function draw(userChoice, computerChoice) {
	computerScore_span.innerHTML = computerScore
	userScore_span.innerHTML = userScore
	result_p.innerHTML = convertToWord(userChoice) + " equals " + convertToWord(computerChoice) + ". Draw"
	document.getElementById(userChoice).classList.add("gray-glow")
	setTimeout(function() { document.getElementById(userChoice).classList.remove('gray-glow') }, 500)
}

function game(userChoice) {
	const computerChoice = getComputerChoice()
	switch(userChoice + computerChoice) {
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice)
			break
		case "sr":
		case "rp":
		case "ps":
			lose(userChoice, computerChoice)
			break
		default:
			draw(userChoice, computerChoice)
			break
	}
}

function main() {
	rock_div.addEventListener("click", function() {
		game("r")
	})

	paper_div.addEventListener("click", function() {
		game("p")
	})

	scissor_div.addEventListener("click", function() {
		game("s")
	})
}

main()