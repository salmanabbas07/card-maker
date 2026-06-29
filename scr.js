function make()
{
    let a = document.getElementById("one").value;
    let b = document.getElementById("two").value;
    let c = document.getElementById("three").value;
    let d = document.getElementById("four").value;
    let e = document.getElementById("five").value;
    let f= document.getElementById("address").value;

    let numOne = document.getElementById("num-1");
    numOne.innerHTML = c;

    let numTwo = document.getElementById("num-2");
    numTwo.innerHTML = b;

    let name = document.getElementById("name-1");
    name.innerHTML = a;

    let father = document.getElementById("f-name");
    father.innerHTML = d;

    let mail = document.getElementById("mail");
    mail.innerHTML = e;

    let addr = document.getElementById("addr");
    addr.innerHTML = f;

}

function font()
{
    let a = document.getElementById("name-1");
    a.style.fontFamily = "ubuntu";
    a.style.fontStyle ="italic"
    a.style.fontSize = "40px"

    let b = document.getElementById("f-name");
    b.style.fontFamily = "ubuntu";
    b.style.fontStyle ="italic"
    b.style.fontSize = "20px"


    let c = document.getElementById("mail");
    c.style.fontFamily = "ubuntu";
    c.style.fontStyle ="italic"
    c.style.fontSize = "20px"


    let d = document.getElementById("addr");
    d.style.fontFamily = "ubuntu";
    d.style.fontStyle ="italic"
    d.style.fontSize = "20px"

    let e = document.getElementById("num-1");
    e.style.fontFamily = "ubuntu";
    e.style.fontStyle ="italic"
    e.style.fontSize = "20px"

    let f = document.getElementById("num-2");
    f.style.fontFamily = "ubuntu";
    f.style.fontStyle ="italic"
    f.style.fontSize = "20px"

}

function bold()
{
    let a = document.getElementById("name-1");
    a.style.fontWeight = "bolder";

    let b = document.getElementById("f-name");
    b.style.fontWeight = "bolder";

    let c = document.getElementById("mail");
    c.style.fontWeight = "bolder";

    let d = document.getElementById("addr");
    d.style.fontWeight = "bolder";

    let e = document.getElementById("num-1");
    e.style.fontWeight = "bolder";

    let f = document.getElementById("num-2");
    f.style.fontWeight = "bolder";
}

function undo() {

    let a = document.getElementById("name-1");
    a.style.fontFamily = "normal";
    a.style.fontStyle ="normal"
    a.style.fontSize = "normal"

    let b = document.getElementById("f-name");
    b.style.fontFamily = "normal";
    b.style.fontStyle ="normal"
    b.style.fontSize = "normal"


    let c = document.getElementById("mail");
    c.style.fontFamily = "normal";
    c.style.fontStyle ="normal"
    c.style.fontSize = "normal"


    let d = document.getElementById("addr");
    d.style.fontFamily = "normal";
    d.style.fontStyle ="normal"
    d.style.fontSize = "normal"

    let e = document.getElementById("num-1");
    e.style.fontFamily = "normal";
    e.style.fontStyle ="normal"
    e.style.fontSize = "normal"

    let f = document.getElementById("num-2");
    f.style.fontFamily = "normal";
    f.style.fontStyle ="normal"
    f.style.fontSize = "normal"


    let g = document.getElementById("name-1");
    g.style.fontWeight = "normal";

    let h = document.getElementById("f-name");
    h.style.fontWeight = "normal";

    let i = document.getElementById("mail");
    i.style.fontWeight = "normal";

    let j = document.getElementById("addr");
    j.style.fontWeight = "normal";

    let k = document.getElementById("num-1");
    k.style.fontWeight = "normal";

    let l = document.getElementById("num-2");
    l.style.fontWeight = "normal";
}