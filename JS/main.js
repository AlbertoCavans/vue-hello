const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "Hello world!",
      successClass: "text-success",
      photoHello: `./img/helloimg.jpg`,
    };
  },
}).mount("#app");
