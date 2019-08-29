import React from 'react'
import '../App.css'

const Resources = () => {
  return (
    <div id="resources-main">
      <h1>Reduce, Reuse, Recycle</h1>
      <ul className="resources-list">
        <li className="resurces-list-item"><a href="https://www.grownyc.org/recycle"  target="_blank" rel="noopener noreferrer" alt="Grow NYC">Grow NYC</a> - Learn about New York's recycling & composting options.</li>
        <li className="resurces-list-item"><a href="https://www.terracycle.com/en-US" target="_blank" rel="noopener noreferrer" alt="Terracycle">Terracycle</a> - Learn how to recycle hard-to-recycle items + larger-scale recycling.</li>
        <li className="resurces-list-item"><a href="https://lifewithoutplastic.com/store/eating/bentos-and-boxes.html?p=2" target="_blank" rel="noopener noreferrer" alt="Life Without Plastic">Life Without Plastic</a> - Tools to practice reducing.</li>
      </ul>
    </div>



  )
}

export default Resources
