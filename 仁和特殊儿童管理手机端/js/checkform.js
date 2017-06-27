$(function(){
	$("#upButton").click(function(){
		var firstName=$("#firstName");
		var emailAddress=$("#emailAddress");
		var phoneNumber=$("#phoneNumber");
		var errorPost1=$("#errorPost1");
		var errorPost2=$("#errorPost2");
		var errorPost3=$("#errorPost3");
		firstName.blur(function(){
			var reg=/^[\u4e00-\u9fa5]{1,10}$/;
			if(firstName.val()==null||firstName.val()==""){
				errorPost1.text("姓名不能为空");
				firstName.focus();
				return false;
			}if(!reg.test(firstName.val())){
				errorPost1.text("姓名格式不正确");
	   			firstName.focus(); 
	    		return false; 
	  		}else{
	  			errorPost1.text('');
	  			return true;
	  		}
		});	
		
		emailAddress.blur(function(){
		 	var reg=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
			if(emailAddress.val()==null||emailAddress.val()==""){
				errorPost2.text("邮箱不能为空");
				emailAddress.focus();
				return false;
			}if (!reg.test(emailAddress.val())) {
				errorPost2.text("邮箱格式不正确");
				emailAddress.focus();
				return false;
			}else{
				errorPost2.text('');
	  			return true;
	  		}
		});
		
		phoneNumber.blur(function(){
			var reg= /^1[3|4|5|7|8][0-9]{9}$/;
			if(phoneNumber.val()==null||phoneNumber.val()==""){
				errorPost3.text("电话不能为空");
				phoneNumber.focus();
				return false;
			}if (!reg.test(phoneNumber.val())) {
				errorPost3.text("电话格式不正确");
				phoneNumber.focus();
				return false;
			}else{
				errorPost3.text('');
				return true;
			}
			
		});
		
	});
	
	
});