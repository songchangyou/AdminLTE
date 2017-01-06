module.exports = {
    "env": {
        "browser": true,
        //jquery 全局变量不提醒未定义
        "jquery":true
    },
    "globals":{
        //自定义全局变量、函数
        "moment":false,
        "$dp":false,
        "echarts":false,
        "enquire":false
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "off",
            "tab"
        ],
        "no-undef":[
            "warn"
        ],
        "no-unused-vars":[
            "warn"
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "no-mixed-spaces-and-tabs":"warn",
        "no-console":"error",
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};