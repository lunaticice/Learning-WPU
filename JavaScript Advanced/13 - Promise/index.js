// $.ajax({
//   url: 'https://api.jikan.moe/v4/anime?q=otonari tenshi',
//   success: (animes) => console.log(animes),
// });

// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.status === 200) {
//     if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.response));
//     } else {
//       console.log(xhr.responseText);
//     }
//   }
// };

// xhr.open('get', 'https://api.jikan.moe/v4/anime?q=otonari tenshi');

// xhr.send();

// fetch('https://api.jikan.moe/v4/anime?q=otonari tenshi')
//   .then((response) => response.json())
//   .then((response) => console.log(response));

// Promise
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve('Janji telah ditepati!');
//   } else {
//     reject('Ingkar janji...');
//   }
// });

// janji1.then((response) => console.log('OK! : ' + response)).catch((response) => console.log('NOT OK! : ' + response));

// contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve('Ditepati setelah beberapa waktu!');
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject('Tidak ditepati setelah beberapa waktu!');
//     }, 2000);
//   }
// });

// console.log('mulai');
// console.log(janji2.then(() => console.log(janji2)));
// janji2
//   .finally(() => console.log('Selesai menunggu!'))
//   .then((response) => console.log('OK! : ' + response))
//   .catch((response) => console.log('NOT OK! : ' + response));
// console.log('selesai');

// Promise.all()

const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: 'Your Name',
        sutradara: 'Makoto Shinkai',
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: 'Tangerang',
        temp: 30,
        kondisi: 'panas',
      },
    ]);
  }, 500);
});

// Promise.all([film, cuaca]).then((response) => console.log(response));
Promise.all([cuaca, film]).then((response) => {
  const [film, cuaca] = response;
  console.log(film);
  console.log(cuaca);
});
