import React from "react";
import CarosualProjects from '../Components/CarosualProjects'

const ArticlePage = () => {
   
    return (
      
        <div className="bg-sky-700 h-screen pb-12 text-white overflow-hidden w-full">
          
          <div className="flex flex-row justify-self-center pt-12 pl-24">
        <div class="p-6">
          <h2 class="text-lg font-semibold mb-4">Projects</h2>
        
        </div>

        
      </div>
      <CarosualProjects/>

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

export default ArticlePage;
