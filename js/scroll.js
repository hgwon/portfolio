$(function(){
    var nav=$(".nav1>li");
    var cont=$("#contents>div");

    nav.click(function(){
        var target=$(this);
        //.nav>li의 부여된 인덱스 번호를 가져오는 메서드=index()
        var i=target.index();
        // console.log(i);
        
        //현재 클린된 li태그와 같은 순번(index 번호)에 있는
        //#contents>div 를 선택 처리
        var section=cont.eq(i);
        //현재 클릭된 li태그와 같은 순번에 있는 div 태그의 상단
        //위치 값을 가져옴
        //스크롤의 위치값을 div태그의 dffset 값으로 전달하여
        //스크롤 애니메이션이 적용 처리
        var offset=section.offset().top;
        $("html, body").animate({
            scrollTop:offset
        },400);
    });
});