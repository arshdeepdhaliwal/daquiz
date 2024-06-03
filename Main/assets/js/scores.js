function printHighscores() {
  try {
    // either get scores from localstorage or set to empty array
    var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];

    // sort highscores by score property in descending order
    highscores.sort(function(a, b) {
      return b.score - a.score;
    });

    // get the ol element to display highscores
    var olEl = document.getElementById('highscores');
    olEl.innerHTML = ''; // clear any existing content

    highscores.forEach(function(score) {
      // create li tag for each high score
      var liTag = document.createElement('li');
      liTag.textContent = score.initials + ' - ' + score.score;
      // display on page
      olEl.appendChild(liTag);
    });
  } catch (error) {
    console.error('Error printing highscores:', error);
  }
}

function clearHighscores() {
  try {
    window.localStorage.removeItem('highscores');
    window.location.reload();
  } catch (error) {
    console.error('Error clearing highscores:', error);
  }
}

document.getElementById('clear').onclick = clearHighscores;

// run function when page loads
document.addEventListener('DOMContentLoaded', printHighscores);
