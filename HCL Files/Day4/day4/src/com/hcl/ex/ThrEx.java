package com.hcl.ex;

public class ThrEx {
	public void show(int x) {
		boolean flag=true;
		if(x < 0) {
			flag=false;
			throw new 
			  NumberFormatException("Negative Nos Not Allowed");
		}
		if(x==0) {
			flag=false;
			throw new ArithmeticException("Zero is Invalid...");
		}
		if(flag==true) {
			System.out.println("X value "+x);
		}
	}
	public static void main(String[] args) {
		int n=12;
		try {
			new ThrEx().show(n);
		} catch(NumberFormatException e) {
			System.out.println(e.getMessage());
		} catch(ArithmeticException e) {
			System.out.println(e.getMessage());
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
