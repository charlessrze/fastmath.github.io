document.getElementById('percentage_form').addEventListener('submit', (e) => {
    e.preventDefault();

    const number = document.getElementById('percentage_number').value;
    const percentage = document.getElementById('percentage_perc').value;

    const percentageResult =  number / 100 * percentage;
    const percentageResultText = document.getElementById('percentage_result');

    if(isNaN(number) && isNaN(percentage)){
        percentageResultText.innerHTML = "Введите число и степень...";
    }else {
        if(!isNaN(number)) {
            if(!isNaN(percentage)){
                percentageResultText.innerHTML = `${percentage}% от числа ${number}: ${percentageResult}`;
            }else {
                percentageResultText.innerHTML = "Введите процент...";
            }
        }else {
            percentageResultText.innerHTML = "Введите число...";
        }   
    }
});