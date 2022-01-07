import React from 'react'
import CreateUserForm from '../components/CreateUserForm';
import { useParams } from 'react-router-dom'

const EditUser =  () => {
  const { id } = useParams();

  return(
    <div>

      <CreateUserForm methodFecth="PUT" id={id}/>

    </div>
  )
}

export default EditUser;