import { allCourses } from 'content-collections'
import React from 'react'
type Params = Promise<{ course: string }>
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'
import { coursesRegistry } from 'content/courses/course-registry'

const page = async (props: { params: Params }) => {
    const { course: courseSlug } = await props.params

    const course = allCourses.filter((item) => {
        console.log(item._meta.directory, "--", courseSlug)
        if (item._meta.directory.toLowerCase() === (courseSlug.toLowerCase())) {
            console.log("found")
            return item

        }
    })
    if (course.length === 0) {
        return <div>Course not found</div>
    }
    console.log(course.map(item => item.slug))
    return (
        <div className='max-w-6xl mx-auto'>
            <div className="max-w-3xl max-sm:text-center mt-10 ">
                <h1 className="font-heading text-foreground mb-2 text-4xl/[1.1] font-bold tracking-tight md:text-5xl/[1.1]">
                    {course[0]._meta.directory}
                </h1>
                <p className="text-muted-foreground mb-8 text-lg">
                    {coursesRegistry.find(c => c.slug.toLowerCase() === course[0]._meta.directory.toLowerCase())?.description}
                </p>
            </div>
            <section className='mx-auto max-w-6xl px-4 pb-10 md:pb-20 grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {course.map((chapter, i) =>
                    <Link key={i} href={`/course/${course[0]._meta.directory}/${chapter.slug}`} className='group'>

                        <Card className='gap-2 bg-secondary/90  group h-full rounded-[12px] shadow-sm transition-all hover:shadow-lg ' key={i}>
                            <CardHeader className='flex flex-row items-center gap-2'>
                                <div className='mr-2 flex h-8 w-8 flex-none flex-shrink-0 items-center justify-center rounded-full bg-blue-300 text-sm font-bold text-blue-700 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black'>
                                    <p className='group-hover:hidden'>
                                        {i}

                                    </p>
                                    <svg className="hidden h-5 group-hover:block" data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style={{ "color": "currentcolor" }}><path fill-rule="evenodd" clip-rule="evenodd" d="M5.75001 2H5.00001V3.5H5.75001H11.4393L2.21968 12.7197L1.68935 13.25L2.75001 14.3107L3.28034 13.7803L12.4988 4.56182V10.25V11H13.9988V10.25V3C13.9988 2.44772 13.5511 2 12.9988 2H5.75001Z" fill="currentColor"></path></svg>
                                </div>
                                <CardTitle className='text-xl'>{chapter.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className='line-clamp-2 text-sm text-gray-900 dark:text-muted-foreground'> {chapter.description}</p>
                            </CardContent>
                        </Card>
                    </Link>
                )}
            </section >
        </div>
    )
}

export default page