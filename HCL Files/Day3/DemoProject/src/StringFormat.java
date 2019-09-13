
public class StringFormat {

	public static void main(String[] args) {
		String name = "laksh";
		String name2 = "Babbar";
		String sf1 = String.format("Value is %s", name);
		String sf2 = String.format("Value is %f", 32.33436);
		String sf3 = String.format("Value is %32.12f", 32.33436);
		String sf4 = String.format("%d", 101);
		String sf5 = String.format("%10d", 101);
		String sf6 = String.format("%-10d", 101);
		String sf7 = String.format("|%010d|", 101);
		String sf8 = String.format("My name" + "is %1$s,%1$s and %2$s", 
				name,name2);
		
		
		System.out.println(sf1);
		System.out.println(sf2);
		System.out.println(sf3);
		System.out.println(sf4);
		System.out.println(sf5);
		System.out.println(sf6);
		System.out.println(sf7);
		System.out.println(sf8);
		
		
	}
}
