// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    isSubmitted: false,
    isFirstnameEmpty: false,
    isLastnameEmpty: false,
  }

  onChangeFirstname = event =>
    this.setState({firstname: event.target.value, isFirstnameEmpty: false})

  onChangeLastname = event =>
    this.setState({lastname: event.target.value, isLastnameEmpty: false})

  onCheckFirstname = () => {
    const {firstname} = this.state
    if (firstname === '') {
      this.setState({isFirstnameEmpty: true})
    } else {
      this.setState({isFirstnameEmpty: false})
    }
  }

  onCheckLastname = () => {
    const {lastname} = this.state
    if (lastname === '') {
      this.setState({isLastnameEmpty: true})
    } else {
      this.setState({isLastnameEmpty: false})
    }
  }

  onSubmit = event => {
    event.preventDefault()
    const {firstname, lastname} = this.state

    if (firstname !== '' && lastname !== '') {
      this.setState({isSubmitted: true})
    } else {
      this.onCheckFirstname()
      this.onCheckLastname()
    }
  }

  onSubmitAnotherResponse = () => {
    this.setState({
      isSubmitted: false,
      firstname: '',
      lastname: '',
      isFirstnameEmpty: false,
      isLastnameEmpty: '',
    })
  }

  renderForm = () => {
    const {firstname, lastname, isFirstnameEmpty, isLastnameEmpty} = this.state

    const firstnameErrorMsg = isFirstnameEmpty ? (
      <p className="error-msg">Required </p>
    ) : null

    const lastnameErrorMsg = isLastnameEmpty ? (
      <p className="error-msg">Required </p>
    ) : null

    return (
      <form className="form-cont" onSubmit={this.onSubmit}>
        <div className="input-cont">
          <label className="input-desc" htmlFor="firstname">
            FIRST NAME
          </label>
          <input
            type="text"
            placeholder="First name"
            value={firstname}
            id="firstname"
            onBlur={this.onCheckFirstname}
            onChange={this.onChangeFirstname}
            className={isFirstnameEmpty ? 'errorInput' : null}
          />
          {firstnameErrorMsg}
        </div>

        <div className="input-cont">
          <label className="input-desc" htmlFor="lastname">
            LAST NAME
          </label>
          <input
            type="text"
            placeholder="Last name"
            value={lastname}
            id="lastname"
            onBlur={this.onCheckLastname}
            onChange={this.onChangeLastname}
            className={isLastnameEmpty ? 'errorInput' : null}
          />
          {lastnameErrorMsg}
        </div>
        <div className="btn-cont">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    )
  }

  renderSuccesspg = () => (
    <div className="form-cont">
      <div className="img-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png "
          alt="success"
        />
      </div>
      <p className="text">Submitted Successfully</p>
      <div className="btn-cont">
        <button
          type="button"
          onClick={this.onSubmitAnotherResponse}
          className="btn"
        >
          Submit Another Response
        </button>
      </div>
    </div>
  )

  render() {
    const {isSubmitted} = this.state

    return (
      <div className="app-cont">
        <div className="main-cont">
          <h1 className="title">Registration</h1>
          {isSubmitted ? this.renderSuccesspg() : this.renderForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
