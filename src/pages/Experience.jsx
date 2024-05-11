

import React from "react";

const ArticlesListPage = () => {
  return (
    <div className="bg-sky-700 h-full pb-12 text-white">
      <div className="flex sm:flex-row flex-col justify-self-center pt-12 pl-24 grid-cols-2 grid-flow-row gap-2">
        <div className="flex sm:flex-row flex-col justify-self-center pt-12">
          <img
            className="rounded-full mt-8 h-36 w-36"
            alt="profilepic"
            src="data:image/png;base64,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"
          />

          <div class="p-6">
            <h1 class="text-2xl font-bold mb-2">Atomcamp</h1>
            <h2 class="text-lg font-semibold mb-4">Full Stack Developer</h2>
            <p class="text-base">
            At AtomCamp, I was a trainee in full stack development. I worked on various tasks, assignments, and projects.
              
            </p>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col justify-self-center pt-12">
          <img
            className="mt-8 h-36 w-36 rounded-full"
            alt="profilepic"
            src="data:image/jpeg;base64,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"
          />

          <div class="p-6">
            <h1 class="text-2xl font-bold mb-2">Zong CMPAK</h1>
            <h2 class="text-lg font-semibold mb-4">CSR</h2>
            <p class="text-base">
            At Zong, I worked as a Customer Service Representative. My responsibilities included assisting customers with their inquiries and issues.
              
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center mt-16">
      <h2 class="text-lg font-semibold mb-4">
        Let us create awesome products!
      </h2>
      <p class="text-base text-center">
      Let's collaborate to craft impressive digital products! With a growing
          expertise in front-end development and a foundation in backend<br/>
          technologies, I'm eager to join forces with you to build solutions
          that stand out. Together, we can embark on the exciting journey of<br/>
          creating user-friendly interfaces and functional applications that
          leave a positive impression. I'm committed to continuous learning and<br/>
          improvement, and I'm excited to contribute to the success of our
          projects by bringing creativity and dedication to the table.
      </p>
    </div>

   
    </div>
  );
};

export default ArticlesListPage;
