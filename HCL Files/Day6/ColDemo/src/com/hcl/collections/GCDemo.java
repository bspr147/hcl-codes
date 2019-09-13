package com.hcl.collections;

public class GCDemo {

	public static void main(String[] args) {
		GCDemo o1 = new GCDemo();
		System.out.println(o1);
		o1 = null;
		System.gc();
		
	}
	protected void finalize() {
		System.out.println("Object Destructed "+ this); 
	}

}
