function change1() {
    var cancel_link = "<a href=\"./index.html\">Hủy</a>";
    var update_link = "<a href=\"#\" onclick=\"update()\">Cập nhật</a>";
    var input = "<input type=\"text\">";
    document.getElementById("change1").innerHTML = cancel_link + update_link;
    document.getElementById("name").innerHTML = "<input id=\"name1\" type=\"text\">";
    document.getElementById("birthday").innerHTML = "<input id=\"birthday1\" type=\"text\">";
    document.getElementById("sex").innerHTML = "<input id=\"sex1\" type=\"text\">";
    document.getElementById("address").innerHTML = "<input id=\"address1\" type=\"text\">";
}
/*function cancel() {
    
}*/
function update() {
    var name = document.getElementById("name1").value;
    var birthday = document.getElementById("birthday1").value;
    var sex = document.getElementById("sex1").value;
    var address = document.getElementById("address1").value;
    document.getElementById("change1").innerHTML = "Sửa";
    document.getElementById("name").innerHTML = name;
    document.getElementById("birthday").innerHTML = birthday;
    document.getElementById("sex").innerHTML = sex;
    document.getElementById("address").innerHTML = address;
}