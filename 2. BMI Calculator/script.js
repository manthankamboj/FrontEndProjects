const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();

    const h = parseInt(document.querySelector('#height').value);
    const w = parseInt(document.querySelector('#weight').value);
    const r = document.querySelector('#results');

    if(h==='' || h<0 || isNaN(h)){
        results.innerHTML = `Please give a valid height ${h}`;
    } else if(w==='' || w<0 || isNaN(w)){
        results.innerHTML = `Please give a valid Weight ${weight}`;
    } else{
        const BMI = (w/((h*h)/10000)).toFixed(2)
        

        if(BMI<=18.6){
            results.innerHTML = `<span> Your BMI score is ${BMI}. Hence you are Under Weight. </span>`;
        } else if(BMI >18.6 && BMI<=24.9){
            results.innerHTML = `<span> Your BMI score is ${BMI}. Hence you have Normal Weight. </span>`
        } else{
            results.innerHTML = `<span> Your BMI score is ${BMI}. Hence you are Over Weight. </span>`
        }
    }
});