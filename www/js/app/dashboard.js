window.addEventListener('load', (event) => {

    $.ajax({
        type: "POST",
        url: web_links + "api/get_dashboard_analytic",
        dataType: "JSON",
        beforeSend: function () {
            $('#loadGif').show();
        },
        success: function (data) {

            if (data != null) {
                $("#display").append(
                    '<div class="row mx-1 mb-1 py-3 bg-white shadow-sm rounded-3">' +
                    '            <div class="col-2 m-auto">' +
                    '                <i class="fas fa-receipt fa-fw fa-2x"></i>' +
                    '            </div>' +
                    '            <div class="col">' +
                    '                <p class="mb-0">Total Violation Issued</p>' +
                    '                <h3 class="fw-bold mb-0">'+ data["violation"]["value"] +' Violation(s)</h3>' +
                    '            </div>' +
                    '        </div>' +
                    '        <div class="row mx-1 mb-1 py-3 bg-white shadow-sm rounded-3">' +
                    '            <div class="col-2 m-auto">' +
                    '                <i class="fas fa-dollar-sign fa-fw fa-2x"></i>' +
                    '            </div>' +
                    '            <div class="col">' +
                    '                <p class="mb-0">Total Paid Violation</p>' +
                    '                <h3 class="fw-bold mb-0">'+ data["paid"]["value"] +' Violation(s) Paid</h3>' +
                    '            </div>' +
                    '        </div>' +
                    '        <div class="row mx-1 mb-1 py-3 bg-white shadow-sm rounded-3">' +
                    '            <div class="col-2 m-auto">' +
                    '                <i class="fas fa-car fa-fw fa-2x"></i>' +
                    '            </div>' +
                    '            <div class="col">' +
                    '                <p class="mb-0">Total Registered Vehicle</p>' +
                    '                <h3 class="fw-bold mb-0">'+ data["vehicle"]["value"] +' Vehicle(s) </h3>' +
                    '            </div>' +
                    '        </div>' +
                    '        <div class="row mx-1 mb-1 py-3 bg-white shadow-sm rounded-3">' +
                    '            <div class="col-2 m-auto">' +
                    '                <i class="fas fa-users fa-fw fa-2x"></i>' +
                    '            </div>' +
                    '            <div class="col">' +
                    '                <p class="mb-0">Total Registered User</p>' +
                    '                <h3 class="fw-bold mb-0">'+ data["user"]["value"] +' User(s) </h3>' +
                    '            </div>' +
                    '        </div>' +
                    '        <div class="row mx-1 mb-1 py-3 bg-white shadow-sm rounded-3">' +
                    '            <div class="col-2 m-auto">' +
                    '                <i class="fas fa-check fa-fw fa-2x"></i>' +
                    '            </div>' +
                    '            <div class="col">' +
                    '                <p class="mb-0">Total Approved Sticker Application</p>' +
                    '                <h3 class="fw-bold mb-0">'+ data["approve"]["value"] +' Approve(s) </h3>' +
                    '            </div>' +
                    '        </div>' +
                    '        <div class="row mx-1 mb-1 py-3 bg-white shadow-sm rounded-3">' +
                    '            <div class="col-2 m-auto">' +
                    '                <i class="fas fa-times fa-fw fa-2x"></i>' +
                    '            </div>' +
                    '            <div class="col">' +
                    '                <p class="mb-0">Total Rejected Sticker Application</p>' +
                    '                <h3 class="fw-bold mb-0">'+ data["reject"]["value"] +' Reject(s) </h3>' +
                    '            </div>' +
                    '        </div>'
                );
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