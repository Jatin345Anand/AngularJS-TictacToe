app.factory("MyFactory", function () {
    var obj = {
        ButtonArray: [],
        v1: "",
        v2: "",
        v3: "",
        v4: "",
        v5: "",
        v6: "",
        v7: "",
        v8: "",
        v9: "",
        ButtonValueArray: [],
        ButtonIndexArray: [],
        isOver: false,
        FillZerorrX: function (V, index) {
            var BO = new BUTTON(V, index);
            this.ButtonArray.push(BO);
            if (index === 1) {
                this.v1 = V;
            }
            if (index === 2) {
                this.v2 = V;
            }
            if (index === 3) {
                this.v3 = V;
            }
            if (index === 4) {
                this.v4 = V;
            }
            if (index === 5) {
                this.v5 = V;
            }
            if (index === 6) {
                this.v6 = V;
            }
            if (index === 7) {
                this.v7 = V;
            }
            if (index === 8) {
                this.v8 = V;
            }
            if (index === 9) {
                this.v9 = V;
            }
        },
        GetButtonArray: function () {
            return this.ButtonArray;
        },
        isGameOver: function () {

            console.log(this.v1 + "," + this.v2 + "," + this.v3);
            if (this.isRow(this.v1, this.v2, this.v3)) {
                this.isOver = true;
                return this.isOver;
            }
            if (this.isRow(this.v4, this.v5, this.v6)) {
                this.isOver = true;
                return this.isOver;
            }
            if (this.isRow(this.v7, this.v8, this.v9)) {
                this.isOver = true;
                return this.isOver;
            }
            if (this.isRow(this.v1, this.v4, this.v7)) {
                this.isOver = true;
                return this.isOver;
            }
            if (this.isRow(this.v2, this.v5, this.v8)) {
                this.isOver = true;
                return this.isOver;
            }
            if (this.isRow(this.v3, this.v6, this.v9)) {
                this.isOver = true;
                return this.isOver;
            }
            if (this.isRow(this.v1, this.v5, this.v9)) {
                this.isOver = true;
                return this.isOver;
            }
            if (this.isRow(this.v3, this.v5, this.v7)) {
                this.isOver = true;
                return this.isOver;
            }
        },
        isRow: function (A, B, C) {
            console.log(this.isNotBlank(A));
            console.log(this.isNotBlank(B));
            console.log(this.isNotBlank(C));

            if (this.isNotBlank(A) && this.isNotBlank(B) && this.isNotBlank(C)) {
                console.log(A, B, C);
                console.log(this.isSameValue(A, B, C));
                if (this.isSameValue(A, B, C)) {

                    return true;
                }

                return false;
            }
        },
        isNotBlank: function (button) {

            if (button == "") {
                return false;
            } else {
                return true;
            }
        },

        isSameValue: function (one, two, three) {
            if ((one == two && one == three)) {
                return true;
            } else {
                return false;
            }
        },
        isGameFinish: function () {


        }
    }
    return obj;
});