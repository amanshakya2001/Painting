import React from 'react'
import {Link} from 'react-router-dom';

export default function Footer() {
  return (
    <>
        <footer className='py-2 shadow'>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        @copyright 2023
                    </div>
                    <div className="col-6">
                        <Link className="float-end" to="/terms&conditions">Term & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}
