import React from 'react';

const ProjectManagement = () => {
  return (
    <>
      {/* Project Management Section */}
      <div className="bg-white py-10 pt-[140px] w-[1920px]">
        <div className="flex justify-center items-center gap-10 px-8">
          <div className="w-[672px] h-[411px]">
            <h1 className="text-[72px] font-bold leading-tight">Project Management</h1>
            <p className="text-[18px] font-normal leading-[30px] mt-4">
              Images, videos, PDFs, and audio files are supported. Create math expressions and diagrams directly from the app.
              Take photos with the mobile app and save them to a note.
            </p>
            <div className="mt-8">
              <button className="bg-[#4F9CF9] w-[201px] h-[63px] rounded-md">
                Get Started
              </button>
            </div>
          </div>
          <div className="bg-[#C4DEFD] w-[748px] h-[547px]"></div>
        </div>
      </div>

      {/* Work Together Section */}
      <div className="bg-white py-10 mt-16 flex justify-center pt-[140px] w-[1920px] h-[1000px]">
        <div className="flex justify-center items-center gap-10 px-8 w-[1480px] h-[661px]">
          <img
            src="Work Together Image@2x.png"
            alt="Work Together"
            width={710}
            height={661}
            className="rounded-md"
          />
          <div className="w-[670px] h-[294px]">
            <h1 className="text-[72px] font-bold leading-tight">Work Together</h1>
            <p className="text-[18px] font-normal leading-[30px] mt-4">
              With Whitespace, share your notes with your colleagues and collaborate on them.
              You can also publish a note to the internet and share the URL with others.
            </p>
            <div className="mt-8">
              <button className="bg-[#4F9CF9] w-[186px] h-[63px] rounded-md">
                Try it now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectManagement;
