const rootElem = document.getElementById("root");

const card = document.getElementById("tv-episodes").content.cloneNode(true);

card.querySelector("h3").textContent = getOneEpisode().name;
card.querySelector("[data-season]").textContent = getOneEpisode().season;
card.querySelector("[data-episode]").textContent = getOneEpisode().number;
card.querySelector("img").src = getOneEpisode().image.medium;
card.querySelector("[data-summary]").textContent = getOneEpisode().summary;


rootElem.appendChild(card);

//You can edit ALL of the code here
// function setup() {
//   const allEpisodes = getAllEpisodes();
//   makePageForEpisodes(allEpisodes);
// }

// function makePageForEpisodes(episodeList) {
//   const rootElem = document.getElementById("root");
//   // rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  
//   
// }



// window.onload = setup;
