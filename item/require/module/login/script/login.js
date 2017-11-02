define(['text!module/login/template/login.html'], function (loginTpl) {
    //return $('body').html(loginTpl);
    return {
        showLogin: function () {
            $('body').html(loginTpl);
            this.bindEvent();
        },
        bindEvent: function () {
            var inp = $('.input');
            var d1s = $('.d1');
            inp.on('keyup', function () {
                if ($(this).val().length != 0) {
                    $(this).next('.d1').addClass('del');
                }else{
                    $(this).next('.d1').removeClass('del');
                }
            });
            d1s.on('click',function(){
                $(this).prev('.input').val('');
                $(this).removeClass('del');
            });
            var log = $('.log');
            var checkbox = $('#checkbox');
            var toast = $('.toast');
            log.on('click',function () {
                var user = inp.eq(0).val();
                var pwd = inp.eq(1).val();
                // alert(user);
                // alert(pwd);
                if(user == ''){
                    var msg = '请输入账号';
                    toast.text(msg);
                    toast.css('display','block');
                    return;
                }
                if(pwd == ''){
                    var msg = '请输入密码';
                    toast.text(msg);
                    toast.css('display','block');
                    return;
                }
            });
        }
    }


});