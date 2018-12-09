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

export default withPage(Index);