import React from "react";

const ListItem = ({ children }) => {
    return (
        <li className="flex items-center gap-2 ">
            <div className="h-3 w-3 flex-grow-0 flex-shrink-0 rounded-full bg-white border-2 border-primary" ></div>
            <p>{children}</p>
        </li>
    );
};

export default ListItem;
