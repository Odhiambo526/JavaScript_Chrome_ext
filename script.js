let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})


/*
 - click on inspect
 - click on application tab
 - click on localStorage
 i key
 ii value
 - hit on console tab
 - type in "localStorage.clear()"
 - it clears all the key-value pairs
 - type in localStorage.setItem(parse in a string e.g string of url)
 - hit entered- you have key-value pair
 - refresh
 resisting data from its refresh

            CHALLENGE
            // 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings



let myLeads = `["www.awesomelead.com"]`

// 1. Turn the myLeads string into an array
myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array
myLeads.push("www.lead2.com")
// 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string
console.log(typeof myLeads)

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})



MORE EXAMPLE
// Get the leads from the localStorage - PS: JSON.parse()
// Store it in a variable, leadsFromLocalStorage
// Log out the variable

let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

console.log(leadsFromLocalStorage)
*/

/*  EVERYTHING LEARNT ON THIS PROJECT
=> const variable {we use const as we are not going to re-assign it}
=> adding event listener
=> learnt about innerHTML
=> learnt about inputEL.value
=> Functions, parameter and arguments
=> template strings
=> localStorage {
    fetching string from local storage(localStorage.getItem()), 
    saving things in local storage(localStorage.setItem(),
    storing data (JSON.stringify())
    )}
=>  Objects and Arrays e.g Objects stored inside of arrays (tabs[0].url)
*/