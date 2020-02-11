import React from "react";
import PropTypes from "prop-types";
import Textarea from "react-textarea-autosize";
import styles from "./styles.module.scss";

const CommentBox = (props, context) => (
  <form className={`${styles.commentBox} ${props.isModal ? styles.isModal : ''}`}>
    <Textarea
      className={styles.input}
      placeholder={context.t("Add a comment...")}
      value={props.comment}
      onChange={props.handleInputChange}
      onKeyPress={props.handleKeyPress}
      inputRef={props.setTextInputRef}
    />
  </form>
);

CommentBox.contextTypes = {
  t: PropTypes.func.isRequired
};

CommentBox.propTypes = {
  comment: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  photoId: PropTypes.number.isRequired,
  setTextInputRef: PropTypes.func.isRequired,
};

export default CommentBox;
