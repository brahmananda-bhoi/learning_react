// import React from 'react'
// import { Link } from 'react-router-dom';
// import image1 from '../../assets/image1.jpg';
// import image2 from '../../assets/image2.jpg';

// export default function Home() {
//     return (
//         <div className="mx-auto w-full max-w-7xl">
//             <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
//                 <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
//                     <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
//                         <h2 className="text-4xl font-bold sm:text-5xl">
//                             Download Now
//                             <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
//                         </h2>

//                         <Link
//                             className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
//                             to="/"
//                         >
//                             <svg
//                                 fill="white"
//                                 width="24"
//                                 height="24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                             >
//                                 <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
//                             </svg>
//                             &nbsp; Download now
//                         </Link>
//                     </div>
//                 </div>

//                 <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
//                     {/* <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" /> */}
//                     <img className="w-100 h-80" src={image1} alt="image1" />
//                 </div>
//             </aside>

//             <div className="grid  place-items-center sm:mt-20">
//                 {/* <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" /> */}
//                 <img className="sm:w-96 w-48" src={image2} alt="image2" />
//             </div>

//             <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
//         </div>
//     );
// }







import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">

      {/* -------------------------------------------------
          HERO SECTION (replaces the original <aside>)
         ------------------------------------------------- */}
      <section className="relative overflow-hidden rounded-lg bg-gradient-to-br from-orange-50 to-orange-100">
        {/* Background image – covers the whole section */}
        <div className="absolute inset-0">
          <img
            src={image1}
            alt="Hero background – a person using the app"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" /> {/* dark overlay */}
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 py-16 sm:flex-row sm:items-end sm:justify-between sm:py-24 lg:px-8">
          {/* Text + CTA */}
          <div className="max-w-xl text-center sm:ml-auto sm:text-right">
            <h2 className="text-4xl font-bold text-white sm:text-5xl">
              Download Now
              <span className="hidden sm:block text-3xl">
                {' '}
                Lorem Ipsum
              </span>
            </h2>

            <Link
              to="/"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-orange-700 px-6 py-3 font-medium text-white transition-opacity hover:opacity-80"
            >
              <svg
                fill="currentColor"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              Download now
            </Link>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------
          SECOND IMAGE (centered)
         ------------------------------------------------- */}
      <div className="mt-12 grid place-items-center sm:mt-20">
        <img
          src={image2}
          alt="Secondary illustration"
          className="w-48 sm:w-96"
        />
      </div>

      {/* -------------------------------------------------
          PAGE TITLE
         ------------------------------------------------- */}
      <h1 className="mt-12 text-center text-2xl font-medium sm:mt-16 sm:text-5xl">
        Lorem Ipsum Yojo
      </h1>
    </div>
  );
}