/// <reference types="jquery" />
declare namespace qimeng {
    /**
     * 页面左侧导航
     */
    class SideBar {
        /**
         * AdminLTE中@screen-xs-max的值
         *
         * @private
         * @type {number}
         * @memberOf SideBar
         */
        private screenXSMax;
        /**
         * AdminLTE中@screen-sm的值
         *
         * @private
         * @type {number}
         * @memberOf SideBar
         */
        private screenSM;
        /**
         * 是否在拖动，拖动时设置为true,设置左侧导航栏后设置为false
         */
        private dragging;
        /**
         * 鼠标拖动时显示拖动位置的dom元素id
         */
        draggingId: string;
        /**
         * 拖动条
        */
        $dragbar: JQuery;
        /**
         *
         * 左侧导航栏
         * @type {string}
         * @memberOf SideBar
         */
        private $sidebar;
        /**
         *
         * 右侧内容
         * @type {string}
         * @memberOf SideBar
         */
        private $content;
        constructor();
        /**
         * 点击展开/隐藏左侧导航栏事件
         */
        sidebarToggleClickHanlder: () => void;
        dragHandler(): void;
        /**
         *
         * 响应式布局处理
         * @memberOf SideBar
         */
        initMediaQueryHandler(): void;
        /**
         *
         * 显示左侧导航栏
         *
         * @memberOf SideBar
         */
        showSidebar(): void;
        /**
         *
         * 隐藏左侧导航栏
         *
         * @memberOf SideBar
         */
        hideSidebar(): void;
        /**
         * 显示或隐藏导航栏
         *
         * @private
         * @param {boolean} isShow
         *
         * @memberOf SideBar
         */
        private showOrHideSidebar(isShow);
    }
}
