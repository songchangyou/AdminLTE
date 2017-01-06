/// <reference types="jquery" />
declare namespace qimeng {
    class Utils {
        /**
         * 获取css Transform
         *
         * @static
         * @param {JQuery} $obj jquery对象
         * @returns {TransformMatrix}
         *
         * @memberOf Utils
         */
        static getTransform($obj: JQuery): TransformMatrix;
        /**
         *
         * css3 translate
         * @param {JQuery} $obj jquery对象
         * @param {(number|string)} x x坐标
         * @param {(number|string)} y y坐标
         *
         * @memberOf SideBar
         */
        static translate($obj: JQuery, x: number | string, y: number | string): void;
    }
}
