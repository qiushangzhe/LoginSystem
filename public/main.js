var url = "http://127.0.0.1:12345"
$("#login-btn").on('click',function(event){
    var username = $('.username_l').val();
    var password = $('.password_l').val();
    var captcha = $('.captcha').val();
    if(!username||!password||!captcha){
        alert('没填全');
        return ;
    }
    //console.log('账号是:',username,'密码是:',password,'验证码是:',captcha);
    $.post(url+'/user/login',{username:username,password:password,captcha:captcha},function(data){
        console.log(data);
    });
});

$("#register-btn").on('click',function(event){
    var username = $('.username_r').val();
    var password = $('.password_r').val();
    var email = $('.email').val();
    console.log(username,password,email);
    if(!username||!password||!email){
        alert('没填全');
        return ;
    }
    //console.log('账号是:',username,'密码是:',password,'验证码是:',captcha);
    $.post(url+'/user/register',{username:username,password:password,email:email},function(data){
        console.log(data);
    });
});

$('.captcha').on('change',function(e){
    var captcha_buffer = $(e.target).val();
    $.post(url+'/user/checkCaptcha',{captcha:captcha_buffer},function(data){
        console.log(data);
    });
});

$('.username_r').on('change',function(e){
    var username_buffer = $(e.target).val();
    $.post(url+'/user/checkUsername',{username:username_buffer},function(data){
        console.log(data);
    });
});
