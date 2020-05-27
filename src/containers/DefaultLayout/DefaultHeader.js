import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from "../../assets/img/Logo/logo.png";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand className="mx-5"
          full={{ src: logo, width: 220, height: 45, alt: 'Logo' }}/>

        <Nav className="ml-auto" navbar>
        <NavItem className="d-md-down-none px-3">
            <NavLink to="#" className="nav-link">Acceuil</NavLink>
        </NavItem><NavItem className="d-md-down-none px-3">
        <NavLink to="#" className="nav-link">Presentation</NavLink>
        </NavItem>
          <NavItem className="d-md-down-none px-3">
            <NavLink to="#" className="nav-link">Documents</NavLink>
          </NavItem>
          <NavItem className="d-md-down-none px-3">
            <NavLink to="#" className="nav-link">Conseils</NavLink>
          </NavItem>
          <NavItem className="d-md-down-none px-3">
            <NavLink to="#" className="nav-link"><i className="icon-user"></i></NavLink>
          </NavItem>
        </Nav>

      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
