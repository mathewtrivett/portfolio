import React from "react"
import { Link } from 'gatsby';

import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO"

const NotFoundPage = () => (
  <MainLayout>
    <SEO title="404: Not found" />
    <p>Oops</p>
    <Link to='/'>Home</Link>
  </MainLayout>
)

export default NotFoundPage
