var web_links = "http://localhost/vehicle-violation-system/";
var sotg_user_token = JSON.parse(localStorage.getItem('sotg_users'));

var login = function () {

    var usr = $("#usr").val();
    var pwd = $("#pwd").val();

    if ($.trim(usr).length > 0 && $.trim(pwd).length > 0) {

        var input = {
            "username": usr,
            "password": pwd
        };

        $.ajax({
            type: "POST",
            url: web_links + "api/get_login",
            data: input,
            dataType: 'JSON',
            success: function (data) {
                if (data != false) {
                    localStorage.setItem('sotg_users', JSON.stringify(data));
                    location.replace('index.html');
                } else {
                    alert('Incorrect username or password.');
                }
            }

        });

    } else {
        alert('Invalid username or password character.');

    }
};

var logout = function () {

    localStorage.clear();
    location.replace('index.html');

};