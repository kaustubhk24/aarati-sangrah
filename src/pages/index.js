import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { ProjDevCardsRow } from '../components/ProjDevCards';

export default function Hello() {
  return (
    <Layout title="आरती व स्तोत्र संग्रह" description="आरती व स्तोत्र संग्रह">
        <br/>
        <center>
        <h1>आरती व स्तोत्र संग्रह</h1>
        <img src='/img/pwa/192X192.png'/>

        <h5> श्री सत्यनारायण पूजेसाठी <a href="/category/श्री-सत्यनारायण-कथा"> येथे क्लिक करा </a></h5>

        <div className="container">
        <ProjDevCardsRow/>
        </div>
          </center>

    </Layout>
  );
}