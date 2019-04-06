import React from 'react';
import Head from 'next/head';

import config from 'mainDir/config';
import DefaultHeadData from 'app-bootstrap/HeadData';

const defaultHeadData = {
  title: config.defaultTitle,
  metas: []
};

function withPage(WrappedComponent, headData = defaultHeadData) {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <React.Fragment>
          <Head>
            <title>{headData.title || defaultHeadData.title}</title>
            <DefaultHeadData />
            {Array.isArray(headData.metas) && headData.metas.map(meta => (
              <meta name={meta.name} content={meta.content} key={Math.random()}/>
            ))}
          </Head>
          <WrappedComponent {...this.props}/>
        </React.Fragment>
      )
    }
  };
}

export default withPage;
