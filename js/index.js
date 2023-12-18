console.clear();

const queryCardBookmarkButton = document.querySelector(
  '[data-js="quiz_card-bookmark_button"]'
);
const queryCardBookmarkButtonOff = document.querySelector(
  '[data-js="quiz_card-bookmark_button-image_white"]'
);
const queryCardBookmarkButtonOn = document.querySelector(
  '[data-js="quiz_card-bookmark_button-ative_image"]'
);

queryCardBookmarkButton.addEventListener("click", () => {
  // 1. Add the two operands and store the result in a variable. Log the variable's value to the console.
  sales = sales + operand2;
  logBookData();
});
