import java.util.*;

class Main {
  
    // just my preference. Skip it if you want. I am a python user.
    static void print(String statement) {
         System.out.print(statement);
    }
  
    // To make sure the answer is within the option range.
    static void inputChecker(int ansNum, ArrayList<Integer> list){
        if (ansNum >=5 || ansNum < 0) {
             System.out.print("your option is not a valid one. Enter 0 to skip.\nEnter a correct option: ");
             ansNum = input.nextInt();
             inputChecker(ansNum, list);
         } else {
             int corOpt = ansNum;
             list.add(corOpt);
         }
    }

    // To include the answers into an array of answers
    static void AddToList(ArrayList<Integer> list) {
         int ansNum = input.nextInt();
         inputChecker(ansNum, list);
         
    }
    
    static Scanner input = new Scanner(System.in);
    public static void main(String[] args) {
        
        ArrayList<Integer> userAns = new ArrayList<>();

        // Question models and user input. Plan to Make it a for loop and use a shorter program and a database.
        print("Ques 01: What is the primary ingredient in traditional French béchamel sauce? \n1) Milk \n2) Butter \n3) Flour \n4) Cheese \nEnter your answer: ");
        AddToList(userAns);

        print("Ques 02: What platform is the most often used for video game live streaming? \n1) Twitch \n2) YouTube \n3) Facebook Live \n4) Vimeo \nEnter your answer: ");
        AddToList(userAns);
        

        print("Ques 03: In which novel does the character Atticus Finch appear? \n1) Catcher in the Rye \n2) To Kill a Mockingbird \n3) The Great Gatsby \n4) 1984 \nEnter your answer: ");
        AddToList(userAns);
        
        print("Ques 04: What feature did Instagram introduce in 2016 to compete with Snapchat? \n1) Stories \n2) Reels \n3) IGTV \n4) Live Streaming \nEnter your answer: ");
        AddToList(userAns);

        print("Ques 05: How many bones are there in the adult human body? \n1) 186 \n2) 206 \n3) 226 \n4) 246 \nEnter your answer: ");
        AddToList(userAns);

        print("Ques 06: What does the Yoga term Pranayama refer to? \n1) Physical postures \n2) Breathing exercises \n3) Meditation techniques \n4) Mindfulness \nEnter your answer: ");
        AddToList(userAns);

        print("Ques 07: What is the main ingredient in traditional Japanese miso soup? \n1) Soy sauce \n2) Tofu \n3) Miso paste \n4) Noodles \nEnter your answer: ");
         AddToList(userAns);

        print("Ques 08: Which breed of dog is known for its excellent sense of smell and tracking abilities? \n1) Golden Retriever \n2) German Shepherd \n3) Bloodhound \n4) Bulldog \nEnter your answer: ");
        AddToList(userAns);

        print("Ques 09: In \"To Kill a Mockingbird,\" what is the name of Atticus Finch's daughter? \n1) Mayella \n2) Scout \n3) Jem \n4) Calpurnia \nEnter your answer: ");
        AddToList(userAns);

        print("Ques 10: What part of the brain is responsible for memory and learning? \n1) Cerebellum \n2) Hypothalamus \n3) Hippocampus \n4) Medulla oblongata \nEnter your answer: ");
        AddToList(userAns);
      
        // Given Result array
        int[] corAnswers = {1, 1, 2, 1, 2, 2, 3, 3, 2, 3};


        // Marking based on answer given. Used a arraylist and get mathod.
        int mark = 0;
        for(int i=0;i<userAns.size();i++){
            if(corAnswers[i] == userAns.get(i)){
                mark++;
            }
        }
        
        System.out.println("\nYour mark is: "+mark);
        input.close();
        
    }
}
