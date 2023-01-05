import React, {useState} from 'react';
import apiURL from '../api'

export const Page = ({setSelectedPage, currentPage, fetchPages, articleData}) => {

  const currentPageId = currentPage.slug
  const author = articleData.author.name
  const email = articleData.author.email

  const fetchDelete = async() => {
    const res = await fetch(`${apiURL}/wiki/${currentPageId}`, {
      method: 'DELETE'
    })
    fetchPages()
    setSelectedPage("Pages List")
  }

  const handleDelete = (e) => {
    fetchDelete()
  }
  
  const handleBackButton = async () => {
    setSelectedPage("Pages List")
  }

  return (
    <>
      <h2>{currentPage.title}</h2>
      <p>{currentPage.content}</p>
      <p>Page Status: {currentPage.status}</p>
      <p>Author: {author}</p>
      <p>Email: {email}</p>
      <button onClick={handleDelete}>Delete Article</button>
      <button onClick={handleBackButton}>Back to Main</button>
    </>
  )
} 
	