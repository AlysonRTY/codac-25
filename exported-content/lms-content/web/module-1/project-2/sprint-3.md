---
title: Sprint 3
---


## Epic 1: Checkbox filter

Adding filters to a list of data is the most basic yet fundamental thing you can have on a website.

### Create the checkboxes

In one of the pages where you have live data pulled from the API, create at least 2 checkboxes. The goal here is to be able to display all the data if none or all are checked, or only specific data depending on which ones are checked.

### Add an event listener to the checkboxes

From JavaScript add an event listener to all the checkboxes.

**Tip**: the function called during the event must be the same for all checkboxes. Try to use `onchange`.

### Create a function to filter

This is one of the most difficult parts of the project, therefore we will guide you through this problem.

**Considerations:**

* you need to retrieve the _values_ of the checked checkboxes
* a checkbox allows you to select more than one option. Therefore the values of the checked checkboxes need to be stored in an array (use querySelectorAll for this)

**Steps:**

* the function you are about to create will have to first get the values of the checked checkboxes
* once you see that you get the right values you will have to compare the list of your data to the array of checkboxes
* store the entries for which the condition is true in a new array
* call the function that creates the table/list again and send the filtered data

## Epic 2: Fetch data dynamically based on user input

All of the APIs listed in the Free APIs page give you the possibility to have some query parameters (i.e, culture, city, date, keywords, food, comic title). Depending on which API you chose, try to create an input that will dynamically change the query parameter we set at the beginning of this project (i.e, culture, city, date, keyword, food, comic).
