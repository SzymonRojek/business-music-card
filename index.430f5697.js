const n=document.querySelector(".navigation"),e=document.querySelector(".hero-container");new IntersectionObserver((function(e,i){e.forEach((e=>{e.isIntersecting?n.classList.remove("observer-nav-background"):n.classList.add("observer-nav-background")}))}),{rootMargin:"-100px 0px 0px 0px"}).observe(e);const i=[a("intro"),a("music"),a("feedback"),a("contact")],t=[a("js-navigation__link-intro"),a("js-navigation__link-music"),a("js-navigation__link-feedback"),a("js-navigation__link-contact")];const o=new IntersectionObserver((function(n,e){n.forEach((n=>{if(n.isIntersecting){const e=Array.from(i).indexOf(n.target);t.forEach((n=>{n.classList.remove("navigation__link--active")})),t[e].classList.add("navigation__link--active")}else a("js-navigation__link-intro").classList.remove("navigation__link--active")}))}),{threshold:.25});function a(n){return document.querySelector(`.${n}`)}i.forEach((n=>o.observe(n)));
//# sourceMappingURL=index.430f5697.js.map
