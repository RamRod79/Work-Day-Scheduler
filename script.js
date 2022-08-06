var hour = $('.datetime')

// Adds the current date and time to the header
setInterval(() => {
    var now = moment();
    // console.log(now.format('MMM, DD YYYY [at] hh:mm:ss a'));
    $('#current-time').text(now.format('ddd, MMM, DD YYYY [at] hh:mm:ss a'));
}, 1000);


// Change color of row based upon current time
function checkHour() {
    var currentHour = moment().hour()

    $('.time-block').each(function () {
        var timeBlock = parseInt($(this).attr('id'));

        if (currentHour < timeBlock) {
            $(this).addClass('future').removeClass("past present");
        }
        else if (currentHour > timeBlock) {
            $(this).addClass('past').removeClass("present future");
        }
        else if (currentHour === timeBlock) {
            $(this).addClass('present').removeClass("past future")
        }
    });
   
}

checkHour();
setInterval(checkHour, 30000)

