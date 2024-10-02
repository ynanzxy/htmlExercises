用常见的网页开发技术（HTML、CSS、JavaScript）来创建一个包含选择题和填空题的简单网站的步骤：

**一、HTML 结构**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>选择题和填空题网站</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <h1>选择题和填空题测试</h1>
    <div id="question-container">
        <!-- 问题将在这里显示 -->
    </div>
    <button id="submit-btn">提交答案</button>
    <div id="result-container">
        <!-- 结果将在这里显示 -->
    </div>
    <script src="script.js"></script>
</body>

</html>
```

**二、CSS 样式（styles.css）**

可以为页面添加一些基本的样式，让它看起来更美观。

```css
body {
    font-family: Arial, sans-serif;
    padding: 20px;
}

h1 {
    text-align: center;
}

#question-container {
    margin-bottom: 20px;
}

#result-container {
    font-weight: bold;
    color: green;
}
```

**三、JavaScript 逻辑（script.js）**

定义问题和答案：

```javascript
const questions = [
    {
        type: 'multiple-choice',
        question: '世界上面积最大的国家是？',
        choices: ['中国', '美国', '俄罗斯', '加拿大'],
        answer: '俄罗斯'
    },
    {
        type: 'fill-in-the-blank',
        question: '苹果是一种常见的____。',
        answer: '水果'
    }
];
```

显示问题：

```javascript
function displayQuestions() {
    const questionContainer = document.getElementById('question-container');
    questions.forEach((question, index) => {
        let questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML += `<p>${index + 1}. ${question.question}</p>`;
        //添加图片    
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
```

检查答案并显示结果：

```javascript
function checkAnswers() {
    let correctCount = 0;
    questions.forEach((question, index) => {
        const userAnswer = question.type === 'multiple-choice'? document.querySelector(`input[name="question${index}"]:checked`)?.value : document.getElementById(`answer${index}`)?.value;
        if (userAnswer === question.answer) {
            correctCount++;
        }
    });
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `你答对了 ${correctCount} 道题。`;
}

document.getElementById('submit-btn').addEventListener('click', checkAnswers);

displayQuestions();
```

这个简单的网站可以显示选择题和填空题，用户回答后点击提交按钮可以显示答题结果。当然，这只是一个基础的示例，可以根据实际需求进行更多的扩展和优化。

