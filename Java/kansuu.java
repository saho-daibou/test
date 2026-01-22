
public class kansuu {

	public static void main(String[] args) {
		// 16.関数
		
		System.out.println(totalPrice(300));
        System.out.println(totalPrice(450));
        System.out.println(totalPrice(400));
        System.out.println(totalPrice(350));
        
        System.out.println("山田さん。"+hello());
        System.out.println();
        System.out.println("鈴木さん。"+hello());
        System.out.println();
        System.out.println("佐藤さん。"+hello());


	}



	public static int totalPrice(int fruitprice) {
		double tax=1.08;
		int haiso=350;
		return (int)(fruitprice*tax)+haiso;
	}
	
	public static String hello() {
		return"こんにちは";
	}
}