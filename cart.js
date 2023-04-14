var total1,total2,total3

function remove1(){
    document.getElementById("row1").remove();
}

function remove2(){
    document.getElementById("row2").remove();
}

function remove3(){
    document.getElementById("row3").remove();
}

function calc(){
    var price=document.getElementById("Price1").innerHTML;
    var quantity1= document.getElementById("num1").value;
    total1=parseFloat(price) * quantity1
    if(!isNaN(total1))


    //total1=total1.toLocaleString('en-IN');
        document.getElementById("finalPrice1").innerHTML= total1
        document.getElementById("finalPrice1").innerHTML="\u20B9  " + document.getElementById("finalPrice1").innerHTML
       
    finalTotal()
}


function calc2(){
    var price=document.getElementById("Price2").innerHTML;
    var quantity1= document.getElementById("num2").value;
    total2=parseFloat(price) * quantity1
    if(!isNaN(total2))

        //total2=total2.toLocaleString('en-IN');
        document.getElementById("finalPrice2").innerHTML= total2
        document.getElementById("finalPrice2").innerHTML="\u20B9  " + document.getElementById("finalPrice2").innerHTML
    finalTotal()
}

function calc3(){
    var price=document.getElementById("Price3").innerHTML;
    var quantity1= document.getElementById("num3").value;
    total3=parseFloat(price) * quantity1
    if(!isNaN(total3))

        //total3=total3.toLocaleString('en-IN');
        document.getElementById("finalPrice3").innerHTML= total3
        document.getElementById("finalPrice3").innerHTML="\u20B9  " + document.getElementById("finalPrice3").innerHTML
    finalTotal()
}

function finalTotal(){
    // var finalPrice= total1+total2+total3;
    let finalPrice= parseFloat(total1);
    let finalPr2= parseFloat(total2);
    let finalPr3= parseFloat(total3);

    var finalNum=finalPrice+finalPr2+finalPr3
    finalNum=finalNum.toLocaleString('en-IN');
    document.getElementById("subTotal").innerHTML="\u20B9" + finalNum
}