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

const mediaWidth = media.clientWidth;
const mediaHalfWidth = 20;
let mediaPresentPos = 0;
let wisdomPresentPos = 0;
let entriesPresentPos = 0;
let mediaTouchStartX;
let mediaTouchEndX;
let wisdomTouchStartX;
let wisdomTouchEndX;
let entriesTouchStartX;
let entriesTouchEndX;

function needMove(dist) {
  if (Math.abs(dist) > mediaHalfWidth) {
    return true;
  }
  return false;
}

function moveToNeighbor() {
  const touchMoveDist = mediaTouchStartX - mediaTouchEndX;
  if (touchMoveDist > 0 && needMove(touchMoveDist)) {
    media.scrollLeft = media.scrollLeft + mediaWidth - touchMoveDist+12;
  } else if (touchMoveDist < 0 && needMove(touchMoveDist)) {
    media.scrollLeft = media.scrollLeft - mediaWidth - touchMoveDist-15;
  } else {
    media.scrollLeft = mediaPresentPos;
  }
}

function touchStart(e) {
  mediaPresentPos = media.scrollLeft;
  mediaTouchStartX = e.changedTouches[0].clientX;
}

function touchEnd(e) {
  mediaTouchEndX = e.changedTouches[0].clientX;
  moveToNeighbor();
}

media.addEventListener('touchstart', touchStart);
media.addEventListener('touchend', touchEnd);


// Wisdom

const wisdom = document.querySelector('.wisdom');
const wisdomWidth = wisdom.clientWidth;

function wisdomMoveToNeighbor() {
  const touchMoveDist = wisdomTouchStartX - wisdomTouchEndX;
  if (touchMoveDist > 0 && needMove(touchMoveDist)) {
    wisdom.scrollLeft = wisdom.scrollLeft + wisdomWidth - touchMoveDist+12;
  } else if (touchMoveDist < 0 && needMove(touchMoveDist)) {
    wisdom.scrollLeft = wisdom.scrollLeft - wisdomWidth - touchMoveDist-15;
  } else {
    wisdom.scrollLeft = wisdomPresentPos;
  }
}

function wisdomTouchStart(e) {
  wisdomPresentPos = wisdom.scrollLeft;
  wisdomTouchStartX = e.changedTouches[0].clientX;
}

function wisdomTouchEnd(e) {
  wisdomTouchEndX = e.changedTouches[0].clientX;
  wisdomMoveToNeighbor();
}

wisdom.addEventListener('touchstart', wisdomTouchStart);
wisdom.addEventListener('touchend', wisdomTouchEnd);

// Entries

const entries = document.querySelector('.entries');
const entriesWidth = entries.clientWidth;

function entriesMoveToNeighbor() {
  const touchMoveDist = entriesTouchStartX - entriesTouchEndX;
  if (touchMoveDist > 0 && needMove(touchMoveDist)) {
    entries.scrollLeft = entries.scrollLeft + entriesWidth - touchMoveDist+12;
  } else if (touchMoveDist < 0 && needMove(touchMoveDist)) {
    entries.scrollLeft = entries.scrollLeft - entriesWidth - touchMoveDist-15;
  } else {
    entries.scrollLeft = entriesPresentPos;
  }
}

function entriesTouchStart(e) {
  entriesPresentPos = entries.scrollLeft;
  entriesTouchStartX = e.changedTouches[0].clientX;
}

function entriesTouchEnd(e) {
  entriesTouchEndX = e.changedTouches[0].clientX;
  entriesMoveToNeighbor();
}

entries.addEventListener('touchstart', entriesTouchStart);
entries.addEventListener('touchend', entriesTouchEnd);
