let newelement = document.createElement("div");




newelement.innerHTML=`
<div class="fixed-top bg-secondary p-2 text-dark bg-opacity-25" >
<nav class="navbar sticky-top navbar-light bg-light shadow-lg border-bottom-30 " id="header">
    
        <h1>Ice and Fire - Books</h1>
        <div>
        <div class="dropdown">
        <input type="text" class="dropdown-toggle shadow-lg ml-5 bg-white rounded" data-bs-toggle="dropdown" placeholder="Search.." id="myInput" onkeyup="filterFunction()">
        <ul class="dropdown-menu" id="myDropdown">
          <li><a class="dropdown-item" href="#"></a></li>
          <li><a class="dropdown-item" href="#"></a></li>
          <li><a class="dropdown-item" href="#"></a></li>
          <li><a class="dropdown-item" href="#"></a></li>
          <li><a class="dropdown-item" href="#"></a></li>
          <li><a class="dropdown-item" href="#"></a></li>
          <li><a class="dropdown-item" href="#"></a></li>
          <li><a class="dropdown-item" href="#"></a></li>
          <li><a class="dropdown-item" href="#"></a></li>
          <li><a class="dropdown-item" href="#"></a></li>
        </ul>
        </div>
        </div>

      </nav>
      </div>
      <br><br><br>
      <br><br>
`
let body = document.querySelector("#body");



body.appendChild(newelement);   // to add nav bar and search



let carray0=[];
let carray1=[];
let carray2=[];
let carray3=[];
let carray4=[];
let carray5=[];
let carray6=[];
let carray7=[];
let carray8=[];
let carray9=[];




