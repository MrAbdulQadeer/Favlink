# Favlink
## Project Description
Chrome extension that allows the user to save usernames and profile URLs in a list. When the user enters a username or profile URL in the input field and clicks the "Save Username" or "Save Tab Url" button, the entered value is added to the corresponding list. When the user clicks the "DELETE ALL" button, all saved data is removed from the lists.

## Technologies Used
1. HTML
2. CSS 
3. JavaScript

## Code Overview
The code is divided into two main sections:

## HTML
The HTML file (index.html) defines the structure of the web page, including the input fields, buttons, and list sections.

## JavaScript
The JavaScript file (index.js) handles the input and button events. It adds the entered values to the corresponding lists and deletes all saved data when the user clicks the "DELETE ALL" button.

## How to Use
1. Enter a username or profile URL in the input field.
2. Click the "Save Username" or "Save Tab Url" button to add the entered value to the corresponding list.
3. To delete all saved data, click the "DELETE ALL" button.

#### Video Demo:  <https://www.loom.com/share/4f6dcac83a3f40cc970eccab0f9f9c6a>

Below is the description of all the files and their related components:

### 1. index.html
#### head
This section contains references to external CSS files that will be used to style the page.
#### body
This section contains the main content of the page, including the input fields, buttons, and list sections.
#### input
This is an HTML input field where the user can enter a username or profile URL.
#### button
These are HTML buttons that allow the user to save the entered username or profile URL, save the current tab's URL, and delete all saved data.
#### section
These are HTML sections that contain unordered lists ul to display the saved usernames and profile URLs.
#### script
This tag includes the JavaScript file index.js that contains the code to handle the input and button events.
#### Purpose
The purpose of this code is to create a simple web application that allows the user to save usernames and profile URLs in a list. When the user enters a username or profile URL in the input field and clicks the "Save Username" or "Save Tab Url" button, the entered value is added to the corresponding list. When the user clicks the "DELETE ALL" button, all saved data is removed from the lists.

### 2. index.css
#### Styles
#### body: 
Applies styles to the entire body of the page, including margins, padding, font family, minimum width, and background color.
#### input: 
Applies styles to the input field, including width, padding, border, border radius, margin, and box-sizing.
#### button: 
Applies styles to the buttons, including border radius, color, background gradient, padding, border, and font weight. The gradient is created using the linear-gradient property.
#### delete-btn: 
Applies styles to the "DELETE ALL" button, including background and text color.
####ul: 
Applies styles to the unordered lists, including margin, list-style, and padding-left.
#### li: 
Applies styles to the list items, including margin-top.
#### a: 
Applies styles to the links, including color.
#### .username and .userurl h3: 
Apply styles to the headers of the username and profile URL sections, including color, margin-bottom, and text-decoration.
#### Purpose
The purpose of this code is to define a consistent and visually appealing style for the web page elements. The styles defined in this code ensure that the page is readable, user-friendly, and attractive.

### 3. index.js
This is a JavaScript code that defines some variables and functions to interact with the HTML elements of a web page. Here's a breakdown of the code:
### Variables
#### userNames: 
an empty array to hold the user names.
#### profileUrls: 
an empty array to hold the profile URLs.
#### inputEl: 
a reference to the input field element in the HTML.
#### userNameBtn: 
a reference to the "Save Username" button element in the HTML.
#### ulEl: 
a reference to the unordered list element in the HTML that displays the user names.
#### ulEl2: 
a reference to the unordered list element in the HTML that displays the profile URLs.
#### deleteBtn: 
a reference to the "DELETE ALL" button element in the HTML.
#### userNamesFromLocalStorage: 
an array of user names retrieved from the local storage.
#### profileUrlsFromLocalStorage: 
an array of profile URLs retrieved from the local storage.
#### saveTabUrl: 
a reference to the "Save Tab Url" button element in the HTML.

### Functions
#### render(leads): 
a function that takes an array of leads (either user names or profile URLs), creates a list of links for each lead, and renders the list in the appropriate unordered list element in the HTML based on whether the leads are user names or profile URLs. The function also updates the local storage with the new leads.
#### deleteBtn.addEventListener("dblclick", function () {...}): 
an event listener that triggers when the "DELETE ALL" button is double-clicked. The function clears the local storage, empties the userNames and profileUrls arrays, and renders the empty lists in the HTML.
#### userNameBtn.addEventListener("click", function () {...}): 
an event listener that triggers when the "Save Username" button is clicked. The function adds the value of the input field to the userNames array, clears the input field, and renders the updated list of user names in the HTML.
#### saveTabUrl.addEventListener("click", function () {...}): 
an event listener that triggers when the "Save Tab Url" button is clicked. The function retrieves the URL of the active tab in the Chrome browser, adds it to the profileUrls array, updates the local storage with the new profile URL, and renders the updated list of profile URLs in the HTML.

The code uses local storage to persist data even if the web page is closed or reloaded.

### 4. manifest.json
This is a manifest file for a Chrome extension. The manifest file is used to define the extension's properties and permissions.

#### "manifest_version": 3: 
This specifies the version of the manifest file format being used. In this case, it is version 3.
#### "version": "1.0": 
This is the version number of the extension.
#### "name": "LinkFave": 
This is the name of the extension.
#### "action": { "default_popup": "index.html", "default_icon": "list.png" }: 
This defines the extension's default popup and icon. The default_popup property specifies the HTML file that will be displayed when the extension is clicked. The default_icon property specifies the icon that will be displayed for the extension.
#### "permissions": ["tabs"]: 
This specifies the permissions required by the extension. In this case, it requires permission to access tabs.

Overall, this manifest file defines the basic properties and permissions for a Chrome extension. When the extension is clicked, it will display the index.html file as a popup and will have permission to access tabs.
