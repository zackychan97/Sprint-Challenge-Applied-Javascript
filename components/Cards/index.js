// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// make function and grab grab



function cardFabricator(item) {
    //Elements
    const keeperOfTheCards = document.querySelector(".cards-container"),
    aCardThatIsKept = document.createElement("div"),
      keptCardHeadline = document.createElement("div"),
      keptCardAuthorContainer = document.createElement("div"),
      keptCardImageContainer = document.createElement("div"),
      cardImage = document.createElement("img"),
      author = document.createElement("span");
  
    //Classes
    aCardThatIsKept.classList.add("card");
    keptCardHeadline.classList.add("headline");
    keptCardAuthorContainer.classList.add("author");
    keptCardImageContainer.classList.add("img-container");
  
    //TextContent
    keptCardHeadline.textContent = item.headline;
    cardImage.src = item.authorPhoto;
    author.textContent = item.authorName;
  
    //Append 
    keeperOfTheCards.appendChild(aCardThatIsKept);
    aCardThatIsKept.appendChild(keptCardHeadline);
    aCardThatIsKept.appendChild(keptCardAuthorContainer);
    keptCardAuthorContainer.appendChild(keptCardImageContainer);
    keptCardImageContainer.appendChild(cardImage);
    keptCardAuthorContainer.appendChild(author);
  
    return aCardThatIsKept;
  }
  
  const articleAxios = axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
  
      const contents = Object.values(response.data.articles);
  
      contents.forEach(keys => {
        keys.forEach(card => {
          cardFabricator(card);
        });
      });
    })
    .catch(error => {
      return error;
    })






