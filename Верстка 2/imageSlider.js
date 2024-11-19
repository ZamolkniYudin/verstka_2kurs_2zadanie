const mainImg = document.querySelector('.sliderMainImage');
const thumb = document.querySelectorAll('.sliderThumb');
const modalImg = document.querySelector('.modalImage');

for(let i = 0; i < thumb.length; i++) {
  thumb[i].addEventListener('click', () => {
    mainImg.src = thumb[i].src;
    mainImg.classList.add('sliderFade');
    setTimeout(() => {
      mainImg.classList.remove('sliderFade');
    }, 600);
  });
}

mainImg.addEventListener('click', e => {
  modalImg.src = e.target.src;
})

//Get all input fields
const inputs = document.querySelectorAll('.input-wrap input');

//Add focus event to all inputs
inputs.forEach(input => {
  input.addEventListener('focus', () => {
    //Remove claymorphism effect
    input.parentElement.style.boxShadow = "none";
  });
  //Add blur event to all inputs
  input.addEventListener('blur', () => {
    //Add claymorphism effect
    input.parentElement.style.boxShadow = `
      inset -0.3em -0.3em 0.6em #bfd1ff,
      inset 0.2em 0.2em 0.3em #eff3ff,
      0.3em 0.3em 1em rgba(131, 154, 215, 0.8)
    `;
  });
});

