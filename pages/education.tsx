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
import Education from '@components/school';
import Layout from '@components/layout';
import Header from '@components/header';
import styles from '@components/schedule.module.css';

export default function SchedulePage() {
  const meta = {
    title: 'Jishnu Raj | Education',
    description: null
  };

  return (
    <Page meta={meta}>
      <Layout>
        <div className={styles.schoolrow}>
        <Header hero="EDUCATION" description={`I keep learning each day and it never stops. But here is my academic career.`} />
        <Education />
        </div>
      </Layout>
    </Page>
  );
}
