var div = document.createElement('div');
div.style.height = '100px';
div.style.width = '100px';
div.style.border = '1px solid red';
div.id = 'demo';
document.body.appendChild(div);
// 在页面中初始化添加一个div元素

var label = false;
var position = [0, 0];

div.onmousedown = (e)=>{
    // 按下鼠标之后可进行移动
    label = true;
    position = [e.clientX, e.clientY]
}

document.onmousemove = (e)=>{
    if(label === true){
        var delateX = e.clientX - position[0];
        var delateY = e.clientY - position[1];
        // 以上两个是鼠标移动的距离
        var top = parseInt(div.style.top!) || 0;
        var left = parseInt(div.style.left!) || 0;
        div.style.left = left + delateX + 'px';
        div.style.top = top + delateY + 'px';
        // div元素的的移动距离与鼠标的移动距离相同，div元素移动的位置由之前的位置加上移动距离
        position = [e.clientX, e.clientY]
        // 更新移动的位置的坐标方便计算下一个移动的距离
    }
}

div.onmouseup = ()=>{
    // 松开鼠标之后结束移动
    label = false
}