# SICTC College and Career Fair Website

**Table of Contents**
1. [Overview](#overview)  
       &nbsp;&nbsp; a. [What each file does](#what-each-file-does)  
       &nbsp;&nbsp; b. [The Process](#the-process)
3. [Pushing information to Firebase](#pushing-information-to-firebase)
4. [Pulling information from Firebase](#pulling-information-from-firebase)
5. [Disecting 2-dimensional dictionaries](#disecting-2-dimensional-dictionaries)
6. [Displaying information to the website using javascript](#displaying-information-to-the-website-using-javascript)

## Overview

### What each file does

The SICTC College and Career Fair Website, which throughout this documentation will be called CCF, is comprised of four main parts.
  1. index.html - The main html file that is used to display the website.
  2. get.js - The main javascript file which retrieves information from firebase and builds each card (each college/company).
  3. addCard.html - An html file which has a form used to submit information neatly to firebase.
  4. bootstrap.css - An [open-source CSS style sheet](https://getbootstrap.com/) used for styling throughtout the CCF website.

A "card" is each visibly distinguisable section comprised of a college or company on the webpage.

### The Process

In order to add a new college/company:
  1. Open the addCard.html file
  2. Fill out the form and click submit

The newly pushed data will immediately be displayed on the main page. If not, refresh the page.

No action is required to display new information because the website updates when a firebase value is changed or added.

## Pushing information to Firebase

Any new college/company is added through the addCard.html file, a basic html form that has been formatted with bootstrap. This allows information to added easily and effciently without having to add it manually in firebase.

<img src="images/addcard.png" width="640" height="480"></img>

A static firebase script needs to be ran in order to help with initialzation of firebase into the code.

```js
<script src="https://www.gstatic.com/firebasejs/3.7.4/firebase.js"></script>
```

A firebaseConfig variable is made to store the api information to connect to the firebase.
The CCF website's config variable looks like this:
```js
var firebaseConfig = {
		apiKey: "AIyaSyAnbiYMGExQslJ9styiklG-WPIp6vFBIbE",
		authDomain: "sictc-career-fair.firebaseapp.com",
		projectId: "sictc-career-fair",
		storageBucket: "sictc-career-fair.appspot.com",
		messagingSenderId: "513234127322",
		appId: "1:513434627352:web:bc29fecd5ceeea674b3943",
		measurementId: "G-1GKEYRNJXY",
		databaseURL: "https://sictc-career-fair-default-rtdb.firebaseio.com/"
		};
```
This information is provided when setting up a database for html applications. [See here](https://medium.com/evenbit/getting-started-with-firebase-real-time-database-for-the-web-f53b527aae27)
You may need to add the databaseURL section to the config. This can be done by going to "Realtime Database" then copying the link that appears just above the values in the database.

Then the firebase is initialized, meaning it connects into your code.
```js
firebase.initializeApp(firebaseConfig);
```

A reference is made to the "Items" catagory so that it pushes information to the same area.
```js
var itemsRef = firebase.database().ref('Items');
```

An event listener is also placed on the form (infoForm) so that the information is pushed when, and only when, the user presses submit.
The event lister listens for the "submit" id, and then runs submitForm function.
```js
document.getElementById('infoForm').addEventListener('submit', submitForm);
```

Once the user clicks submit:
  1. The embedded javascript code grabs the information of each form element using their ids and stores each one in a variable.

  2. These variables are then passed into the saveMessage function and the form is reset.
```js
function submitForm(e) {e.preventDefault();
	var name = getInputVal('name');
	var logo = getInputVal('logo');
        var web = getInputVal('web');
        var desc = getInputVal('desc');
	var ia1 = getInputVal('ia1');
	var ia2 = getInputVal('ia2');
	var ia3 = getInputVal('ia3');
	var ia4 = getInputVal('ia4');
	var ia5 = getInputVal('ia5');
	var type = getInputVal('type')

	saveMessage(name,logo,web,desc,ia1,ia2,ia3,ia4,ia5,type);
	document.getElementById('infoForm').reset();
}

// Function to get get form values
function getInputVal(id) {
	return document.getElementById(id).value;
}
   ```

  3. The saveMessage function then makes a firebase reference (a reference id stored in a variable unique to each college/company).
  
  4. This new reference is then set with the form variables we passed in earlier in the form of a dictionary with key:value pairs.

  5. The .set() method automatically pushes this information to firebase with a unique reference that was made earlier.
  ```js
  function saveMessage(name,logo,web,desc,ia1,ia2,ia3,ia4,ia5,type) {
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
	      name: name,
          logo: logo,
          web: web,
          desc: desc,
		ia1: ia1,
		ia2: ia2,
		ia3: ia3,
		ia4: ia4,
		ia5: ia5,
		type: type,
       });
}
  ```

## Pulling information from Firebase



## Disecting 2-dimensional dictionaries



## Displaying information to the website using javascript


