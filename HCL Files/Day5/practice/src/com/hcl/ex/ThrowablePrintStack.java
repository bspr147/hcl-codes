package com.hcl.ex;

//import java.lang.Throwable;  
public class ThrowablePrintStack {  
    public static void main(String[] args) throws Throwable {  
   try{  
       int i=4/0;  
   }catch(Throwable e){  
       e.printStackTrace();  
       System.err.println("Cause : "+e.getCause());  
  
   }  
}  
}  

