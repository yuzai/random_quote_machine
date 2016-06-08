var a=[
      "真理惟一可靠的标准就是永远自相符合。",
      "土地是以它的肥沃和收获而被估价的；才能也是土地，不过它生产的不是粮食，而是真理。如果只能滋生瞑想和幻想的话，即使再大的才能也只是砂地或盐池，那上面连小草也长不出来的。",
      "我需要三件东西：爱情友谊和图书。然而这三者之间何其相通！炽热的爱情可以充实图书的内容，图书又是人们最忠实的朋友。",
      "时间是一切财富中最宝贵的财富。",
      "世界上一成不变的东西，只有“任何事物都是在不断变化的”这条真理。",
      "没有诚实哪来尊严。"
];
var author=[
     "欧文",
     "别林斯基",
     "蒙田",
     "德奥弗拉斯多",
     "斯里兰卡",
       "西塞罗"
];
var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
$(document).ready(function() {
var b=Math.floor(Math.random()*a.length);
  $(".message1").html(a[b]);
 $(".message2").html("——" + author[b]);   
    $("#getMessage").on("click", function(){
      // Only change code below this line.
      var b=Math.floor(Math.random()*a.length);
  $(".message1").html(a[b]);
 $(".message2").html("——" + author[b]);    // colo[background-color] = colors[b];
 $("body").css("background-color", colors[b]);
      // Only change code above this line.
    });
    $("#tweet-quote").on("click", function(){
      // Only change code below this line.
      window.open("https://www.baidu.com/s?wd=js%20open%20a%20url&rsv_spt=1&rsv_iqid=0xf694f0100006d372&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&rqlang=cn&tn=baiduhome_pg&rsv_enter=1&oq=js%E8%BE%93%E5%87%BA%E7%A0%B4%E6%8A%98%E5%8F%B7&inputT=6980&rsv_t=689cr0JQttCw3lBl%2FrdY%2Bnap2BsemmaEoowbdrFj8PDlKbkPhr%2BmOt46axyubGkWEJBM&rsv_pq=f46ab30f0007e328&rsv_sug3=58&rsv_sug1=45&rsv_sug7=100&rsv_sug2=0&rsv_sug4=7412")    ;
      // Only change code above this line.
    });
      
      
      // Only change code above this line.
    });