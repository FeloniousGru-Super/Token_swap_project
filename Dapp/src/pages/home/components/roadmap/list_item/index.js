import React from 'react'

const ListItem = ({children}) => {
    return (
        <li className="flex items-center gap-2 ">
            <div className="w-4 h-4 rounded-full bg-white border-2 border-primary"></div>
            {children}
        </li>
    )
}

export default ListItem
