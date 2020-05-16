const cursor=document.querySelector(".cursor"),links=document.querySelectorAll("a");let lastPosY,lastscrollY;function cursorFollowMouse(e){lastPosY=e.pageY-10,lastscrollY=window.scrollY,cursor.setAttribute("style",`left: ${e.pageX-10}px; top: ${lastPosY}px;`)}function cursorHoverLink(){cursor.classList.remove("leaving"),cursor.classList.add("hovering")}function cursorDown(){cursor.classList.remove("clicking"),cursor.classList.add("pressing")}function cursorUp(){cursor.classList.remove("pressing")}function scrollRelocate(){cursor.style.top=`${lastPosY+window.scrollY-lastscrollY}px`}document.addEventListener("mousemove",cursorFollowMouse),document.addEventListener("mousedown",cursorDown),document.addEventListener("mouseup",cursorUp),window.onscroll=scrollRelocate,links.forEach(e=>{e.addEventListener("mouseover",cursorHoverLink),e.addEventListener("mouseleave",()=>{cursor.classList.remove("hovering"),cursor.classList.add("leaving")})});const media=document.querySelector(".media"),mediaWidth=media.clientWidth,mediaHalfWidth=20;let mediaTouchStartX,mediaTouchEndX,wisdomTouchStartX,wisdomTouchEndX,entriesTouchStartX,entriesTouchEndX,mediaPresentPos=0,wisdomPresentPos=0,entriesPresentPos=0;function needMove(e){return Math.abs(e)>mediaHalfWidth}function moveToNeighbor(){const e=mediaTouchStartX-mediaTouchEndX;e>0&&needMove(e)?media.scrollLeft=media.scrollLeft+mediaWidth-e+12:e<0&&needMove(e)?media.scrollLeft=media.scrollLeft-mediaWidth-e-15:media.scrollLeft=mediaPresentPos}function touchStart(e){mediaPresentPos=media.scrollLeft,mediaTouchStartX=e.changedTouches[0].clientX}function touchEnd(e){mediaTouchEndX=e.changedTouches[0].clientX,moveToNeighbor()}media.addEventListener("touchstart",touchStart),media.addEventListener("touchend",touchEnd);const wisdom=document.querySelector(".wisdom"),wisdomWidth=wisdom.clientWidth;function wisdomMoveToNeighbor(){const e=wisdomTouchStartX-wisdomTouchEndX;e>0&&needMove(e)?wisdom.scrollLeft=wisdom.scrollLeft+wisdomWidth-e+12:e<0&&needMove(e)?wisdom.scrollLeft=wisdom.scrollLeft-wisdomWidth-e-15:wisdom.scrollLeft=wisdomPresentPos}function wisdomTouchStart(e){wisdomPresentPos=wisdom.scrollLeft,wisdomTouchStartX=e.changedTouches[0].clientX}function wisdomTouchEnd(e){wisdomTouchEndX=e.changedTouches[0].clientX,wisdomMoveToNeighbor()}wisdom.addEventListener("touchstart",wisdomTouchStart),wisdom.addEventListener("touchend",wisdomTouchEnd);const entries=document.querySelector(".entries"),entriesWidth=entries.clientWidth;function entriesMoveToNeighbor(){const e=entriesTouchStartX-entriesTouchEndX;e>0&&needMove(e)?entries.scrollLeft=entries.scrollLeft+entriesWidth-e+12:e<0&&needMove(e)?entries.scrollLeft=entries.scrollLeft-entriesWidth-e-15:entries.scrollLeft=entriesPresentPos}function entriesTouchStart(e){entriesPresentPos=entries.scrollLeft,entriesTouchStartX=e.changedTouches[0].clientX}function entriesTouchEnd(e){entriesTouchEndX=e.changedTouches[0].clientX,entriesMoveToNeighbor()}entries.addEventListener("touchstart",entriesTouchStart),entries.addEventListener("touchend",entriesTouchEnd);const mainContainer=document.querySelector("main");function mainLoaded(){mainContainer.classList.add("main-loaded")}window.addEventListener("DOMContentLoaded",mainLoaded);