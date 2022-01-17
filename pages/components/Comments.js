import React from 'react'

const Comments = ({name, body, email}) => {
    return (
        <div className='text-left flex items-center my-8 flex-col md:flex-row'>
        <div>
            <img src={`https://avatars.dicebear.com/api/bottts/${name}.svg`} alt="" className='w-16 mr-5 p-3 bg-blue-400 rounded-full mb-5 md:mb-auto' />
        </div>
        <div>
            <h3 className='font-semibold my-1'>Name: <span className='font-medium'>{name}</span> </h3>
            <p className='font-semibold my-1'>Email : <span className=' font-normal'>{email}</span></p>
            <p className='font-semibold my-2'> <span className=' font-normal'>{body}</span></p>
        </div>
        </div>
    )
}

export default Comments
