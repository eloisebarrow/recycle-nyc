import React from 'react'

class ByBorough extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      borough: this.props.apiData.borough,
      parkName: this.props.apiData.park_site_name,
      address: this.props.apiData.address,
    }
  }



  render() {
  // console.log('this is state from ByBorough', this.props.apiData)
  const dropdownStyles = {
    margin: '1% 0',
    fontSize: '0.9rem',
  }

  const allBins = this.props.apiData.map( (d, i) => {
    return (
      <li key={i}>
      Borough: {d.borough} Park Name: {d.park_site_name} Address: {d.address}
      </li>
    )
  })

  const bronx = this.props.apiData.filter( (d, i) => {
    return d.borough === 'bronx';
    console.log('this is bronx')
  })

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

      {bronx}
      </div>
    )
  }


}

export default ByBorough
