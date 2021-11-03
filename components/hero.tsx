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
import styles from './hero.module.css';
import { BRAND_NAME, LATEST_BUILD, SITE_DESCRIPTION } from '@lib/constants';

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <h2
        className={cn(
          styleUtils.appear,
          styleUtils['appear-third'],
          styleUtils['show-on-mobile'],
          styles.description
        )}
      >
        {SITE_DESCRIPTION}
      </h2>
      <h2 className={cn(styleUtils.appear, styleUtils['appear-third'], styles.hero, styles.herotitle)}>
        Hi, I'm {BRAND_NAME}.
        <br className={styleUtils['show-on-desktop']} />I build things for the web
      </h2>
      <h2
        className={cn(
          styleUtils.appear,
          styleUtils['appear-third'],
          styleUtils['show-on-tablet'],
          styles.description
        )}
      >
        {SITE_DESCRIPTION}
      </h2>
      <div className={cn(styleUtils.appear, styleUtils['appear-fourth'], styles.info)}>
          <p className={cn(styles.secondarygradient)}><strong>See My LATEST BUILD</strong></p>
          <br />
            <div className={styles['description-separator']} />
            <p>
            <a 
              href={LATEST_BUILD}
              className={styles['hero-link']}
              target="_blank">
              <strong>{'QuoteMe '}</strong>
              <svg 
                viewBox="0 0 24 24" 
                width="16" 
                height="16" 
                stroke="currentColor" 
                stroke-width="1.5" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                fill="none" 
                shape-rendering="geometricPrecision">
                  <path 
                    d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <path 
                    d="M15 3h6v6" />
                  <path d="M10 14L21 3" />
              </svg>
              </a>
            </p>
      </div>
    </div>
  );
}
