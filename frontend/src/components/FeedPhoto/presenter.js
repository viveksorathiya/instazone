import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import PhotoActions from "components/PhotoActions";
import PhotoComments from "components/PhotoComments";
import TimeStamp from "components/TimeStamp";
import CommentBox from "components/CommentBox";
import UserList from "components/UserList";
import { Link } from "react-router-dom";

const FeedPhoto = (props, context) => (
  <div className={props.isModal ? styles.isModal : styles.feedPhoto}>
    <header className={styles.header}>
      <Link
        to={`/profile/${props.creator.username}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <img
          className={styles.profileImage}
          src={props.creator.profile_image || require("images/noPhoto.jpg")}
          alt={props.creator.username}
        />
      </Link>
      <div className={styles.headerColumn}>
        <Link
          to={`/profile/${props.creator.username}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <span className={styles.creator}>{props.creator.username}</span>
        </Link>
        <span className={styles.location}>{props.location}</span>
      </div>
    </header>
    <div className={styles.photoImg}>
      <img src={props.file} alt={props.caption} className={styles.feedImage} />
    </div>
    <div className={styles.meta}>
      <PhotoActions
        number={props.like_counts}
        isLiked={props.is_liked}
        photoId={props.id}
        openLikes={props.openLikes}
        isModal={props.isModal}
        focusTextInput={props.focusTextInput}
      />
      <PhotoComments
        creator={props.creator.username}
        caption={props.caption}
        comments={props.comments}
        isModal={props.isModal}
      />
      <TimeStamp time={props.natural_time} isModal={props.isModal} />
      <CommentBox
        photoId={props.id}
        isModal={props.isModal}
        setTextInputRef={props.setTextInputRef}
      />
      {props.seeingLikes && (
        <UserList title={context.t("Likes")} closeButton={props.closeLikes} />
      )}
    </div>
  </div>
);

FeedPhoto.contextTypes = {
  t: PropTypes.func.isRequired
};

FeedPhoto.propTypes = {
  creator: PropTypes.shape({
    profile_image: PropTypes.string,
    username: PropTypes.string.isRequired
  }),
  caption: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  natural_time: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired,
  like_count: PropTypes.number,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      creator: PropTypes.shape({
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired
      }).isRequired,
      message: PropTypes.string.isRequired
    })
  ).isRequired,
  is_liked: PropTypes.bool.isRequired,
  seeingLikes: PropTypes.bool.isRequired,
  closeLikes: PropTypes.func.isRequired,
  openLikes: PropTypes.func.isRequired,
  isModal: PropTypes.bool,
  setTextInputRef: PropTypes.func.isRequired,
  focusTextInput: PropTypes.func.isRequired
};

FeedPhoto.defaultProps = {
  isModal: false
};

export default FeedPhoto;
