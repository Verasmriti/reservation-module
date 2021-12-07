import React, { useState } from 'react';
import {BrowserRouter as Link} from 'react-router-dom';

let Feedback =()=>{
    let submitted=0
    return(
        <React.Fragment>
            {submitted?<Link to="/payment"/>:
            <div className="mt-5 container">
                <div className="row">
                    <div className="col-md-7 mx-auto">
                        <div className="card mb-5">
                            <form>
                                <div className="card-body">
                                <div className="card-header">
                                        <h4 className="">Thankyou. Visit Again</h4>                                        
                                    </div>
                                    <div className="card-body">
                                    <button className="btn btn-info mr-3" onClick={(event)=>{
                                            event.preventDefault();
                                            window.location.href='/';
                                        }}>Home</button>
                                     <button className="btn btn-success" onClick={(event)=>{
                                         event.preventDefault();
                                        alert("Thank you for visiting click \"OK\" to go home.")
                                        window.location.href='/';
                                    }}>Print Receipt</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>}
        </React.Fragment>
    )
}

export default Feedback;