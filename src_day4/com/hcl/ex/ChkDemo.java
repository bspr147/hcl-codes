package com.hcl.ex;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
/**
 * Class ChkDemo provides the command line interface 
 * to the ChckDemo application.
 */

public class ChkDemo {
  public static void main(String[] args) throws FileNotFoundException { 
    FileInputStream f1 = new FileInputStream("c:/hello.txt");
  }
}
