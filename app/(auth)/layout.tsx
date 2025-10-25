import { ReactNode } from 'react'

const Authlayout = ({ childern }: { childern: ReactNode }) => {
  return (
    <div className='auth-layout'>{childern}</div>
  )
}

export default Authlayout