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

import Image from 'next/image';
import styles from './speaker-section.module.css';

export default function Hobbie() {

  const hobbyList=[
    { 
      id: 1,
      name: 'QuoteMe',
      shortName: 'QM',
      tech: 'Using React & Next Js',
      bio: 'QuoteMe is a single page web app which gives motivational quotes by famous peoples and It works using an api service.',
      projectImage: '/quote-me-thumbnail.jpg',
      siteLink: 'https://quote-me.vercel.app/'
    },
    { 
      id: 2,
      name: 'ChangeCase',
      shortName: 'CC',
      tech: 'Using Vue & Nuxt Js',
      bio: 'A single page web application which can be used to convert text from one case to different cases like uppercase, lowercase, camelcase, snakecase etc.',
      projectImage: '/changecase-thumbnail.jpg',
      siteLink: 'https://jishnu-dev.github.io/the-changecase/'
    }
  ]

  return (
    <>
      <div className={styles['talk-details']}>
        {/* <h3 className={styles['socials-header']}>{'about'}</h3> */}
        <p> I found myself interested in multiple areas like tech, graphic design, and 
          I enjoy doing what makes me happy.<br />
          ~ I enjoy photoshopping, photography, videography.<br />
          ~ Loves to create small web apps and projects.<br />
          ~ Passionate about coding and to explore new technologies and learn them by trying them.<br />
          ~ Loves to travel and explore destinations.

          <br />
          <br />
          Below are two hobbie projects I build as part of learning...
        </p>
      </div>

      {hobbyList.map(hobby => (
        <div key={hobby.name} className={styles.experienceDiv}>
          <div className={styles.container}>
            <a href={hobby.siteLink} target={'_blank'}>
              <div className={styles['hover-zoom']} style={{ minWidth: '300px' }}>
                <Image
                alt={hobby.name}
                title={hobby.name}
                src={hobby.projectImage}
                className={styles.image}
                loading="lazy"
                height={400}
                width={400}
                /> 
              </div>
            </a>
          <div className={styles['speaker-details']}>
            <div>
              <h1 className={styles.name}>{hobby.name}</h1>
              <p className={styles.title}>
                {/* {`${company.title} @ `} */}
                *
                <span className={styles.company}>{ ` ${hobby.tech}`}</span>
              </p>
              {/* <h3 className={styles['socials-header']}>Framework Used</h3> */}
              { hobby.shortName == 'QM' ?
                <div className={styles.techStackIcons}>
                    <img src="https://img.icons8.com/nolan/64/react-native.png"/>
                </div> : hobby.shortName == 'CC' ? 
                <div className={styles.techStackIcons}>
                    <img src="https://img.icons8.com/color/48/000000/vue-js.png"/>
                </div> : null
              }
              {/* <h2 className={styles['bio-header']}>About</h2> */}
              <p className={styles.bio}>{hobby.bio}</p>
              <br />
              <a
                href={hobby.siteLink}
                target="_blank"
                rel="noopener noreferrer"
                type="button"
                className={styles.button}
                style={{maxWidth: 'max-content'}}
              > Go to {hobby.name}
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
            </div>
          </div>
        </div>
    
        </div>
      ))}
    </>
  );
}
