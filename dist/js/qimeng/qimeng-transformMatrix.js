"use strict";
var qimeng;
(function (qimeng) {
    /**
     * css中transform 使用的坐标
     *
     * @export
     * @class TransformMatrix
     */
    var TransformMatrix = (function () {
        /**
         * Creates an instance of TransformMatrix.
         *
         * @param {number} x x坐标
         * @param {number} y y坐标
         *
         * @memberOf TransformMatrix
         */
        function TransformMatrix(x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            this.x = x;
            this.y = y;
        }
        return TransformMatrix;
    }());
    qimeng.TransformMatrix = TransformMatrix;
})(qimeng || (qimeng = {}));
