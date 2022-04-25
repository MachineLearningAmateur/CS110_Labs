// specify a url, in this case our web server

let nInterval;

function updateFeed() {
    if (!nInterval) {
        nInterval = setInterval(pullFeed, 5000);    
    }
}

function pullFeed() {
    const url = "ec2-18-209-247-77.compute-1.amazonaws.com:3000/feed/random?q=weather"

    fetch(url)
       .then(res => res.json()) .then(data => {  
       // do something to parse data
    
    })
    .catch(err => {
        // error catching
    console.log(err) }) 
}
