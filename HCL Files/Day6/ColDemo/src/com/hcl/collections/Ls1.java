package com.hcl.collections;

import java.util.ArrayList;
import java.util.List;

public class Ls1 {

	public static void main(String[] args) {
		List<Integer> lstData=new ArrayList<Integer>();
		lstData.add(new Integer(42));
		lstData.add(new Integer(11));
		lstData.add(new Integer(18));
		lstData.add(new Integer(19));
		lstData.add(new Integer(13));
		int sum=0;
		  sum = lstData.stream().reduce(0, 
	                (e1,e2) -> e2+e2);
		  System.out.println(sum);
	  
//		lstData.stream().map(n -> n*3).forEach(p ->{
//			System.out.println(p);
//		});
//		System.out.println(sum);
	}
}
