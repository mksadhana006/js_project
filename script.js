function valid()
{
let a=document.getElementById("pass");

let pwd=a.value;
if(pwd.length<8)
{
    alert("password should contain at least 8 characters"); 
    return false; 
}
if(!/[!@#$%&*^]/.test(pwd))
{
    alert("password must contain atleast any one special character");
    return false;
}

return true;
}