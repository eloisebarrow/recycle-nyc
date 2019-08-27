import React from 'react'

const ByBorough = (props) => {
  const [borough, setBorough] = React.useState(null);

  const dropdownStyles = {
    margin: '1% 0',
    fontSize: '0.9rem',
  }

  const divStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  }

  const boroughDataStyles = {
    margin: '2%',
    width: '20%',
    border: '1px solid black',
  }

  const pStyles = {
    padding: '0 6%',
  }

  const categoryStyles = {
    fontWeight: 'bold',
  }

  const boroughData = props.apiData
    .filter((d) => d.borough === borough)
    .map((d, i) => {
      return (
        <div
        key={i}
        style={boroughDataStyles}
        className="borough-boxes" >
          <p style={pStyles}>{d.borough} <br/><span style={categoryStyles}>Location:</span> {d.park_site_name} <br/><span style={categoryStyles}>Address:</span> {d.address}</p>
        </div>
      )
  })
  return (
    <div>
      <h2>View recycling bins by borough</h2>
      <select style={dropdownStyles} onChange={(e) => setBorough(e.target.value)} name="boroughs" id="boroughs">
        <option value="null">Choose Your Borough</option>
        <option value="Bronx">Bronx</option>
        <option value="Brooklyn">Brooklyn</option>
        <option value="Manhattan">Manhattan</option>
        <option value="Queens">Queens</option>
        <option value="Staten Island">Staten Island</option>
      </select>

      <div style={divStyles}>
        {boroughData}
      </div>
    </div>
  )
}

export default ByBorough
