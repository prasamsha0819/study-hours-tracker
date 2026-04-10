const SUPABASE_URL = 'https://llqmmgmmjsvaurflwaxm.supabase.co';
const SUPABASE_KEY = 'sb_publishable_tJ3CSRWYu2kJeom076wNdQ_CGiTh-da';

async function loadData() {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/weeks?order=created_at.desc`, {
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`
    }
  });

const data = await response.json();
console.log('data from supabase:', data);
if (!data || data.length === 0) return;

  const currentWeek = data[0];
  document.getElementById('winner-photo').src = currentWeek.winner_photo;
  document.getElementById('winner-name').textContent = currentWeek.winner_name;
  document.getElementById('winner-hours').textContent = `${currentWeek.winner_hours} hours this week`;
  document.getElementById('winner-week').textContent = currentWeek.week_label;

  const pastWinners = data.slice(1);
  const pastContainer = document.getElementById('past-winners');

  pastWinners.forEach(winner => {
    const card = document.createElement('div');
    card.className = 'past-card';
    card.innerHTML = `
      <p class="week-label">${winner.week_label}</p>
      <img src="${winner.winner_photo}" alt="${winner.winner_name}" />
      <p><strong>${winner.winner_name}</strong></p>
      <p>${winner.winner_hours} hrs</p>
    `;
    pastContainer.appendChild(card);
  });
}

loadData().then(() => console.log('done')).catch(err => console.error('error:', err));