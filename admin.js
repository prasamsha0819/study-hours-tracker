const PASSWORD = "sigma2024"; // 🔒 change this to whatever you want
const GIRLS = [
  { name: "Sara", photo: "sara.png" },
  { name: "Emma", photo: "emma.png" },
  { name: "Lily", photo: "lily.png" },
  { name: "Ava", photo: "ava.png" },
  { name: "Mia", photo: "mia.png" },
  { name: "Zoe", photo: "zoe.png" },
  { name: "Chloe", photo: "chloe.png" },
  { name: "Grace", photo: "grace.png" },
  { name: "Nora", photo: "nora.png" },
  { name: "Riley", photo: "riley.png" },
  { name: "Ella", photo: "ella.png" },
  { name: "Hazel", photo: "hazel.png" },
  { name: "Luna", photo: "luna.png" },
  { name: "Stella", photo: "stella.png" },
  { name: "Violet", photo: "violet.png" }
]; // ✏️ replace with your actual girls' names

// Check password
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

// Build the input form for all 15 girls
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

// Submit the week and find the winner
function submitWeek() {
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

  const currentWeek = {
    weekLabel,
    winnerName: winner.name,
    winnerHours: winner.hours,
    winnerPhoto: winner.photo,
    girls
  };
  localStorage.setItem('currentWeek', JSON.stringify(currentWeek));

  const pastWinners = JSON.parse(localStorage.getItem('pastWinners')) || [];
  pastWinners.unshift(currentWeek);
  localStorage.setItem('pastWinners', JSON.stringify(pastWinners));

  alert(`👑 ${winner.name} is crowned Academic Weapon with ${winner.hours} hours!`);
  window.location.href = 'index.html';
}
