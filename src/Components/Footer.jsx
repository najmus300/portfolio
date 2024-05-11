import React from 'react'

const Footer = () => {
  return (
    <div className='text-white'>
       <div className="flex flex-col items-center justify-center border-t-2 border-b-2 bg-sky-900 border-white">
      <h2 class="text-lg font-semibold mb-4 mt-4">Contact Me</h2>

      <div className="flex justify-center items-center mb-4 gap-4">
        <div className="flex">
          Github{" "}
          <a href="https://github.com/najmus300" target="blank" class="px-2">
            {" "}
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAk1BMVEX///8wRlQREiSOjo4AAAs9T1wnP053g4rM0NIKLkC/xMja3t8fOkqAipEALD+jqa4AKDybo6kXNUYAAADU2Nrs7u/l5+jz8/RTYm1HWGSNl56TnKNmcnsKCyAAABcAABuxtrtteoJcanQAGzNOTlghIjAXFyY9PkkAABIyMjp+foVxcXhXV15HR1NnZ2+ZmZ1ISEma9ZpxAAADBklEQVR4nO2aC3OiMBCAodVQLG95CSrI2fNOufb+/687BJQAp03sbcjM7TfW6QzgfNkElmyiKAiCIAiCIAiCIAiCIAiCIIII/AUXfgSuFJqx6uk8qLEZgCoFpmOovBDDgdQKC49bqUaPQzCnOXnM6RytVyCpNX/XdVYxzHjPv+CkqoYN4RTFbecR3WmwWpq7zOpzOecyCmFC5Vttk4vcr3hloDrtJb0MRMsHkEqa3jN2vBfumgs9F0CqaFo8576NXudN/xUAUu1PcwdKidZtc+CkNP4rNZRiZCqpVDNHaPnEUr6qG0Osy6mTdV8wTtaGObWUEq6GVhJIKQEh8kmNYiWFlBKoRD6p6nVZQiklIfJJJbp8kbJ7TnJImX0nKaRsR5VOKunmqe1TdHopKk5e2sx7Jpei4mS4SlRn56mlXCpO50lnnXEmlkqNvlM1WagyjkApc3wk7eJ0nZyHMREn9ZeSgNvFSe+OhnNPmJQ1qggk1jhOZ4KVKClv1Ht2d985/SiGiRipcenkVpxoYKWIM6ycUDn4280CFKgUUYdOVA4mt4tikFLeqOBid33n3CnUAUqpxWg8UbnlXvEQUMocOrldnLy7BU1AqSFpLwfLITXMwTJIUbnl02KmKKmU4ZkpWoqKk/V50VeMFEtuES11OwdPJ0XNg9kWXARIUTmYKU4ipLjjJECKmt9ZrItl0FKsObjHDlaKOQfTtGszBEhqPL9jwW+uIGsYpy5Od94zh4TtiipHM3icujiRgmnzRl6hXVdGIdbbo4IqaBLW/RseubYDZLl98aXVdi+HcKpeiB/cv3GGf+mZkWD1cKwMFWxfSaQ9utdlB7gDJ3K7kcsM0T0beA+Vu17xOa12IA+oAaH/woEPNpgQBEEQBEEQBEEQBEEQBEEQ5D/lWUKUmYQoTxJSS23qT/v1tNlus/a/zfkzjVS2f/t+mGXZcp9tf2Szn8fTfr9cbrfLQ7ksf2VTSZVvlUh5Or6Xx/3p4/j7lL/nZbk4PX8cDv8wVBvq7/J9PVYfaDrmDyfjRCgQCN3HAAAAAElFTkSuQmCC"
              alt="Left Arrow"
              class="h-6 w-6"
            />{" "}
          </a>
        </div>
        <div className="flex">
          WhatsApp{" "}
          <a href="https://wa.me/+923157146610" target="blank" class="px-2">
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
          <a href="https://www.linkedin.com/in/najmus-saqib-a1ab3a212/" target="blank" class="px-2">
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
          <a href="j" target="blank" class="px-2">
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
      <text>© 2024 najmusesaqib All rights reserved.</text>
    </div>
    </div>
  )
}

export default Footer
