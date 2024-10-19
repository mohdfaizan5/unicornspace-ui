export const Pricing4Code = 'import clsx from \'clsx\'\r\nimport { useId } from \'react\'\r\nimport { Button } from \'@/components/ui/button\'\r\nimport { CheckIcon } from \'lucide-react\'\r\n\r\nfunction Plan({ name, description, price, features, href, featured }:any) {\r\n  return (\r\n    <div\r\n      className={clsx(\r\n        \'relative px-4 py-16 sm:rounded-5xl sm:px-10 md:py-12 lg:px-12\',\r\n        featured && \'bg-blue-600 sm:shadow-lg\'\r\n      )}\r\n    >\r\n      {featured && (\r\n        <div className="absolute inset-0 text-white/10 [mask-image:linear-gradient(white,transparent)]">\r\n          <GridPattern x="50%" y="50%" />\r\n        </div>\r\n      )}\r\n      <div className="relative flex flex-col">\r\n        <h3\r\n          className={clsx(\r\n            \'mt-7 text-lg font-semibold tracking-tight\',\r\n            featured ? \'text-white\' : \'text-slate-900\'\r\n          )}\r\n        >\r\n          {name}\r\n        </h3>\r\n        <p\r\n          className={clsx(\r\n            \'mt-2 text-lg tracking-tight\',\r\n            featured ? \'text-white\' : \'text-slate-600\'\r\n          )}\r\n        >\r\n          {description}\r\n        </p>\r\n        <p className="order-first flex font-display font-bold">\r\n          <span\r\n            className={clsx(\r\n              \'text-[1.75rem] leading-tight\',\r\n              featured ? \'text-blue-200\' : \'text-slate-500\'\r\n            )}\r\n          >\r\n            $\r\n          </span>\r\n          <span\r\n            className={clsx(\r\n              \'ml-1 mt-1 text-7xl tracking-tight\',\r\n              featured ? \'text-white\' : \'text-slate-900\'\r\n            )}\r\n          >\r\n            {price}\r\n          </span>\r\n        </p>\r\n        <div className="order-last mt-8">\r\n          <ul\r\n            role="list"\r\n            className={clsx(\r\n              \'-my-2 divide-y text-base tracking-tight\',\r\n              featured\r\n                ? \'divide-white/10 text-white\'\r\n                : \'divide-slate-200 text-slate-900\'\r\n            )}\r\n          >\r\n            {features.map((feature:any) => (\r\n              <li key={feature} className="flex py-2">\r\n                <CheckIcon\r\n                  className={clsx(\r\n                    \'h-8 w-8 flex-none\',\r\n                \r\n                  )}\r\n                />\r\n                <span className="ml-4">{feature}</span>\r\n              </li>\r\n            ))}\r\n          </ul>\r\n        </div>\r\n        <Button\r\n        \r\n          color={featured ? \'white\' : \'slate\'}\r\n          className="mt-8"\r\n          aria-label={`Get started with the ${name} plan for $${price}`}\r\n        >\r\n          Get started\r\n        </Button>\r\n      </div>\r\n    </div>\r\n  )\r\n}\r\n\r\n function Pricing4() {\r\n  return (\r\n    <section\r\n      id="pricing"\r\n      aria-labelledby="pricing-title"\r\n      className="scroll-mt-14 pt-16 pb-8 sm:scroll-mt-32 sm:pt-20 sm:pb-10 lg:pt-32 lg:pb-16"\r\n    >\r\n  \r\n       \r\n      <div className="mx-auto mt-16 max-w-5xl lg:px-6">\r\n        <div className="grid bg-slate-50 sm:px-6 sm:pb-16 md:grid-cols-2 md:rounded-6xl md:px-8 md:pt-16 lg:p-20">\r\n          <Plan\r\n            name="Essential"\r\n            description="The perfect starting point if you’re on a budget."\r\n            price={15}\r\n            href="#"\r\n            features={[\r\n              \'The 240-page ebook\',\r\n              \'Figma icon templates\',\r\n              \'Community access\',\r\n            ]}\r\n          />\r\n          <Plan\r\n            featured\r\n            name="Complete"\r\n            description="Everything icon resource you could ever ask for."\r\n            price={229}\r\n            href="#"\r\n            features={[\r\n              \'The 240-page ebook\',\r\n              \'Figma icon templates\',\r\n              \'Over an hour of screencasts\',\r\n              \'Weekly icon teardowns\',\r\n              \'Community access\',\r\n            ]}\r\n          />\r\n        </div>\r\n      </div>\r\n    </section>\r\n  )\r\n}\r\n\r\nexport default Pricing4\r\n\r\nexport function GridPattern(props:any) {\r\n  let patternId = useId()\r\n\r\n  return (\r\n    <svg aria-hidden="true" className="absolute inset-0 h-full w-full">\r\n      <defs>\r\n        <pattern\r\n          id={patternId}\r\n          width="128"\r\n          height="128"\r\n          patternUnits="userSpaceOnUse"\r\n          {...props}\r\n        >\r\n          <path d="M0 128V.5H128" fill="none" stroke="currentColor" />\r\n        </pattern>\r\n      </defs>\r\n      <rect width="100%" height="100%" fill={`url(#${patternId})`} />\r\n    </svg>\r\n  )\r\n}\r\n';
