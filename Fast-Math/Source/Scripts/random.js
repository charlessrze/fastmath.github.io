document.getElementById('random_form').addEventListener('submit', (e) => {
    e.preventDefault();

    const minNum = document.getElementById('min_random').value,
          maxNum = document.getElementById('max_random').value;
   
    const result = Math.floor(Math.random() * (maxNum - minNum) + minNum);

    document.getElementById('random_result').innerHTML = result;
})