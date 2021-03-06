namespace qimeng{
    export class Utils{

        /**
         * 获取css Transform
         * 
         * @static
         * @param {JQuery} $obj jquery对象
         * @returns {TransformMatrix}
         * 
         * @memberOf Utils
         */
        static getTransform($obj:JQuery):TransformMatrix{
            let transformMatrix:string = $obj.css("-webkit-transform") ||
            $obj.css("-moz-transform")    ||
            $obj.css("-ms-transform")     ||
            $obj.css("-o-transform")      ||
            $obj.css("transform");
            let matrix = transformMatrix.replace(/[^0-9\-.,]/g, '').split(',');
            let xstr:string = matrix[12] || matrix[4];//translate x
            let ystr:string = matrix[13] || matrix[5];//translate y
            let x:number = 0;
            let y:number = 0;
            if(xstr && xstr.length>0){
                x = parseInt(xstr,10);
            }
            if(ystr && ystr.length>0){
                y = parseInt(ystr,10);
            }
            return new TransformMatrix(x,y);
        }

        /**
         * 
         * css3 translate
         * @param {JQuery} $obj jquery对象
         * @param {(number|string)} x x坐标
         * @param {(number|string)} y y坐标
         * 
         * @memberOf SideBar
         */
        static translate($obj:JQuery,x:number|string,y:number|string){
            let css = {
                "-webkit-transform": "translate("+x+", "+y+")",
                "-ms-transform": "translate("+x+", "+y+")",
                "-o-transform": "translate("+x+", "+y+")",
                "transform": "translate("+x+", "+y+")"
            };
            $obj.css(css);
        }

    }
}