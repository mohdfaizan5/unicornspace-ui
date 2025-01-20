export const AvatarListCode = 'import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";\r\nimport { cn } from "@/lib/utils";\r\n\r\nexport default function AvatarList({ className }: { className?: string }) {\r\n  return (\r\n    <div\r\n      className={cn(\r\n        "flex flex-c w-fit items-center rounded-full p-1  -space-x-2 ",\r\n        className\r\n      )}\r\n    >\r\n      <Avatar className="size-10 border-2 border-background">\r\n        <AvatarImage\r\n          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT73hVuUFS5u6LDMnT3SCUvgQpxIHRkQrRMmA&s"\r\n          alt="Avatar 02"\r\n        />\r\n        <AvatarFallback>A2</AvatarFallback>\r\n      </Avatar>\r\n      <Avatar className="size-10 border-2 border-background">\r\n        <AvatarImage src="https://pbs.twimg.com/profile_images/1831143497748852736/pGaFNbfr_400x400.jpg" />\r\n        <AvatarFallback>A3</AvatarFallback>\r\n      </Avatar>\r\n      <Avatar className="size-10 border-2 border-background">\r\n        <AvatarImage\r\n          src="https://github.com/user-attachments/assets/6162588b-8e33-45c2-aebf-4b8b2280b4a6"\r\n          alt="Avatar 04"\r\n        />\r\n        <AvatarFallback>A4</AvatarFallback>\r\n      </Avatar>\r\n      <Avatar className="size-10 border-2 border-background">\r\n        <AvatarImage\r\n          src="https://avatars.githubusercontent.com/u/79694828?v=4"\r\n          alt="Avatar 01"\r\n        />\r\n        <AvatarFallback>A1</AvatarFallback>\r\n      </Avatar>\r\n    </div>\r\n  );\r\n}\r\n';
