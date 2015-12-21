/**
 * Created by yarik_000 on 10.11.2014.
 */
var formPrice = 200;
var discount = 1;
var exchangeRates = 25;
var paperPrice = 2800;

var finalCost;
var printCost;
var materialCost ;
var formCost;
var baseCost;
var remainCost;
var remainPrice;
var quantity;

var numberColors;
var numberPages;
var formatPage;

quantity =
formCost = numberColors * formPrice;
remainCost = (quantity - 1000)*remainPrice / 1000;
switch (numberColors) {
    case 1 :
        baseCost = 25 * exchangeRates;
        remainPrice = 10 * exchangeRates;
        break
    case 2 :
        baseCost = 50 * exchangeRates;
        remainPrice = 10 * exchangeRates;
        break
    case 3 :
        baseCost = 70 * exchangeRates;
        remainPrice = 10 * exchangeRates;
        break
    case 4 :
        baseCost = 80 * exchangeRates;
        remainPrice = 10 * exchangeRates;
        break
    default alert("Выберите цвеиность печати.");
        break
}
printCost = baseCost + remainCost;
finalCost = materialCost + formCost + printCost * discount;
function calculation() {
    document.getElementById("printCost").childNodes[0].nodeValue = finalCost + " грн";
}