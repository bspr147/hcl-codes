package com.hcl.collections;

import java.util.ArrayList;
import java.util.List;

public class ArrListDemo {
	public static void main(String[] args) {
		List lstNames=new ArrayList();
		lstNames.add("Anubhav");
		lstNames.add("Vinod");
		lstNames.add("Prem");
		lstNames.add("Raghu");
		lstNames.add("Visalakshi");
		lstNames.add("Lakshmi");
		System.out.println("Names are  ");
//		for (Object object : lstNames) {
//			System.out.println(object);
//		}
		System.out.println("JDk 1.8 ");
		lstNames.forEach(System.out::println);
		/* Edit */ 
		lstNames.set(2, "Prem Reddy");
		System.out.println("List after Update  ");
		lstNames.forEach(System.out::println);
		System.out.println("List after removing by Index");
		lstNames.remove(1);
		lstNames.forEach(System.out::println);
		lstNames.remove("Lakshmi");
		System.out.println("List after removing by Object");
		lstNames.forEach(System.out::println);
		System.out.println("4th Element " +lstNames.get(3));
		
	}
}
