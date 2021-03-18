import java.util.Scanner;
public class Main {

    /*

    public static int area(int x,int y){
        return x*y;
    }

    public static void greeting(String x,String y) {
        System.out.println("Hello "+ x + " from " + y);
    }

    public static void main(String[] args) {
        Scanner w = new Scanner(System.in);
        System.out.print("Enter the width");
        int width = Integer.parseInt(w.nextLine());

        Scanner l = new Scanner(System.in);
        System.out.print("Enter the length");
        int length = Integer.parseInt(l.nextLine());

        int areaOfRectangle = area(width,length);
        System.out.println("The area of this triangle is " + areaOfRectangle);

        ///

        Scanner n = new Scanner(System.in);
        System.out.print("What is your name?");
        String name = n.nextLine();

        Scanner cf = new Scanner(System.in);
        System.out.print("Where are you from?");
        String countryFrom = cf.nextLine();

        greeting(name,countryFrom);

        */

    public static int range(int x,int y){
        if (x>y){
            return x-y;
        }else{
            return y-x;
        }

    }


    public static void main(String[] args) {
        int range = range(52,2);
        System.out.print(range);
    }
}

