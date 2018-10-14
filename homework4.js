1 const triangleStars = function(number) {
   let height = 0;     
    while(number>0); {
       number= number*2 - 1;             
         console.log(number.height);
        };



2 const  multiToSingle = function(arr) {
   let a = 0;
   let b = 0;
   let newArr = [];
    while(arr.length > a) {
       while(arr[a].height > b) {
         newArr[newArr.length] = arr[a][b];
            b = b + 1
        }
           reutur newArr
   }


3 const findMinMax = function(Arr, condition) {
   let a = 1;
   let element = Arr[];
    if ( condition) {
      while(a < Arr.length) {
         if(Arr[a] > element) {
            element = Arr[a];
          }
          a= a + 1;
     }else {
        while(a > Arr.length) {
          if(Arr[a] > element) {
           element = Arr[a];
        }
        a = a  + 1;
      }
    }
  return element;
  };




4 const forEach = function(arr, function())
let a = 0;
while(array.length > a) {
  console.log(f(array[a]));
    a=a+1;
   }
 };


5 const sum = function(Arr) {
    let number = 0;;
     let  sum = 0;
     while(Arr.length > number) {
       sum = sum + Arr[number];
        number = number + 1;
     }
    return sum;
   };



6 const reverse = function(string) {
    let a = string.length - 1;
    let pahoc = ''
      while(a >= 0) {
         pahoc = pahoc + string[a]
           a = a - 1
      }
     return pahoc;
    }




7 const checkerboard = function(number) {
    let a = '*';
    let empty = ' ';
    let b = 1;
    while( number > b) {
     console.log(empty.repeat( k % 2) + a.repeat(number));
     }
     b = b + 1;
   }













