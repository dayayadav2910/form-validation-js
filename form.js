function checkpassword()
{

    let email = document.getElementById("email-id");
    let contact = document.getElementById("mobile-number");
    let passw1 = document.getElementById("password1");
    let passw2 = document.getElementById("password2");
    let date = document.getElementById("dob");
    var d = Date()


    regexp= /^[6-9][0-9]{9}$/;
    ailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var password = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{4,}$/;
    flag = 0; 
    if (flag==0)
    {
        if(email.value.match(email))
        {
            flag =0 ; 
        }
        else
        {
            alert("Not a valid Email")
            flag=1
        }
    }
    if (flag==0)
    {
        if(contact.value.match(regexp))
        {
            flag =0 ; 
        }
        else{
            alert("Not a valid number");
            flag=1;
        }
    }
    if(flag ==0){
        if(date.value>d){
            alert("Date must be less than today's date");
        }
        else
        {
            flag = 0
        }
    }
    if(flag==0)
    {
        if(passw1.value.match(password) && passw1.value == passw2.value ){
            alert("Password creted successfully")
        }
        else
        {
            alert("Password does not match Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters");
            flag=1
        }
    }  
    
    if(flag == 0)
    {
        alert("Data enterd Sucessfull")
    }
}


