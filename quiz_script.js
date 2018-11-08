let preQuestions =
    [
        {
            "category": "Brands",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which of these brands have never produced agricultural equipment?",
            "correct_answer": "Nissan",
            "answers": ["Renault", "Mercedes-Benz", "Fiat", "Nissan"]
        },
        {
            "category": "Vehicles",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which Japanese company is the world&#039;s largest manufacturer of motorcycles?",
            "correct_answer": "Honda",
            "answers": ["Yamaha", "Suzuki", "Kawasaki", "Honda"]
        },
        {
            "category": "People",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Called 'The best ever driver who have never won champion title'. Who is he?",
            "correct_answer": "Stirling Moss",
            "answers": ["Ayrton Senna", "Niki Lauda", "Stirling Moss", "Robert Kubica"]
        },
        {
            "category": "Technic",
            "type": "multiple",
            "difficulty": "hard",
            "question": "Which type of fuel has the best power efficiency?",
            "correct_answer": "Diesel",
            "answers": ["Petrol", "Diesel", "Autogas", "Vegetable oil"]
        },
        {
            "category": "Cars",
            "type": "boolean",
            "difficulty": "medium",
            "question": "There is an AWD version of Dodge Challenger",
            "correct_answer": "True",
            "answers": ["True", "False"]
        },
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "medium",
            "question": "The first ever F1 season took place in:",
            "correct_answer": "1950",
            "answers": ["1950", "1960", "1970", "1980"]
        },
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "easy",
            "question": "'Green hell' is a nickname of which famous race track?",
            "correct_answer": "Nurburgring (Nordschleife)",
            "answers": ["Autodromo Nazionale Monza", "Nurburgring (Nordschleife)", "Silverstone Circuit", "Spa Francorchamps"]
        },
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What was the last rear-wheel-drive car to win Rally World Championship?",
            "correct_answer": "Lancia 037",
            "answers": ["Lancia 037", "Porshe 911 (930)", "Lancia Stratos", "Ford Escort RS2000 (MkII)"]
        },
        {
            "category": "People",
            "type": "multiple",
            "difficulty": "medium",
            "question": "'Flying Finn' known also for his signature 360* car spin is:",
            "correct_answer": "Rauno Aaltonen",
            "answers": ["Mikko Hirvonen", "Tommi Makkinen", "Walter Rohl", "Rauno Aaltonen"]
        },
        {
            "category": "",
            "type": "boolean",
            "difficulty": "medium",
            "question": "Dozens of years ago, drivers did NOT fasten their seat belts because of safety",
            "correct_answer": "True",
            "answers": ["True", "False"]
        },
        {
            "category": "Cars",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Which car produces the most power from 1 litre of engine capacity?",
            "correct_answer": "Mazda RX-7",
            "answers": ["Mazda RX-7", "Honda S2000", "Ferrari 458 Italia", "Bugatti Chiron"]
        },
        {
            "category": "Technic",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Which term DOESN'T mean variable-valve-timing system?",
            "correct_answer": "CVT",
            "answers": ["VTEC", "VVT-i", "VTi", "CVT"]
        },
        {
            "category": "Tracks",
            "type": "boolean",
            "difficulty": "medium",
            "question": "NASCAR races are only set on oval tracks",
            "correct_answer": "False",
            "answers": ["False", "True"]
        },
        {
            "category": "people",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Who has the most 'World Champion' titles?",
            "correct_answer": "Sebastian Loeb",
            "answers": ["Michael Schumacher", "Valentino Rossi", "Sebastian Loeb", "Lewis Hamilton"]
        },
        {
            "category": "Cars",
            "type": "multiple",
            "difficulty": "medium",
            "question": "The only N/A (naturally aspirated) car below is:",
            "correct_answer": "Nissan 240SX (s13)",
            "answers": ["Daichatsu Charade GTi", "Volvo 850 T-5R", "Nissan 240SX (s13)", "Subaru Impreza WRX"]
        },
        {
            "category": "Brands",
            "type": "boolean",
            "difficulty": "hard",
            "question": "There was a period in history, when Porsche cooperated with Lada",
            "correct_answer": "True",
            "answers": ["True", "False"]
        },
        {
            "category": "Brands",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which brand is NOT a 'PSA Group' member?",
            "correct_answer": "Renault",
            "answers": ["Renault", "Citroen", "Peuget", "Opel"]
        },
        {
            "category": "People",
            "type": "multiple",
            "difficulty": "hard",
            "question": "The only man to win both F1 and Moto GP titles was:",
            "correct_answer": "John Surtees",
            "answers": ["Alain Prost", "John Surtees", "Jackie Stewart", "Marc Marquez"]
        },
        {
            "category": "Cars",
            "type": "multiple",
            "difficulty": "hard",
            "question": "Which of these cars has the highest top speed?",
            "correct_answer": "Lotus Carlton",
            "answers": [
                "Lotus Carlton",
                "Audi RS6 (B7)",
                "Ferrari 512BB",
                "Chevrolet Corvette C5"
            ]
        },
        {
            "category": "cars",
            "type": "multiple",
            "difficulty": "hard",
            "question": "Ferrari Dino was named after Enzo Ferrari's:",
            "correct_answer": "Son",
            "answers": [
                "Father",
                "Son",
                "Brother",
                "Dog"
            ]
        }];



let next = document.querySelector('.next');
let back = document.querySelector('.back_q');
let back_to_start = document.querySelector('.back');


let question = document.querySelector('.question');
let answers = document.querySelectorAll('.list-group-item');
let index = 0;
let last_question=0;

