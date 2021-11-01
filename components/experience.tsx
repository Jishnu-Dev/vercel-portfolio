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

import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';
import styles from './speaker-section.module.css';

export default function Experience() {

  const companyList=[
    { 
      id: 1,
      name: 'Web Developer',
      shortName: 'GI',
      company: 'Global Invisions | Kochi',
      bio: 'As a web developer, My major responsibilities at GI were to develop user-facing pages and User Interface components. Also to Make the user experience better, and occasionally some backend works with PHP and Laravel.',
      companyImage: 'https://www.giconsulting.com/assets/c93c07-d7ed2d1b6fb4cbeac1f544e27f3468db4c165056190a6552024b3b892a81abeb.jpg'
    },
    { 
      id: 2,
      name: 'Intern',
      shortName: 'Terasoft',
      company: 'Terasoft | Thodupuzha',
      bio: 'As an intern, I started my career as a developer at Terasoft with a four-month internship right after my graduation.',
      companyImage: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80'
    }
  ]

  return (
    <>
      {/* <Link href="/speakers">
        <a className={styles.backlink}>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            shapeRendering="geometricPrecision"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Back to speakers
        </a>
      </Link> */}
      {companyList.map(company => (
        <div key={company.name} className={styles.experienceDiv}>
          <div className={styles.container}>
          <div style={{ minWidth: '300px' }}>
            <Image
            alt={company.name}
            title={company.name}
            src={company.companyImage}
            className={styles.image}
            loading="lazy"
            height={400}
            width={400}
            /> 
          </div>
          <div className={styles['speaker-details']}>
            <div>
              <h1 className={styles.name}>{company.name}</h1>
              <p className={styles.title}>
                {/* {`${company.title} @ `} */}
                @
                <span className={styles.company}>{ ` ${company.company}`}</span>
              </p>
              <h2 className={styles['bio-header']}>About</h2>
              <p className={styles.bio}>{company.bio}</p>
              <h3 className={styles['socials-header']}>Tech stack used at {company.shortName}</h3>

              { company.shortName == 'GI' ?
                <div className={styles.techStackIcons}>
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/mac-os.png"/>
                    <img src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png"/>
                    <img src="https://img.icons8.com/color/48/000000/gitlab.png"/>
                    <img src="https://img.icons8.com/color/48/000000/vue-js.png"/>
                    <img src="https://img.icons8.com/color/48/000000/npm.png"/>
                    <img src="https://img.icons8.com/color/48/000000/bootstrap.png"/>
                  <img src="https://img.icons8.com/color/48/000000/sass.png"/>
                </div> : company.shortName == 'Terasoft' ? 
                <div className={styles.techStackIcons}>
                    <img src="https://img.icons8.com/color/48/000000/html-5.png"/>
                    <img src="https://img.icons8.com/officel/48/000000/asp.png"/>
                </div> : null
              }

            </div>
          </div>
        </div>
      
        {/* <div className={styles['talk-details']}>
          <h3 className={styles['socials-header']}>{'sdfsdfsd'}</h3>
          <p>{'company.talk.description'}</p>
        </div> */}
        </div>
      ))}
    </>
  );
}
