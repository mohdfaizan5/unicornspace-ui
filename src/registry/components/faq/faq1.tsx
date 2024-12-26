import Image from "next/image";
const faqs = [
  [
    {
      question: "Does TaxPal handle VAT?",
      answer:
        "Well no, but if you move your company offshore you can probably ignore it.",
    },
    {
      question: "Can I pay for my subscription via purchase order?",
      answer: "Absolutely, we are happy to take your money in all forms.",
    },
  ],
  [
    {
      question: "What was that testimonial about tax fraud all about?",
      answer:
        "TaxPal is just a software application; ultimately, your books are your responsibility.",
    },
    {
      question:
        "TaxPal sounds horrible, but why do I still feel compelled to purchase?",
      answer:
        "This is the power of excellent visual design. You just can’t resist it, no matter how poorly it actually functions.",
    },
  ],
  [
    {
      question: "How do you generate reports?",
      answer:
        "You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.",
    },
    {
      question: "Can we expect more inventory features?",
      answer: "In life, it’s really better to never expect anything at all.",
    },
  ],
];

export default function Faq1() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden py-20 sm:py-32 bg-white"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={
          "https://salient.tailwindui.com/_next/static/media/background-faqs.55d2e36a.jpg"
        }
        alt="FAQ Background"
        width={1558}
        height={946}
        unoptimized
      />
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-gray-900 sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-gray-600">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky, someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg leading-7 font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-600">
                      {faq.answer}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
