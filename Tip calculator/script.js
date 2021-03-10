function tipcalculator(){
    var amount = document.getElementById("amt").value
    var percentage = document.getElementById("per").value
    var prsn = document.getElementById("person").value
    var pay = (amount/100)*percentage/prsn
    document.getElementById("tip").innerHTML=pay
}