var web_links = "http://localhost/vehicle-violation-system/";
var sotg_user_token = JSON.parse(localStorage.getItem('sotg_users'));

$(document).on('click', '#scanSticker', function () {

    var id = this.value.split("/");

    cordova.plugins.barcodeScanner.scan(function (result) {

        var scanned_id = result["text"];

        if (id[0] === scanned_id) {
            $.ajax({
                type: "POST",
                url: web_links + "api/set_pay",
                data: {
                    order_id: id[1],
                },
                dataType: 'JSON',
                success: function (data) {

                    if (data != false) {
                        alert('Payment made!');
                        location.replace('checkout.html');
                    } else {
                        alert('Scanning error! Scan the barcode again.');
                        location.replace('checkout.html');
                    }
                }
            });
        } else {
            alert('Wrong menu id!');
        }
    }, function (error) {
        alert('Error!');
    }, {
        showFlipCameraButton: true, // iOS and Android
        showTorchButton: true, // iOS and Android
        prompt: "Place a barcode inside the scan area", // Android
        resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
        formats: "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
        orientation: "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
        disableAnimations: true, // iOS
        disableSuccessBeep: false // iOS and Android
    });

});

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