let score=0;
let progress_width=0;
window.timer_width=100;
window.time_df=100;





// PRZYPISANIE AKCJI DO ODPOWIEDZI

for(let i=0; i<answers.length; i++){
    answers[i].addEventListener('click', function click(event){


        window.clearInterval(window.countdown);
        add_class(answers[0], 'click_stop');
        add_class(answers[1], 'click_stop');
        add_class(answers[2], 'click_stop');
        add_class(answers[3], 'click_stop');

        if(event.target.innerHTML===preQuestions[index].correct_answer){
            score++;
            add_class(answers[i], 'valid');


        }
        else{
            add_class(answers[i], 'invalid');
        }
       /* sleep(1000).then(()=>
        {
            index++;
            setQuestion(index);
        });*/

    });

}

// ZAŁADOWANIE PYTANIA
function setQuestion(index) {

    document.querySelector('.score_com').innerHTML="";
    document.querySelector(".time-bar").style.width='100%';
    window.timer_width=100;

    window.clearInterval(window.countdown);
    window.clearTimeout(window.blocking);

    if(index===last_question) {
        window.countdown = setInterval(timer, 1000);
        window.blocking = setTimeout(block_answers, 20000);
    }


    question.innerHTML = preQuestions[index].question;


        remove_class(answers[0], 'valid', 'invalid', 'click_stop');
        remove_class(answers[1], 'valid', 'invalid', 'click_stop');
        remove_class(answers[2], 'valid', 'invalid', 'click_stop');
        remove_class(answers[3], 'valid', 'invalid', 'click_stop');

        answers[0].style.display="block";
        answers[1].style.display="block";
        answers[2].style.display="block";
        answers[3].style.display="block";

        if (index < last_question) {

            answers[0].classList.add('click_stop');
            answers[1].classList.add('click_stop');
            answers[2].classList.add('click_stop');
            answers[3].classList.add('click_stop');
        }
            if(preQuestions[index].type==="multiple") {
                answers[0].innerHTML = preQuestions[index].answers[0];
                answers[1].innerHTML = preQuestions[index].answers[1];
                answers[2].innerHTML = preQuestions[index].answers[2];
                answers[3].innerHTML = preQuestions[index].answers[3];
            }
            else {
                answers[0].innerHTML = preQuestions[index].answers[0];
                answers[1].innerHTML = preQuestions[index].answers[1];
                answers[2].style.display="none";
                answers[3].style.display="none";
            }


}

//FUNKCJE POMOCNICZE
function add_class(element, class_name){
    element.classList.add(class_name);
}
function remove_class(element, class_name, class_name2, class_name3){
    element.classList.remove(class_name, class_name2, class_name3);
}


// FUNKCJA BLOKUJĄCA ODPOWIEDZI PO PRZEKROCZENIU CZASU
function block_answers(){

    window.clearInterval(window.countdown);
    document.querySelector(".time-bar").style.width=window.time_df + '%';
    window.timer_width=100;

    answers[0].classList.add('click_stop');
    answers[1].classList.add('click_stop');
    answers[2].classList.add('click_stop');
    answers[3].classList.add('click_stop');

    document.querySelector('.score_com').innerHTML="Time's up!";


}

// FUNKCJA OBSŁUGUJĄCA PASEK CZASU
function timer(){

     window.timer_width=window.timer_width-5;


     document.querySelector('.time-bar').style.width = window.timer_width + '%';



}

// Załadowanie 1-szego pytania
setQuestion(index);
document.querySelector('.progress-bar').innerHTML=index*5+'%';


// Guzik NEXT, przełączanie pytań
next.addEventListener('click', function () {

    if(last_question===index && last_question<20){
        last_question++;
    }
    index++;
    //document.getElementsByClassName("time-bar").style.width=window.time_df + '%';

    if(index<21){
        progress_width+=5;
        document.querySelector('.progress-bar').innerHTML = index * 5 + "%";
        document.querySelector('.progress-bar').style.width =progress_width + '%';

       // document.querySelector('.time-bar').classList.add('df');
    }
  /*  else if(index>19 && index<21){
        progress_width+=5;
        document.querySelector('.progress-bar').innerHTML = index * 5 + "%";
        document.querySelector('.progress-bar').style.width =progress_width + '%';
    }*/

    if(index<20) {
        setQuestion(index);

    }
    else {
        if (score < 5) {
            document.querySelector('.score_com').innerHTML = "Let me guess... You have always prefered dolls than cars?";
        }
        else if (score > 4 && score < 10) {
            document.querySelector('.score_com').innerHTML = "Whoops! Could be worse but you still have a lot to learn!";
        }
        else if (score > 9 && score < 15) {
            document.querySelector('.score_com').innerHTML = "Not bad... for a non-petrolhead";
        }
        else if (score > 14 && score < 19) {
            document.querySelector('.score_com').innerHTML = "Great result!";
        }
        else {
            document.querySelector('.score_com').innerHTML = "Perfection! You are true Petrolhead!";
        }

        document.querySelector('.score').innerHTML = "TOTAL SCORE: " + score + " / 20";

        document.querySelector(".back").style.display = "block";

    }
});

back.addEventListener('click', function () {


    if(index>0){
        index--;
        setQuestion(index);
    }
});

back_to_start.addEventListener('click', function(){

    if(sessionStorage.number_of_tries) {
        sessionStorage.number_of_tries++;
    }
    else{
        sessionStorage.number_of_tries=1;
    }

    if(sessionStorage.total_score){
        sessionStorage.total_score= +sessionStorage.total_score+ +Number(score);
    }
    else{
        sessionStorage.total_score=Number(score);
    }

});

