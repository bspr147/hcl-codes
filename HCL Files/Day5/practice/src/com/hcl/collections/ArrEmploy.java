package com.hcl.collections;

import java.util.ArrayList;
import java.util.List;

public class ArrEmploy {
	public static void main(String[] args) {
		List lstEmloy=new ArrayList();
		lstEmloy.add(new Employ(1, "Anisha", 65633));
		lstEmloy.add(new Employ(2, "Sai", 68844));
		lstEmloy.add(new Employ(3, "Anubhav", 89633));
		lstEmloy.add(new Employ(4, "Vinod", 56633));
		lstEmloy.add(new Employ(5, "Raghu", 89633));
		for (Object ob : lstEmloy) {
			Employ e=(Employ)ob; 
			System.out.println(e);
		}
	}
}
