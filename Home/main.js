console.log('hello0');

const swiper = new Swiper('.swiper', {
    speed: 700,
    // Optional parameters
    loop: true,
    effect: 'coverflow',

    swiper: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-unique',
      prevEl: '.swiper-button-prev-unique',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });



  // call arrow buttons for the questions
  const arrowButton1 = document.querySelector('.arrow1');
  const arrowButton2 = document.querySelector('.arrow2');
  const arrowButton3 = document.querySelector('.arrow3');
  const arrowButton4 = document.querySelector('.arrow4');
  const arrowButton5 = document.querySelector('.arrow5');
  const arrowButton6 = document.querySelector('.arrow6');

  //call answers
  const answerSection1 = document.querySelector('.ans1');
  const answerSection2 = document.querySelector('.ans2');
  const answerSection3 = document.querySelector('.ans3');
  const answerSection4 = document.querySelector('.ans4');
  const answerSection5 = document.querySelector('.ans5');
  const answerSection6 = document.querySelector('.ans6');

  //call general answer query and general arrow input query
//   const answersGeneral = document.querySelector('.answer-part');
//   const arrowButtonGeneral = document.querySelector('.arrow-button');
//   console.log(answersGeneral);
//   console.log(arrowButtonGeneral);



  arrowButton1.addEventListener('click', ()=> {
    if(arrowButton1.checked){
        answerSection1.hidden = false;
    }else{
        answerSection1.hidden = true;
    }
  })

  arrowButton2.addEventListener('click', ()=> {
    if(arrowButton2.checked){
        answerSection2.hidden = false;
    }else{
        answerSection2.hidden = true;
    }
  })

  arrowButton3.addEventListener('click', ()=> {
    if(arrowButton3.checked){
        answerSection3.hidden = false;
    }else{
        answerSection3.hidden = true;
    }
  })

  arrowButton4.addEventListener('click', ()=> {
    if(arrowButton4.checked){
        answerSection4.hidden = false;
    }else{
        answerSection4.hidden = true;
    }
  })

  arrowButton5.addEventListener('click', ()=> {
    if(arrowButton5.checked){
        answerSection5.hidden = false;
    }else{
        answerSection5.hidden = true;
    }
  })

  arrowButton6.addEventListener('click', ()=> {
    if(arrowButton6.checked){
        answerSection6.hidden = false;
    }else{
        answerSection6.hidden = true;
    }
  })


//   answerSection1.hidden = false;
//   answerSection2.hidden = false;
//   answerSection3.hidden = false;
//   answerSection4.hidden = false;
//   answerSection5.hidden = false;
//   answerSection6.hidden = false;


//reviews swiper for the small screens function
function getCardsNumber() {
    let screenWidth = window.innerWidth;
    if(screenWidth <= 630){
        let cardsNumber = 1;
        console.log(cardsNumber);
        return cardsNumber;
    }else if (screenWidth <= 790) {
        let cardsNumber = 2;
        console.log(cardsNumber);
        return cardsNumber;
    }else {
        cardsNumber = 3;
        console.log(cardsNumber);
        return cardsNumber;
    }
}

//swiper of the reviews
let swiper2 = new Swiper('.swiper2', {
    slidesPerView: getCardsNumber(),
    spaceBetween: 6,
    speed: 500,
    // Optional parameters
    loop: true,
    // effect: 'coverflow',
    effect: 'coverflow',
    swiper: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-unique',
      prevEl: '.swiper-button-prev-unique',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

window.addEventListener('resize', () => {
    const getNewCardsNumber = getCardsNumber();
    swiper2.params.slidesPerView = getNewCardsNumber;
    swiper2.update();
});