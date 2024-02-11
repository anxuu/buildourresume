import React from 'react'
import "./Resumegenerator.css"


export default function Education(props) {
  // if ((props.objectname.CollegeName = ' ') && (props.objectname.year =' ') && (props.objectname.Percentage=' ') && (props.objectname.CourseName =' ')){
  // }
  return (
    <div>
      <>
        <div className='border'>
          <h1 className='center'>YOUR RESUME</h1>
          <div className='border'>
            <h4 className='education' >EDUCATION :- </h4>
            <div>{props.objectname.CollegeName}</div>
            <div className='CPP'>
              <div>{props.objectname.year}</div>
              <div>{props.objectname.CourseName}</div>
              <div>{props.objectname.Percentage}</div>
            </div>
          </div>


        </div>
      </>
    </div>
  )
}
