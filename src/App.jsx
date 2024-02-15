
import { useState } from 'react'
import './App.css'

function App() {

  let quotes=[];

  async function loadQuotes(){
    const response= await fetch("https://type.fit/api/quotes");
    quotes=await response.json();
  }



  const [quote, setQuote] = useState({
    text: 'quote of the day',
    author: 'rafsal',
  })
const random=()=>{
  const select=quotes[Math.floor(Math.random()*quotes.length)];
  setQuote(select);
}
const share=()=>{
  window.open('https://twitter.com/?lang=en')
}

loadQuotes();

  return (
    <>
      <div className="container">
        <div className="quote">"{quote.text}"</div>
        <div>
          <div className="line"></div>
          <div className="bottom">
            <div className="author">-{quote.author.split(',')[0]}</div>
            <div className="icons">
            <i onClick={()=>{random()}} class="fa-solid fa-arrows-rotate"></i>
            <i onClick={()=>{share()}} class="fa-solid fa-share-nodes"></i>
            </div>
          </div>
        </div>

       
      </div>
    </>
  )
}

export default App
