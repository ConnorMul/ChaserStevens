
import PoemCard from './PoemCard'
import '../styles/Art.css'
import { useEffect, useState } from 'react'

function Art() {
    const [poems, setPoems] = useState([])

    useEffect(() => {
      fetch("http://localhost:3001/poems")
      .then(r => r.json())
      .then(setPoems)
    }, [])

    const poemCards = poems.map(poem => <PoemCard key={poem.id} poem={poem}/>)

    return (
        <div className="poem-cards-container">
            {poemCards}
        </div>
    )
}

export default Art