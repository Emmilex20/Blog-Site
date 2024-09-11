import React from 'react'

const UpdateUserModal = ({user, onClose, onRoleUpdate}) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
        <div className='bg-white p-4 rounded shadow-lg w-1/3'>
            <h2 className='text-xl mb-4'>Edit User</h2>
            <div className='mb-4 space-y-4'>
                <label className='block text-sm font-medium text-gray-700'>Email</label>
                <input type="text" value={user?.email}
                readOnly
                className='mt-1 bg-bgPrimary block shadow-sm sm:text-sm border-gray-300 rounded-md py-1.5 px-5 focus:outline-none'
                />
            </div>
            <div className='mb-4 space-y-4'>
                <label className='block text-sm font-medium text-gray-700'>Email</label>
                <input type="text" value={user?.email}
                readOnly
                className='mt-1 bg-bgPrimary block shadow-sm sm:text-sm border-gray-300 rounded-md py-1.5 px-5 focus:outline-none'
                />
            </div>
            
        </div>
    </div>
  )
}

export default UpdateUserModal