require.config({
    //基本路径
    baseUrl:'./',
    //对于不符合AMD模式的文件 ，要写法垫片里
    //每个模块要定义（1）exports值（输出的变量名），表明这个模块外部调用时的名称；
    // （2）deps数组，表明该模块的依赖性。
    shim:{
        jquery:{
            exports:'$'
        },
        underscore:{
            exports: '_'
        },
        jquerycookie:{
            deps:['jquery']   //可以都写在里面
        }
    },

    paths:{
        jquery: 'library/jquery.min',
        underscore:'library/underscore-min',
        jquerycookie: 'library/jquery.cookie',
        text: 'library/text'
    }
});

//define定义模块
define(['underscore','jquerycookie'],function(){
    //debugger;
    require(['module/login/script/login'],function(login){
        login.showLogin();
    })
});