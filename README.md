# GMIH Eben Haezer Ternate — Website & Aplikasi Android

Website statis responsif untuk GMIH Eben Haezer Ternate, siap dipasang di GitHub Pages.

## Fitur baru
- Halaman **Ruang Doa** dengan doa syukur, pergumulan, permohonan, keluarga, kesehatan, pekerjaan/usaha, gereja, dan perlindungan.
- **Catatan Pokok Doa** yang disimpan lokal di perangkat/browser pengguna; tidak dikirim ke server.
- Halaman **Pengakuan Iman Rasuli**.
- Halaman **Pengakuan Iman Nicea-Konstantinopel**.
- PWA (Progressive Web App): dapat dipasang sebagai aplikasi di Android dari Chrome melalui menu instalasi / tombol **Pasang Aplikasi**.
- Service worker untuk cache dan akses lebih cepat saat koneksi tidak stabil.
- Manifest dan ikon aplikasi.

## GitHub Pages
1. Upload seluruh isi folder ini ke root repository GitHub.
2. Pastikan `index.html`, `doa.html`, `pengakuan-iman.html`, `style.css`, `script.js`, `pwa.js`, `sw.js`, dan `manifest.webmanifest` ada di root.
3. Pastikan folder `assets/` ikut di-upload.
4. Settings → Pages → Deploy from a branch → `main` → `/ (root)`.

## Menjadikan aplikasi Android
Versi website ini sudah menjadi **PWA**, sehingga Android/Chrome dapat memasangnya seperti aplikasi tanpa Play Store. Buka website → menu browser → **Install app / Tambahkan ke layar utama**.

Folder `android-app/` berisi proyek Android Studio WebView sederhana sebagai alternatif jika ingin dibuat menjadi APK.
