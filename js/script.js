var count = 0;
$(function () {
	updateCount();
	$('input.count-checkbox[type=checkbox]').change(function () {
		updateCount(this.checked ? 1 : -1);
	});
});
function updateCount(a) {
	count = a ? count + a : $('input.count-checkbox[type=-checkbox]:checked').length;
	$('#rez').text(count);
}

