import React from "react"
import { graphql } from 'gatsby'
import ClockSvg from "../zilker/ClockSvg.js"
import LearningSvg from "../zilker/LearningSvg.js"
import MobilitySvg from "../zilker/MobilitySvg.js"
import GovSvg from "../zilker/GovSvg.js"
import HealthSvg from "../zilker/HealthSvg.js"
import SafetySvg from "../zilker/SafetySvg.js"
import EconomicSvg from "../zilker/EconomicSvg.js"
import Layout from "../components/layout"

import "../zilker/scss/About.scss"
import img from "./img/austin_downtown.jpg"


const AboutPage = ({ data }) => (
    <Layout>

        <section className="usa-section usa-grid">
            <div className="row">
                <div className="col-xs-12 col-sm-7">
                    <h2 className="coa-about__head">About City of Austin Campus Collaborations
                    </h2>
                    <p className="coa-about__body">
                        The City of Austin wants to be a natural part of the research and education community. City of Austin Campus Collaborations aims to showcase current and past collaborations between the City of Austin and higher education institutions. The goal is to make it easier for people to gain a better understanding of collaboration efforts, the status and progress of those efforts, how they relate to critical goals for the participating institutions, measures of success and how others can get involved.

        <p className="coa-about__collab_title">
                            Types of collaboration between the City of Austin and higher education institutions include:
        </p>
                        <ul className="coa-about__body">1. Classroom projects</ul>
                        <ul className="coa-about__body">2. Research</ul>
                        <ul className="coa-about__body">3. Contract Work</ul>
                        <ul className="coa-about__body">4. Collaboration on Grant Applications</ul>
                        <ul className="coa-about__body">5. Internships</ul>
                        <ul className="coa-about__body">6. Data Sharing</ul>
        </p>
                    <p className="coa-about__title">
                        Follow our progress and contribute
    </p>
                    <p className="coa-about__body">
                        This is an open source project and we welcome collaboration! You can find our code on <a href="https://github.com/cityofaustin/grackl">Github</a>.
      </p>

                    <p className="coa-about__title">Get In Touch
    </p>
                    <p className="coa-about__body">
                        Do you have feedback for us? Or are you a City or higher education staff member wanting to publish your project on City of Austin Campus Collaborations? Contact: <a href="mailto:sara.smith@austintexas.gov">Sara Smith</a>. We would love to hear from you.
                    </p>
                </div>

                <div className="col-xs-12 col-sm-5 coa-About__sidebar__display">
                    <img src={img} alt="City of Austin from above" align="center" />
                    <div className="coa-About__sidebar__title">Strategic Goals</div>
                    <div className="coa-About__sidebar__plain-text">In 2017 Austin’s City Council adopted a <a href="https://austinstrategicplan.bloomfire.com/posts/1373079-city-of-austin-strategic-direction">strategic vision</a> and six corresponding strategic outcomes to guide the City of Austin over the next three to five years. The City of Austin Campus Collaborations app uses these goal areas to tell the story about what results each collaboration aims to achieve. Definitions for each outcome are below.

      <dl className="coa-about__phase">

                            <p><GovSvg />
                                <dt className="coa-About__sidebar__goal__title">Government That Works
      </dt>
                                <dd className="coa-About__sidebar__plain-text">Believing that city government works effectively and collaboratively for all of us - that it is fair, ethical, and innovative.
          </dd>
                            </p>
                            <p><MobilitySvg />
                                <dt className="coa-About__sidebar__goal__title">Mobility</dt>
                                <dd className="coa-About__sidebar__plain-text">Getting us where we want to go, when we want to get there, safely and cost-effectively.
          </dd>
                            </p>
                            <p><HealthSvg />
                                <dt className="coa-About__sidebar__goal__title">Health</dt>
                                <dd className="coa-About__sidebar__plain-text">Enjoying a sustainable environment and a healthy life, physically and mentally.
          </dd>
                            </p>
                            <p><SafetySvg />
                                <dt className="coa-About__sidebar__goal__title">Safety</dt>
                                <dd className="coa-About__sidebar__plain-text">Being safe in our home, at work, and in our community.
          </dd>
                            </p>
                            <p><EconomicSvg />
                                <dt className="coa-About__sidebar__goal__title">Economic Opportunity</dt>
                                <dd className="coa-About__sidebar__plain-text">Having economic opportunities and resources that enable us to thrive in our community.

          </dd>
                            </p>
                            <p><LearningSvg />
                                <dt className="coa-About__sidebar__goal__title">Culture and Lifelong Learning</dt>
                                <dd className="coa-About__sidebar__plain-text">Being enriched by Austin's unique civic, cultural, ethnic, and learning opportunities.

          </dd>
                            </p>
                        </dl>

                        <div style={{ height: "0.1rem", backgroundColor: "#9b9b9b" }}></div>

                        <div className="coa-About__sidebar__head">
                            Collaboration Stages
    </div>
                        <div className="coa-About__sidebar__plain-text">
                            The City of Austin Campus Collaborations app uses four stages to describe a collaboration’s progress or status. Definitions for each stage are below.
    </div>



                        <dl className="coa-about__phase">
                            <dt className="coa-About__sidebar"><ClockSvg />PLANNING</dt>
                            <dd className="coa-About__sidebar__plain-text">In this stage, people are identifying and scoping the collaboration. It includes leads or opportunities that have been identified, but are not yet in progress.
          </dd>
                            <dt className="coa-About__sidebar"><ClockSvg />LEARNING</dt>
                            <dd className="coa-About__sidebar__plain-text">This stage includes research to understand what type of solution, collaboration, or service should be put in place. Activities in this stage include discovery, needs assessments, and requirements gathering.

          </dd>
                            <dt className="coa-About__sidebar"><ClockSvg />IN PROGRESS</dt>
                            <dd className="coa-About__sidebar__plain-text">This stage involves executing the solution, collaboration, or service, including design, development, testing, and solution implementation.

          </dd>
                            <dt className="coa-About__sidebar"><ClockSvg />COMPLETE/LIVE</dt>
                            <dd className="coa-About__sidebar__plain-text">In this stage, progress is completed, and solution, product, or service is now live or operational. It includes after-action reporting to document and measure project results. A solution, product, or service is expected to be refined or improved over time.
          </dd>
                        </dl>
                    </div>
                </div></div>
        </section>
    </Layout>











)

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
export default AboutPage
