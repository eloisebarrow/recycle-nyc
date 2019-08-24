import React from 'react'

class ByBorough extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
  const dropdownStyles = {
    margin: '1% 0',
    fontSize: '0.9rem',
  }

  const allBins = this.props.apiData.map( (d, i) => {
    return(
      <li key={i}>
      Borough: {d.borough} Park Name: {d.park_site_name} Address: {d.address}
      </li>
    )
  })

  const bronx = this.props.apiData.forEach( (d, i) => {
    if (this.props.apiData && d.borough === 'Bronx') {
      return(
        <li key={i}>
        Park Name: {d.park_site_name} Address: {d.address}
        </li>
      )
    }
  })

  // console.table('tests from ByBorough', this.props.apiData[0] && this.props.apiData[0].borough)
    return (
      <div>
      <h2>Select your borough:</h2>
      <select style={dropdownStyles} name="boroughs" id="boroughs">
        <option value="bronx">Bronx</option>
        <option value="brooklyn">Brooklyn</option>
        <option value="manhattan">Manhattan</option>
        <option value="queens">Queens</option>
        <option value="staten-island">Staten Island</option>
      </select>

      {allBins}
      </div>
    )
  }
}

export default ByBorough
