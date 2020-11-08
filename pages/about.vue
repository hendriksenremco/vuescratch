<template>
  <div class="container about">
    <h1>About VueScratch</h1>
    <p>
      VueScratch is a site all about building awesome Vue applications.
      Encouraging developers to build more functionality from scratch, without
      the need of an external framework.
    </p>
    <p>
      It is extremely fun to get things done yourself, and it gives you the most
      control over the code.
    </p>
    <p>
      I will be posting small chunks of code which i build for this site, but
      also make some series which covers building bigger applications. I hope
      you will enjoy my content and if you've got some to say to me, use the
      contact form below to contact me.
    </p>

    <contact-form />
  </div>
</template>
<style lang="scss">
.about {
  background: radial-gradient(
      ellipse closest-side,
      rgba($black, 0.75),
      rgba($black, 1)
    ),
    url('~assets/authors/remco.jpg');

  background-repeat: no-repeat;
  background-size: cover;
}
</style>
