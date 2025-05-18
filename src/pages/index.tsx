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
        {/*--------- Hero Section ---------*/}
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
                    Join our community of repeat travelers who have embraced the
                    authenticity and uniqueness of our tailored travel
                    experiences.
                  </p>
                </div>
                <div className="flex flex-col gap-4 md:gap-6">
                  <p className="md:text-7xl text-4xl">5+</p>
                  <p className=" text-2xl">Years of Expertise</p>
                  <p className="flex-1 font-sans text-xl lg:text-[16px] leading-tight tracking-wide">
                    Embark on unforgettable journeys with our team's expertise
                    and passion for delivering exceptional travel experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:w-1/2 gap-6 mt-28 md:gap-8">
              <h2 className="md:text-6xl text-4xl">Why Choose Us?</h2>
            </div>
            <hr className=" border-black" />
            <div className="flex flex-col md:flex-row justify-center  md:pb-10 gap-6 md:gap-8">
              <div className="md:w-1/2 gap-8 flex md:flex-row flex-col justify-between ">
                <svg
                  preserveAspectRatio="none"
                  data-bbox="19.999 19.999 159.999 159.999"
                  viewBox="19.999 19.999 159.999 159.999"
                  height="65"
                  width="65"
                  xmlns="http://www.w3.org/2000/svg"
                  data-type="shape"
                  role="presentation"
                  aria-hidden="true"
                  aria-label=""
                >
                  <g>
                    <path d="M149.797 119.603a30.6 30.6 0 0 0-6.482.658c-8.192 1.731-16.703-.889-22.625-6.779l-2.806-2.791a15.1 15.1 0 0 1-.012-21.422l2.773-2.759c5.928-5.896 14.449-8.514 22.647-6.775 2.089.443 4.258.672 6.483.662 16.412-.072 29.926-13.325 30.218-29.648.306-17.117-13.708-31.055-30.918-30.744-16.115.291-29.319 13.279-29.783 29.305a30 30 0 0 0 .896 8.242c2.131 8.452-.382 17.394-6.576 23.555l-1.961 1.95a15.28 15.28 0 0 1-10.774 4.439 15.28 15.28 0 0 1-10.774-4.439l-3.382-3.365c-6.011-5.979-8.609-14.6-6.742-22.849.531-2.346.787-4.796.732-7.314-.351-16.116-13.593-29.236-29.796-29.525-17.211-.307-31.225 13.637-30.911 30.758.298 16.248 13.701 29.467 30.038 29.632a30.6 30.6 0 0 0 7.391-.824c8.404-1.999 17.246.541 23.356 6.619l2.176 2.165a15.1 15.1 0 0 1 4.463 10.717v1.801c0 4.02-1.605 7.875-4.463 10.717l-2.219 2.208c-6.104 6.072-14.936 8.615-23.334 6.624a30.6 30.6 0 0 0-7.39-.819c-16.329.176-29.72 13.391-30.018 29.631-.315 17.123 13.7 31.067 30.912 30.76 16.21-.289 29.454-13.422 29.795-29.545.053-2.52-.205-4.97-.737-7.317-1.874-8.255.722-16.885 6.737-22.87l2.486-2.473a15.28 15.28 0 0 1 10.774-4.439h1.811c4.041 0 7.917 1.597 10.775 4.439l1.066 1.06c6.2 6.167 8.709 15.119 6.57 23.577a30.2 30.2 0 0 0-.902 8.244c.454 16.033 13.66 29.033 29.783 29.324 17.211.311 31.226-13.627 30.919-30.745-.293-16.314-13.794-29.564-30.198-29.647z"></path>
                  </g>
                </svg>
                <h2 className="md:text-2xl md:w-2/3 w-full text-3xl">
                  Personalized Experiences
                </h2>
              </div>
              <p className="flex-1 font-sans text-xl md:pr-24 lg:text-[16px] leading-tight tracking-wide">
                Our commitment to crafting personalized experiences has earned
                us recognition in the travel industry.
              </p>
            </div>

            <hr className=" border-black" />
            <div className="flex flex-col md:flex-row justify-center  md:pb-10 gap-6 md:gap-8">
              <div className="md:w-1/2 flex-col md:flex-row gap-8 flex justify-between ">
                <svg
                  preserveAspectRatio="none"
                  data-bbox="19.999 19.999 159.999 159.999"
                  viewBox="19.999 19.999 159.999 159.999"
                  height="65"
                  width="65"
                  xmlns="http://www.w3.org/2000/svg"
                  data-type="shape"
                  role="presentation"
                  aria-hidden="true"
                  aria-label=""
                >
                  <g>
                    <path d="M149.797 119.603a30.6 30.6 0 0 0-6.482.658c-8.192 1.731-16.703-.889-22.625-6.779l-2.806-2.791a15.1 15.1 0 0 1-.012-21.422l2.773-2.759c5.928-5.896 14.449-8.514 22.647-6.775 2.089.443 4.258.672 6.483.662 16.412-.072 29.926-13.325 30.218-29.648.306-17.117-13.708-31.055-30.918-30.744-16.115.291-29.319 13.279-29.783 29.305a30 30 0 0 0 .896 8.242c2.131 8.452-.382 17.394-6.576 23.555l-1.961 1.95a15.28 15.28 0 0 1-10.774 4.439 15.28 15.28 0 0 1-10.774-4.439l-3.382-3.365c-6.011-5.979-8.609-14.6-6.742-22.849.531-2.346.787-4.796.732-7.314-.351-16.116-13.593-29.236-29.796-29.525-17.211-.307-31.225 13.637-30.911 30.758.298 16.248 13.701 29.467 30.038 29.632a30.6 30.6 0 0 0 7.391-.824c8.404-1.999 17.246.541 23.356 6.619l2.176 2.165a15.1 15.1 0 0 1 4.463 10.717v1.801c0 4.02-1.605 7.875-4.463 10.717l-2.219 2.208c-6.104 6.072-14.936 8.615-23.334 6.624a30.6 30.6 0 0 0-7.39-.819c-16.329.176-29.72 13.391-30.018 29.631-.315 17.123 13.7 31.067 30.912 30.76 16.21-.289 29.454-13.422 29.795-29.545.053-2.52-.205-4.97-.737-7.317-1.874-8.255.722-16.885 6.737-22.87l2.486-2.473a15.28 15.28 0 0 1 10.774-4.439h1.811c4.041 0 7.917 1.597 10.775 4.439l1.066 1.06c6.2 6.167 8.709 15.119 6.57 23.577a30.2 30.2 0 0 0-.902 8.244c.454 16.033 13.66 29.033 29.783 29.324 17.211.311 31.226-13.627 30.919-30.745-.293-16.314-13.794-29.564-30.198-29.647z"></path>
                  </g>
                </svg>
                <h2 className="md:text-2xl md:w-2/3 text-3xl">
                  Cultural Focus
                </h2>
              </div>
              <p className="flex-1 font-sans text-xl md:pr-24 lg:text-[16px] leading-tight tracking-wide">
                Our dedication to cultural immersion and authenticity sets us
                apart in the travel sector.
              </p>
            </div>

            <hr className=" border-black" />
            <div className="flex flex-col md:flex-row justify-center  md:pb-10 gap-6 md:gap-8">
              <div className="md:w-1/2 gap-8 flex flex-col md:flex-row justify-between ">
                <svg
                  preserveAspectRatio="none"
                  data-bbox="19.999 19.999 159.999 159.999"
                  viewBox="19.999 19.999 159.999 159.999"
                  height="65"
                  width="65"
                  xmlns="http://www.w3.org/2000/svg"
                  data-type="shape"
                  role="presentation"
                  aria-hidden="true"
                  aria-label=""
                >
                  <g>
                    <path d="M149.797 119.603a30.6 30.6 0 0 0-6.482.658c-8.192 1.731-16.703-.889-22.625-6.779l-2.806-2.791a15.1 15.1 0 0 1-.012-21.422l2.773-2.759c5.928-5.896 14.449-8.514 22.647-6.775 2.089.443 4.258.672 6.483.662 16.412-.072 29.926-13.325 30.218-29.648.306-17.117-13.708-31.055-30.918-30.744-16.115.291-29.319 13.279-29.783 29.305a30 30 0 0 0 .896 8.242c2.131 8.452-.382 17.394-6.576 23.555l-1.961 1.95a15.28 15.28 0 0 1-10.774 4.439 15.28 15.28 0 0 1-10.774-4.439l-3.382-3.365c-6.011-5.979-8.609-14.6-6.742-22.849.531-2.346.787-4.796.732-7.314-.351-16.116-13.593-29.236-29.796-29.525-17.211-.307-31.225 13.637-30.911 30.758.298 16.248 13.701 29.467 30.038 29.632a30.6 30.6 0 0 0 7.391-.824c8.404-1.999 17.246.541 23.356 6.619l2.176 2.165a15.1 15.1 0 0 1 4.463 10.717v1.801c0 4.02-1.605 7.875-4.463 10.717l-2.219 2.208c-6.104 6.072-14.936 8.615-23.334 6.624a30.6 30.6 0 0 0-7.39-.819c-16.329.176-29.72 13.391-30.018 29.631-.315 17.123 13.7 31.067 30.912 30.76 16.21-.289 29.454-13.422 29.795-29.545.053-2.52-.205-4.97-.737-7.317-1.874-8.255.722-16.885 6.737-22.87l2.486-2.473a15.28 15.28 0 0 1 10.774-4.439h1.811c4.041 0 7.917 1.597 10.775 4.439l1.066 1.06c6.2 6.167 8.709 15.119 6.57 23.577a30.2 30.2 0 0 0-.902 8.244c.454 16.033 13.66 29.033 29.783 29.324 17.211.311 31.226-13.627 30.919-30.745-.293-16.314-13.794-29.564-30.198-29.647z"></path>
                  </g>
                </svg>
                <h2 className="md:text-2xl md:w-2/3 text-3xl">
                  Attention to Detail
                </h2>
              </div>
              <p className="flex-1 font-sans text-xl md:pr-24 lg:text-[16px] leading-tight tracking-wide">
                We uphold the highest standards of attention to detail in every
                aspect of your travel experience.
              </p>
            </div>

            <hr className=" border-black" />
            <div className="flex flex-col md:flex-row justify-center  gap-6 md:gap-8">
              <div className="md:w-1/2 gap-8 flex flex-col md:flex-row justify-between ">
                <svg
                  preserveAspectRatio="none"
                  data-bbox="19.999 19.999 159.999 159.999"
                  viewBox="19.999 19.999 159.999 159.999"
                  height="65"
                  width="65"
                  xmlns="http://www.w3.org/2000/svg"
                  data-type="shape"
                  role="presentation"
                  aria-hidden="true"
                  aria-label=""
                >
                  <g>
                    <path d="M149.797 119.603a30.6 30.6 0 0 0-6.482.658c-8.192 1.731-16.703-.889-22.625-6.779l-2.806-2.791a15.1 15.1 0 0 1-.012-21.422l2.773-2.759c5.928-5.896 14.449-8.514 22.647-6.775 2.089.443 4.258.672 6.483.662 16.412-.072 29.926-13.325 30.218-29.648.306-17.117-13.708-31.055-30.918-30.744-16.115.291-29.319 13.279-29.783 29.305a30 30 0 0 0 .896 8.242c2.131 8.452-.382 17.394-6.576 23.555l-1.961 1.95a15.28 15.28 0 0 1-10.774 4.439 15.28 15.28 0 0 1-10.774-4.439l-3.382-3.365c-6.011-5.979-8.609-14.6-6.742-22.849.531-2.346.787-4.796.732-7.314-.351-16.116-13.593-29.236-29.796-29.525-17.211-.307-31.225 13.637-30.911 30.758.298 16.248 13.701 29.467 30.038 29.632a30.6 30.6 0 0 0 7.391-.824c8.404-1.999 17.246.541 23.356 6.619l2.176 2.165a15.1 15.1 0 0 1 4.463 10.717v1.801c0 4.02-1.605 7.875-4.463 10.717l-2.219 2.208c-6.104 6.072-14.936 8.615-23.334 6.624a30.6 30.6 0 0 0-7.39-.819c-16.329.176-29.72 13.391-30.018 29.631-.315 17.123 13.7 31.067 30.912 30.76 16.21-.289 29.454-13.422 29.795-29.545.053-2.52-.205-4.97-.737-7.317-1.874-8.255.722-16.885 6.737-22.87l2.486-2.473a15.28 15.28 0 0 1 10.774-4.439h1.811c4.041 0 7.917 1.597 10.775 4.439l1.066 1.06c6.2 6.167 8.709 15.119 6.57 23.577a30.2 30.2 0 0 0-.902 8.244c.454 16.033 13.66 29.033 29.783 29.324 17.211.311 31.226-13.627 30.919-30.745-.293-16.314-13.794-29.564-30.198-29.647z"></path>
                  </g>
                </svg>
                <h2 className="md:text-2xl md:w-2/3 text-3xl">
                  Local Expertise
                </h2>
              </div>
              <p className="flex-1 font-sans text-xl md:pr-24 lg:text-[16px] leading-tight tracking-wide">
                We embrace local expertise and cultural knowledge to deliver
                enriching and authentic travel experiences.
              </p>
            </div>
          </div>
        </div>

        {/*--------------- Clients ------------- */}
        <div className="max-w-7xl  flex flex-col gap-20 py-12 md:py-20 px-7 mx-auto ">
          <div className="flex flex-col justify-between gap-4">
            <div className="flex flex-col md:w-1/2 gap-6 md:gap-8">
              <h2 className="md:text-6xl text-4xl">Clients</h2>
              <p className="text-xl ">Our Explorers </p>
              <p className="text-2xl ">
                E. Reyes has served a diverse range of clients, from solo
                travelers to travel enthusiasts, with dedication and expertise.
              </p>
            </div>
          </div>
           
          <div className="flex ">
            <div className="lg:w-1/2 md:w-1/3"></div>
           <div className="flex flex-wrap justify-between md:w-2/3 lg:w-1/2 md:justify-end gap-8 ">
              
          
            <h1 className="md:text-4xl text-2xl w-1/4  pb-9  pt-4">
              Company
            </h1>
            <h1 className="md:text-4xl text-2xl w-1/4  pb-9  row-start-1 pt-4">
              Company
            </h1>
            <h1 className="md:text-4xl text-2xl w-1/4  pb-9 pt-4">
              Company
            </h1>
            <h1 className="md:text-4xl text-2xl w-1/4  pb-9 pt-4">
              Company
            </h1>
            <h1 className="md:text-4xl text-2xl w-1/4  pb-9 pt-4">
              Company
            </h1>
            <h1 className="md:text-4xl text-2xl w-1/4  pb-9 pt-4">
              Company
            </h1>

        </div>
          </div>
        </div>

        {/*------------ Testimonials -------------*/}
        <div className="  text-black pb-16 bg-[#ebe9e2] ">
          <div className="max-w-7xl  flex flex-col gap-12 py-12 md:py-20 px-7 mx-auto ">
            <div className="flex flex-col md:w-1/2 gap-6 mb-16 md:gap-8">
              <h2 className="md:text-6xl text-4xl">Testimonials</h2>
              <p className="text-2xl ">
                Our clients trust E. Reyes for their travel adventures. See what
                they have to say about our experiences:
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center  md:pb-10 gap-6 md:gap-8">
              <div className="md:w-1/2 gap-6 flex md:flex-row flex-col md:justify-end ">
                <h2 className="md:text-2xl md:w-2/3 w-full text-3xl">
                  Samantha Johnson
                </h2>
              </div>
              <p className="flex-1 font-sans text-xl md:text-[18px] leading-tight tracking-wide">
                "E. Reyes' tailored itineraries have transformed our travel
                experiences, providing authenticity and cultural immersion."
              </p>
            </div>

            <hr className=" border-black" />
            <div className="flex flex-col md:flex-row justify-center  md:pb-10 gap-6 md:gap-8">
              <div className="md:w-1/2 gap-6 flex md:flex-row flex-col md:justify-end ">
                <h2 className="md:text-2xl md:w-2/3 w-full text-3xl">
                  Ali Khan
                </h2>
              </div>
              <p className="flex-1 font-sans text-xl md:text-[18px] leading-tight tracking-wide">
                "Passion and authenticity define E. Reyes' travel experiences. A
                reliable partner for our adventures."
              </p>
            </div>

            <hr className=" border-black" />
            <div className="flex flex-col md:flex-row justify-center  md:pb-10 gap-6 md:gap-8">
              <div className="md:w-1/2 gap-6 flex md:flex-row flex-col md:justify-end ">
                <h2 className="md:text-2xl md:w-2/3 w-full text-3xl">
                  Maria Santos
                </h2>
              </div>
              <p className="flex-1 font-sans text-xl md:text-[18px]  leading-tight tracking-wide">
                "Impressed by E. Reyes' attention to detail and commitment to
                ensuring authentic and immersive travel experiences."
              </p>
            </div>

            <hr className=" border-black" />
          </div>
        </div>

        {/*-------------- Contact US ---------------*/}
        <div className=" text-white bg-[#445D4A] ">
          <div className="max-w-7xl  flex flex-col gap-12 py-12 md:py-20 px-7 mx-auto ">
            <div className="flex flex-col md:w-1/2 gap-6  md:gap-8">
              <h2 className="md:text-6xl text-4xl">Contact Us</h2>
              <p className="text-xl ">
                Feel free to reach out to us for any inquiries or to start
                crafting your dream getaway. We are here to assist you.
              </p>
            </div>
            <div className="grid col-span-2">
              <form className="col-start-1 md:w-1/2 flex flex-col gap-6 text-white">
                <div className="flex w-full items-center gap-6">
                  <div className="w-full">
                    <label className="block pb-2">First Name*</label>
                    <input className="bg-transparent w-full rounded-medium border p-2" />
                  </div>
                  <div className="w-full">
                    <label className="block pb-2">Last Name*</label>
                    <input className="bg-transparent w-full rounded-medium border p-2" />
                  </div>
                </div>
                <div>
                  <label className="block pb-2">Email*</label>
                  <input
                    type="email"
                    className="bg-transparent w-full rounded-medium border p-2"
                  />
                </div>
                <div>
                  <label className="block pb-2">Phone</label>
                  <input
                    type="number"
                    className="bg-transparent w-full rounded-medium border p-2"
                  />
                </div>
                <div>
                  <label className="block pb-2">Message</label>
                  <textarea
                    rows={3}
                    className="bg-transparent w-full rounded-medium  border p-2"
                  />
                </div>
                <div className="flex justify-end">
                  <Button
                    variant="bordered"
                    className="text-white w-1/2 border text-lg"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
