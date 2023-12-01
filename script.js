// Add JavaScript code here

function updateCountdown() {
  const now = new Date();
  let christmas = new Date(now.getFullYear(), 11, 25); // December 25 of this year

  // If today is past Christmas, target next year's Christmas
  if (now > christmas) {
    christmas = new Date(now.getFullYear() + 1, 11, 25);
  }

  const diff = christmas - now;

  // Convert time difference from milliseconds
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  // Update HTML
  document.querySelector(
    ".countdown__card:nth-child(1) .countdown__card--number h1"
  ).innerText = days;
  document.querySelector(
    ".countdown__card:nth-child(2) .countdown__card--number h1"
  ).innerText = hours;
  document.querySelector(
    ".countdown__card:nth-child(3) .countdown__card--number h1"
  ).innerText = minutes;
  document.querySelector(
    ".countdown__card:nth-child(4) .countdown__card--number h1"
  ).innerText = seconds;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
