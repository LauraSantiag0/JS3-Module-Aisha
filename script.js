// Constant that stores all episodes
const allEpisodes = getAllEpisodes();

// Function to render the page with episodes
const renderPage = (episodes) => {
  renderHeader(); // Renders the header
  renderCards(episodes); // Renders the episode cards
}

// Function to render the page header
const renderHeader = () => {
  addSearchInput(allEpisodes); // Adds the search box to the header
}

// Function to render the episode cards
function renderCards(episodes) {
  const root = document.getElementById("root");
  const template = document.getElementById("tv-episodes");
  root.innerHTML = "";
  root.appendChild(template);
  
  // Checks if the list of episodes is empty
  if (episodes.length === 0) {
    allEpisodes.forEach((episode) => {
      const card = createCard(episode);
      root.appendChild(card);
    });
  } else {
    episodes.forEach((episode) => {
      const card = createCard(episode);
      root.appendChild(card);
    });
  }
}

// Function to create an episode card
function createCard(episode) {
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
  const card = document.getElementById("tv-episodes").content.cloneNode(true);

  card.querySelector("h3").textContent =
    episode.name + " - " + seasonAndEpisode;
  card.querySelector("img").src = episode.image.medium;
  card.querySelector("[data-summary]").innerHTML = episode.summary;
  return card;
}

// Function to add the search input to the header
function addSearchInput(episodes) {
  const rootElem = document.getElementById("root");

  const searchInput = document.getElementById("q");
  searchInput.type = "text";
  searchInput.id = "search-input";
  searchInput.placeholder = "Search episodes";

  const matchingCount = document.getElementById("matching-count");

  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    filterEpisodes(episodes, searchTerm, rootElem, matchingCount);
  });
}

// Function to filter episodes based on the search term
function filterEpisodes(episodes, searchTerm, rootElem, matchingCount) {
  const filteredEpisodes = episodes.filter((episode) => {
    const summaryLowerCase = episode.summary.toLowerCase();
    const nameLowerCase = episode.name.toLowerCase();

    return (
      summaryLowerCase.includes(searchTerm) ||
      nameLowerCase.includes(searchTerm)
    );
  });

  matchingCount.textContent = ` ${filteredEpisodes.length} episodes match your search.`;

  renderCards(filteredEpisodes); // Renders the cards of the filtered episodes
}

// Function to create the dropdown with episode names
function CreateDropDown(episodes) {
  const select = document.getElementById("select");
  episodes.forEach((episode) => {
    const option = document.createElement("option");
    option.value = episode.name;
    option.text = episode.name;
    select.appendChild(option);
  });

  // Event listener to handle the selection of an episode in the dropdown
  select.addEventListener("change", (event) => {
    const selectedEpisodeTitle = event.target.value;
    const selectedEpisode = episodes.find(episode => episode.name === selectedEpisodeTitle);
    const rootElem = document.getElementById("root");
    
    // Filters and renders only the selected episode
    renderCards([selectedEpisode]);

    // Scrolls to the selected episode on the page
    scrollToEpisode(selectedEpisode);
  });

  return select;
}

// Function to scroll to the selected episode on the page
function scrollToEpisode(episode) {
  const episodeElement = document.getElementById(`episode-${episode.id}`);
  if (episodeElement) {
    episodeElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Create the dropdown with episode names
const selectDropdown = CreateDropDown(allEpisodes);

// Renders the page with all episodes
renderPage(allEpisodes);
