/**
 * Created by yarik_000 on 10.11.2014.
 */
var formPrice = 200;
var discount = 1;
var exchangeRates = 25;
var paperPrice = 1.1;

var finalCost;
var printCost;
var materialCost ;
var formCost;
var baseCost;
var remainCost;
var remainPrice;
var quantity;

var numberColors = 4;
var numberPages = 15000;
var formatPage = "A1";


switch (formatPage) {
    case "A1" :
        quantity = numberPages;
        break;
    case "A2" :
        quantity = numberPages / 2;
        break;
    case "A3" :
        quantity = numberPages / 4;
        break;
    case "A4" :
        quantity = numberPages / 8;
        break;
    case "A5" :
        quantity = numberPages / 16;
        break;
    case "A6" :
        quantity = numberPages / 32;
        break;
    default:
        alert("Выберите формат бумаги.");
        break;
}


switch (numberColors) {
    case 1 :
        baseCost = 25 * exchangeRates;
        remainPrice = 10 * exchangeRates;
        break;
    case 2 :
        baseCost = 50 * exchangeRates;
        remainPrice = 12 * exchangeRates;
        break;
    case 3 :
        baseCost = 70 * exchangeRates;
        remainPrice = 15 * exchangeRates;
        break;
    case 4 :
        baseCost = 80 * exchangeRates;
        remainPrice = 20 * exchangeRates;
        break;
    default:
        alert("Выберите цветность печати.");
        break;
}
materialCost = quantity * paperPrice;
formCost = numberColors * formPrice;
remainCost = (quantity - 1000)*remainPrice / 1000;
printCost = baseCost + remainCost;
finalCost = materialCost + formCost + printCost * discount;
function calculation() {
    document.getElementById("printCost").childNodes[0].nodeValue = finalCost + " грн";
}