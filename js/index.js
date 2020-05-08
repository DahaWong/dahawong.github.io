const cursor = document.querySelector('.cursor');
const links = document.querySelectorAll('a');

function cursorFollowMouse(e) {
  cursor.setAttribute('style', `left: ${e.pageX - 10}px; top: ${e.pageY - 10}px;`);
}

function cursorHoverLink() {
  cursor.classList.remove('leaving');
  cursor.classList.add('hovering');
}

function cursorDown() {
  cursor.classList.remove('clicking');
  cursor.classList.add('pressing');
}

function cursorUp() {
  cursor.classList.remove('pressing');
}

document.addEventListener('mousemove', cursorFollowMouse);
document.addEventListener('mousedown', cursorDown);
document.addEventListener('mouseup', cursorUp);
links.forEach((link) => {
  link.addEventListener('mouseover', cursorHoverLink);
  link.addEventListener('mouseleave', () => {
    cursor.classList.remove('hovering');
    cursor.classList.add('leaving');
  });
});

// Touch Event Process

// Scroll
const media = document.querySelector('.media');

const mediaWidth = window.innerWidth;
const mediaHalfWidth = 20;
let mediaPresentPos = 0;
let touchStartX;
let touchEndX;

function needMove(dist) {
  if (Math.abs(dist) > mediaHalfWidth) {
    return true;
  }
  return false;
}

function moveToNeighbor() {
  const touchMoveDist = touchStartX - touchEndX;
  if (touchMoveDist > 0 && needMove(touchMoveDist)) {
    media.scrollLeft = media.scrollLeft + mediaWidth - touchMoveDist;
  } else if (touchMoveDist < 0 && needMove(touchMoveDist)) {
    media.scrollLeft = media.scrollLeft - mediaWidth - touchMoveDist;
  } else {
    media.scrollLeft = mediaPresentPos;
  }
}

function touchStart(e) {
  mediaPresentPos = media.scrollLeft;
  touchStartX = e.changedTouches[0].clientX;
}

function touchEnd(e) {
  touchEndX = e.changedTouches[0].clientX;
  moveToNeighbor();
}

media.addEventListener('touchstart', touchStart);
media.addEventListener('touchend', touchEnd);


// Wisdom

const wisdom = document.querySelector('.wisdom');

function wisdomMoveToNeighbor() {
  const touchMoveDist = touchStartX - touchEndX;
  if (touchMoveDist > 0 && needMove(touchMoveDist)) {
    wisdom.scrollLeft = wisdom.scrollLeft + mediaWidth - touchMoveDist;
  } else if (touchMoveDist < 0 && needMove(touchMoveDist)) {
    wisdom.scrollLeft = wisdom.scrollLeft - mediaWidth - touchMoveDist;
  } else {
    wisdom.scrollLeft = mediaPresentPos;
  }
}

function wisdomTouchStart(e) {
  mediaPresentPos = media.scrollLeft;
  touchStartX = e.changedTouches[0].clientX;
}

function wisdomTouchEnd(e) {
  touchEndX = e.changedTouches[0].clientX;
  wisdomMoveToNeighbor();
}

wisdom.addEventListener('touchstart', wisdomTouchStart);
wisdom.addEventListener('touchend', wisdomTouchEnd);

// Entries

const entries = document.querySelector('.entries');

function entriesMoveToNeighbor() {
  const touchMoveDist = touchStartX - touchEndX;
  if (touchMoveDist > 0 && needMove(touchMoveDist)) {
    entries.scrollLeft = entries.scrollLeft + mediaWidth - touchMoveDist;
  } else if (touchMoveDist < 0 && needMove(touchMoveDist)) {
    entries.scrollLeft = entries.scrollLeft - mediaWidth - touchMoveDist;
  } else {
    entries.scrollLeft = mediaPresentPos;
  }
}

function entriesTouchStart(e) {
  mediaPresentPos = media.scrollLeft;
  touchStartX = e.changedTouches[0].clientX;
}

function entriesTouchEnd(e) {
  touchEndX = e.changedTouches[0].clientX;
  entriesMoveToNeighbor();
}

entries.addEventListener('touchstart', entriesTouchStart);
entries.addEventListener('touchend', entriesTouchEnd);
