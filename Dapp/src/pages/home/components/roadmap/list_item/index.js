import React from "react";
import { MdCheck } from "react-icons/md";

const ListItem = ({ checked = false, children }) => {
    return (
        <li className="flex items-center gap-2 ">
            <div
                className={`h-3 w-3 flex-grow-0 flex-shrink-0 rounded-full bg-white border-2 border-primary flex items-center justify-center text-white ${checked ? 'bg-primary' : ''}`}
            >
                {checked && <MdCheck />}
            </div>
            <p>{children}</p>
        </li>
    );
};

export default ListItem;
