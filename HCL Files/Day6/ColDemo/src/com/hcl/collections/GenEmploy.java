package com.hcl.collections;

import java.util.ArrayList;
import java.util.List;

public class GenEmploy {

	public static void main(String[] args) {
		List<Employ> lstEmploy=new ArrayList<Employ>();
		lstEmploy.add(new Employ(1, "Divya",67333));
		lstEmploy.add(new Employ(2, "Laksh",67743));
		lstEmploy.add(new Employ(3, "Vinod",82255));
		lstEmploy.add(new Employ(4, "Prem",82577));
		lstEmploy.add(new Employ(5, "Raghu",53488));
		lstEmploy.add(new Employ(6, "Hema",99434));
		System.out.println("Employ List  ");
		lstEmploy.forEach(System.out::println);
	}
}
