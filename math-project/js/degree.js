let degreeResult = document.getElementById('degree_result')

document.getElementById('degree_form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const number = document.getElementById('degree_number').value,
          degree = document.getElementById('degree_times').value;

    if(!isNaN(number) && !isNaN(degree))
        degreeResult.innerHTML = Math.pow(number, degree);
    else
        degreeResult.innerHTML = "Ошибка";      
});
