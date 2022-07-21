let sqrtResult = document.querySelector("#sqrt_result");

if(!document.forms.sqrt_form.onsubmit)
    sqrtResult.innerHTML = 0;

document.forms.sqrt_form.onsubmit = function() {
    let message = this.sqrt_number.value;
    if(!isNaN(message))
        sqrtResult.innerHTML = Math.sqrt(message);
    else
        sqrtResult.innerHTML = "Ошибка";
    return false;
};