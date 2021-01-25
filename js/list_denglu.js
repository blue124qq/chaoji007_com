$.cookie = function(name, value, options) {if (typeof value != 'undefined') {options = options || {};if (value === null) {value = '';options.expires = -1;}var expires = '';if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {var date;if (typeof options.expires == 'number') {date = new Date();date.setTime(date.getTime() + (options.expires * 8 * 60 * 60 * 1000));} else {date = options.expires;}expires = '; expires=' + date.toUTCString();}var path = options.path ? '; path=' + options.path: '';var domain = options.domain ? '; domain=' + options.domain: '';var secure = options.secure ? '; secure': '';document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');} else {var cookieValue = null;if (document.cookie && document.cookie != '') {var cookies = document.cookie.split(';');for (var i = 0; i < cookies.length; i++) {var cookie = jQuery.trim(cookies[i]);if (cookie.substring(0, name.length + 1) == (name + '=')) {cookieValue = decodeURIComponent(cookie.substring(name.length + 1));break;}}}return cookieValue;}};
(function($){jQuery.fn.scrollFix=function(height,dir,logwidth,logheight){height=height||0;height=height=="top"?0:height;return this.each(function(){if(height=="bottom"){height=document.documentElement.clientHeight-this.scrollHeight}else{if(height<0){height=document.documentElement.clientHeight-this.scrollHeight+height}}var that=$(this),oldHeight=false,p,r,l=that.offset().left;dir=dir=="bottom"?dir:"top";if(window.XMLHttpRequest){function getHeight(){return(document.documentElement.scrollTop||document.body.scrollTop)+height-that.offset().top}$(window).scroll(function(){if(oldHeight===false){if((getHeight()>=0&&dir=="top")||(getHeight()<=0&&dir=="bottom")){oldHeight=that.offset().top-height;that.css({position:"fixed",top:logheight,left:logwidth})}}else{if(dir=="top"&&(document.documentElement.scrollTop||document.body.scrollTop)<oldHeight){that.css({position:"static"});oldHeight=false}else{if(dir=="bottom"&&(document.documentElement.scrollTop||document.body.scrollTop)>oldHeight){that.css({position:"static"});oldHeight=false}}}})}else{$(window).scroll(function(){if(oldHeight===false){if((getHeight()>=0&&dir=="top")||(getHeight()<=0&&dir=="bottom")){oldHeight=that.offset().top-height;r=document.createElement("span");p=that[0].parentNode;p.replaceChild(r,that[0]);document.body.appendChild(that[0]);that[0].style.position="absolute"}}else{if((dir=="top"&&(document.documentElement.scrollTop||document.body.scrollTop)<oldHeight)||(dir=="bottom"&&(document.documentElement.scrollTop||document.body.scrollTop)>oldHeight)){that[0].style.position="static";p.replaceChild(that[0],r);r=null;oldHeight=false}else{that.css({left:logwidth,top:logheight+document.documentElement.scrollTop})}}})}})}})(jQuery);
function setTab(name,cursel,n){for(i=1;i<=n;i++){var menu=document.getElementById(name+i);var con=document.getElementById("con_"+name+"_"+i);menu.className=i==cursel?"hover":"";con.style.display=i==cursel?"block":"none";}}
function setTab_t(name,cursel,n){var j=1;for(i=1;i<=n;i++){j = (cursel+1>3)?1:cursel+1;var menu=document.getElementById(name+i);var con=document.getElementById("con_"+name+"_"+i);menu.className=i==j?"":"hover";con.style.display=i==j?"block":"none";}}
$(document).ready(function() {
	jQuery.support.cors = true;
    var goid = 0;
    $('.huant_left').click(function() {
        showxi('.huant_left');
        goid = this.id;
    });
    $('.huant_rt').click(function() {
        showxi('.huant_rt');
        goid = this.id;
    });
    $('.huant_rb').click(function() {
        showxi('.huant_rb');
        goid = this.id;
    });
    $('.huant_bt1').click(function() {
        showxi('.huant_bt1');
        goid = this.id;
    });
    $('.huant_bt2').click(function() {
        showxi('.huant_bt2');
        goid = this.id;
    });
    $('.huant_bt3').click(function() {
        showxi('.huant_bt3');
        goid = this.id;
    });
    $('.huant_bcl').click(function() {
        showxi('.huant_bcl');
        goid = this.id;
    });
    $('.huant_bcr').click(function() {
        showxi('.huant_bcr');
        goid = this.id;
    });
    $('.huant_bcbl').click(function() {
        showxi('.huant_bcbl');
        goid = this.id;
    });
    $('.huant_bcbr').click(function() {
        showxi('.huant_bcbr');
        goid = this.id;
    });
    $('.huan_rt').click(function() {
        showxi('.huan_rt');
        goid = this.id;
    });
    $('.huan_rb').click(function() {
        showxi('.huan_rb');
        goid = this.id;
    });
	$('.quxiao').click(function() {
        $('.xifu').hide();
        goid = 0;
    });
    $('.redian_right a').click(function() {
        goid = 0;
		$('.xifu').hide();
		$('#caini').html('');
		$('#caini').hide('');
		$('.huan').show();
		var tag_arr = randomArray(tags);
		randhtml('.huant_left',tag_arr['0']);
		randhtml('.huant_rt',tag_arr['1']);
		randhtml('.huan_rb',tag_arr['2']);
		randhtml('.huan_rt',tag_arr['3']);
		randhtml('.huant_bt2',tag_arr['4']);
		randhtml('.huant_bt3',tag_arr['5']);
		randhtml('.huant_bcl',tag_arr['6']);
		randhtml('.huant_bcr',tag_arr['7']);
		randhtml('.huant_bcbr',tag_arr['8']);
    }); 
	
	$('.search_input').click(function() {
		
		$('.soredian').css({"top":$('#so').offset().top+36+'px',"left":$('#so').offset().left+'px'});
		$('.soredian').css("display","block");
		event.stopPropagation();
	});
	$('.soredian a').click(function() {
		$('#copys').val($(this).find("span").html());
		$('.soredian').css("display","none");
	});
	$(document).not($(".searchform")).click(function() {
		$('.soredian').css("display","none");
	});
	$('.content3_cn ul li').mouseover(function(){
		$(this).find(".layer-txt").show();
	});
	$('.content3_cn ul li').mouseleave(function(){
		$(this).find(".layer-txt").hide();
	});
    var showxi = function(clss) {
        if ($('.xifu') && $(clss)) {
			var heights = $(clss).height()+parseInt($(clss).css('padding-top').replace("px",''));
			var widths = $(clss).width()+parseInt($(clss).css('padding-left').replace("px",''))+parseInt($(clss).css('padding-right').replace("px",''));
            $('.xifu').css('visibility', 'visible');
            $('.xifu').css('left', $(clss).position().left);
            $('.xifu').css('top', $(clss).position().top);
            $('.xifu').css('width', widths);
            $('.xifu').css('height', heights);
			$('.xifu div').css('marginTop',(heights)/2-12);
			$('.xifu div').css('marginLeft',(widths)/2-12);
            $('.xifu').show();
        }
    }
	var isAppend = function(){
		return  Math.random() >= 0.5? true:false;
	}
	var getRandomColor = function(){
		var colors = ['73adde','d31b23','4480c9','0c2960','a3ae00','991515','204867','172e3e','927d32','728d43'];
		var n = Math.floor(Math.random() * colors.length + 1)-1;
		return '#'+colors[n];
	}
	var randhtml = function(clssd,keys){
		if(tags_key[keys]){
			$(clssd).hide('3000');
			$(clssd).css('background',getRandomColor());
			$(clssd).html(tags_key[keys]);
			
			$(clssd).attr('id',keys);
			$(clssd).show('3000');
		}
	}
	var randomArray = function(array){
		var resultArray = []
		for(var count = 0; count<30; count++){
			if(isAppend()&&resultArray.length<10){
				resultArray[resultArray.length] = array[count];
			}
		}
		return resultArray;
	}
	
	var checklogin = $.cookie("Mier_login");
	var checklogin=eval(checklogin);
	if(checklogin){
		$('#login_on').show();
		$('#login_off').hide();
		$('#bottom_username').html( '用户名：<a href="http://bbs.mier123.com/home.php?mod=space&uid="'+checklogin[1]+'"&do=index&view=admin">'+checklogin[0]+'</a> <em>|</em> <a href="javascript:indexout();">退出</a>');
	}else{
		$('#login_off').show();
		$('#login_on').hide();
	}
	
});
var bottom_login = function(){
	var checklogin = $.cookie("Mier_login");
	if(checklogin){
		var checklogin=eval(checklogin);
		$('#bottom_username').html( '用户名：<a href="http://bbs.mier123.com/home.php?mod=space&uid="'+checklogin[1]+'"&do=index&view=admin">'+checklogin[0]+'</a> <em>|</em> <a href="javascript:indexout();">退出</a>');
		
	}else{
		showlog_reyi();
		
	}
} 
function reyi_submit(){
		var message = $('#tx_area').val();
		var checklogin = $.cookie("Mier_login");
		checklogin=eval(checklogin);
		var uid = checklogin[1];
		var username = checklogin[0];
		var tid = $('#thread_tid').html();
		var subject = $('.reyi_title').html();
		
		if(!uid){
			showlog_reyi();return;
		}
		if(!message){
			alert('需要填写评论内容');return;
		}
		$.getJSON("http://bbs.miercn.com/api/third/comment/post_reply.php?",{message : message, uid : uid,username:username,tid:tid,subject:subject}, function(data){
		if(data.stat==1){
			alert('评论成功');
			window.location.href='http://bbs.mier123.com/thread-'+tid+'-1-1.html'
		}else{
			alert('评论失败,请联系管理员');
		}
	});

}


var showlog_reyi = function() {
		var d = $(window).width() / 2 - 224,
		e = $(window).height() / 2 - 137.5,
		f = '<form action="http://bbs.mier123.com/logging.php?action=login&amp;loginsubmit=yes" onsubmit="return indexsubmit();" method="post"><div class="content_login"><div class="title_login"><div class="title_left_login"><b>米尔会员登录</b></div><div class="title_right_login"><a href="javascript:void(0);" onclick="close_login_reyi()"><img src="http://www.miercn.com/images_2013/guanbi.gif" width="21" height="21" /></a></div></div><div class="cn_login"><div class="zang_login2"><input id="username" type="text" tabindex="1"  value="用户名" onfocus="if(this.value==\'用户名\'){this.value=\'\';this.style.color=\'#999\'}" onblur="if(this.value==\'\'){this.value=\'用户名\';this.style.color=\'#999\'}"/></div><div class="zc_login"><a href="http://bbs.mier123.com/zhuce.php" onclick="$.cookie(\'Mier_time\', \'\', {expires: -1,domain: \'.miercn.com\',path: \'/\'});">立即注册</a></div></div><div class="cn_login"><div class="zang_login2"><input id="password" type="password" tabindex="2"  value="请输入密码" onfocus="if(this.value==\'请输入密码\'){this.value=\'\';this.style.color=\'#999\'}" onblur="if(this.value==\'\'){this.value=\'请输入密码\';this.style.color=\'#999\'}"/></div><div class="zc_login"><a href="http://bbs.mier123.com/member.php?mod=logging&action=login&viewlostpw=1" onclick="close_login_reyi();" target="_blank">忘记密码？</a></div></div><div class="dl_login"><div class="an_login"><input type="submit" value=""/></div><div class="fu_login"><input type="checkbox" value="" />记住我</div></div></div></form>';
		
		$("#loghtml_huati").html(f),showOverlay(),$("#loghtml_huati").css("position", "fixed"),$("#loghtml_huati").css("z-index", "2010"),$("#loghtml_huati").css("left", d + "px"),$("#loghtml_huati").css("top", e + "px"),$("#loghtml_huati").scrollFix("top", "bottom", d, e),$("#loghtml_huati").show();
		$('.content_login').css('background','#fff');
		$.cookie('Mier_time', '', {expires:-1, domain:'.miercn.com', path:'/'});
		
		
	}

	/******首页登录*****/
	var uid = "",
		z = 1,
		q = 1,
		ft = 0,
		Mier_time = $.cookie("Mier_time"),
		qd = $.cookie("qiandao"),
		ml_time = $.cookie("ml_time"),
		Mier_login = $.cookie("Mier_login"),
		qd_time = $.cookie("qd_time");
		fu = '';
	var qd_Date= new Date();
	if(qd_Date.toLocaleDateString() != qd_time){
		$.cookie('qiandao', '', {expires: -1,domain: '.miercn.com',path: '/'});
		$.cookie('qiandao_count', '', {expires: -1,domain: '.miercn.com',path: '/'});
		$.cookie('qd_tid', '', {expires: -1,domain: '.miercn.com',path: '/'});
	}
	$('.zuce').click(function(){
		$.cookie('Mier_time', '', {expires: -1,domain: '.miercn.com',path: '/'});
	});
	
	$('.dls').mouseover(function(){   
			if(z == 1){  
				showlog(); 
				$('#loghtml').attr('class','none_item');  
			} 
	});
	
		$(".dls").mouseout(function(){
			var timer = setTimeout(function(){
						//alert($('#loghtml').attr('class'));
						if($('#loghtml').attr('class')!='active_item'){
							$('#loghtml').hide();
						}
			}, 300);
		});
  
	$('#loghtml').mouseover(function(){   
		$('#loghtml').attr('class','active_item');  
	}); 
	
	if (Mier_login == null || Mier_login == "") {
		//if(Mier_time==null || Mier_time==''){
			if(1==2){
			$.getJSON("http://bbs.mier123.com/logging_new_ajax.php?action=checklogin&jsoncallback=?", function(data){
				if(data.stat==1){
					$(".dls").html('您好，' + data.uname),
					$(".dls").attr('class','dlss'),
					$(".dlss").attr('target','_blank'),
					$(".dlss").attr('href',"http://bbs.mier123.com/memcp.php"),
					$(".zuce").html('<a  href="javascript:indexout();">退出</a>');
					$.cookie('Mier_login',"['"+data.uname+"','"+data.uid+"']",{expires:3,domain:'.miercn.com',path:"/"});	
					$.cookie('ml_time',qd_Date.toLocaleDateString(),{expires:1,domain:'.miercn.com',path:"/"});
					$('#login_on').show();//新增加
					$('#login_off').hide();//新增加
					z =2;
				}else{
					$.cookie('Mier_time','Mier',{expires:3,domain:'.miercn.com',path:"/"});
				}
			});
		}
		fu = "640150";
	}else if(Mier_login != null && Mier_login != ""){
		var MierObj=eval(Mier_login);			
		if(eval(qd) == 1 && qd_Date.toLocaleDateString() == qd_time){	
			var qiandao_count = $.cookie("qiandao_count");
			var qd_tid = $.cookie("qd_tid");
			if(qiandao_count == 0){	
				$('.qiandao').html("<div class='qiandao_left'><a href='http://bbs.mier123.com/thread-"+qd_tid+"-1-1.html' target='_blank'>已签到</a></div><div class='qiandao_right'><a href='http://bbs.mier123.com/forum.php?mod=post&action=newthread&fid=5' target='_blank'>发帖</a></div>");
			}else{
				$('.qiandao').html("<div class='qiandao_left2'><p><a href='http://bbs.mier123.com/thread-"+qd_tid+"-1-1.html' style='color:#fff;' target='_blank'>已签到</a></p><span>奖励 "+qiandao_count+" 金钱</span></div><div class='qiandao_right'><a href='http://bbs.mier123.com/forum.php?mod=post&action=newthread&fid=5' target='_blank'>发帖</a></div>");
			}
		}
		if(qd_Date.toLocaleDateString() != ml_time){
			$.getJSON("http://bbs.mier123.com/logging_new_ajax.php?action=checklogin&jsoncallback=?", function(data){
				if(data.stat==1){
					$(".dls").html('您好，' + data.uname),
					$(".dls").attr('class','dlss'),
					$(".dlss").attr('target','_blank'),
					$(".dlss").attr('href',"http://bbs.mier123.com/memcp.php"),
					$(".zuce").html('<a  href="javascript:indexout();">退出</a>');
					$.cookie('Mier_login',"['"+data.uname+"','"+data.uid+"']",{expires:3,domain:'.miercn.com',path:"/"});
					$.cookie('ml_time',qd_Date.toLocaleDateString(),{expires:1,domain:'.miercn.com',path:"/"});
					z =2;
				}else{
					$(".zuce").html("<a href=\"http://bbs.mier123.com/zhuce.php\">注册</a>"), 
						$.cookie('ml_time',"",{expires:1,domain:'.miercn.com',path:"/"}),
						z =1,$(".qiandao").html('<div class="qiandao_left"><a onclick="qiandao();">签到</a></div><div class="qiandao_right"><a>发帖</a></div>'),				
						$(".dlss").html('登录'),$(".dlss").attr('class','dls'),$(".dls").attr('target',''),$(".dls").attr('style',''),$(".dls").attr('href',"javascript:showlog();"), $.cookie("Mier_login", "", {
						expires: 3,
						domain: ".miercn.com",
						path: "/"
					});
				}
			});
		}
		if(MierObj){
			//$(".dls").css({"display":"block","float":"left","height":"26px","padding-right":"15px","padding-top":"14px","width":"auto","overflow":"hidden","color":"#666"});
			$(".dls").html('您好，' + MierObj[0]),
			$(".dls").attr('class','dlss'),
			$(".dlss").attr('target','_blank'),
			$(".dlss").attr('href',"http://bbs.mier123.com/home.php?mod=space&uid="+MierObj[1]+"&do=index&view=admin"),
			z =2,
			//$(".zuce").html('<a  href="javascript:indexout();">退出</a>');
			
			$(".reg").attr('href', 'javascript:indexout();');
			$(".reg").attr('target', '_self');
			$(".reg").html('退出');
		}
	}
	var close_login = function(stat) {
		$("#loghtml").empty(), $("#loghtml").hide(),hideOverlay();
		return false;
		//, hideOverlay()
	}
	var close_login_reyi = function(stat) {
		$("#loghtml_huati").empty(), $("#loghtml_huati").hide(),hideOverlay();
		return false;
		//, hideOverlay()
	}
	$("body").click(function(event){  
		//if($(event.target).attr('class')=='dls')  
		event = (event)?event:window.event;
		var s=$(event.target).attr('class'); 
		if ( (s=='float_L')||(s=='denglu')||(s=='login_b')||(s=='zang_login')||(s=='zang_login2')||(s=='showlogin')|| $(event.target).is('a') || $(event.target).is('input:text') || $(event.target).is('input:button') || $(event.target).is('input:checkbox')  || $(event.target).is('input:submit')  || $(event.target).is('input:password')){
            return;
        }else{ 
           $("#loghtml").empty(), $("#loghtml").hide(),hideOverlay();
		  // return false;
        }
		
	});
	var indexsubmit = function() {
		var username = $.trim($("#username").val());
		var password = $("#password").val();
		if((username !=''&& password !="") && (username !='用户名'&& password !="请输入密码")){
			$.getJSON("http://bbs.mier123.com/member.php?mod=logging&action=login_ajax&loginsubmit=yes&infloat=yes&lssubmit=yes&jsoncallback=?", {username : username, password : password}, function(data){
				if (data.uid < 0) {
					alert('用户名或密码错误！');
					return false;
				}
				close_login();
				close_login_reyi();
				$(".dls").html('您好，' + username);
				$(".dls").attr('class','dlss');
				$(".dlss").attr('target','_blank');
				z =2;
				$(".dlss").attr('href', "http://bbs.mier123.com/home.php?mod=space&uid="+data.uid+"&do=index&view=admin");
				
				$(".reg").attr('href', 'javascript:indexout();');
				$(".reg").attr('target', '_self');
				$(".reg").html('退出');
				$.cookie('Mier_login',"['"+username+"','"+data.uid+"']",{expires:3,domain:'.miercn.com',path:"/"});
				var ml_Date= new Date();
				$.cookie('ml_time',ml_Date.toLocaleDateString(),{expires:1,domain:'.miercn.com',path:"/"});
				$('#login_on').show();//新增加
				$('#login_off').hide();//新增加
				$('#bottom_username').html( '用户名：<a href="http://bbs.mier123.com/home.php?mod=space&uid="'+data.uid+'"&do=index&view=admin">'+username+'</a> <em>|</em> <a href="javascript:indexout();">退出</a>');
				ft = 1;
				var l_qd = $.cookie("qiandao");
				if(l_qd){
					var qiandao_count = $.cookie("qiandao_count");
					var qd_tid = $.cookie("qd_tid");
					if(qiandao_count == 0){	
						$('.qiandao').html("<div class='qiandao_left'><a href='http://bbs.mier123.com/thread-"+qd_tid+"-1-1.html' target='_blank'>已签到</a></div><div class='qiandao_right'><a href='http://bbs.mier123.com/forum.php?mod=post&action=newthread&fid=5' target='_blank'>发帖</a></div>");
					}else{
						$('.qiandao').html("<div class='qiandao_left2'><p><a href='http://bbs.mier123.com/thread-"+qd_tid+"-1-1.html' style='color:#fff;' target='_blank'>已签到</a></p><span>奖励 "+qiandao_count+" 金钱</span></div><div class='qiandao_right'><a href='http://bbs.mier123.com/forum.php?mod=post&action=newthread&fid=5' target='_blank'>发帖</a></div>");
					}
				}else{
					$(".qiandao_right a").attr('target','_blank');
					$(".qiandao_right a").attr('href',"http://bbs.mier123.com/forum.php?mod=post&action=newthread&fid=5");
				}
			});
		}else{
			alert('用户名密码不能为空！');
		}
		return false;
	}
	var indexout = function() {
		$.getJSON("http://bbs.mier123.com/member.php?mod=logging&action=logout_ajax&jsoncallback=?", function(b) {
			//$(".zuce").html("<a href=\"http://bbs.mier123.com/member.php?mod=register\">注册</a>"),
			$(".dlss").attr('class','dls');
			$(".dls").attr('href', "javascript:void(0);");
			$(".dls").html('登陆');
				
			$(".reg").attr('href', 'http://bbs.mier123.com/member.php?mod=register');
			$(".reg").attr('target', '_blank');
			$(".reg").html('注册');
			

			$('#login_off').show();//新增加的
			$('#login_on').hide();//新增加的
			
			$.cookie('ml_time',"",{expires:1,domain:'.miercn.com',path:"/"}),
			z =1,$(".qiandao").html('<div class="qiandao_left"><a onclick="qiandao();">签到</a></div><div class="qiandao_right"><a>发帖</a></div>'),				
			$(".dlss").html('登录'),$(".dlss").attr('class','dls'),$(".dls").attr('target',''),$(".dls").attr('style',''),$(".dls").attr('href',"javascript:showlog();"), $.cookie("Mier_login", "", {
				expires: 3,
				domain: ".miercn.com",
				path: "/"
			}), $.cookie("qiandao", "", {
				expires: 3,
				domain: ".miercn.com",
				path: "/"
			})
		})
	}
	var showlog = function() {
		var d = ($(window).width()-1040)/2,
			e = 41, 
			f = '<form class="showlogin" action="http://bbs.mier123.com/logging.php?action=login&amp;loginsubmit=yes" onsubmit="return indexsubmit();" method="post"><div class="denglu"><div class="zang_login"><input id="username" name="username" class="showlogin" type="text" tabindex="1" value="用户名" onfocus="if(this.value==\'用户名\'){this.value=\'\';this.style.color=\'#c3c3c3\'}" onblur="if(this.value==\'\'){this.value=\'用户名\';this.style.color=\'#c3c3c3\'}"></div><div class="zang_login"><input id="password" name="password" type="password" tabindex="1" value="请输入密码" class="showlogin" onfocus="if(this.value==\'请输入密码\'){this.value=\'\';this.style.color=\'#c3c3c3\'}" onblur="if(this.value==\'\'){this.value=\'请输入密码\';this.style.color=\'#c3c3c3\'}"></div><p class="showlogin"><label class="fl"><input type="checkbox" class="fl"><span class="fl">下次自动登录</span></label><a href="http://bbs.mier123.com/member.php?mod=logging&action=login&viewlostpw=1" onclick="close_login();" target="_blank" class="fr">忘记密码?</a></p><p class="app_dowload"><a href="http://www.miercn.cn" target="_blank">下载"最全的军事资讯应用"</a></p><input type="submit" value="登录" class="login-submit"></div></form>';
			$("#loghtml").html(f),$("#loghtml").show();
			$.cookie('Mier_time', '', {expires: -1,domain: '.miercn.com',path: '/'});
			//,showOverlay()
	}
	
	var showlog_index = function() {
		var d = $(window).width() / 2 - 224,
		e = $(window).height() / 2 - 137.5,
		f = '<form action="http://bbs.mier123.com/logging.php?action=login&amp;loginsubmit=yes" onsubmit="return indexsubmit();" method="post"><div class="content_login"><div class="title_login"><div class="title_left_login"><b>米尔会员登录</b></div><div class="title_right_login"><a href="javascript:void(0);" onclick="close_login()"><img src="http://www.miercn.com/images_2013/guanbi.gif" width="21" height="21" /></a></div></div><div class="cn_login"><div class="zang_login2"><input id="username" type="text" tabindex="1"  value="用户名" onfocus="if(this.value==\'用户名\'){this.value=\'\';this.style.color=\'#999\'}" onblur="if(this.value==\'\'){this.value=\'用户名\';this.style.color=\'#999\'}"/></div><div class="zc_login"><a href="http://bbs.mier123.com/zhuce.php" onclick="$.cookie(\'Mier_time\', \'\', {expires: -1,domain: \'.miercn.com\',path: \'/\'});">立即注册</a></div></div><div class="cn_login"><div class="zang_login2"><input id="password" type="password" tabindex="2"  value="请输入密码" onfocus="if(this.value==\'请输入密码\'){this.value=\'\';this.style.color=\'#999\'}" onblur="if(this.value==\'\'){this.value=\'请输入密码\';this.style.color=\'#999\'}"/></div><div class="zc_login"><a href="http://bbs.mier123.com/member.php?mod=logging&action=login&viewlostpw=1" onclick="close_login();" target="_blank">忘记密码？</a></div></div><div class="dl_login"><div class="an_login"><input type="submit" value=""/></div><div class="fu_login"><input type="checkbox" value="" />记住我</div></div></div></form>';
		
		$("#loghtml").html(f),showOverlay(),$("#loghtml").show();
		$('.content_login').css('background','#fff');
		$.cookie('Mier_time', '', {expires:-1, domain:'.miercn.com', path:'/'});
	}
	var gotol = function() {
		window.open("http://bbs.mier123.com/zhuce.php")
	}
	var showOverlay= function() {
		$("#overlay").height(pageHeight()), $("#overlay").width(pageWidth()),$("#overlay").show()
	}
	var hideOverlay = function() {
		$("#overlay").hide();
	}
	var pageHeight = function() {
		return document.body.scrollHeight
	}
	var pageWidth = function() {
		return document.body.scrollWidth
	}
	$('.kuaixun a').click(function(){
		if(q<4){q+=1;}else{q=0;}
		$('.kuaix').html('笑话：'+kuaixun_title[q]);
		$('.kuaix').attr('href',kuaixun_url[q]);
	});
		// 签到
	var current= function(){ 
		var d=new Date(),str=''; 
		str =d.getHours();
		return str; 
	} 
	var qiandao = function(){
		var Mier_login = $.cookie("Mier_login");
		if(Mier_login){
			ft = 1;
		}
		//ft=1;//测试用		
		var sj = current();
		if(sj < 8 )	{alert('亲,未到抢楼时间，今日抢楼时间为八点整，请返回耐心等待吧!');}else{
			if(ft == 1){
				// ajax请求论坛数据	
				$.getJSON("http://bbs.mier123.com/post_newjson.php?fid=696&jsoncallback=?", function(q){
					//var json=eval(json);
					if(q.stat == 1){
						alert('亲,未到抢楼时间，今日抢楼时间为八点整，请返回耐心等待吧!1');
					}
					if(q.stat == 2){
						var expiresDate= new Date();
						expiresDate.setTime(expiresDate.getTime() + (60 * 24 * 60 * 1000)); //?替换成分钟数如果为60分钟则为 60 * 60 *1000
						$.cookie("qiandao", '1', {path:'/', domain:".miercn.com",expires:expiresDate});
						$.cookie("qiandao_count", q.gold, {path : '/', domain : ".miercn.com",expires : expiresDate});	
						$.cookie("qd_tid", q.tid, {path : '/', domain : ".miercn.com",expires : expiresDate});	
						var qdDate= new Date();
						$.cookie('qd_time',qd_Date.toLocaleDateString(),{expires:1,domain:'.miercn.com',path:"/"});
						var qiandao_count = $.cookie("qiandao_count");
						var qd_tid = $.cookie("qd_tid");
						if(q.gold == 0){	
							$('.qiandao').html("<div class='qiandao_left'><a href='http://bbs.mier123.com/thread-"+qd_tid+"-1-1.html' target='_blank'>已签到</a></div><div class='qiandao_right'><a href='http://bbs.mier123.com/forum.php?mod=post&action=newthread&fid=5' target='_blank'>发帖</a></div>");
						}else{
							$('.qiandao').html("<div class='qiandao_left2'><p><a href='http://bbs.mier123.com/thread-"+qd_tid+"-1-1.html' style='color:#fff;' target='_blank'>已签到</a></p><span>奖励 "+qiandao_count+" 金钱</span></div><div class='qiandao_right'><a href='http://bbs.mier123.com/forum.php?mod=post&action=newthread&fid=5' target='_blank'>发帖</a></div>");
						}
					}
					if(q.stat == 3){
						alert('您今天已经签到了哦~');
					}
					if(q.stat == 4){
						showlog_index();
					}
				});
			}else{
				ft = 0;
				showlog_index();
			}
		}
	}
	$('.qiandao_right a').click(function() {
		var Mier_login = $.cookie("Mier_login");
		if(Mier_login){
			$(".qiandao_right a").attr('target','_blank');
			$(".qiandao_right a").attr('href',"http://bbs.mier123.com/forum.php?mod=post&action=newthread&fid=5");
		}else{
			$(".qiandao_right a").attr('href',"http://bbs.mier123.com");
		}
		var qhref = $(".qiandao_right a").attr("href");
		if(qhref == "" || qhref == null){
			ft = 0;
			showlog_index();
			return false;
		}		
	});
	/****收藏**/
	var addBookmark = function() {
		var d = document.title,
			e = window.location.href;
		try {
			window.external.addFavorite(e, d)
		} catch (f) {
			try {
				window.sidebar.addPanel(d, e, "")
			} catch (f) {
				alert("加入收藏失败，请使用Ctrl+D进行添加")
			}
		}
	}
	function ImgLazyLoad(e) {
		function i() {
			$("#num").html($(window).height() + $(window).scrollTop()), t.Id.each(function() {
				s(this, t) || $(this).is(":visible") && $(this).trigger("appear");
			});
		}
		function s(e, t) {
			var n = $(window).height() + $(window).scrollTop();
			return n <= $(e).offset().top - t.threshold;
		}
		var t = {
			Id: $("img"),
			threshold: 100,
			effectspeed: 0,
			effect: "show"
		};
		$.extend(t, e);
		var n = t.Id,r = null;
		return $(window).bind("load reset", i), $(window).scroll(function() {
			r && clearTimeout(r), r = setTimeout(i ? i : "", 100);})
			, n.each(function(e) {
				var n = this;
				$(n).data("t", $(n).offset().top), s(n, t) ? n.loaded = !1 : $(n).is(":visible") && ($(n).attr("src", $(n).attr("data")), n.loaded = !0), $(n).one("appear", function() {
					this.loaded || $("<img />").bind("load", function() {
					$(n).hide().attr("src", $(n).attr("data"))[t.effect](t.effectspeed), n.loaded = !0;
					}).attr("src", $(n).attr("data"));
			});
		});
	}
	ImgLazyLoad({Id: $('#lazyload img'),effect: "fadeIn"});
function CalendarHelper(){this.skinLoad=true;this.pickMode={second:1,minute:2,hour:3,day:4,month:5,year:6};this.skinList=new Array();this.language={year:[[""],[""]],months:[["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]],weeks:[["日","一","二","三","四","五","六"],["SUN","MON","TUR","WED","THU","FRI","SAT"]],quarter:[["冬","冬","春","春","春","夏","夏","夏","秋","秋","秋","冬"],["SPRING","SPRING","SPRING","SUMMER","SUMMER","SUMMER","AUTUMN","AUTUMN","AUTUMN","WINTER","WINTER","WINTER"]],hour:[["时"],["H"]],minute:[["分"],["M"]],second:[["秒"],["S"]]};this.date=new Date();this.year=this.date.getFullYear();this.month=this.date.getMonth();this.day=this.date.getDate();this.hour=this.date.getHours();this.minute=this.date.getMinutes();this.second=this.date.getSeconds();this.left=0;this.top=0;this.isFocus=false;this.beginYearLoad=this.year-30;this.endYearLoad=this.year+20;this.beginYear=this.beginYearLoad;this.endYear=this.endYearLoad;this.DateMode=this.pickMode.day;this.lang=0;this.sample="yyyy-MM-dd";this.format="yyyy-MM-dd";this.selectTime=new Date();this.dateControl=null;this.panel=null;this.container=null}CalendarHelper.prototype={toDate:function(str,style){if(str==null){return new Date()}try{if(str.length==style.length){var y=str.substring(style.indexOf("yyyy"),style.indexOf("yyyy")+4);var M=str.substring(style.indexOf("MM"),style.indexOf("MM")+2);var d=str.substring(style.indexOf("dd"),style.indexOf("dd")+2);var H=str.substring(style.indexOf("HH"),style.indexOf("HH")+2);var m=str.substring(style.indexOf("mm"),style.indexOf("mm")+2);var s=str.substring(style.indexOf("ss"),style.indexOf("ss")+2);if((s==null||s==""||isNaN(s))){s=new Date().getSeconds()}if((m==null||m==""||isNaN(m))){m=new Date().getMinutes()}if((H==null||H==""||isNaN(H))){H=new Date().getHours()}if((d==null||d==""||isNaN(d))){d=new Date().getDate()}if((M==null||M==""||isNaN(M))){M=new Date().getMonth()+1}if((y==null||y==""||isNaN(y))){y=new Date().getFullYear()}if(y<1000){y=new Date().getFullYear()}var dt;eval("dt=new Date('"+y+"','"+(M-1)+"','"+d+"','"+H+"','"+m+"','"+s+"')");return dt}return new Date()}catch(e){return new Date()}},getWeekOfYear:function(c){var e=new Date(c.getFullYear(),0,1);var d=parseInt(Math.abs(c-e)/(1000*60*60*24))+1;var b=(d+e.getDay())/7;var a=parseInt(b);return((b>a)?(a+1):a)},formatDate:function(b,c){var d={"M{2}":((this.DateMode<=5)?(b.getMonth()+1):"MM"),"d{2}":((this.DateMode<=4)?(b.getDate()):"dd"),"H{2}":((this.DateMode<=3)?(b.getHours()):"HH"),"m{2}":b.getMinutes(),"s{2}":b.getSeconds(),"S{3}":(new Date().getMilliseconds()),"W{1}":((this.DateMode<=4)?(this.getWeekOfYear(b)):"W"),"w{1}":((this.DateMode<=4)?(this.language.weeks[this.lang][b.getDay()]):"w"),"q{1}":((this.DateMode<=5)?(this.language.quarter[this.lang][b.getMonth()]):"q")};if(/(y{4})/.test(c)){c=c.replace(RegExp.$1,(b.getFullYear()+"").substr(4-RegExp.$1.length))}for(var a in d){if(new RegExp("("+a+")").test(c)){c=c.replace(RegExp.$1,RegExp.$1.length==1?d[a]:(RegExp.$1.length==3?("000"+d[a]).substr((""+d[a]).length):("00"+d[a]).substr((""+d[a]).length)))}}return c},InitContainerPanel:function(){var a='<div id="__WebCalendarPanel__" style="position:absolute;display:none;z-index:9999;left:80%" class="CalendarPanel"></div>';if(document.all){a+='<iframe style="position:absolute; z-index:2000; width:expression(this.previousSibling.offsetWidth); ';a+="height:expression(this.previousSibling.offsetHeight); ";a+="left:expression(this.previousSibling.offsetLeft); top:expression(this.previousSibling.offsetTop); ";a+='display:expression(this.previousSibling.style.display); " scrolling="no" frameborder="no"></iframe>'}var b=document.createElement("div");b.innerHTML=a;b.id="__WebCalendarContainerPanel__";b.style.display="none";document.body.appendChild(b)},ReturnDate:function(c,d){this.hide();if(this.dateControl.onchange==null){return}var b=this.dateControl.onchange.toString();b=b.substring(((b.indexOf("ValidatorOnChange();")>0)?b.indexOf("ValidatorOnChange();")+20:b.indexOf("{")+1),b.lastIndexOf("}"));var a=new Function(b);this.dateControl.changeEvent=a;this.dateControl.changeEvent()},draw:function(){var calendar=this;var mvAry=[];mvAry[mvAry.length]='<div style="margin: 0px; ">';mvAry[mvAry.length]='<table width="100%" cellpadding="0" cellspacing="1" class="CalendarTop">';mvAry[mvAry.length]='<tr class="titlerili">';mvAry[mvAry.length]='<th align="left" class="prevMonth"><input style="';if(calendar.DateMode>calendar.pickMode.month){mvAry[mvAry.length]="display:none; "}mvAry[mvAry.length]='" id="__WebCalendarPrevMonth__" type="button" value="&lt;" /></th>';mvAry[mvAry.length]='<th align="center" width="98%" nowrap="nowrap" class="YearMonth">';mvAry[mvAry.length]='<select id="__WebCalendarYear__" class="Year"></select>';mvAry[mvAry.length]='<select id="__WebCalendarMonth__" class="Month" style="';if(calendar.DateMode>calendar.pickMode.month){mvAry[mvAry.length]="display:none;"}mvAry[mvAry.length]='"></select></th>';mvAry[mvAry.length]='<th align="right" class="nextMonth"><input style="';if(calendar.DateMode>calendar.pickMode.month){mvAry[mvAry.length]="display:none;"}mvAry[mvAry.length]='" id="__WebCalendarNextMonth__" type="button" value="&gt;" /></th>';mvAry[mvAry.length]="</tr>";mvAry[mvAry.length]="</table>";mvAry[mvAry.length]='<table id="__WebCalendarTable__" width="100%" class="CalendarDate" style="';if(calendar.DateMode>=calendar.pickMode.month){mvAry[mvAry.length]="display:none;"}mvAry[mvAry.length]='" cellpadding="0" cellspacing="1">';mvAry[mvAry.length]='<tr class="titleli">';for(var i=0;i<7;i++){mvAry[mvAry.length]="<th>"+calendar.language.weeks[calendar.lang][i]+"</th>"}mvAry[mvAry.length]="</tr>";for(var i=0;i<5;i++){mvAry[mvAry.length]='<tr align="center" class="date" style="display:;">';for(var j=0;j<7;j++){if(j==0){mvAry[mvAry.length]='<td class="sun" tdname="tdSun" class="sun"></td>'}else{if(j==6){mvAry[mvAry.length]='<td class="sat" tdname="tdSat" class="sat"></td>'}else{mvAry[mvAry.length]='<td class="day" tdname="tdDay" class="day"></td>'}}}mvAry[mvAry.length]="</tr>"}mvAry[mvAry.length]="</table>";mvAry[mvAry.length]='<table width="100%" class="CalendarTime" style="';if(calendar.DateMode>=calendar.pickMode.day){mvAry[mvAry.length]="display:none;"}mvAry[mvAry.length]='" cellpadding="0" cellspacing="1">';mvAry[mvAry.length]='<tr><td align="center" colspan="7">';mvAry[mvAry.length]='<select id="__WebCalendarHour__" class="Hour"></select>'+calendar.language.hour[calendar.lang];mvAry[mvAry.length]='<span style="';if(calendar.DateMode>=calendar.pickMode.hour){mvAry[mvAry.length]="display:none;"}mvAry[mvAry.length]='"><select id="__WebCalendarMinute__" class="Minute"></select>'+calendar.language.minute[calendar.lang]+"</span>";mvAry[mvAry.length]='<span style="';if(calendar.DateMode>=calendar.pickMode.minute){mvAry[mvAry.length]="display:none;"}mvAry[mvAry.length]='"><select id="__WebCalendarSecond__" class="Second"></select>'+calendar.language.second[calendar.lang]+"</span>";mvAry[mvAry.length]="</td></tr>";mvAry[mvAry.length]="</table>";mvAry[mvAry.length]='<div align="center" onclick="hiddens()" class="CalendarButtonDiv" style="border-top:1px solid #D5D5D5;cursor:pointer;">';mvAry[mvAry.length]="关闭";mvAry[mvAry.length]="</div>";calendar.panel.innerHTML=mvAry.join("");var obj=calendar.getElementById("__WebCalendarPrevMonth__");obj.onclick=function(){calendar.goPrevMonth(calendar)};obj.onblur=function(){calendar.onblur()};calendar.prevMonth=obj;obj=calendar.getElementById("__WebCalendarNextMonth__");obj.onclick=function(){calendar.goNextMonth(calendar)};obj.onblur=function(){calendar.onblur()};calendar.nextMonth=obj;calendar.calendarClose=obj;obj=calendar.getElementById("__WebCalendarYear__");obj.onchange=function(){calendar.update(calendar)};obj.onblur=function(){calendar.onblur()};calendar.calendarYear=obj;obj=calendar.getElementById("__WebCalendarMonth__");with(obj){onchange=function(){calendar.update(calendar)};onblur=function(){calendar.onblur()}}calendar.calendarMonth=obj;obj=calendar.getElementById("__WebCalendarHour__");obj.onchange=function(){calendar.hour=this.options[this.selectedIndex].value};obj.onblur=function(){calendar.onblur()};calendar.calendarHour=obj;obj=calendar.getElementById("__WebCalendarMinute__");obj.onchange=function(){calendar.minute=this.options[this.selectedIndex].value};obj.onblur=function(){calendar.onblur()};calendar.calendarMinute=obj;obj=calendar.getElementById("__WebCalendarSecond__");obj.onchange=function(){calendar.second=this.options[this.selectedIndex].value};obj.onblur=function(){calendar.onblur()};calendar.calendarSecond=obj;calendar.calendarToday=obj},bindYear:function(){var b=this.calendarYear;b.length=0;for(var a=this.beginYear;a<=this.endYear;a++){b.options[b.length]=new Option(a+this.language.year[this.lang],a)}},bindMonth:function(){var a=this.calendarMonth;a.length=0;for(var b=0;b<12;b++){a.options[a.length]=new Option(this.language.months[this.lang][b],b)}},bindHour:function(){var c=this.calendarHour;if(c.length>0){return}var b;for(var a=0;a<24;a++){b=("00"+a+"").substr((""+a).length);c.options[c.length]=new Option(b,b)}},bindMinute:function(){var c=this.calendarMinute;if(c.length>0){return}var b;for(var a=0;a<60;a++){b=("00"+a+"").substr((""+a).length);c.options[c.length]=new Option(b,b)}},bindSecond:function(){var c=this.calendarSecond;if(c.length>0){return}var b;for(var a=0;a<60;a++){b=("00"+a+"").substr((""+a).length);c.options[c.length]=new Option(b,b)}},goPrevMonth:function(a){if(this.year==this.beginYear&&this.month==0){return}this.month--;if(this.month==-1){this.year--;this.month=11}this.date=new Date(this.year,this.month,1);this.changeSelect();this.bindData()},goNextMonth:function(a){if(this.year==this.endYear&&this.month==11){return}this.month++;if(this.month==12){this.year++;this.month=0}this.date=new Date(this.year,this.month,1);this.changeSelect();this.bindData()},changeSelect:function(){var d=this;var f=d.calendarYear;var a=d.calendarMonth;var c=d.calendarHour;var e=d.calendarMinute;var b=d.calendarSecond;if(d.date.getFullYear()-d.beginYear<0||d.date.getFullYear()-d.beginYear>=f.length){f[0].selected=true}else{f[d.date.getFullYear()-d.beginYear].selected=true}a[d.date.getMonth()].selected=true;c[d.hour].selected=true;e[d.minute].selected=true;b[d.second].selected=true},update:function(a){this.year=a.calendarYear.options[a.calendarYear.selectedIndex].value;this.month=a.calendarMonth.options[a.calendarMonth.selectedIndex].value;this.date=new Date(this.year,this.month,1);this.bindData()},bindData:function(){var e=this;if(e.DateMode>=e.pickMode.month){return}var c=e.getMonthViewArray(e.date.getFullYear(),e.date.getMonth());var b=e.getElementById("__WebCalendarTable__").getElementsByTagName("td");for(var a=0;a<b.length;a++){b[a].onclick=function(){return};b[a].onmouseover=function(){return};b[a].onmouseout=function(){return};if(a>c.length-1){break}b[a].innerHTML=c[a];if(b[a].getAttribute("tdname")=="tdSun"){b[a].className="sun"}else{if(b[a].getAttribute("tdname")=="tdSat"){b[a].className="sat"}else{b[a].className="day"}}if(c[a]!="  "){var f=new Date();b[a].isToday=false;var d=c[a].replace(/<[^>].*?>/g,"");if(f.getFullYear()==e.date.getFullYear()&&f.getMonth()==e.date.getMonth()&&f.getDate()==d){b[a].className="today";b[a].isToday=true}if(e.dateControl!=null){if(e.selectTime.getDate()==d){e.selectedDayTD=b[a];b[a].className="selDay"}}b[a].onclick=function(){if(e.DateMode==e.pickMode.day){var g=new Date(e.date.getFullYear(),e.date.getMonth(),this.innerHTML)}else{if(e.selectedDayTD!=null){if(e.selectedDayTD.isToday){e.selectedDayTD.className="today"}else{if(e.selectedDayTD.getAttribute("tdname")=="tdSun"){e.selectedDayTD.className="sun"}else{if(e.selectedDayTD.getAttribute("tdname")=="tdSat"){e.selectedDayTD.className="sat"}else{e.selectedDayTD.className="day"}}}}this.className="selDay";e.day=this.innerHTML;e.selectedDayTD=this}};b[a].onmouseover=function(){this.className="dayOver"};b[a].onmouseout=function(){if(e.selectedDayTD!=this){if(this.isToday){this.className="today"}else{if(this.getAttribute("tdname")=="tdSun"){this.className="sun"}else{if(this.getAttribute("tdname")=="tdSat"){this.className="sat"}else{this.className="day"}}}}else{this.className="selDay"}};b[a].onblur=function(){e.onblur()}}}},
getMonthViewArray:function(k,b){
	var a=new Date();
	var g=a.getFullYear();
	var e=a.getMonth();
	var l=a.getDate();
	var f=[];
	var h=l-1;
	var o=new Date(k,b,1).getDay();
	var n=new Date(k,b+1,0).getDate();
	for(var d=0;d<42;d++){
		f[d]="  "
		}
	if(k>g){
		for(var c=0;c<n;c++){
			f[c+o]="<a>"+(c+1)+"</a>"
		}
	}else{
		if(k==g){
			for(var c=0;c<n;c++){
				if(b<e){
					f[c+o]="<a>"+(c+1)+"</a>"
				}else{
					if(b==e){
							if(c<h && c>(h-16)){
								f[c+o]="<a href='http://www.miercn.com/historyIndex/"+k+"-"+(b+1)+"-"+(c+1)+".html' target='_blank' onclick='hiddens();'>"+(c+1)+"</a>"
							}else{
								f[c+o]="<a>"+(c+1)+"</a>"
							}
							
					}else{
						if(b>e){
							f[c+o]="<a>"+(c+1)+"</a>"
						}
					}
				}
			}
		}else{
			for(var c=0;c<n;c++){
			f[c+o]="<a>"+(c+1)+"</a>"
			}
		}
}return f},getElementById:function(id){if(typeof(id)!="string"||id==""){return null}if(document.getElementById){return document.getElementById(id)}if(document.all){return document.all(id)}try{return eval(id)}catch(e){return null}},getElementsByTagName:function(a,b){if(document.getElementsByTagName){return document.getElementsByTagName(b)}if(document.all){return document.all.tags(b)}},getAbsPoint:function(b){var a=b.offsetLeft;var c=b.offsetTop;while(b=b.offsetParent){a+=b.offsetLeft;c+=b.offsetTop}return{x:a,y:c}},reset:function(a){if(a.beginYear==null){a.beginYear=this.beginYearLoad}if(a.endYear==null){a.endYear=this.endYearLoad}if(a.lang==null){a.lang=0}if(a.left==null){a.left=0}if(a.top==null){a.top=0}if(a.format==null){a.format="yyyy-MM-dd"}if(a.sample==null){a.sample="yyyy-MM-dd"}a.format=a.format+"";a.sample=a.sample+"";return a},setSkin:function(c){var b=false;if(c.skin==null){c.skin="default"}c.skin=c.skin+"";if(this.skinList.length==0){var a=document.getElementsByTagName("link");for(var d=0;d<a.length;d++){if(a[d].getAttribute("skinType")=="WebCalendar"){this.skinList[this.skinList.length]=a[d]}}}for(var d=0;d<this.skinList.length;d++){if(this.skinList[d].getAttribute("skin")==c.skin){this.skinList[d].disabled=false;b=true}else{this.skinList[d].disabled=true}}if(!b){for(var d=0;d<this.skinList.length;d++){if(this.skinList[d].getAttribute("skin")=="default"){this.skinList[d].disabled=false;break}}}},setPickMode:function(a){if(a.indexOf("ss")>-1){this.DateMode=this.pickMode.second;return true}if(a.indexOf("mm")>-1){this.DateMode=this.pickMode.minute;return true}if(a.indexOf("HH")>-1){this.DateMode=this.pickMode.hour;return true}if(a.indexOf("dd")>-1){this.DateMode=this.pickMode.day;return true}if(a.indexOf("MM")>-1){this.DateMode=this.pickMode.month;return true}if(a.indexOf("yyyy")>-1){this.DateMode=this.pickMode.year;return true}this.DateMode=this.pickMode.day;return true},doDraw:function(a){if(this.skinLoad){this.setSkin(a)}var b=false;a=this.reset(a);if(this.beginYear!=a.beginYear||this.endYear!=a.endYear||this.lang!=a.lang||this.sample!=a.sample||this.format!=a.format){b=true}this.left=a.left;this.top=a.top;if(b){this.beginYear=a.beginYear;this.endYear=a.endYear;this.lang=a.lang;this.setPickMode(a.sample);this.format=a.format;this.sample=a.sample}return b},showCalendar:function(b,c,a){if(document.getElementById("__WebCalendarContainerPanel__")==null){this.InitContainerPanel();this.panel=this.getElementById("__WebCalendarPanel__");this.container=this.getElementById("__WebCalendarContainerPanel__")}var e=this.doDraw(c);if(b==null){throw new Error("arguments[0] is necessary")}if(b.showTime==null){b.showTime=""}this.dateControl=b;this.date=this.selectTime;if(this.panel.innerHTML==""||e){this.draw();this.bindYear();this.bindMonth();this.bindHour();this.bindMinute();this.bindSecond()}this.year=this.date.getFullYear();this.month=this.date.getMonth();this.day=this.date.getDate();this.hour=this.date.getHours();this.minute=this.date.getMinutes();this.second=this.date.getSeconds();this.changeSelect();this.bindData();if(a==null){a=b}var g=this.getAbsPoint(a);var d=document.getElementById("hd");this.panel.style.left=(this.getAbsPoint(d).x+this.left-130)+"px";this.panel.style.top="117px";this.panel.style.display="";this.container.style.display="";var f=this;if(!f.dateControl.isTransEvent){f.dateControl.isTransEvent=true;if(f.dateControl.onblur!=null){f.dateControl.blurEvent=f.dateControl.onblur}f.dateControl.onblur=function(){f.onblur();if(typeof(this.blurEvent)=="function"){this.blurEvent()}}}f.container.onmouseover=function(){f.isFocus=true};f.container.onmouseout=function(){f.isFocus=false}},hide:function(){this.panel.style.display="none";this.container.style.display="none";this.isFocus=false},onblur:function(){if(!(this.isFocus)){this.hide()}},show:function(c,b){if(b.object!=null){this.showCalendar(b.object,b);return true}if(b.id!=null){b.id=b.id+"";var a=document.getElementById(b.id);if(a!=null){this.showCalendar(a,b);return true}}if(typeof(c)=="object"){this.showCalendar(c,b);return true}else{if(typeof(c)=="string"){var a=document.getElementById(c);a.focus();if(a==null){return false}this.showCalendar(a,b);return true}}return false}};function hiddens(){document.getElementById("__WebCalendarContainerPanel__").style.display="none"}var __Calendar__=new CalendarHelper();