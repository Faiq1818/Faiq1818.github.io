import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

const categories = [
  {
    name: 'Frontend',
    posts: [

    ],
  },
  {
    name: 'Backend',
    posts: [

    ],
  },
  {
    name: 'Mobile Apps Development',
    posts: [

    ],
  },
  {
    name: 'Open Source Software',
    posts: [
      {
        id: 1,
        title: 'Wonderfull',
        image: '/images/wonderful1.png',
        description: 'A Rust-based launcher that can start multiple applications at once. This is my first open source project, it is TUI application written in Rust using Ratatui library for graphical rendering.',
        techstack: 'Rust, Ratatui',
      },
    ],
  },
]

export default function selectProject() {
  return (
    <div className="flex h-screen w-full justify-center px-4 pt-24">
      <div className="w-full max-w-2xl">
        <TabGroup>
          <TabList className="flex gap-4">
            {categories.map(({ name }) => (
              <Tab
                key={name}
                className="rounded-full px-3 py-1 text-sm/6 font-semibold text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-white/5 data-selected:bg-white/10 data-selected:data-hover:bg-white/10"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {categories.map(({ name, posts }) => (
              <TabPanel key={name} className="rounded-xl bg-white/5 p-3">
                <ul>
                  {posts.map((post) => (
                    <li key={post.id} className="relative rounded-md p-3 text-sm/6 transition hover:bg-white/5">
                      <a href="#" className="font-semibold text-white text-lg">
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                      <img className='rounded-lg mt-4' src={post.image} alt="Logo" />
                      <p className='text-white/80 my-2'>{post.description}</p>
                      <ul className="flex gap-2 text-white/50" aria-hidden="true">
                        <li aria-hidden="true">- {post.techstack}</li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  )
}
