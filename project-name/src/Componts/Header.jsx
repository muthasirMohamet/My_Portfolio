import React from 'react'

export default function Header() {
  return (
    <div className="header">
            <h1><img src="./public/Logo-01.png" alt="" width={100}/></h1>
            <ul>
                <li>
                    <a href="Home">Home</a>
                    <a href="#Bio">Bio</a>
                    <a href="#Skills">Skills</a>
                    <a href="#Projects">Projects</a>
                    <a href="#Contact">Contact</a>
                </li>
            </ul>
        </div>
  )
}
