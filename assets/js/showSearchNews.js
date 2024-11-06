function showSearchNews(){
 let convertObj = JSON.parse(localStorage.getItem("keyword"))
 let showSearch = "<div class='row p-2'>"
  convertObj?.articles?.forEach(function(searchItem){
   showSearch += `<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
     <a href="${searchItem?.url}">
      <div class="card mt-2">
        <img src=${searchItem?.image} alt="" style="height:300px">
        <h1 class="text-center text-truncate p-2">${searchItem?.title}</h1>
      </div>
     </a> 
   </div>
   `  
  })
 showSearch += "</div>"
 document.querySelector("#searchNews").innerHTML = showSearch
}

showSearchNews()