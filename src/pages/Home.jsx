import React from "react";

function Home() {
  return (
    <div className="bg-sky-700 h-full text-white pb-12">
      <div className="flex sm:flex-row flex-col justify-self-center pt-12 pl-24">
        <img
          className="mt-8 sm:mr-0 ml-6 h-36 w-36 rounded-full"
          alt="profilepic"
          src="/profilepic.png"
        />
        

        <div class="p-6">
          <h1 class="text-2xl font-bold mb-2">Najmus Saqib</h1>
          <h2 class="text-lg font-semibold mb-4">Full Stack Developer</h2>
          <p class="text-base">
            I excel in crafting intuitive user interfaces and captivating user
            experiences using technologies like React JS, Tailwind CSS,
            <br />
            HTML, JavaScript, and CSS. While my primary focus lies in front-end
            technologies, I also possess foundational knowledge and some
            <br />
            experience in backend development, particularly with technologies
            such as Node.js, Express JS, and MongoDB. Continuously expanding my
            <br />
            skill set, I am eager to further develop my backend expertise and
            contribute to full stack projects with comprehensive proficiency.
          </p>
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
}

export default Home;
