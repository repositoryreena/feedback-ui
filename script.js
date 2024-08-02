const unhappyBtn = document.getElementById("unhappy")
const neutralBtn = document.getElementById("neutral")
const satisfiedBtn = document.getElementById("satisfied")
const message = document.getElementById("message")
const sendReview = document.getElementById("sendreview")
let selectedBtn = ""

unhappyBtn.addEventListener("click", ()=>{
    unhappyBtn.classList.add("selected")
    neutralBtn.classList.remove("selected")
    satisfiedBtn.classList.remove("selected")
    selectedBtn = "Unhappy"
})

neutralBtn.addEventListener("click", ()=>{
    neutralBtn.classList.add("selected")
    unhappyBtn.classList.remove("selected")
    satisfiedBtn.classList.remove("selected")
    selectedBtn = "Neutral"
})

satisfiedBtn.addEventListener("click", ()=>{
    satisfiedBtn.classList.add("selected")
    neutralBtn.classList.remove("selected")
    unhappyBtn.classList.remove("selected")
    selectedBtn = "Satisfied"
})

sendReview.addEventListener("click", ()=>{
    if (selectedBtn){
    message.innerHTML = `<p><strong>Thank you! <br><br>Feedback: ${selectedBtn}</strong> <br><br>We'll use your feedback to improve<br> our customer support.</p>`
    message.classList.add("msg")
    }
    })