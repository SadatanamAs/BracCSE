import java.util.*;

class Main {
    public static void main(String[] args) {
        
      int randomNum = (int)(Math.random() * 51); // 0 to 50;
      System.out.println(randomNum);
      Scanner input = new Scanner(System.in);
      System.out.print("Guess a number between 0 to 50.\nEnter your number: ");
      int guessedNum = input.nextInt();
      
      if(guessedNum==randomNum){
          System.out.print("Congratulations! You guessed the number correct in your First attempt. The number is randomNum.");
      }
      else{
        for(int i=5;i>=0;i--){
            if (i==0) {
              System.out.println("Game over. \nYou have failed to guess the number. The number was "+ randomNum);
              break;
            }
            System.out.printf("The number you guessed is wrong.you have %d attempts left\n", i);
             if(guessedNum>randomNum){
                  System.out.print("Try guessing a SMALLER number: ");
                }
             else{
                  System.out.print("Try guessing a BIGGER number: ");
                }
            guessedNum = input.nextInt();
            if(guessedNum==randomNum){
              System.out.printf("Congratulations! You guessed the number correct. The number is %d.", randomNum);
                  break;
            }
         }
     }
  }
}
