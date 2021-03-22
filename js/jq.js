$(document).ready(function () {
    $('.sheetTab').on('click', function () {
        var _this = $(this);
        let elmTabCLick = _this.attr('id');
        let elm = $('.' + elmTabCLick + '')
        elm.addClass('is-active');
        elm.siblings('div').removeClass('is-active');
        _this.addClass('is-active');
        _this.siblings('li').removeClass('is-active');
    });
});



