console.clear();

// function toggleButton() {
//   const cards = document.querySelectorAll('[data-js=card]');
//   cards.forEach(card => {
//     const button = card.querySelector('[data-js="button"]');
//     const link = card.querySelector('[data-js="link"]');
//     const arrow = card.querySelector('[data-js="arrow"]');
//     button.addEventListener('click', () => {
//       link.classList.toggle('hidden');
//       arrow.classList.toggle('rotate');
//     });
//   });
// }

// toggleButton();

//--------------------------------------

// Quiz Card Bookmark Button Toggle

//--------------------------------------

const BookmarkOFF = "./resources/bookmark.png";
const BookmarkON = "./resources/bookmark_filled.png";
let isQuizBookmarkButtonClicked = false;
const quizCardBookmarkButton = document.querySelector(
  '[data-js="quiz_card-bookmark_button"]'
);
const quizCardBookmarkButtonImage = document.querySelector(
  '[data-js="quiz_card-bookmark_button-image"]'
);

quizCardBookmarkButton.addEventListener("click", () => {
  isQuizBookmarkButtonClicked = !isQuizBookmarkButtonClicked;
  if (isQuizBookmarkButtonClicked) {
    quizCardBookmarkButtonImage.setAttribute("src", BookmarkON);
  } else {
    quizCardBookmarkButtonImage.setAttribute("src", BookmarkOFF);
  }
});

//--------------------------------------

// Quiz Card Bookmark Button Toggle

//--------------------------------------

// // Solution 1# for JUST one button!

// let isQuizAnswerButtonClicked = false;
// const quizCardAnswerButton = document.querySelector(
//       '[data-js="quiz_card-answer_button"]'
//     );
// const quizCardAnswerText = document.querySelector(
//       '[data-js="quiz_card-answer_text"]'
//     );
// const quizCardToggleShowAnswer = document.querySelector(
//       '[data-js="quiz_card-answer_button-show_answer-text"]');

//     quizCardAnswerButton.addEventListener("click", () => {
//       isQuizAnswerButtonClicked = !isQuizAnswerButtonClicked;
//       if (isQuizAnswerButtonClicked) {
//         quizCardAnswerText.style.visibility = "hidden";
//         quizCardToggleShowAnswer.textContent = "Show Answer";
//         quizCardAnswerButton.style.background = "#66deb5";
//       } else {
//         quizCardAnswerText.style.visibility = "visible";
//         quizCardToggleShowAnswer.textContent = "Hide Answer";
//         quizCardAnswerButton.style.background = "aquamarine";
//       }
//     });
let isQuizAnswerButtonClicked = false;

function toggleAnswerButtons() {
  const allQuizCards = document.querySelectorAll('[data-js="quiz_card"]');
  console.log(allQuizCards);

  allQuizCards.forEach((quiz_card) => {
    const quizCardAnswerButton = quiz_card.querySelector(
      '[data-js="quiz_card-answer_button"]'
    );
    const quizCardAnswerText = quiz_card.querySelector(
      '[data-js="quiz_card-answer_text"]'
    );
    const quizCardToggleShowAnswer = quiz_card.querySelector(
      '[data-js="quiz_card-answer_button-show_answer-text"]'
    );

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
      //quizCardAnswerText.classList.toggle("hidden");
    });
  });
}

toggleAnswerButtons();
