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

function dayValidator(params) {
    if (monthOfBirth===2 && Number(yearOfBirth)%4===0) {
        if (dayOfBirth>28 || dateOfBirth<1) {
            return false;
        }else if(monthOfBirth===2 && dateOfBirth>29){
            return false;
        }else if (monthOfBirth===2 && dateOfBirth<1) {
            return false;
        }else {
            return true;
        }
    }else if(dayOfBirth<1 || dayOfBirth>31){
        return false;
    }else {
        return true;
    }
}

//variables for the validation of days of the week and months
let monthTrue = monthValidator();
let dayTrue = dayValidator();

//The formula to determine the day one is born (from canvas)
let dayOfWeekNumber = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+
            ((5*Number(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dateOfBirth)%7);
 
//akan name arrays