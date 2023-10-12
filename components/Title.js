import React from 'react'

const Title = ({city}) => {
  return (
    <div className='pt-8 mx-auto'>
        <h1 className="text-4xl capitalize sm:text-6xl text-slate-700">{city}</h1>
    </div>
  )
}

export default Title
