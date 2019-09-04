package com.hcl.collections;

import java.util.ArrayList;
import java.util.List;

public class ArrIntEx {
	public static void main(String[] args) {
		List num=new ArrayList();
		num.add(new Integer(44));
		num.add(new Integer(12));
		num.add(new Integer(3));
		num.add(new Integer(25));
		num.add(new Integer(87));
		num.add(new Integer(17));
		int sum=0;
		for (Object ob : num) {
			sum+=(Integer)ob;
		}
		System.out.println("Sum " +sum);
	}
}
