function operation()
{
	//document.write("called");
	var num1 = Number(document.getElementById("txtAddition1").value);
	var num2 = Number(document.getElementById("txtAddition2").value);

	var result = 0;

	var e = document.getElementById("operator");
    var operation = e.options[e.selectedIndex].value;
	switch (operation)
	{
		case "Add":
			result = num1 + num2;
			break;
		case "Sub":		
			result = num1 - num2;
			break;
		case "Mul":
			result = num1 * num2;
			break;
		case "Div":
			result = num1 / num2;
			break;
	} 
	document.getElementById("result").innerHTML=result;
}