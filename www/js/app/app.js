// var web_links = "https://umpsamanonthego.000webhostapp.com/";
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
            beforeSend: function () {
                $('#loadGif').show();
            },
            success: function (data) {

                if (data != false) {
                    if (data['role'] == 'Admin') {
                        localStorage.setItem('sotg_users', JSON.stringify(data));
                        location.replace('index.html');
                    } else {
                        alert('Only admin can login.');
                    }

                } else {
                    alert('Incorrect username or password.');
                }
            },
            error: function () {
                $('#display').append('<div class="row"><div class="col"><p class="my-3 text-muted">Internal server error, please reload.</p></div></div>');
            },
            complete: function () {
                $('#loadGif').hide();
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