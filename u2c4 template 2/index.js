// write js code here corresponding to index.html
// You should add submit event on the form
 document.getElementById("masaiForm").addEventListener("submit",myfunction)
  var matcharr=JSON.parse(localStorage.getItem("schedule"))||[];

  function myfunction(){
    event.preventDefault();

    var dataobj={
      matchnum:masaiForm.matchNum.value,
      teamA:masaiForm.teamA.value,
      teamB:masaiForm.teamB.value,
      dob:masaiForm.date.value,
      venue:masaiForm.venue.value,

    }
    matcharr.push(dataobj)
    
    
    localStorage.setItem("schedule",JSON.stringify(matcharr))
    
     window.location.href="matches.html"

  }