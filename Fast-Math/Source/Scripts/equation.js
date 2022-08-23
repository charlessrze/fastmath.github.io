let equationResult = document.getElementById('equation_result');

document.getElementById('equation_form').addEventListener('submit', (e) => {
    e.preventDefault();

    const checkSolve = document.getElementById('check_solve');
    checkSolve.classList.add('check_solve-display-on');
    const equationForm = document.getElementById('equation_form');
    equationForm.classList.add('equation__form-click');

    let a = document.getElementById('equation_a').value;
    let b = document.getElementById('equation_b').value;
    let c = document.getElementById('equation_c').value;

    let D = Math.pow(b, 2);
    const subtraction = 4 * a * c;
    D = D - subtraction;

    const discriminantValid = D <= 0;
    if(discriminantValid)
        return equationResult.innerHTML = "Решения нет";

    const firstX = (-b + Math.sqrt(D)) / (2 * a);
    const secondX = (-b - Math.sqrt(D)) / (2 * a);

    equationResult.innerHTML = firstX + ", " + secondX;

    let showFullSolve=() =>{
        if(a < 0){
            a = a.toString();
            a = `(${a})`; 
        }
        if(b < 0){
            b = b.toString();
            b = `(${b})`; 
        }
        if(c < 0) {
            c = c.toString();
            c = `(${c})`; 
        }
        document.getElementById('discriminant').innerHTML = `D = ${b} * ${b} - 4 * ${a} * ${c}`;
        document.getElementById('first-x').innerHTML = `x1 = - ${b} + &#8730 ${D} / 2 * ${a};`
        document.getElementById('second-x').innerHTML = `x2 = - ${b} - &#8730 ${D} / 2 * ${a};`
    }
    checkSolve.onclick = showFullSolve;
});
