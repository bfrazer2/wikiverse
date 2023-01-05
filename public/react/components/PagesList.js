import React, {useEffect} from 'react';
import apiURL from '../api'


export const PagesList = ({pages, setSelectedPage, currentPage, setCurrentPage, setArticleData}) => {
	
	const currentPageSlug = pages.slug
	console.log(pages.slug)
	const fetchPage = async() => {
		const res = await fetch(`${apiURL}/wiki/${currentPageSlug}`)
		const articleData = await res.json()
		setArticleData(articleData)
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
