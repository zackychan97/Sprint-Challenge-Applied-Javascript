// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    // creating my elements
    const headContainer = document.querySelector('.header-container'),
    headerDiv = document.createElement('div'),
    spanDate = document.createElement('span'),
    h1Title = document.createElement('h1'),
    spanTemp = document.createElement('span');

    // text content

    spanDate.textContent = 'March 28, 2019';
    h1Title.textContent = 'Lambda Times';
    spanTemp.textContent = '98°';

    // classes
    
    headerDiv.classList.add('header');
    spanDate.classList.add('date');
    spanTemp.classList.add('temp');

    //appending
    headContainer.appendChild(headerDiv);
    headerDiv.appendChild(spanDate);
    headerDiv.appendChild(h1Title);
    headerDiv.appendChild(spanTemp);
    
    return headerDiv;

}
 
Header();





