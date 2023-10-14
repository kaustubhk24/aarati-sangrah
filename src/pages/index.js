import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ProjDevCardsRow } from '../components/ProjDevCards';

export default function Hello() {
  return (
    <Layout title="मुखपृष्ठ " description="मुखपृष्ठ ">
        <br/>
        <center>
        <h1>संपूर्ण संग्रह</h1>
        <img src='/img/pwa/192X192.png'/>

<h5>नवरात्र घटस्थापना शास्त्रोक्त पूजेसाठी <Link to='/ghat-sthapana-puja'>येथे क्लिक करा</Link> </h5>
<h5>नवरात्र - देवीच्या आरत्यांसाठी <Link to='/devi'>येथे क्लिक करा</Link> </h5>

        <div className="container">
        <ProjDevCardsRow/>
        </div>
          </center>

    </Layout>
  );
}