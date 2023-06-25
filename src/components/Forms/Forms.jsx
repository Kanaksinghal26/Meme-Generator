import React from 'react'
import './Forms.css'

const Forms = () => {
    return (
        <div>
            <form>
                <div className='flex'>
                    <div className="form-group">
                        <input type="text" className="form-control" id="exampleInputText1" aria-describedby="emailHelp" placeholder="Enter Text 1" />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" id="exampleInputText2" placeholder="Enter Text 2" />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Get a new Image</button>
            </form>
        </div>
    )
}

export default Forms
