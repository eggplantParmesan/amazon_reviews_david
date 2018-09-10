import React from 'react';
const moment = require('moment');
import styles from '../styles/Review.css';
class Review extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { review } = this.props;
    let isVerified = '';
    if (review.verifiedPurchase) {
      isVerified = 'Verified Purchase';
    }
    const starArr = this.props.renderStarRating(review.stars, 1.5);

    return (
      <React.Fragment>
        <div className={styles.review}>
          <div className={styles.profileContainer}><img className={styles.profile} src='./img/profile.jpg'></img> {review.username}</div>
          <div><a className={styles.gold}><b>{starArr}</b> </a><b>{review.title}</b></div>
          <div className={styles.grey}>{moment(review.timestamp).format('MMMM DD, YYYY')}</div>
          <div className={styles.orange}><b>{isVerified}</b></div>
          <p className={styles.text}>{review.text}</p>
          <p className={styles.grey}>{review.numHelpful} people found this helpful</p>
          <div className={styles.actionContainer}><button className={styles.buttonFlex}>Helpful</button> <a className={styles.lightGreyFlex}>|</a><a className={styles.greyFlex}>Comment</a><a className={styles.lightGreyFlex}>|</a><a className={styles.greyFlex}>Report Abuse</a></div>
          <br></br>
          <br></br>
        </div>
      </React.Fragment>
    );
  }
}

export default Review;

/*
example data
{"_id":"5b918722d4a71c1897abb02f","productId":37,"reviewId":368,"username":"Parker_Nader66","stars":1,"title":"est dolore ducimus","text":"Vel molestias consequatur voluptatum vero labore dicta repellendus aut corporis. Et cupiditate minus nam. Perspiciatis dolorem omnis provident.","timestamp":"2018-02-01T17:26:28.993Z","numHelpful":965,"verifiedPurchase":true,"imageUrl":"http://lorempixel.com/640/480","__v":0}
*/