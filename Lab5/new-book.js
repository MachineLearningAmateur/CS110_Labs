window.onload = (event) => {
  console.log("loaded");
  const btn = document.getElementById("book-form");
  btn.onsubmit = resetForm;
};

function resetForm(event) {
  event.preventDefault();
  //const content = document.getElementById('book-form');
  const data = {
    isbn: `${document.getElementById("1").value}`,
    title: `${document.getElementById("2").value}`,
    author: `${document.getElementById("3").value}`,
    published_date: `${document.getElementById("4").value}`,
    publisher: `${document.getElementById("5").value}`,
    numOfPages: `${document.getElementById("6").value}`,
  };
  const response = fetch("http://localhost:3000/book", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  console.log(response.status); //200
  console.log(response.statusText); // OK
  document.getElementById("1").value = "";
  document.getElementById("2").value = "";
  document.getElementById("3").value = "";
  document.getElementById("4").value = "";
  document.getElementById("5").value = "";
  document.getElementById("6").value = "";

}
