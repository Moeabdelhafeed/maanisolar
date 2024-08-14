let isDragging = false;
let startX, startY, scrollLeft, scrollTop;

const container = document.querySelector('.overflow-auto');

container.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - container.offsetLeft;
  startY = e.pageY - container.offsetTop;
  scrollLeft = container.scrollLeft;
  scrollTop = container.scrollTop;
  container.style.cursor = 'grabbing'; // Change cursor on drag
});

container.addEventListener('mouseleave', () => {
  isDragging = false;
  container.style.cursor = 'default'; // Revert cursor on mouse leave
});

container.addEventListener('mouseup', () => {
  isDragging = false;
  container.style.cursor = 'default'; // Revert cursor on mouse up
});

container.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();

  if (window.innerWidth < 576) {
    // For small screens, enable vertical scrolling
    const y = e.pageY - container.offsetTop;
    const walkY = (y - startY) * 1; // Adjust scroll speed if needed
    container.scrollTop = scrollTop - walkY;
  } else {
    // For larger screens, enable horizontal scrolling
    const x = e.pageX - container.offsetLeft;
    const walkX = (x - startX) * 1; // Adjust scroll speed if needed
    container.scrollLeft = scrollLeft - walkX;
  }
});
