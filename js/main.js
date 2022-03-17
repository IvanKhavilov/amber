const tabBtn = document.querySelectorAll(".list__item");
const title = document.querySelectorAll(".title__main");

tabBtn.forEach(function (elem) {
  elem.addEventListener("click", activeTab);
});

function activeTab() {
  tabBtn.forEach(function (elem) {
    elem.classList.remove("list__item--active");
  });
  this.classList.add("list__item--active");
  let tabName = this.getAttribute("data-btn");
  activeTitle(tabName);
}

function activeTitle(tabName) {
  title.forEach(function (item) {
    if (item.classList.contains(tabName)) {
      item.classList.add("title--active");
    } else {
      item.classList.remove("title--active");
    }
  });
}

const btnNextSentence = document.getElementById("sentence__next");
const btnPrevSentence = document.getElementById("sentence__prev");
const btnNextFeedback = document.getElementById("feedback__next");
const btnPrevFeedback = document.getElementById("feedback__prev");
const sentenceSlides = document.querySelectorAll(".sentence__slider-item");
const feedbackSlides = document.querySelectorAll(".feedback__item");
const sentenceDots = document.querySelectorAll(".sentence__dots");
const feedbackDots = document.querySelectorAll(".feedback__dots");

let index = 0;

const activeSentenceSlide = n => {
  for (slide of sentenceSlides) {
    slide.classList.remove("active");
  }
  sentenceSlides[n].classList.add("active");
};

const activeSentenceDot = n => {
  for (dot of sentenceDots) {
    dot.classList.remove("active");
  }
  sentenceDots[n].classList.add("active");
};

const prepareCurrentSentenceSlide = ind => {
  activeSentenceSlide(index);
  activeSentenceDot(index);
};
const prepareCurrentFeedbackSlide = ind => {
  activeFeedbackSlide(index);
  activeFeedbackDot(index);
};

const nextSentenceSlide = () => {
  if (index == sentenceSlides.length - 1) {
    index = 0;
    prepareCurrentSentenceSlide();
  } else {
    index++;
    prepareCurrentSentenceSlide();
  }
};

const prevSentenceSlide = () => {
  if (index == 0) {
    index = sentenceSlides.length - 1;
    prepareCurrentSentenceSlide();
  } else {
    index--;
    prepareCurrentSentenceSlide();
  }
};

const activeFeedbackSlide = n => {
  for (item of feedbackSlides) {
    item.classList.remove("active");
  }
  feedbackSlides[n].classList.add("active");
};

const activeFeedbackDot = n => {
  for (dot of feedbackDots) {
    dot.classList.remove("active");
  }
  feedbackDots[n].classList.add("active");
};

const nextFeedbackSlide = () => {
  if (index == feedbackSlides.length - 1) {
    index = 0;
    prepareCurrentFeedbackSlide();
  } else {
    index++;
    prepareCurrentFeedbackSlide();
  }
};

const prevFeedbackSlide = () => {
  if (index == 0) {
    index = feedbackSlides.length - 1;
    prepareCurrentFeedbackSlide();
  } else {
    index--;
    prepareCurrentFeedbackSlide();
  }
};

btnNextSentence.addEventListener("click", nextSentenceSlide);
btnPrevSentence.addEventListener("click", prevSentenceSlide);
btnNextFeedback.addEventListener("click", nextFeedbackSlide);
btnPrevFeedback.addEventListener("click", prevFeedbackSlide);
