const init = () => {
    let a = document.getElementById("inputNum1");
    let b = document.getElementById("inputNum2");
    let c = document.getElementById("inputNum3");
    let btn = document.getElementById("btn");
    let btn2 = document.getElementById("btn-back")

    let a_valid = () => {
        a_value = a.value;
        if(isNaN(a_value) || a_value.length == 0){
            a.classList.remove("is-valid");
            a.classList.add("is-invalid");
        }
        else{
            a.classList.remove("is-invalid");
            a.classList.add("is-valid");
        }
    }

    a.addEventListener("blur", e => {
        a_valid();
    })
    a.addEventListener("input", e => {
        a_valid();
    })


    let b_valid = () => {
        b_value = b.value;
        if(isNaN(b_value) || b_value.length == 0){
            b.classList.remove("is-valid");
            b.classList.add("is-invalid");
        }
        else{
            b.classList.remove("is-invalid");
            b.classList.add("is-valid");
        }
    }

    b.addEventListener("blur", e => {
        b_valid();
    })
    b.addEventListener("input", e => {
        b_valid();
    })


    let c_valid = () => {
        c_value = c.value;
        if(isNaN(c_value) || c_value.length == 0){
            c.classList.remove("is-valid");
            c.classList.add("is-invalid");
        }
        else{
            c.classList.remove("is-invalid");
            c.classList.add("is-valid");
        }
    }

    c.addEventListener("blur", e => {
        c_valid();
    })
    c.addEventListener("input", e => {
        c_valid();
    })



    btn.addEventListener("click", e => {
        e.preventDefault();
        a_value = a.value;
        b_value = b.value;
        c_value = c.value;
        if(a.classList.contains("is-invalid") || a_value.length == 0 || b.classList.contains("is-invalid")|| b_value.length == 0 || c.classList.contains("is-invalid") || c_value.length == 0){
            alert("Vyplňtě všechny pole čisly.");
        }
        else{
            sum = a_value + b_value + c_value;
            if(sum % 2 == 0){
                window.location.href = "./2.html"
            }
            if(sum % 2 == 1){
                window.location.href = "./1.html"
            }
            if(sum == 0){
                window.location.href = "./0.html"
            }
        }
    })



    btn2.addEventListener("click", e => {
        window.location.href = "./index.html"
    })


}


document.addEventListener("DOMContentLoaded", init);