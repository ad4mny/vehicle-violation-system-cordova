var scan = function () {

    cordova.plugins.barcodeScanner.scan(function (result) {

        var scanned_id = result["text"];

        $.ajax({
            type: "POST",
            url: web_links + "api/get_vehicle_info",
            data: {
                sticker_id: scanned_id
            },
            dataType: "JSON",
            beforeSend: function () {
                $('#loadGif').show();
            },
            success: function (data) {

                if (data != false) {
                    location.replace(
                        'summon_form.html?cardID=' + data.cardID +
                        '&userID=' + data.userID +
                        '&fullName=' + data.fullName +
                        '&vehicleID=' + data.vehicleID +
                        '&vehicleBrand=' + data.vehicleBrand +
                        '&vehicleRegistrationNo=' + data.vehicleRegistrationNo
                    );
                } else {
                    alert('Scanning error! Scan the barcode again.');
                    location.replace('scan.html');
                }

            },
            error: function () {
                $('#display').append('<div class="row"><div class="col"><p class="my-3 text-muted">Internal server error, please reload.</p></div></div>');
            },
            complete: function () {
                $('#loadGif').hide();
            }

        });

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

};