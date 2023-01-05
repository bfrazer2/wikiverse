import React, {useState} from 'react';
import apiURL from '../api'

export const Page = ({setSelectedPage, currentPage, fetchPages, articleData}) => {

  const fetchDelete = async() => {
    const res = await fetch(`${apiURL}/wiki/${(currentPage.slug)}`, {
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
      <p>Author: {articleData.author.name}</p>
      <p>Email: {articleData.author.email}</p>
      <button onClick={handleDelete}>Delete Article</button>
      <button onClick={handleBackButton}>Back to Main</button>
    </>
  )
} 
	