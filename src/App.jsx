import hamburgerIcon from './assets/bx-menu.svg'
import plusIcon from './assets/bx-plus.svg'
import arrowIcon from './assets/bx-right-arrow-alt.svg'
import submitIcon from './assets/bxs-right-arrow-square.svg'
import profile from './assets/download.jpg'
import './App.css'

function App() {
  return (
    <div className='flex flex-row justify-start h-screen'>
      <div className="p-2 text-white w-[290px] h-screen hidden md:block bg-gray-900 relative">
        <div className='fixed bottom-0 border-t-2 border-gray-800 py-2 '>
          <button className='flex gap-4 justify-between items-center my-4'>
            <svg class="h-8 w-6 invert text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="7" r="4" />  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
            <p>Upgrade to Plus</p>
            <p className='bg-yellow-200 py-1 px-1.5 text-black text-xs rounded-sm'>New</p>
          </button>
          <button className='flex gap-2 justify-between items-center'>
            <img src={profile} alt="" srcset="" className='w-10 h-6 rounded-md' />
            <p className='w-full'>Ivan Ray Castillo</p>
            <svg class="h-8 w-8 invert text-gray-600"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
           </svg>
          </button>
        </div>
        <div className="flex gap-2">
          <button type="button"
            className='flex items-center gap-2 border border-gray-600 rounded-md p-2 px-4 text-sm basis-[90%]'>
            <svg class="h-8 w-4 invert text-black" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" /></svg>
            New chat
          </button>
          <button type="button" className='flex items-center gap-2 border border-gray-600 rounded-md p-2 px-4 text-sm'>
            <svg class="h-8 w-5 text-black invert"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="2" />  <line x1="9" y1="4" x2="9" y2="20" />
            </svg>
          </button>
        </div>
        <div className='my-4'>
          <ul className=' flex flex-col'>
            <p className='text-gray-500 text-xs font-semibold'>Yesterday</p>
            <li className='hover:bg-slate-800 py-2 px-2 rounded-md'>
              <a href="" className='text-sm flex gap-4 items-center line-clamp-1'>
                <div>
                  <svg class="h-8 w-4 text-black invert" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                </div>
                <p className='line-clamp-1'>Draw or doodle in a sketchbook .</p>
              </a>
            </li>
            <li className='hover:bg-slate-800 py-2 px-2 rounded-md'>
              <a href="" className='text-sm flex gap-4 items-center'>
                <div>
                  <svg class="h-8 w-4 text-black invert" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <p className='line-clamp-1'>Write a short story or poem.</p>
              </a>
            </li>
            <li className='hover:bg-slate-800 py-2 px-2 rounded-md'>
              <a href="" className='text-sm flex gap-4 items-center'>
                <div>
                  <svg class="h-8 w-4 text-black invert" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                </div>
                <p className='line-clamp-1'>Learn a new dance routine from YouTube.</p>
              </a>
            </li>
            <li className='hover:bg-slate-800 py-2 px-2 rounded-md'>
              <a href="" className='flex gap-4 items-center text-sm'>
                <div>
                  <svg class="h-8 w-4 text-black invert" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                </div>
                <p className="line-clamp-1">Try out a new recipe and cook a delicious meal.</p>
              </a>
            </li>
          </ul>
        </div>
        <div className='my-4'>
          <ul className=' flex flex-col '>
            <p className='text-gray-500 text-xs font-semibold'>1 day ago</p>
            <li className='hover:bg-slate-800 py-2 px-2 rounded-md'>
              <a href="" className='text-sm flex gap-4 items-center line-clamp-1'>
                <div>
                  <svg class="h-8 w-4 text-black invert" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                </div>
                <p className='line-clamp-1'>Draw or doodle in a sketchbook .</p>
              </a>
            </li>
            <li className='hover:bg-slate-800 py-2 px-2 rounded-md'>
              <a href="" className='text-sm flex gap-4 items-center'>
                <div>
                  <svg class="h-8 w-4 text-black invert" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <p className='line-clamp-1'>Write a short story or poem.</p>
              </a>
            </li>
            <li className='hover:bg-slate-800 py-2 px-2 rounded-md'>
              <a href="" className='text-sm flex gap-4 items-center'>
                <div>
                  <svg class="h-8 w-4 text-black invert" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                </div>
                <p className='line-clamp-1'>Learn a new dance routine from YouTube.</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col justify-between h-screen md:overflow-hidden w-full'>
        <div className='sticky top-0 z'>
          <div className='flex justify-between p-4 text-white bg-gray-700 md:hidden'>
            <button>
              <img src={hamburgerIcon} alt="" srcset="" className='invert' />
            </button>
            <p>New chat</p>
            <button>
              <img src={plusIcon} alt="" srcset="" className='invert' />
            </button>
          </div>
          <div>
            <div className=' px-4 mt-2 md:mt-6 md:flex justify-center'>
              <div className='flex gap-2 bg-gray-100 rounded-xl p-2'>
                <button
                  className='flex justify-center items-center gap-2 px-8 py-2 bg-white basis-[50%] md:basis-auto rounded-xl text-sm font-bold'>
                  <svg class="h-8 text-green-500 w-4" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  GPT-3.5
                  <svg class="h-8 text-black w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </button>
                <button
                  className='group flex justify-center items-center gap-2 px-8 py-2 basis-[50%] md:basis-auto rounded-xl text-sm font-bold text-gray-400 hover:text-black'>
                  <svg class="h-8 w-4 text-gray-400 group-hover:text-violet-700" fill="currentColor" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  GPT-4
                  <svg class="h-8 w-4 text-gray-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x="5" y="11" width="14" height="10" rx="2" />
                    <circle cx="12" cy="16" r="1" />
                    <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='px-4 my-8 md:w-[740px] mx-auto'>
          <h1 className='text-4xl font-bold text-center'>ChatGPT</h1>
          <div className='md:flex justify-center gap-2'>
            <div className='flex flex-col items-center gap-2 my-4'>
              <div className='flex gap-2 my-2 md:flex-col md:items-center'>
                <svg class="h-8 w-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
                <h2 className='text-lg'>Examples</h2>
              </div>
              <div className="flex flex-col text-center gap-2 w-full font-semibold">
                <button
                  className='w-full flex justify-center gap-1 items-center bg-slate-100 rounded-md p-4 text-sm hover:bg-slate-200'>
                  "The world’s oldest wooden wheel is?"
                  <img src={arrowIcon} alt="" />
                </button>
                <button
                  className='w-full flex justify-center gap-1 items-center bg-slate-100 rounded-md p-4 text-sm hover:bg-slate-200'>
                  "The bumblebee bat is the world’s smallest mammal"
                  <img src={arrowIcon} alt="" />
                </button>
                <button
                  className='w-full flex justify-center gap-1 items-center bg-slate-100 rounded-md p-4 text-sm hover:bg-slate-200'>
                  "Sudan has more pyramids than any country in the world"
                  <img src={arrowIcon} alt="" />
                </button>
              </div>
            </div>

            <div className='flex flex-col items-center gap-2 my-4'>
              <div className='flex gap-2 my-2 md:flex-col md:items-center'>
                <svg class="h-8 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h2 className='text-lg'>Capabilities</h2>
              </div>
              <ul className="flex flex-col text-center gap-2 w-full font-semibold">
                <li className='w-full flex justify-center gap-1 items-center bg-slate-100 rounded-md p-4 text-sm'>
                  Remembers what user said earlier in the conversation
                </li>
                <li className='w-full flex justify-center gap-1 items-center bg-slate-100 rounded-md p-4 text-sm'>
                  Allows user to provide follow-up corrections
                </li>
                <li className='w-full flex justify-center gap-1 items-center bg-slate-100 rounded-md p-4 text-sm'>
                  Trained to decline inappropriate requests
                </li>
              </ul>
            </div>

            <div className='flex flex-col items-center gap-2 my-4 '>
              <div className='flex gap-2 my-2 md:flex-col md:items-center'>
                <svg class="h-8 w-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <h2 className='text-lg'>Limitations</h2>
              </div>
              <ul className="flex flex-col text-center gap-2 w-full font-semibold">
                <li className='w-full flex justify-center gap-1 items-center bg-slate-100 rounded-md p-4 text-sm'>
                  May occasionally generate incorrect information
                </li>
                <li className='w-full flex justify-center gap-1 items-center bg-slate-100 rounded-md p-4 text-sm'>
                  May occasionally produce harmful instructions or biased content
                </li>
                <li className='w-full flex justify-center gap-1 items-center bg-slate-100 rounded-md p-4 text-sm'>
                  Limited knowledge of world and events after 2021
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='p-4 md:w-[780px] mx-auto sticky bottom-0 bg-slate-100 md:bg-transparent'>
          <form action="" className='bg-white p-3 rounded-md shadow-lg border border-gray-200'>
            <div className='flex'>
              <input type="text" placeholder='Send a message' className='w-full outline-none' />
              <button type="button">
                <img src={submitIcon} alt="" srcset="" />
              </button>
            </div>
          </form>
          <p className='text-xs text-center my-2'>Free Research Preview. ChatGPT may produce inaccurate information about
            people, places, or facts. ChatGPT July 20 Version</p>
        </div>
      </div>
    </div>
  )
}

export default App