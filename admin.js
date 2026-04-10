const SUPABASE_URL = 'https://llqmmgmmjsvaurflwaxm.supabase.co';
const SUPABASE_KEY = 'sb_publishable_tJ3CSRWYu2kJeom076wNdQ_CGiTh-da';
const PASSWORD = "sigma2024"; // 🔒 change this to whatever you want

const GIRLS = [
  { name: "Tyler", photo: "Tyler.png" },
  { name: "Yaressi", photo: "Yaressi.png" },
  { name: "Yazmin", photo: "Yazmin.png" },
  { name: "Yesica", photo: "Yesica.png" },
  { name: "Merit", photo: "Merit.png" },
  { name: "Key'Ona", photo: "Key'Ona.png" },
  { name: "Alex", photo: "Alex.png" },
  { name: "JD", photo: "JD.png" },
  { name: "Elvia", photo: "Elvia.png" },
  { name: "Paloma", photo: "Paloma.png" },
  { name: "Adelaide", photo: "Adelaide.png" },
  { name: "Prasamsha", photo: "Prasamsha.png" },
  { name: "Melanie", photo: "Melanie.png" },
  { name: "Carter", photo: "Carter.png" }
];

function checkPassword() {
  const input = document.getElementById('password-input').value;
  if (input === PASSWORD) {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('admin-panel').style.display = 'block';
    buildForm();
  } else {
    document.getElementById('login-error').textContent = 'Wrong password, try again!';
  }
}

function buildForm() {
  const container = document.getElementById('girls-inputs');
  GIRLS.forEach(girl => {
    const div = document.createElement('div');
    div.className = 'girl-input-row';
    div.innerHTML = `
      <label>${girl.name}</label>
      <input type="number" id="hours-${girl.name}" placeholder="Hours" min="0" />
    `;
    container.appendChild(div);
  });
}

async function submitWeek() {
  const weekLabel = document.getElementById('week-label').value;
  if (!weekLabel) {
    alert('Please enter a week label!');
    return;
  }

  const girls = [];
  let winner = { name: '', hours: -1, photo: '' };

  GIRLS.forEach(girl => {
    const hours = parseFloat(document.getElementById(`hours-${girl.name}`).value) || 0;
    girls.push({ name: girl.name, hours, photo: `images/${girl.photo}` });

    if (hours > winner.hours) {
      winner = { name: girl.name, hours, photo: `images/${girl.photo}` };
    }
  });

  const response = await fetch(`${SUPABASE_URL}/rest/v1/weeks`, {
    method: 'POST',
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify({
      week_label: weekLabel,
      winner_name: winner.name,
      winner_hours: winner.hours,
      winner_photo: winner.photo,
      girls: girls
    })
  });

  if (response.ok) {
    alert(`👑 ${winner.name} is crowned Academic Weapon with ${winner.hours} hours!`);
    window.location.href = 'index.html';
  } else {
    alert('Something went wrong! Check your Supabase connection.');
  }
}