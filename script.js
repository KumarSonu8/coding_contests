let url = "https://kontests.net/api/v1/all";
let card = document.getElementsByClassName("card-container")[0];

let response = fetch(url);
response.then((value) => {
  return value.json();
}).then((contest) => {
  // console.log(contest);
  let ihtml = ""
  for (item in contest) {
    console.log(contest[item]);
    ihtml += `
    <div class="card" style="width: 22rem; display: flex">
      <img src="https://media.geeksforgeeks.org/wp-content/uploads/20220427142321/TopWebsitesForCodingChallengesCompetitions.jpg" class="card-img-top" alt="img">
      <div class="card-body">
        <h5 class="card-title">${contest[item].name}</h5>
        <b class="site">Site: ${contest[item].site}</b>
        <p class="status">Status: ${contest[item].status}</p>
        <p class="start_time">Start Time: ${contest[item].start_time}</p>
        <p class="end_time">End Time: ${contest[item].end_time}</p>
        <a href="${contest[item].url}" class="btn btn-primary">visit site</a>
      </div>
    </div>`
  }
  card.innerHTML = ihtml;
})