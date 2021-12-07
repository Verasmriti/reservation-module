import React, { useState } from 'react';

let Home =()=>{
    let initialState={
        psid:"",
        name:"",
        age:"",
        gender:""
    }
    let [state,setState]=useState(initialState)

    return(
        <React.Fragment>
            
            <div className="mt-5 container">
                <div className="row">
                    <div className="col-md-7 mx-auto">
                        <div className="card mb-5">
                            <div className="card-header bg-light">
                                <h3>Reservation</h3>
                            </div>
                            <form>
                                <div className="card-body">
                                    PSID : <input type="text" value={state.psid} className="form-control" onChange={(event)=>{
                                        setState({
                                            ...state,
                                            psid:event.target.value
                                        })
                                    }}/>
                                    Name : <input type="text" value={state.name} className="form-control" onChange={(event)=>{
                                        setState({
                                            ...state,
                                            name:event.target.value
                                        })
                                    }}/>
                                    Age : <input type="text" value={state.age} className="form-control" onChange={(event)=>{
                                        setState({
                                            ...state,
                                            age:event.target.value
                                        })
                                    }}/>
                                    
                                    Gender : <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"
                                    />
                                    <label className="form-check-label" for="flexRadioDefault1"> Male </label>
                                    </div>

                                    
                                    <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault2"
                                    />
                                    <label className="form-check-label" for="flexRadioDefault2"> Female </label>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-info" onClick={(event)=>{
                                        event.preventDefault();
                                        window.location.href='/payment';
                                    }}>Make Payment</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;