import { twitterServerUrl } from './credentials.js'; //to prevent leaking the url of server

let nInterval;
let live;
let tweets = [];
let tweetContainer;
let searchString = "";
let uniqueIds = new Set();


window.onload = function () {//initial call
    let checkBox = document.getElementsByName('liveFeed')[0];
    checkBox.addEventListener("click", (evt) => { live = checkBox.checked });
    document.getElementById('searchBar').addEventListener("input", handleSearch);
    tweetContainer = document.getElementsByClassName('feed')[0];
    nInterval = setInterval(updateFeed, 5000);
    getTweets();
}

/**
 * Gets called when searchbar is used
 *
 * @param event
 * @returns None, calls pauseFilter to filter the tweets based on username and text content
 */
function handleSearch(event) {
    searchString = event.target.value.trim().toLowerCase();
    //console.log(searchString);
    pauseFilter();
}

/**
 * Goes through the tweets and filters the list based on searchString
 *
 * @param None 
 * @returns None, filters the tweets
 */
function pauseFilter() {
    let filtered = tweets.filter(obj=> {
        let text = String(obj['text']);
        let name = String(obj['user']['name']);
        return text.toLowerCase().includes(searchString) || name.toLowerCase().includes(searchString);
    });
    appendToFeed(filtered);
}

/**
 * Converts the date from UTC to a readable format
 *
 * @param Date 
 * @returns None, returns a date in readable format
 */
function convertDate(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var dt = date.getDate();

    return (month + '-' + dt + '-' + year);
}

/**
 * Calls getTweets in a set interval of 5 seconds
 *
 * @param None 
 * @returns None, new tweets will be retrieved
 */
function updateFeed() {
    //console.log(live);
    if (live) {
        getTweets();
    }
}

/**
 * Retrieves tweets from the server
 * @async
 * @param None
 * @returns None, new tweets will be appended to tweets; function will wait for fetch before calling refreshTweetss
 */
async function getTweets() {
    const url = twitterServerUrl;

    await fetch(url)
        .then(res => res.json()).then(data => {
            // do something to parse data
            //console.log(data);
            //the code below this filters out duplicate posts
            data['statuses'].forEach(tweet => {
                if (!uniqueIds.has(tweet.id)) {
                    uniqueIds.add(tweet.id);
                    tweets.push(tweet);
                }
            });
            //console.log(tweets);
            //console.log(uniqueIds);
        })
        .catch(err => {
            // error catching
            console.log(err)
        });
    //console.log(tweets);
    refreshTweets();
}

/**
 * Removes all existing tweets from tweetList and then append all tweets back in
 * @param {Array<Object>} tweets - A list of tweets
 * @returns None, the tweets will be renewed
 */
function refreshTweets() {
    //filter for current tweets from live update based on given searchString 
    let filtered = tweets.filter(obj=> {
        let text = String(obj['text']);
        let name = String(obj['user']['name']);
        return text.toLowerCase().includes(searchString) || name.toLowerCase().includes(searchString);
    });

    // sort by date
    // {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort}
    const sortedResult = filtered.sort((left, right) => {
        new Date(left['created_at']) - new Date(right['created_at']);
    });

    // execute the arrow function for each tweet
    // {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach}

    //the code below appends all the sorted posts to the feed container.
    appendToFeed(sortedResult);
}

/**
 * Appends all posts to the feed
 * @param Array
 * @returns None, will append each obj from the tweets list onto the feed 
 */
function appendToFeed(passIn) {
    while (tweetContainer.firstChild) {
        tweetContainer.removeChild(tweetContainer.firstChild);
    }
    let tweetList;
    if(passIn.length != 0) {
        tweetList = document.createElement("ul");
        tweetList.className = "ulFeed";
    }

    passIn.forEach((obj) => {
        var post = document.createElement("li");
        post.className = "post";

        var post_image = document.createElement("img");
        post_image.className = "post_image";
        post_image.src = obj['user']['profile_image_url'];

        var post_author = document.createElement("div");
        post_author.className = "post_author";

        var post_author_name = document.createElement("p");
        post_author_name.className = "post_author_name";
        post_author_name.appendChild(document.createTextNode(String(obj['user']['name']) + " "));

        var post_author_id_date = document.createElement("span");
        post_author_id_date.className = "post_author_id_date";
        var d = new Date(obj['created_at']);
        let date_post = convertDate(d);

        var author = document.createElement("p");
        author.textContent = "@" + obj['user']['name'];
        var date = document.createElement("p");
        date.textContent = date_post;
        post_author_id_date.appendChild(author);
        post_author_id_date.appendChild(date);
        //post_author_id_date.textContent = "@" + obj['user']['name'] + " " + date_post;

        var post_text = document.createElement("span");
        post_text.className = "post_text";
        post_text.textContent = obj['text'];

        post_author_name.appendChild(post_author_id_date);
        post_author_name.appendChild(post_text);
        post_author.appendChild(post_author_name);

        post.appendChild(post_image);
        post.appendChild(post_author);
        tweetList.appendChild(post);
        //console.log(obj);
    });
    if (passIn.length != 0){
        tweetContainer.appendChild(tweetList);
    }
}