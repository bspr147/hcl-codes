package com.hcl.test;

import java.io.FileInputStream;
import java.io.FileNotFoundException;

/**
 * Class CliMain provides the command line interface to the ChckDemo
 * application.
 */
public class ChkDemo {
  /**
  * The main entry point.
  * @param args the list of arguments
  * @throws FileNotFoundException throw FileNotFoundException.
  */ 
  public static void main(String[] args) throws FileNotFoundException {  
    FileInputStream f1 = new FileInputStream("c:/hello.txt");
  }
}
