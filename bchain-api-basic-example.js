var BchainApi = require('blockchain-api-basic')


var address = "19e2eU15xKbM9pyDwjFsBJFaSeKoDxp8YT"

BchainApi.balance(address, function(balance){
  console.log("address:", address, "balance:", balance)
})
