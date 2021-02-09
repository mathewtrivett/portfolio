/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import styles from './mainLayout.module.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.container}>{children}</main>
      <Footer />
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
