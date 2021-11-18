let myArray=[];
let match=[];
let input=document.getElementById("input");
const listli=document.getElementById("list");
const add=document.getElementById("add");
const clearall=document.getElementById("clearall");
let p=0;
const leadsFromLocalStorage1 = JSON.parse(localStorage.getItem("myArray"));
const leadsFromLocalStorage2 = JSON.parse(localStorage.getItem("match"));


if (leadsFromLocalStorage1 && leadsFromLocalStorage2) {
    myArray = leadsFromLocalStorage1;
    match=leadsFromLocalStorage2;
    display(myArray,match);
}



var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    for(let i=0;i<myArray.length;i++)
    {
       
             ev.target.classList.toggle('checked');
             match.push(myArray[ev.target.value]);
             localStorage.setItem("match", JSON.stringify(match) );
             dele(ev.target.value);
   }
}, false);


function display(leads,match)
{
    
    let listItems = "";
    let cnt=0;
    if(leads!=[])
    for (let i = 0; i < leads.length; i++) 
    {   cnt++;
        listItems += `<li id="k" value="${i}"> ${leads[i]}
          <button class="close" onclick="dele(${i})">x</button></li>  `;
    }
    if(match!=[])
    {
        for (let i=0; i < match.length; i++) 
        {   cnt++;
            listItems += `<li id="k" value="${i}" class="checked"> ${match[i]}
            <button class="close" onclick="matchdel(${i})">x</button></li>`;
        }
    }
    listli.innerHTML= listItems;
  
}


function matchdel(p)
{
    match.splice(p,1);
    localStorage.setItem("match", JSON.stringify(match) );
    display(myArray,match);
    console.log(p);  
}

function dele(p)
{
    myArray.splice(p,1);
    localStorage.setItem("myArray", JSON.stringify(myArray) );
    display(myArray,match);
    console.log(p);  
}

add.addEventListener("click", function() {

    if(input.value ==="")
    {
        alert("Input Can not Empty...");
        return;
    }
    
        myArray.push(input.value);
    localStorage.setItem("myArray", JSON.stringify(myArray) );
    input.value="";
    display(myArray,match);   
});

clearall.addEventListener("click",function() 
{
    localStorage.clear()
    myArray = [];
    match=[];
    display(myArray,match);
});

