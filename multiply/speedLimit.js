

       function speedLimita(arr) {
      let a = Number(arr[0]);
        //let result=``;
           for (let i = 1; i < arr.length; i++) {

               switch (arr[i]){


                   case (`chop`):
                       a=a/2;
                       break;
                   case (`dice`): a=Math.sqrt(a); break;

                   case (`spice`): a++; break;
                   case (`bake`):  a=a*3; break;
                   case (`fillet`): a=a*0.80; break;
               }


              console.log(a);

           }
       }

          console.log(speedLimita([`32`,`chop`,`dice`]));