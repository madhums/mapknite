import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Features from '../components/Features';
import Subscribe from '../components/Subscribe';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h1 className="mx-auto" style={{ maxWidth: 900 }}>
            Accessible, low cost, & highly automated  land cover mapping & monitoring across the globe
          </h1>
          <br/>
          <p className="mx-auto" style={{ maxWidth: 600 }}>
            We firmly believe that life doesn't need to be complicated. Visit our data portal for easy access to near real time & ready-to-use satellite data.
          </p>
          <br/>
          <Link className="btn btn-primary btn-lg" to="/maps" role="button">
            Explore
          </Link>
        </div>
        <div className="container my-5 pt-3">
          <h1 className="text-center">How it works</h1>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <img src="http://via.placeholder.com/200x150" alt="" className="my-4 img-fluid mx-auto rounded d-block" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla aliquid aliquam numquam, repudiandae atque animi dolor sit tempore iure vel, ut nemo</p>
            </div>
            <div className="col-md-4 col-sm-12">
              <img src="http://via.placeholder.com/200x150" alt="" className="my-4 img-fluid mx-auto rounded d-block" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, delectus obcaecati quisquam excepturi distinctio! Itaque facilis aliquam</p>
            </div>
            <div className="col-md-4 col-sm-12">
              <img src="http://via.placeholder.com/200x150" alt="" className="my-4 img-fluid mx-auto rounded d-block" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime consectetur laudantium inventore quae, libero, cum. Fugiat perferendis omnis</p>
            </div>
          </div>
        </div>
        <div className="container my-5 border-top pt-5" style={{ maxWidth: 600 }}>
          <a name="for-whom"></a>
          <h1 className="text-center">For whom</h1>
          <p>
            We are here for any information driven entity with the need for more frequent, affordable and actionable information for decision making, (market) research, monitoring, management, and advocacy related to land use & land cover (changes) all over the world.
          </p>
        </div>
        <div className="container my-5 border-top pt-5" style={{ maxWidth: 600 }}>
          <a name="offer"></a>
          <h1 className="text-center">What we offer</h1>
          <p>
            Make use of our Machine Learning expertise and data infrastructure to leverage the insights that satellite data can give you. Through automated analysis using artificially intelligent image recognition models we can help you makes sense of Earth Observation data for at any scale. All you need to do, is choose the service and subscription that fits you best.
          </p>
          <ul>
            <li>Simply get the easiest access to raw satellite images </li>
            <li>Choose to have clouds automatically masked to save yourself time and headache</li>
            <li>Or choose to view fully classified data on land use and land cover so you can spend more time acting on relevant findings and less on searching for them</li>
          </ul>
        </div>
        <div className="container my-5 border-top pt-5" style={{ maxWidth: 600 }}>
          <a name="team"></a>
          <h1 className="text-center">Team</h1>
            <p>
              Bird’sAI helps people make use of the penta bytes of satellite data that are being generated every day. Through AI technology, we make it our mission to present people who want to leverage haystacks of potentially useful data, with the needles they were looking for.
            </p>

            <div className="mb-4" style={{ borderLeft: '5px solid #eee', paddingLeft: 10 }}>
              Strive for elegant and scalable solutions. At the intersection of AI and Earth Observation many awesome things are yet to be achieved
            </div>

            <div className="mb-4" style={{ borderLeft: '5px solid #eee', paddingLeft: 10 }}>
              Driven to connect more people to better information, because good things happen when we understand our environment.
            </div>

            <div className="mb-4" style={{ borderLeft: '5px solid #eee', paddingLeft: 10 }}>
              Taking on challenges and learning new skills are the only ways to get things done. The world changes too quickly to stick to old tricks.
            </div>
        </div>
        <div className="py-5 bg-light">
          <Subscribe />
        </div>
      </div>
    );
  }
}

export default Home;
