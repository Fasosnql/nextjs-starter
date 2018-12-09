import React from 'react';
import Head from 'next/head';

import config from 'mainDir/config';
import DefaultHeadData from 'app-bootstrap/HeadData';

function withPage(WrappedComponent, headData = {}) {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <React.Fragment>
          <Head>
            <title>{headData.title || config.defaultTitle}</title>
            <DefaultHeadData>
              {headData.headData}
            </DefaultHeadData>
          </Head>
          <WrappedComponent {...this.props}/>
        </React.Fragment>
      )
    }
  };
}

export default withPage;