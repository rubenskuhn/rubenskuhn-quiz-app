// Add new card

const submitNewButton = document.querySelector(
  '[data-js="quiz_card-submit_new"]'
);
const main = document.querySelector('[data-js="main"]');
const newForm = document.querySelector('[data-js="form-new_question-entry"]');

newForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const quizNewQuestion = e.target.question_entry.value;
  const quizNewAnswer = e.target.quiz_answer.value;
  const quizNewTags = e.target.quiz_tags.value;

  console.log(quizNewQuestion);

  const newCard = document.createElement("section");
  newCard.innerHTML = `
  <section class="quiz_card">
          <p class="quiz_card-number_text">1. Question:</p>
          <p class="quiz_card-question_text">${quizNewQuestion}</p>
  
          <div class="quiz_card-answer_container">
            
            <button class="quiz_card-answer_button" data-js="quiz_card-answer_button">
              <img
                src="./resources/question.png"
                alt="alt-answer"
                class="quiz_card-answer_button-image"
              />
              <p class="quiz_card-answer_button-show_answer-text" data-js="quiz_card-answer_button-show_answer-text">show answer</p>
            </button>
  
            <p class="quiz_card-answer_text" data-js="quiz_card-answer_text">${quizNewAnswer}
            </p>
          </div>
  
          <button class="quiz_card-bookmark_button" data-js="quiz_card-bookmark_button">
            <img
              src="./resources/bookmark.png"
              alt="alt-bookmark"
              class="quiz_card-bookmark_button-image" data-js="quiz_card-bookmark_button-image"
            />
          </button>
  
  
          <div class="tag--field">
            <a href="#html" class="tag-html"> #html</a>
            <a href="#flexbox" class="tag-flexbox"> #flexbox</a>
            <a href="#css" class="tag-flexbox"> #css</a>
          </div>
        </section>
  
      `;

  main.append(newCard);
});

// // Deaclare variables

// const BookmarkOFF = "./resources/bookmark.png";
// const BookmarkON = "./resources/bookmark_filled.png";
// let isQuizBookmarkButtonClicked = false;
// let isQuizAnswerButtonClicked = false;

// //--------------------------------------

// // Bookmark Button variables
// const quizCardBookmarkButton = document.querySelector(
//   '[data-js="quiz_card-bookmark_button"]'
// );
// const quizCardBookmarkButtonImage = document.querySelector(
//   '[data-js="quiz_card-bookmark_button-image"]'
// );

// //--------------------------------------

// // Answer Button variables
// const quizCardAnswerButton = document.querySelector(
//   '[data-js="quiz_card-answer_button"]'
// );
// const quizCardAnswerText = document.querySelector(
//   '[data-js="quiz_card-answer_text"]'
// );
// const quizCardToggleShowAnswer = document.querySelector(
//   '[data-js="quiz_card-answer_button-show_answer-text"]'
// );

// //--------------------------------------

// // Query Card Bookmark Button Toggle

// quizCardBookmarkButton.addEventListener("click", () => {
//   isQuizBookmarkButtonClicked = !isQuizBookmarkButtonClicked;
//   if (isQuizBookmarkButtonClicked) {
//     quizCardBookmarkButtonImage.setAttribute("src", BookmarkON);
//   } else {
//     quizCardBookmarkButtonImage.setAttribute("src", BookmarkOFF);
//   }
//   // Tried remove / append aproach = nope: too much coding, because elimeinates all html lines
//   // isQueryBookmarkButtonClicked = true;
//   // } else {
//   // BookmarkOFF.append();
//   //BookmarkON.remove();
//   // }
// });

// // Query Card Answer Button

// quizCardAnswerButton.addEventListener("click", () => {
//   isQuizAnswerButtonClicked = !isQuizAnswerButtonClicked;
//   if (isQuizAnswerButtonClicked) {
//     quizCardAnswerText.style.visibility = "hidden";
//     quizCardToggleShowAnswer.textContent = "Show Answer";
//     quizCardAnswerButton.style.background = "#66deb5";
//   } else {
//     quizCardAnswerText.style.visibility = "visible";
//     quizCardToggleShowAnswer.textContent = "Hide Answer";
//     quizCardAnswerButton.style.background = "aquamarine";
//   }
// });

// formQuestionTextEntry.addEventListener("input", (e) => {
//   const quizQuestionLength = e.target.quiz_question.value;

// e.preventDefault();
// const maxText = 100;
// const quizQuestionLength = e.target.quiz_question.lenght;
// let counter = maxText - quizQuestionLength;
// console.log(counter);
//formQuestionCounterDiplay.display.value;
//document.getElementById("form-question_counter-display").value =
//counter.value;
//if (counter <= 0) {
//target.quiz_question.style.color = "red";
//emain = parseInt(set - quizNewQuestionLength);
// document.getElementById('').innerHTML();

//if (remain <= 0) {
//document.getElementById('press-form-body').value = tval.substring(0, quizNewQuestionLength - Math.abs(remain)))
//});
