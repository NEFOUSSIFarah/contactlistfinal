import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useMatch, useNavigate } from 'react-router-dom'
import { editContact, getContact } from '../../JS/Actions/contact'

const Edit = () => {
  const dispatch = useDispatch
  const [newContact, setNewContact] = useState({})
  const contactToGet = useSelector((state) => state.contactReducer.contactToGet)
  const match = useMatch('/edit/:id')
  const navigate = useNavigate()
  const handleChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    dispatch(getContact(match.params.id))
  })

  const handleEdit = () => {
    dispatch(editContact(match.params.id, newContact))
    navigate(-1)
  }

  return (
    <div>
      <h2>Edit contact</h2>
      <Form.Label>Name</Form.Label>
      <Form.Control
        type='text'
        placeholder={`${contactToGet.name}`}
        name='name'
        value={newContact.name}
        handleChange={handleChange}
      />
      <Form.Label>Email address</Form.Label>
      <Form.Control
        type='email'
        placeholder={`${contactToGet.email}`}
        name='email'
        value={newContact.email}
        handleChange={handleChange}
      />
      <Form.Label>Phone</Form.Label>
      <Form.Control
        type='number'
        placeholder={`${contactToGet.phone}`}
        name='phone'
        value={newContact.phone}
        handleChange={handleChange}
      />

      <Link>
        <Button variant='primary' type='submit' onClick={handleEdit}>
          Edit contact
        </Button>
      </Link>
    </div>
  )
}

export default Edit
