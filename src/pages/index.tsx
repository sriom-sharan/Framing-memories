// import { Link } from "@heroui/link";
// import { Snippet } from "@heroui/snippet";
// import { Code } from "@heroui/code";
// import { button as buttonStyles } from "@heroui/theme";

// import { siteConfig } from "@/config/site";
// import { title, subtitle } from "@/components/primitives";
// import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/button";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="bg-primary-foreground">
        <div className="grid lg:grid-cols-2 bg-[#ede7db]">
          <img src="https://travel-tour-nu.vercel.app/assets/hero-Ci6QhsG0.avif" />
          <div className="flex items-center font-spartan flex-col lg:gap-8 gap-4 py-16 lg:mt-0 justify-center my-auto min-h-1/2  lg:h-full flex-1 p-4 lg:py-6 lg:p-10 ">
            <h1 className="lg:text-7xl xl:text-8xl md:text-6xl text-5xl text-center">
              Discover Your Destination
            </h1>
            <p className="font-normal md:text-xl">
              Crafting Tailored Travel Experiences
            </p>
            <Button
              className="bg-transparent font-normal md:w-80 w-48 py-6  rounded-full border-black text-normal md:text-xl"
              variant="bordered"
            >
              Explore
            </Button>
          </div>
        </div>
        {/*------ My Team Sectioon  --------*/}
        <div className="max-w-7xl h-dvh flex flex-col gap-20 py-20 px-7 mx-auto ">
          <div className="flex flex-col justify-between gap-4">
            <div className="flex flex-col md:w-1/2 gap-8">
              <h2 className="text-6xl ">Meet Our Team</h2>
              <p className="text-2xl ">
                E. Reyes Travel Agency is dedicated to crafting personalized and
                immersive travel experiences for our clients. With a team of
                passionate travel experts, we aim to ensure unforgettable
                adventures and cultural exploration, helping our clients create
                lasting memories.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-2 items-start">
            <div className="flex-1 w-full flex md:block justify-center">
              <img
                className="w-60 "
                src="https://static.wixstatic.com/media/11062b_d5b2846e2bec45c18f4076d5bdd27cf8~mv2.jpg/v1/fill/w_325,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Walking%20Tourists.jpg"
              />
            </div>

            <p className="flex-1 text-xl lg:text-[16px] leading-tight tracking-wide">
              Our commitment to excellence and client satisfaction drives our
              mission to deliver unique and off-the-beaten-path travel
              experiences that resonate with your travel aspirations. Partner
              with us to experience unmatched local expertise and attention to
              detail.
            </p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
