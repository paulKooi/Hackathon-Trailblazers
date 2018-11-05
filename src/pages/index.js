import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import Slide from '../components/slide'
import SlideAlt from '../components/slideAlt'
import Card from '../components/card'
import Footer from '../components/footer'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1 className="HeroText">
          <span className="Flag">Rally</span>
          <span className="HeroUnderline">Everyone!</span>
        </h1>
        <p className="HeroDescription">
          Introducting the new Rally.<br /> Outcomes over output. New
          relationships between people and their work. Collaborate in real time.
          Complete flexibility in process and workflow. Performance at heart.
          Built for the future.
        </p>
      </div>
    </div>
    <Header />

    <div className="movGroup">
      {/* <div className="movie">content={require('../video/rallyWeb.mp4')}></div> */}
      <img className="movie" />
    </div>

    <Slide
      title="Objectives"
      description="This powerful tool allows you to build alignment withing your organization. Teams can align there work with one or many objectives. As important as organizing your work, Objectives also provide context for everyone involved"
      cta="Learn More"
      content={require('../images/objectivesUI@2x.png')}
    />

    <div className="planSection">
      <h1 className="sectionTitle">Plan like there's no tomorrow</h1>
      <p className="sectionDescription">
        This powerful tool allows you to build alignment withing your
        organization. Teams can align there work with one or many objectives. As
        important as organizing your work, Objectives also provide context for
        everyone involved
      </p>
      <div className="featureContainer">
        <div className="timelineContainer">
          <img className="timelineView" src="" />
        </div>
        <Card
          title="Teams & Trains"
          cta="Learn More"
          // content={require('../images/objectivesUI@2x.png')}
        />
        <Card
          title="Milestones"
          cta="Learn More"
          // content={require('../images/objectivesUI@2x.png')}
        />
        <Card
          title="Plan Skeleton"
          cta="Learn More"
          // content={require('../images/objectivesUI@2x.png')}
        />

        <Card
          title="Dependencies"
          cta="Learn More"
          // content={require('../images/objectivesUI@2x.png')}
        />
      </div>
    </div>
    <SlideAlt
      title="Flexible Organizations"
      description="This powerful tool allows you to build alignment withing your organization. Teams can align there work with one or many objectives. As important as organizing your work, Objectives also provide context for everyone involved"
      cta="Learn More"
      content={require('../images/objectivesUI@2x.png')}
    />
    <Footer />
  </div>
)

export default IndexPage
