const quiz = [
  {
    question: "ゲーム史上最も売れたゲーム機はなに？",
    answers: ["スーパーファミコン", "PS2", "スイッチ", "DS"],
    correct: "DS"
  },
  {
    question: "任天堂の看板ゲームは？",
    answers: ["モンハン", "マリオ", "カービィ", "ドンキー"],
    correct: "マリオ"
  },
  {
    question: "ファイファンの主人公は？",
    answers: ["ダリル", "ディーダ", "スイッチ", "鬼"],
    correct: "ディーダ"
  }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
// const question = "ゲーム史上最も売れたゲーム機はなに";
// const answers = ["スーパーファミコン", "PS2", "スイッチ", "DS"];
// const correct = "DS";
const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;
//クイズの問題文と選択肢を定義

const setupQuiz = () => {
  const questionTag = document.getElementById("js-question");
  questionTag.textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();
const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    alert("正解");
    score++;
  } else {
    alert("不正解");
  }
  quizIndex++;
  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    alert(`終了！！　あなたの正解数は、${score} / ${quizLength} ですよ！！`);
  }
};
//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
