var div = document.createElement("div")
div.style.marginTop = "100px"
div.style.marginLeft= "200px"



var input = document.createElement("input")
input.setAttribute("type","text")
input.style.width = "30%"
input.id="countryname"

var button = document.createElement("button")
button.setAttribute("type","button")
button.innerHTML="Click Me"
button.style.margin = "5px"
button.addEventListener("click",getdata)

var p_tag = document.createElement("p")
p_tag.id="acive"

var p_tag1 = document.createElement("p")
p_tag1.id="deaths"

var p_tag2 = document.createElement("p")
p_tag2.id="recovered"

div.append(input,button,p_tag,p_tag1,p_tag2);
document.body.append(div)


async function getdata(){
    let res = document.getElementById("countryname").value;
    console.log(res);
    try {
        var res1 = await fetch(`https://api.covid19api.com/total/dayone/country/${res}`);
        let res2 = await res1.json();
        index = res2.length-1
        console.log(`Active : ${res2[index].Active}, Deaths : ${res2[index].Deaths}, Recovered : ${res2[index].Recovered}`)
        p_tag.innerHTML= `Active : ${res2[index].Active}`
        p_tag1.innerHTML= `Deaths : ${res2[index].Deaths}`
        p_tag2.innerHTML= `Recovered : ${res2[index].Recovered}`
    }
    catch(error){
        console.log(error)
    }
}