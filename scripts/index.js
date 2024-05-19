const options = document.querySelectorAll("li");

options.forEach(option => option.addEventListener("click", () => {
    if (option.textContent === "New Game")
        window.location = "./players-info.html";
    if (option.textContent === "Scoreboard")
        window.location = "./scoreboard.html";
    if (option.textContent === "Game Rules")
        window.location = "./game-rules.html";
}))