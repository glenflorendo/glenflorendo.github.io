const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', event => {
  console.log(event);
  menu.classList.toggle('hidden');
});

const stickySocials = document.getElementById('sticky-socials');
const introSocials = document.getElementById('intro-socials');
const introSocialsCoords = introSocials.getBoundingClientRect();

const checkStickySocials = () => {
  const scrollY = window.scrollY;
  const introSocialsBtm = introSocialsCoords.y + introSocialsCoords.height;
  const windowWidth = window.innerWidth;

  const introSocialsInView = scrollY < introSocialsBtm;
  const validWindowSize = windowWidth > 768;

  console.log(!introSocialsInView, validWindowSize, windowWidth);

  stickySocials.style.display =
    !introSocialsInView && validWindowSize ? 'flex' : 'none';
};

window.addEventListener('load', checkStickySocials);
document.addEventListener('scroll', checkStickySocials);
window.addEventListener('resize', checkStickySocials);

const employerTabs = [...document.querySelectorAll('.tab button')];
const openEmployer = event => {
  const contents = [...document.getElementsByClassName('tab-content')];
  const clickedEmployer = event.target;
  console.log(`div.tab-content.${event.target.id}`);
  const job = document.querySelector(`div.tab-content.${event.target.id}`);

  contents.forEach(c => (c.style.display = 'none'));
  job.style.display = 'block';

  console.log(clickedEmployer);
  console.log(job);
};

employerTabs.forEach(t => t.addEventListener('click', openEmployer));
employerTabs[0].click();