async function book() {
    try{
      const response = await fetch("https://www.anapioficeandfire.com/api/books/");
      let users = await response.json();
      console.log(users);
      return users;
     }catch(err){
       console.error(err); 
     }
   }
    
   book().then(m => {
   
   

let container = document.createElement("div");

container.className="container";

container.id="books";

let body = document.querySelector("#body");


body.appendChild(container); 

   for(let i=0; i<(m.length/2);i++){
    

    let element = document.createElement("div");

   
    
    element.innerHTML=`
    
    <div class="row">


    <div class="col-lg-6 col-md-6 col-sm-12 ">
      <div class="shadow-lg p-3 mb-5 bg-white rounded"> 
        <div class="card-body">
                      <h3 class="card-title">Card title</h3>
                      <h5 class="card-title1">Card title</h5>
                     <p class="card-text1"></p>
             <div class="text-wrap"> <p class="card-text2"> </p>   
                                     <p class="card-text3"></p>
                                     <p class="card-text4"></p>
             </div>
         </div>
     </div>
</div>

     <div class="col-lg-6 col-md-6 col-sm-12">
     <div class="shadow-lg p-3 mb-5 bg-white rounded"> 
         <div class="card-body">
                      <h3 class="card-title">Card title</h3>
                      <h5 class="card-title1">Card title</h5>
                      <p class="card-text1"></p>
                <div class="text-wrap"> <p class="card-text2"> </p>   
                                        <p class="card-text3"></p>
                                        <p class="card-text4"></p>
                </div>
          </div>
      </div>
</div> 
</div>
    
    `
   
    let eachbook = document.querySelector("#books");
    

    eachbook.appendChild(element);
    
    }

    let bookname = document.querySelectorAll(".card-title");
    let ISBN = document.querySelectorAll(".card-title1");
    let pages = document.querySelectorAll(".card-text1");
    let authors = document.querySelectorAll(".card-text2");
    let publisher = document.querySelectorAll(".card-text3");

    let dropdown = document.querySelectorAll(".dropdown-item");

    let charall = document.querySelectorAll(".card-text4");
    

  let characterarray =[];






    for(let i=0;i<m.length;i++){         

        bookname[i].innerText =`BOOK NAME:   ${m[i].name}` ;    // SET BOOK NAME

        dropdown[i].innerText =`${m[i].name}` ; 
        ISBN[i].innerText =`ISBN:   ${m[i].isbn}` ;    // No of pages
        pages[i].innerText =`No of Pages:   ${m[i].numberOfPages}` ; 

        let aut = m[i].authors.join(",");
        authors[i].innerText =`Authors: ${aut}` ; 
let date = (m[i].released).split("T");

const mydate = new Date(date[0]);
let datefinal = (mydate.toDateString());

        publisher[i].innerText =`Publisher: ${m[i].publisher} || Released dt: ${datefinal}` ;

    
    }









// for character fetch name

    for(let i=0;i<m.length;i++){ 
 
        for(let j=0;j<20;j++)
        {
           

let charac = m[i].characters[j];

let k = character(charac).then(n=> {



if(i==0){
     if(n.name != ""){
    carray0.push(n.name);}
if(carray0.length==7)
{let name = carray0.join(", ");
charall[0].innerText =`Characters: ${name} etc.` ;}}

if(i==1){
carray1.push(n.name);
if(carray1.length==7)
{   let name = carray1.join(", ");
    charall[1].innerText =`Characters:  ${name}  etc.` ;
}}
if(i==2){
    if(n.name != ""){carray2.push(n.name);}   
if(carray2.length==7)
{   let name = carray2.join(", ");
    charall[2].innerText =`Characters:  ${name}  etc.` ;}}

    if(i==3){
        if(n.name != ""){carray3.push(n.name);}   
    if(carray3.length==7)
    {   let name = carray3.join(", ");
        charall[3].innerText =`Characters:  ${name}  etc.` ;}}


        if(i==4){
            if(n.name != ""){carray4.push(n.name);}   
        if(carray4.length==9)
        {   let name = carray4.join(", ");
            charall[4].innerText =`Characters:  ${name}  etc.` ;}}

            if(i==5){
                if(n.name != ""){carray5.push(n.name);}   
            if(carray5.length==7)
            {   let name = carray5.join(", ");
                charall[5].innerText =`Characters:  ${name}  etc.` ;}}

                if(i==6){
                    if(n.name != ""){carray6.push(n.name);}   
                if(carray6.length==7)
                {   let name = carray6.join(", ");
                    charall[6].innerText =`Characters:  ${name}  etc.` ;}}

                    if(i==7){
                        if(n.name != ""){carray7.push(n.name);}   
                    if(carray7.length==9)
                    {   let name = carray7.join(", ");
                        charall[7].innerText =`Characters:  ${name}  etc.` ;}}

                        if(i==8){
                            if(n.name != ""){carray8.push(n.name);}   
                        if(carray8.length==7)
                        {   let name = carray8.join(", ");
                            charall[8].innerText =`Characters:  ${name}  etc.` ;}}

                            if(i==9){
                                if(n.name != ""){carray9.push(n.name);}   
                            if(carray9.length==7)
                            {   let name = carray9.join(", ");
                                charall[9].innerText =`Characters:  ${name}  etc.` ;}}

});




async function character(x) {
    try{
      const response = await fetch(x);
      let users = await response.json();
      return users;
     }catch(err){
       console.error(err); 
     }
   }}

} // charcter fetch over

   });

   function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
   div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
   for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1 && (txtValue != "")) {
        a[i].style.display = "";
        a[i].className="bg-success text-white";
        a[i].style.textDecoration = "none";
    } else {
      a[i].style.display = "none";
      a[i].style.textDecoration = "none"; 

     }
    }

 }
  let val;

 let v5 =  document.querySelectorAll(".dropdown-item");
 for (let i = 0; i < v5.length; i++) {
   v5[i].addEventListener("click", function() {
    
    val = v5[i].innerHTML;

    document.getElementById("myInput").value= val;

    const container = document.querySelectorAll('.row');

     for(let j=0;j<container.length;j++)
     
    {

        while (container[j].firstChild) {
            container[j].removeChild(container[j].firstChild);
        }
    }
    
    let elementnew = document.createElement("div");

    elementnew.innerHTML=`   
<div class="row">


    <div class="col-lg-10 col-md-10 col-sm-12">
             <div class="shadow-lg p-3 mb-5 bg-white rounded"> 
                        <div class="card-body">
                                 <h3 class="card-title">Card title</h3>
                                 <h5 class="card-title1">Card title</h5>
                                 <p class="card-text1"></p>
                                <div class="text-wrap"> <p class="card-text2"> </p>   
                                     <p class="card-text3"></p>
                                     <p class="card-text4"></p>
                                </div>
                        </div>
               </div>
    </div>
</div>
    
    `
   
    let eachbook = document.querySelector("#books");
    eachbook.appendChild(elementnew);
    
console.log(val);

book().then(m => {

    for(let i=0;i<m.length;i++)
    {

    if(val==m[i].name)
    {

        let bookname = document.querySelector(".card-title");
        let ISBN = document.querySelector(".card-title1");
        let pages = document.querySelector(".card-text1");
        let authors = document.querySelector(".card-text2");
        let publisher = document.querySelector(".card-text3");

        let date = (m[i].released).split("T");

    const mydate = new Date(date[0]);
    let datefinal = (mydate.toDateString());

        bookname.innerText =`BOOK NAME:   ${m[i].name}` ;    // SET BOOK NAME

       
        ISBN.innerText =`ISBN:   ${m[i].isbn}` ;    // No of pages
        pages.innerText =`No of Pages:   ${m[i].numberOfPages}` ; 

        let aut = m[i].authors.join(",");
        authors.innerText =`Authors: ${aut}` ; 

        publisher.innerText =`Publisher: ${m[i].publisher} || Released dt: ${datefinal}` ;
        let charall = document.querySelector(".card-text4");
        let array = [];

        if(i==0){array = carray0};
        if(i==1){array = carray1};
        if(i==2){array = carray2};
        if(i==3){array = carray3};
        if(i==4){array = carray4};
        if(i==5){array = carray5};
        if(i==6){array = carray6};
        if(i==7){array = carray7};
        if(i==8){array = carray8};
        if(i==9){array = carray9};
       
        let name = array.join(", ");
        charall.innerText =`Characters:  ${name}  etc.` ;



    }

    }
   




});



   });
 }