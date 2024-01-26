//selecting input, button, h3

var captcha=document.querySelector("#captcha")
var in_value=document.querySelector("#in_value")
var btn=document.querySelector("#btn")
var randomString = Math.random().toString(36).substring(2,8)
console.log(randomString)
captcha.textContent=randomString

btn.addEventListener("click",function()
{
    
    if(randomString===in_value.value)
    {
        alert("CAPTCHA Verified Successfully")
    }
    else
    {
        alert("CAPTCHA Verification Failed. Please try again")
    }
})