import { question } from "readline-sync";
import stockDb from "../DB/stockDb.js";


export function searchStock(identifier){
    return Object.values(stockDb['stocks']).filter((item) => identifier === item.id || identifier === item.name );
    
}

export function filterStocksByPrice(givenPrice, above){
    let up = above =='true'? true : false
    if (up) {
        return Object.values(stockDb['stocks']).filter((item) => givenPrice < item.currentPrice );
    } else {
        return Object.values(stockDb['stocks']).filter((item) => givenPrice > item.currentPrice );
    }
}

export function OperateOnStock(operation, identifier){
    if (!identifier) {
        console.log(`InValid identifier`);
        return;
        
    }
    let stockCount = Number(question(`how many stock to Buy  or Sell?`))
    if (operation === "buy") {
        let result = searchStock(identifier)
        result.forEach((item) => {
            item.availableStocks -= stockCount
        })
        return result
        }

    
    else if (operation ==="sell"){
        let result = searchStock(identifier)
        result.forEach((item) => {
            item.availableStocks += stockCount
        })
        return result
        }

    else{
        console.log(`InValid operation`);
        return;
        
    }

}
