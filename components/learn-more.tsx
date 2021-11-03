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

import cn from 'classnames';
import styleUtils from './utils.module.css';
import styles from './contact.module.css';
import { REPO } from '@lib/constants';

export default function LearnMore() {
  return (
    <div className={cn(styleUtils.appear, styleUtils['appear-fifth'], styles.contact)}>
      <p className={styles['hero-lead']}>I’m a web developer specialized in building front-end components and web pages (and occasionally some backend works too). I love to explore every technology stack learn new skills. After Nuxt Js and Vue Js, currently I'm learning React Js and Next Js.</p>
      {/* Check out my{' '}<a href={REPO} className={styles['contact-email']} target="_blank" rel="noopener noreferrer">GitHub Profile</a> */}
    </div>
  );
}
