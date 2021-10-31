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
import { Stage, Talk } from '@lib/types';
import styles from './schedule.module.css';
import TalkCard from './talk-card';

import { EducationLead, HighSchool  } from '@lib/constants';

// function SchoolRow({ school }: { school: Stage }) {
//   // Group talks by the time block
//   const timeBlocks = stage.schedule.reduce((allBlocks: any, talk) => {
//     allBlocks[talk.start] = [...(allBlocks[talk.start] || []), talk];
//     return allBlocks;
//   }, {});

//   const SchoolList =
//   [ 
//     {  
//       id: 1,
//       school: 'Vimala Matha HSS',
//       place: 'Kadhalikkad'
//     } 
//   ];

//   return (
    
//     <div key={school.name} className={styles.row}>
//       {/* <h3 className={cn(styles['stage-name'], styles[stage.slug])}>
//         <span>{'Graduation'}</span>
//       </h3> */}
//       <div className={cn(styles.talks, styles[stage.slug])}>
//         {Object.keys(timeBlocks).map((startTime: string) => (
//           <div key={startTime}>
//             {timeBlocks[startTime].map((talk: Talk, index: number) => (
//               <TalkCard key={talk.title} talk={talk} showTime={index === 0} />
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

const Education = () => {

  const schoolList =
    [ 
      {  
        id: 1,
        name: 'Vimala Matha HSS',
        place: 'Kadhalikkad',
        year: 20000
      }, 
      {  
        id: 2,
        name: 'Vimala Matha HSS',
        place: 'Kadhalikkad',
        year: 20000
      },
      {  
        id: 3,
        name: 'Vimala Matha HSS',
        place: 'Kadhalikkad',
        year: 20000
      } 
    ];

  return (
    <div style={{color: 'red'}} className={styles.container}>
      <div className={styles['row-wrapper']}>
        {schoolList.map(school => (
              <div key={school.id} className={styles.row}>
              <h3 className={cn(styles['stage-name'])}>
                <span>{'Graduation'}</span>
              </h3>
                <p>Year: { school.year }</p>
              <p>{ school.place }</p>

              {/* <div className={cn(styles.talks, styles[stage.slug])}>
                {Object.keys(timeBlocks).map((startTime: string) => (
                  <div key={startTime}>
                    {timeBlocks[startTime].map((talk: Talk, index: number) => (
                      <TalkCard key={talk.title} talk={talk} showTime={index === 0} />
                    ))}
                  </div>
                ))}
              </div> */}
            </div>
        ))}
      </div>
    </div>
  );
}


export default Education;
