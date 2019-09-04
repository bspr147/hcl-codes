package com.hcl.collections;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class LambdaFilterDemo {

	public static void main(String[] args) {
		List<Product> list=new ArrayList<Product>();  
        list.add(new Product(1,"Samsung A5",17000));  
        list.add(new Product(3,"Iphone 6S",65000));  
        list.add(new Product(2,"Sony Xperia",25000));  
        list.add(new Product(4,"Nokia Lumia",15000));  
        list.add(new Product(5,"Redmi4 ",26000));  
        list.add(new Product(6,"Lenevo Vibe",19000));  
        
        list.stream().filter(p -> p.price >= 20000).forEach(x -> {
        	System.out.println(x);
        });
        System.out.println("Names start with S");
        list.stream().filter(p -> p.name.startsWith("S")).
        forEach(x ->{
        	System.out.println(x);
        });
       
        Product maxP=list.stream().max((p1,p2) -> p1.price >= p2.price
        		? 1 : -1).get();
        System.out.println("Max Price Record");
        System.out.println(maxP);
        
        Product minP=list.stream().min((p1,p2) -> p1.price >= p2.price
        		? 1 : -1).get();
        System.out.println("Min Price Record");
        System.out.println(minP);
        
        
	}
}
