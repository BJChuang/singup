$(function() {
	$("#male").click(function() {
		$(this).siblings("i").css({ display: 'block' });
		$(this).parents("div").siblings("div").children("i").css({ display: 'none' });
	});
	$("#female").click(function() {
		$(this).siblings("i").css({ display: 'block' });
		$(this).parents("div").siblings("div").children("i").css({ display: 'none' });
	});

	// 正则验证

	$('form').submit(function(ev) {
		var phone = $('#phone').val();
		$('input').each(function(index) {
			if($('input').eq(index).val() == '') {
				alert('不能为空');
				ev.preventDefault();
				return false;
			} else if(!(/^1[3|7|8|5|4][0-9]\d{8}$/.test(phone))) {
				alert("请输入正确的手机号");
				ev.preventDefault();
				return false;
			} else if($('select').eq(0).val() == 'volvo') {
				alert('旅行计划不能为空');
				ev.preventDefault();
				return false;

			} else if($('select').eq(0).val() == 'volvo') {
				alert('留学计划不能为空');
				ev.preventDefault();
				return false;

			}
		})

	});

	/*$('#homeAdd').jcity({
		urlOrData: 'js/citydata.json',
		animate: { showClass: 'animated flipInX', hideClass: 'animated flipOutX' }, // 需要第一步引用的animate.min.css文件，也可以自己定义动画 
		onChoice: function(data) {
			console.log(data);
		}
	});*/
})