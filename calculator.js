$(function () {
    function roundFractional(x, n) {
        return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
    }
    var $width = $('#width'),
        $height = $('#height'),
        $btnCal = $('#calculate'),
        $perimeter = $('#perimeter'),
        $area = $('#area');

    $btnCal.click(function () {
        var w = Number($width.val());
        var h = Number($height.val());

        var p = roundFractional(2*(w+h),2);
        var a = roundFractional(w*h,2);

        $perimeter.val(p);
        $area.val(a);

    })
})