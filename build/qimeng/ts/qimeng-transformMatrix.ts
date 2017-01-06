namespace qimeng{
    /**
     * css中transform 使用的坐标
     * 
     * @export
     * @class TransformMatrix
     */
    export class TransformMatrix{
        /**
         * Creates an instance of TransformMatrix.
         * 
         * @param {number} x x坐标
         * @param {number} y y坐标
         * 
         * @memberOf TransformMatrix
         */
        constructor(public x:number=0,public y:number=0){

        }
    }
}