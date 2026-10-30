const albums={
  engagement:[
    ['couple-portrait.webp','A lovely portrait together'],
    ['family-blessing.webp','Blessed by family'],
    ['cake-moment.webp','A sweet celebration'],
    ['friends-selfie.webp','A happy moment with friends'],
    ['family-portrait.webp','Family, all together'],
    ['friends-group.webp','Surrounded by friends'],
    ['friends-together.webp','Friends beside us'],
    ['proposal-moment.webp','The moment of the promise']
  ],
  prewedding:[],
  wedding:[],
  reception:[]
};
const guestName=(new URLSearchParams(location.search).get('guest')||'').replace(/_/g,' ').trim().slice(0,80);
const greeting=document.querySelector('#guest-greeting');
if(greeting&&guestName)greeting.textContent='Dear '+guestName+', we ';
const grid=document.querySelector('#photo-grid');
function showAlbum(name){
  const photos=albums[name];
  if(!photos.length){const labels={prewedding:'Pre-wedding photos and films',wedding:'Wedding photographs',reception:'Reception photos'};grid.innerHTML='<div class="no-photos"><strong>'+labels[name]+' will be added here</strong>We are looking forward to sharing these memories with you.</div>';return;}
  grid.innerHTML=photos.map(item=>{const isVideo=item[0]==='video',src=isVideo?item[1]:item[0],caption=isVideo?item[2]:item[1];const media=isVideo?'<video controls playsinline preload="metadata" aria-label="'+caption+'"><source src="'+src+'" type="video/mp4"></video>':'<img src="'+src+'" alt="'+caption+'" loading="lazy">';return '<figure class="photo-card">'+media+'<figcaption>'+caption+'</figcaption></figure>';}).join('');
}
showAlbum('engagement');
document.querySelectorAll('.gallery-tab').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.gallery-tab').forEach(x=>x.classList.remove('active'));button.classList.add('active');showAlbum(button.dataset.album)}));
const menu=document.querySelector('.menu'),nav=document.querySelector('.header nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));

