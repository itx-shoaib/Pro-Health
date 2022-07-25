import React from 'react'
import '../css/HomePage.css'
import Footer from './Footer'
import Navbar from './Navbar'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <div class="scrolloff">
                <div
                    id="carouselExampleCaptions"
                    class="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div class="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="0"
                            class="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img
                                src="https://s3.eu-west-2.amazonaws.com/luxurylondon.co.uk-storage-bucket-001/images/210921154737/billboard/arnaud-zannier-interior-design-guide.jpg"
                                class="d-block w-100 imgresponsive"
                                alt="..."
                            />
                            <div class="carousel-caption d-md-block ImgBodyAlignment">
                                <h5 class="carouseltitle">Interior</h5>
                                <h1 class="carouselsubtitle">Citizen Complex<br />Interior</h1>
                                <button type="button" class="btn btndark">See Project</button>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img
                                src="https://s3.eu-west-2.amazonaws.com/luxurylondon.co.uk-storage-bucket-001/images/210921154737/billboard/arnaud-zannier-interior-design-guide.jpg"
                                class="d-block w-100 imgresponsive"
                                alt="..."
                            />
                            <div class="carousel-caption d-md-block ImgBodyAlignment">
                                <h5 class="carouseltitle">Interior</h5>
                                <h1 class="carouselsubtitle">The Luxury<br />House in London</h1>
                                <button type="button" class="btn btndark">See Project</button>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img
                                src="https://s3.eu-west-2.amazonaws.com/luxurylondon.co.uk-storage-bucket-001/images/210921154737/billboard/arnaud-zannier-interior-design-guide.jpg"
                                class="d-block w-100 imgresponsive"
                                alt="..."
                            />
                            <div class="carousel-caption d-md-block ImgBodyAlignment">
                                <h5 class="carouseltitle">Interior</h5>
                                <h1 class="carouselsubtitle">Ocean<br />London</h1>
                                <button type="button" class="btn btndark">See Project</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 ownersection">
                        <h1 class="HeadOne">Who We Are?</h1>
                        <h5 class="HeadTwo">
                            Pro-Health is Pakistan’s Leading Healthcare Facility Planner, established since 2001. They specialize in the field of Healthcare Engineering ( Design, Planning , Equipment Management), Healthcare Project Management and provide turnkey solutions to it’s client.

                        </h5>
                        <h5 class="HeadThree">Dr. Shehzad Nazir Leghari</h5>
                        <h6 class="HeadFour">CEO & Founder</h6>
                        <img
                            alt='...' src="https://sparch.droitlab.com/dark/wp-content/uploads/sites/2/2021/03/signature-1.png"
                        />
                    </div>
                    <div class="col-md-6 ownersection">
                        <img
                            alt='...' src="https://sparch.droitlab.com/dark/wp-content/uploads/sites/2/2021/03/who-we-1.jpg"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 ownersection align-items-center mediaqueryFour">
                        <img
                            alt='...' src="https://sparch.droitlab.com/dark/wp-content/uploads/sites/2/2021/03/specialization-1.jpg"
                        />
                    </div>
                    <div class="col-md-6 mediaqueryspec">
                        <h1 class="HeadOne text-center">Specialization</h1>
                        <h5 class="SpecHeadOne text-center">Hospital Management and System</h5>
                        <div class="row rowmargin">
                            <div class="col-md-6">

                                <h5 class="SpecList"> Project Feasibility & Concept development</h5>
                                <h5 class="SpecList"> Healthcare Facility Design & Planning</h5>
                                <h5 class="SpecList"> Establish Biomedical Engineering Departments in Hospitals</h5>
                                <h5 class="SpecList"> Procurement of Electro-medical Equipment.</h5>
                            </div>
                            <div class="col-md-6">
                                <h5 class="SpecList"> Maintenance Management</h5>
                                <h5 class="SpecList"> Turnkey Supplies & Execution.</h5>
                                <h5 class="SpecList"> Turnkey Supplies & Execution.</h5>
                                <h5 class="SpecList">Healthcare Staff Training</h5>
                                <h5 class="SpecList">Hospital Project Management</h5>
                                <h5 class="SpecList"> Turnkey Project</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mediaquerythree">
                    <div class="col-md-6">
                        <h1 class="ProjectHeadTwo text-center">Latest Projects</h1>
                    </div>
                    <div class="col-md-6">
                        <h6 class="ProjectHeadTwo">
                            Rawalpindi Institute of Cardiology
                        </h6>
                    </div>
                </div>
                <div class="row justify-content-end mt-5 mediaquerytwo">
                    <div class="col-md-9">
                        <img
                            alt='...' src="https://sparch.droitlab.com/dark/wp-content/uploads/sites/2/2021/04/l-project-1-2-1.jpg"
                        />

                    </div>
                </div>
                {/* <!-- <div class="row rowmargin">
            <div class="col-md-12 paddingCol">
                <div class="row">
                    <div class="col-md-3 d-flex justify-content-center mediaquery">
                        <img src="https://sparch.droitlab.com/dark/wp-content/uploads/sites/2/2021/03/client-1-1.png" />
                    </div>
                    <div class="col-md-3 d-flex justify-content-center mediaquery">
                        <img src="https://sparch.droitlab.com/dark/wp-content/uploads/sites/2/2021/03/client-5-1.png" />
                    </div>
                    <div class="col-md-3 d-flex justify-content-center mediaquery">
                        <img src="https://sparch.droitlab.com/dark/wp-content/uploads/sites/2/2021/03/client-3-1.png" />
                    </div>
                    <div class="col-md-3 d-flex justify-content-center mediaquery">
                        <img src="https://sparch.droitlab.com/dark/wp-content/uploads/sites/2/2021/03/client-4-1.png" />
                    </div>
                </div>
                <div class="row rowmargin">
                    <div class="col-md-3 d-flex justify-content-center mediaquery">
                        <img src="https://sparch.droitlab.com/dark/wp-content/uploads/sites/2/2021/03/client-5-1.png" />
                    </div>
                    <div class="col-md-3 d-flex justify-content-center mediaquery">
                        <img src="https://sparch.droitlab.com/dark/wp-content/uploads/sites/2/2021/03/client-7-1.png" />
                    </div>
                    <div class="col-md-3 d-flex justify-content-center mediaquery">
                        <img src="https://sparch.droitlab.com/dark/wp-content/uploads/sites/2/2021/03/client-8-1.png" />
                    </div>
                    <div class="col-md-3 d-flex justify-content-center mediaquery">
                        <img src="https://sparch.droitlab.com/dark/wp-content/uploads/sites/2/2021/03/client-6-1.png" />
                    </div>
                </div>
            </div>
        </div> --> */}
                <div>
                    <div class="paddingrow rowmargin">
                        <h1 class="HeadOne">Latest News</h1>
                    </div>
                    <div class="row paddingrow">
                        <div class="col-md-4 imgcontainer">
                            <img
                                class="image"
                                alt='...' src="https://sparch.droitlab.com/dark/wp-content/uploads/sites/2/2021/04/discover2_detail-1-1-350x350.jpg"
                            />
                            <div class="overlay">
                                <div class="textDate">March 29, 2021</div>
                                <div class="textTitle">House, on Near</div>
                                <div class="textDescription">
                                    This response is important for our ability to learn from
                                    mistakes, but it also gives rise to self-criticism, because it
                                    is
                                </div>
                                <button type="button" class="btn learnmore">
                                    Learn more
                                    <i class="fa-solid fa-chevron-right learnmoreIcon"></i>
                                </button>
                            </div>
                        </div>
                        <div class="col-md-4 imgcontainer">
                            <img
                                class="image"
                                alt='...' src="https://sparch.droitlab.com/dark/wp-content/uploads/sites/2/2021/03/birdhousestudios-03-350x350.jpg"
                            />
                            <div class="overlay">
                                <div class="textDate">March 29, 2021</div>
                                <div class="textTitle">Modern bedrooms with</div>
                                <div class="textDescription">
                                    This response is important for our ability to learn from
                                    mistakes, but it also gives rise to self-criticism, because it
                                    is
                                </div>
                                <button type="button" class="btn learnmore">
                                    Learn more
                                    <i class="fa-solid fa-chevron-right learnmoreIcon"></i>
                                </button>
                            </div>
                        </div>
                        <div class="col-md-4 imgcontainer">
                            <img
                                class="image"
                                alt='...' src="https://sparch.droitlab.com/dark/wp-content/uploads/sites/2/2021/03/97ee8a96681617-3-350x350.jpg"
                            />
                            <div class="overlay">
                                <div class="textDate">March 29, 2021</div>
                                <div class="textTitle">People Accept Interior</div>
                                <div class="textDescription">
                                    This response is important for our ability to learn from
                                    mistakes, but it also gives rise to self-criticism, because it
                                    is
                                </div>
                                <button type="button" class="btn learnmore">
                                    Learn more
                                    <i class="fa-solid fa-chevron-right learnmoreIcon"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="hr" />
                <div class="row justify-content-center paddingrow">
                    <div class="col-md-9">
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home