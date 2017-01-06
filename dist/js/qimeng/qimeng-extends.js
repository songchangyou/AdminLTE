//预先定义，不然生成的js会报qimeng is not defined
var qimeng = {};
/*对AdminTLE的扩展 */
$(function () {
    /* 加上拖动条后需要改动滚动条的颜色  */
    if ($.AdminLTE.layout) {
        var oldFun = $.AdminLTE.layout.fixSidebar;
        $.AdminLTE.layout.fixSidebar = function () {
            oldFun();
            //Enable slimscroll for fixed layout
            if ($.AdminLTE.options.sidebarSlimScroll) {
                if (typeof $.fn.slimScroll != 'undefined') {
                    //Destroy if it exists
                    $(".sidebar").slimScroll({ destroy: true }).height("auto");
                    //Add slimscroll
                    $(".sidebar").slimScroll({
                        height: ($(window).height() - $(".main-header").height()) + "px",
                        // color: "rgba(0,0,0,0.2)",
                        color: "black",
                        size: "5px"
                    });
                }
            }
        };
        if ($("body").hasClass("fixed")) {
            $.AdminLTE.layout.fixSidebar();
        }
    }
});
//# sourceMappingURL=qimeng-extends.js.map