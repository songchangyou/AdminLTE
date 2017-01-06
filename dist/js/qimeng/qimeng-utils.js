var qimeng;
(function (qimeng) {
    var Utils = (function () {
        function Utils() {
        }
        /**
         * 获取css Transform
         *
         * @static
         * @param {JQuery} $obj jquery对象
         * @returns {TransformMatrix}
         *
         * @memberOf Utils
         */
        Utils.getTransform = function ($obj) {
            var transformMatrix = $obj.css("-webkit-transform") ||
                $obj.css("-moz-transform") ||
                $obj.css("-ms-transform") ||
                $obj.css("-o-transform") ||
                $obj.css("transform");
            var matrix = transformMatrix.replace(/[^0-9\-.,]/g, '').split(',');
            var xstr = matrix[12] || matrix[4]; //translate x
            var ystr = matrix[13] || matrix[5]; //translate y
            var x = 0;
            var y = 0;
            if (xstr && xstr.length > 0) {
                x = parseInt(xstr, 10);
            }
            if (ystr && ystr.length > 0) {
                y = parseInt(ystr, 10);
            }
            return new TransformMatrix(x, y);
        };
        /**
         *
         * css3 translate
         * @param {JQuery} $obj jquery对象
         * @param {(number|string)} x x坐标
         * @param {(number|string)} y y坐标
         *
         * @memberOf SideBar
         */
        Utils.translate = function ($obj, x, y) {
            var css = {
                "-webkit-transform": "translate(" + x + ", " + y + ")",
                "-ms-transform": "translate(" + x + ", " + y + ")",
                "-o-transform": "translate(" + x + ", " + y + ")",
                "transform": "translate(" + x + ", " + y + ")"
            };
            $obj.css(css);
        };
        return Utils;
    }());
    qimeng.Utils = Utils;
})(qimeng || (qimeng = {}));
//# sourceMappingURL=qimeng-utils.js.map