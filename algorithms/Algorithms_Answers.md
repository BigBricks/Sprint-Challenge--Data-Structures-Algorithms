Add your answers to the Algorithms exercises here.
###A O(log(n))
###B O(n log(n))
###C O(n)
###D O(n^2)
###E O(n^3)
###F O(1)
###G O(n log(n))
###A2  func(arr) {
### let sum = 0;
###     for(let i = 0; i < arr.length; i++) {
###     for(let j = 0; j < arr.length; j++) {    
###     if(sum < (arr[j] - arr[i])) sum = (arr[j] - arr[i]));
###
###}
###}
### return sum;}
###B2 for(let i = 0; i< building.length; i++) {
### if(eggToss[i] === broken) {
### f = eggToss[i];
### break;   }
###}
###A3 O(n log(n)) because it is already sorted therefore you only go through it once everything should be greater than the pivot
###B3 It should be O(n log(n)) because it is already sorted but it still needs to check the array using quicksort