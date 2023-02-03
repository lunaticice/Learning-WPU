// $.ajax({
//   url: 'https://api.jikan.moe/v4/anime?q=naruto',
//   success: (results) => {
//     const animes = results.data;
//     let cards = '';
//     animes.forEach((anime) => {
//       cards += `<div class="col-md-4 my-3">
//       <div class="card">
//         <img src="${anime.images.webp.image_url}" class="card-img-top" alt="" />
//         <div class="card-body">
//           <h5 class="card-title">${anime.title}</h5>
//           <h6 class="card-subtitle mb-2 text-muted">${anime.aired.prop.from.year}</h6>
//           <a href="#" class="btn btn-primary">Show Details</a>
//         </div>
//       </div>
//     </div>`;
//     });
//     $('.anime-container').html(cards);
//   },
//   error: (e) => {
//     console.log(e.responseText);
//   },
// });
