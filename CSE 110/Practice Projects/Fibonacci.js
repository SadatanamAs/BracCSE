//  This code takes an input of max limit of Fibonacci number and returns the fibonacci number below the limit.


import java.util.*;

class Main {
    public static int fibonacci(int a, int b, int max){
        int c= b;
        System.out.print("a = "+a+" --- b = "+b+" --- ");
        b= a +b;
        System.out.print("b = "+b+" --- ");
        a = c;
        System.out.print("a = "+a+"\n");
        if ((a+b)< max){
            b= fibonacci(a,b,max);
        }
        return b;
    }
    public static void main(String[] args) {
        Scanner inp = new Scanner(System.in);
        System.out.print("Enter the maximum limit: ");
        int max= inp.nextInt();
        int a= 0;
        int b= 1;
        int result=fibonacci(a,b,max);
        System.out.println("Fibonacci number just below the limit: " + result);
    }
}
