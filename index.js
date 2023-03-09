// creating usernames and profileUrls list intially empty
let userNames = [];
let profileUrls = [];

// Accessing input element
const inputEl = document.getElementById("input-el");

// Accessing both underordered lists
const ulEl = document.getElementById("ul-el");
const ulEl2 = document.getElementById("ul-el-2");

// Accessing buttons of username, delete button and save tab url
const deleteBtn = document.getElementById("delete-btn");
const userNameBtn = document.getElementById("input-btn");
const saveTabUrl = document.getElementById("tab-btn");

// getting data of both list or arrays from local storage
const userNamesFromLocalStorage = JSON.parse(localStorage.getItem("userNames"));
const profileUrlsFromLocalStorage = JSON.parse(localStorage.getItem("profileUrls"));

// checking if usernames list is not empty
if (userNamesFromLocalStorage) {
  userNames = userNamesFromLocalStorage;
  render(userNames);
}

// adding event listener to the save tab url button
saveTabUrl.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    //accessing tab from api     
    profileUrls.push(tabs[0].url);
    // setting an item in local storage          
    localStorage.setItem("profileUrls", JSON.stringify(profileUrls));
    render(profileUrls);
  });
});

// function to render lists data in the form of list.
function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `;
  }
  //checking which list is being rendered   
  if (leads === userNames) {
    ulEl.innerHTML = listItems;
  } else {
    ulEl2.innerHTML = listItems;
  }
}

// adding event listener to the delete button, when click double times delete all of the data in both lists
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  userNames = [];
  profileUrls = [];
  render(userNames);
  render(profileUrls);
});

// adding event listener to the username button, upon clicking input value is being added to the usernames list.
userNameBtn.addEventListener("click", function () {
  userNames.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("userNames", JSON.stringify(userNames));
  render(userNames);
});
