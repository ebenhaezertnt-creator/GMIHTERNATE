const devotions=[
['Tetap Percaya','Saat keadaan belum berubah, tetaplah membawa hati kepada Tuhan. Iman bukan berarti tidak memiliki pergumulan, tetapi memilih tetap berharap dan melangkah bersama-Nya.','Mazmur 27:1'],
['Tuhan Menyertai','Jangan menjalani hari sendirian. Serahkan rencana, pekerjaan dan kekhawatiran kepada Tuhan, lalu kerjakan bagian kita dengan setia.','Yosua 1:9'],
['Bersyukur dalam Segala Hal','Syukur mengajar kita melihat kebaikan Tuhan bahkan di tengah proses yang belum selesai. Hari ini, sebutkan tiga hal yang patut disyukuri.','1 Tesalonika 5:18'],
['Kuat dalam Pengharapan','Ketika jawaban doa belum terlihat, pengharapan tetap menjadi jangkar jiwa. Tuhan bekerja juga melalui proses yang panjang.','Roma 12:12'],
['Melayani dengan Kasih','Pelayanan bukan sekadar kegiatan, melainkan kesempatan menyatakan kasih Kristus. Lakukan satu kebaikan dengan tulus hari ini.','Galatia 5:13'],
['Damai di Tengah Kekhawatiran','Bawalah kekhawatiran dalam doa. Tuhan mengundang kita untuk menyerahkan beban dan menerima damai yang menjaga hati.','Filipi 4:6–7'],
['Menjadi Berkat','Di rumah, gereja, tempat kerja dan lingkungan, jadilah pembawa terang. Perbuatan kecil yang dilakukan dengan kasih dapat menjadi kesaksian.','Matius 5:16']
];
const d=new Date();const start=new Date(2026,0,1);const idx=Math.floor((new Date(d.getFullYear(),d.getMonth(),d.getDate())-start)/86400000)%devotions.length;const v=devotions[(idx+devotions.length)%devotions.length];
const date=d.toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'});for(const id of ['devDate','fullDevDate'])document.getElementById(id).textContent=date;document.getElementById('devTitle').textContent=v[0];document.getElementById('devText').textContent=v[1];document.getElementById('devRef').textContent=v[2];document.getElementById('fullDevTitle').textContent=v[0];document.getElementById('fullDevText').textContent=v[1];document.getElementById('fullDevRef').textContent=v[2];document.getElementById('year').textContent=d.getFullYear();
document.querySelector('.menu-btn')?.addEventListener('click',()=>document.querySelector('.navlinks').classList.toggle('open'));
