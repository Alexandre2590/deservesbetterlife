import React from 'react'

export default function Home() {
  return (
    <>
      <div className="Home">
        <h2>Home</h2>
        <p>This is a sample project with the MERN stack</p>

        <div className="wrap">
          <div className="search">
            <input
              type="text"
              className="searchTerm"
              placeholder="What are you looking for?"
            />
            <button type="submit" className="searchButton" ><i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
