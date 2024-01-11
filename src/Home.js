import Carousel from 'react-bootstrap/Carousel';
import './App.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import App from './App';
import Fotter from './Fotter';
import $ from 'jquery'

const handelmouseenter=()=>{
  var id = $("#change").css("color","yellow")
}
function Home() {

  const options = {
    items: 5,
    nav: true,
    rewind: true,
    autoplay: true,
    loop: true,
    autoplayTimeout: 2000,
  };
  function bbb(){
    // $(".box1").css("background","red")
    var id=$("#p-btn ").attr("data-id")
    // alert(id)
  }
  function vvv(){
    $(".box1").attr("style","background:green")
  }

  return (
    <>
    <App/>
      <Carousel slide={false}>
        <Carousel.Item>
          <div className='container'>
            <div className='row'>
              <div className='col-md-7 sld-dtl'>
                <h4>Great Design Collection</h4>
                <h2>Cloth Covered Accent Chair</h2>
                <p className='dlt-p'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiuiana Smod Tempor Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip.</p>
                <p className='dlt-price'>
                  $199.00
                  <del>$499.00</del>
                </p>
                <a className='sld-btn sld-btn-1' href='#'>Add to Cart</a>
                <a className='sld-btn sld-btn-2'>More Info</a>
              </div>
              <div className='col-md-5 slt-img'>
                <img src="images/slider1.png" />
              </div>
            </div>
          </div>
        </Carousel.Item>
        {/* <Carousel.Item>  
      <div className='row'>
            <div className='col-md-7'>hjkgfv</div>
            <div className='col-md-5'>owowoowowow</div>
       </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='row'>
            <div className='col-md-7'>bcbcbbcbcb</div>
            <div className='col-md-5'>ererererer</div>
       </div>
      </Carousel.Item> */}
      </Carousel>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='box box1'>
              <img src='images/p1.png' />
              <h2><a href='#'>Arm  Chair</a></h2>
              <div><p>Nemo enim ipsam voluptatem quia volu ptas sit asperna aut odit aut fugit.</p></div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='box box2'>
              <div className='row'>
                <div className='col-md-4'>
                  <img src='images/p2.png' />
                </div>
                <div className='col-md-8'>
                  <div class="cnt-dlt">
                    <h2>
                      <a className='cnt-btn-1' href="#">
                        latest designed stool <span>and</span> chair
                      </a>
                    </h2>
                    <p>
                      Edi ut perspiciatis unde omnis iste natusina error sit voluptatem accusantium doloret mque laudantium, totam rem aperiam.
                    </p>
                    <div class="sale-p">
                      <h4>Sales Start from <span>$99.00</span></h4>
                    </div>
                    <div>
                      <a className='cnt-btn' href='#'>Discover more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='box box1'>
              <img src='images/p3.png' />
              <h2><a href='#'>Arm  Chair</a></h2>
              <div><p>Nemo enim ipsam voluptatem quia volu ptas sit asperna aut odit aut fugit.</p></div>
            </div>
          </div>
        </div>
      </div>
      <div className='arrival'>
        <h1>New Arrivals</h1>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <div className='arrival-box'>
                <div className='sales'><p className='sale'>sale</p></div>
                <img src='images/arrivals1.png' />
                <h2><a href='#'>wooden chair</a></h2>
                <h3>$65.00</h3>
              </div>
            </div>

            <div className='col-md-3'>
              <div className='arrival-box'>
                <div className='sales'><p className='sale sales2'>sale</p></div>
                <img src='images/arrivals2.png' />
                <h2><a href='#'>wooden chair</a></h2>
                <h3>$65.00</h3>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='arrival-box'>
                <div className='sales'><p className='sale sales3'>sale</p></div>
                <img src='images/arrivals3.png' />
                <h2><a href='#'>wooden chair</a></h2>
                <h3>$65.00</h3>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='arrival-box'>
                <div className='sales'><p className='sale'>sale</p></div>
                <img src='images/arrivals4.png' />
                <h2><a href='#'>wooden chair</a></h2>
                <h3>$65.00</h3>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='arrival-box'>
                <div className='sales'><p className='sale sales3'>sale</p></div>
                <img src='images/arrivals5.png' />
                <h2><a href='#'>wooden chair</a></h2>
                <h3>$65.00</h3>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='arrival-box'>
                <div className='sales'><p className='sale'>sale</p></div>
                <img src='images/arrivals6.png' />
                <h2><a href='#'>wooden chair</a></h2>
                <h3>$65.00</h3>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='arrival-box'>
                <div className='sales '><p className='sale sales2'>sale</p></div>
                <img src='images/arrivals7.png' />
                <h2><a href='#'>wooden chair</a></h2>
                <h3>$65.00</h3>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='arrival-box'>
                <div className='sales'><p className='sale sales3'>sale</p></div>
                <img src='images/arrivals8.png' />
                <h2><a href='#'>wooden chair</a></h2>
                <h3>$65.00</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='featured'>
        <h1 className='f-title'>Featured Products</h1>
        <div className='container g-0'>
          <div className='row'>
            <div className='col-md-3 feature-box'>
              <div className='f-box'>
                <img src='images/f1.jpg' />
                <div className='star'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <p>(45 Review)</p>
                </div>
                <h3>Designed Sofa</h3>
                <h5>$160.00</h5>
              </div>
            </div>
            <div className='col-md-3 feature-box'>
              <div className='f-box'>
                <img src='images/f2.jpg' />
                <div className='star'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <p>(45 Review)</p>
                </div>
                <h3>Designed Sofa</h3>
                <h5>$160.00</h5>
              </div>
            </div>
            <div className='col-md-3 feature-box'>
              <div className='f-box'>
                <img src='images/f3.jpg' />
                <div className='star'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <p>(45 Review)</p>
                </div>
                <h3>Designed Sofa</h3>
                <h5>$160.00</h5>
              </div>
            </div>
            <div className='col-md-3 feature-box'>
              <div className='f-box'>
                <img src='images/f4.jpg' />
                <div className='star'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <p>(45 Review)</p>
                </div>
                <h3>Designed Sofa</h3>
                <h5>$160.00</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
                {/* last-------blog */}
      <div className='last-blog'>
        <h1>Latest Bolg</h1>
        <div className='container'>
          <div className='row'>

            <div className='col-md-4 blog-img'>
              <img src='images/b1.jpg' onMouseEnter={handelmouseenter} />
              <h2 id='change'>Why Brands are Looking at Local Language</h2>
              <h3>By Robert Norby / 18th March 2018</h3>
              <p>Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit, Sed Quia Consequuntur Magni Dolores Eos Qui Ratione Voluptatem Sequi Nesciunt....</p>
            </div>
            <div className='col-md-4'>
              <img src='images/b2.jpg' />
              <h2>Why Brands are Looking at Local Language</h2>
              <h3>By Robert Norby / 18th March 2018</h3>
              <p>Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit, Sed Quia Consequuntur Magni Dolores Eos Qui Ratione Voluptatem Sequi Nesciunt....</p>
            </div>
            <div className='col-md-4'>
              <img src='images/b3.jpg' />
              <h2>Why Brands are Looking at Local Language</h2>
              <h3>By Robert Norby / 18th March 2018</h3>
              <p>Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit, Sed Quia Consequuntur Magni Dolores Eos Qui Ratione Voluptatem Sequi Nesciunt....</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className='carosal'>
        <OwlCarousel  options={options}>
          <div><img src="images/c1.png" alt="The Last of us" /></div>
          <div><img src="images/c2.png" alt="GTA V" /></div>
          <div><img src="images/c3.png" alt="Mirror Edge" /></div>
          <div><img src="images/c4.png" alt="Mirror Edge" /></div>
          <div><img src="images/c5.png" alt="Mirror Edge" /></div>
        </OwlCarousel>
      </div>
      <Fotter/>
      
    </>
    
  );
}

export default Home;