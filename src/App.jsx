
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
function App() {

  const [bookmarks,setBookmarks]=useState([])

  const [readingTime,setReadingTime] = useState(0)

  const handaleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }

  const handaleMarkAsRead = time =>{
    setReadingTime(readingTime + time);
  }
  return (
    <>
    <Header></Header>
    <div className='md:flex gap-10'>
    <Blogs handaleAddToBookmark ={handaleAddToBookmark} handaleMarkAsRead={handaleMarkAsRead} ></Blogs>
    <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
    </div>
    </>
  )
}

export default App
