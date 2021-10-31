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
import styles from './schedule.module.css';

const Education = () => {

  const schoolList =
    [ 
      {  
        id: 1,
        name: 'Graduation',
        stream: 'Bachelor of Computer Application',
        school: 'Santhigiri College of Sciences and Management',
        place: 'Vazhithala',
        year: 2020
      }, 
      {  
        id: 2,
        name: 'Higher Secondary',
        stream: 'Computer Science',
        school: 'MKNM HSS Kumaramangalam',
        place: 'Kumaramangalam',
        year: 2017
      },
      {  
        id: 3,
        name: 'High School',
        stream: 'Kerala State Syllabus',
        school: 'Vimala Matha HSS',
        place: 'Kadhalikad',
        year: 2015
      } 
    ];

  return (
    <div className={styles['row-wrapper']}>
      {schoolList.map(school => (
            <div key={school.id} className={styles.row}>
            <h3 className={cn(styles['stage-name'])}>
              <span>{school.name}</span>
            </h3>
            <h3 style={{marginBottom: '2rem'}}>{ school.stream }</h3>
            <p style={{margin: '0'}}><strong>Institution:</strong> { school.school }</p>
            <p style={{margin: '0'}}><strong>Year:</strong> { school.year }</p>
            <p style={{margin: '0'}}><strong>Place:</strong> { school.place }</p>
          </div>
      ))}
    </div>
  );
}
export default Education;
