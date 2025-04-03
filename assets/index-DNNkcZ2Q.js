const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/modal-DuqQ2Q20.css"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function Footer() {
  const $footer = document.createElement("footer");
  $footer.classList.add("footer");
  $footer.innerHTML = `<p>&copy; 우아한테크코스 All Rights Reserved.</p>
    <p><img src="./woowacourse_logo.png" width="180" /></p>`;
  return $footer;
}
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/javascript-movie-review/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
    promise = Promise.allSettled(
      deps.map((dep) => {
        dep = assetsURL(dep);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
        }
        link.crossOrigin = "";
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error(`Unable to preload CSS for ${dep}`))
            );
          });
        }
      })
    );
  }
  function handlePreloadError(err) {
    const e = new Event("vite:preloadError", {
      cancelable: true
    });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
__vitePreload(() => Promise.resolve({}), true ? __vite__mapDeps([0]) : void 0);
const Modal = ({
  title,
  poster_path,
  release_date,
  genres,
  overview,
  vote_average
}) => {
  const genreNames = genres.map((genre) => genre.name).join(", ");
  const defaultOverview = "등록된 줄거리 정보가 없습니다.🥲";
  return `    <div class="modal-background active" id="modalBackground">
    <div class="modal">
      <button class="close-modal" id="closeModal">
        <img src="./modal_button_close.png" />
      </button>
      <div class="modal-container">
        <div class="modal-image">
          <img
            src="https://image.tmdb.org/t/p/original/${poster_path}"
          />
        </div>
        <div class="modal-description">
          <div class="movie-description">
            <div class="movie-title">${title}</div>
              <p class="category">
                ${release_date.slice(0, 4)} · ${genreNames}
              </p>
              <div class="rate">
                <strong>평균</strong>
                <img src="./star_filled.png" class="star" />
                <div class="average_rate">${vote_average.toFixed(1)}</div>
              </div>
          </div>
            
          <hr />
          <div class="rating">
            <div class="caption-title"><strong>내 별점</strong></div>
            <div class="user_rate">
              <img src="./star_empty.png" class="rate-star" />
              <img src="./star_empty.png" class="rate-star" />
              <img src="./star_empty.png" class="rate-star" />
              <img src="./star_empty.png" class="rate-star" />
              <img src="./star_empty.png" class="rate-star" />
            </div>
          </div>
          <hr />
          <div class="movie-detail">
            <div class="caption-title"><strong>줄거리</strong></div>
            <div class="detail">${overview ? overview : defaultOverview}</div>
            </div>
        </div>
      </div>
    </div>
  </div>`;
};
function LogoSearchBar() {
  const container = document.createElement("div");
  container.classList.add("logosearchbar-container");
  container.innerHTML = `
    <h1 class="logo">
      <img src="./logo.png" alt="MovieList" />
    </h1>
    <div class="search-container">
      <input placeholder="검색어를 입력하세요." class="search-input"/> 
      <button class="search-button">
        <img src="./search.svg" alt="검색"/>
      </button> 
    </div>
  `;
  return container;
}
function Header({ title, backdrop_path, poster_path, vote_average, overview }) {
  const $header = document.createElement("header");
  $header.innerHTML = `
  <div class="background-container">
    <div class="overlay" aria-hidden="true"></div>
    <img src="https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}" class="banner"/>
    <div class="top-rated-container">
      <div class="top-rated-movie">
        <div class="rate">
          <img src="./star_empty.png" class="star" />
          <span class="rate-value">${vote_average.toFixed(1)}</span>
        </div>
        <div class="title">${title}</div>
        <button class="primary detail">자세히 보기</button>
      </div>
    </div>
  </div>
  `;
  return $header;
}
function onError(status) {
  let message = "";
  switch (status) {
    case 400:
      message = "요청이 잘못되었습니다. 다시 한 번 확인해 주세요.🥲";
      break;
    case 403:
      message = "이 작업을 수행할 권한이 없습니다. 권한을 확인해 주세요.🥲";
      break;
    case 404:
      message = "요청하신 페이지를 찾을 수 없습니다. 주소를 확인해 주세요.🥲";
      break;
    case 500:
      message = "서버에 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.🥲";
      break;
    default:
      message = "알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.🥲";
      break;
  }
  function showError(message2) {
    const errorBox = document.createElement("div");
    errorBox.innerText = message2;
    document.body.appendChild(errorBox);
    setTimeout(() => errorBox.remove(), 3e3);
  }
  showError(message);
}
class APIHandler {
  static async get(endpoint, headers = {}) {
    return this.request("GET", endpoint, headers);
  }
  static async request(method, endpoint, headers = {}) {
    const url = `${"https://api.themoviedb.org/3"}${endpoint}`;
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmY3ZTYzMjRlMTYyMzNlMTY2ZDg5MGQ4YmJmYWUyYSIsIm5iZiI6MTY3OTkyMDIwNC42OTIsInN1YiI6IjY0MjE4YzRjNmEzNDQ4MDExMmJhMThjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.40ExqRMdfCdB6U1T8pL-8WkLX-Xkor7yb__Gjs3zuz0"}`,
        ...headers
      }
    };
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        onError(response.status);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        onError(error.message);
        throw new Error(error.message);
      }
    }
  }
}
class DetailMovieService {
  static async getMovieDetails(movieId) {
    const movieDetails = await APIHandler.get(
      `/movie/${movieId}?language=ko-KR`
    );
    return movieDetails;
  }
}
function Skeleton() {
  const $skeletonContainer = document.createElement("li");
  $skeletonContainer.classList.add("skeletonContainer");
  $skeletonContainer.innerHTML = `
    <div class="skeletonItem">
      <div class="skeleton-image"></div>
      <div class="skeleton-caption"></div>
    </div>
  `;
  return $skeletonContainer;
}
function showSkeleton(count = 20, parentSelector = "section") {
  const $parent = document.querySelector(parentSelector);
  let $listContainer = $parent == null ? void 0 : $parent.querySelector(".skeleton-list");
  if (!$listContainer) {
    $listContainer = document.createElement("ul");
    $listContainer.classList.add("thumbnail-list", "skeleton-list");
    $parent == null ? void 0 : $parent.appendChild($listContainer);
  } else {
    $listContainer.innerHTML = "";
  }
  for (let i2 = 0; i2 < count; i2++) {
    const $skeletonItem = Skeleton();
    $listContainer.appendChild($skeletonItem);
  }
  return $listContainer;
}
function hideSkeleton() {
  const $skeletonLists = document.querySelectorAll(".skeleton-list");
  $skeletonLists.forEach(($list) => {
    $list.remove();
  });
}
function i(...n) {
  return (t) => n.reduceRight((n2, t2) => t2(n2), t);
}
function MovieCaption({ title, vote_average }) {
  const $movieCaption = document.createElement("div");
  $movieCaption.classList.add("item-desc");
  $movieCaption.innerHTML = ` 
  <p class="rate">
    <img src="./star_empty.png" class="star" />
    <span>${vote_average.toFixed(1)}</span>
  </p>
  <div class="movie-title">${title}</div>
`;
  return $movieCaption;
}
function ThumbnailImage({ id, title, poster_path }) {
  if (!poster_path) {
    const $titleElement = document.createElement("div");
    $titleElement.classList.add("thumbnail-title");
    $titleElement.textContent = title;
    return $titleElement;
  }
  const $thumbnailImage = document.createElement("img");
  $thumbnailImage.classList.add("thumbnail");
  $thumbnailImage.dataset.id = id;
  const defaultImage = "./default_poster_image.png";
  $thumbnailImage.src = `https://media.themoviedb.org/t/p/w440_and_h660_face${poster_path}`;
  $thumbnailImage.alt = `${title} Thumbnail 이미지`;
  $thumbnailImage.onerror = () => {
    $thumbnailImage.src = defaultImage;
  };
  return $thumbnailImage;
}
function MovieItem({ id, title, poster_path, vote_average }) {
  const $movieItem = document.createElement("li");
  const $movieItemContainer = document.createElement("div");
  $movieItemContainer.classList.add("item");
  const thumbnailImage = ThumbnailImage({
    id,
    title,
    poster_path
  });
  const movieCaption = MovieCaption({
    title,
    vote_average
  });
  $movieItemContainer.appendChild(thumbnailImage);
  $movieItemContainer.appendChild(movieCaption);
  $movieItem.appendChild($movieItemContainer);
  return $movieItem;
}
class Movie {
  constructor({ id, poster_path, title, vote_average }) {
    __publicField(this, "id");
    __publicField(this, "poster_path");
    __publicField(this, "title");
    __publicField(this, "vote_average");
    this.id = id;
    this.poster_path = poster_path;
    this.title = title;
    this.vote_average = vote_average;
  }
  movieRender() {
    return MovieItem({
      id: this.id,
      title: this.title,
      poster_path: this.poster_path,
      vote_average: this.vote_average
    });
  }
}
class MovieList {
  constructor(movies) {
    __publicField(this, "movieList");
    const createMovie = ({
      id,
      poster_path,
      title,
      vote_average
    }) => new Movie({ id, poster_path, title, vote_average });
    this.movieList = movies.map(i(createMovie));
  }
  renderMovieList() {
    return this.movieList.map((movieInstance) => movieInstance.movieRender());
  }
}
async function ContentsContainer(results, contentTitle) {
  var _a;
  const $main = document.querySelector("main");
  const $section = document.querySelector("section");
  const $h2 = document.createElement("h2");
  $h2.innerText = contentTitle;
  $section == null ? void 0 : $section.appendChild($h2);
  const $listContainer = document.createElement("ul");
  $listContainer.classList.add("thumbnail-list");
  const movieList = new MovieList(results);
  const $movieList = movieList.renderMovieList();
  $movieList.forEach((movie) => $listContainer.appendChild(movie));
  $section == null ? void 0 : $section.appendChild($listContainer);
  const $thumbnails = document.querySelectorAll(".thumbnail");
  $thumbnails.forEach(($thumbnail) => {
    $thumbnail.addEventListener("click", async () => {
      await handleThumbnailClick($thumbnail);
    });
  });
  hideSkeleton();
  if (document.querySelector(".contentContainer")) {
    (_a = document.querySelector(".contentContainer")) == null ? void 0 : _a.remove();
  }
  const $contentContainer = document.createElement("div");
  $contentContainer.classList.add("contentContainer");
  if (results.length === 0) {
    $contentContainer.innerHTML = `
        <img src="./no_results.png">
        <div>검색 결과가 없습니다.</div>
    `;
    $main == null ? void 0 : $main.appendChild($contentContainer);
  }
}
async function handleAdditionalData(movieService, searchMovieService, contentTitle, observer) {
  const isSearchMode = contentTitle.includes('"');
  showSkeleton(20, "section");
  let additionalData;
  if (isSearchMode) {
    const searchQuery = contentTitle.replace(/['"]/g, "").replace(" 검색 결과", "");
    searchMovieService.nextPage();
    additionalData = await searchMovieService.getSearchResult(searchQuery);
  } else {
    movieService.nextPage();
    additionalData = await movieService.getPopularMovies();
  }
  hideSkeleton();
  const movieList = new MovieList(additionalData.results);
  const $movieList = movieList.renderMovieList();
  const $listContainer = document.querySelector(".thumbnail-list");
  $movieList.forEach((movie) => $listContainer == null ? void 0 : $listContainer.appendChild(movie));
  const $newThumbnails = $listContainer == null ? void 0 : $listContainer.querySelectorAll(".thumbnail");
  $newThumbnails == null ? void 0 : $newThumbnails.forEach(($thumbnail) => {
    $thumbnail.addEventListener("click", async () => {
      await handleThumbnailClick($thumbnail);
    });
  });
  if (additionalData.results.length === 0 || movieService.getCurrentPage() === additionalData.total_pages) {
    observer.disconnect();
    return;
  }
}
async function handleThumbnailClick(thumbnailElement) {
  const id = thumbnailElement.dataset.id;
  if (id) {
    const movieDetails = await DetailMovieService.getMovieDetails(Number(id));
    const event = new CustomEvent("modalOpenClicked", {
      detail: movieDetails
    });
    document.dispatchEvent(event);
  }
}
class MovieService {
  constructor() {
    __publicField(this, "currentPage");
    this.currentPage = 1;
  }
  async getPopularMovies() {
    const movies = await APIHandler.get(
      `/movie/popular?language=ko-KR&page=${this.currentPage}`
    );
    return movies;
  }
  nextPage() {
    this.currentPage = this.currentPage + 1;
  }
  getCurrentPage() {
    return this.currentPage;
  }
}
function HeaderSkeleton() {
  const $headerSkeletonContainer = document.createElement("header");
  $headerSkeletonContainer.innerHTML = `
  <div class="background-container skeleton-background">
    <div class="overlay skeleton-overlay" aria-hidden="true">  
    </div>
    <div class="banner skeleton-banner"></div>
    <div class="top-rated-container">
      <div class="top-rated-movie">
        <div class="rate skeleton-rate">
          <div class="skeleton-star"></div>
          <div class="skeleton-rate-value"></div>
        </div>
        <div class="title skeleton-title"></div>
        <div class="primary detail skeleton-button"></div>
      </div>
    </div>
  </div>
  `;
  return $headerSkeletonContainer;
}
const Star = ({ $modalContainer, title }) => {
  const $stars = $modalContainer.querySelectorAll(".rate-star");
  let currentRating = 0;
  $stars.forEach((star, index) => {
    star.addEventListener("click", (event) => {
      event.stopPropagation();
      currentRating = index + 1;
      updateStarDisplay($stars, currentRating);
      saveRating(title, currentRating);
    });
  });
  const savedRating = getRating(title);
  if (savedRating) {
    currentRating = savedRating;
    updateStarDisplay($stars, currentRating);
  }
  function updateStarDisplay(stars, rating) {
    stars.forEach((star, index) => {
      if (index < rating) {
        star.src = "./star_filled.png";
      } else {
        star.src = "./star_empty.png";
      }
    });
    const $userRate = $modalContainer.querySelector(".user_rate");
    const existingDescription = $userRate == null ? void 0 : $userRate.querySelector("div");
    if (existingDescription) {
      existingDescription.remove();
    }
    const rateDescription = document.createElement("div");
    rateDescription.classList.add("rate_description");
    switch (rating) {
      case 1:
        rateDescription.innerHTML = "최악이에요 (2/10)";
        break;
      case 2:
        rateDescription.innerHTML = "별로예요 (4/10)";
        break;
      case 3:
        rateDescription.innerHTML = "보통이에요 (6/10)";
        break;
      case 4:
        rateDescription.innerHTML = "재미있어요 (8/10)";
        break;
      case 5:
        rateDescription.innerHTML = "명작이에요 (10/10)";
        break;
    }
    $userRate == null ? void 0 : $userRate.appendChild(rateDescription);
  }
  function saveRating(movieTitle, rating) {
    const movieRatings = JSON.parse(
      localStorage.getItem("movieRatings") || "{}"
    );
    movieRatings[movieTitle] = rating;
    localStorage.setItem("movieRatings", JSON.stringify(movieRatings));
  }
  function getRating(movieTitle) {
    const movieRatings = JSON.parse(
      localStorage.getItem("movieRatings") || "{}"
    );
    return movieRatings[movieTitle] || null;
  }
  const cleanup = () => {
    $stars.forEach((star, index) => {
      star.removeEventListener("click", () => {
      });
    });
  };
  return {
    cleanup,
    currentRating
  };
};
function openModal({
  title,
  release_date,
  genres,
  poster_path,
  vote_average,
  overview
}) {
  const $modalContainer = document.createElement("div");
  $modalContainer.classList.add("modalcontainer");
  const modalElement = Modal({
    title,
    release_date,
    genres,
    poster_path,
    vote_average,
    overview
  });
  $modalContainer.innerHTML = modalElement;
  const starComponent = Star({
    $modalContainer,
    title
  });
  document.body.appendChild($modalContainer);
  const closeButton = $modalContainer.querySelector("#closeModal");
  if (closeButton) {
    closeButton.addEventListener("click", () => {
      starComponent.cleanup();
      $modalContainer.remove();
    });
  }
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && $modalContainer) {
      starComponent.cleanup();
      $modalContainer.remove();
    }
  });
  const $modalOverlay = $modalContainer.querySelector("#modalBackground");
  if ($modalOverlay) {
    $modalOverlay.addEventListener("click", () => {
      starComponent.cleanup();
      $modalContainer.remove();
    });
  }
}
class SearchMovieService {
  constructor() {
    __publicField(this, "currentPage");
    this.currentPage = 1;
  }
  async getSearchResult(searchWord) {
    const searchResult = await APIHandler.get(
      `/search/movie?query=${searchWord}&include_adult=false&language=ko-KR&page=${this.currentPage}`
    );
    return searchResult;
  }
  nextPage() {
    this.currentPage = this.currentPage + 1;
  }
  getCurrentPage() {
    return this.currentPage;
  }
}
function renderHeader({
  id,
  title,
  backdrop_path,
  poster_path,
  overview,
  vote_average
}) {
  var _a, _b;
  const $container = document.querySelector("#wrap");
  const $header = Header({
    title,
    backdrop_path,
    poster_path,
    overview,
    vote_average
  });
  const $logoSearchBar = LogoSearchBar();
  (_a = $header.querySelector(".top-rated-container")) == null ? void 0 : _a.prepend($logoSearchBar);
  const $headerSkeleton = (_b = document.querySelector("header .skeleton-background")) == null ? void 0 : _b.closest("header");
  if ($headerSkeleton) {
    $headerSkeleton.remove();
  }
  $container == null ? void 0 : $container.prepend($header);
  const $openModalButton = $header.querySelector(".detail");
  if ($openModalButton) {
    $openModalButton.addEventListener("click", async () => {
      const movieDetails = await DetailMovieService.getMovieDetails(id);
      const event = new CustomEvent("modalOpenClicked", {
        detail: movieDetails
      });
      document.dispatchEvent(event);
    });
  }
}
document.addEventListener("modalOpenClicked", (event) => {
  const customEvent = event;
  const { title, release_date, genres, poster_path, vote_average, overview } = customEvent.detail;
  openModal({
    title,
    release_date,
    genres,
    poster_path,
    vote_average,
    overview
  });
});
function handleSearchEvent(searchMovieService) {
  const $input = document.querySelector(".search-input");
  const $button = document.querySelector(".search-button");
  const $section = document.querySelector("section");
  $input == null ? void 0 : $input.addEventListener("keydown", async (event) => {
    const keyboardEvent = event;
    if (keyboardEvent.key === "Enter" && !event.isComposing) {
      const inputValue = event.target.value;
      showSkeleton(20, "section");
      if (inputValue === "") {
        alert("검색어를 입력해주세요.");
      } else {
        const searchResult = await searchMovieService.getSearchResult(
          inputValue
        );
        if ($section) {
          $section.innerHTML = "";
        }
        renderContent(searchResult.results, `"${inputValue}" 검색 결과`);
      }
    }
  });
  $button == null ? void 0 : $button.addEventListener("click", async () => {
    const inputValue = $input == null ? void 0 : $input.value;
    showSkeleton(20, "section");
    if (inputValue === "") {
      alert("검색어를 입력해주세요.");
    } else {
      const searchResult = await searchMovieService.getSearchResult(inputValue);
      if ($section) {
        $section.innerHTML = "";
      }
      renderContent(searchResult.results, `"${inputValue}" 검색 결과`);
    }
  });
}
let currentObserver;
async function renderContent(results, title) {
  if (currentObserver) {
    currentObserver.disconnect();
  }
  ContentsContainer(results, title);
  const $main = document.querySelector("main");
  const $lastItem = document.createElement("div");
  $lastItem.style.height = "10px";
  $main.appendChild($lastItem);
  const movieService = new MovieService();
  const searchMovieService = new SearchMovieService();
  currentObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        handleAdditionalData(
          movieService,
          searchMovieService,
          title,
          currentObserver
        );
      }
    });
  });
  currentObserver.observe($lastItem);
}
function renderFooter() {
  const $container = document.querySelector("#wrap");
  const $footer = Footer();
  $container == null ? void 0 : $container.appendChild($footer);
}
async function main() {
  const movieService = new MovieService();
  const searchMovieService = new SearchMovieService();
  const $container = document.querySelector("#wrap");
  const $headerSkeleton = HeaderSkeleton();
  $container == null ? void 0 : $container.prepend($headerSkeleton);
  showSkeleton(20, "section");
  const data = await movieService.getPopularMovies();
  renderHeader(data.results[0]);
  hideSkeleton();
  renderContent(data.results, "지금 인기 있는 영화");
  handleSearchEvent(searchMovieService);
  renderFooter();
}
main();
