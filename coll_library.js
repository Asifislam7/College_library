console.log("this is the index page");

function Book(name,author,price){

    this.name=name;
    this.author=author;
    this.price=price;
}

//display constructor

function Display(){








}

//adding the prototype of add and clear functions

Display.prototype.add= function(book){
    console.log("adding to UI");
    tablebody=document.getElementById('tablebody');
     let uistring="";
    uistring+= `
    <tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.price}</td>
          </tr>
    `;

    tablebody.innerHTML= uistring;
};

//implementing the clear function
Display.prototype.clear= function(){
let libraryform= document.getElementById('libraryform');
libraryform.reset();
}

//implementing the validate function
Display.prototype.validate= function(book){
    if (book.name.length<2 || book.author.length<2){
        return false;
    }
    else {
        return true;
    }
}


//implementig the show function
Display.prototype.show= function(type,showmessage){
  let message=  document.getElementById('message');
  message.innerHTML= `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>Message</strong> ${showmessage}.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  `;

  setTimeout(function() {
      message.innerHTML= '';
  },2000);




}







// add eventlistner to the form added as per the id
let libraryform= document.getElementById('libraryform');
libraryform.addEventListener('submit',Functionsubmit); //addevent listner pe function ka name only not parenthesis


function Functionsubmit(e){

    e.preventDefault(); //prevents the reload on add event listener/ page k page me hoga sb kuch.
    console.log("you have submitted the form");
    let name= document.getElementById('Bookname').value;  //value retrieve krne k liye value use krte h 
    let author=document.getElementById('author').value;
    let price=document.getElementById('price').value;
// we will grab these three properties only for the book .
// if we would have worked for the backend as well for the delivery of the bookthen we would have grabbbed all the properties.
    
    let book= new Book(name,author,price);
    console.log(book);

    let display= new Display();

   if(display.validate(book)){

    display.add(book);
    display.clear();
    display.show('success','Your book has been successfully added');

   }

   else{
       display.show('danger','sorry you cannot add this book');
   }
    



}
