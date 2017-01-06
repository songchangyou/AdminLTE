var qimeng;
(function (qimeng) {
    /**
     * 页面左侧导航
     */
    var SideBar = (function () {
        function SideBar() {
            var _this = this;
            /*
            窗口大小改变时,判断左侧导航栏是否隐藏(x向左移动左侧导航栏的宽度)
            拖动滚动条时，计算左侧导航栏的宽度
            */
            /**
             * AdminLTE中@screen-xs-max的值
             *
             * @private
             * @type {number}
             * @memberOf SideBar
             */
            this.screenXSMax = 767;
            /**
             * AdminLTE中@screen-sm的值
             *
             * @private
             * @type {number}
             * @memberOf SideBar
             */
            this.screenSM = 768;
            /**
             * 是否在拖动，拖动时设置为true,设置左侧导航栏后设置为false
             */
            this.dragging = false;
            /**
             * 鼠标拖动时显示拖动位置的dom元素id
             */
            this.draggingId = "_" + new Date().getTime();
            /**
             * 拖动条
            */
            this.$dragbar = $(".side-dragbar");
            /**
             *
             * 左侧导航栏
             * @type {string}
             * @memberOf SideBar
             */
            this.$sidebar = $(".main-sidebar");
            /**
             *
             * 右侧内容
             * @type {string}
             * @memberOf SideBar
             */
            this.$content = $(".content-wrapper");
            /**
             * 点击展开/隐藏左侧导航栏事件
             */
            this.sidebarToggleClickHanlder = function () {
                window.setTimeout(function () {
                    var $body = $("body");
                    if ($body.width() > _this.screenXSMax) {
                        if ($body.hasClass("sidebar-collapse")) {
                            _this.hideSidebar();
                        }
                        else {
                            _this.showSidebar();
                        }
                    }
                    else {
                        if ($body.hasClass("sidebar-open")) {
                            _this.showSidebar();
                        }
                        else {
                            _this.hideSidebar();
                        }
                    }
                }, 500);
            };
            this.initMediaQueryHandler();
            this.dragHandler();
            $(".sidebar-toggle").on("click", function () {
                _this.sidebarToggleClickHanlder();
            });
            /* AdminLTE中小屏时，点击右侧内容会去掉body中的sidebar-open，代码如下
            此处需要隐藏左侧导航栏，不然会出现再次点击隐藏导航栏不起作用
            $(".content-wrapper").click(function () {
                //Enable hide menu when clicking on the content-wrapper on small screens
                if ($(window).width() <= (screenSizes.sm - 1) && $("body").hasClass("sidebar-open")) {
                    $("body").removeClass('sidebar-open');
                }
            });
            */
            this.$content.on("click", function () {
                if ($("body").width() <= _this.screenXSMax) {
                    var matrix = qimeng.Utils.getTransform(_this.$sidebar);
                    if (matrix.x >= 0) {
                        _this.hideSidebar();
                    }
                }
            });
        }
        SideBar.prototype.dragHandler = function () {
            var that = this;
            that.$dragbar.mousedown(function (e) {
                e.preventDefault();
                that.dragging = true;
                var main = that.$content;
                var $ghostbar = $('<div class="dynamic-side-dragbar" id="' + that.draggingId + '"></div>');
                $ghostbar.css({
                    height: main.outerHeight(),
                    top: main.offset().top,
                    left: main.offset().left
                });
                $ghostbar.appendTo('body');
                $(document).mousemove(function (e) {
                    $ghostbar.css("left", e.pageX + 2);
                });
            });
            $(document).mouseup(function (e) {
                if (that.dragging) {
                    var $sideDragbar = that.$dragbar;
                    var pageX = e.pageX;
                    that.$sidebar.width(pageX);
                    $sideDragbar.css("left", (pageX - $sideDragbar.width()) + "px");
                    //右侧内容偏移 如果是小屏是不执行右侧内容偏移，不然会在左侧导航栏宽度不变的情况下，额外占据一部分空间
                    if ($("body").width() > that.screenXSMax) {
                        that.$content.css("margin-left", pageX + "px");
                    }
                    $(".main-footer").css("margin-left", pageX + "px");
                    $("#" + that.draggingId).remove();
                    $(document).off('mousemove');
                    window.setTimeout(function () { return that.initMediaQueryHandler.apply(that); }, 500);
                    that.dragging = false;
                }
            });
        };
        /**
         *
         * 响应式布局处理
         * @memberOf SideBar
         */
        SideBar.prototype.initMediaQueryHandler = function () {
            var $body = $("body");
            var that = this;
            //小屏时,判断显示或者隐藏左侧导航栏
            enquire.register("(max-width:" + this.screenXSMax + "px)", {
                match: function () {
                    //右侧内容偏移 大屏转小屏时 如果是小屏是不执行右侧内容偏移，不然会在左侧导航栏宽度不变的情况下，额外占据一部分空间
                    that.$content.css("margin-left", "0px");
                    if ($body.hasClass("sidebar-open") || $body.hasClass("sidebar-collapse")) {
                        that.showSidebar();
                    }
                    else {
                        that.hideSidebar();
                    }
                }
            });
            //宽屏时，如果有sidebar-collapse css类则隐藏导航栏
            enquire.register("(min-width:" + this.screenSM + "px)", {
                match: function () {
                    //右侧内容偏移 小屏变大屏时，需设置偏移
                    that.$content.css("margin-left", that.$sidebar.width() + "px");
                    that.showSidebar();
                }
            });
        };
        /**
         *
         * 显示左侧导航栏
         *
         * @memberOf SideBar
         */
        SideBar.prototype.showSidebar = function () {
            this.showOrHideSidebar(true);
        };
        /**
         *
         * 隐藏左侧导航栏
         *
         * @memberOf SideBar
         */
        SideBar.prototype.hideSidebar = function () {
            this.showOrHideSidebar(false);
        };
        /**
         * 显示或隐藏导航栏
         *
         * @private
         * @param {boolean} isShow
         *
         * @memberOf SideBar
         */
        SideBar.prototype.showOrHideSidebar = function (isShow) {
            var sidebarX = 0;
            if (!isShow) {
                sidebarX = this.$sidebar.width();
                if (sidebarX > 50) {
                    sidebarX = 0 - sidebarX;
                }
                else {
                    sidebarX = 0;
                }
            }
            qimeng.Utils.translate(this.$sidebar, sidebarX + "px", 0);
        };
        return SideBar;
    }()); //end class
    qimeng.SideBar = SideBar;
})(qimeng || (qimeng = {})); //end namespace
$(function () {
    var sidebar = new qimeng.SideBar();
});
//# sourceMappingURL=qimeng-sidebar.js.map