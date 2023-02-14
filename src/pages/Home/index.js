import React from 'react'
import { Documents } from '../../components/DocumentCard'
import { DocumentTable } from '../../components/DocumentTable'
import "./_style.scss"

export const Home = () => {
  return (
    <div className='home'>
      <Documents />
      <DocumentTable />
    </div>
  )
}
