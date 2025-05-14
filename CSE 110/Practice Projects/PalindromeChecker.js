// This program takes an input and checks if it is a palindromic word or not


import java.util.*;

class Main {
    public static boolean isPalindrome(String s) {
        int iterator = s.length()/2;
        int last = s.length()-1;
        for (int i = 0; i < iterator; ++i) {
            if (s.charAt(i) != s.charAt(last - i)) {
                return false;
            }
        }
        return true;
    }
    public static void main(String[] args) {
        // String s = "pexenexep";
        Scanner input = new Scanner(System.in);
        String s = input.next();
        boolean palindrome = isPalindrome(s);
        if(palindrome == true){
        System.out.println(s+ " IS Palindrome");    
        } else{
            System.out.println(s+ " IS NOT Palindrome");
        }
    }
}
