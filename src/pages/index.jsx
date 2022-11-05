import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  EmailIcon,
  TwitterIcon,
  GitHubIcon,
  LinkedInIcon,
    FacebookIcon
} from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.jpeg'
import image2 from '@/images/photos/image-2.jpeg'
import image3 from '@/images/photos/image-6.jpeg'
import image4 from '@/images/photos/image-4.jpeg'
import image5 from '@/images/photos/image-5.jpeg'

import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'

const notes = [
  {
    name: 'Managing custom font families using Tailwind CSS',
    description:
        'Using this method, you can define custom fonts in any project even if the project is not using TailwindCSS. TailwindCSS adds an extra feature like utility class and arbitrary values for you to use in styling elements.',
    link: { href: 'https://mercyikpe.hashnode.dev/managing-custom-font-families-using-tailwind-css-cl54hn8zf05r5ownv9m8924xx'},
    date: 'July 3rd, 2022'
  },
  {
    name: 'Integrating Intercom in Vue3 app',
    description:
        'How I integrated Intercom in Vue3 app without a plugin',
    link: { href: 'https://mercyikpe.hashnode.dev/integrating-intercom-in-vue3-app-cl20e8aqj04xky6nv5z5bc4bs'},
    date: 'Apr 15, 2022'
  },
  {
    name: '10k users: The Journey',
    description:
        'The journey from 1 user to 10k users on my side project.',
    link: { href: 'https://mercyikpe.hashnode.dev/10k-users-the-journey-cl1qdcwbv01ibsvnv14kf9hjr'},
    date: 'Mar 17, 2022'
  },
  {
    name: 'Linear-gradient as border color in CSS',
    description:
        'The usual way of implementing a border is to apply border properties to an element.',
    link: { href: 'https://mercyikpe.hashnode.dev/linear-gradient-as-border-color-cl54i5jp50cfuconv2k8becce'},
    date: 'Jan 8th, 2021'
  },
]

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Resume() {
  let resume = [
    {
      company: 'PHPSandbox',
      title: 'Frontend Developer',
      start: 'Jan 2021',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'AltaLabs',
      title: 'Frontend Developer',
      start: 'Jan 2019',
      end: 'Dec 2020',
    },
    {
      company: 'KodeHauz',
      title: 'Frontend Developer',
      start: '2018',
      end: '2019',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>

      <Button target="_blank" href="https://drive.google.com/file/d/1omFNdrgbrX5SR2-j1BY1xhZTeNDwKiDL/view"  variant="secondary" className="group mt-6 w-full">
        View CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Mercy Ikpe - Frontend Developer
        </title>
        <meta
          name="description"
          content="I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Frontend Developer.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I specialize in building exceptional user experience by building responsive, secure and accessible web applications.
          </p>
          <div className="mt-6 flex gap-6">

            <SocialLink target="_blank"
                        href="mailto:mercy@egberinde.com"
              aria-label="Follow on Twitter"
              icon={EmailIcon}
            />
            <SocialLink target="_blank"
              href="https://twitter.com/mercy_ikpe"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink target="_blank"
              href="https://www.facebook.com/mercy.ikpe.79"
              aria-label="Follow on Instagram"
              icon={FacebookIcon}
            />
            <SocialLink target="_blank"
              href="https://github.com/mercyikpe"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink target="_blank"
              href="https://www.linkedin.com/in/mercyikpe"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>

      <Photos />

      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {notes.map((note) => (
                <Card as="li" key={note.name}>
                  <h2 className="mt-2 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                    <Card.Link target="_blank" href={note.link.href}>{note.name}</Card.Link>
                  </h2>
                  <Card.Description>{note.description}</Card.Description>
                  <Card.Eyebrow as="time" dateTime={note.date} decorate>
                    {note.date}
                  </Card.Eyebrow>

                  <Card.Cta>Read article</Card.Cta>
                </Card>
            ))}

          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/*<Newsletter />*/}
            <Resume />
          </div>
        </div>
      </Container>

    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
