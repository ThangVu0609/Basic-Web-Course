function myFunction(){
    var chuoiso = document.getElementById("string").value;
    var getNumber = chuoiso.split(",");
    getNumber.sort(function(a,b){return a-b});
    document.getElementById("abc").innerHTML = "Số lượng các chữ số: " + getNumber.length;
    var row= document.getElementById("row").value;
    //var numberOfRow = math.ceil(getNumber.length/row);
    var ketqua;
    for(var i=0; i<getNumber.length; i++){
        if(getNumber[i]<0){
            if(getNumber[i]%2==0){
                ketqua+= ("<div class=\"square negative even\">"+getNumber[i]+"</div>");
            }
            else{
                ketqua+= ("<div class=\"square negative odd\">"+getNumber[i]+"</div>");
            }
        }
        else{
            if(getNumber[i]>0){
                if(getNumber[i]%2==0){
                    ketqua+= ("<div class=\"square positive even\">"+getNumber[i]+"</div>");
                }
                else{
                    ketqua+= ("<div class=\"square negative odd\">"+getNumber[i]+"</div>");
                }
            }
            else{
                ketqua+= ("<div class=\"square\">"+getNumber[i]+"</div>");
            }
        }
    }
    document.getElementById("showNum").innerHTML = ketqua;
}