const left = document.getElementById('btn-left'),
      right = document.getElementById('btn-right'),
      slides = document.querySelectorAll('.slide');

const btnImg = document.getElementsByClassName('img-small');
const flexWrapper = document.querySelector('.flex-wrapper');
const popap = document.getElementById('popap-grey');
const mainImg = document.getElementById('main-img');
const closeDiv = document.getElementById('close-div');
let index = 0;

const activeSlide = n => {
  mainImg.src=btnImg[n].src;
  console.log(n);
}

const leftSlide = () => {
  if (index == 0) {
    index=btnImg.length - 1;
    activeSlide(index);
  } else {
    index--;
    activeSlide(index);
  }
}

const rightSlide = () => {
  if (index == btnImg.length - 1) {
    index = 0;
    activeSlide(index);
    console.log(index);
  } else {
    index++;
    activeSlide(index);
  }
}

left.addEventListener('click', leftSlide);
right.addEventListener('click', rightSlide);
popap.addEventListener('click', makeModal);
closeDiv.addEventListener('click', makeModal);


function makeModal() {
  flexWrapper.classList.toggle('close');
  popap.classList.toggle('close');
  closeDiv.classList.toggle('close');
}



for (let i=0; i<btnImg.length; i++) {
  btnImg[i].addEventListener('click', () => {
    console.log(btnImg[i]);
    mainImg.src=btnImg[i].src;
    makeModal();
  });
}

const images = document.querySelectorAll('.img-small');





