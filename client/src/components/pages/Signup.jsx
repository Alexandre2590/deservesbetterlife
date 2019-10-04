import React, { useState, Component } from 'react'
import api from '../../api'

export default function Signup(props) {
  const [state, setState] = useState({
    username: '',
    name: '',
    password: '',
    message: null,
  })

  function handleInputChange(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  function handleClick(e) {
    e.preventDefault()
    let data = {
      username: state.username,
      name: state.name,
      password: state.password,
    }
    api
      .signup(data)
      .then(result => {
        console.log('SUCCESS!')
        props.history.push('/') // Redirect to the home page
      })
      .catch(err => setState({ message: err.toString() }))
  }
  return (
    <div className="Signup">
      <h2>Signup</h2>
      <form>
        Username:{' '}
        <input
          type="text"
          value={state.username}
          name="username"
          onChange={handleInputChange}
        />{' '}
        <br />
        Name:{' '}
        <input
          type="text"
          value={state.name}
          name="name"
          onChange={handleInputChange}
        />{' '}
        <br />
        Password:{' '}
        <input
          type="password"
          value={state.password}
          name="password"
          onChange={handleInputChange}
        />{' '}
        <br />
        <button onClick={e => handleClick(e)}>Signup</button>
      </form>
      {state.message && <div className="info info-danger">{state.message}</div>}
    </div>
  )
}

/////

// class LinkedInPage extends Component {
//   state = {
//     code: '',
//     errorMessage: '',
//   };

//   handleSuccess = (data) => {
//     this.setState({
//       code: data.code,
//       errorMessage: '',
//     });
//   }

//   handleFailure = (error) => {
//     this.setState({
//       code: '',
//       errorMessage: error.errorMessage,
//     });
//   }

//   render() {
//     const { code, errorMessage } = this.state;
//     return (
//       <div>
//         <LinkedIn
//           clientId="81lx5we2omq9xh"
//           onFailure={this.handleFailure}
//           onSuccess={this.handleSuccess}
//           redirectUri="http://localhost:3000/linkedin"
//         >
//           <img src={require('./assets/linkedin.png')} alt="Log in with Linked In" style={{ maxWidth: '180px' }} />
//         </LinkedIn>
//         {!code && <div>No code</div>}
//         {code && <div>Code: {code}</div>}
//         {errorMessage && <div>{errorMessage}</div>}
//       </div>
//     );
//   }
// }

// export default LinkedInPage;
