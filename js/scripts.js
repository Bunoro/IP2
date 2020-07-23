function compute (event) {
    console.log(event);
    event.preventDefault();
    

    var year=document.getElementById("year-input").value;
    var month=document.getElementById("month-input").value;
    var date=document.getElementById("date-input").value;
    var gender=document.getElementById("gender").value;
    var form=new FormData (event.target);
    var year=form.get("year-input");
    var month=form.get("month-input");
    var date=form.get("date-input");
    var gender=form.get("gender");
    var day=[year-input, month-input, date-input];
    var day=new Date(date);
    console.log(date);



}
