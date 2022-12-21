import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getallcontacts } from '../JS/Actions/contact'
import ContactCard from './ContactCard'

const ContactList = () => {
  const dispatch = useDispatch()
  const contactList = useSelector((state) => state.contactReducer.contactList)
  const load = useSelector((state) => state.contactReducer.load)
  useEffect(() => {
    dispatch(getallcontacts)
  }, [dispatch])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
      }}
    >
      {load ? (
        <h2>Loading ...</h2>
      ) : (
        contactList.map((el) => <ContactCard contact={el} key={el._id} />)
      )}
    </div>
  )
}

export default ContactList
