import React from "react";
import PropTypes from "prop-types";
import IosCompassOutline from "react-ionicons/lib/IosCompassOutline";
import MdHeartOutline from "react-ionicons/lib/MdHeartOutline";
import MdAdd from 'react-ionicons/lib/MdAdd';
import MdPerson from "react-ionicons/lib/MdPerson";
import { Link } from "react-router-dom";
import Notification from "components/Notification";
import styles from "./styles.module.scss";

const Navigation = (props, context) => {
  return (
    <div className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.column}>
          <Link to="/">
            <img
              src={require("images/Logo.png")}
              className={styles.logo}
              alt={context.t("Logo")}
            />
          </Link>
        </div>
        <div className={styles.column}>
          <form onSubmit={props.handleSubmit}>
            <input
              type="text"
              placeholder={context.t("Search")}
              className={styles.searchInput}
              value={props.value}
              onChange={props.handleInputChange}
            />
          </form>
        </div>
        <div className={styles.column}>
          <div className={styles.navIcon}>
            <Link to="/explore">
              <IosCompassOutline fontSize="32px" color="black" />
            </Link>
          </div>
          <div className={styles.navIcon}>
            <MdHeartOutline
              fontSize="32px"
              color="black"
              onClick={(e) => {
                e.stopPropagation();
                if(!props.toggle) props.handleNotiOpen();
              }
            }
            />
            {props.toggle ? <Notification handleNotiToggle={props.handleNotiClose} /> : null}
          </div>
          <div className={styles.navIcon}>
            {props.loading ? (
              <MdPerson fontSize="32px" color="black" />
            ) : (
              <Link to={`/profile/${props.userInfo.username}`}>
                <MdPerson fontSize="32px" color="black" />
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className={styles.addPhoto}>
        <Link to="/photos">
          <button className={styles.addBtn}>
              <MdAdd fontSize="32px" color="white" />
          </button>
        </Link>
      </div>
    </div>
  );
};

Navigation.contextTypes = {
  t: PropTypes.func.isRequired
};

Navigation.propTypes = {
  handleNotiOpen: PropTypes.func.isRequired,
  handleNotiClose: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default Navigation;
