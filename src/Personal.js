import React from 'react'
import "./Resumegenerator.css"


export default function Personal({objectname}) {
  console.log(objectname);
  return (
    <div>
     <h4 className='project' >PERSONAL DETAILS</h4>
 {objectname.firstName} {objectname.MiddleName} {objectname.LastName}
 <div> {objectname.year} {objectname.CourseName} </div>
 <div>{objectname.email}</div>
 <div>{objectname.Pincode} {objectname.Address}</div> 
    </div>
  )
}
