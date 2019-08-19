function add()
{
	var num1 = Number(document.getElementById("txtAddition1").value);
	var num2 = Number(document.getElementById("txtAddition2").value);
	var sum = num1+num2;
	//document.write(result+result2);		
	document.getElementById("result").innerHTML=sum;
}