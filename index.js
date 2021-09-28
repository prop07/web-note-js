var addTxt1 = document.getElementById("addTxt1");
var addTxt2 = document.getElementById("addTxt2");
counter = 1;
addNote = () => {
  if (addTxt1.value == "" || addTxt2.value === "") {
    document.getElementById("empty").textContent = "Empty field detected";
  } else {
    var element = document.createElement("div");
    element.innerHTML = `
    <div id="notes" class='card m-2 notes${counter}'>
            <div class='card-header p-2 text-center'>
            <b>${counter}. </b>
            ${addTxt1.value}
            </div>
            <p class="card-text p-2 text-center">${addTxt2.value} </p>
            <div class='text-center p-2'>
            <button class="btn btn-primary" id='${counter}' onclick ="deletepost(this.id)">Delete Note</button>
            </div>
        </div>
        `;
    document.getElementById("posts").children[0].append(element);
    // uncommentdown
    // addTxt1.value = "";
    // addTxt2.value = "";
    counter = counter + 1;
  }
};

function deletepost(clickedid) {
  document
    .getElementsByClassName(`notes${clickedid}`)
    .notes.parentElement.remove();
}
// function deleteposts() {
//   // for (i = 1; i < counter; i++) {
//   //   if (deletepost(i) == undefined) {
//   //     continue;
//   //   }
//   //   console.log(i);
//   //   deletepost(i);
//   deletepost(2);
//   // }
// }
