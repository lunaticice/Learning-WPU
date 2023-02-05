$('.search-button').on('click', function () {
  $.ajax({
    url: 'https://api.jikan.moe/v4/anime?q=' + $('.input-keyword').val(),
    success: (results) => {
      const animes = results.data;
      let cards = '';
      animes.forEach((anime) => {
        cards += showCards(anime);
      });
      $('.anime-container').html(cards);

      // ketika tombol detail di-klik
      $('.modal-detail-button').on('click', function () {
        $.ajax({
          url: 'https://api.jikan.moe/v4/anime/' + $(this).data('id') + '/full',
          success: (anime) => {
            const animeDetail = showAnimeDetail(anime);
            $('.modal-body').html(animeDetail);
          },
          error: (e) => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
});

function showCards(anime) {
  return `<div class="col-md-4 my-3">
  <div class="card">
    <img src="${anime.images.webp.image_url}" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title">${anime.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${anime.aired.prop.from.year}</h6>
      <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#animeDetailModal" data-id="${anime.mal_id}">Show Details</a>
    </div>
  </div>
</div>`;
}

function showAnimeDetail(anime) {
  const genres = anime.data.genres.map((a) => a.name).join(', ');

  return `<div class="container-fluid">
  <div class="row">
    <div class="col-md-3">
      <img src="${anime.data.images.webp.image_url}" class="img-fluid" />
    </div>
    <div class="col-md">
      <ul class="list-group">
        <li class="list-group-item"><h4>${anime.data.title}</h4></li>
        <li class="list-group-item"><strong>Studio : </strong> ${anime.data.studios[0].name}</li>
        <li class="list-group-item"><strong>Genre : </strong> ${genres}</li>
        <li class="list-group-item"><strong>Episodes : </strong> ${anime.data.episodes}</li>
        <li class="list-group-item"><strong>MAL Scores : </strong> ${anime.data.score}</li>
        <li class="list-group-item">
          <strong>Synopsis : </strong> <br />
          ${anime.data.synopsis}
        </li>
      </ul>
    </div>
  </div>
</div>`;
}
