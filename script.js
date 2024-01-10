const rootElem = document.getElementById("root");

const seasonNumber = () => {
  if(getOneEpisode().season < 10){
    return `S0${getOneEpisode().season}`;
  }
  return `S${getOneEpisode().season}`;
}

const episodeNumber = () => {
  if (getOneEpisode().number < 10) {
    return `E0${getOneEpisode().number}`;
  }
  return `E${getOneEpisode().number}`;
};

const seasonAndEpisode = seasonNumber() + episodeNumber();

const card = document.getElementById("tv-episodes").content.cloneNode(true);

card.querySelector("h3").textContent = getOneEpisode().name+" - "+seasonAndEpisode;
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
