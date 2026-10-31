document.addEventListener('DOMContentLoaded',()=>{
 document.body.classList.add('loading');
 const pre=document.querySelector('.preloader');
 const finish=()=>{pre?.classList.add('done');document.body.classList.remove('loading')};
 window.addEventListener('load',()=>setTimeout(finish,550));setTimeout(finish,2600);
 const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav-links');
 toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰';document.body.classList.toggle('menu-open',open)});
 nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false');if(toggle)toggle.textContent='☰';document.body.classList.remove('menu-open')}));
 const progress=document.querySelector('.progress');const update=()=>{const max=document.documentElement.scrollHeight-innerHeight;if(progress)progress.style.width=(max>0?scrollY/max*100:0)+'%'};window.addEventListener('scroll',update,{passive:true});update();
 const els=document.querySelectorAll('main section,.offer-card,.values-grid article,.steps-grid>div,.gallery-grid figure');els.forEach(el=>el.classList.add('reveal'));
 if('IntersectionObserver'in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});els.forEach(el=>io.observe(el))}else els.forEach(el=>el.classList.add('visible'));
 // Google Translate-powered German/English switch. Requires an internet connection.
 const langButton=document.querySelector('.language-toggle');
 window.googleTranslateElementInit=()=>{new google.translate.TranslateElement({pageLanguage:'de',includedLanguages:'de,en',autoDisplay:false},'google_translate_element');};
 const loadTranslator=()=>{if(!document.querySelector('script[data-google-translate]')){const sc=document.createElement('script');sc.dataset.googleTranslate='true';sc.src='https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';document.head.appendChild(sc);}};
 let targetLanguage='en';
 langButton?.addEventListener('click',()=>{targetLanguage=targetLanguage==='en'?'de':'en';langButton.innerHTML=(targetLanguage==='en'?'EN':'DE')+' <span>↗</span>';loadTranslator();let tries=0;const choose=()=>{const select=document.querySelector('.goog-te-combo');if(select){select.value=targetLanguage;select.dispatchEvent(new Event('change'));}else if(tries++<30){setTimeout(choose,250);}};choose();});
});
