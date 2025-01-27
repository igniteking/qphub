"use client"
import React, { useEffect } from 'react'

const Seo = ({ title }:any) => {
  useEffect(() => {
    document.title = `QP-Hub - ${title}`
  }, [])
  
  return (
    <>
    </>
  )
}

export default Seo;