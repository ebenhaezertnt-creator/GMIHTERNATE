# GMIH Eben Haezer Ternate — versi Enhanced

Website ini mempertahankan seluruh isi versi sebelumnya dan **menambahkan** fitur baru.

## Fitur baru
- Ebenhaezer AI: chatbot pengetahuan pelayanan yang berjalan lokal di browser, tanpa API key.
- Ayat Hafalan Setiap Hari di beranda, berganti berdasarkan tanggal.
- Musik instrumental bergaya himne original berbasis MIDI; browser mencoba autoplay dan menyediakan tombol play sebagai fallback jika autoplay diblokir.
- Slideshow gambar rohani tentang Tuhan Yesus.
- Service worker cache dinaikkan ke `v4-enhanced` agar versi baru tidak tertahan cache lama.

## Fitur lama dipertahankan
- Renungan harian dan tautan SABDA.
- Doa Kristen / Doa Bapa Kami (`doa.html`).
- Alkitab SABDA.
- Profil Pdt. Yofter N. Taliwunan, S.Si Teol. dan Pdt. Adewenti Min Radja, M.Th.
- QRIS persembahan.
- Galeri dan dokumentasi kegiatan.
- YouTube, Facebook, Instagram.
- PWA / service worker.
- Semua foto/aset lama tetap disertakan.

## Deploy GitHub Pages
Upload **isi folder ini ke root branch `main`** repository GitHub Pages. Jangan membuat folder bersarang seperti `gmih-enhanced/index.html` jika Pages diarahkan ke root.

## Catatan chatbot
Karena GitHub Pages adalah hosting statis, chatbot di paket ini menggunakan basis pengetahuan lokal. Jangan menaruh API key OpenAI/layanan AI di `script.js`. Jika nanti ingin AI generatif sungguhan, gunakan backend/serverless endpoint yang menyimpan API key di server.
