let lastScrollTop=0;const header=document.querySelector("header.blur-container");function debounce(t,e,s){var o;return function(){var n=this,r=arguments,i=s&&!o;clearTimeout(o),o=setTimeout(function(){o=null,s||t.apply(n,r)},e),i&&t.apply(n,r)}}window.addEventListener("scroll",function(){let t=window.pageYOffset||document.documentElement.scrollTop;t-lastScrollTop<0?(header.style.opacity=100,header.style.transform="translateY(0px)"):(header.style.opacity=0,header.style.transform="translateY(-${header.clientHeight}px)"),lastScrollTop=t}),0==lastScrollTop&&(header.style.opacity=100,header.style.transform="translateY(0px)");let myEfficientFn=debounce(function(){rssAddr.focus(),rssAddr.select(),document.execCommand("copy");const t=document.createElement("div");t.textContent="订阅地址已复制",t.style.opacity=0,t.style.transition="opacity 200ms ease-in-out",rssImg.style.opacity=0,setTimeout(()=>{rssBtn.appendChild(t),t.style.opacity=1,rssImg.style.visibility="hidden"},200),setTimeout(function(){t.style.opacity=0,setTimeout(()=>{t.remove(),rssImg.style.visibility="visible",rssImg.style.opacity=1},200)},800)},250);const rssBtn=document.querySelector("button.rss"),rssAddr=document.querySelector("input.rss-address"),rssImg=document.querySelector(".rss svg");rssImg.addEventListener("click",myEfficientFn);const pictures=document.querySelectorAll(".post-content>p"),picArr=Array.from(pictures);function scrollEffect(){for(const t of picArr){t.classList.add("scrolling");const e=t.offsetTop-(this.innerHeight-.5*t.clientHeight),s=t.offsetTop+t.clientHeight;this.scrollY<e||this.scrollY>s?t.classList.remove("active"):t.classList.add("active")}window.commento.main()}window.addEventListener("scroll",scrollEffect);let timer=null;window.addEventListener("scroll",function(){null!==timer&&clearTimeout(timer),timer=setTimeout(function(){for(const t of picArr)t.classList.remove("scrolling")},200)},!1);const postContainer=document.querySelector(".post-container");function postLoaded(){postContainer.classList.add("post-loaded")}window.addEventListener("DOMContentLoaded",postLoaded);