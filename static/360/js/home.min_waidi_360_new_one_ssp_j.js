var url = window.location.host;

var slideFlag = true, allPage,listIndex=1;
var pageIndex = 1;
var baidu_ad = '';
ajaxMorePic();
function ajaxMorePic() {
    
    $.ajax({
	
        url:'https://staticwww.miercn.com/zbs/getDatawaidinew?type='+type+'&page='+pageIndex+'&',
        async: false,
        type: 'GET',
        dataType: 'json',
        timeout: 2500,
        success: function (data) {
            allPage=data.pagecount;
            var str='';
            
            for(var p=0; p<data.list.length; p++){
                
                var cur=data.list[p];
				 cur.url = cur.url.replace('club.miercn.com/360feed', "club.miercn.com/wd")
				 //cur.litpic = cur.litpic.replace('https://pic2.miercn.com','http://pic2.nuxue.com')
				
                if((listIndex-1)%2==0){
                    
                        if(listIndex == 1){
                            $('.baidu_ad0 script').remove();
                            str+=$(".baidu_ad0").html();
                        }else if(listIndex == 3){
                            $('.baidu_ad1 script').remove();
                            baidu_ad = $(".baidu_ad1").html();
                        }else if(listIndex == 5){

                            $('.baidu_ad2 script').remove();
                            baidu_ad = $(".baidu_ad2").html();
                        }else if(listIndex == 7){
                            $('.baidu_ad3 script').remove();
                            baidu_ad = $(".baidu_ad3").html();
						 }else if(listIndex == 9){
                            $('.baidu_ad5 script').remove();
                            baidu_ad = $(".baidu_ad5").html();
						}else if(listIndex == 11){
                            $('.baidu_ad6 script').remove();
                            baidu_ad = $(".baidu_ad6").html();
						}else if(listIndex == 13){
                            $('.baidu_ad7 script').remove();
                            baidu_ad = $(".baidu_ad7").html();
						}else if(listIndex == 15){
                            $('.baidu_ad8 script').remove();
                            baidu_ad = $(".baidu_ad8").html();
                        }else if(listIndex != 1){
                            $('.baidu_ad4 script').remove();
                            baidu_ad = $(".baidu_ad4").html();
                        }
						//ad_360 = '<div class="recommend_news_many clearfix" id="ad_360_'+listIndex+'"><div class="ad_div_name_'+listIndex+'"><script>NEWS_FEED({w: 600,showid : "yvKOwM",placeholderId : "ad_360_'+listIndex+'",fId : "ad_360_'+listIndex+'",inject : "cads"})</script></div></div>'
							str+=baidu_ad;
						
							if(cur.field_pic3){
								cur.litpic2 = cur.litpic2.replace('https://pic2.miercn.com','http://pic2.nuxue.com')
								cur.litpic3 = cur.litpic3.replace('https://pic2.miercn.com','http://pic2.nuxue.com')
								 str+= '<li class="one_section three_s">'+
                                '<div class="new_title mb10">'+
                                    '<div>'+
                                        '<a href="'+cur.url+'" target="_blank">'+cur.title+'</a>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="clearfix">'+
                                    '<a class="img_wra new_img_wra" href="'+cur.url+'" target="_blank">'+
                                        '<img alt="" src="'+cur.litpic+'">'+
                                    '</a>'+
                                    '<a class="img_wra new_img_wra" href="'+cur.url+'" target="_blank">'+
                                        '<img alt="" src="'+cur.litpic2+'">'+
                                    '</a>'+
                                    '<a class="img_wra new_img_wra" href="'+cur.url+'" target="_blank">'+
                                        '<img alt="" src="'+cur.litpic3+'">'+
                                    '</a>'+
                                    '<a class="img_wra new_img_wra word_wra" href="'+cur.url+'" target="_blank">'+
                                        '<span>查看详情>></span>'+
                                    '</a>'+
                                '</div>'+
                                '</li><span style="display:none">'+listIndex+'</span>'
							}else{

							 str+='<li class="one_section"><a class="img_wra" href='+cur.url+' target="_blank" ><img alt="" src='+cur.litpic+'></a><div class="new_title mt10"><div><a href='+cur.url+' target="_blank">'+cur.title+'</a> </div> <p class="new_time">'+cur.pubdate+'</p> </div> </li><span style="display:none">'+listIndex+'</span>'
							}
						
							
                       
                }else{
							if(cur.litpic3){
						 str+= '<li class="one_section three_s">'+
                                '<div class="new_title mb10">'+
                                    '<div>'+
                                        '<a href="'+cur.url+'" target="_blank">'+cur.title+'</a>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="clearfix">'+
                                    '<a class="img_wra new_img_wra" href="'+cur.url+'" target="_blank">'+
                                        '<img alt="" src="'+cur.litpic+'">'+
                                    '</a>'+
                                    '<a class="img_wra new_img_wra" href="'+cur.url+'" target="_blank">'+
                                        '<img alt="" src="'+cur.litpic2+'">'+
                                    '</a>'+
                                    '<a class="img_wra new_img_wra" href="'+cur.url+'" target="_blank">'+
                                        '<img alt="" src="'+cur.litpic3+'">'+
                                    '</a>'+
                                    '<a class="img_wra new_img_wra word_wra" href="'+cur.url+'" target="_blank">'+
                                        '<span>查看详情>></span>'+
                                    '</a>'+
                                '</div>'+
                                '</li><span style="display:none">'+listIndex+'</span>'
					}else{

					  str+='<li class="one_section"><a class="img_wra" href='+cur.url+' target="_blank" ><img alt="" src='+cur.litpic+'></a><div class="new_title mt10"><div><a href='+cur.url+' target="_blank">'+cur.title+'</a> </div> <p class="new_time">'+cur.pubdate+'</p> </div> </li><span style="display:none">'+listIndex+'</span>'
					}
						
                    
				 	
				 
                }
				listIndex++;
            }



            $('#newList').append(str);
			
            
            slideFlag=true;
        },
        error: function (err) {
            console.log(err)
        }
    });
	if(pageIndex==21){
        $('.loading').css('display','none')
    }
    pageIndex++;
}
var offsetTop=$('#flexRight').offset().top;
var rSectionHeight=$('.main-area .right').height()
$(window).scroll(function () {

    if(slideFlag && $(window).scrollTop() + $(window).height() >= $('.loading').offset().top  && pageIndex<22){
        slideFlag=false;
        ajaxMorePic()
    }
    var a = $(window).scrollTop();
    460 < a ? $("#sidenav").find(".top").show() : $("#sidenav").find(".top").hide();
    52 < a ? ($("#sub-nav").find(".inner").addClass("fixed"), $("#follow-left").addClass("fixed")) : ($("#sub-nav").find(".inner").removeClass("fixed"), $("#follow-left").removeClass("fixed"));
    var lSectionHeight=$('.main-area .left').height()
    if(a>offsetTop&&parseInt(rSectionHeight)<parseInt(lSectionHeight)){
        $('#flexRight').addClass('flex_right')
        var btH=$(document).height()-a-$('#flexRight').height();
            if(btH<45){
                $('#flexRight').css({
                     'bottom': '55px'
                });
            }else{
                $('#flexRight').css({
                    'bottom': '0px'
                });
        }
    }else{

        $('#flexRight').removeClass('flex_right')
        
    }

});
function share(u,d){
    var title = "";
    var desc = "";if(d!=''){if(d=='1'){window.open(u+encodeURIComponent(location.href)+'&title='+title+'&desc='+desc);}else{window.open(u+encodeURIComponent(location.href)+'&title='+title+'&description='+desc);}}else{window.open(u+encodeURIComponent(location.href)+'&title='+title+desc);}}

function app_in_frame(url){
    ifrm = document.createElement("iframe");
    ifrm.setAttribute("class","adframe");
    ifrm.setAttribute("src",url);
    ifrm.setAttribute("width","0");
    ifrm.setAttribute("height","0");
    ifrm.setAttribute("scrolling","no");
    ifrm.setAttribute("frameborder","0",0);
    document.body.appendChild(ifrm);
}



