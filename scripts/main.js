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

const employerBtns = document.querySelectorAll('button.employer-tab');
employerBtns.forEach(btn =>
  btn.addEventListener('click', function(event) {
    const employer = event.target.id;
    const allJobs = document.querySelectorAll(`div.job-description`);
    allJobs.forEach(job => job.classList.add('hidden'));

    // TODO: Mark all tabs as inactive
    // TODO: Mark toggled tab as active

    const toggledJobs = document.querySelectorAll(
      `div.job-description.${employer}`
    );
    toggledJobs.forEach(job => job.classList.remove('hidden'));
  })
);
