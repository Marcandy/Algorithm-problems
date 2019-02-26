
function maxprofit(stocks) {
    let maxprofit = 0;
    for (let i = 0; i < stocks.length - 1; i++) {
        for (let j = i + 1; j < stocks.length; j++) {
            let profit = stocks[j] - stocks[i];
            if (profit > maxprofit) {
                maxprofit = profit;
            }
        }
    }
    return maxprofit;
}

// lineer time

function StockPicker(arr) {
    var max_profit = -1;
    var buy_price = 0;
    var sell_price = 0;
    // this allows our loop to keep iterating the buying
    // price until a cheap stock price is found
    var change_buy_index = true;
    // loop through list of stock prices once
    for (var i = 0; i < arr.length-1; i++) {
      // selling price is the next element in list
      sell_price = arr[i+1];
      // if we have not found a suitable cheap buying price yet
      // we set the buying price equal to the current element
      if (change_buy_index) { buy_price = arr[i]; }
      // if the selling price is less than the buying price
      // we know we cannot make a profit so we continue to the
      // next element in the list which will be the new buying price
      if (sell_price < buy_price) {
        change_buy_index = true;
        continue;
      }
      // if the selling price is greater than the buying price
      // we check to see if these two indices give us a better
      // profit then what we currently have
      else {
        var temp_profit = sell_price - buy_price;
        if (temp_profit > max_profit) { max_profit = temp_profit; }
        change_buy_index = false;
      }
    }
    return max_profit;
  }

  let maxProfitDp = (arr) => {
    if (!arr || arr.length < 2) { return }
  
    let minPrice = arr[0]
    let maxProfit = 0
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < minPrice) {
        minPrice = arr[i]
      } else {
        maxProfit = Math.max(arr[i] - minPrice, maxProfit)
      }
    }
  
    return maxProfit
  }