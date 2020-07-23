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
 
//days of the week and akan name arrays
let daysOfWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

let maleAkanNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
];

let femaleAkanNames = [
    "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
];

//fixing bug for dayOfWeek and number indexing
let index;
if dayOfWeekNumber == 0 {
    index == 6;
}else {
    dayOfWeekNumber - 1;
}
console.log(index);


if (myGenderValue=="male" && monthTrue && dayTrue) {
    document.getElementById('result').textContent = "You were born on a " + dayOfWeek[index] + ",your Akan name is " + maleAkanNames[index];
    document.getElementById('display-name').textContent = "You are...";
    document.getElementById('result').style.fontSize = "20px";
    
    return false;
}else if (myGenderValue=="female" && monthTrue && dayTrue) {
    document.getElementById('result').textContent = "You were born on a " + dayOfWeek[index] + ",your Akan name is " + femaleAkanNames[index];
    document.getElementById('display-name').textContent = "You are...";
    document.getElementById('result').style.fontSize = "20px";

    return false;

}else {
    alert("You entered an invalid date or month. Please try again!");
}