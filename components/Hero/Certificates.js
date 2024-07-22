import Image from 'next/image'
import React from 'react'

const Certificates = () => {
  return (
    <div className='flex flex-col gap-5 py-10'>
        <div className='text-5xl font-semibold uppercase'>
            Certificates
        </div>
        <hr/>
        <div className='grid grid-cols-1 lg:grid-cols-3 justify-between gap-10'>
            {[
                ["/Database-Specialty-Icon.png", 'AWS Certified','Database Specialist', "Validates expertise in recommending, designing, and maintaining optimal AWS database solutions."],
                ["/Cloud-Practitioner-Icon.png", 'AWS Certified', 'Cloud Practitioner', "Validates foundational, high-level understanding of AWS Cloud, services, and terminology."],
                ["/Google-Data-Analytics-Icon.png", 'Google Certified','Data Analytics','Certified in key analytical skills (data cleaning, analysis, & visualization) and tools (spreadsheets, SQL, R programming, Tableau)']].map(([src, org, title, desc], i) => (
                    <div
                        key = {i} 
                        className='flex flex-row items-center justify-center gap-4 rounded-lg border p-2 border-primary'>
                        <Image
                            src = {src}
                            alt = {src}
                            height = {130}
                            width = {130}
                        />
                        <div className='flex flex-col'>
                            <div className='text-xl font-bold'>
                                {title}
                                <br/>
                                <span className='font-normal text-sm'>{org}</span>
                            </div>
                            <div className='text-gray-600'>
                                {desc}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Certificates
