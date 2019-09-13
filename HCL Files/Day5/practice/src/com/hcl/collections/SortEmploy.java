package com.hcl.collections;

import java.util.Comparator;
import java.util.SortedSet;
import java.util.TreeSet;

public class SortEmploy {
	public static void main(String[] args) {
		Comparator c=new NameComparator();
		SortedSet s=new TreeSet(c);
		s.add(new Employ(1,"Hema",563455));
		s.add(new Employ(2,"Anisha",63346));
		s.add(new Employ(3,"Anubhav",74566));
		s.add(new Employ(4,"Visalakshi",77322));
		s.add(new Employ(5,"Raghu",77334));
		System.out.println("Sorted Data");
		s.forEach(System.out::println);
	}
}
