//BAD WORD GENERATOR//

import { ProfanityEngine } from '@coffeeandfun/google-profanity-words';

let profanity = new ProfanityEngine();

let badWords = profanity.all()

//generate random num under x
const randomNumUnder = (x) => Math.round(Math.random() * (x - 1))

//pull random elem from array
const randomElem = (arr) => arr[randomNumUnder(arr.length)];

; // returns all bad words as an array.

