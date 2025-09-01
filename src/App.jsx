import React, { useContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import News from './pages/News'
import { ThemeContext } from './context/ThemeContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'

const App = () => {
  const [articles, setArticles] = useState([])
  const {theme} = useContext(ThemeContext)

  useEffect(()=> {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])
  return (
    <BrowserRouter>
      <Navbar setArticles={setArticles}/>
      <Routes>
        <Route path='/' element={<News country='us' category='general' articles={articles} setArticles={setArticles} />}/>
        <Route path='/business' element={<News country='us' category='business' articles={articles} setArticles={setArticles} />}/>
        <Route path='/entertainment' element={<News country='us' category='entertainment' articles={articles} setArticles={setArticles} />}/>
        <Route path='/general' element={<News country='us' category='general' articles={articles} setArticles={setArticles} />}/>
        <Route path='/health' element={<News country='us' category='health' articles={articles} setArticles={setArticles} />}/>
        <Route path='/science' element={<News country='us' category='science' articles={articles} setArticles={setArticles} />}/>
        <Route path='/sports' element={<News country='us' category='sports' articles={articles} setArticles={setArticles} />}/>
        <Route path='/technology' element={<News country='us' category='technology' articles={articles} setArticles={setArticles} />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
