function operation()
{
	//document.write("called");
	var num1 = Number(document.getElementById("txtAddition1").value);
	var num2 = Number(document.getElementById("txtAddition2").value);
	var display = 0;
	var e = document.getElementById("operator");
    var operation = e.options[e.selectedIndex].value;
	switch (operation)
	{
		case "Add":
			display = num1 + num2;
			break;
		case "Sub":		
			display = num1 - num2;
			break;
		case "Mul":
			display = num1 * num2;
			break;
		case "Div":
			display = num1 / num2;
			break;
	} 
	document.getElementById("display").innerHTML=display;
}


function click0()
{
		var hold = document.getElementById("display").value;
		if(hold.length > 0)
		{
			document.getElementById("display").value=hold+"0";
		}
}
function click1()
{
	var hold = document.getElementById("display").value;
	document.getElementById("display").value=hold+"1";	
}

function click2()
{
	var hold = document.getElementById("display").value;
	document.getElementById("display").value=hold+"2";	
}

function click3()
{
	var hold = document.getElementById("display").value;
	document.getElementById("display").value=hold+"3";	
}
function click4()
{
	var hold = document.getElementById("display").value;
	document.getElementById("display").value=hold+"4";	
}
function click5()
{
	var hold = document.getElementById("display").value;
	document.getElementById("display").value=hold+"5";	
}
function click6()
{
	var hold = document.getElementById("display").value;
	document.getElementById("display").value=hold+"6";	
}
function click7()
{
	document.write("The value is "+x+" master");
	var hold = document.getElementById("display").value;
	document.getElementById("display").value=hold+"7";	
}
function click8()
{
	var hold = document.getElementById("display").value;
	document.getElementById("display").value=hold+"8";	
}
function click9()
{
	var hold = document.getElementById("display").value;
	document.getElementById("display").value=hold+"9";	
}

function clearMe()
{	
	document.getElementById("display").value="";
}
