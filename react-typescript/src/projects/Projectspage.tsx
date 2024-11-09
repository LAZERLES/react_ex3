import React from 'react'
import { MOCK_PROJECTS } from './MockProjects'
import ProjectList from './Projectlist'

function Projectspage() {
  return (
    <>
        <h1>ProjectPage</h1>
        <ProjectList projects={MOCK_PROJECTS}/>
    </>
  )
}

export default Projectspage