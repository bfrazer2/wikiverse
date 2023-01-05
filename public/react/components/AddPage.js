import React from "react"
import apiURL from "../api"

export const AddPage = ({
    newPage,
    setNewPage,
    setSelectedPage
}) => {

    async function postPage() {
        try{
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'applicaiton/JSON'},
                body: JSON.stringify(newPage)
            }
            const response = await fetch(`${apiURL}/wiki`, requestOptions)

        } catch(err) {
            console.log("Arrrgh, thar be an error!", err)
        }
    }

    const handleChange = (e) => {
        const value = e.target.value
        setNewPage({
            ...newPage,
            [e.target.name]: value
        })
    }

    const handleSubmit = async (e) => {
        postPage()
        setNewPage({title: '', content: '', status: '', name: '', email: '' })
    }

    const handleBackButton = async () => {
        setSelectedPage("Pages List")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' name='title' value={ newPage.title } onChange={handleChange}/>
                <input type='text' name='content'  value={ newPage.content } onChange={handleChange}/>
                <input type='text' name='status' value={ newPage.status } onChange={handleChange}/>
                <input type='text' name='name' value={ newPage.name } onChange={handleChange}/>
                <input type='text' name='email' value={ newPage.email } onChange={handleChange}/>
                <button type='submit'>Submit</button>
                <button onClick={handleBackButton}>Back to Main</button>
            </form>
        </>
    )
}