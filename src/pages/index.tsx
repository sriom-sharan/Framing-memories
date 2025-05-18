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
        <div className="grid lg:grid-cols-2 bg-[#ebe9e2]">
          <img src="https://travel-tour-nu.vercel.app/assets/hero-Ci6QhsG0.avif" />
          <div className="flex md:items-center font-spartan flex-col lg:gap-8 gap-4 px-7 py-10 lg:mt-0 justify-center  my-auto min-h-1/2  lg:h-full flex-1 p-4 lg:py-6 lg:p-10 ">
            <h1 className="lg:text-7xl xl:text-8xl md:text-6xl text-5xl text-start lg:text-center">
              Discover Your Destination
            </h1>
            <p className="font-normal text-2xl md:text-xl">
              Crafting Tailored Travel Experiences
            </p>
            <Button
              className="bg-transparent font-normal md:w-80 w-32 py-6  rounded-full border-black text-normal md:text-xl"
              variant="bordered"
            >
              Explore
            </Button>
          </div>
        </div>

        {/*------ My Team Sectioon  --------*/}
        <div className="max-w-7xl min-h-dvh flex flex-col gap-20 py-12 md:py-20 px-7 mx-auto ">
          <div className="flex flex-col justify-between gap-4">
            <div className="flex flex-col md:w-1/2 gap-6 md:gap-8">
              <h2 className="md:text-6xl text-4xl">Meet Our Team</h2>
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
                className="md:w-60 w-full"
                src="https://static.wixstatic.com/media/11062b_d5b2846e2bec45c18f4076d5bdd27cf8~mv2.jpg/v1/fill/w_325,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Walking%20Tourists.jpg"
              />
            </div>

            <p className="flex-1 font-sans text-xl lg:text-[16px] leading-tight tracking-wide">
              Our commitment to excellence and client satisfaction drives our
              mission to deliver unique and off-the-beaten-path travel
              experiences that resonate with your travel aspirations. Partner
              with us to experience unmatched local expertise and attention to
              detail.
            </p>
          </div>
        </div>

        {/*----------- Services ----------*/}
        <div className=" min-h-dvh text-white pb-20 bg-[#445D4A] ">
          <div className="max-w-7xl min-h-dvh  flex flex-col gap-16 py-12 md:py-20 px-7 mx-auto ">
            <div className="flex flex-col md:w-1/2 gap-6 md:gap-8">
              <h2 className="md:text-6xl text-4xl">Travel Experiences</h2>
              <p className="text-2xl ">
                At E. Reyes, we specialize in crafting tailored travel
                experiences for individuals and groups. Our services include
                adventure tours, cultural immersions, off-the-beaten-path
                journeys, and more, tailored to meet your specific travel
                preferences and ensure authentic experiences.
              </p>
            </div>

            <hr />
            <div className="flex flex-col md:flex-row  gap-6 md:gap-8">
              <h2 className="md:text-4xl md:w-1/2 text-3xl">Adventure Tours</h2>
              <p className="text-xl md:w-1/2">Thrilling Escapades</p>
            </div>

            <hr />
            <div className="flex flex-col md:flex-row   gap-6 md:gap-8">
              <h2 className="md:text-4xl md:w-1/2 text-3xl">
                Cultural Immersions
              </h2>
              <p className="text-xl md:w-1/2 ">Embracing Local Traditions</p>
            </div>

            <hr />
            <div className="flex flex-col md:flex-row   gap-6 md:gap-8">
              <h2 className="md:text-4xl md:w-1/2 text-3xl">
                Off-the-Beaten-Path Journeys
              </h2>
              <p className="text-xl md:w-1/2 ">Exploring Hidden Gems</p>
            </div>

            <hr />
            <div className="flex flex-col md:flex-row   gap-6 md:gap-8">
              <h2 className="md:text-4xl md:w-1/2 text-3xl">
                Tailored Itineraries
              </h2>
              <p className="text-xl md:w-1/2 ">Crafting Dream Getaways</p>
            </div>

            <hr />
          </div>
        </div>

        {/*----------- Why choose us & Insights ----------*/}
        <div className=" min-h-dvh text-black pb-16 bg-[#ebe9e2] ">
          <div className="max-w-7xl min-h-dvh  flex flex-col gap-12 py-12 md:py-20 px-7 mx-auto ">
            <div className="flex flex-col md:w-1/2 gap-6 md:gap-8">
              <h2 className="md:text-6xl text-4xl">Travel Insights</h2>
              <p className="text-2xl ">
                Explore our infographics for valuable insights and visual
                representations of unique travel destinations and cultural
                experiences.
              </p>
            </div>
            <hr className=" border-black" />
            <div className="flex justify-end">
              <div className="flex md:flex-row flex-col gap-14 md:pl-64">
                <div className="flex flex-col gap-4 md:gap-6">
                  <p className="md:text-7xl text-4xl">100+</p>
                  <p className=" text-2xl">Satisfied Travelers</p>
                  <p className="flex-1 font-sans text-xl lg:text-[16px] leading-tight tracking-wide">
                    Our travel experiences are designed to ensure satisfaction,
                    authenticity, and meaningful connections with diverse
                    cultures.
                  </p>
                </div>
                <div className="flex flex-col gap-4 md:gap-6">
                  <p className="md:text-7xl text-4xl">95%</p>
                  <p className=" text-2xl">Repeat Clients</p>
                  <p className="flex-1 font-sans text-xl lg:text-[16px] leading-tight tracking-wide">
                 Join our community of repeat travelers who have embraced the authenticity and uniqueness of our tailored travel experiences.
                  </p>
                </div>
                <div className="flex flex-col gap-4 md:gap-6">
                  <p className="md:text-7xl text-4xl">5+</p>
                  <p className=" text-2xl">Years of Expertise</p>
                  <p className="flex-1 font-sans text-xl lg:text-[16px] leading-tight tracking-wide">
                    Embark on unforgettable journeys with our team's expertise and passion for delivering exceptional travel experiences.
                  </p>
                </div>
             
              </div>
            </div>
              <div className="flex flex-col md:w-1/2 gap-6 mt-28 md:gap-8">
              <h2 className="md:text-6xl text-4xl">Why Choose Us?</h2>

            </div>
            <hr className=" border-black" />
          
          </div>

        </div>

      </div>
    </DefaultLayout>
  );
}
