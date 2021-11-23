let billAmt, peopleNumber, tipAmt, tipPerPerson, totalPerPerson, totalAmt;
const buttons = ['button1','button2','button3','button4','button5','button6'];

function billInput() {
    billAmt = document.getElementById('bill').value;
}

function peopleInput() {
    peopleNumber = document.getElementById("people").value;
    if (peopleNumber==0){
        document.getElementById("error").style.opacity = "1";
        document.getElementById("people").style.boxShadow = "0px 0px 8px rgb(255, 98, 98)";
        document.getElementById("people").style.outline = "1px solid rgb(255, 70, 70)";
    } else {
        tipPerPerson = Number(tipAmt)/Number(peopleNumber); 
        totalPerPerson = Number(totalAmt)/Number(peopleNumber)

        document.getElementById("amount").textContent = tipPerPerson.toFixed(1);
        document.getElementById("total-amount").textContent = totalPerPerson.toFixed(1);
    }
}

function calculateTip(obj) {
    var elememt = document.getElementById(obj);

    elememt.style.backgroundColor = "hsl(176, 59%, 49%)";
    elememt.style.color = "hsl(183, 100%, 15%)";

    tipAmt = Number(billAmt) * (Number(elememt.value)/100);
    totalAmt = Number(billAmt) + Number(tipAmt);

    console.log(tipAmt);
    console.log(tipPerPerson);

    for (var i=0;i<buttons.length;i++){
        if (obj==buttons[i]){
            continue
        } else {
            document.getElementById(buttons[i]).style.backgroundColor="hsl(183, 100%, 15%)";
            document.getElementById(buttons[i]).style.color="white";
        }
    }


}
