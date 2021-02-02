<template>
  <div class="about">
    <h1 class="about__header">NASA 🌌</h1>
    <div class="about__description">
      <h4>What Does NASA Do?</h4>
      <p>Many people know something about NASA’s work. But most probably have no
        idea about how many different things the agency does. Astronauts in orbit
        conduct scientific research. Satellites help scientists learn more about
        Earth. Space probes study the solar system and beyond. New developments
        improve air travel and other aspects of flight. NASA is also beginning
        a new program to send humans to explore the Moon and Mars. In addition
        to those major missions, NASA does many other things. The agency shares
        what it learns so that its information can make life better for people
        worldwide. For example, companies can use NASA discoveries to create
        new <strong>spinoff</strong> products.</p>
      <p>NASA helps teachers prepare students who will be the engineers, scientists,
        astronauts and other NASA workers of the future. They will be the adventurers
        who will continue exploration of the solar system and universe. NASA has a
        tradition of investing in programs and activities that inspire students, educators,
        families and communities in the excitement and discovery of exploration. NASA offers
        training to help teachers learn new ways to teach science, technology,
        engineering and mathematics. The agency also involves students in NASA missions
        to help them get excited about learning.</p>
      <h4>Who Works for NASA?</h4>
      <p>NASA’s Headquarters is in Washington, D.C. The agency has nine centers,
        the Jet Propulsion Laboratory and seven test and research facilities located
        in several states around the country. More than 17,000 people work for NASA.
        Many more people work with the agency as government contractors. These people
        are hired by companies that NASA pays to do work. The combined workforce
        represents a variety of jobs. Astronauts may be the best-known NASA employees,
        but they only represent a small number of the total workforce. Many NASA workers
        are scientists and engineers. But people there hold many other jobs, too,
        from secretaries to writers to lawyers to teachers.</p>
      <h4>Words to Know</h4>
      <p>Spinoff: a technology or product that was originally developed for the space
        program. For example, the first smoke detector was made by a company for NASA
        to use on Skylab, America's first space station. Now smoke detectors for the
        home are a spinoff product.</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'About',
};
</script>
<style lang="scss">
  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 20px 0 20px;
    &__header {
      text-align: center;
      font-weight: 500;
      text-transform: uppercase;
    }

    &__description {
      max-width: 1000px;
    }
  }
</style>
