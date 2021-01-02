import java.io.*;
import java.util.*;

class Solution {
  
  static int[] findArrayQuadruplet(int[] arr, int s) {
    if (arr == null || arr.length < 4) {
      return new int[0];
    }
    Arrays.sort(arr); // O(n*log(n))
    
    // O(n^3)
    for (int first = 0; first < arr.length - 3; ++first) // 1st loop
      for (int second = first + 1; second < arr.length - 2; ++second) { // 2nd loop
        int partialsum = arr[first] + arr[second];
        int localtarget = s - partialsum;
        int third = second + 1;
        int fourth = arr.length - 1;
        while (third < fourth) { // 3rd loop
          int sum = arr[third] + arr[fourth];
          if (sum == localtarget) {
            int[] result = new int[4];
            result[0] = arr[first];
            result[1] = arr[second];
            result[2] = arr[third];
            result[3] = arr[fourth];
            return result;
          }
          if (sum < localtarget)
            ++third;
          else
            --fourth;
        }
      }
    return new int[0];
  }

  public static void main(String[] args) {

  }

}

function findArrayQuadruplet(arr, s):
    n = arr.length

    # if there are fewer than 4 items in arr, by
    # definition no quadruplet exists whose sum is s
    if (n < 4):
        return []

    # sort arr in an ascending order
    arr.sort()

    for i from 0 to n - 4:
        for j from i + 1 to n - 3:
            # r stores the complementing sum
            r = s - (arr[i] + arr[j])

            # check for sum r in subarray arr[j+1…n-1]
            low = j + 1, high = n - 1;

            while (low < high):
                if (arr[low] + arr[high] < r):
                    low++

                else if (arr[low] + arr[high] > r):
                    high--

                # quadruplet with given sum found
                else:
                    return [arr[i], arr[j], arr[low], arr[high]]

    return []

/*
input:  arr = [2, 7, 4, 0, 9, 5, 1, 3], s = 20
   
sorted input:  arr = [0, 1, 2, 3, 4, 5, 7, 9], s = 20

[0, 0, 0, 1, 1, 1, 5, 5, 5, 7, 7, 7, 10, 10, 12, 12, 12]
                                           

sum of 2 elements

for (f  = 2 to 3)
 for (s 7 to 3)
   ..
    ..
      
O(n^4) - working, but unefficient
O(n^3) - 2 nested loops and 2 pointers idea inside most nested loop

output: [0, 4, 7, 9] 
(7, 9, 1, 3) and (2, 4, 9, 5) also good

*/