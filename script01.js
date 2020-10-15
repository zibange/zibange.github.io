// JavaScript source code
window.onload = wecomePage;
function wecomePage() {
    var ans = prompt("这是一个私人网站，请输入密码：");
    if (ans == "123456") {
        alert("欢迎您进入此网站！");
        window.location="easyForm.html"
    }
    else {
        alert("你不能进入此网站");
        // 关闭当前页面，**注意必须是window.open()打开的页面才有效果**
        window.location = "byeBye.html";
        return false;
    }
}