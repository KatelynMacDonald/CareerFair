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

<img src="https://previews.dropbox.com/p/thumb/ABWBRb9iCs6Cl4Zc9Z6BoigERl-NxWyAQND4p8MJ8yLKtmIm8xtGL_Ogyny1XIq5NCWmRAUsVC6HOh_mwRygGpJ4ksNCW19P5l2kRpr_ZMpWMHD2g7s1EuXWkJUIdQ7uftod69-1jiPb_Pgat8URUh2jWDF5NjW-kVt_ZAtUikRgoapPTDj8YRuCRmBW7i6e0csvhheOu1-oXrQiHKEWhOzHKng9BipKiRtyA1MRbXeZnlf217J_jchmtATVUOHSnXrpjxINRlhC-711UJKy_caqMTzU2iyL0f3FoBOD1_UaQgJnxaJ4wbU3sFvq1ATidADk6LTKaTvuXrn3nBGQJ0s7BkNMI9TyqB9PjWENTuAaHQ/p.png" width="640" height="480"></img>

A static firebase script is ran in order to help with initialzation of firebase into the code.

Once the user clicks submit:
  1. The embedded javascript code grabs the information of each form element using their ids and stores each one in a variable.


  2. These variables are then passed into the saveMessage function and the form is reset.


  3. The saveMessage function then makes a firebase reference (a reference id stored in a variable unique to each college/company).


  4. This new reference is then set with the form variables we passed in earlier in the form of a dictionary with key:value pairs.


  5. The .set() method automatically pushes this information to firebase with a unique reference that was made earlier.

## Pulling information from Firebase



## Disecting 2-dimensional dictionaries



## Displaying information to the website using javascript


