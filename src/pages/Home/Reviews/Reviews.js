import React, { useEffect, useState } from 'react';
import ShowMoreText from 'react-show-more-text';
import Rating from 'react-rating';
import userAvatar from './avatar.png'
import Slider from 'react-slick';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "rgba(0, 0, 0, 0.4)", borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "rgba(0, 0, 0, 0.4)", borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const Reviews = (props) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:7000/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch((e) => { })
  }, [])

  return (
    <div className="container">
      <h2 className="mt-5 mb-3">Testimonials</h2>
      <Slider {...settings}>
        {
          reviews.map(review => <div className="col-lg-4 col-12" key={review._id}>
            <div className="card border border-0 mx-2 mx-lg-0 text-start">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-3">
                    {
                      review.photoUrl === 'undefined' ? <img src={userAvatar} alt="service-icon" className='img-fluid' style={{ borderRadius: '50%' }} /> : review.photoUrl === 'null' ? <img src={userAvatar} alt="service-icon" className='img-fluid' style={{ borderRadius: '50%' }} /> : <img src={review.photoUrl} alt="service-icon" className='img-fluid' style={{ borderRadius: '50%' }} />
                    }
                  </div>
                  <div className="col-9">
                    <h5 className="card-title mb-0 text-start fw-lighter" style={{ lineHeight: '32px', fontWeight: 600 }}>{review.name}</h5>
                    <Rating initialRating={review.rating} className="text-warning" emptySymbol="far fa-star" fullSymbol="fas fa-star" readonly />
                  </div>
                </div>
                <ShowMoreText
                  lines={3}
                  more='Read more'
                  less='Show less'
                  anchorClass=''
                  expanded={false}
                  className='my-3'
                  style={{ color: 'green', textDecoration: 'none' }}
                >
                  <p>{review.comment}</p>
                </ShowMoreText>
              </div>
            </div>
          </div>)
        }
      </Slider>
    </div >
  )
};

export default Reviews;