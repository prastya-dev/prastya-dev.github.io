self.addEventListener('install', e => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', e => {
  // Default fetch handling
});
