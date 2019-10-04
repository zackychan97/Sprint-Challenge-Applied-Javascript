// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


function theTabsMon(tLink) {
//elements
    const t = document.createElement('div'),
    daTabs = document.querySelector('.tabs .topics');

//append
daTabs.appendChild(t);

//class
t.classList.add('tab');

//content
t.textContent = tLink;

return daTabs;
}


const daAxioTopic = axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    console.log(response);
    trendingTopics = response.data.topics;

    trendingTopics.forEach(topic => {
        theTabsMon(topic);
    });
})
.catch(error => {
    console.log(error)
})