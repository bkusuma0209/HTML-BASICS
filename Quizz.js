const questions = [
  {
    question: "1.What does HTML stand for?",
    options: ["Hyper Trainer Marking Language", "Hyper Text Marketing Language",
        "Hyper Text Markup Language", "Hyper Text Making Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "2.Which HTML tag is used to create a hyperlink?",
    options: ["<img>", "<a>", "<link>", "<href>"],
    answer: "<a>"
  },
   {
    question: "3.Which tag is used to insert an image in HTML?",
    options: ["<img>","<image>","<photo>","<pic>"],
    answer: "<img>"
  },
  {
    question :  "4.What is the correct HTML element for the largest heading?",
    options: ["<Heading>","<h6>","<Head>","<h1>"],
    answer: "<h1>"
  },
  {
    question :  "5.Which tag is used for a line break?",
    options: ["<break>","<br>","<lb>","<b>"],
    answer: "<br>"
  },

   {
    question :  "6.Which property changes the text color?",
    options: ["font-color","text-color","color","background-color"],
    answer: "color"
  },
  {
    question: "7.Which unit is relative to the font-size of the element?",
    options: ["px","em","%","cm"],
    answer:"em"
  },

    {
    question: "8.How do you select an element with id box ?",
    options: ["#box",".box","box","*box"],
    answer:"#box"
  },

    {
    question: "9. Which property is used to make text italic?",
    options: ["text-style","font-style","style-font","italic"],
    answer: "em"
  },

   {
  question: "10. How do you write 'Hello World' in an alert box?",
  options: ["msg('Hello World')", "alert('Hello World')", "prompt('Hello World')", "console('Hello World')"],
  answer: "alert('Hello World')"
},
{
  question: "11. Which symbol is used for single-line comments in JavaScript?",
  options: ["//", "/*", "#", "<!--"],
  answer: "//"
},
{
  question: "12. What is the output of typeof '123'?",
  options: ["number", "string", "undefined", "object"],
  answer: "string"
},
{
  question: "13. Which keyword is used to declare a variable in JavaScript?",
  options: ["var", "let", "const", "All of the above"],
  answer: "All of the above"
},
{
  question: "14. What does the addEventListener() method do?",
  options: ["Adds a class", "Listens to HTML", "Attaches an event handler", "Stops default event"],
  answer: "Attaches an event handler"
},

{
  question: "6. Which method is used to convert JSON data into a JavaScript object?",
  options: ["JSON.stringify()", "JSON.parse()", "parse.JSON()", "convert.JSON()"],
  answer: "JSON.parse()"
},


]

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 150;

function startTimer() {
  document.getElementById('timer').textContent = `Time: ${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').textContent = `Time: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      showResults();
    }
  }, 1000);
}

function loadQuestion() {
  document.getElementById('result').textContent = '';
  document.getElementById('nextBtn').style.display = 'none';
  if (currentQuestionIndex >= questions.length) {
    showResults();
    return;
  }
  const q = questions[currentQuestionIndex];
  document.getElementById('question').textContent = q.question;
  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = '';
  q.options.forEach(opt => {
    const li = document.createElement('li');
    li.textContent = opt;
    li.onclick = () => selectOption(opt);
    optionsContainer.appendChild(li);
  });
}

function selectOption(selectedOption) {
  const q = questions[currentQuestionIndex];
  if (selectedOption === q.answer) {
    score++;
    document.getElementById('result').textContent = 'Correct!';
  } else {
    document.getElementById('result').textContent = 'Incorrect!';
  }
  document.getElementById('nextBtn').style.display = 'inline-block';
}

function nextQuestion() {
  currentQuestionIndex++;
  loadQuestion();
}

function showResults() {
  clearInterval(timer);
  document.getElementById('question').textContent = 'Quiz Completed!';
  document.getElementById('options').innerHTML = '';
  document.getElementById('result').textContent = `Your score: ${score} / ${questions.length};
  saveToLeaderboard(score)`;
}

function saveToLeaderboard(score) {
  const name = prompt("Enter your name for the leaderboard:", "Kusuma");
  const leaderboardBody = document.getElementById('leaderboardBody');
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  nameCell.textContent = name;
  const scoreCell = document.createElement('td');
  scoreCell.textContent = score;
  row.appendChild(nameCell);
  row.appendChild(scoreCell);
  leaderboardBody.appendChild(row);
}


window.onload = () => {
  loadQuestion();
  startTimer();
};