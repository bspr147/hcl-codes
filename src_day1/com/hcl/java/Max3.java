package com.hcl.java;

public class Max3 {

	public void check(int a,int b,int c) {
		int m=a;
		if(m < b) {
			m=b;
		}
		if(m < c) {
			m=c;
		}
		System.out.println("Max value " +m);
	}
	public static void main(String[] args) {
		int a,b,c;
		a=5;
		b=3;
		c=2;
		new Max3().check(a, b, c);
	}
}
