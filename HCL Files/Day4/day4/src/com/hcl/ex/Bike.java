package com.hcl.ex;

public class Bike {
	public static void Tushar(String s) {
		s=s+"Java";
	}
	public static void Yash(StringBuffer r){
		r.append("Hello");
	}
	public static void Amit (StringBuilder t) {
		t.append("Bye");
	}
	public static void main(String[] args) {
		String s="Training";
		Tushar(s);
		System.out.println(s);
		StringBuffer r= new StringBuffer("Hi");
		Yash(r);
		System.out.println(r);
		StringBuilder t=new StringBuilder("At Btm");
		Amit(t);
		System.out.println(t);
	}

}
