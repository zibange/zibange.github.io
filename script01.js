// JavaScript source code
window.onload = wecomePage;
function wecomePage() {
    var ans = prompt("这是一个私人网站，请输入密码：");
    if (ans == "123") {
        alert("yes");
    }
    else {
        alert("no");
        // 关闭当前页面，**注意必须是window.open()打开的页面才有效果**
        window.opener = null;
        window.open('', '_self');
        window.close();

    }
}