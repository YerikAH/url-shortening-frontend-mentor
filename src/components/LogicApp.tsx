import React, { useState } from 'react'

export default function LogicApp() {
  const [urlUser, setUrlUser] = useState<string>("")
  const [inputError, setInputError] = useState(false)



  const handleChange = (evt : React.ChangeEvent<HTMLInputElement>) =>{
    let userChange = evt.target.value
    setUrlUser(userChange)
  }
  const handleSubmit = (evt:React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    getData()
  }

  async function getData(){

    let urlGet  = "https://api.shrtco.de/v2/shorten";
    
    let options = {
        method:"POST",
        headers:{
            "Content-type":"application/json; charset=utf-8"
        },
        body:JSON.stringify({
            url:urlUser
        })
    }
    try {
        let res = await fetch(urlGet,options)
        let json = await res.json()
        if(!res.ok){
            throw {status:res.status, statusText:res.statusText};
        }
        console.log(json)
    } catch (error) {
        if(error instanceof Error){
            console.log(error)
        }
    }

  }



  return (
    <>
    <div>
        <form onSubmit={(evt)=>handleSubmit(evt)}>
            <label htmlFor="url">Enter a URL:</label>
            <input type="text" id="url" name="url" onChange={(evt)=>handleChange(evt)} value={urlUser} />
            <input type="submit" value="Short URL"/>
        </form>
    </div>
    <div className="">

    </div>
    </>
  )
}
