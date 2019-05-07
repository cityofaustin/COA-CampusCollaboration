import React from "react";
import { graphql } from "gatsby";
import { FormattedNumber } from "react-intl";
import "./Projects.scss";
import departments from "../zilker/data/departments";

import ClockSvg from "../zilker/ClockSvg.js";
import Layout from "../components/layout";

export default ({ data }) => {
    const {
    Project_end_date,
    Success_criteria,
    Value_proposition,
    Collaboration_type,
    Participating_university,
    Participating_university_departments,
    Project_Name,
    Description,
    Link,
    Total_project_budget,
    Funding_source,
    Lead_Department,
    Contact_Name,
    Contact_email,
    Project_stage,
    Contact_Title,
    Primary_strategic_outcome,
    Secondary_strategic_outcome
  } = data.airtable.data;

  return (
    <Layout>
      <section className="usa-section usa-grid">
        <div className="row">
          <div className="col-xs-12 col-sm-10">
            <div>
              <h1 className="coa-project__name">{Project_Name}</h1>
            </div>
            <h2 className="coa-project__summary">{Description}</h2>
            <div className="coa-project__summary">
              {Link && (
                <a href={Link} target="_blank">
                  Learn more about this project.
                </a>
              )}
            </div>

            <div>
              <h3 className="coa-project__phase">
                <ClockSvg />
                &nbsp;{Project_stage}
              </h3>
            </div>
            <div>
                <hr></hr>
                <div className="usa-width-two-fourths">
                    <h2 className="coa-city__sub-category">Participating University</h2>
                </div>
                <div className="usa-width-two-fourths">
                    <p className="coa-project__body">
                        <span className="coa-comma">{Participating_university}</span>
                    </p>

                </div>
            </div>
            <div>
                <hr></hr>
                <div className="usa-width-two-fourths">
                    <h2 className="coa-city__sub-category">Participating University Department</h2>
                </div>
                <div className="usa-width-two-fourths">
                    <p className="coa-project__body">
                        <span className="coa-comma">{Participating_university_departments}</span>
                    </p>

                </div>
            </div>
            <div>
              <hr />
              <div className="usa-width-two-fourths">
                <h2 className="coa-city__sub-category">Project Goals</h2>
              </div>
              <div className="usa-width-two-fourths">
                <p className="coa-project__body">
                  <span className="coa-comma">
                    {Primary_strategic_outcome}{" "}
                  </span>
                  <span className="coa-comma">
                    {Secondary_strategic_outcome}
                  </span>
                </p>
              </div>
            </div>
            {/* SARA AND TED LOOK HERE *************** */}
            {/* 
            <div>
                <hr></hr>
                <div className="usa-width-two-fourths">
                   <h2 className="coa-city__sub-category">Value Proposition</h2>
                </div>
                <div className="usa-width-two-fourths">
                    <p className="coa-project__body">
                        <span className="coa-comma">{Value_proposition}</span>
                    </p>

                </div>
            </div>
            <div>
                <hr></hr>
                <div className="usa-width-two-fourths">
                    <h2 className="coa-city__sub-category">Success Criteria</h2>
                </div>
                <div className="usa-width-two-fourths">
                    <p className="coa-project__body">
                        <span className="coa-comma">{Success_criteria}</span>
                    </p>

                </div>
            </div>*/} 
            <div>
                <hr></hr>
                <div className="usa-width-two-fourths">
                    <h2 className="coa-city__sub-category">Collaboration Type</h2>
                </div>
                <div className="usa-width-two-fourths">
                    <p className="coa-project__body">
                        <span className="coa-comma">{Collaboration_type}</span>
                    </p>

                </div>
            </div>
            <div>
                <hr></hr>
                <div className="usa-width-two-fourths">
                    <h2 className="coa-city__sub-category">Estimated Project End Date</h2>
                </div>
                <div className="usa-width-two-fourths">
                    <p className="coa-project__body">
                        <span className="coa-comma">{Project_end_date}</span>
                    </p>

                </div>
            </div>
            <div className="usa-width-two-fourths">
                <hr />
                <h2 className="coa-city__sub-category">Funding</h2>
            </div>

            <div className="usa-width-two-fourths">
                
                <p className="coa-project__body">
                    Total budget of &nbsp;
        {/* TODO: format as currency */}
                    <span>{Total_project_budget}</span>
                    {/* <FormattedNumber value={Total_project_budget} style="currency" currency="USD" minimumFractionDigits={0} /> */}
                    <br />
                    {Funding_source}
                </p>
            </div>
            <div>
                <hr />
                <div className="usa-width-two-fourths">
                    <h2 className="coa-city__sub-category">Get in Touch</h2>
                </div>
                <div className="usa-width-two-fourths">
                    <p className="coa-project__body">
                        {Contact_Name}, {Contact_Title}
                        <br />
                        <a href={`mailto:${Contact_email}`}>{Contact_email}</a>
                    </p>
                </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-2" />
        </div>
      </section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($name: String) {
    airtable(table: { eq: "projects" }, data: { Project_Name: { eq: $name } }) {
      data {
        Project_end_date
        Success_criteria
        Value_proposition
        Collaboration_type
        Participating_university_departments
        Participating_university
        Project_Name
        Description
        Link
        Total_project_budget
        Funding_source
        Lead_Department
        City_strategic_outcomes
        Contact_Name
        Contact_email
        Contact_Title
        Project_stage
        Primary_strategic_outcome
        Secondary_strategic_outcome
      }
    }
  }
`;
