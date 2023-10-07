import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ProjDevCardsRow } from '../components/ProjDevCards';

export default function Hello() {
  return (
    <Layout title="संपूर्ण संग्रह" description="संपूर्ण संग्रह">
        <br/>
        <center>
        <h1>संपूर्ण संग्रह</h1>
        <img src='/img/pwa/192X192.png'/>


        <div className="container">
        <ProjDevCardsRow/>
        </div>
          </center>

    </Layout>
  );
}