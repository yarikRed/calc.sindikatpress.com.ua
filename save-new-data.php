<?
$package = array ('formPrice'=>$_GET['formPrice'],'exchangeRates'=>$_GET['exchangeRates'],'discount'=>$_GET['discount'],'paperPriceGazetka45'=>$_GET['paperPriceGazetka45'],'paperPriceOfset55'=>$_GET['paperPriceOfset55'],'paperPriceOfset60'=>$_GET['paperPriceOfset60'],'paperPriceOfset65'=>$_GET['paperPriceOfset65'],'paperPriceOfset70'=>$_GET['paperPriceOfset70'],'paperPriceOfset80'=>$_GET['paperPriceOfset80'],'paperPriceMelovka65'=>$_GET['paperPriceMelovka65'],'paperPriceMelovka70'=>$_GET['paperPriceMelovka70'],'paperPriceMelovka80'=>$_GET['paperPriceMelovka80'],'paperPriceMelovka90'=>$_GET['paperPriceMelovka90'],'paperPriceMelovka115'=>$_GET['paperPriceMelovka115'],'paperPriceMelovka130'=>$_GET['paperPriceMelovka130'],'paperPriceMelovka150'=>$_GET['paperPriceMelovka150'],'paperPriceMelovka170'=>$_GET['paperPriceMelovka170'],'paperPriceLegkomelovka52'=>$_GET['paperPriceLegkomelovka52'],'paperPriceLegkomelovka60'=>$_GET['paperPriceLegkomelovka60'],'paperPriceKarton200'=>$_GET['paperPriceKarton200'],'paperPriceKarton250'=>$_GET['paperPriceKarton250'],'paperPriceKarton300'=>$_GET['paperPriceKarton300'],'paperPriceKarton350'=>$_GET['paperPriceKarton350'],'raflatak'=>$_GET['raflatak']);
$jsondata = json_encode($package);
echo $jsondata;
$fh=fopen( $_SERVER['DOCUMENT_ROOT']."/js/package.json", "c+");
fwrite($fh, json_encode($package));
fclose($fh);
?>