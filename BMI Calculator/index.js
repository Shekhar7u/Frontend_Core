const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();//default behavior rok do abhi kahi submit nahi ..
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#results")
    if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = `Please enter a valid height ${height}`;
    }
    else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please enter a valid weight ${weight}`
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        //show result
        results.innerHTML = `<span>${bmi}</span>`
    }

})