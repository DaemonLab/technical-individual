Vue.component("event-component", {
  data: function() {
    return {
      events: [
        {
          id: 1,
          image: "/img/home/events/dbz.jpg",
          title: "DIVIDE BY ZERO 6.0",
          about:
            " Our flagship event, a short duration competitive programming contest.",
          cls: "carousel-item active"
        },
        {
          id: 2,
          image: "/img/home/events/hackathon.jpg",
          title: "Hackathon",
          about:
            " A social coding event to build a new software under the to-be-announced broad themes. Each team can consist of a maximum of 4 people.",
          cls: "carousel-item"
        },
        {
          id: 3,
          image: "/img/home/events/ctf.jpg",
          title: "Capture The Flag",
          about:
            "A Capture the Flag Competition held by Byte Bandits, IIT Indore’s academic CTF team. The team size for the CTF should be a maximum 4 people.",
          cls: "carousel-item"
        },
        {
          id: 4,
          image: "/img/home/events/fool_you.png",
          title: "Fool You!",
          about:
            "A unique programming contest, in which thinking for the solution might still be easier than understanding the problem !",
          cls: "carousel-item"
        }
      ]
    };
  },
  template: `
  <div class="carousel-inner" role="listbox" id="eventsHere">
  <div :class="event.cls" v-for="event in events" :key=event.id>
    <img class="img-fluid" :src="event.image" alt="First slide">
    <div class="carousel-caption">
      <h3 class="display-3">{{event.title}}</h3>
      <p>{{event.about}}</p>
    </div>
  </div>
  </div>
  `
});

new Vue({
  el: "#secondary"
});
