console.clear();

// Deaclare variables

const BookmarkOFF = "./resources/bookmark.png";
const BookmarkON = "./resources/bookmark_filled.png";
let isQuizBookmarkButtonClicked = false;
let isQuizAnswerButtonClicked = false;

//--------------------------------------

// Bookmark Button variables
const quizCardBookmarkButton = document.querySelector(
  '[data-js="quiz_card-bookmark_button"]'
);
const quizCardBookmarkButtonImage = document.querySelector(
  '[data-js="quiz_card-bookmark_button-image"]'
);

//--------------------------------------

// Answer Button variables
const quizCardAnswerButton = document.querySelector(
  '[data-js="quiz_card-answer_button"]'
);
const quizCardAnswerText = document.querySelector(
  '[data-js="quiz_card-answer_text"]'
);
const quizCardToggleShowAnswer = document.querySelector(
  '[data-js="quiz_card-answer_button-show_answer-text"]'
);

//--------------------------------------

// Query Card Bookmark Button Toggle

quizCardBookmarkButton.addEventListener("click", () => {
  isQuizBookmarkButtonClicked = !isQuizBookmarkButtonClicked;
  if (isQuizBookmarkButtonClicked) {
    quizCardBookmarkButtonImage.setAttribute("src", BookmarkON);
  } else {
    quizCardBookmarkButtonImage.setAttribute("src", BookmarkOFF);
  }
  // Tried remove / append aproach = nope: too much coding, because elimeinates all html lines
  // isQueryBookmarkButtonClicked = true;
  // } else {
  // BookmarkOFF.append();
  //BookmarkON.remove();
  // }
});

// Query Card Answer Button

quizCardAnswerButton.addEventListener("click", () => {
  isQuizAnswerButtonClicked = !isQuizAnswerButtonClicked;
  if (isQuizAnswerButtonClicked) {
    quizCardAnswerText.style.visibility = "hidden";
    quizCardToggleShowAnswer.textContent = "Show Answer";
    quizCardAnswerButton.style.background = "#66deb5";
  } else {
    quizCardAnswerText.style.visibility = "visible";
    quizCardToggleShowAnswer.textContent = "Hide Answer";
    quizCardAnswerButton.style.background = "aquamarine";
  }
});
