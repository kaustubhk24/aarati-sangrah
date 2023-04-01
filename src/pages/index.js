import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Hello() {
  return (
    <Layout title="आरती व स्तोत्र संग्रह" description="आरती व स्तोत्र संग्रह">
        <br/>
        <center>
        <h1>आरती व स्तोत्र संग्रह</h1>
        <img src='/img/pwa/192X192.png'/>

      
        <div className="container">

        <Link className="button button--info" to="/aarati">
        आरती संग्रह
          </Link>&nbsp;&nbsp;
          <Link className="button button--info" to="/stotras">
          स्तोत्र संग्रह
          </Link>
          </div>
          </center>

    </Layout>
  );
}