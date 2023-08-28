$(document).ready(function () {
    const questArray = [
        {
            "question": "1.What is the capital of France?",
            "options": ["Paris", "Madrid", "Berlin", "Rome"],
            "answer": "Paris"
        },
        {
            "question": "2.Which planet is known as the Red Planet?",
            "options": ["Venus", "Mars", "Jupiter", "Saturn"],
            "answer": "Mars"
        },
        {
            "question": "3.What is the largest mammal?",
            "options": ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
            "answer": "Blue Whale"
        },
        {
            "question": "4.How many days are there in a week?",
            "options": ["7", "6", "5", "2"],
            "answer": "7"
        },
        {
            "question": "5.Rainbow consist of how many colours?",
            "options": ["7", "9", "15", "2"],
            "answer": "7"
        },
        {
            "question": "6.How many minutes are there in an hour?",
            "options": ["60", "10", "35", "59"],
            "answer": "60"
        },
        {
            "question": "7.How many vowels are there in the English alphabet and name them?",
            "options": ["5 vowels", "2 vowels", "3 vowels", "0 vowels"],
            "answer": "5 vowels"
        },
        {
            "question": "8.How many seconds make one hour?",
            "options": ["3600 seconds", "1500 seconds", "3601 seconds", "1100 seconds"],
            "answer": "3600 seconds"
        },
        {
            "question": "9.Which one is the smallest ocean in the World?",
            "options": ["Indian", "Pacific", "Atlantic", "Arctic"],
            "answer": "Arctic"
        },
        {
            "question": "10.Which one is the biggest island in the World?",
            "options": ["Borneo", "Finland", "Sumatra", "Greenland"],
            "answer": "Greenland"
        }
    ]

    const answerEls = $('.answer');  
    const question = $('#question');

    const option1 = $('#option1');
    const option2 = $('#option2');
    const option3 = $('#option3');
    const option4 = $('#option4');

    let current_Quiz = 0;

    let score = $('#score');
    score = 0;

    loadQuiz();

    function loadQuiz() {
        resetAnswer();

        var current_QuizData = questArray[current_Quiz];

        question.html(current_QuizData.question);
        option1.html(current_QuizData.options[0]);
        option2.html(current_QuizData.options[1]);
        option3.html(current_QuizData.options[2]);
        option4.html(current_QuizData.options[3]);

        option1.parent().children('input').val(current_QuizData.options[0]);
        option2.parent().children('input').val(current_QuizData.options[1]);
        option3.parent().children('input').val(current_QuizData.options[2]);
        option4.parent().children('input').val(current_QuizData.options[3]);
    }

    function resetAnswer() {
        for (let i = 0; i < answerEls.length; i++) {
            if (answerEls[i].checked) {
                return answerEls[i].checked = false;
            }
        }
    }

    $(document).on('click', '#submit', function () {
        let correctAns = questArray[current_Quiz].answer;

        let checked = $('input[type="radio"]:checked').val();

        if (!checked) {
            swal('Please Select any answer!...','', 'error');
        }
        else {
            current_Quiz++;
            if (checked === correctAns) {
                score++;
                $('#score').html(`<h2>Score: ` + score + `</h2>`);
            }

            if (current_Quiz < questArray.length) {
                loadQuiz();
            }

            else {
                if (score == 10) {
                    swal("Congratulations!", `You answered ${score}/ ${questArray.length}`, "success");
                }
                else if (score == 0) {
                    swal("Failed!", `You answered ${score}/ ${questArray.length}`, "warning");
                }
                else {
                    swal("Average!", `You answered ${score}/ ${questArray.length}`, "info");
                }
            }
        }
        if (current_Quiz == questArray.length) {
            setInterval(function () {
                window.location.reload();
            }, 2500);
        }

    });

});