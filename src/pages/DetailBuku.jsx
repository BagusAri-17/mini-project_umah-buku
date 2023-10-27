import React from 'react'
import {useParams} from 'react-router-dom'

const DetailBuku = () => {
    const {id} = useParams();

  return (
    <div>DetailBuku {id}</div>
  )
}

export default DetailBuku