import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { IoInformationCircle } from "react-icons/io5";

export function TooltipMdx({ title, description }: { title: string, description: string }) {
    return (
        <Tooltip >
            <TooltipTrigger className="inline-flex gap-1 items-center px-1 underline decoration-dashed decoration-1 ">
                {title}  <IoInformationCircle />

            </TooltipTrigger>
            <TooltipContent className="max-w-56">
                <p>{description}</p>
            </TooltipContent>
        </Tooltip>
    )
}
