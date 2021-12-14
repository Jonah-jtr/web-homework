import React, { useState } from 'react'

export default function InfoInput (props) {
  const [state, setState] = useState({
    ID: '',
    userID: '',
    Description: '',
    MerchantID: '',
    Debit: '',
    Credit: '',
    Amount: ''
  })
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='ID'>ID:</label>
          <input
            id='ID'
            name='ID'
            onChange={handleChange}
            value={state.name}
          />
        </div>
        <div>
          <label htmlFor='Description'>Description:</label>
          <input
            id='Description'
            name='Description'
            onChange={handleChange}
            value={state.name}
          />
        </div>
        <div>
          <label htmlFor='MerchantID'>Merchant ID:</label>
          <input
            id='MerchantID'
            name='MerchantID'
            onChange={handleChange}
            value={state.name}
          />
        </div>
        <div>
          <label htmlFor='Debit'>Debit:</label>
          <input
            id='Debit'
            name='Debit'
            onChange={handleChange}
            value={state.name}
          />
        </div>
        <div>
          <label htmlFor='Credit'>Credit:</label>
          <input
            id='Credit'
            name='Credit'
            onChange={handleChange}
            value={state.name}
          />
        </div>
        <div>
          <label htmlFor='Amount'>Amount:</label>
          <input
            id='Amount'
            name='Amount'
            onChange={handleChange}
            value={state.name}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}
