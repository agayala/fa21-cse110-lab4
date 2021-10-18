1. The bug was that num1 and num2 were being added as strings not numbers.
2. To fix it I added a '+' before document.getElementById to turn value into a number not a string.