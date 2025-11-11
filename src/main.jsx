import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import { About, Sustainability, Contact } from './pages/Static'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import ProductPage from './pages/Product'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/chi-siamo" element={<About />} />
        <Route path="/sostenibilita" element={<Sustainability />} />
        <Route path="/contatti" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/prodotti/:slug" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
