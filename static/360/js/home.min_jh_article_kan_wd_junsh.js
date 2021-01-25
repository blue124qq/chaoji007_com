var host_url = "http://"+window.location.host;
var slideFlag = true, allPage,listIndex=1;
var pageIndex = 1;
var baidu_ad = '';
var ad5 = '';
var str_class = ''; 
ajaxMorePic(); 
function ajaxMorePic() {
    
    $.ajax({
	//信息流第二条没有推广
         url:'http://military.miercn.com/zbs/getData_feedtest_new_kan?type=1215&page='+pageIndex, 
        async: false,
        type: 'GET',
        dataType: 'json',
        timeout: 2500,
        success: function (data) {
            allPage=data.pagecount;
            var str='';
			if(pageIndex != 1){
				data.list.sort(function () {
                return 0.5 - Math.random()
            });
			}
            
            for(var i=0; i<data.list.length; i++){
                
                var cur=data.list[i];
					cur.url = cur.url.replace('forum.miercn.com/hotnews/', "club.miercn.com/wd/")
					//cur.litpic = cur.litpic.replace('https://pic2.miercn.com','http://pic2.nuxue.com')
					
					if(listIndex==2){
						str_class = 'style = "font-weight:bold;color:#ff3300"';
					}else{
						str_class = '';
					}
						
						if(cur.litpic3){
							cur.litpic2 = cur.litpic2.replace('https://pic2.miercn.com','http://pic2.nuxue.com')
							cur.litpic3 = cur.litpic3.replace('https://pic2.miercn.com','http://pic2.nuxue.com')
							 str+= '<li class="recommend_news_many clearfix"><a class="3"  href="'+cur.url+'" pdata="detail|hottj_tuijian|4|0" target="_blank" title="'+cur.title+'"><h3 '+str_class+'>'+cur.title+'</h3><p class="img-wrap clearfix"><span class="fl"><img class="animation scrollLoading"  data-url="'+cur.litpic+'"  src="'+cur.litpic+'"  alt="'+cur.title+'" width="152"  height="90"></span> <span class="fl"><img class="animation scrollLoading"   data-url="'+cur.litpic2+'"   src="'+cur.litpic2+'"  alt="'+cur.title+'" width="152"  height="90"></span>     <span class="fl"><img class="animation scrollLoading" data-url="'+cur.litpic3+'"    src="'+cur.litpic3+'"  alt="'+cur.title+'" width="152"  height="90"></span><span class="fl wz">查看更多</span>  </p><pclass="from">'+cur.pubdate+'</p> </a></li><span style="display:none"></span>'
						}else{

						 str+='<li class="recommend_news"><a class="red_news"   href="'+cur.url+'" pdata="detail|hottj_tuijian|5|0" target="_blank"  title="'+cur.title+'"><div class="pic"><img class="scrollLoading"  data-url="'+cur.litpic+'" src="'+cur.litpic+'"  alt="'+cur.title+'"> </div><div class="text"> <h3 '+str_class+'>'+cur.title+'</h3><p class="source"> <span>&nbsp;'+cur.pubdate+'</span></p></div></a></li><span style="display:none"></span>'
						}
						ad = '';
						if(listIndex == 2){
							$('.ad1 script').remove();
							ad = $(".ad1").html();
							
						}else if(listIndex ==4){
							$('.ad2 script').remove();
							ad = $(".ad2").html();
							
						}else if(listIndex == 6){
							$('.ad3 script').remove();
							ad = $(".ad3").html();
							
						}else if((listIndex)%2==0 && listIndex!=0 ){  
							if(listIndex == 8){
								$('.ad4 script').remove();
								ad = $(".ad4").html();
								
							}else{
								$('.ad5 script').remove();
								ad = $(".ad5").html();
							}
							
						}
						str += ad;
						
						
						
					
						
						
					
				
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
$(window).scroll(function () {
	
	
	
    if(slideFlag && parseInt($('.see_more').eq(0).offset().top-$(window).scrollTop()-$(window).height()+$('.see_more').eq(0).height())<0 && pageIndex<22){
        slideFlag=false;
        ajaxMorePic()
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


