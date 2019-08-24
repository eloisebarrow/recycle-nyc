import React from 'react'

const About = () => {
  const divStyles = {
    display: 'flex',
    justifyContent: 'center',
  }

  const pStyles = {
    width: '50%',
    alignSelf: 'center',
    lineHeight: '1.9rem',
    fontSize: '1.3rem',
  }

  return (
    <div style={divStyles}>
      <p style={pStyles}>Click the links above to find public recycling bins near you. You can also filter listings by borough and find additional resources above.</p>
    </div>
  )
}

export default About
