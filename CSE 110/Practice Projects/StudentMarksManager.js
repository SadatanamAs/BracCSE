// A Students mark processor
// Takes input of marks in numbers.
// Calculates TotalMark, AverageMark, Grade, Highest mark and total Passed Subjects.



import java.util.*;

class Main {
    public static void main(String[] args) {
        int [] sdtMarks = new int[4];
        Scanner input = new Scanner(System.in);
        
        System.out.print("Enter the marks for Bangla: ");
        sdtMarks[0] = input.nextInt();
        System.out.print("Enter the marks for English: ");
        sdtMarks[1] = input.nextInt();
        System.out.print("Enter the marks for Math: ");
        sdtMarks[2] = input.nextInt();
        System.out.print("Enter the marks for Science: ");
        sdtMarks[3] = input.nextInt();
        
        int sum = 0;
        int passedSub = 0;
        int highestMark = 0;
        for(int i =0;i<sdtMarks.length; i++){
            sum += sdtMarks[i];
            if (sdtMarks[i]>32){
                passedSub++;
            }
            if (sdtMarks[i]>highestMark){
                highestMark = sdtMarks[i];
            }
        }
        
        int avgMark = sum/sdtMarks.length;
        String grade = "";
        if (avgMark>79){
            grade = "A+";
        }else if (avgMark>69){
            grade = "A";
        }else if (avgMark>59){
            grade = "B";
        }else if (avgMark>49){
            grade = "c";
        }else if (avgMark>39){
            grade = "D";
        }else if (avgMark>32){
            grade = "E";
        }else{
            grade = "F";
        }

        System.out.println(Arrays.toString(sdtMarks));
        System.out.println("Total mark is: "+ sum);
        System.out.println("Average mark is: "+ avgMark);
        System.out.println("Total Passed sub is: "+ passedSub);
        System.out.println("Highest mark is: "+ highestMark);
        System.out.println("Your Grade is: "+ grade);
    }
}
