if (typeof(Storage) !== "undefined") {
  // Retrieve the game state from local storage
  let gameLost = localStorage.getItem("gameLost");

  // Check if the game was lost previously
  if (gameLost) {
    // Show the popup if the game was lost before
    document.getElementById("losePopup").style.display = "block";
  }

  // Function to handle when the game is lost
  function handleGameLost() {
    // Set a flag in local storage to indicate game loss
    localStorage.setItem("gameLost", "true");
    // Show the popup
    document.getElementById("losePopup").style.display = "block";
  }

  // Function to handle when "Play Again" button is clicked
  document.getElementById("playAgainBtn").addEventListener("click", function() {
    // Clear the gameLost flag in local storage
    localStorage.removeItem("gameLost");
    // Hide the popup
    document.getElementById("losePopup").style.display = "none";
    // Perform actions to restart the game
    // For example: window.location.reload(); to refresh the page
  });

  // Example function calling handleGameLost() when the game is lost (simulation)
  function simulateGameLost() {
    // Simulating a game loss after 5 seconds (replace this with your actual game logic)
    setTimeout(function() {
      handleGameLost();
    }, 5000); // Simulate a game loss after 5 seconds
  }

  // Call simulateGameLost() to simulate a game loss
  // In your actual game, call handleGameLost() when the game is lost
  simulateGameLost();
} else {
  // Browser doesn't support local storage
  console.log("Local storage not supported");
}