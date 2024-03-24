import React from 'react'
import { faThumbsUp, faEye, faComments, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DiscussionCard = () => {
    return (
        <div>
            <div className="bg-white shadow-md p-4 mb-8 rounded-lg w-full">
                <div className="flex items-center justify-between">
                    <div className='flex flex-row justify-between items-center gap-8'>
                        <img src="https://randomuser.me/api/portraits/men/98.jpg" alt="" className="w-10 h-10 rounded-full" />
                        <span className="text-gray-700 font-semibold ml-2">John Doe</span>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-2xl">Section 2</button>
                    </div>
                    <div>
                        <span className="text-gray-500 ml-4">3 hours ago</span>
                    </div>
                </div>
                <h2 className="text-xl font-bold">Discussion Title</h2>
                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              

                <div className="mt-4 flex items-center  justify-between">
                    <span className="text-gray-500 flex items-center gap-2">
                        <FontAwesomeIcon icon={faThumbsUp} className='h-4' /> 12 likes
                    </span>
                    <span className="text-gray-500 ml-4 flex items-center gap-2">
                        <FontAwesomeIcon icon={faEye} className="h-4" /> views
                    </span>
                    <span className="text-gray-500 ml-4 flex items-center gap-2">
                        <FontAwesomeIcon icon={faComments} className='h-4' /> 3 comments
                    </span>
                    <span className="text-gray-500 ml-4 flex items-center gap-2">
                        <FontAwesomeIcon icon={faShare} className='h-4' /> shares
                    </span>
                </div>

            </div>
        </div>
    )
}

export default DiscussionCard