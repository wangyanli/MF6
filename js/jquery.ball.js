
 //图标拖动
 $(function () {
            $("#mf6ball").draggable();
        });
 //图标触发
   $(document).ready(function () {
            var isMouseDown = false;
            var isMouseOver = false;
            $("#mf6ball").mousedown(function () {
                isMouseDown = true;
            }).mouseup(function () {

                var x = event.clientX;
                var y = event.clientY;
                if (x > 216 && x < 642 && y > 198 && y < 540) {
                    isMouseOver = true;
                }
                else {
                    isMouseOver = false;
                }

                if (isMouseDown && isMouseOver) {
                    $("#mf6tubiao").hide();
                    document.getElementById("myVideo").play();
                }
            });
        });

        //视频当前播放时间
        function currentTime() {
            var pl = document.getElementById("myVideo");
            return pl.currentTime;
        }

        var times = ["0", "0.5", "5","6", "8", "9", "10"];   //显示信息的时间
        var strs = [
                        "",
                        "MF6，专利六种膳食纤维组合，全面保护肠道。",
                         "MF6中的可溶性膳食纤维通过肠道有益菌的酵解产生的短链",
						 "脂肪酸是结肠粘膜细胞的关键营养物质；",
                         "同时，肠道有益菌的生长依赖于可溶性膳食纤维提供营养；",
						 "因此，保护肠道屏障，防止细菌易位，膳食纤维的作用至关重要。",
                         "MF6中的不溶性膳食纤维，能促进肠道蠕动 维护肠道正常生理功能。"
                         ];    //显示信息
        var times_img = ["0", "7", "9.5"];   //显示图片的时间
        var strS_imgSrc = ["image/caiseziti.png", "image/caizi3.png", "image/caizi2.png"];     //图片地址

        var i = 0;
        var j = 0;
        $(document).ready(function showMsg() {
            if (currentTime() >= times[i]) {
                $("#foottext").html(strs[i]);
                i++;
            }
            showImg();
            setTimeout(showMsg, 1000);
        });
        function showImg() {
            if (currentTime() >= times_img[j]) {
                $("#caiseziti").attr("src", strS_imgSrc[j]);
                j++;
            }
        }

	//箭头闪烁
	var msecs = 200; //改变时间得到不同的闪烁间隔；
	var counter = 0; 
	function soccerOnload() {
	setTimeout("blink()", msecs);
	}
	function blink() {
	soccer.style.visibility =
	(soccer.style.visibility == "hidden") ? "visible" : "hidden";
	counter +=1;
	setTimeout("blink()", msecs);
	}
