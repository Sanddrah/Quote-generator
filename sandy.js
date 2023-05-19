'use strict';

const quote = document.querySelector('.quote')
const authors = document.querySelector('.source')
const btn = document.querySelector('.btn-quote')
const tweet = document.getElementById('tweet')

const getQuote = async ()=>{
  // fetch data from api
 const response = await fetch('https://type.fit/api/quotes')
 const quotes = await response.json()
// generate random number
 const random = Math.floor(Math.random() * quotes.length)
// create variable for quotes
 const allquotes = quotes[random].text
 const source = quotes[random].author

//  assign anonymous to quotes with author null
 if(source === null){
  authors = 'Anonymous'
 }

//  display quotes in html
 quote.innerHTML = allquotes
 authors.innerHTML = '-' + source

//  customize tweet intent to quotes
 tweet.href = `https://twitter.com/intent/tweet?text= ${allquotes} -${source}`

}
// getQuote()
onload = function(){
  getQuote()
  btn.addEventListener('click', getQuote)
  setInterval(getQuote, 10000)
}

