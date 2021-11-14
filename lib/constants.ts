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
export const SITE_URL = 'https://jishnu-raj-portfolio.vercel.app/';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'vercel';
export const BRAND_NAME = 'Jishnu Raj';
export const SITE_NAME = 'ACME Conf';
export const META_DESCRIPTION = 'Jishnu Raj Developer Portfolio';
export const SITE_DESCRIPTION = 'Jishnu Raj | Portfolio';
export const DATE = 'Thodupuzha';
export const SHORT_DATE = 'Oct 27 - 9:00am PST';
export const FULL_DATE = 'Oct 27th 9am Pacific Time (GMT-7)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';
export const LATEST_BUILD = 'http://quote-me.vercel.app/';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = 'Jishnu Raj';

export const CODE_OF_CONDUCT = 'https://www.notion.so/vercel/Code-of-Conduct-Example-7ddd8d0e9c354bb597a0faed87310a78';
export const REPO = 'https://github.com/Jishnu-Dev/vercel-portfolio';
export const SAMPLE_TICKET_NUMBER = 100;
export const NAVIGATION = [
  {
    name: 'Home',
    route: '/'
  },
  {
    name: 'Career',
    route: '/experiences'
  },
  {
    name: 'Projects',
    route: '/hobbies'
  },
  {
    name: 'Education',
    route: '/education'
  },
  // {
  //   name: 'Hobbies',
  //   route: '/schedule'
  // },
  // {
  //   name: 'Speakers',
  //   route: '/speakers'
  // },
  // {
  //   name: 'Expo',
  //   route: '/expo'
  // },
  // {
  //   name: 'Other',
  //   route: '/jobs'
  // }
];

export type TicketGenerationState = 'default' | 'loading';
