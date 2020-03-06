let content = document.querySelectorAll("p,ul,ol")
let post = document.querySelector(".post-content")
let quote = document.querySelector("blockquote:first-of-type");

let paraLines = [];
for (const section of Array.from(content)){
  if (section.parentElement != quote){
    paraLines.push(section.textContent.match(/.{1,18}/g).length);
  }
}
console.log(paraLines)

let i = 0;
while (i < content.length) {
  let sum = 0;
  while (sum < 21 && i < content.length){
    let lineCount = content[i].textContent.match(/.{1,18}/g).length;
    sum += lineCount;
    i += 1;
  }
  if (sum > 21) {
    let slicePos = sum - 21;
    let prevSlice = content[i].textContent.slice(0,slicePos * 18);
    let nextSlice = content[i].textContent.slice(slicePos * 18);
    console.log(prevSlice);
    console.log(nextSlice);
  }
}


let pageCount = 0;
function wrapPage(pageSection){
  let pageWrapper = document.createElement("section")
  post.replaceChild(pageWrapper, pageHead);
  for (const pagePart of Array.from(pageSection)){
    pageWrapper.addChild(pagePart);
    pagePart.remove();
  }
  pageCount += 1;
  pageWrapper.id = pageCount.toString();
}



function prevPage(){

}

function nextPage(){

}

let lastScrollTop = 0;
const header = document.querySelector("header.blur-container");
window.addEventListener("scroll", function(){
  let scrollDist = window.pageYOffset || document.documentElement.scrollTop;
  // console.log(scrollDist);
  // console.log(lastScrollTop);
  if (scrollDist - lastScrollTop < 0) {
    console.log("test")
    header.style.opacity = 100;
    header.style.transform = `translateY(${header.clientHeight}px)`;
  }
  else{
    header.style.opacity = 0;
    header.style.transform = "translateY(0px)";
  }
  lastScrollTop = scrollDist;
});

if (lastScrollTop == 0) {
  header.style.opacity = 100;
  header.style.transform = `translateY(${header.clientHeight}px)`;
}