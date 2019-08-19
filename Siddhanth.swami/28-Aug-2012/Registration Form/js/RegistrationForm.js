MyMssg  = "" ;

function load(){

}

function Validator(){
    this.emailV = "";
    this.zipCodeV = "";
    this.nameV = /^[a-zA-Z]+$/;
}


function ValidateForm(form){	  
	  regexName = /^[A-Za-z|\s]+$/;	  
	  regexZip = /\d.*$/;
	  regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	  if(form.txtU.value.length < 5 ){
          MyMssg += "Length of username should be atleast 5 letters\n";
      }
      if(form.txtU.value.length > 12){
          MyMssg +=  "Length of username should be less than 12 letters\n";
      }
      if(form.txtP.value.length < 7 ){
          MyMssg += "Length of Password should be atleast 7 letters.\n";
      }
      if(form.txtP.value.length > 12){
          MyMssg += "Length of Password should be less than 12 letters.\n";
      }
	  
      if (form.txtName.value == "") {
		MyMssg += "\nPlease Enter Name";
      }else if (!regexName.test(form.txtName.value)) {
                    MyMssg += "\nName should contain only words";
      }
	  
      if (form.txtZip.value == "") {
		MyMssg += "\nPlease Provide zip code";
      }else if (regexZip.test(form.txtZip.value)) {
		MyMssg += "\nZip code should contain only numbers";
      }
	  if (form.txtEmail.value == "") {
		MyMssg += "\nPlease Provide Email";
      }else if (!regexEmail.test(form.txtEmail.value)) {
		MyMssg += "\nIncorrect Email Id";
      }
     
	  alert(MyMssg);
	  MyMssg = "";
}
