declare namespace qimeng {
    /**
     * css中transform 使用的坐标
     *
     * @export
     * @class TransformMatrix
     */
    class TransformMatrix {
        x: number;
        y: number;
        /**
         * Creates an instance of TransformMatrix.
         *
         * @param {number} x x坐标
         * @param {number} y y坐标
         *
         * @memberOf TransformMatrix
         */
        constructor(x?: number, y?: number);
    }
}
