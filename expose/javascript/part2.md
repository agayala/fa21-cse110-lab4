1. At line 12 the code will print out 3 to the user because i tracks the length of prices, and the length is 3 based on the parameter [100, 200, 300].
2. The console will print out 150 because that is the last known value for discountedPrice. The last loop of the for loop makes discounted prices be 150, prices[i] = 300 * (1-.5) = 150.
3. The console will print out 150 because discounted price was 150 which means final price is 150 because (150 * 100)/100 is 150,
4. This function will return an array of the finalPrice prices of the same length as prices however it is not printed because we do not as to print to console.
5. At line 12 there will be an error because the code does not recognize any variable i since 'let' only defines i in the for loop not anywhere else.
6. At line 13 there will be an error because 'let' only defines discountedPrice within the for loop, so it will only be recognized there not outside of that loop.
7. At line 14 150 will be printed because even though it is defined with 'let' its defined within the entire function block.
8. The funtion will still return an array of the finalPrice prices, but not printed because we do not ask to print.
9. At line 11 there will be an error printed because 'i' is defined with "let" which means it is only defined in the for loop not anywhere else.
10. At line 12, 3 wil be printed out to the console because length is defined at the top as the length of the array prices which is 3.
11. This function will return an array discounted with the values of the discountedPrice pushed into it.
12. A) student.name;
    B) student["Grad Year"];
    C) student.greeting();
    D) student[Favorite Teacher].name;
    E) student.courseLoad[0];
13. Arithmetic
    A) '3' + 2: '32' because integers become their exact string representation.
    B) '3' - 2: 1 because there is no subtraction on string so it is the number representation.
    C) 3 + null: 3 because null in javascript is the same as 0.
    D) '3' + null: '3null' becuase it adds the strings together.
    E) true + 3: 4 because true is seen as 1 added to the integer 3 is 4.
    F) false + null: both false and null are seen as 0 in javascript so their total is 0.
    G) '3' + undefined: '3undefined' because since it '3' is a string it treats undefined as a string and adds them together making '3undefined'.
    H) '3' - undefined: NaN because the solution is undefined and NaN is the value javascript gives to undefined. 
14. Comparison
    A) '2' > 1: true because the string 2 becomes number 2. 
    B) '2' < '12': true because the string 2 has a greater index in javascript Unicode.
    C) 2 == '2': true because the string 2 becomes the number 2.
    D) 2 === '2': false because '===' compares type and one is a number and the other a string.
    E) true == 2: false because true is defined as 1 so 1 doesnt' equal 2.
    F) true === Boolean(2): true because boolean will return true as long as the parameter is not empty.
15. The '==' operator checks for value comparison while '===' is a strict comparison and it also checks type.
16. part2-question16.js
17. The result will be an array filled with [2,4,6]. This will happen because when you enter the for loop it pushes the callback result which is array[i] for all iterations which is of length 3. In this case it would be at array[0] that would be 1*2 = 2. Then at array[1] it would be 2 *2 =4. Last at array[2] it would be 3 * 2 = 6. And the newArr with all pushes will be returned which is [2,4,6].
18. part2-question18.js
19. The output is 1,3,4,2 because there is a one second delay to print out the 2 while the others print at the same time.
