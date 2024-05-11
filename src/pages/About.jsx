import React from "react";

function About() {
  return (
    <div className="bg-sky-700 pb-12 h-screen text-white">
      <div className="flex flex-row justify-self-center pt-12 pl-24">
        <div class="p-6">
          <h2 class="text-lg font-semibold mb-4">About me</h2>
          <p class="text-base">
            I am a web developer with more than 6 months of experience in React. I have a
            strong foundation in front-end & back-end development and i am skilled
            in creating user-friendly and responsive web applications using
            React and its ecosystem. I have experience working on a variety of
            projects, including building and maintaining single page
            applications, integrating with APIs, and implementing
            responsive design principles. I am also proficient in using tools
            such as vercel, npm, Github and Git for development and deployment. In
            addition to my technical skills, I am a strong communicator and team
            player. I am able to work effectively with cross-functional teams
            and comfortable taking on new challenges and learning new
            technologies as needed.
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

export default About;
