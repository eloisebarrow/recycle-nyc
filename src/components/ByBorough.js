import React from 'react'
import '../App.css'

const ByBorough = (props) => {
  const [borough, setBorough] = React.useState(null);

  const boroughData = props.apiData
    .filter((d) => d.borough === borough)
    .map((d, i) => {
      return (
        <div
        key={i}
        className="borough-data-styles" >
          <p className="borough-content">{d.borough} <br/><span className="borough-category">Location:</span> {d.park_site_name} <br/><span className="borough-category">Address:</span> {d.address}</p>
        </div>
      )
  })
  return (
    <div>
      <h2>View recycling bins by borough</h2>
      <select className="borough-dropdown" onChange={(e) => setBorough(e.target.value)} name="boroughs" id="boroughs">
        <option value="null">Choose Your Borough</option>
        <option value="Bronx">Bronx</option>
        <option value="Brooklyn">Brooklyn</option>
        <option value="Manhattan">Manhattan</option>
        <option value="Queens">Queens</option>
        <option value="Staten Island">Staten Island</option>
      </select>

      <div className="boroughs-main">
        {boroughData}
      </div>
    </div>
  )
}

export default ByBorough
