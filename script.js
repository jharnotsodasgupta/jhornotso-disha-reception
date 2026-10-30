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
  reception:[]
};
const grid=document.querySelector('#photo-grid');
function showAlbum(name){
  const photos=albums[name];
  if(!photos.length){grid.innerHTML='<div class="no-photos"><strong>Reception photos will be added here</strong>We are looking forward to sharing these memories with you.</div>';return;}
  grid.innerHTML=photos.map(([src,caption])=>'<figure class="photo-card"><img src="'+src+'" alt="'+caption+'" loading="lazy"><figcaption>'+caption+'</figcaption></figure>').join('');
}
showAlbum('engagement');
document.querySelectorAll('.gallery-tab').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.gallery-tab').forEach(x=>x.classList.remove('active'));button.classList.add('active');showAlbum(button.dataset.album)}));
const menu=document.querySelector('.menu'),nav=document.querySelector('.header nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
