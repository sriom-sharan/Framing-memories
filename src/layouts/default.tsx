// import { Link } from "@heroui/link";

import { Navbar } from "@/components/navbar";
import { Button } from "@heroui/button";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative font-spartan flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-full  flex-grow ">
        {children}
      </main>
      <footer className=" pb-10 text-black  bg-secondary ">
        <div className="max-w-7xl  grid row-span-3 md:col-span-3 md:gap-12 gap-16 py-12 md:py-20 px-7 mx-auto ">
          <div className="flex flex-col  md:col-start-1 gap-6 md:gap-8">
            <h2 className="md:text-4xl text-3xl mb-6">Framing Memories</h2>
            <div className="flex flex-col gap-6 w-full md:pr-10">
              <div className="w-full">
                <label htmlFor="email" className="block pb-2">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-transparent w-full border-black  rounded-full border p-2"
                />
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="subscribe"
                  className="bg-transparent size-4  border-black"
                />
                <label htmlFor="subscribe" className="font-sans">
                  Yes, subscribe to my news channel. *
                </label>
              </div>
              <Button
                variant="solid"
                size="md"
                className="text-white text-lg py-4 rounded-full bg-black border "
              >
                Submit
              </Button>
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-16  md:col-start-3">
            <div className="flex flex-col col-start-3 md:w-1/3  justify-end  gap-2">
              <p className=" font-sans  text-xl lg:text-[16px] leading-tight tracking-wide">
                123-456-7890
              </p>
              <p className=" font-sans  text-xl lg:text-[16px] leading-tight tracking-wide">
                info@mysite.com
              </p>
              <p className=" font-sans  text-xl lg:text-[16px] leading-tight tracking-wide">
                500 Terry Francine St. San
                <br />
                Francisco, CA 94158
              </p>
            </div>
            <div className="flex flex-col col-start-2 w-2/3  justify-end md:ml-8  gap-2">
              <p className=" font-sans  text-xl lg:text-[16px] leading-tight tracking-wide">
                123-456-7890
              </p>
              <p className=" font-sans  text-xl lg:text-[16px] leading-tight tracking-wide">
                info@mysite.com
              </p>
              <p className=" font-sans  text-xl lg:text-[16px] leading-tight tracking-wide">
                500 Terry Francine St. San
                <br />
                Francisco, CA 94158
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
