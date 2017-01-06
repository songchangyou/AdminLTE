namespace qimeng{
    /**
     * 页面左侧导航
     */
    export class SideBar{
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
        private screenXSMax:number = 767;
        /**
         * AdminLTE中@screen-sm的值
         * 
         * @private
         * @type {number}
         * @memberOf SideBar
         */
        private screenSM:number = 768;

        /**
         * 是否在拖动，拖动时设置为true,设置左侧导航栏后设置为false
         */
        private dragging:boolean = false;

        /**
         * 鼠标拖动时显示拖动位置的dom元素id
         */
        draggingId:string = "_"+new Date().getTime();

        /**
         * 拖动条
        */
        $dragbar:JQuery = $(".side-dragbar");

        /**
         * 
         * 左侧导航栏
         * @type {string}
         * @memberOf SideBar
         */
        private $sidebar:JQuery = $(".main-sidebar");
        
        /**
         * 
         * 右侧内容
         * @type {string}
         * @memberOf SideBar
         */
        private $content:JQuery = $(".content-wrapper");

        constructor(){
            this.initMediaQueryHandler();
            this.dragHandler();
            $(".sidebar-toggle").on("click",()=>{
                this.sidebarToggleClickHanlder();
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
            this.$content.on("click",()=>{
                if($("body").width() <= this.screenXSMax){
                    var matrix:TransformMatrix = Utils.getTransform(this.$sidebar);
                    if(matrix.x >= 0){
                        this.hideSidebar();
                    }
                }
            });
        }

        /**
         * 点击展开/隐藏左侧导航栏事件
         */
        sidebarToggleClickHanlder = () =>{
            window.setTimeout(()=>{
                    var $body:JQuery = $("body");
                    if($body.width() > this.screenXSMax){//宽屏
                        if($body.hasClass("sidebar-collapse")){
                            this.hideSidebar();
                        }else{
                            this.showSidebar();
                        }
                    }else{//窄屏
                        if($body.hasClass("sidebar-open")){
                            this.showSidebar();
                        }else{
                            this.hideSidebar();
                        }
                    }
                }
            ,500);  
        }

        dragHandler(){
            var that:SideBar = this;
            that.$dragbar.mousedown(function(e){
                e.preventDefault();
                that.dragging = true;
                var main = that.$content;
                var $ghostbar = $('<div class="dynamic-side-dragbar" id="'+that.draggingId+'"></div>');
                $ghostbar.css({
                    height: main.outerHeight(),
                    top: main.offset().top,
                    left: main.offset().left
                });
                $ghostbar.appendTo('body');
                
                $(document).mousemove(function(e){
                    $ghostbar.css("left",e.pageX+2);
                });
                
            });

            $(document).mouseup(function(e){
                if (that.dragging) {
                    var $sideDragbar:JQuery = that.$dragbar;
                    var pageX:number = e.pageX;
                    that.$sidebar.width(pageX);
                    $sideDragbar.css("left",(pageX-$sideDragbar.width())+"px");
                    //右侧内容偏移 如果是小屏是不执行右侧内容偏移，不然会在左侧导航栏宽度不变的情况下，额外占据一部分空间
                    if($("body").width() > that.screenXSMax){//宽屏
                        that.$content.css("margin-left",pageX+"px");
                    }
                    $(".main-footer").css("margin-left",pageX+"px");
                    $("#"+that.draggingId).remove();
                    $(document).off('mousemove');
                    window.setTimeout(()=>that.initMediaQueryHandler.apply(that),500);
                    that.dragging = false;
                }
            });
        }
        
        /**
         * 
         * 响应式布局处理
         * @memberOf SideBar
         */
        initMediaQueryHandler(){
            var $body:JQuery = $("body");
            var that:SideBar = this;
            //小屏时,判断显示或者隐藏左侧导航栏
            enquire.register("(max-width:"+this.screenXSMax+"px)", {
                match : function() {
                    if($body.hasClass("sidebar-open")){
                        that.showSidebar();
                    }else{
                        that.hideSidebar();
                    }
                }
            });
            //宽屏时，如果有sidebar-collapse css类则隐藏导航栏
            enquire.register("(min-width:"+this.screenSM+"px)", {
                match : function() {
                    if($body.hasClass("sidebar-collapse")){
                        that.hideSidebar();
                    }else{
                        that.showSidebar();
                    }
                }
            });
        }

        /**
         * 
         * 显示左侧导航栏
         * 
         * @memberOf SideBar
         */
        showSidebar(){
            this.showOrHideSidebar(true);
        }

        /**
         * 
         * 隐藏左侧导航栏
         * 
         * @memberOf SideBar
         */
        hideSidebar(){
            this.showOrHideSidebar(false);
        }

        /**
         * 显示或隐藏导航栏
         * 
         * @private
         * @param {boolean} isShow
         * 
         * @memberOf SideBar
         */
        private showOrHideSidebar(isShow:boolean){
            var sidebarX:number = 0;
            if(!isShow){
                sidebarX = this.$sidebar.width();
                if(sidebarX > 50){//图标宽度
                    sidebarX = 0-sidebarX;
                }else{
                    sidebarX = 0;
                }
            }
            Utils.translate(this.$sidebar,sidebarX+"px",0);
        }

        

    }//end class
}//end namespace

$(function(){
    let sidebar = new qimeng.SideBar();
});