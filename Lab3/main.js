// specify a url, in this case our web server

var serverURL = "ec2-18-209-247-77.compute-1.amazonaws.com:3000/";

var feed = [];

var nInterval;


class Post {
    constructor(id) {
        this.id = id;
        this.author = null;
        this.date = null;
        this.image = null;
        this.text = null;
        this.next = null;
      }
}

class PostFeed {
    constructor(head) {
        this.head = head;
        this.length = 1;
        this.tail = head;
      }
      push(post) {
            this.tail.next = post;
            this.tail = post;
            this.length++;
      }
}

function test() {
    let jason = new Post("jason");
    let jenny = new Post("jenny");
    let people = new PostFeed(jason);
    people.push(jenny);
    let pointer = people.head;
    while (pointer != null) {
        console.log(pointer.id);
        pointer = pointer.next;
    }
}


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
    console.log(err); })
}

let searchString = ""; // here we use a global variable

const handleSearch = event => {
    searchString = event.target.value.trim().toLowerCase();
    // you may want to update the displayed HTML here too
}
