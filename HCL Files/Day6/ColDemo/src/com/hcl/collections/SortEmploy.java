package com.hcl.collections;

import java.util.Comparator;
import java.util.Set;
import java.util.TreeSet;

public class SortEmploy {

	public static void main(String[] args) {
		Comparator<Employ> c=new NameComparator();
		Set<Employ> setEmploy=new TreeSet<Employ>(c);
		setEmploy.add(new Employ(1, "Divya",67333));
		setEmploy.add(new Employ(2, "Laksh",67743));
		setEmploy.add(new Employ(3, "Vinod",82255));
		setEmploy.add(new Employ(4, "Prem",82577));
		setEmploy.add(new Employ(5, "Raghu",53488));
		setEmploy.add(new Employ(6, "Hema",99434));
		System.out.println("Employ List  ");
		setEmploy.forEach(System.out::println);
	}
}
