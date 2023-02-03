// Callback
// Synchronous Callback
// function hello(name) {
//   alert(`Hello ${name}`);
// }

// function showMessage(callback) {
//   const name = prompt('Insert name : ');
//   callback(name);
// }

// showMessage((name) => alert(`Hello ${name}`));

// const souls = [
//   {
//     name: 'Mephistopheles',
//     race: 'Human',
//     type: 'INT',
//   },
//   {
//     name: 'Jade',
//     race: 'Human',
//     type: 'INT',
//   },
//   {
//     name: 'Talia',
//     race: 'Fairy',
//     type: 'INT',
//   },
// ];

// console.log('start');
// souls.forEach((s) => console.log(s.name));
// console.log('end');

// Asynchronous Callback
// function getAnimeList(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };

//   xhr.open('get', url);
//   xhr.send();
// }

// console.log('start');
// getAnimeList(
//   'data/anime_new.json',
//   (results) => {
//     const animes = JSON.parse(results);
//     animes.data.forEach((anime) => console.log(anime.title));
//   },
//   () => {}
// );
// console.log('end');

// JQuery
console.log('start');
$.ajax({
  url: 'data/anime_new.json',
  success: (animes) => {
    animes.data.forEach((anime) => console.log(anime.title));
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
console.log('end');
