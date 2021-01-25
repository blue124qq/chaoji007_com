http:var num = Date.parse(new Date());
var host_url = "http://"+window.location.host;
var slideFlag = true, allPage,listIndex=1;
var pageIndex = 1;
var baidu_ad = '';
var now = new Date();
var day = now.getDay();
ajaxMorePic();
function ajaxMorePic() {
    
    $.ajax({
    
        url:host_url+'/zbs/getDatawaidinew?type='+type+'&page='+pageIndex+"&123",
        async: false,
        type: 'GET',
        dataType: 'json',
        timeout: 2500,
        success: function (data) {
            allPage=data.pagecount;
            var str='';
            
            for(var p=0; p<data.list.length; p++){
                
                var cur=data.list[p];
                cur.url = cur.url.replace('club.miercn.com/360feed', "club.miercn.com/360wd")
                if((listIndex-1)%2==0){
                        ad_360 = '';
                        if(listIndex == 1){
                            $('.baidu_ad0 script').remove();
                            str+=$(".baidu_ad0").html();
                        }else if(listIndex == 3){
                            $('.baidu_ad1 script').remove();
                            baidu_ad = $(".baidu_ad1").html();
							ad_360 = '<div class="recommend_news_many clearfix" id="ad_360_'+listIndex+'"><div class="ad_div_name_'+listIndex+'"><script>NEWS_FEED({w: 600,showid : "ExW3ZY",placeholderId : "ad_360_'+listIndex+'",fId : "ad_360_'+listIndex+'",inject : "cads"})</script></div></div>'
                        }else if(listIndex == 5){

                            $('.baidu_ad2 script').remove();
                            baidu_ad = $(".baidu_ad2").html();
                            ad_360 = '<div class="recommend_news_many clearfix" id="ad_360_'+listIndex+'"><div class="ad_div_name_'+listIndex+'"><script>NEWS_FEED({w: 600,showid : "sAo47q",placeholderId : "ad_360_'+listIndex+'",fId : "ad_360_'+listIndex+'",inject : "cads"})</script></div></div>'
                            
                            
                        }else if(listIndex == 7){
                            $('.baidu_ad3 script').remove();
                            baidu_ad = $(".baidu_ad3").html();
							ad_360 = '';

						 }else if(listIndex == 9){
                            $('.baidu_ad5 script').remove();
                            baidu_ad = $(".baidu_ad5").html();
							ad_360 = '';
						}else if(listIndex == 11){
                            $('.baidu_ad6 script').remove();
                            baidu_ad = $(".baidu_ad6").html();
							ad_360 = '';
						}else if(listIndex == 13){
                            $('.baidu_ad7 script').remove();
                            baidu_ad = $(".baidu_ad7").html();
							ad_360 = '';
						}else if(listIndex == 15){
                            $('.baidu_ad8 script').remove();
                            baidu_ad = $(".baidu_ad8").html();
							ad_360 = '';
                        }else if(listIndex != 1){
                            $('.baidu_ad4 script').remove();
                            baidu_ad = $(".baidu_ad4").html();
							ad_360 = '';
                        }
						
                        
                            str+=baidu_ad+ad_360;
                       
                            
                            //str+=ad_360+baidu_ad;
                            if(cur.field_pic3){
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
                    
                        if(listIndex != 2){
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
    // if(a>offsetTop&&parseInt(rSectionHeight)<parseInt(lSectionHeight)){
    //     $('#flexRight').addClass('flex_right')
    //     var btH=$(document).height()-a-$('#flexRight').height();
    //         if(btH<45){
    //             $('#flexRight').css({
    //                  'bottom': '55px'
    //             });
    //         }else{
    //             $('#flexRight').css({
    //                 'bottom': '0px'
    //             });
    //     }
    // }else{
    //
    //    $('#flexRight').removeClass('flex_right')
    //
    // }

        var flexHeight = $('#flexRight').offset().top;
        var ul_li_fixed = 2500;
        $('#flexRight').css({"width": "336px"});
        // 滚动条
            // 获取滚动滑动距离
            var scrollHeight = $(this).scrollTop();

            //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
            if(screen.width>=1600){
                if(scrollHeight>=ul_li_fixed){
                    $('#flexRight').css({"position":"fixed","top":0});
                }else if(scrollHeight<ul_li_fixed){
                    $('#flexRight').css({"position":"static"});
                }
            }
			// else{
                // if(scrollHeight>=ul_li_fixed){
                    // $('#flexRight').css({"position":"fixed","top":-30+'%'});
                // }else if(scrollHeight<ul_li_fixed){
                    // $('#flexRight').css({"position":"static"});
                // }
            // } 




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



