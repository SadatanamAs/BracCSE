# 📄 Description of the Java Quiz Application

This Java program is a simple interactive console-based multiple-choice quiz that:

1. Asks the user 10 multiple-choice questions.
2. Validates each input to ensure it’s between 0 and 4 (inclusive).
3. Allows the user to enter `0` to skip a question.
4. Stores all answers in an `ArrayList<Integer>`.
5. Compares the user's answers with a predefined array of correct answers.
6. Calculates and displays the total score.

---

## 🔧 Key Features

- Input validation with re-prompting on invalid entries.
- Modular methods for question printing and input handling.
- Final score output based on correct responses.
- Uses recursion for re-validating invalid inputs.
- Allows skipped questions by entering `0`.

---

## 📌 Notes

- The quiz does not currently display which answers were incorrect or skipped.
- The input is read using a single shared `Scanner` instance.
