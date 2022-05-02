// write js code here corresponding to matches.html
var matcharr=JSON.parse(localStorage.getItem("schedule"))
var favarr=JSON.parse(localStorage.getItem("favourites"))||[]

  displaydata(matcharr)

  function displaydata(matcharr){
      document.querySelector("tbody").innerHTML=""
    matcharr.forEach(function (elem){
      var tr=document.createElement("tr")

      var td1=document.createElement("td")
      td1.innerText=elem.matchnum
      var td2=document.createElement("td")
      td2.innerText=elem.teamA

      var td3=document.createElement("td")
      td3.innerText=elem.teamB

      var td4=document.createElement("td")
      td4.innerText=elem.dob

      var td5=document.createElement("td")
      td5.innerText=elem.venue


      var td6=document.createElement("td")
      td6.innerText=" Add as Favourites"
      td6.style.color="green"
      td6.style.cursor="pointer"
      td6.addEventListener("click", function(){
          favouries(elem)
      })


      tr.append(td1,td2,td3,td4,td5,td6)

      document.querySelector("tbody").append(tr)

    })
  }

  function favouries(elem){
      favarr.push(elem)
      localStorage.setItem("favourites",JSON.stringify(favarr))
  }


      function filterplace(){
          var selected=document.getElementById("filterVenue").value

          var filterlist=matcharr.filter(function(elem){
              return elem.venue==selected
          })
          displaydata(filterlist)
      }

  