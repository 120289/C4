var app = angular.module('app', []);

app.controller('bedrijfsCtrl', function($scope) {


$scope.bedrijf = bedrijf;
$scope.sortColumn = "num";
$scope.reverseSort = false;


var bedrijf = [
    {bedrijfsnaam:"<?php echo $bedrijf[1];?>",adress:"<?php echo $adres[1];?>",woonplaats:"<?php echo $woonplaats[1];?>",telnr:"<?php echo $telnr[1];?>,num:1"},
    {bedrijfsnaam:"<?php echo $bedrijf[2];?>",adress:"<?php echo $adres[2];?>",woonplaats:"<?php echo $woonplaats[2];?>",telnr:"<?php echo $telnr[2];?>,num:2"},
    {bedrijfsnaam:"<?php echo $bedrijf[3];?>",adress:"<?php echo $adres[3];?>",woonplaats:"<?php echo $woonplaats[3];?>",telnr:"<?php echo $telnr[3];?>,num:3"},
    {bedrijfsnaam:"<?php echo $bedrijf[4];?>",adress:"<?php echo $adres[4];?>",woonplaats:"<?php echo $woonplaats[4];?>",telnr:"<?php echo $telnr[4];?>,num:4"},
 ];

 $scope.sortData = function(col) {
     $scope.reverseSort = ($scope.sortColumn == col) ? $scope.reverseSort : false;
     $scope.sortColumn = col;
 }
});
