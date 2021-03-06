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

import { useState, useRef, useEffect } from 'react';
import cn from 'classnames';
// import { SITE_URL, TWEET_TEXT } from '@lib/constants';
// import IconTwitter from './icons/icon-twitter';
import IconInstagram from './icons/icon-instagram';
import IconGithubJis from './icons/icon-github-jis';
import IconBlog from './icons/icon-blog';
// import IconLinkedin from './icons/icon-linkedin';
import IconDownload from './icons/icon-download';
import LoadingDots from './loading-dots';
import styleUtils from './utils.module.css';
import styles from './ticket-actions.module.css';
// import GithubIcon from '@components/icons/icon-github';

type Props = {
  username: string;
};

export default function TicketActions({ username }: Props) {
  const [imgReady, setImgReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const downloadLink = useRef<HTMLAnchorElement>();
  // const permalink = encodeURIComponent(`${SITE_URL}/tickets/${username}`);
  // const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${permalink}`;
  const downloadUrl = `/api/ticket-images/${username}`;
  const instagramUrl = 'https://www.instagram.com/plutokyd/';
  const gitHubUrl = 'https://github.com/Jishnu-Dev'
  const blogUrl = 'https://boringblog.hashnode.dev/dev-jishnu-my-favourite-vs-code-dark-themes'

  useEffect(() => {
    setImgReady(false);

    const img = new Image();

    img.src = downloadUrl;
    img.onload = () => {
      setImgReady(true);
      setLoading(false);
      if (downloadLink.current) {
        downloadLink.current.click();
        downloadLink.current = undefined;
      }
    };
  }, [downloadUrl]);

  return (
    <>
      <a
        className={cn(styles.button, styleUtils.appear, styles.first, 'icon-button')}
        href={gitHubUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        <IconGithubJis width={24} /> GitHub Profile
      </a>
      {/* <a
        className={cn(styles.button, styleUtils.appear, styles.first, 'icon-button')}
        href={instagramUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        <IconInstagram width={24} /> Instagram Profile
      </a> */}
      <a
        className={cn(styles.button, styleUtils.appear, styles.third, 'icon-button', {
          [styles.loading]: loading
        })}
        href={loading ? undefined : blogUrl}
        target={'_blank'}
        download="ticket.png"
      >
        {loading ? (
          <LoadingDots size={4} />
        ) : (
          <>
            <IconBlog width={24} /> Read My Blog
          </>
        )}
      </a>
    </>
  );
}
