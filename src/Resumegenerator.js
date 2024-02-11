import "./Resumegenerator.css"
import Education from './Education'
import Projects from "./Projects";
import { useState } from 'react';
import Personal from "./Personal";
import "./Resumegenerator.css"


export default function Resumegenerator() {
// const initialValue = {
//     firstName: '',
//     college: '',
// }

    const [objectname ,setobjectname] =useState({})
    function onchange(e){
     setobjectname({...objectname, [e.target.name]:e.target.value});


      
    }

    return (

        
        <div>
            <h1>RESUME GENERATOR</h1>


            <form>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput">First Name</label>
    <input
      type="text"
      name= "firstName"
      className="form-control"
      id="First Name"
      onChange={onchange}

      placeholder="First Name"
    />
  </div>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput">Middle Name</label>
    <input
      type="text"
      className="form-control"
      id="Middle Name"
      placeholder="Middle Name"
      onChange={onchange}
      name='MiddleName'

    />
  </div>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput2">Last Name</label>
    <input
      type="text"
      className="form-control"
      id="Last Name"
      placeholder="LastName"
      onChange={onchange}
      name='LastName'

    />
    <div className="form-group">
  <label htmlFor="exampleInputEmail1">Email address</label>
  <input
    type="email"
    className="form-control"
    id="exampleInputEmail1"
    aria-describedby="emailHelp"
    placeholder="Enter email"
    onChange={onchange}
    
    name="email"
  />

</div>
<div className="form-group">
  <label htmlFor="inputAddress">Address</label>
  <input
    type="text"
    className="form-control"
    id="inputAddress"
    placeholder="1234 Main St"
    onChange={onchange}
    
    name="Address"
  />
</div>
<div className="form-group">
  <label htmlFor="inputAddress">Pincode</label>
  <input
    type="text"
    className="form-control"
    id="inputAddress"
    placeholder="413512"
    onChange={onchange}
    
    name="Pincode"
  />
</div>



  </div>
  <div className="College Name">
    <label htmlFor="formGroupExampleInput2">Current College Name</label>
    <input
      type="text"
      className="form-control"
      id="collegename"
      placeholder="College Name"
      onChange={onchange}
      name='CollegeName'
    />
  </div>
  <div className="form-row">
  <div className="form-group col-md-6">
    <label htmlFor="inputCity">DATE OF BIRTH</label>
    <input type="text" className="form-control"
     id="DATE OF BIRTH"
      placeholder='DOB'
        onChange={onchange} 
        name='DOB'
          />
  </div>
  <div className="form-group col-md-4">
    <label htmlFor="inputState">GENDER</label>
    <select id="GENDER" className="form-control">
      <option select="SELECT">Choose...</option>
      <option>MALE</option>
      <option value="">FEMALE</option>
      
    </select>
  </div>

  <div className="form-row">
  <div className="form-group col-md-6">
    <label htmlFor="inputEmail4">Known Languages</label>
    <input
      type="text"
      className="form-control"
      id="Known Language"
      placeholder="Known Language"
      onChange={onchange}
      name='known Language'
    />
  </div>
  <div className="form-group col-md-6">
    <label htmlFor="inputPassword4">Dream Company</label>
    <input
      type="text"
      className="form-control"
      id="Dream Company"
      placeholder="amazon ,google"
      onChange={onchange}
      name='Dream Company'
    />
  </div>
</div>

</div>

  <div className="form-row">
  <div className="form-group col-md-4">
  <label htmlFor="inputState">YEAR</label>
    <select name="year" className="form-control" onChange={onchange}>
      <option select="SELECT">Choose year of studying</option>
      <option>FE</option>
      <option >SE</option>
      <option >TE</option>
      <option >BE</option>
      
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="inputPassword4">Percentage:-</label>
    <div> <input
      type="text"
      className="form-control"
      id="percentage"
      placeholder="Percentage"
      onChange={onchange}
      name='Percentage'

    /></div>
  </div>
</div>

 
  

  <div className="form-group">
    <label htmlFor="formGroupExampleInput2">Course Name</label>
    <input
      type="text"
      className="form-control"
      id="Course"
      placeholder="Course Name"
      onChange={onchange}
      name="CourseName"
    />
  </div>
</form>
     

  


<h6>ADD PROJECTS:-</h6>
<div className="form-group">
  <label htmlFor="inputAddress">PROJECT TITLE</label>
  <input
    type="text"
    className="form-control"
    id="inputAddress"
    placeholder="clones,websites"
    onChange={onchange}
      name='ProjectTitle'
  />
</div>

<form>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4">TeamSize</label>
      <input
        type="text"
        className="form-control"
        id="TeamSize"
        placeholder="1 to 5"
        onChange={onchange}
      name='TeamSize'
      />
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputPassword4">ProjectLink:- </label>
      <input
        type="text"
        className="form-control"
        id="ProjectLink"
        placeholder="ProjectLink"
        onChange={onchange}
        name='ProjectLink'
      />
    </div>
  </div>
</form>

<div className="form-group">
  <label htmlFor="inputAddress">KEY SKILL</label>
  <input
    type="text"
    className="form-control"
    id="KEYSKILL"
    placeholder="KEY SKILL"
    onChange={onchange}
    name='KEYSKILL'
  />
</div>
<div className="form-group">
  <label htmlFor="inputAddress">Description</label>
  <input
    type="text"
    className="form-control"
    id="Description"
    placeholder="Description"
    onChange={onchange}
    name='Description'
  />
</div>

            
            




 



<div className="main">
{/* <Education objectname={objectname} /> */}
{/* <Projects objectname={objectname} /> */}
{!objectname.CollegeName && !objectname.Percentage && !objectname.firstName &&   !objectname.LastName  ? '': <Education objectname={objectname}/>}

{!objectname.ProjectTitle && !objectname.KEYSKILL ? '' : <Projects objectname={objectname} />  }

{!objectname.firstName && !objectname.LastName && !objectname.MiddleName ? '':<Personal objectname={objectname}  />  }
</div>
        </div>
    )
}
