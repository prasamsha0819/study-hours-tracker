// Load data from localStorage
const currentWeek = JSON.parse(localStorage.getItem('currentWeek'));
const pastWinners = JSON.parse(localStorage.getItem('pastWinners')) || [];

// Show current winner
if (currentWeek) {
  document.getElementById('winner-photo').src = currentWeek.winnerPhoto;
  document.getElementById('winner-name').textContent = currentWeek.winnerName;
  document.getElementById('winner-hours').textContent = `${currentWeek.winnerHours} hours this week`;
  document.getElementById('winner-week').textContent = currentWeek.weekLabel;

}

// Show hall of fame
const pastContainer = document.getElementById('past-winners');
pastWinners.forEach(winner => {
  const card = document.createElement('div');
  card.className = 'past-card';
card.innerHTML = `
    <p class="week-label">${winner.weekLabel}</p>
    <img src="${winner.winnerPhoto}" alt="${winner.winnerName}" />
    <p><strong>${winner.winnerName}</strong></p>
    <p>${winner.winnerHours} hrs</p>
  `;
  pastContainer.appendChild(card);
});