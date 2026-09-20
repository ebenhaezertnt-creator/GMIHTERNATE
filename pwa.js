if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  document.querySelectorAll('[data-install-app]').forEach(btn => btn.hidden = false);
});
document.addEventListener('click', async (event) => {
  const btn = event.target.closest('[data-install-app]');
  if (!btn || !deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  document.querySelectorAll('[data-install-app]').forEach(el => el.hidden = true);
});

const year = new Date().getFullYear();
document.querySelectorAll('.year').forEach(el => el.textContent = year);

const note = document.getElementById('prayerNote');
const status = document.getElementById('noteStatus');
if (note) {
  const saved = localStorage.getItem('gmihPrayerNote');
  if (saved) note.value = saved;
  document.getElementById('savePrayer')?.addEventListener('click', () => {
    localStorage.setItem('gmihPrayerNote', note.value);
    if (status) status.textContent = 'Catatan doa tersimpan di perangkat ini.';
  });
  document.getElementById('clearPrayer')?.addEventListener('click', () => {
    note.value = '';
    localStorage.removeItem('gmihPrayerNote');
    if (status) status.textContent = 'Catatan doa dihapus dari perangkat ini.';
  });
}
