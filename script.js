const signInBtnLink = document.querySelector('.signInBtnLink');
const signUpBtnLink = document.querySelector('.signUpBtnLink');
const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'MVS/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });