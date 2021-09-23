window.addEventListener('load', (event) => {

    $.ajax({
        type: "POST",
        url: web_links + "api/get_violation_list",
        dataType: "JSON",
        beforeSend: function () {
            $('#loadGif').show();
        },
        success: function (data) {
            console.log(data);
            if (data != false) {
                for (var i = 0; i < data.length; i++) {
                    $('#display').append(
                        '   <div class="row mx-1 mb-1 p-2 bg-white shadow-sm rounded-3">' +
                        '            <div class="col text-uppercase">' +
                        data[i].type +'<br>' +
                        '            </div>' +
                        '            <div class="col  text-uppercase">' +
                        '<small class="text-muted">' + data[i].date + '</small><br>' +
                        '<small class="text-muted">' + data[i].vehicleRegistrationNo + '</small>' +
                        '             </div>' +
                        '        </div>'
                    )
                }
            } else {
                $('#display').append(
                    '   <div class="row mx-1 mb-1 p-2 bg-white shadow-sm rounded-3">' +
                    '            <div class="col text-uppercase">' +
                    'No data available.' +
                    '            </div>' +
                    '        </div>'
                )
            }
        },
        error: function () {
            $('#display').html('<div class="row"><div class="col"><p class="my-3 text-muted">Internal server error, please reload.</p></div></div>');
        },
        complete: function () {
            $('#loadGif').hide();
        }
    });

});