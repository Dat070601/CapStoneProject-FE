import React, { useEffect, useState } from 'react'

const PaymentResultViewModel = () => {
 
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 4000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])
  
  return {
    loading
  }
}

export default PaymentResultViewModel