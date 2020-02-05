# JavaScript Diagnostics II

## Times Table 13

Complete the function `timesTable13`, which takes an integer `n` and prints out the first `n` multiples of `13`.

Assume that `n` is always positive, i.e., you don't have to deal with `0` or negative inputs.

For example:

```javascript
timesTable13(6);
```

This should print out:

```text
13 times 1 is 13
13 times 2 is 26
13 times 3 is 39
13 times 4 is 52
13 times 5 is 65
13 times 6 is 78
```

## Perfect Shuffle

Complete the `perfectShuffle` function in [exercises/perfectShuffle.js](exercises/perfectShuffle.js) by writing a function that performs a "perfect shuffle" of an array. The array might represent, say, a deck of cards.

A "perfect shuffle" doesn't involve any randomness. It is when you split a deck of cards exactly in half and shuffle them back together so that the cards from each half alternate.

**Note**: You can assume the input array always contains an ***even*** number of elements, so that it's always possible to split the array exactly in half.

Here's an example of a perfect shuffle:

```text
A                     A
B         A  D        D
C    ---> B  E  --->  B
D         C  F        E
E                     C
F                     F
```

In our case, we want a function that works like this:

```javascript
// returns ['A', 'D', 'B', 'E', 'C', 'F']
perfectShuffle(['A', 'B', 'C', 'D', 'E', 'F']);

// returns [45, 65, 55, 75]
perfectShuffle([45, 55, 65, 75]);
```
