import React from 'react'
import DatingComponent from 'components/Dating'
import DatingServiceComponent from 'components/Dating/index.services'

class DatingScreen extends React.Component {
  render() {
    return (
      <DatingServiceComponent>
        {((shareProps) => (
          <DatingComponent
            {...shareProps}
          />
        ))}
      </DatingServiceComponent>
    )
  }
}

export default DatingScreen
