function updateCountdown() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const christmasDate = new Date(`December 25, ${currentYear}`);
    
    if (today > christmasDate) {
      christmasDate.setFullYear(currentYear + 1);
    }
  
    const difference = christmasDate - today;
    const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
  
    document.getElementById('countdown-timer').textContent = daysLeft;
  }
  
  setInterval(updateCountdown, 1000);
  
  
  function openModal(id) {
    document.getElementById(id).style.display = 'flex';
  }
  
  function closeModal(id) {
    document.getElementById(id).style.display = 'none';
  }
  
  function checkList() {
    const name = document.getElementById('nameInput').value.trim();
    const result = name
      ? (name.length % 2 === 0
          ? `🎅 ${name}, you're on the Good List! 🎉`
          : `😈 ${name}, you're on the Naughty List! 😢`)
      : 'Please enter your name!';
    document.getElementById('result').textContent = result;
  }

function sendMessage() {
    const message = document.getElementById('santaMessage').value.trim();
    const responseElement = document.getElementById('santaResponse');
  
    if (message === '') {
      responseElement.textContent = 'Please write something before sending!';
      responseElement.style.color = 'red';
    } else {
      responseElement.textContent = 'Santa has received your message! 🎅';
      responseElement.style.color = 'green';
      document.getElementById('santaMessage').value = ''; // Clear the textarea
    }
  }
  