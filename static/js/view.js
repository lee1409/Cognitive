var x = 1;
a_list = [];

document.getElementById("img1").src = "/static/img/1_true.jpg";
document.getElementById("img2").src = "/static/img/1_false.jpg";

document.getElementById("img1").addEventListener("click", function () {
    click(this);
});
document.getElementById("img2").addEventListener("click", function () {
    click(this);
});

let y = {
    1: ["1_false", "1_true", "Which one show more simple?"],
    2: ["2_true", "2_false", "Which appears more in a group?"],
    3: ["3_true", "3_false", "Which appears more in a group?"],
    4: ["4_false", "4_true", "Which appears more in a group?"],
    5: ["5_false", "5_true", "Which appears more in a group?"],
    6: ["6_true", "6_false", "Which appears more in a group?"],
};

console.log("Hi");

function click(message) {
    x++;
    let text = message.src.substring(33);
    a_list.push(text);
    if (x > 6) {
        var redirect = function(url, method) {
            var form = document.createElement('form');
            form.method = method;
            form.type = text;
            form.action = url;
            var input = document.createElement('input');
            input.name = "data";
            input.type = "hidden";
            input.value =JSON.stringify({1:a_list});
            form.appendChild(input);
            document.body.appendChild(form);
            form.submit();
        };

        redirect("http://35.238.164.231:5000/submit", 'POST');

    }
    else{
        const img1 = y[x][0];
        const img2 = y[x][1];
        document.getElementById("img1").src = `/static/img/${img1}.jpg`;
        document.getElementById("img2").src = `/static/img/${img2}.jpg`;
        console.log(x);
        console.log(a_list);
    }
}
