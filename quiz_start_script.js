let history = document.querySelector('.history');
let clear_history = document.querySelector('.clear_history');


history.addEventListener('click', function(){

    sessionStorage.mean_result=(sessionStorage.total_score / sessionStorage.number_of_tries);

    if(sessionStorage.mean_result!=="NaN") {
        document.querySelector('.result_com').innerHTML = "Your average result is: " + sessionStorage.mean_result + " / 20";
    }
    else{
        document.querySelector('.result_com').innerHTML = "Your average result is:  0 / 20";
    }
    });

clear_history.addEventListener('click', function(){



    sessionStorage.clear();
});