export const Faq1Code = 'import Image from "next/image";\r\n\r\n// TODO change it our Unicorn Space UI FAQ questions\r\nconst faqs = [\r\n  [\r\n    {\r\n      question: "Does TaxPal handle VAT?",\r\n      answer:\r\n        "Well no, but if you move your company offshore you can probably ignore it.",\r\n    },\r\n    {\r\n      question: "Can I pay for my subscription via purchase order?",\r\n      answer: "Absolutely, we are happy to take your money in all forms.",\r\n    },\r\n  ],\r\n  [\r\n    {\r\n      question: "What was that testimonial about tax fraud all about?",\r\n      answer:\r\n        "TaxPal is just a software application, ultimately your books are your responsibility.",\r\n    },\r\n    {\r\n      question:\r\n        "TaxPal sounds horrible but why do I still feel compelled to purchase?",\r\n      answer:\r\n        "This is the power of excellent visual design. You just can’t resist it, no matter how poorly it actually functions.",\r\n    },\r\n  ],\r\n  [\r\n    {\r\n      question: "How do you generate reports?",\r\n      answer:\r\n        "You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.",\r\n    },\r\n    {\r\n      question: "Can we expect more inventory features?",\r\n      answer: "In life it’s really better to never expect anything at all.",\r\n    },\r\n  ],\r\n];\r\n\r\nexport function Faq1() {\r\n  return (\r\n    <section\r\n      id="faq"\r\n      aria-labelledby="faq-title"\r\n      className="relative overflow-hidden bg-background py-20 sm:py-32"\r\n    >\r\n      <Image\r\n        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"\r\n        src={\r\n          "https://salient.tailwindui.com/_next/static/media/background-faqs.55d2e36a.jpg"\r\n        }\r\n        alt=""\r\n        width={1558}\r\n        height={946}\r\n        unoptimized\r\n      />\r\n      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">\r\n        <div className="mx-auto max-w-2xl lg:mx-0">\r\n          <h2\r\n            id="faq-title"\r\n            className="font-display text-3xl tracking-tight text-foreground sm:text-4xl"\r\n          >\r\n            Frequently asked questions\r\n          </h2>\r\n          <p className="mt-4 text-lg tracking-tight text-foreground/80">\r\n            If you can’t find what you’re looking for, email our support team\r\n            and if you’re lucky someone will get back to you.\r\n          </p>\r\n        </div>\r\n        <ul\r\n          role="list"\r\n          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"\r\n        >\r\n          {faqs.map((column, columnIndex) => (\r\n            <li key={columnIndex}>\r\n              <ul role="list" className="flex flex-col gap-y-8">\r\n                {column.map((faq, faqIndex) => (\r\n                  <li key={faqIndex}>\r\n                    <h3 className="font-display text-lg leading-7 text-foreground font-semibold">\r\n                      {faq.question}\r\n                    </h3>\r\n                    <p className="mt-4 text-sm text-foreground/80">\r\n                      {faq.answer}\r\n                    </p>\r\n                  </li>\r\n                ))}\r\n              </ul>\r\n            </li>\r\n          ))}\r\n        </ul>\r\n      </section>\r\n    </section>\r\n  );\r\n}\r\n';
