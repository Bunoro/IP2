function getAkanName() {
    let yearOfBirth = document.getElementById("year-input").value
    let monthOfBirth = Number(document.getElementById("month-input").value)
    let dateOfBirth = Number(document.getElementById("date-input").value)
    let genders = document.getElementsByName("gender")

    //function to generate gender value
    function getGender(){
        for (let gender of genders)
        if (gender.checked){
            return gender.value;
        }
    }
}

let myGenderValue = getGender ();
console.log(myGenderValue);

//functions to validate values
function monthValidator(params) {
    if (monthOfBirth<1 || monthOfBirth>12) {
        return false;
    } else {
        return true;
    }
        
    }
    
}