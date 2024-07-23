import React from 'react'
import featureimage from "../images/Frame 19.png";

const Features = () => {
  return (
    <div id='features'>  
        <div className="features-model">
          <img src={featureimage} alt="feature-image" />
        </div>
        <div className="features-text">
          <h2>Features</h2>
          <h3>This Application <span>Software</span> is Art</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem est quia itaque mollitia pariatur animi aliquid nostrum quo aut architecto enim exercitationem, minima nemo modi doloremque ipsam ullam? Officiis quae necessitatibus, voluptate sequi reprehenderit totam cumque quaerat commodi obcaecati reiciendis.</p>
          <button>View More Features</button>
        </div>
    </div>
  )
}

export default Features