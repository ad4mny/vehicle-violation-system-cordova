const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var user_id = urlParams.get('userID');
var vehicle_id = urlParams.get('vehicleID');

window.addEventListener('load', (event) => {

    $('#registration_no').html(urlParams.get('vehicleRegistrationNo'));
    $('#vehicle_type').html(urlParams.get('vehicleBrand'));
    $('#driver_name').html(urlParams.get('fullName'));
    $('#card_id').html(urlParams.get('cardID'));

});

var makeSummon = function () {

    $.ajax({
        type: "POST",
        url: web_links + "api/set_summon",
        data: {
            user_id: user_id,
            vehicle_id: vehicle_id,
            staff_id: sotg_user_token.userID,
            violation: $('#violation').val(),
            location: $('#location').val(),
        },
        dataType: "JSON",
        success: function (data) {
            if (data != false) {
                alert('Summon succeed!');
                location.replace('scan.html');
            } else {
                alert('Summon failed, try again.');
            }
        }
    });
}