// import { allCourses } from 'content-collections'
import Link from 'next/link'
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { coursesRegistry } from 'content/courses/course-registry'
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"

const page = () => {
  // console.log(allCourses)
  // const courses = allCourses.filter((course) => course.published)
  // const coursesNames = [...new Set(allCourses.map(item => item._meta.directory))]
  // console.log(unique)


  return (
    <div className='max-w-6xl mx-auto'>
      {/* <h1 className="text-5xl font-bold text-center my-8">Courses</h1> */}
      <div className="max-w-3xl max-sm:text-center mt-10 ">
        <h1 className="font-heading text-foreground mb-4 text-4xl/[1.1] font-bold tracking-tight md:text-5xl/[1.1]">
          Courses.
        </h1>
        <p className="text-muted-foreground mb-8 text-lg">
          A collection of courses crafted for quick learning with examples and code.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-6xl  px-4 pb-10 md:pb-20">
        {coursesRegistry.map((course) => (
          <Link href={course.isPublished ? `/course/${course.slug}` : "#"} key={course.slug} >

            <Card className={cn('bg-secondary  pt-0 overflow-hidden h-[420px] flex flex-col justify-between', course.isPublished ? 'opacity-100' : 'opacity-50 cursor-not-allowed')}>
              <CardHeader className='bg-primary dark:text-black text-white h-[50%] p-0' >
                <div className="">
                  <AspectRatio ratio={16 / 9}>
                    <Image src={"/images/guides/Authjs part 1.png"} width={450} height={250} alt="Image" className="rounded-md object-cover" />
                  </AspectRatio>
                </div>

              </CardHeader>
              <CardContent className='py-2'>
                <CardTitle className='text-3xl'>{course.title}</CardTitle>
                <div className='flex items-center gap-1 flex-wrap mb-2 mt-1'>
                  {course.tags && course.tags.map((tag) => (
                    <Badge variant={"outline"} key={tag} >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardDescription className='text-sm text-muted-foreground line-clamp-2'>{course.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button className='w-full'>View Course</Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default page