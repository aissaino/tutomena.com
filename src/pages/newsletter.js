import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout';
import SEO from '../components/SEO';
import config from '../../data/SiteConfig';
import { NewsletterForm } from '../shortcodes';

export default function NewsletterPage() {
  return (
    <Layout>
      <SEO />
      <Helmet title={`القائمة البريدية – ${config.siteTitle}`} />
      <div className="container">
        <div className="container">
          <NewsletterForm />
        </div>
      </div>
    </Layout>
  );
}
