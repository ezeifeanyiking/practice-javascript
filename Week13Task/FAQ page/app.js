const btns = document.querySelectorAll(".question-btn");
const minusBtn = document.querySelector(".minus-icon");
const article = document.getElementsByTagName("article");


btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");
    })    
}) 