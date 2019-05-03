var x = 0;
a_list = [];

document.getElementById("img1").src = "/static/img/1.jpg";
document.getElementById("img2").src = "/static/img/2.jpg";

document.getElementById("img1").addEventListener("click", function () {
    click(this);
});

console.log("Hi");

function click(message) {

    if (x > 6) {
        var xhr = new XMLHttpRequest();
        var url = "http://35.238.164.231/:5000/submit";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json.email + ", " + json.password);
        }
        };

        var data = JSON.stringify({"email": a_list});
        console.log(data);
        xhr.send(data);
    }
    else{
        x++;
        var random = Math.random();
        let text = message.src.substring(33);
        console.log(x);
        console.log(a_list);
        a_list.push(text);

    }
}
