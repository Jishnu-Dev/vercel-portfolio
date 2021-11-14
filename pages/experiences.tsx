
/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Page from '@components/page';
import Experience from '@components/experience';
import Layout from '@components/layout';
import Header from '@components/header';
import styles from '@components/schedule.module.css';

export default function SchedulePage() {
  const meta = {
    title: 'Jishnu Raj | Education',
    description: null
  };

  // const speaker= [{"name":[{"type":"heading1","content":{"text":"Christa Collyn","spans":[]}}],"bio":[{"type":"paragraph","content":{"text":"They have over ten years of experience building blazing-fast web applications with Next.js and Vercel. Outside of work, they enjoy hiking, skiing, and surfing. Before becoming a developer, they worked in finance for a Fortune 500 company.","spans":[]}}],"uid":"christa","title":[{"type":"heading4","content":{"text":"CEO","spans":[]}}],"twitter":{"url":"https://twitter.com/vercel","preview":null},"github":{"url":"https://github.com/vercel","preview":null},"company":[{"type":"heading4","content":{"text":"Company","spans":[]}}],"image":{"origin":{"id":"X9iy6hIAACYA5bGM","url":"https://prismic-io.s3.amazonaws.com/nextjs-conference/c84ff287-49a2-4ccc-9953-f80fa89b8ff6_image+%2831%29.jpeg","width":300,"height":400},"width":300,"height":400,"url":"https://images.prismic.io/nextjs-conference/c84ff287-49a2-4ccc-9953-f80fa89b8ff6_image+%2831%29.jpeg?auto=compress,format","edit":{"background":"#fff","zoom":1,"crop":{"x":0,"y":0}},"credits":null,"alt":"Christa Collyn","provider":"imgix","thumbnails":{}},"talk":{"id":"X9kEExIAACcA5yQ_","wioUrl":"wio://documents/X9kEExIAACcA5yQ_"},"name_TYPE":"StructuredText","name_POSITION":0,"bio_TYPE":"StructuredText","bio_POSITION":1,"uid_TYPE":"UID","uid_POSITION":2,"title_TYPE":"StructuredText","title_POSITION":3,"twitter_TYPE":"Link","twitter_POSITION":4,"github_TYPE":"Link","github_POSITION":5,"company_TYPE":"StructuredText","company_POSITION":6,"image_TYPE":"Image","image_POSITION":7,"talk_TYPE":"Link","talk_POSITION":8,"slugs_INTERNAL":["christa-collyn"],"uids_INTERNAL":[]}]

  return (
    <Page meta={meta}>
      <Layout>
        <div className={styles.schoolrow}>
        <Header hero="EXPERIENCE" description={`Honoured to work with amazing peoples since I started my career in 2020`} />
        <Experience />
        </div>
      </Layout>
    </Page>
  );
}
