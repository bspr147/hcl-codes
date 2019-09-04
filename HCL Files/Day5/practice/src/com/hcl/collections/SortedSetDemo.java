package com.hcl.collections;

import java.util.SortedSet;
import java.util.TreeSet;

public class SortedSetDemo {
	public static void main(String[] args) {
		SortedSet s=new TreeSet();
		s.add("Visalakshi");
		s.add("Lakshmi");
		s.add("Anubhav");
		s.add("Sai Krishna");
		s.add("Hema");
		s.add("Anisha"); 
		System.out.println("Sorted Data ");
		s.forEach(System.out::println);
	}
}
