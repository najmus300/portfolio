import React from "react";

function Home() {
  return (
    <div className="bg-sky-700 h-full text-white">
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem maxime minus officia dicta suscipit <br />
            aliquam iusto veniam voluptate quis, blanditiis, saepe fugit eius
            omnis voluptatem laboriosam voluptas,
            <br /> ipsam ab temporibus.
          </p>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center mt-16">
        <h2 class="text-lg font-semibold mb-4">
          Let us create awesome products!
        </h2>
        <p class="text-base text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem maxime minus officia dicta suscipit <br />
          aliquam iusto veniam voluptate quis, blanditiis, saepe fugit eius
          omnis voluptatem laboriosam voluptas,
          <br /> ipsam ab temporibus.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center border-t-2 border-b-2 bg-sky-900 mt-8 border-white">
        <h2 class="text-lg font-semibold mb-4 mt-4">Contact Me</h2>

        <div className="flex sm:flex-row flex-col justify-center items-center mb-4 gap-4">
          <div className="flex">
            Github{" "}
            <a href="j" class="px-2">
              {" "}
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAk1BMVEX///8wRlQREiSOjo4AAAs9T1wnP053g4rM0NIKLkC/xMja3t8fOkqAipEALD+jqa4AKDybo6kXNUYAAADU2Nrs7u/l5+jz8/RTYm1HWGSNl56TnKNmcnsKCyAAABcAABuxtrtteoJcanQAGzNOTlghIjAXFyY9PkkAABIyMjp+foVxcXhXV15HR1NnZ2+ZmZ1ISEma9ZpxAAADBklEQVR4nO2aC3OiMBCAodVQLG95CSrI2fNOufb+/687BJQAp03sbcjM7TfW6QzgfNkElmyiKAiCIAiCIAiCIAiCIAiCIIII/AUXfgSuFJqx6uk8qLEZgCoFpmOovBDDgdQKC49bqUaPQzCnOXnM6RytVyCpNX/XdVYxzHjPv+CkqoYN4RTFbecR3WmwWpq7zOpzOecyCmFC5Vttk4vcr3hloDrtJb0MRMsHkEqa3jN2vBfumgs9F0CqaFo8576NXudN/xUAUu1PcwdKidZtc+CkNP4rNZRiZCqpVDNHaPnEUr6qG0Osy6mTdV8wTtaGObWUEq6GVhJIKQEh8kmNYiWFlBKoRD6p6nVZQiklIfJJJbp8kbJ7TnJImX0nKaRsR5VOKunmqe1TdHopKk5e2sx7Jpei4mS4SlRn56mlXCpO50lnnXEmlkqNvlM1WagyjkApc3wk7eJ0nZyHMREn9ZeSgNvFSe+OhnNPmJQ1qggk1jhOZ4KVKClv1Ht2d985/SiGiRipcenkVpxoYKWIM6ycUDn4280CFKgUUYdOVA4mt4tikFLeqOBid33n3CnUAUqpxWg8UbnlXvEQUMocOrldnLy7BU1AqSFpLwfLITXMwTJIUbnl02KmKKmU4ZkpWoqKk/V50VeMFEtuES11OwdPJ0XNg9kWXARIUTmYKU4ipLjjJECKmt9ZrItl0FKsObjHDlaKOQfTtGszBEhqPL9jwW+uIGsYpy5Od94zh4TtiipHM3icujiRgmnzRl6hXVdGIdbbo4IqaBLW/RseubYDZLl98aXVdi+HcKpeiB/cv3GGf+mZkWD1cKwMFWxfSaQ9utdlB7gDJ3K7kcsM0T0beA+Vu17xOa12IA+oAaH/woEPNpgQBEEQBEEQBEEQBEEQBEEQ5D/lWUKUmYQoTxJSS23qT/v1tNlus/a/zfkzjVS2f/t+mGXZcp9tf2Szn8fTfr9cbrfLQ7ksf2VTSZVvlUh5Or6Xx/3p4/j7lL/nZbk4PX8cDv8wVBvq7/J9PVYfaDrmDyfjRCgQCN3HAAAAAElFTkSuQmCC"
                alt="Left Arrow"
                class="h-6 w-6"
              />{" "}
            </a>
          </div>
          <div className="flex">
            Youtube{" "}
            <a href="j" class="px-2">
              {" "}
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAk1BMVEX///8wRlQREiSOjo4AAAs9T1wnP053g4rM0NIKLkC/xMja3t8fOkqAipEALD+jqa4AKDybo6kXNUYAAADU2Nrs7u/l5+jz8/RTYm1HWGSNl56TnKNmcnsKCyAAABcAABuxtrtteoJcanQAGzNOTlghIjAXFyY9PkkAABIyMjp+foVxcXhXV15HR1NnZ2+ZmZ1ISEma9ZpxAAADBklEQVR4nO2aC3OiMBCAodVQLG95CSrI2fNOufb+/687BJQAp03sbcjM7TfW6QzgfNkElmyiKAiCIAiCIAiCIAiCIAiCIIII/AUXfgSuFJqx6uk8qLEZgCoFpmOovBDDgdQKC49bqUaPQzCnOXnM6RytVyCpNX/XdVYxzHjPv+CkqoYN4RTFbecR3WmwWpq7zOpzOecyCmFC5Vttk4vcr3hloDrtJb0MRMsHkEqa3jN2vBfumgs9F0CqaFo8576NXudN/xUAUu1PcwdKidZtc+CkNP4rNZRiZCqpVDNHaPnEUr6qG0Osy6mTdV8wTtaGObWUEq6GVhJIKQEh8kmNYiWFlBKoRD6p6nVZQiklIfJJJbp8kbJ7TnJImX0nKaRsR5VOKunmqe1TdHopKk5e2sx7Jpei4mS4SlRn56mlXCpO50lnnXEmlkqNvlM1WagyjkApc3wk7eJ0nZyHMREn9ZeSgNvFSe+OhnNPmJQ1qggk1jhOZ4KVKClv1Ht2d985/SiGiRipcenkVpxoYKWIM6ycUDn4280CFKgUUYdOVA4mt4tikFLeqOBid33n3CnUAUqpxWg8UbnlXvEQUMocOrldnLy7BU1AqSFpLwfLITXMwTJIUbnl02KmKKmU4ZkpWoqKk/V50VeMFEtuES11OwdPJ0XNg9kWXARIUTmYKU4ipLjjJECKmt9ZrItl0FKsObjHDlaKOQfTtGszBEhqPL9jwW+uIGsYpy5Od94zh4TtiipHM3icujiRgmnzRl6hXVdGIdbbo4IqaBLW/RseubYDZLl98aXVdi+HcKpeiB/cv3GGf+mZkWD1cKwMFWxfSaQ9utdlB7gDJ3K7kcsM0T0beA+Vu17xOa12IA+oAaH/woEPNpgQBEEQBEEQBEEQBEEQBEEQ5D/lWUKUmYQoTxJSS23qT/v1tNlus/a/zfkzjVS2f/t+mGXZcp9tf2Szn8fTfr9cbrfLQ7ksf2VTSZVvlUh5Or6Xx/3p4/j7lL/nZbk4PX8cDv8wVBvq7/J9PVYfaDrmDyfjRCgQCN3HAAAAAElFTkSuQmCC"
                alt="Left Arrow"
                class="h-6 w-6"
              />{" "}
            </a>
          </div>
          <div className="flex">
            LinkedIn{" "}
            <a href="j" class="px-2">
              {" "}
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAk1BMVEX///8wRlQREiSOjo4AAAs9T1wnP053g4rM0NIKLkC/xMja3t8fOkqAipEALD+jqa4AKDybo6kXNUYAAADU2Nrs7u/l5+jz8/RTYm1HWGSNl56TnKNmcnsKCyAAABcAABuxtrtteoJcanQAGzNOTlghIjAXFyY9PkkAABIyMjp+foVxcXhXV15HR1NnZ2+ZmZ1ISEma9ZpxAAADBklEQVR4nO2aC3OiMBCAodVQLG95CSrI2fNOufb+/687BJQAp03sbcjM7TfW6QzgfNkElmyiKAiCIAiCIAiCIAiCIAiCIIII/AUXfgSuFJqx6uk8qLEZgCoFpmOovBDDgdQKC49bqUaPQzCnOXnM6RytVyCpNX/XdVYxzHjPv+CkqoYN4RTFbecR3WmwWpq7zOpzOecyCmFC5Vttk4vcr3hloDrtJb0MRMsHkEqa3jN2vBfumgs9F0CqaFo8576NXudN/xUAUu1PcwdKidZtc+CkNP4rNZRiZCqpVDNHaPnEUr6qG0Osy6mTdV8wTtaGObWUEq6GVhJIKQEh8kmNYiWFlBKoRD6p6nVZQiklIfJJJbp8kbJ7TnJImX0nKaRsR5VOKunmqe1TdHopKk5e2sx7Jpei4mS4SlRn56mlXCpO50lnnXEmlkqNvlM1WagyjkApc3wk7eJ0nZyHMREn9ZeSgNvFSe+OhnNPmJQ1qggk1jhOZ4KVKClv1Ht2d985/SiGiRipcenkVpxoYKWIM6ycUDn4280CFKgUUYdOVA4mt4tikFLeqOBid33n3CnUAUqpxWg8UbnlXvEQUMocOrldnLy7BU1AqSFpLwfLITXMwTJIUbnl02KmKKmU4ZkpWoqKk/V50VeMFEtuES11OwdPJ0XNg9kWXARIUTmYKU4ipLjjJECKmt9ZrItl0FKsObjHDlaKOQfTtGszBEhqPL9jwW+uIGsYpy5Od94zh4TtiipHM3icujiRgmnzRl6hXVdGIdbbo4IqaBLW/RseubYDZLl98aXVdi+HcKpeiB/cv3GGf+mZkWD1cKwMFWxfSaQ9utdlB7gDJ3K7kcsM0T0beA+Vu17xOa12IA+oAaH/woEPNpgQBEEQBEEQBEEQBEEQBEEQ5D/lWUKUmYQoTxJSS23qT/v1tNlus/a/zfkzjVS2f/t+mGXZcp9tf2Szn8fTfr9cbrfLQ7ksf2VTSZVvlUh5Or6Xx/3p4/j7lL/nZbk4PX8cDv8wVBvq7/J9PVYfaDrmDyfjRCgQCN3HAAAAAElFTkSuQmCC"
                alt="Left Arrow"
                class="h-6 w-6"
              />{" "}
            </a>
          </div>
          <div className="flex">
            Facebook{" "}
            <a href="j" class="px-2">
              {" "}
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAk1BMVEX///8wRlQREiSOjo4AAAs9T1wnP053g4rM0NIKLkC/xMja3t8fOkqAipEALD+jqa4AKDybo6kXNUYAAADU2Nrs7u/l5+jz8/RTYm1HWGSNl56TnKNmcnsKCyAAABcAABuxtrtteoJcanQAGzNOTlghIjAXFyY9PkkAABIyMjp+foVxcXhXV15HR1NnZ2+ZmZ1ISEma9ZpxAAADBklEQVR4nO2aC3OiMBCAodVQLG95CSrI2fNOufb+/687BJQAp03sbcjM7TfW6QzgfNkElmyiKAiCIAiCIAiCIAiCIAiCIIII/AUXfgSuFJqx6uk8qLEZgCoFpmOovBDDgdQKC49bqUaPQzCnOXnM6RytVyCpNX/XdVYxzHjPv+CkqoYN4RTFbecR3WmwWpq7zOpzOecyCmFC5Vttk4vcr3hloDrtJb0MRMsHkEqa3jN2vBfumgs9F0CqaFo8576NXudN/xUAUu1PcwdKidZtc+CkNP4rNZRiZCqpVDNHaPnEUr6qG0Osy6mTdV8wTtaGObWUEq6GVhJIKQEh8kmNYiWFlBKoRD6p6nVZQiklIfJJJbp8kbJ7TnJImX0nKaRsR5VOKunmqe1TdHopKk5e2sx7Jpei4mS4SlRn56mlXCpO50lnnXEmlkqNvlM1WagyjkApc3wk7eJ0nZyHMREn9ZeSgNvFSe+OhnNPmJQ1qggk1jhOZ4KVKClv1Ht2d985/SiGiRipcenkVpxoYKWIM6ycUDn4280CFKgUUYdOVA4mt4tikFLeqOBid33n3CnUAUqpxWg8UbnlXvEQUMocOrldnLy7BU1AqSFpLwfLITXMwTJIUbnl02KmKKmU4ZkpWoqKk/V50VeMFEtuES11OwdPJ0XNg9kWXARIUTmYKU4ipLjjJECKmt9ZrItl0FKsObjHDlaKOQfTtGszBEhqPL9jwW+uIGsYpy5Od94zh4TtiipHM3icujiRgmnzRl6hXVdGIdbbo4IqaBLW/RseubYDZLl98aXVdi+HcKpeiB/cv3GGf+mZkWD1cKwMFWxfSaQ9utdlB7gDJ3K7kcsM0T0beA+Vu17xOa12IA+oAaH/woEPNpgQBEEQBEEQBEEQBEEQBEEQ5D/lWUKUmYQoTxJSS23qT/v1tNlus/a/zfkzjVS2f/t+mGXZcp9tf2Szn8fTfr9cbrfLQ7ksf2VTSZVvlUh5Or6Xx/3p4/j7lL/nZbk4PX8cDv8wVBvq7/J9PVYfaDrmDyfjRCgQCN3HAAAAAElFTkSuQmCC"
                alt="Left Arrow"
                class="h-6 w-6"
              />{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="bg-sky-900 p-2 pl-8">
        <text>© 2024 aribamemon All rights reserved.</text>
      </div>
    </div>
  );
}

export default Home;
