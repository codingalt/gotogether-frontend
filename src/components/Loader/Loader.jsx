import React from 'react'
import { TailSpin } from 'react-loader-spinner'

const Loader = ({width}) => {
  return (
    <TailSpin
  height={width}
  width={width}
  color="#fff"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
  )
}

export default Loader