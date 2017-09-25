// JavaScript Document
$(function(){
			$(".xieyi").on("click",function(e){
				e.preventDefault();
				$(".choosethis").removeClass("choosethis");
				$(".tcbg,.xyinner").show();
				$("body").addClass("tcstyle");
				$(this).addClass("choosethis");
			});
			$(".tcbg,.close,.xyinner .xieyibottom p").on("click",function(){
				$(".tcbg,.xyinner").hide();
				$("body").removeClass("tcstyle");
				$('body').scrollTop( $('body')[0].scrollHeight );
			});
			$(".xyinner .xieyibottom p").on("click",function(){
				$(".choosethis").addClass("tongyi");
				 allInputTest()
				allComInputTest();
				
			});
			/*$(".xyinner .opbgbox ul li").on("click",function(){
				$(this).addClass("on").siblings("li").removeClass("on");
				$("#"+$(this).attr("name")).show().siblings(".xieyibox").hide();
			});*/
			//商户名称
			$(".compShop  .comName").on("keyup",function(){
				if($(this).text().length>20){
					$(this).text($(this).text().substring(0,20));
					$(this).blur();
				}
			})
			//改变底部固定按钮的样式
			$("input,textarea,.compShop  .shopMessage2 .comName").on("focus",function(){
				$(".selfShopSub,.compShopSub").css("position","relative");
				$(".selfShop,.compShop").css("margin-bottom","0");
			})
			$("input,textarea,.compShop  .shopMessage2 .comName").on("blur",function(){
				$(".selfShopSub,.compShopSub").css("position","fixed");
				$(".selfShop,.compShop").css("margin-bottom","62px");
			})
			//必填项填完之后按钮的unclick去掉
			$(".selfShop  .shopMessage1 input").on("keyup",function(){
				allInputTest()
			})
			$(".compShop  .shopMessage2 input,.compShop  .shopMessage2 .comName").on("keyup",function(){
				allComInputTest()
			})
			//个人设置下拉框样式
			$(".selfShop  .shopMessage1 .bankCard").on("change",function(){
				$(this).siblings(".justshow").hide();
				allInputTest();
			})
			//公司设置下拉框样式
			$(".compShop  .shopMessage2 .bankCard").on("change",function(){
				$(this).siblings(".justshow").hide();
				allComInputTest();
			})
			$(".menu ul li").on("click",function(){
				$(this).addClass("on").siblings().removeClass("on");
				if($(this).index()==0){
					$(".selfShop").hide();
					$(".compShop").show();
				}else{
					$(".selfShop").show();
					$(".compShop").hide();
					
				}
				$(this).siblings("input").click();
			});
			//个人提交按钮
			$(".selfShopSub").on("click",function(){
				if(!$(this).hasClass("unclick")){
					$(this).addClass("wait").html("请稍后，处理中...");
					var pass = true;
					var code = $(".selfShop .sfzh").val();
					var phonenum = $(".selfShop .phonenum").val();
					var res= IdentityCodeValid(code);
					if(!res){
						pass = false;
					}
					if(!isPhoneNum(phonenum)){
						 alert("手机号格式错误");
						pass = false;
					}
					//如果验证无误，按钮变化
					if(pass){
						$(this).addClass("wait").html("请稍后，处理中...");
					}else{
						$(this).removeClass("wait").html("提交审核");
					}
				}else{
					//alert("请补全信息")
				}
			})	
			//商户提交按钮
			$(".compShopSub").on("click",function(){
				//如果后台校验出错的话按钮变成之前的提交审核$(this).removeClass("wait").html("提交审核");
				if(!$(this).hasClass("unclick")){
					$(this).addClass("wait").html("请稍后，处理中...");
					var  pass = true;
					var code = $(".compShop .sfzh").val();
					var phonenum = $(".compShop .phonenum").val();
					
					if(!isPhoneNum(phonenum)){
						 alert("手机号格式错误");
						pass = false;
					}
					//如果验证无误，按钮变化
					if(pass){
						$(this).addClass("wait").html("请稍后，处理中...");
					}else{
						$(this).removeClass("wait").html("提交审核");
					}
				}else{
					//alert("请补全信息")
				}
			})	
			
		});
		//判断个人每个input是否为空来控制底部按钮
		function allInputTest(){
			var inde=0;
			$(".selfShop  .shopMessage1 input").each(function(index, element) {	
				if($.trim($(this).val()) != ""){
					++inde;
					//console.log(inde);
					if(inde == 9 & $(".selfShop  .shopMessage1 .justshow").css("display") == "none" & $(".selfShop .xieyi").hasClass("tongyi")){
						$(".selfShopSub").removeClass("unclick")
					}else{
						$(".selfShopSub").addClass("unclick")
					}
				}else{
				}
			});
		}
		//判断公司每个input是否为空来控制底部按钮
		function allComInputTest(){
			var inde=0;
			$(".compShop  .shopMessage2 input").each(function(index, element) {	
				if($.trim($(this).val()) != ""){
					++inde;
					console.log(inde);
					if(inde == 8 & $(".compShop  .shopMessage2 .justshow").css("display") == "none" & $.trim($(".compShop  .shopMessage2 .comName").html()) !="" & $(".compShop .xieyi").hasClass("tongyi")){
						$(".compShopSub").removeClass("unclick")
					}else{
						$(".compShopSub").addClass("unclick")
					}
				}else{
				}
			});
		}

	  //验证手机号
		  function isPhoneNum(phoneNum){
			  var reg = /^1[3|8|7|5|4]\d{9}$/;
			  return reg.test(phoneNum);		
		  }
		function IdentityCodeValid(code) { 
            var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
            var tip = "";
            var pass= true;
            
            if(!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)){
                tip = "身份证号格式错误";
                pass = false;
            }
            
           else if(!city[code.substr(0,2)]){
                tip = "身份证号地址编码错误";
                pass = false;
            }
            else{
                //18位身份证需要验证最后一位校验位
                if(code.length == 18){
                    code = code.split('');
                    //∑(ai×Wi)(mod 11)
                    //加权因子
                    var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
                    //校验位
                    var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
                    var sum = 0;
                    var ai = 0;
                    var wi = 0;
                    for (var i = 0; i < 17; i++)
                    {
                        ai = code[i];
                        wi = factor[i];
                        sum += ai * wi;
                    }
                    var last = parity[sum % 11];
                    if(parity[sum % 11] != code[17]){
                        tip = "身份证号校验位错误";
                        pass =false;
                    }
                }
            }
            if(!pass) alert(tip);
            return pass;
        }