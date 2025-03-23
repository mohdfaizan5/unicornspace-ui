import React from "react";
import "@/styles/typography.css";
import { changelog } from "@/config/changelog";
const page = () => {
  return (
    <div className="max-w-4xl mx-auto px-5 mt-5 space-y-10">
      <section>
        <h1>Changelog</h1>
        <p>Latest updates and announcements.</p>
      </section>

      <section className="mt-5">
        <h3>{changelog.title}</h3>
        {changelog.features.map((feature, index) => (
          <div key={index}>
            <h2 className="mt-5 mb-2">{feature.title}</h2>
            <ol className="list-decimal ml-8 mb-2">
              {feature.items.map((item, index) => (
                <li key={index}>
                  {item.tool_name} - {item.doneby}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </section>

      <section>
        <h3>July 2024 - V0</h3>
      </section>
    </div>
  );
};

export default page;
