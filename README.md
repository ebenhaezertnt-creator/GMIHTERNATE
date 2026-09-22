# GMIH Eben Haezer Ternate — Mobile + Ebenhaezer AI

Versi ini mempertahankan isi/fungsi website sebelumnya dan menambahkan perbaikan mobile, galeri, profil pendeta, chatbot, serta pemutar audio lokal.

## Pembaruan utama
- **Mobile-first:** layout, galeri, jadwal, menu, chatbot, tombol dan gambar dioptimalkan untuk HP.
- **Galeri diperbaiki:** grid memakai `minmax(0,1fr)`, ukuran gambar terkunci agar foto tidak membesar memenuhi layar, dan galeri jemaat menampilkan lebih banyak dokumentasi.
- **Foto pendeta:** memakai crop khusus untuk kartu agar wajah Pdt. Yofter N. Taliwunan dan Pdt. Adewenti Min Radja tampil utuh/tidak terpotong.
- **Ebenhaezer AI:** dapat mencari isi teks yang tampil di seluruh halaman, lalu mencocokkannya dengan basis pengetahuan GMIH eksternal yang sudah dicantumkan sumbernya.
- **Sumber eksternal GMIH:** basis pengetahuan mencakup Sinode GMIH, PGI, dan berita terkait yang relevan. Untuk berita yang benar-benar terbaru, chatbot menyediakan pencarian web.
- **Lagu rohani:** pemutar sekarang menggunakan `<audio>` lokal, bukan YouTube.

## Audio lagu
Judul yang disiapkan:
**“Apa yang Dapat Memisahkanku dari Kasih-Mu Tuhan — Tak Satupun”**.

Untuk memakai rekaman lagu tersebut, letakkan file audio yang Anda miliki/berhak gunakan di:
`assets/apa-yang-dapat-memisahkanku.mp3`

Alternatif: `assets/apa-yang-dapat-memisahkanku.m4a`.

Browser akan mencoba autoplay saat halaman dibuka. Autoplay dengan suara dapat diblokir browser, sehingga tombol **Putar Lagu** tetap tersedia.

> Jangan mengunggah rekaman berhak cipta kecuali Anda memiliki izin/hak penggunaannya.

## Chatbot dan informasi eksternal
GitHub Pages bersifat statis, jadi chatbot ini **tidak menyimpan API key** dan tidak berpura-pura memiliki akses internet real-time. Ia memakai dua lapisan:
1. indeks isi halaman website yang dibaca langsung dari DOM;
2. basis pengetahuan eksternal GMIH yang sudah dicantumkan dengan sumber resmi/tepercaya.

Untuk pertanyaan seperti “berita GMIH terbaru”, chatbot membuat tautan pencarian web agar pengguna dapat membuka hasil terbaru.

## Deploy
Upload **isi folder ini langsung ke root** repository GitHub Pages, lalu overwrite file lama. Jangan membuat folder bersarang seperti `gmih_current/index.html` jika Pages diarahkan ke root.

Setelah upload, lakukan hard refresh di HP atau buka URL dengan `?v=6` sekali untuk memaksa browser mengambil CSS/JS/service worker terbaru.

## Catatan kompatibilitas
- `meta viewport`, responsive breakpoints, safe touch targets, `loading="lazy"`, dan pembatasan lebar gambar sudah diterapkan.
- PWA/service worker tetap dipertahankan.
- Aset MIDI lama tetap disimpan secara fisik agar tidak menghapus aset lama, tetapi tidak lagi dipakai sebagai pemutar di halaman.


Pembaruan v6: lagu "Tak Satupun" (Herlin Pirena) diputar melalui embed YouTube; profil pendeta menggunakan object-fit contain agar wajah/tubuh tidak terpotong; Ebenhaezer AI mengindeks teks halaman dan memiliki basis sumber resmi Sinode GMIH/PGI serta pencarian web untuk informasi terbaru.
