import React from 'react';

import withPage from 'app-bootstrap/middlewares/WithPage';
import Layout from 'components/Layout/Layout';

const Index = () => (
  <div>
    <Layout>
      Hello World!
    </Layout>
  </div>
);

export default withPage(Index, {
  title: 'Hello next Index page!',
  metas: [
    {
      name: 'keywords',
      content: 'next js'
    }
  ]
});
