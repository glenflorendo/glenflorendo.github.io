const socialContainer = document.getElementById('social-container');
const introContents = document
  .getElementById('intro')
  .getElementsByClassName('content')[0];
const introContentsCoords = introContents.getBoundingClientRect();

document.addEventListener('scroll', function() {
  const scrollTop = window.scrollY;
  const introContentsBottom =
    introContentsCoords.y + introContentsCoords.height;
  console.log(scrollTop, introContentsCoords.y, introContentsCoords.height);

  socialContainer.style.display =
    scrollTop > introContentsBottom ? 'block' : 'none';
});
