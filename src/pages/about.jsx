import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  GitHubIcon,
  LinkedInIcon,
  FacebookIcon,
} from '@/components/SocialIcons'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Mercy Ikpe</title>
        <meta
          name="description"
          content="I’m Spencer Sharp. I live in New York City, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <div className="max-w-sm">
                <Image
                  src="https://res.cloudinary.com/mercyikpe/image/upload/v1667584913/portfolio/avatar.jpg"
                  className="aspect-auto	 rotate-3 rounded-2xl bg-zinc-100 object-fill filter hover:grayscale  dark:bg-zinc-800"
                  width={500}
                  height={500}
                  alt="Mercy Ikpe"
                />
              </div>
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Mercy Ikpe.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                As a Software Developer familiar with frontend technologies, I
                have experience in building web applications using JavaScript
                (React JS and Vue JS). I also enjoy building responsive and
                accessible applications.
              </p>
              <p>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                I'm a Co-founder of{' '}
                <a
                  href="https://phpsandbox.io"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-pink-600 decoration-double underline-offset-4"
                >
                  PHPSandbox{' '}
                </a>
                , an Online development environment for building PHP
                applications.
              </p>
              <p>
                Outside of Software Development, I speak regularly at technology
                conferences across Africa. An Ex-Google Student Developer
                Lead, Ex-organiser of NodeJS Akwa Ibom, and also a member of{' '}
                <a
                  href="https://starthub.com.ng/starthub-women"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-pink-600 decoration-double underline-offset-4"
                >
                  StartHub women{' '}
                </a>
                , a community of young women using technology and
                entrepreneurship to champion the visibility of women in the
                society.
              </p>
              <p>
                I have a Higher National Diploma in Computer Science from
                Heritage Polytechnic, Nigeria.
              </p>
            </div>

            <div className="container mx-auto py-10 text-base text-zinc-600 dark:text-zinc-400">
              <h4 className="text-2xl font-semibold capitalize text-gray-800 dark:text-white">
                Interests
              </h4>
              <dl>
                <dt className="mt-4 text-lg font-semibold">Writing</dt>
                <dd className="ml-4">
                  - I share{' '}
                  <a
                    href="https://egberinde.com"
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-pink-600 decoration-double underline-offset-4"
                  >
                    this blog
                  </a>{' '}
                  with my husband{' '}
                  <a
                    href="https://twitter.com/bosunski"
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-indigo-500 underline-offset-4"
                  >
                    {' '}
                    Ola
                  </a>
                  , I write about my travels, thoughts, friends and lifestyle.
                </dd>

                <dd className="ml-4 mt-2">
                  - I blog regularly on{' '}
                  <a
                    href="https://mercyikpe.hashnode.dev/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-pink-600 decoration-double underline-offset-4"
                  >
                    {' '}
                    this my Hashnode page
                  </a>{' '}
                  about Frontend stuffs.
                </dd>

                <dt className="mt-4 font-semibold">Journaling</dt>
                <dd className="ml-4">
                  I like to document my daily life, I have documented my daily
                  life since January 1st, 2022.
                </dd>

                <dt className="mt-4 font-semibold">Politics</dt>
                <dd className="ml-4">
                  I enjoy being in meetings where policies are discuss, so yes,
                  you will most likely see me in organizations that are
                  politically inclined.
                </dd>

                <dt className="mt-4 font-semibold">Travels</dt>
                <dd className="ml-4">
                  I visit a new place every 2 weeks, new City/State every 2
                  months, and a new Country every now and then. I also like to{' '}
                  <a
                    href="https://www.youtube.com/channel/UCq0dYXXr5eaCi0kSXHjwQXg"
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-pink-600 decoration-double underline-offset-4"
                  >
                    share{' '}
                  </a>{' '}
                  what these places looks like and my experience.
                </dd>
              </dl>
            </div>
          </div>

          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/mercy_ikpe"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://www.facebook.com/mercy.ikpe.79"
                icon={FacebookIcon}
                className="mt-4"
              >
                Follow on Facebook
              </SocialLink>
              <SocialLink
                href="https://github.com/mercyikpe"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/mercyikpe"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:mercy@egberinde.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                mercy@egberinde.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
