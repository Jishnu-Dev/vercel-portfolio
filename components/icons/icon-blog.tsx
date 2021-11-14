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

import styles from './icon-transition.module.css';

type Props = { width: number | string };

export default function IconBlog({ width }: Props) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      x="0px" 
      y="0px"
      width={width} height="24"
      viewBox="0 0 50 50"
      style={{fill: '#000000;'}}>
      <path d="M 5 5 C 2.242188 5 0 7.242188 0 10 L 0 39 C 0 41.757813 2.242188 44 5 44 L 21 44 C 22.652344 44 24 45.347656 24 47 L 24 10 C 24 7.242188 21.757813 5 19 5 Z M 31 5 C 28.242188 5 26 7.242188 26 10 L 26 47 C 26 45.347656 27.347656 44 29 44 L 45 44 C 47.757813 44 50 41.757813 50 39 L 50 10 C 50 7.242188 47.757813 5 45 5 Z" 
      className={styles['fill-black']}/>
    </svg>
  );
}
