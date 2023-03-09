let userNames = [];
let profileUrls = [];
const inputEl = document.getElementById("input-el");
const userNameBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const ulEl2 = document.getElementById("ul-el-2");
const deleteBtn = document.getElementById("delete-btn");
const userNamesFromLocalStorage = JSON.parse(localStorage.getItem("userNames"));
const profileUrlsFromLocalStorage = JSON.parse(
  localStorage.getItem("profileUrls")
);

const saveTabUrl = document.getElementById("tab-btn");

if (userNamesFromLocalStorage) {
  userNames = userNamesFromLocalStorage;
  render(userNames);
}

saveTabUrl.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    profileUrls.push(tabs[0].url);
    localStorage.setItem("profileUrls", JSON.stringify(profileUrls));
    render(profileUrls);
  });
});

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
  if (leads === userNames) {
    ulEl.innerHTML = listItems;
  } else {
    ulEl2.innerHTML = listItems;
  }
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  userNames = [];
  profileUrls = [];
  render(userNames);
  render(profileUrls);
});

userNameBtn.addEventListener("click", function () {
  userNames.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("userNames", JSON.stringify(userNames));
  render(userNames);
});
