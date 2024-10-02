const questions = [
    {
        type: 'multiple-choice',
        question: '世界上面积最大的国家是？',
        choices: ['中国', '美国', '俄罗斯', '加拿大'],
        answer: '俄罗斯',
        image: '1.png'
    },
    {
        type: 'fill-in-the-blank',
        question: '苹果是一种常见的____。',
        answer: '水果',
        image: '1.jpg'
    }
];

function displayQuestions() {
    const questionContainer = document.getElementById('question-container');
    questions.forEach((question, index) => {
        let questionElement = document.createElement('div');
        questionElement.classList.add('question');


        questionElement.innerHTML += `<p>${index + 1}. ${question.question}</p>`;

        if (question.image) {
            const img = document.createElement('img');
            img.src = question.image; // 确保路径正确
            img.alt = 'Question Image';
            questionElement.appendChild(img);
        }

        if (question.type === 'multiple-choice') {
            question.choices.forEach(choice => {
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = `question${index}`;
                radio.value = choice;
                const label = document.createElement('label');
                label.classList.add('radio-label');
                label.appendChild(radio);
                label.appendChild(document.createTextNode(` ${choice}`));
                questionElement.appendChild(label);
            });
        } else if (question.type === 'fill-in-the-blank') {
            questionElement.innerHTML += `<input type="text" id="answer${index}"><br>`;
        }

        questionContainer.appendChild(questionElement);
    });
}

function checkAnswers() {
    let correctCount = 0;
    questions.forEach((question, index) => {
        const userAnswer = question.type === 'multiple-choice' ? document.querySelector(`input[name="question${index}"]:checked`)?.value : document.getElementById(`answer${index}`)?.value;
        if (userAnswer === question.answer) {
            correctCount++;
        }
    });
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `你答对了 ${correctCount} 道题。`;
}


document.getElementById('submit-btn').addEventListener('click', checkAnswers);

displayQuestions();
