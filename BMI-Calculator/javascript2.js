const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const h = parseInt(document.querySelector('#height').value);
    const w = parseInt(document.querySelector('#weight').value);
    const r = document.querySelector('#results');

    if (isNaN(h) || h <= 0) {
        r.innerHTML = `Please give a valid height: ${h}`;
    }
    else if (isNaN(w) || w <= 0) {
        r.innerHTML = `Please give a valid weight: ${w}`;
    }
    else {
        const bmi = (w / ((h * h) / 10000)).toFixed(2);

        if (bmi < 18.6) {
            r.innerHTML = `<span>${bmi}</span><br><span>Under Weight</span>`;
        }
        else if (bmi < 24.9) {
            r.innerHTML = `<span>${bmi}</span><br><span>Normal Weight</span>`;
        }
        else {
            r.innerHTML = `<span>${bmi}</span><br><span>Over Weight</span>`;
        }
    }
});