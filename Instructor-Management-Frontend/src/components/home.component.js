
import { Component } from "react";
class Home extends Component {
  render() {
    return (
      <div class="">
        <section class="">
          <div class="text-center bg-white text-gray-800 py-10 px-6">
            <h1 class="text-xl md:text-3xl xl:text-4xl font-bold tracking-tight uppercase mb-8 drop-shadow-md ">Edu Portal<br />
              <span class="text-blue-950 font-serif font-dark  ">Equal Education for All</span>
             
            </h1>
          </div>
        </section>

        <section class="px-36 py-2 mb-5 content-center ">
          <div class="container flex h-96 max-w-7xl flex-col justify-between rounded-lg bg-white dark:bg-neutral-700 drop-shadow-lg md:flex-row">
          <img
  class="rounded-t-lg object-center md:h-96 md:w-1/2 md:rounded-none md:rounded-l-lg"
  src={`${process.env.PUBLIC_URL}/images/educational-portal.jpg`}
  alt="Educational Material"
/>
            <div class="flex flex-col justify-start p-6">
              <p class="leading-6 text-center font-serif font-semibold text-lg max-w-xl  text-dark -600 max-h-60 dark:text-neutral-200">
                <span class="text-3xl font-extrabold">W</span>elcome to EduPortal, your ultimate destination for transformative learning and educational excellence! Our platform opens doors to a world of knowledge through an extensive library of video content, designed to cater to learners of all ages and backgrounds.

At EduPortal, we believe in the power of visual learning and have meticulously curated our content to offer engaging, high-quality educational videos across a wide range of subjects. Whether you're a student aiming for academic success, a professional seeking to upgrade your skills, or a lifelong learner with an insatiable curiosity, our platform is tailored to meet your learning needs.

Dive into topics as diverse as science, humanities, technology, language arts, and much more.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
