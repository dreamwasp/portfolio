import React from "react"
import { Helmet } from "react-helmet"
import { useSelector } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Project from "../components/project"
import Job from "../components/job"

import projects from "../utils/projects"
import jobs from "../utils/jobs"
import { themeObject } from "../utils/themes"
import { imageFilter } from "../utils/helperFunctions"

import genText from "../styles/genText.module.css"

export default () => {
  const data = useStaticQuery(graphql`
    query aQuery {
      allFile(filter: { extension: { regex: "/(png)/" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
            base
          }
        }
      }
    }
  `)

  let genText = themeObject.general
  const currentTheme = useSelector(state => ({
    theme: state.theme,
  }))
  genText = currentTheme.theme.general

  return (
    <Layout>
      <Helmet>
        <title>cassie spain | work</title>
        <meta name="description" content="cassie spain | software engineer" />
      </Helmet>
      <div className={genText.rightContainer}>
        <div className={genText.sectionsContainer}>
          <div className={genText.sectionContainer}>
            <div className={genText.workHeader}>
              <h2 className={genText.workHeaderText}>projects</h2>
            </div>

            {projects.map(project => (
              <Project
                project={project}
                image={imageFilter(data.allFile.edges, project.fileName)}
              />
            ))}
            <div className={genText.sectionContainer}>
              <div className={genText.workHeader}>
                <h2 className={genText.workHeaderText}>
                  professional experience
                </h2>
              </div>
              {jobs.map(job => (
                <Job job={job} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
