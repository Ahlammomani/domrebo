let fruits=["apple" , "strawberry","banana","charry","orange"];
 let img_array=["apple.jpg","strawberry.jpg","banana.jpg","charry.jpg","orange.jpg"]
 const body=document.body;
 const ul=document.createElement("ul");
 body.appendChild(ul)

 for(let i=0 ; i<fruits.length ; i++){
    const li=document.createElement("li");
    const img=document.createElement("img")
    li.textContent=fruits[i]
    img.src=img_array[i];
    img.style.width="100px";
    img.style.height="100px";

    ul.appendChild(li)
    ul.appendChild(img)

 }