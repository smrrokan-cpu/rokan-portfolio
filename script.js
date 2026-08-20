const menu=document.querySelector('.menu');
const header=document.querySelector('.site-header');
menu?.addEventListener('click',()=>{
  const open=header.classList.toggle('open');
  menu.setAttribute('aria-expanded',String(open));
  menu.setAttribute('aria-label',open?'Close menu':'Open menu');
});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{
  header.classList.remove('open');
  menu?.setAttribute('aria-expanded','false');
}));
document.getElementById('year').textContent=new Date().getFullYear();

const bar=document.getElementById('progressBar');
const progress=()=>{
  const max=document.documentElement.scrollHeight-window.innerHeight;
  bar.style.width=`${max>0?(scrollY/max)*100:0}%`;
};
addEventListener('scroll',progress,{passive:true}); progress();

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
