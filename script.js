let deferredPrompt;
const installBtn = document.getElementById('install-btn');
const appDiv = document.getElementById('app');

// Cek apakah aplikasi sudah diinstal
if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
  appDiv.innerHTML = '<h1>Hello World</h1>';
} else {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = 'block';

    installBtn.addEventListener('click', () => {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(choice => {
        if (choice.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        }
        deferredPrompt = null;
      });
    });
  });
}

// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('Service Worker registered'));
}
