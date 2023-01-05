import React, {useEffect} from 'react';
import apiURL from '../api'


export const PagesList = ({pages, setSelectedPage, setCurrentPage, setArticleData}) => {
	
	console.log(pages.slug)
	const fetchPage = async() => {
		const res = await fetch(`${apiURL}/wiki/${(pages.slug)}`)
		const articleData = await res.json()
		setArticleData(articleData)
		console.log(articleData)
	}

	const handleClick = (e) => {
		setCurrentPage(pages)
		fetchPage()
		setSelectedPage("Single Page")
	}

	return (
		<>
			<p onClick={handleClick}>{pages.title}</p>
		</>
	)
} 
