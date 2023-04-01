
function ButunSuallar(sual, variants, trueVariant) {
    this.sual = sual;
    this.variants = variants;
    this.trueVariant = trueVariant;
    this.control = function(cevap) {
        return cevap === this.trueVariant
    }
}

let questions =
    [
        new ButunSuallar("1) 'HTML' açılışı nədir ?", { a: "Hyper Text MarkUp Language", b: "Cascading Style Sheet", c: "How to make Levengi", }, "a"),
        new ButunSuallar("2) 'CSS' açılışı nədir ?", { a: "How to make Levengi", b: "Cascading Style Sheet", c: "Cascading Smile Sheet" }, "b"),
        new ButunSuallar("3) 'FrontEnd Development' üçün lazım deyil..?", { a: "HTML", b: "CSS", c: "SQL" }, "c"),
        new ButunSuallar("4) Hansı 'BackEnd Development'ın Əsas Dilidir ?", { a: "JavaScipt", b: "Ruby", c: "PHP" }, "c"),
        new ButunSuallar("5) 'DataBase Development' üçün lazım olan Dillər...?", { a: "MySql, Java, C", b: "HTML, CSS, JavaScript", c: "Ruby, R" }, "a"),
        new ButunSuallar("6) <i> 'for i in range(10)' </i> kod hansı proqramlama dilinə aiddir ?", { a: "Java", b: "Python", c: "C#" }, "b")
    ]

function Sual(questions) {
    this.question = questions;
    this.quizIndex = 0;
    this.duzgunCavabSayisi = 0;
}
Sual.prototype.printQuiz = function() {
    return this.question[this.quizIndex] // burda ise (questions) listinden necenci indexi cagirsin deyirik yeni (1ci)
}

const quiz = new Sual(questions);
console.log(quiz)


document.querySelector(".btn-start").addEventListener("click",function() {
    document.querySelector(".quiz-box").classList.add("active");
    saygac(10);
    document.querySelector(".btn_next").innerHTML = "Sonrakı Sual";
        sualGoster(quiz.printQuiz()); // burda eger bunu cagiridgimiz zaman (questions) listinden birinci indexi cagirirq
        sualSayisi(quiz.quizIndex + 1,quiz.question.length);
        document.querySelector(".btn_next").classList.remove("show");
});

document.querySelector(".btn_next").addEventListener("click",function(){
    if(quiz.question.length != quiz.quizIndex + 1) {
        document.querySelector(".time_second").textContent = 10;
        quiz.quizIndex += 1; // ve bu index her yazdirildiqin zaman 1 artir
        clearInterval(counter);
        saygac(10);
        document.querySelector(".time_text").innerHTML = "Qalan Vaxt:";
        sualGoster(quiz.printQuiz()); // burda eger bunu cagiridgimiz zaman (questions) listinden birinci indexi cagirirq
        sualSayisi(quiz.quizIndex + 1,quiz.question.length);
        document.querySelector(".btn_next").classList.remove("show");
    }else {
        clearInterval(counter);
        console.log("Game End");
        document.querySelector(".result_box").classList.add("active");
        document.querySelector(".quiz-box").classList.remove("active");
        document.querySelector(".btn-start").classList.add("active");
        neticeGoster(quiz.question.length,quiz.duzgunCavabSayisi);
    }
});

document.querySelector(".end_game").addEventListener("click",function() {
    window.location.reload(); // seyfeni yeniliyir
});
document.querySelector(".restart_game").addEventListener("click",function() {
    quiz.quizIndex = 0;
    document.querySelector(".btn-start").click();
    document.querySelector(".result_box").classList.remove("active");
    quiz.duzgunCavabSayisi = 0;
});

let option_list = document.querySelector(".option-group");

function sualGoster(suallar) {
    let sualBasliqi = `<h4>${suallar.sual}</h4>`;
    let options = '';

    for(let cavablar in suallar.variants) {
        options += `
        <div class="option">
           <span><b style="font-size: 1.2em;">${cavablar}</b>: ${suallar.variants[cavablar]}</span>
     </div>`
    }

    document.querySelector(".question-txt").innerHTML = sualBasliqi;
    option_list.innerHTML = options;

    const option = option_list.querySelectorAll(".option");
    for(let opt of option) {
        opt.setAttribute("onclick","optionSelected(this)")
    }

}
let correct = `<div class="icon me-1"><i class="fa-solid fa-check"></i></div>`
let incorrect = `<div class="icon me-1"><i class="fa-solid fa-times"></i></div>`
function optionSelected(option) {
    document.querySelector(".time_text").innerHTML = "Vaxt Dayandirildi..";
    clearInterval(counter);
    // saygac(10);
   let cavab = option.querySelector("span b").textContent;
   let sual = quiz.printQuiz();
   if(sual.control(cavab)) {
       option.classList.add("true");
       option.insertAdjacentHTML("beforeend",correct);
       quiz.duzgunCavabSayisi += 1;
   }else {
       option.classList.add("false");
       option.insertAdjacentHTML("beforeend",incorrect);
   }

   for(let i = 0; i < option_list.children.length; i++) {
        option_list.children[i].classList.add("disable");
   }
   if (quiz.quizIndex == quiz.question.length - 1) {
     document.querySelector(".btn_next").innerHTML = "Nəticəni Göstər";
   }
    document.querySelector(".btn_next").classList.add("show");

}

function sualSayisi(sual,allSual) {
    let tag = `<span class="badge bg-warning text-black p-2">${sual} / ${allSual}</span>`;
    document.querySelector(".card-footer .contain_badge").innerHTML = tag;
}

function neticeGoster(totalQuestion,duzgunCavab) {
   let duzgun = duzgunCavab;
   let total = totalQuestion;
   let wrong = total - duzgun;
   let tag = `
   <p>ümumi sual sayısı: <b>${total}</b></p>   
   <p>düzgün cavab sayısı: <b>${duzgun}</b></p>
   <p>səhv cavab sayısı: <b>${wrong}</b></p>`;
   document.querySelector(".quiz-result").innerHTML = tag;
}
let counter;
function saygac(saniye) {
   counter = setInterval(timer,1000)
    function timer() {
        document.querySelector(".time_second").textContent = saniye;
        saniye--;

        if(saniye < 0) {
            clearInterval(counter);
            document.querySelector(".time_text").innerHTML = "Vaxt Bitdi";
            let cavab = quiz.printQuiz().trueVariant;
        
            for(let option of option_list.children) {
                if(option.querySelector("span b").textContent == cavab) {
                    option.classList.add("true");
                    option.insertAdjacentHTML("beforeend",correct);
                    if (quiz.quizIndex == quiz.question.length - 1) {
                        document.querySelector(".btn_next").innerHTML = "Nəticəni Göstər";
                      }
                }

                option.classList.add("disable")
            }
            document.querySelector(".btn_next").classList.add("show");
        }
        
    }
}