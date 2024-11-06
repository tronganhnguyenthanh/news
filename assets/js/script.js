let baseUrl = "https://gnews.io/api/v4"
let endPoint = "search"
let apikey = "7312ecd4e93ae6a517cc3ab616bda397"
document.querySelector(".btn.btn-primary").addEventListener("click", function(){
 let searchValue = document.querySelector(".form-control").value
 fetch(`${baseUrl}/${endPoint}?q=${searchValue}&apikey=${apikey}`)
  .then(function(res){
    return res?.json()
  })
  .then(function(keyword){
    localStorage.setItem("keyword", JSON.stringify(keyword))
    window.location.href = "showSearchNews.html"
  })
})