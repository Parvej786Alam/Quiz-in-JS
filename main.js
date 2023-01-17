const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click',() => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}


function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild){
        answerButtonElement.removeChild
        (answerButtonElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
      if (shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}
 
function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions = [
    {
      question: 'what is 2 + 2?',
      answers: [
        { text: '4', correct: true},
        { text: '22', correct: false}
      ]
    },
    {
        question: 'Who is the best YouTuber?',
        answers: [
                { text: 'Web Dev Smplified', correct: false},
                { text: 'Pew Die Pie', correct: true},
                { text: 'Dev Ed', correct: false},
                { text: 'Fun Fun Fuction', correct: false},
            ]
        },
        {
            question: 'Is Web development fun?',
            answers: [
                    { text: 'Kinda', correct: false},
                    { text: 'Yes!!!', correct: false},
                    { text: 'creative experience', correct: true},
                    { text: 'Idk', correct: false},
                ]
            },
            {
                question: 'What is 4 * 2?',
                answers: [
                        { text: '6', correct: false},
                        { text: '8', correct: true},
                        { text: '12', correct: false},
                        { text: '14', correct: false},
                    ]
                },
                {
                    question: 'Who is CM in Delhi?',
                    answers: [
                            { text: 'Rajnath Sing', correct: false},
                            { text: 'Arvind Kejreval', correct: true},
                            { text: 'Sunil Khattar', correct: false},
                            { text: 'Dihman Shah', correct: false},
                        ]
                    },
             ]
         
     
