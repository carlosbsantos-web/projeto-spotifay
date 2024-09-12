
document.addEventListener('DOMContentLoaded', () => {

    const artistData = [

        {name: 'Henrique e Juliano', image: '/img/artista-henrique-juliano.jpg'},
        {name: 'Jorge e Matheus', image: '/img/artista-jorge-mateus.jpg'},
        {name: 'Ze Neto e Cristiano', image: '/img/artista-ze-neto.jpg'},
        {name: 'Gustavo Lima', image: '/img/artista-gustavo-limma.jpg'},
        {name: 'Luan Santana', image: '/img/artista-luan-santana.jpg'},
        {name: 'Matheus e Kauan', image: '/img/artista-mateus-kauan.jpg'}
        
    ];
    
    const albumsData =[
    
        {name: 'White Noise (Sleep & Relaxation Sounds)', artist: 'Sleepy Jhonn', image: './img/album-white-noise.jpg'},
        {name: 'O céu Explica Tudo (Ao Vivo)', artist: 'Henrique e Juliano', image: './img/album-ceu-explica.jpg'},
        {name: 'Nada como um dia após o outro', artist: 'Racionais', image: './img/album-vida-loka.jpg'},
        {name: 'Hit me Hard and Soft', artist: 'Billie Eilish', image: './img/album-hit-me.jpg'},
        {name: 'Caju', artist: 'Liniker', image: './img/album-caju.jpg'},
        {name: 'Escândalo Íntimo', artist: 'Luísa Sonza', image: './img/album-escandalo.jpg'},
    
    ];

    const artistGrid = document.querySelector('.artists-grid');
    const albumsGrid = document.querySelector('.albums-grid');
   
    
    artistData.forEach( artist => {

        const artistCard = document.createElement('div');
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
        
        <img src="${artist.image}" alt="${artist.name}">
        <h3>${artist.name}</h3>
        <p>artista</p>

        `

        artistGrid.appendChild(artistCard)
    });

      albumsData.forEach( album => {

        const albumCard = document.createElement('div');
        albumCard.classList.add('album-card')

        albumCard.innerHTML = `
        
        <img src="${album.image}" alt="${album.name}">
        
        <p>${album.name}</p>

        `

        albumsGrid.appendChild(albumCard)
  
      })
});


