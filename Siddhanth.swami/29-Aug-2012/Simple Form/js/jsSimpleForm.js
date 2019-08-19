function checkPhNumber(form1) {
	var regexPhn = /^[0-9]{3}$/;
    var regexPhn2 = /^[0-9]{4}$/;
    if ((!regexPhn.test(form1.txtPhn1.value)) || (!regexPhn.test(form1.txtPhn2.value)) || (!regexPhn2.test(form1.txtPhn3.value))) {
		alert("Enter Numbers only");
    }
}

