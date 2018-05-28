/*global i*/ //for c9
/*global j*/ //for c9
function checkCashRegister(price, cash, cid) {
  var worth = [0.01, 0.05, 0.10, 0.25, 1.00, 5.00, 10.00, 20.00, 100.00];
  var changeArr = [];
  var change = cash - price;
  var cashDrawer = 0;
  var changeAvail = 0;
  for(i = 0; i < cid.length; i++) {
    cashDrawer += cid[i][1];
  }
  cashDrawer = cashDrawer.toFixed(2);
  if(cashDrawer < cash - price) { // Is there not enough cash in the drawer?
    return "Insufficient Funds";
  } else if(cashDrawer == cash - price) { // Is there exactly enough cash in the drawer?
    return "Closed";
  } else {
    for(i = 8; i > -1; i--) {
      //Create a copy of the cid array to prevent unwanted changes to it
      var cidCopy = [];
      for (var k = 0; k < cid.length; k++) {
        cidCopy[k] = cid[i].slice();
      }
      var x = worth[i];
      var y = cidCopy[i];
      var z = cidCopy[i][0];
      // If there is cash in the drawer of that denomination,
      // and if that denomination is smaller than the change remaining:
      if(change >= x && cidCopy[i][1] > 0) {
        change -= x;
        change = Number(change.toFixed(2)); // Round change to nearest hundredth
        cid[i][1] -= x;
        if(!changeArr.length) {
          changeArr.unshift(y);
          changeArr[0][1] = x;
        } else if(changeArr[0][0] == z) {
          changeArr[0][1] += x;
        } else {
          changeArr.unshift(y);
          changeArr[0][1] = x;
        }
        i++;
      }
    }

  }  
  // Here is your change, ma'am.
  for(j = 0; j < changeArr.length; j++) {
    changeAvail += changeArr[j][1];
  }
  if(changeAvail < cash - price) {
    return "Insufficient Funds";
  } else {
    return changeArr.reverse();
  }
}