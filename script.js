const confetti = document.getElementById('confetti');
const surpriseModal = document.getElementById('surpriseModal');
const toast = document.getElementById('toast');

const colors = ['#f26f5d', '#f8c95b', '#cbd6c4', '#202322', '#fffdf9'];
function launchConfetti(amount = 90) {
  confetti.innerHTML = '';
  for (let index = 0; index < amount; index += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetto';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[index % colors.length];
    piece.style.setProperty('--drift', `${(Math.random() - .5) * 260}px`);
    piece.style.animationDelay = `${Math.random() * .7}s`;
    piece.style.transform = `rotate(${Math.random() * 180}deg)`;
    confetti.appendChild(piece);
  }
  window.setTimeout(() => { confetti.innerHTML = ''; }, 4600);
}

function openSurprise() {
  surpriseModal.hidden = false;
  document.body.classList.add('modal-open');
  launchConfetti(130);
}
function closeSurprise() {
  surpriseModal.hidden = true;
  document.body.classList.remove('modal-open');
}

document.getElementById('surpriseButton').addEventListener('click', openSurprise);
document.getElementById('finalButton').addEventListener('click', openSurprise);
document.getElementById('closeModal').addEventListener('click', closeSurprise);
document.getElementById('modalDone').addEventListener('click', closeSurprise);
surpriseModal.querySelector('.modal-backdrop').addEventListener('click', closeSurprise);
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !surpriseModal.hidden) closeSurprise(); });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelector('.music-button').addEventListener('click', (event) => {
  const button = event.currentTarget;
  button.classList.toggle('active');
  button.querySelector('.music-label').textContent = button.classList.contains('active') ? 'sound on' : 'sound off';
  toast.textContent = button.classList.contains('active') ? 'Imagine your favorite song playing right now.' : 'A quiet little birthday moment.';
  toast.classList.add('show');
  window.clearTimeout(window.toastTimer);
  window.toastTimer = window.setTimeout(() => toast.classList.remove('show'), 2800);
});

document.addEventListener('mousemove', (event) => {
  const glow = document.querySelector('.cursor-glow');
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

window.setTimeout(() => launchConfetti(55), 1100);
