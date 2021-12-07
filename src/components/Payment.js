import React, { useState } from 'react';
import {BrowserRouter as Link} from 'react-router-dom';

let Payment =()=>{

    let [count,setCount]=useState(1);
    let [submitted,setSubmitted]=useState(0)
    let [sum,setSum]=useState(125);
    const send=async (event)=>{
        event.preventDefault();                                 
        setSubmitted(1)
    }
    return(
        <React.Fragment>
            {submitted?<Link to="/payment"/>:
            <div className="mt-5 container">
                <div className="row">
                    <div className="col-md-7 mx-auto">
                        <div className="card mb-5">
                            <div className="card-header bg-light">
                                <h3>Tickets : 
                                <button className="btn btn-sm btn-outline-secondary px-2 mx-3"
                                onClick={()=>{
                                    if(count>1)
                                    setCount(count-1)
                                    setSum(100*count);
                                }}>-</button>
                                {count}
                                <button className="btn btn-sm btn-outline-secondary px-2 mx-3"
                                onClick={()=>{
                                    setCount(count+1)
                                    setSum(125*count);
                                }}>+</button>
                                </h3>
                            </div>
                            <form onSubmit={send}>
                                <div className="card-body">
                                <div className="card-header">
                                        <h4 className="">Summary</h4>                                        
                                    </div>
                                    <div className="card-body">
                                        <div className="d-flex">
                                            <h6>Subtotal</h6>
                                            <h6 className="ml-auto">125 x {count} = {sum}.00</h6>
                                        </div>
                                        <div className="d-flex">
                                            <h6>GST%</h6>
                                            <h6 className="ml-auto">11.45</h6>
                                        </div>
                                        <div className="d-flex">
                                            <h6>Tax</h6>
                                            <h6 className="ml-auto">27.10</h6>
                                        </div>
                                        <br/>
                                        
                                        <div className="d-flex border-top py-2">
                                            <h6>Total</h6>
                                            <h6 className="ml-auto">{sum+11+27}.55</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-info mr-3" onClick={(event)=>{
                                            event.preventDefault();
                                            window.location.href='/feedback';
                                        }}>Pay Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>}
        </React.Fragment>
    )
}

export default Payment;