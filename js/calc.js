/**
 * Created by yarik_000 on 10.11.2014.
 */
function calculation() {

    var discount = 1;
    var exchangeRates = 22;
    var paperPrice = 1.1;
    var formPrice = 20;

    var finalCost;
    var printCost;
    var materialCost ;
    var formCost;
    var baseCost;
    var remainCost;
    var remainPrice;
    var quantity;
    var numberForms;

    var numberColors = document.querySelector('input[name = "color-scheme"]:checked').value;
    var numberPages = document.getElementById("page-number-first-tab-tab1").value;
    var formatPage = document.getElementsByClassName("selected-format-paper");


    function loadJSON(callback) {

        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', 'js/package.json', true);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    }

    function load() {

        loadJSON(function(response) {

            var actual_JSON = JSON.parse(response);
            console.log(actual_JSON);
            /*alert(actual_JSON);*/
        });

    }
    load();

    switch (formatPage[0].id) {
        case "A1-tab1" :
            quantity = numberPages;
            break;
        case "A2-tab1" :
            quantity = numberPages / 2;
            break;
        case "A3-tab1" :
            quantity = numberPages / 4;
            break;
        case "A4-tab1" :
            quantity = numberPages / 8;
            break;
        case "A5-tab1" :
            quantity = numberPages / 16;
            break;
        case "A6-tab1" :
            quantity = numberPages / 32;
            break;
        case "B1-tab1" :
            quantity = numberPages;
            break;
        case "B2-tab1" :
            quantity = numberPages / 2;
            break;
        case "B3-tab1" :
            quantity = numberPages / 4;
            break;
        case "B4-tab1" :
            quantity = numberPages / 8;
            break;
        case "B5-tab1" :
            quantity = numberPages / 16;
            break;
        case "B6-tab1" :
            quantity = numberPages / 32;
            break;
        default:
            alert("Выберите формат бумаги.");
            break;
    }
    console.log(numberColors);
    switch (numberColors) {
        case "1+0" :
        case "1+1" :
            numberForms = 1;
            baseCost = 25 * exchangeRates;
            remainPrice = 10 * exchangeRates;
            break;
        case "2+0" :
        case "2+1" :
        case "2+2" :
            numberForms = 2;
            baseCost = 50 * exchangeRates;
            remainPrice = 12 * exchangeRates;
            break;
        case "3+0" :
        case "3+1" :
        case "3+2" :
        case "3+3" :
            numberForms = 3;
            baseCost = 70 * exchangeRates;
            remainPrice = 15 * exchangeRates;
            break;
        case "4+0" :
        case "4+1" :
        case "4+2" :
        case "4+3" :
        case "4+4" :
        case "5+0" :
        case "5+1" :
        case "5+2" :
        case "5+3" :
        case "5+4" :
        case "5+5" :
            numberForms = 4;
            baseCost = 80 * exchangeRates;
            remainPrice = 20 * exchangeRates;
            break;
        default:
            alert("Выберите цветность печати.");
            break;
    }

    materialCost = (1.03*quantity + 270) * paperPrice; console.log("materialCost=", materialCost);
    formCost = numberForms * formPrice; console.log("formCost=", formCost);
    remainCost = (quantity - 1000)*remainPrice / 1000; console.log("remainCost=", remainCost);
    printCost = baseCost + remainCost; console.log("printCost=", printCost);
    finalCost = Math.round(materialCost + formCost + printCost * discount); console.log("finalCost=", finalCost);

    document.getElementById("printCost-tab1").childNodes[0].nodeValue = finalCost + " грн";
}