// const angka = [-1, 7, 5, 4, 3, 2, -8, -6, 9, -3];

// filter
// const newAngka = angka.filter((a) => a >= 3);
// console.table(newAngka);

// map
// const newAngka = angka.map((a) => a * 2);
// console.table(newAngka);

// reduce
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(newAngka);

// Method chaining
// Cari angka > 5 kalikan 3 jumlahkan
// const hasil = angka
//   .filter((a) => a > 5) //7, 9
//   .map((a) => a * 3) // 21, 27
//   .reduce((acc, curr) => acc + curr); //48

// console.log(hasil);

// Latihan
// Ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));
// console.log(videos);

// Pilih yang 'VLOG'
let vlog = videos
  .filter((video) => video.textContent.includes('VLOG'))

  // Ambil durasi masing" video
  .map((item) => item.dataset.duration)

  // Ubah durasi menjadi float, lalu ubah jam & menit, menjadi detik
  .map((time) => {
    // 10:30 => [10,30] split
    const parts = time.split(':').map((part) => parseFloat(part));
    return parts.length === 3 ? parts[0] * 3600 + parts[1] * 60 + parts[2] : parts[0] * 60 + parts[1];
  })

  // Jumlahkan semua detik
  .reduce((total, second) => total + second);

// Ubah formatnya jadi jam menit detik
const hour = Math.floor(vlog / 3600);
vlog = vlog - hour * 3600;
const minute = Math.floor(vlog / 60);
const second = vlog - minute * 60;

// Simpan di DOM
const duration = document.querySelector('.total-durasi');
duration.textContent = `${hour}:${minute}:${second}`;

const videoCount = videos.filter((video) => video.textContent.includes('VLOG')).length;
const videoCountElement = document.querySelector('.jumlah-video');
videoCountElement.textContent = `${videoCount} video.`;

console.log(videoCount);
