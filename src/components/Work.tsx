import React from 'react';

const Work = () => {
  return (
    <div className="bg-[#043873] w-[1921px] h-[574px] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center  max-w-[1481px] h-[294px] px-8 text-center">
        <h1 className="text-white text-[72px] font-bold leading-[87.14px]">
          Your work, everywhere you are
        </h1>
        <p className="text-white text-[18px] font-normal leading-[30px]">
          Access your notes from your computer, phone, or tablet by synchronizing with various services, including Whitespace,
          Dropbox, and OneDrive. The app is available on Windows, macOS, Linux, Android, and iOS.
          A terminal app is also available!
        </p>
        <div className="mt-8">
          <button className="rounded-md bg-[#4F9CF9] text-white w-[195px] h-[63px]">
            Try Taskey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
