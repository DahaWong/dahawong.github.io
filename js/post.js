let lastScrollTop = 0;
const header = document.querySelector('header.blur-container');
window.addEventListener('scroll', function() {
  let scrollDist = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollDist - lastScrollTop < 0) {
    header.style.opacity = 100;
    header.style.transform = `translateY(0px)`;
  }
  else{
    header.style.opacity = 0;
    header.style.transform = 'translateY(-${header.clientHeight}px)';
  }
  lastScrollTop = scrollDist;
});

if (lastScrollTop == 0) {
  header.style.opacity = 100;
  header.style.transform = `translateY(0px)`;
}

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

let myEfficientFn = debounce(function() {
  rssAddr.focus();
  rssAddr.select();
  document.execCommand('copy');
  const messageDiv = document.createElement('div');
  messageDiv.textContent = '订阅地址已复制';
  // messageDiv.style.fontFamily = 'Noto Serif SC';
  messageDiv.style.opacity = 0;
  messageDiv.style.transition = 'opacity 200ms ease-in-out';
  rssImg.style.opacity = 0;
  setTimeout(() => {
    rssBtn.appendChild(messageDiv);
    messageDiv.style.opacity = 1;
    rssImg.style.visibility = 'hidden';
  }, 200)
  setTimeout(function() {
    messageDiv.style.opacity = 0;
    setTimeout(() => {
      messageDiv.remove();
      rssImg.style.visibility = 'visible';
      rssImg.style.opacity = 1;
    }, 200)
  }, 800);
}, 250);

const rssBtn = document.querySelector('button.rss');
const rssAddr = document.querySelector('input.rss-address');
const rssImg = document.querySelector('.rss svg');

rssImg.addEventListener('click', myEfficientFn);

// Scroll Effect
const pictures = document.querySelectorAll('.post-content>p');
const picArr = Array.from(pictures);

function scrollEffect() {
  for (const pic of picArr){
    pic.classList.add('scrolling');
    const minThreshold = pic.offsetTop - (this.innerHeight - 1/2 * pic.clientHeight);
    const maxThreshold = pic.offsetTop + pic.clientHeight;
    if (this.scrollY < minThreshold || this.scrollY > maxThreshold) {
      pic.classList.remove("active");
    } else {
      pic.classList.add("active");
    }
  }
}

window.addEventListener('scroll', scrollEffect);

let timer = null;
window.addEventListener('scroll', function () {
    if(timer !== null) {
        clearTimeout(timer);        
    }
    timer = setTimeout(function() {
      for (const pic of picArr){
        pic.classList.remove('scrolling');
      }
    }, 200);
}, false);

// Display after loaded

const postContainer = document.querySelector('.post-container');
function postLoaded() {
  postContainer.classList.add('loaded');
}
window.addEventListener('DOMContentLoaded', postLoaded);
