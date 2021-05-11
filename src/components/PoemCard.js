import React from 'react'
import '../styles/Art.css'

export default function PoemCard({poem}) {
    return (
        <div className="poem-card">
            <h4 className="poem-title">{poem.title}</h4>
            <p className="poem-content">{poem.content}</p>
            <p className="poem-date">{poem.date}</p>
        </div>
    )
}