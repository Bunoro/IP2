function compute(event) {
    console.log(event);
    event.preventDefault();
    

    var year=document.getElementById("year").value;
    var month=document.getElementById("month").value;
    var day=document.getElementById("day").value;
    var gender=document.getElementById("gender").value;
    var form=new FormData(event.target);
    var year=form.get("year");
    var month=form.get("month");
    var day=form.get("day");
    var gender=form.get("gender");
    var akanNames = {
        Sunday: {
        male: 'Kwasi',
        female: 'Akosua'
        },
        Monday: {
        male: 'Kwadwo',
        female: 'Adwoa'
        },
        Tuesday: {
        male: 'Kwabena',
        female: 'Abenaa'
        },
        Wednesday: {
        male: 'Kwaku',
        female: 'Akua'
        },
        Thursday: {
        male: 'Yaw',
        female: 'Yaa'
        },
        Friday: {
        male: 'Kofi',
        female: 'Afua'
        },
        Saturday: {
        male: 'Kwame',
        female: 'Ama'
        },
        }
    var date=[year, month, day];
    var date=new Date(date);
    console.log(date);
    var dateBorn = date.getDay();
    console.log(dateBorn);
    var dayOfTheWeek = Object.keys(akanNames);
    var dayName = akanNames[dayOfTheWeek[dateBorn]][gender];
        console.log(dayName);
    
    if (gender==="male" && year>=1800 && month>=1 && month<=12 && day>=1 && day<=31){
        alert("On this day of  " + dayOfTheWeek[date.getDay()]+ " " + "you were born and your Akan name is " + dayName);
    }
    else if (gender==="female" && year>=1800 && month>=1 && month<=12 && day>=1 && day<=31){
        alert("On this day of  " + dayOfTheWeek[date.getDay()]+ " " + "you were born and your Akan name is " + dayName);
    }
    else {
        alert("You have input the wrong date. Please try again!");
    }


}
