
        // Function to generate a random addition problem
        function generateProblem() {
            const num1 = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
            const num2 = Math.floor(Math.random() * 10) + 1;
            return `${num1} + ${num2}`;
        }

        // Function to check the user's answer
        function checkAnswer() {
            const problemElement = document.getElementById("problem");
            const answerElement = document.getElementById("answer");
            const resultElement = document.getElementById("result");

            const problem = problemElement.textContent;
            const userAnswer = parseInt(answerElement.value, 10); // Convert input to an integer

            const [num1, num2] = problem.split("+").map(str => parseInt(str, 10));
            const correctAnswer = num1 + num2;

            if (userAnswer === correctAnswer) {
                resultElement.textContent = "Correct!";
            } else {
                resultElement.textContent = "Incorrect. Try again.";
            }

            // Generate a new problem
            problemElement.textContent = generateProblem();
            answerElement.value = "";
        }

        // Initialize the game
        document.getElementById("problem").textContent = generateProblem();
    