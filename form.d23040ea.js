parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"oVPx":[function(require,module,exports) {
var e=document.querySelector(".form"),t=document.querySelector(".js-submitButton"),r=document.getElementsByClassName("form__item-error-text"),n=document.getElementsByClassName(".form__list"),o=document.querySelector(".form__list"),i=document.querySelectorAll(".form__item-icon-success"),c=0,u=1;function m(){o.addEventListener("keyup",function(e){var t=e.target,r=t.parentElement;"email"===t.attributes[1].nodeValue?(t.parentElement.children[3].style.opacity="".concat(p(t.value)?u:c),r.querySelector(".form__item-error-text").textContent="",r.querySelector(".form__item-icon-failure").style.opacity=c):(t.parentElement.children[3].style.opacity="".concat(q(t.value)?u:c),r.querySelector(".form__item-error-text").textContent="",r.querySelector(".form__item-icon-failure").style.opacity=c)}),e.addEventListener("submit",a)}function a(t){t.preventDefault();var r=document.querySelector(".js-form__field-name"),n=document.querySelector(".js-form__field-email"),o=document.querySelector(".js-form__field-subject"),c=document.querySelector(".js-form__field-message");s(r,function(){return q(r.value)},"minimum 3 characters required"),s(n,function(){return p(n.value)},"email is invalid"),s(o,function(){return q(o.value)},"minimum 3 characters required"),s(c,function(){return q(c.value)},"minimum 3 characters required");var u=Object.fromEntries(new FormData(e).entries()),m={name:u.name,subject:u.subject,email:u.email,description:u.description},a=document.querySelectorAll(".form__item-error-text");!Array.from(a).find(function(e){return""!==e.textContent})&&(l(m),S(i))}function l(t){emailjs.send("service_c8qbe5f","template_s3uxbxy",t).then(function(t){200===t.status&&(_(),e.reset())}).catch(function(e){return d(e)})}function s(e,t,r){var n=e.parentElement.querySelector(".form__item-error-text"),o=f(e,t,r)||[];o.length&&(n.textContent=o.length?o[0].message:""),o.length||y(e)}function f(e,t,r){var n=e.parentElement,o=n.querySelector(".form__item-icon-failure"),i=n.querySelector(".form__item-icon-success"),m=[];return e.value||m.push({message:"field is required"}),t()||m.push({message:r}),i.style.opacity=c,o.style.opacity=u,m}function y(e){var t=e.parentElement,r=t.querySelector(".form__item-icon-failure"),n=t.querySelector(".form__item-icon-success");t.querySelector(".form__item-error-text").textContent="",r.style.opacity=c,n.style.opacity=u}function _(){Swal.fire({position:"center",icon:"success",title:"Your  message has been sent",text:"I will respond soon 👋",timer:3e3,color:"#2c2323",confirmButtonColor:"green"})}function d(e){Swal.fire({icon:"error",title:"Email has not been sent 😕",text:"".concat(e.text?e.text:"Something went wront, please send it again"),confirmButtonColor:"crimson"})}m();var p=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())};function q(e){return e.length>=3}function S(e){return Array.from(e).forEach(function(e){return e.style.opacity=c})}
},{}]},{},["oVPx"], null)
//# sourceMappingURL=form.d23040ea.js.map