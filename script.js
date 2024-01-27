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



}

const episodes = getAllEpisodes();

const allEpisodes = episodes.map(tvEpisodeDetails);

function addSearchInput(episodes) {
  const rootElem = document.getElementById("root");

  
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.id = "search-input";
  searchInput.placeholder = "Search episodes";

  
  const matchingCount = document.createElement("p");
  matchingCount.id = "matching-count";

  
  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    filterEpisodes(episodes, searchTerm, rootElem, matchingCount);
  });

  
  document.body.insertBefore(searchInput, rootElem);
  document.body.insertBefore(matchingCount, rootElem);
}

function filterEpisodes(episodes, searchTerm, rootElem, matchingCount) {
  const filteredEpisodes = episodes.filter((episode) => {
    const summaryLowerCase = episode.summary.toLowerCase();
    const nameLowerCase = episode.name.toLowerCase();

    return summaryLowerCase.includes(searchTerm) || nameLowerCase.includes(searchTerm);
  });

  
  matchingCount.textContent = `${filteredEpisodes.length} episodes match your search.`;

  
  const template = document.getElementById("tv-episodes");
  rootElem.innerHTML = "";
  rootElem.appendChild(template);

  filteredEpisodes.map(tvEpisodeDetails);
}

addSearchInput(episodes)


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
