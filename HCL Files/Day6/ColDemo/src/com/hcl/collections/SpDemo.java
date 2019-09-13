package com.hcl.collections;

public class SpDemo {

	public static void main(String[] args) {
		String s ="this is a test string";
		String[] arr=s.split(" ");
		for (String string : arr) {
			System.out.println(string);
		}
	}
}
