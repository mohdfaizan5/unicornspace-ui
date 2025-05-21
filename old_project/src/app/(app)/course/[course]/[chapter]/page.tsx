import { allCourses } from 'content-collections'
import React from 'react'
type Params = Promise<{ course: string, chapter: string }>
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import Link from 'next/link'
import { MDXContent } from '@content-collections/mdx/react'
import { components } from '@/components/mdx-component'

const page = async (props: { params: Params }) => {
    const { course: courseSlug, chapter: chapterSlug } = await props.params


    const course = allCourses.filter((item) => {
        console.log(item._meta.directory, "--", courseSlug)
        if (item._meta.directory === courseSlug) {
            console.log("found")
            return item

        }
    })
    if (course.length === 0) {
        return <div>Course not found</div>
    }
    // find previous and next chapter
    const currentChapterIndex = course.findIndex((item) => item.slug === chapterSlug)
    const previousChapter = currentChapterIndex > 0 ? course[currentChapterIndex - 1] : null
    const nextChapter = currentChapterIndex < course.length - 1 ? course[currentChapterIndex + 1] : null
    console.log("🔥🔥🔥", previousChapter?.slug, nextChapter?.slug)


    const chapter = course.find((item) => {
        console.log(item.slug, "--", chapterSlug)
        if (item.slug === chapterSlug) {
            console.log("found")
            return item
        }
    })
    if (!chapter) {
        return <div>Chapter not found</div>
    }

    // console.log(course.map(item => item.slug))
    return (
        <div >
            <div className="max-w-3xl mx-auto px-4">

                <h1 className="text-3xl font-bold mb-1 mt-8">
                    {chapter.title}
                </h1>
                <p className="text-muted-foreground mb-4">
                    {chapter?.description}
                </p>
                {chapter?.mdx && (<MDXContent components={{ ...components }} code={chapter.mdx} />)}

            </div>
            <Pagination className='mt-10'>
                <PaginationContent className='flex justify-around items-center w-full '>
                    <PaginationItem>
                        {previousChapter ? <PaginationPrevious href={`/course/${courseSlug}/${previousChapter?.slug}`} /> : ""}
                        {/* <PaginationPrevious href={`/course/${courseSlug}/${nextChapter?.slug}`} /> */}
                    </PaginationItem>

                    <PaginationItem>
                        {nextChapter ? <PaginationNext href={`/course/${courseSlug}/${nextChapter?.slug}`} /> : ""}

                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}

export default page