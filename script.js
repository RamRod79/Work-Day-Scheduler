setInterval(() => {
    var now = moment();
    // console.log(now.format('MMM, DD YYYY [at] hh:mm:ss a'));
    $('#current-time').text(now.format('ddd, MMM, DD YYYY [at] hh:mm:ss a'));
}, 1000);



function checkHour() {
    var currentHour = moment().hour('')

    $('.time-block').each(function () {

        var hour = parseInt($(this).attr('id'))

        if (hour <= currentHour) {
            $(this).addClass('past');
        } else if (hour === currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
        }
        else {
            $(this).removeClass('present');
            $(this).removeClass('past');
            $(this).addClass('future');
        }

    })
}

checkHour();
setInterval(checkHour, 30000)