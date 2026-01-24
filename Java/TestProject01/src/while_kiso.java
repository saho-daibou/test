
public class while_kiso {

	public static void main(String[] args) {
		// 14.while文の基礎
		
		String bar0 = "-";
		String bar = bar0.repeat(10);
		
		int i = 1;
		
		while(i <= 5) {
			System.out.println(i);
			i++;
		}

		System.out.println(bar);
		
		int i2 = 10;
		while(i2 >= 1) {
			System.out.println(i2);
			i2-=2;
		}
		
		System.out.println(bar);
		
		int x = 1;
		
		while(x <= 5 ) {
			System.out.println("★");
			x++;
		}
		
	}

}
