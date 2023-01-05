import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import { Page } from './Page'
import { AddPage } from './AddPage'

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [pages, setPages] = useState([]);
	const [selectedPage, setSelectedPage] = useState('Pages List')
	const [newPage, setNewPage] = useState({title: '', content: '', status: '', name: ''})
	const [currentPage, setCurrentPage] = useState({})
	const [articleData, setArticleData] = useState({})

	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchPages();
	}, []);
	
	const handleAddPageButton = () => {
		setSelectedPage("Add Page")
	}

	if(selectedPage==="Pages List")
		return (
			<main>	
				<h1>WikiVerse</h1>
				<h2>An interesting 📚</h2>
				<div>
					<button onClick={handleAddPageButton}>Add Page</button>
				</div>
				<div>
					{pages.map((pages,idx) => <PagesList 
					pages={pages} 
					key={idx} 
					setSelectedPage={setSelectedPage} 
					setCurrentPage={setCurrentPage} 
					setArticleData={setArticleData}/>)}
				</div>
			</main>
		)
	else if(selectedPage === "Add Page") {
		return (
			<main>
				<h1>WikiVerse</h1>
				<h2>Add Your Very Own Page!</h2>
				<AddPage newPage={newPage} setNewPage={setNewPage} setSelectedPage={setSelectedPage}/>
			</main>
		)
	}

	else if(selectedPage === "Single Page") {
		return(
			<main>
				<h1>WikiVerse</h1>
				<Page setSelectedPage={setSelectedPage} currentPage={currentPage} fetchPages={fetchPages} articleData={articleData}/>
			</main>
		)
	}
}