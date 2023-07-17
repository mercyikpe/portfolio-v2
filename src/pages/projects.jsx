import Image from 'next/future/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'


import pesapeerScreenshot from '@/images/logos/pesapeer.png'
import phpsandboxScreenshot from '@/images/logos/phpsandbox.png'
import uiPhpsandboxScreenshot from '@/images/logos/ui-phpsandbox.png'
import folarinScreenshot from '@/images/logos/folarin.png'
import kingsleyScreenshot from '@/images/logos/kingsley.png'
import mpm from '@/images/logos/mpm.png'
import sapientiaScreenshot from '@/images/logos/sapientia.png'
import playScreenshot from '@/images/logos/play.png'
import sightsoundsScreenshot from '@/images/logos/sightsounds.png'
import aksCelebrationScreenshot from '@/images/logos/akscelebration.png'
import rukah from '@/images/logos/rukah.png'
// Tools
import htmlLogo from '@/images/logos/html.png'
import TailwindCSSLogo from '@/images/logos/tailwind.png'
import BootstrapCSSLogo from '@/images/logos/Bootstrap.svg'
import WindiCSSLogo from '@/images/logos/windi.svg'
import JavaScriptLogo from '@/images/logos/javascript.png'
import ReactLogo from '@/images/logos/react.png'
import VueLogo from '@/images/logos/Vue.svg'
import GithubLogo from '@/images/logos/github.png'
import GitLabLogo from '@/images/logos/GitLab.svg'
import BitbucketLogo from '@/images/logos/bitbucket.svg'



const projects = [
  {
    name: 'Rukah',
    description:
        'A rating system for wedding vendors.',
    link: { href: 'https://rukah-fe.vercel.app', label: 'rukah-fe.vercel.app' },
    logo: rukah,
    tag: 'NodeJs, ExpressJS, React JS, Redux Toolkit, Redux Toolkit Query, TailwindCSS'
  },

  {
    name: 'Play',
    description:
        'I implemented the entire UI of this application following a figma design. This platform enables developers test Composer packages online.',
    link: { href: 'https://play.phpsandbox.io/', label: 'play.phpsandbox.io' },
    logo: playScreenshot,
    tag: 'VueJS, VueX, TailwindCSS, SCSS'
  },
  {
    name: 'Currency rates platform',
    description:
      'I implemented the Frontend for this website. Using the provided endpoint, I fetched the available currencies and the exchange rate of all currencies.',
    link: { href: 'https://site2.pesapeer.com/', label: 'pesapeer.com' },
    logo: pesapeerScreenshot,
    tag: 'VueJS, VueX, TailwindCSS, SCSS, Intercom'
  },
  {
    name: 'An Online IDE for building PHP applications',
    description:
      'I collaborated with a group of other developers on this project, So I implemented the UI.',
    link: { href: 'https://phpsandbox.io/', label: 'phpsanbox.io' },
    logo: phpsandboxScreenshot,
    tag: 'VueJS, VueX, TailwindCSS, SCSS, TypeScript'
  },
  {
    name: 'A design system for PHPSandbox',
    description:
      'I collaborated with other developers and built reusable components which are used to build the PHPSandbox and Play Platform.',
    link: { href: 'https://ui.phpsandbox.io/', label: 'ui.phpsandbox.io' },
    logo: uiPhpsandboxScreenshot,
    tag: 'VueJS, TailwindCSS, SCSS, TypeScript'
  },
  {
    name: 'Folarin Lawal - Portfolio',
    description:
      'Following a figma design, I implemented this responsive porfolio site and hosted it on Render.com.',
    link: { href: 'https://www.folarinlawal.com/', label: 'folarinlawal.com' },
    logo: folarinScreenshot,
    tag: 'VueJS, TailwindCSS, SCSS'
  },
  {
    name: 'kingsley Omin - Portfolio',
    description:
      'Following a figma design, I implemented this responsive porfolio site and hosted it on Render.com.',
    link: { href: 'https://www.kingsleyomin.com/', label: 'kingsleyomin.com' },
    logo: kingsleyScreenshot,
    tag: 'VueJS, TailwindCSS, GetForm, SCSS'
  },
  {
    name: 'Sapientia: Journal of Philosophy',
    description:
      'This Journal is built using Open Journal System.',
    link: { href: 'https://sapientiajournaluniuyo.com/index.php/sapientia', label: 'sapientiajournaluniuyo.com' },
    logo: sapientiaScreenshot,
    tag: 'Open Journal Systems'
  },
  {
    name: 'Akwa Ibom Celebrations',
    description:
      'A WordPress Site for the celebration of Top 35 people from 35 categories of business and services in Akwa Ibom State.',
    link: { href: 'https://akssightsandsounds.ng', label: 'Call for celebration of Akwa Ibomites' },
    logo: aksCelebrationScreenshot,
    tag: 'Wordpress'
  },
  {
    name: 'Akwa Ibom @35 - Sights and Sounds',
    description:
      'A WordPress Site for Photo and Video competition in celebration of Akwa Ibom @35.',
    link: { href: 'https://akssightsandsounds.ng', label: 'Photography and video competition' },
    logo: sightsoundsScreenshot,
    tag: 'Wordpress'
  },
  {
    name: 'Maintain Peace Movement, UK',
    description:
      'A WordPress Site for an NGO, an organization that promotes peace in its community.',
    link: { href: 'https://maintainpeacemovementuk.org/', label: 'maintainpeacemovementuk.org' },
    logo: mpm,
    tag: 'Wordpress'
  },

]


