function fahren()
{
    let a=document.getElementById("cel");
    let b=Number(a.value);
    let ans=(b*(9/5))+32;
    document.getElementById("fahren").innerText="FAHRENHEIT:"+ans;
}
function celsi()
{
    let c=document.getElementById("fah");
    let d=Number(c.value);
    let an=(d-32)*(5/9);
    document.getElementById("celres").innerText="CELSIUS:"+an;
}