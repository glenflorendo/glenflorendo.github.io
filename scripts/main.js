const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
menuBtn.addEventListener('click', event => {
  console.log(event);
  menu.classList.toggle('hidden');
});

// const socialContainer = document.getElementById('social-container');
// const introContents = document
//   .getElementById('intro')
//   .getElementsByClassName('content')[0];
// const introContentsCoords = introContents.getBoundingClientRect();

// document.addEventListener('scroll', function() {
//   const scrollTop = window.scrollY;
//   const introContentsBottom =
//     introContentsCoords.y + introContentsCoords.height;
//   console.log(scrollTop, introContentsCoords.y, introContentsCoords.height);

//   socialContainer.style.display =
//     scrollTop > introContentsBottom ? 'block' : 'none';
// });

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