function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Mercy Ikpe</title>
        <meta
          name="Projects I worked on and tools I work with"
          content=""
        />
      </Head>

      <div className="w-full bg-blue-950 text-gray-300 pt-24">
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full text-zinc-800 dark:text-zinc-100">
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold">Tools I use to put my dent in the universe.</h3>
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes,react/no-unescaped-entities */}
            <p className="my-4">These are some technologies I'm familiar with.</p>
          </div>

          <div className="flex flex-wrap"><h5 className="text-xl font-semibold my-6 mr-12 hidden">HTML</h5>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-8 text-center py-8">

              <div className="shadow-md dark:shadow-[#040c16] rounded-sm py-5 flex justify-center">
                <div>
                  <Image
                      src={htmlLogo}
                      className="w-12 h-10"
                      alt="A project made by me"
                      unoptimized
                  />
                  <p className="text-center mt-3">HTML</p>
                </div>
              </div>

              <div className="shadow-md dark:shadow-[#040c16] rounded-sm py-5 flex justify-center">
                <div>
                  <Image
                      src={TailwindCSSLogo}
                      className="w-12 h-10"
                      alt="A project made by me"
                      unoptimized
                  />
                  <p className="text-center mt-3">TailwindCSS</p>
                </div>
              </div>

              <div className="shadow-md dark:shadow-[#040c16] rounded-sm py-5 flex justify-center">
                <div>
                  <Image
                      src={BootstrapCSSLogo}
                      className="w-12 h-10"
                      alt="A project made by me"
                      unoptimized
                  />
                  <p className="text-center mt-3">BootstrapCSS</p>
                </div>
              </div>

              <div className="shadow-md dark:shadow-[#040c16] rounded-sm py-5 flex justify-center">
                <div>
                  <Image
                      src={WindiCSSLogo}
                      className="w-12 h-10"
                      alt="A project made by me"
                      unoptimized
                  />
                  <p className="text-center mt-3">WindiCSS</p>
                </div>
              </div>

              <div className="shadow-md dark:shadow-[#040c16] rounded-sm py-5 flex justify-center">
                <div>
                  <Image
                      src={JavaScriptLogo}
                      className="w-12 h-10"
                      alt="A project made by me"
                      unoptimized
                  />
                  <p className="text-center mt-3">JavaScript</p>
                </div>
              </div>

              <div className="shadow-md dark:shadow-[#040c16] rounded-sm py-5 flex justify-center">
                <div>
                  <Image
                      src={ReactLogo}
                      className="w-12 h-10"
                      alt="A project made by me"
                      unoptimized
                  />
                  <p className="text-center mt-3">ReactJS</p>
                </div>
              </div>

              <div className="shadow-md dark:shadow-[#040c16] rounded-sm py-5 flex justify-center">
                <div>
                  <Image
                      src={VueLogo}
                      className="w-12 h-10"
                      alt="A project made by me"
                      unoptimized
                  />
                  <p className="text-center mt-3">VueJS</p>
                </div>
              </div>

              <div className="shadow-md dark:shadow-[#040c16] rounded-sm py-5 flex justify-center">
                <div>
                  <Image
                      src={GithubLogo}
                      className="w-12 h-10"
                      alt="A project made by me"
                      unoptimized
                  />
                  <p className="text-center mt-3">GitHub</p>
                </div>
              </div>

              <div className="shadow-md dark:shadow-[#040c16] rounded-sm py-5 flex justify-center">
                <div>
                  <Image
                      src={GitLabLogo}
                      className="w-12 h-10"
                      alt="A project made by me"
                      unoptimized
                  />
                  <p className="text-center mt-3">GitLab</p>
                </div>
              </div>

              <div className="shadow-md dark:shadow-[#040c16] rounded-sm py-5 flex justify-center">
                <div>
                  <Image
                      src={BitbucketLogo}
                      className="w-12 h-10"
                      alt="A project made by me"
                      unoptimized
                  />
                  <p className="text-center mt-3">Bitbucket</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <SimpleLayout
        title="Projects I've worked on putting my dent in the universe."
        intro="I’ve worked on tons of projects over the years as a freelancer and as an employee. Some projects are private while some are public. Here are some of the ones that are public."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-20 sm:grid-cols-2"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt="A project made by me"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>

              <Card.Description>{project.description}</Card.Description>

              <Card.tag>{project.tag}</Card.tag>

              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>

          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
