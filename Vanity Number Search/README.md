Twilio customers sometimes request to purchase vanity phone numbers. These vanity numbers are designed to be unique to the customer's brand and memorable to their end user. An example of this is 1-800-FLOWERS, which translates to 1-800-3569377. Here, each letter in the vanity code (FLOWERS) corresponds to a digit on the ** T9 keypad map**. So, F maps to 3, L to 5, O to 6 and so on, giving us 3569377. Customers typically search Twilio's phone number inventory for such vanity codes.

![image](https://user-images.githubusercontent.com/24698809/177216419-d5238c38-424d-4dbd-a5d8-d4319e779c1e.png)


Given an array of one or more vanity codes and an array of phone numbers, write a function to find all phone numbers that match one or more vanity codes. ****The output must be a sorted array of unique phone numbers from the input array of numbers.

Function Description

Complete the function vanity in the editor below.

vanity has the following parameter(s):

_    codes[codes[0],...codes[c-1]]_: an array of strings (vanity codes)

_    numbers[numbers[0],...numbers[n-1]]:_  an array of strings (phone numbers)

_vanity _should return a sorted array of phone numbers that match one or more vanity codes.

Constraints

The input numbers array may have repeat elements.
The output must be a sorted array of unique numbers.
Vanity codes will only consist of uppercase letters (A-Z).
All vanity codes will be of shorter length than all phone numbers.
The output array should be subset of the input array of phone numbers.
Vanity codes can appear anywhere in the number, including country or area codes.
Phone numbers will be in the E.164 format i.e. a plus (+) followed by up to 15 digits (0-9).

Input Format For Custom Testing

The first line contains an integer, c, denoting the number of elements in codes.

The next c subsequent lines contain one vanity code per line.

The next line contains an integer, n, denoting the number of elements in numbers.

The final n subsequent lines contain one phone number per line.

Sample Case

Sample Input For Custom Testing

3 TWLO CODE HTCH 5 +17474824380 +14157088956 +919810155555 +15109926333 +1415123456

Sample Output

+14157088956 +15109926333 +17474824380

Explanation

TWLO matches +14157088956 (+1415708-TWLO)

CODE matches +15109926333 (+151099-CODE-3)

HTCH matches +17474824380 (+1747-HTCH-380)

Extra Credit

A naive solution may cause matching to time out on large arrays of phone numbers. Try to optimize for this once you have a working solution that is passing most test cases.
