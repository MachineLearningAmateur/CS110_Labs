import {twitterServerUrl} from './credentials.js';

let nInterval;
let live;
let tweets = [];
let tweetContainer;
let searchString = ""; 

window.onload = function() {
    let checkBox = document.getElementsByName('liveFeed')[0];
    checkBox.addEventListener("click", (evt) => {live = checkBox.checked});
    let search = document.getElementById('searchBar');
    search.oninput = (evt) => {searchString = search.value; console.log(searchString)};
    tweetContainer = document.getElementsByClassName('feed')[0];
    nInterval = setInterval(updateFeed, 5000);
}
/**
 * Calls getTweets in a set interval of 5 seconds
 *
 * @param None 
 * @returns None, new tweets will be retrieved
 */
function updateFeed() {
    console.log(live);
    if (live) {
        getTweets();
    }
}

function getTweets() {
    const url = twitterServerUrl;

    fetch(url)
       .then(res => res.json()) .then(data => {  
       // do something to parse data
       console.log(data);
       data['statuses'].forEach(tweet => {
           tweets.push(tweet);
       })
       console.log(tweets);
    })
    .catch(err => {
        // error catching
    console.log(err) });
    
    refreshTweets(tweets);
}

/**
 * Removes all existing tweets from tweetList and then append all tweets back in
 *
 * @param {Array<Object>} tweets - A list of tweets
 * @returns None, the tweets will be renewed
 */
function refreshTweets(tweets) {
    // feel free to use a more complicated heuristics like in-place-patch, for simplicity, we will clear all tweets and append all tweets back
    // {@link https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript}
    while (tweetContainer.firstChild) {
        tweetContainer.removeChild(tweetContainer.firstChild);
    }
    console.log('deleting content from feed');

    // create an unordered list to hold the tweets
    // {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement}
    const tweetList = document.createElement("ul");
    // append the tweetList to the tweetContainer
    // {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild}
    tweetContainer.appendChild(tweetList);

    // all tweet objects (no duplicates) stored in tweets variable

    // filter on search text
    // {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter}
    //const filteredResult = tweets.filter(...);


    // sort by date
    // {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort}
    //const sortedResult = filteredResult.sort(...);

    // execute the arrow function for each tweet
    // {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach}
   
    // sortedResult.forEach(tweetObject => {
    //     // create a container for individual tweet
    //     const tweet = document.createElement("li");

    //     // e.g. create a div holding tweet content
    //     const tweetContent = document.createElement("div");
    //     // create a text node "safely" with HTML characters escaped
    //     // {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode}
    //     const tweetText = document.createTextNode(tweetObject.text);
    //     // append the text node to the div
    //     tweetContent.appendChild(tweetText);

    //     // you may want to put more stuff here like time, username...
    //     tweet.appendChild(tweetContent);

    //     // finally append your tweet into the tweet list
    //     tweetList.appendChild(tweet);
    // });
}