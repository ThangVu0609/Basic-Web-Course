function gioiThieuBanThan() {
    var name = '"Kiệt"';
    var age = '"29 tuổi"';
    var address = '"Tp.HCM"';
    document.write("Tôi tên " + name + " , " + "năm nay tôi " + age + "." + "<br>");
    document.write("Tôi đang sống tại " + address + "." +"<br>" + "<hr>");
}
// var thongTin = {
//     name = '"Kiệt"',
//     age = '"29 tuổi"',
//     address = '"Tp.HCM"',
//     intro:function(){
//         document.write("Tôi tên " + this.name + " , " + "năm nay tôi " + this.age + "." + "<br>");
//         document.write("Tôi đang sống tại " + this.address + "." +"<br>" + "<hr>");
//     }
// }
// var gioiThieu = {
//     intro:function() {
//         document.write("Tôi tên " + thongTin.name + " , " + "năm nay tôi " + thongTin.age + "." + "<br>");
//         document.write("Tôi đang sống tại " + thongTin.address + "." +"<br>" + "<hr>");
//         }
//     }
// }
var text = "Tôi tên \"{{name)}}\", năm nay tôi \"{{age}} tuổi\".\nTôi đang sống tại \"{{address}}\".";
var a = text.replace("{{name}}","Kiệt"); var text = a;
var b = text.replace("{{age}}","29"); var text = b;
var c = text.replace("{{address}}","Tp.HCM"); var text = c;
var demSoKiTu = text.length;
var xoaChuoi = text.replace("năm nay tôi","");
var chuHoa = text.toUpperCase(); 
var chuThuong = text.toLowerCase();


