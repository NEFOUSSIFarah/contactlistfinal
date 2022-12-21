import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addContact } from '../../JS/Actions/contact'
import { Link } from 'react-router-dom'

const Add = () => {
  const [newContact, setNewContact] = useState({})
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value })
  }

  const add = () => {
    dispatch(addContact(newContact))
  }

  return (
    <div>
      <h2>Add a new contact</h2>
      <Form.Label>Name</Form.Label>
      <Form.Control
        type='text'
        placeholder='Enter name'
        name='name'
        value={newContact.name}
        onChange={handleChange}
      />
      <Form.Label>Email address</Form.Label>
      <Form.Control
        type='email'
        placeholder='Enter email'
        name='email'
        value={newContact.email}
        onChange={handleChange}
      />
      <Form.Label>Phone</Form.Label>
      <Form.Control
        type='number'
        placeholder='Enter phone number'
        name='phone'
        value={newContact.phone}
        onChange={handleChange}
      />

      <Link>
        <Button variant='primary' type='submit' onClick={() => add()}>
          Add contact
        </Button>
      </Link>
    </div>
  )
}

export default Add
