import React from "react";
import { Link } from "react-router-dom";
//import { useSelector } from 'react-redux';


export const CardsJuniors = ({ arrayJuniors }) => {
    //const companies = useSelector((state) => state.companies);
    
    
    return (
        
            <div className="">
                {arrayJuniors?.map((p) => (
                    <div className="" >
                        <Link to={`/juniors/${p._id}`} key={p.name}>
                            <img src={p.photograph} alt="" />
                            <div className="">
                                <p>{p.name}{p.lastname}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        
    );
};
