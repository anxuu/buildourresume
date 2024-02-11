import React from 'react'
import "./Resumegenerator.css"


export default function Projects(props) {
  return (
    <div className='promain'>
      <h4 className='project'>PROJECTS</h4>

      <div className='border'>

        {!props.objectname.ProjectTitle ? '' : <div className='l2clr'>PROJECT TITLE :-</div>}<div>{props.objectname.ProjectTitle}</div>




        {!props.objectname.ProjectLink ? '' : <div className='l2clr'>PROJECTLINK :- </div>}<div>{props.objectname.ProjectLink}</div>

        <div>
          {!props.objectname.KEYSKILL ? '' : <div className='l2clr'>KEY SKILLS:- </div>}
          <div> {props.objectname.KEYSKILL}</div>
          <div>
            {!props.objectname.Description ? '' : <div className='l2clr'> Description:- </div>}
            <div> {props.objectname.Description}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
