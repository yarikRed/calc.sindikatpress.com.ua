/**
 * Created by yarik_000 on 10.11.2014.
 */
function calculation() {
var formPrice = 200;
var discount = 1;
var exchangeRates = 22;
var paperPrice = 1.1;

var finalCost;
var printCost;
var materialCost ;
var formCost;
var baseCost;
var remainCost;
var remainPrice;
var quantity;

var numberColors = document.querySelector('input[name = "color-scheme"]:checked').value;
var numberPages = document.getElementById("page-number-first-tab").value;
var formatPage = document.getElementsByClassName("selected-format-paper");

switch (formatPage[0].id) {
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
    case "1" :
        baseCost = 25 * exchangeRates;
        remainPrice = 10 * exchangeRates;
        break;
    case "2" :
        baseCost = 50 * exchangeRates;
        remainPrice = 12 * exchangeRates;
        break;
    case "3" :
        baseCost = 70 * exchangeRates;
        remainPrice = 15 * exchangeRates;
        break;
    case "4" :
        baseCost = 80 * exchangeRates;
        remainPrice = 20 * exchangeRates;
        break;
    default:
        alert("Выберите цветность печати.");
        break;
}
    materialCost = (1.03*quantity + 270) * paperPrice; console.log("materialCost=", materialCost);
    formCost = numberColors * formPrice; console.log("formCost=", formCost);
    remainCost = (quantity - 1000)*remainPrice / 1000; console.log("remainCost=", remainCost);
    printCost = baseCost + remainCost; console.log("printCost=", printCost);
    finalCost = materialCost + formCost + printCost * discount; console.log("finalCost=", finalCost);

    document.getElementById("printCost").childNodes[0].nodeValue = finalCost + " грн";
}