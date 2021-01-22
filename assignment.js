//https://github.com/uddipan01/Assignment-3

//Kilometer to Meter//

function kilometerToMeter(kilo) {
    if (kilo < 0) {
      return 'Kilometer is not valid';
    } else if (kilo >= 0) {
      var meter = kilo * 1000;
      return meter;
    } else {
      return 'Please input a valid number!';
    }
  }
// var  kiloMan = kilometerToMeter(15);
// console.log(kiloMan);

//Budget Calculator//

function budgetCalculator(ghori, mobile, laptop) {
    if (ghori < 0|| mobile < 0||laptop < 0) {
      return 'Price a positive value';
    } else if (ghori >= 0||mobile >= 0|| laptop >= 0) {
      var ghoriTotal = ghori * 50;
      var mobileTotal = mobile * 100;
      var laptopTotal = laptop * 500;
      var totalElectronics = ghoriTotal + mobileTotal + laptopTotal;
      return totalElectronics;
    }
     else {
      return 'Input a valid quantity';
    }
  }

//var totalPrice = budgetCalculator(1, 1, 1);
//console.log(totalPrice);


//Hotel Cost//


function hotelCost(duration) {
    var vara = 0;
    if (duration <= 10) {
        overNightVara = duration * 100;
    } else if (duration <= 20) {
        var firstTen = 10 * 100;
        var remaining = duration - 10;
        var afterTen = remaining * 80;
        overNightVara = firstTen + afterTen;
    } else {
        var firstTen = 10 * 100;
        var afterTen = 10 * 80;
        var remaining = duration - 20;
        var afterTwenty = remaining * 50;
        overNightVara = firstTen + afterTen + afterTwenty;
    }
    return overNightVara;
}
// var totalCost = hotelCost(45);
// console.log(totalCost);


//megaFriend//

function megaFriend(largeName) {
    var bigger = largeName[0];
    for (var i = 0; i < largeName.length; i++) {
        var names = largeName[i];
        if (names > bigger) {
            bigger = names;
        }
    }
    return bigger;
}
// var largeName = ['Rahim','Karim','Shakil Hossain','Victor banargi','Sumon Deowan'];
// var output = megaFriend(largeName);
// console.log('output', output);



    