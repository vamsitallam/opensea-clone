import { useRouter } from 'next/router'
import React from 'react'

function Collection() {
  const router = useRouter()
  console.log(router.query)
  console.log(router.query.collectionId)
  return <div></div>
}

export default Collection
