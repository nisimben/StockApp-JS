import { question } from "readline-sync";
import {searchStock,filterStocksByPrice,OperateOnStock} from "./services/stockService.js" 
function main(){
    let exit = false
while(!exit){
    console.log("Choose 1 for Search Stock By ID or Name");
    console.log("Choose 2 for Show Stock Below Or Given Price ");
    console.log("Choose 3 for Buy Or Sell Stock");
    console.log("Choose 4 for Exit");
    let choice = question(`Enter Number : `)
    switch (choice) {
        case "1":
            let searchBy = question(`Enter name or id :`)
            const result = searchStock(searchBy)
            console.log( 'Your Stock is : ',result);
            break;
        case "2":
            const price = question(`Enter Price :`)
            const isUpPrice = question(`Enter True Filter pricese Above Or False  for Below Price :`)
            const resultStocks = filterStocksByPrice(price, isUpPrice)
            console.log('Your Stocks Are :' ,resultStocks);
            break;
        case "3":
            const operation =question(`Enter buy or sell :`);
            const identifier = question(`Enter name or id :`);
            OperateOnStock(operation, identifier);

            break;
        case "4":
            console.log('Good bye');  
            exit = true
            break;
    }
      
}
}
main()