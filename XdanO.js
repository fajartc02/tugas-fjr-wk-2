function xo(str) {
    var longStr = str.length;
    var x = 0;
    var o = 0;
    var state;
    while (longStr >= 0) {
      var countainer = str[longStr]; // to container value from str x || o
      if( countainer === 'o'){ // if value of countainer value o = o++
        o++;
      }else if (countainer === 'x'){ // if value of countainer calue x = x++
        x++;
      }
      longStr--;
    }
    // console.log(x)
    // console.log(o)
    //statement for true or false
    if (x == o) {       // if x == o true
      state = true;
    }else{             // if x != o false
      state = false;
    }
    return state;
  }
    // console.log(state);
  // }
  
  // // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true