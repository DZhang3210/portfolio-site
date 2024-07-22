import { Github, Link } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const RecentProjects = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-4'>
        {[["/pathfinder_demo.gif","Pathfinding Visualizer", "App to Demonstrate Live Pathfinding Algorithms", "http://pathvis.s3-website-us-east-1.amazonaws.com", "https://github.com/DZhang3210/Pathfinder"],
        ["/BugBuddy-gif.gif","Bug Buddy", "Live Bug Tracking and Documentation App", "https://bug-frontend-hnc8.onrender.com", "https://github.com/DZhang3210/Bug-Buddy"],
        ["/Upwork-gif.gif", "OfficeVibe", "Mobile-responsive front-end interface replicating the OfficeVibe platform", "https://workvibe.netlify.app/", "https://github.com/DZhang3210/work-vibe"],
        ["/Unsplash-gif.gif", "Unsplash", "Mobile-responsive front-end interface replicating the Unsplash platform", "https://unsplash-replica1.netlify.app/", "https://github.com/DZhang3210/unsplash"]
        ].map(([preview, title, desc, link, github],i)=>(
            <div 
                className='flex flex-col border rounded-2xl p-5 border-secondary gap-4 transition hover:-translate-y-1 cursor-pointer'
                key = {i}
            >
                <Image
                    src = {preview}
                    alt = {preview}
                    width = {100}
                    height = {50}
                    className='w-full'
                />
                <div>
                    <div className='text-xl font-semibold'>
                        {title}
                    </div>
                    <p>
                        {desc}
                    </p>
                </div>
                <div className='flex pr-5 gap-2 text-white'>
                        <a
                            className='flex gap-1 p-1 bg-[#2C3E50] transition hover:text-blue-400 rounded-lg'
                            href = {link}
                            target="_blank"
                        >
                            <Link/>
                            Link
                        </a>
                        <a
                            className='flex gap-2 p-1 bg-[#333333] transition hover:text-blue-400 rounded-lg'
                            href = {github}
                            target="_blank"
                        >
                            <Github/>
                            Github
                        </a>
                </div>
            </div>
        ))
        
        }
      
    </div>
  )
}

export default RecentProjects
