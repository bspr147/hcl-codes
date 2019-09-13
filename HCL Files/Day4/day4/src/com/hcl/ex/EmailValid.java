package com.hcl.ex;

class InvalidEmailException extends Exception {
	public InvalidEmailException(String error) {
		super(error);
	}
}

class InvalidUserException extends Exception {
	public InvalidUserException(String error) {
		super(error);
	}
}

public class EmailValid {

	public void checkEmail(String email) throws InvalidEmailException, InvalidUserException {
		if(email.indexOf('@')== -1) {
			throw 
			 new InvalidEmailException("Invalid Email @ not found");
		}
		if(email.indexOf('@') > 12) {
			throw new 
			InvalidUserException("Invalid User...");
		}
			System.out.println("Email  " +email);
	}
	public static void main(String[] args) {
		String email="hclgmail.com";
		try {
			new EmailValid().checkEmail(email);
		} catch (InvalidEmailException | InvalidUserException e) {
			e.printStackTrace();
		}
	}
}
