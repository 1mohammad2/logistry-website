// Simple language toggle: stores preference in localStorage and toggles .rtl on <body>
(function(){
  const toggle = document.getElementById('lang-toggle');
  function setLang(isAr){
    if(isAr){
      document.documentElement.lang = 'ar';
      document.body.classList.add('rtl');
      toggle.textContent = 'English';
      localStorage.setItem('site-lang','ar');
    } else {
      document.documentElement.lang = 'en';
      document.body.classList.remove('rtl');
      toggle.textContent = 'العربية';
      localStorage.setItem('site-lang','en');
    }
  }
  toggle && toggle.addEventListener('click',()=>{
    const cur = localStorage.getItem('site-lang') === 'ar';
    setLang(!cur);
  });
  // init
  const saved = localStorage.getItem('site-lang') || (navigator.language && navigator.language.startsWith('ar') ? 'ar' : 'en');
  setLang(saved === 'ar');
})();

