// Mở box chat
function OpenBoxChat(){
    var node = document.getElementById("ChatBox")
    node.style.visibility = "visible"
    var node2 = document.getElementById("ChatLogo")
    node2.style.visibility = "hidden"
}

function CloseBoxChat(){
    var node = document.getElementById("ChatBox")
    node.style.visibility = "hidden"
    var node2 = document.getElementById("ChatLogo")
    node2.style.visibility = "visible"
}


// Tăng giảm số lượng
var sl = 1;
function Down() {
    if (sl>1)
    {
        sl=sl-1;
    }
    document.getElementById("number").innerHTML = sl;
}
function Up() {
        sl=sl+1;
    document.getElementById("number").innerHTML = sl;
}