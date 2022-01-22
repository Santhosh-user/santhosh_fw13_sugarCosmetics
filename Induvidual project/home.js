//Homepage js start

let Left =document.getElementById('i2')
Left.addEventListener('click',function(){
    document.getElementById('Slider').scrollLeft -=1350 //Enter the Width here i.e the width you want to get scrolled per click
})
let Right =document.getElementById('i1')
Right.addEventListener('click',function(){
    document.getElementById('Slider').scrollLeft +=1350 //Enter the Width here i.e the width you want to get scrolled per click
})

var t_btn = document.getElementById("t-btn")
var pop_background = document.getElementById("pop-background")

// var pop_background2 = document.getElementById("pop-background2")

t_btn.addEventListener("click", function(event){
    event.preventDefault()
    

    pop_background.style.display = "flex";
    console.log("1")
    
})

var close_btn = document.getElementById("close-btn") 

close_btn.addEventListener("click", function(event){
    event.preventDefault()

    pop_background.style.display = "none";

})

// var sign_in = document.getElementById("sign-in")

// sign_in.addEventListener("click", function(event){
//     event.preventDefault()
//     pop_background.style.display = "none";

// })

// sign_in.addEventListener("click", function(event){
//     event.preventDefault()
//     // pop_background.style.display = "none";

// })

var req_otp = document.getElementById("req-otp")

req_otp.addEventListener("click", function(event){
    event.preventDefault()
    alert("OTP sent")
})

var verify_otp = document.getElementById("verify-otp")

verify_otp.addEventListener("click", function(event){
    event.preventDefault()
    alert ("Successfully logged in")
    pop_background.style.display = "none";
   
})


//Homepage js end


