import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { components, courses } from '@/lib/source'
import { cn } from '@/lib/utils'
import { getMDXComponents } from '@/mdx-components'
import { coursesRegistry } from 'content/courses/course-registry'
import { createRelativeLink } from 'fumadocs-ui/mdx'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import { FaAngleLeft } from 'react-icons/fa'
type Params = Promise<{ slug?: string[] }>

const page = async (props: { params: Params }) => {
    const params = await props.params
    const courseSlug = params.slug

    // for index page (showing all courses)
    if (!courseSlug || courseSlug.length === 0) {
        return <IndexPage />
    }

    // for course page (showing all chapters)
    /*

    undefined -> /course - length 0
    [ 'genai' ] - /course/genai - length 1
    [ 'genai', 'sdlkjf' ] - /course/genai/sdlkjf - length 2
    */
    const allCourses: any[] = courses.getPages() as any[]

    if (courseSlug.length === 1) {
        const course = allCourses
            .filter((item) => item.slugs?.[0]?.toLowerCase() === courseSlug[0].toLowerCase())
            .sort((a, b) => {
                const getNumber = (str: string) => {
                    const match = str.match(/^(\d+)/);
                    return match ? parseInt(match[1], 10) : Infinity;
                };
                return getNumber(a.slugs[1]) - getNumber(b.slugs[1]);
            });

        // console.log(course.map(item => item.slugs));

        // console.log(">>>>", re.test("10.intro"))
        // console.log(">>>>", re.test("glo"))
        const codeEnv = process.env.NODE_ENV;

        const courseRegItem = coursesRegistry.find(c => c.slug.toLowerCase() == courseSlug[0].toLowerCase())
        return (
            <div className='xl:ml-20'>

                <div className="max-w-3xl ml-6 py-4 mb-16 max-sm:text-center mt-10 ">
                    <div className='space-x-4 flex items-baseline'>

                        <h1 className="capitalize font-heading text-foreground mb-2 text-4xl/[1.1] font-bold tracking-tight md:text-5xl/[1.1]">
                            {courseSlug[0]}
                        </h1>
                        {courseRegItem?.icon && <courseRegItem.icon className='size-9' />}
                    </div>
                    <p className="text-muted-foreground  mb-8 text-lg">
                        {coursesRegistry.find(c => c.slug.toLowerCase() == courseSlug[0].toLowerCase())?.description || ""}
                    </p>
                    <Button className='rounded-full'>Enroll now <MoveRight />
                    </Button>
                </div>

                <section className='mx-auto max-w-6xl  px-4 pb-10 md:pb-20 grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                    {course.map((chapter, i) =>
                        <Link key={i} href={`/course/${chapter.slugs[0]}/${chapter.slugs[1]}`} className='group'>

                            <Card className='gap-2 bg-secondary/90  group h-full rounded-[12px] shadow-sm transition-all hover:shadow-lg relative' key={i}>
                                <CardHeader className='flex flex-row items-center gap-2'>
                                    {codeEnv === "development" && <div className='absolute top-2 right-2 z-10'>
                                        {chapter.data.isContentReady ? <Badge className='bg-green-500 text-white'>Ready</Badge> : <Badge className='bg-red-500 text-white'>Not Ready</Badge>}
                                    </div>}
                                    <div className='mr-2 flex h-8 w-8 flex-none flex-shrink-0 items-center justify-center rounded-full bg-blue-300 text-sm font-bold text-blue-700 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black'>
                                        <p className='group-hover:hidden'>
                                            {i}

                                        </p>
                                        <svg className="hidden h-5 group-hover:block" data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16" style={{ "color": "currentcolor" }}><path fillRule="evenodd" clipRule="evenodd" d="M5.75001 2H5.00001V3.5H5.75001H11.4393L2.21968 12.7197L1.68935 13.25L2.75001 14.3107L3.28034 13.7803L12.4988 4.56182V10.25V11H13.9988V10.25V3C13.9988 2.44772 13.5511 2 12.9988 2H5.75001Z" fill="currentColor"></path></svg>
                                    </div>
                                    <CardTitle className='text-xl'>{chapter.data.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className='line-clamp-2 text-sm text-gray-900 dark:text-muted-foreground'> {chapter.data.description}</p>
                                </CardContent>
                            </Card>
                        </Link>
                    )}
                </section >

            </div>)
    }

    if (courseSlug.length === 2) {
        const allCourseChapters = allCourses.filter((item) => {
            if (item.slugs?.[0]?.toLowerCase() === (courseSlug[0].toLowerCase())) {
                return item

            }
        })

        const page = allCourseChapters.find((item) => {
            const rawSlug = String(item.slugs?.[1] ?? '').toLowerCase()
            const convertedSlug = rawSlug.includes('.')
                ? rawSlug.split('.').slice(1).join('.')
                : rawSlug
            const target = courseSlug[1].toLowerCase()
            return rawSlug === target || convertedSlug === target
        })

        if (!page) {
            return <div>Chapter not found</div>
        }

        const MDXContent = page.data.body;

        return (
            <article className="mx-auto w-full max-w-4xl px-4 py-8">
                <Link href={`/course/${page.slugs[0]}`} className="mb-4 justify-end flex">
                    <Button>
                        <FaAngleLeft />
                        lessons
                    </Button>
                </Link>
                <div>

                    <h1 className='mb-2 text-3xl font-bold tracking-tight'>{page.data.title}</h1>
                    {page.data.description ? (
                        <p className='text-muted-foreground'>{page.data.description}</p>
                    ) : null}
                </div>
                <div className='mt-8'>
                    <MDXContent
                        components={getMDXComponents({
                            // this allows you to link to other pages with relative file paths
                            a: createRelativeLink(components, page),
                        })}
                    />
                </div>

            </article>
        );


    }

    // console.log(allCourses.filter(c=> {
    //     console.log(c.file.dirname.toLowerCase(), courseSlug[0])
    //     if (c.file.dirname.toLowerCase() == courseSlug[1])
    //         return c
    // }))


    // console.log(courseSlug , "course slug")

    // const course = allCourses.filter((item) => {
    //     console.log(item._meta.directory, "--", courseSlug)
    //     if (item._meta.directory.toLowerCase() === (courseSlug.toLowerCase())) {
    //         console.log("found")
    //         return item

    //     }
    // })
    // if (course.length === 0) {
    //     return <div>Course not found</div>
    // }
    // console.log(course.map(item => item.slug))
    return (
        <div className='max-w-6xl mx-auto'>
            hi {courseSlug}
            {allCourses.map((c, index) => <p key={index}>
                {String(c.data.title)} - {c.data.slug}
            </p>)}
            {/* */}
        </div>
    )
}


