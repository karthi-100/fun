import React from 'react'
import Typical from 'react-typical'
function App() {


  return (
    <div className='app'>
     <h2>Oii, Kavya</h2>
     <Typical
     loop={Infinity}
     wrapper="b"
     steps={[
      'loosu 😵‍💫😵‍💫',1000,
      'mental 🙃🙃',1000,
      'sorry🤕🤕',1000,
      'naaliku olunga tea vangi tha😁😁',1500

     ]}
     />
    </div>
  )
}

export default App
