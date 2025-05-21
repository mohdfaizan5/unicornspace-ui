import React from "react";

const page = () => {
  return (
    <div className={` space-y-6 max-w-2xl`}>
      <article>
        <h1 className="text-3xl font-bold">Getting started</h1>
        <h2 className="text-muted-foreground max-w-2xl">
          Customizable. Open Source. Get inspired, plan, create great web pages
          with designs and components that you can copy and paste directly into
          your apps.
        </h2>
      </article>

      <section>
        <p className="mt-2 block">
          <b>UnicornSpaceUI</b> is a collection of re-usable components that you
          can copy and paste into your web apps.
        </p>
        <p className="mt-2 block">
          Our goal of the project is save youre time, as 90% of the time youll
          be using components and designs that are similar to what you might or
          others on the internet have build previous, then should you waste your
          time to reinvent the wheel
        </p>
      </section>
      <p></p>

      <ol className="list-decimal">
        <h3 className="font-semibold text-xl">
          Where will UnicornSpaceUI save your time?
        </h3>
        <li>
          You no longer need to go in search of inspiration, go through tens of
          website to find it, we got all here.
        </li>
        <li>You no longer need to go through clumsy documentations to </li>
      </ol>
      <ol className="list-disc">
        <h3 className="font-semibold text-xl">Whom is this for?</h3>
        <li>
          You no longer need to go in search of inspiration, go through tens of
          website to find it, we got all here.
        </li>
        <li>You no longer need to go through clumsy documentations to </li>
      </ol>
    </div>
  );
};

export default page;
