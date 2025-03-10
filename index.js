function calculateSum(a, b) {
   return a + b;
}

function isEven(a) {
   if (a % 2 === 0) {
      return true;
   }
   return false;
}

function findMax(arr) {
   let max = arr[0];
   for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
         max = arr[i];
      }
   }
   return max;
}

function filterOddNumbers(arr) {
   let oddArr = arr.filter((n) => n % 2 !== 0);
   return oddArr;
}

function countWords(w) {
   let c = 1;
   for (let i = 0; i < w.length; i++) {
      if (w[i] == " ") {
         c++;
      }
   }
   return c;
}

function removeDuplicates(arr) {
   let noDup = [];
   arr.forEach((e) => {
      noDup.push(e);
   });

   for (let i = 0; i < noDup.length - 1; i++) {
      for (let j = i + 1; j < noDup.length; j++) {
         if (noDup[i] === noDup[j]) {
            noDup.splice(j, 1);
         }
      }
   }
   return noDup;
}

let a = [2, 4, 3, 5, 2, 6, 3, 4, 5, 7, 8];

console.log(removeDuplicates(a));

console.log(a);
