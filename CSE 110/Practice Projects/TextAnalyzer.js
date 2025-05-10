// Takes an input paragraph
// Counts Total words, 
// Counts total letters, 
// Counts Total Vowels and Consonant
// Finds longest word and counts longest word length
// Prints the array of Words too



import java.util.*;

class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        
        System.out.print("Enter your text: ");
        String text = input.nextLine().toLowerCase();
        
        
        
        int unrefinedletterCount = text.length();
        String regex = "[ ]";
        String[] words = text.split(regex);
        int wordCount = words.length;
        
        int longestWordCount = 0;
        String longestWord = "";
        for (String word : words){
            if (word.length()>longestWordCount){
                longestWordCount = word.length();
                longestWord = word;
            }
        }
        // 97, 101, 105, 111, and 117
        // 65, 69, 73, 79, and 85
        int vowels = 0;
        int consonants = 0;
        int letterCount = 0;
        for(int i =0;i<unrefinedletterCount; i++){
            int ascii = (int) text.charAt(i);
            if (ascii>96 && ascii<123){
                letterCount++;
                if (ascii==97 ||ascii==101 ||ascii==105 ||ascii==111 ||ascii==117){
                    vowels++;
                }
                else{
                    consonants++;
                }
            }
        }
        

        System.out.println(Arrays.toString(words));
        System.out.println("Total words: "+ wordCount);
        System.out.println("Total letters: "+ letterCount);
        System.out.println("Longest word is: "+ longestWord);
        System.out.println("Longest Word count is: "+ longestWordCount);
        System.out.println("Total vowels is: "+ vowels);
        System.out.println("Total consonants: "+ consonants);
    }
}
