const tvEpisodeDetails = (episode) => {

  const seasonNumber = () => {
    if (episode.season < 10) {
      return `S0${episode.season}`;
    }
    return `S${episode.season}`;
  };

  const episodeNumber = () => {
    if (episode.number < 10) {
      return `E0${episode.number}`;
    }
    return `E${episode.number}`;
  };
  
const seasonAndEpisode = seasonNumber() + episodeNumber();


const rootElem = document.getElementById("root");

const card = document.getElementById("tv-episodes").content.cloneNode(true);

card.querySelector("h3").textContent = episode.name + " - " + seasonAndEpisode;
card.querySelector("img").src = episode.image.medium;
card.querySelector("[data-summary]").innerHTML = episode.summary;
rootElem.appendChild(card);

return card;
}

const episodes = getAllEpisodes();

const allEpisodes = episodes.map(tvEpisodeDetails);

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
