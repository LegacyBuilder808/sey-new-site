(function(){
var nav=document.getElementById('nav');
addEventListener('scroll',function(){nav.classList.toggle('solid',scrollY>40)},{passive:true});
var b=document.getElementById('burger');
b&&b.addEventListener('click',function(){var o=nav.classList.toggle('open');b.setAttribute('aria-expanded',o)});
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});document.querySelectorAll('.rv').forEach(function(el){io.observe(el)})}else{document.querySelectorAll('.rv').forEach(function(el){el.classList.add('in')})}
// tasteful newsletter prompt: after 55% scroll, once per session, dismissible
try{var p=document.getElementById('nlp'),x=document.getElementById('nlx');
if(window.NLPROMPT&&p&&!sessionStorage.getItem('nlp')){var shown=false;addEventListener('scroll',function(){if(shown)return;var h=document.documentElement;if(scrollY/(h.scrollHeight-innerHeight)>.55){shown=true;p.classList.add('show')}},{passive:true})}
x&&x.addEventListener('click',function(){p.classList.remove('show');try{sessionStorage.setItem('nlp','1')}catch(e){}});
}catch(e){}
})();
