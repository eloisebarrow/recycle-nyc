import React from 'react'

const ByBorough = (props) => {
  const [borough, setBorough] = React.useState(null);

  const dropdownStyles = {
    margin: '1% 0',
    fontSize: '0.9rem',
  }

  const allBins = props.apiData.map( (d, i) => {
    return(
      <li key={i}>
      BOROUGH: {d.borough} PARK NAME: {d.park_site_name} ADDRESS: {d.address}
      </li>
    )
  })

  const boroughData = props.apiData
    .filter((d) => d.borough === borough)
    .map((d, i) => {
      return (
        <li key={i}>
        BOROUGH: {d.borough} PARK NAME: {d.park_site_name} ADDRESS: {d.address}
        </li>
      )
  })
  return (
    <div>
    <h2>Select your borough:</h2>
    <select style={dropdownStyles} onChange={(e) => setBorough(e.target.value)} name="boroughs" id="boroughs">
      <option value="null">Choose Your Borough</option>
      <option value="Bronx">Bronx</option>
      <option value="Brooklyn">Brooklyn</option>
      <option value="Manhattan">Manhattan</option>
      <option value="Queens">Queens</option>
      <option value="Staten Island">Staten Island</option>
    </select>

    {boroughData}
    </div>
  )
}

export default ByBorough
