package com.hcl.collections;

import java.util.SortedSet;
import java.util.TreeSet;

public class SortEmp {
	public static void main(String[] args) {
		SortedSet s=new TreeSet();
		s.add(new Emp(1,"Hema",563455));
		s.add(new Emp(2,"Anisha",63346));
		s.add(new Emp(3,"Anubhav",74566));
		s.add(new Emp(4,"Visalakshi",77322));
		s.add(new Emp(5,"Raghu",77334));
		System.out.println("Sorted Data");
		s.forEach(System.out::println);
	}
}
