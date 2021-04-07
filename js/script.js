window.onload = ajax;
var response
var count = 0;
function ajax(){
    //XMLHTTP request object
    var xhr = new XMLHttpRequest();
    var url = "https://jsonplaceholder.typicode.com/todos";
    xhr.open("GET",url,true);

    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        var response = JSON.parse(this.responseText);
            var output = "";
            for(var i=0;i<response.length;i++){
                output += "<tr>";
                output += "<td>" + response[i].id + "</td>";
                output += "<td>" + response[i].title + "</td>";
                if(response[i].completed == false){
                    output += "<th>"+ "<input type =\"checkbox\" id="+i+" onclick = \"check("+i+");\">" + "</input>" + "</th>"; 
                }
                else{
                    output += "<th>" + "<input type=\"checkbox\" checked disabled>" + "</input>" + "</th>";
                }
                output += "</tr>"
            document.getElementById("data").innerHTML = output;
            }
        }
    }

      

    xhr.send();
}
var tag = document.getElementsByTagName("input");
function check(t){
    var temp = document.getElementById(t);
    if(temp.checked == true)
        count++;
    else
        count--;
    if(count == 5)
        alert("Congrats. 5 Tasks have been Successfully Completed");
}