function IndexPage() {
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
                                        {/* <Image src={"/images/guides/Authjs part 1.png"} width={450} height={250} alt="Image" className="rounded-md object-cover" /> */}
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


export async function generateStaticParams() {
    return courses.generateParams();
}

// TODO: work this out as it requires you to create a metadata object for each page properly
export async function generateMetadata(props: {
    params: Promise<{ slug?: string[] }>;
}) {
    const params = await props.params;
    const allCourses: any[] = courses.getPages() as any[]
    const slug = params.slug
    if (!slug) {
        // Showing all courses
        return {
            title: "Courses - UnicornSpaceUI",
            description: "A collection of courses crafted for quick learning with examples and code. ",
        };
    }
    else if (slug.length == 1) {
        const course = coursesRegistry.find(c => {
            return c.slug == slug[0]
        })
        return {
            title: course?.title,
            description: course?.description
        }

    }
    else if (slug.length == 2) {
        const allCourseChapters = allCourses.filter((item) => {
            if (item.slugs?.[0]?.toLowerCase() === (slug[0].toLowerCase())) {
                return item

            }
        })
        const chapter = allCourseChapters.find((item) => {
            const rawSlug = String(item.slugs?.[1] ?? '').toLowerCase()
            const convertedSlug = rawSlug.includes('.')
                ? rawSlug.split('.').slice(1).join('.')
                : rawSlug
            const target = slug[1].toLowerCase()
            return rawSlug === target || convertedSlug === target
        })
        return {
            title: chapter?.data.title,
            description: chapter?.data.description
        }

    }





    return {
        title: "page.data.title",
        description: "page.data.description",
    };
}