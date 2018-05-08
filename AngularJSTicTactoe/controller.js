app.controller("Myctrl", function ($scope, MyFactory) {
    $scope.title = "ANGULARJS";
    $scope.Val1 = "";
    $scope.Val2 = "";
    $scope.Val3 = "";
    $scope.Val4 = "";
    $scope.Val5 = "";
    $scope.Val6 = "";
    $scope.Val7 = "";
    $scope.Val8 = "";
    $scope.Val9 = "";

    $scope.C1 = function () {
        console.log(`op...`);
        Print0orX(); 
    }
    $scope.C2 = function () {
        console.log(`op...`);
        Print0orX2();
    }
    $scope.C3 = function () {
        console.log(`op...`);
        Print0orX3();
    }
    $scope.C4 = function () {
        console.log(`op...`);
        Print0orX4();
    }
    $scope.C5 = function () {
        console.log(`op...`);
        Print0orX5();
    }
    $scope.C6 = function () {
        console.log(`op...`);
        Print0orX6();
    }
    $scope.C7 = function () {
        console.log(`op...`);
        Print0orX7();
    }
    $scope.C8 = function () {
        console.log(`op...`);
        Print0orX8();
    }
    $scope.C9 = function () {
        console.log(`op...`);
        Print0orX9();
    }
    var isGameDone = false;
    var isZero = false;
    var S = $scope.Val;
    var isplayerNumber = true;
    var BA = MyFactory.GetButtonArray();

    function Print0orX() {
        if (BA.length < 9 && !isGameDone && !$scope.Val1) {
            $scope.Val1 = isZero ? "X" : "0";
            isZero = !isZero;
            isplayerNumber=!isplayerNumber;
            MyFactory.FillZerorrX($scope.Val1, 1);
            isOverGAme();
        }
    }

    function Print0orX2() {
        if (BA.length < 9 && !isGameDone && !$scope.Val2) {
            $scope.Val2 = isZero ? "X" : "0";
            isZero = !isZero;
            isplayerNumber=!isplayerNumber;
            MyFactory.FillZerorrX($scope.Val2, 2);
            isOverGAme();
        }
    }

    function Print0orX3() {
        if (BA.length < 9 && !isGameDone && !$scope.Val3) {
            $scope.Val3 = isZero ? "X" : "0";
            isZero = !isZero;
            isplayerNumber=!isplayerNumber;
            MyFactory.FillZerorrX($scope.Val3, 3);
            isOverGAme();
        }
    }

    function Print0orX4() {
        if (BA.length < 9 && !isGameDone && !$scope.Val4) {
            $scope.Val4 = isZero ? "X" : "0";
            isZero = !isZero;
            isplayerNumber=!isplayerNumber;
            MyFactory.FillZerorrX($scope.Val4, 4);
            isOverGAme();
        }
    }

    function Print0orX5() {
        if (BA.length < 9 && !isGameDone && !$scope.Val5) {
            $scope.Val5 = isZero ? "X" : "0";
            isZero = !isZero;
            isplayerNumber=!isplayerNumber;
            MyFactory.FillZerorrX($scope.Val5, 5);
            isOverGAme();
        }
    }

    function Print0orX6() {
        if (BA.length < 9 && !isGameDone && !$scope.Val6) {
            $scope.Val6 = isZero ? "X" : "0";
            isZero = !isZero;
            isplayerNumber=!isplayerNumber;
            MyFactory.FillZerorrX($scope.Val6, 6);
            isOverGAme();
        }
    }

    function Print0orX7() {
        if (BA.length < 9 && !isGameDone && !$scope.Val7) {
            $scope.Val7 = isZero ? "X" : "0";
            isZero = !isZero;
            isplayerNumber=!isplayerNumber;
            MyFactory.FillZerorrX($scope.Val7, 7);
            isOverGAme();
        }
    }

    function Print0orX8() {
        if (BA.length < 9 && !isGameDone && !$scope.Val8) {
            $scope.Val8 = isZero ? "X" : "0";
            isZero = !isZero;
            isplayerNumber=!isplayerNumber;
            MyFactory.FillZerorrX($scope.Val8, 8);
            isOverGAme();
        }
    }

    function Print0orX9() {
        if (BA.length < 9 && !isGameDone && !$scope.Val9) {
            $scope.Val9 = isZero ? "X" : "0";
            isZero = !isZero;
            isplayerNumber=!isplayerNumber;
            MyFactory.FillZerorrX($scope.Val9, 9);
            isOverGAme();
        }
    }

    function isOverGAme() {
        console.log(`isgameover`);
        if(isplayerNumber===false){
            $scope.PN="ONE";
        }
        else{
            $scope.PN="TWO";
        }
        console.log(`${MyFactory.isGameOver()}`);
        isGameDone = MyFactory.isGameOver();

        if(isGameDone===true){
            $scope.GO="GAME OVER";
            $scope.CN="You Win this game ! Congratulation...";
        }
    }

});