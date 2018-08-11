const members = [
  {
    id: 1,
    name: "GVS AKHIL",
    description: "Competitive Coding",
    img: "https://avatars0.githubusercontent.com/u/21010250?s=460&v=4",
    year: "Third Year",
    linkGit: "https://github.com/vicennial",
    linkLin: ""
  },
  {
    id: 2,
    name: "ASHUTOSH BANG",
    description: "Competitive Programming",
    img: "https://avatars0.githubusercontent.com/u/24517273?s=460&v=4",
    year: "Third Year",
    linkGit: "https://github.com/ashutoshbang",
    linkLin: ""
  },
  {
    id: 3,
    name: "MOHIT NATHRANI",
    description: "Web Development and Competitive Programming",
    img: "https://avatars2.githubusercontent.com/u/30346159?s=460&v=4",
    contact: "9999999999",
    year: "Third Year",
    linkGit: "https://github.com/Mohit-Nathrani",
    linkLin: ""
  },
  {
    id: 4,
    name: "PRIYANSHU",
    description: "Web Development and Competitive Programming",
    img: "https://avatars1.githubusercontent.com/u/28222108?s=460&v=4",
    year: "Third Year",
    linkGit: "https://github.com/priyanshuvarsh",
    linkLin: ""
  },
  {
    id: 5,
    name: "JOSHI NIRANJAN",
    description: "Web and Software Development",
    img: "https://avatars2.githubusercontent.com/u/29325626?s=460&v=4",
    year: "Third Year",
    linkGit: "https://github.com/Niranjan-J",
    linkLin: ""
  },
  {
    id: 6,
    name: "DAANISH MAHAJAN",
    description: "Competitive Programming",
    img: "https://avatars0.githubusercontent.com/u/19322630?s=460&v=4",
    year: "Third Year",
    linkGit: "https://github.com/FireWithin",
    linkLin: ""
  }
];

const heads = [
  {
    id: 1,
    name: "Kanishkar J",
    description: "Club Head",
    img: "https://avatars2.githubusercontent.com/u/22411349?s=460&v=4",
    contact: "9902847087",
    year: "Third Year",
    linkGit: "https://github.com/kanishkarj/",
    linkLin: ""
  },
  {
    id: 2,
    name: "Kumar Abhinav",
    description: "Club Head",
    img: "https://avatars0.githubusercontent.com/u/10851701",
    contact: "9643295944",
    year: "Third Year",
    linkGit: "https://github.com/Abhinav2812",
    linkLin: ""
  }
];

Vue.component("member-component", {
  template: `
  <div class="col-lg-3 d-flex align-items-stretch" style="flex: 0 0 100%;">
    <div class="card" style="width: 100%;">
      <div class="profile-container">
        <img class="card-img-top" :src="member.img" alt="Card image cap">
      </div>
        <div class="card-body h-100 d-flex justify-content-center align-items-stretch align-content-stretch" style="width: 100%; flex-direction: column;">

           <h5 class="card-title d-flex align-items-center justify-content-center" style="flex: 1 1 auto;">{{member.name}}</h5>
            <p class="card-text d-flex align-items-center justify-content-center"  style="flex: 1 1 auto">{{member.description}}</p>
          <p class="card-text mb-2 d-flex justify-content-center align-items-center" style="flex: 1 1 auto;">{{member.year}}</p>
          <div class="d-flex align-items-center justify-content-center" style="flex: 1 1 auto; flex-direction: row;">
          <a :href="member.linkGit"><i class="fab fa-github d-flex justify-content-center align-items-center" style="flex: 1 1 auto;  padding: 0 0.1em;"></i> </a>
          <a :href="member.linkLin"><i class="fab fa-linkedin d-flex justify-content-center align-items-center"  style="flex: 1 1 auto; padding: 0 0.1em;"></i> </a>
          </div>
        </div>
    </div>
  </div>
	`,
  props: {
    member: Object
  }
});

Vue.component("head-component", {
  template: `
	<div class="col-lg-4 d-flex align-items-stretch" style="flex: 0 0 100%;">
    <div class="card" style="width: 100%;">
      <div class="profile-container">
        <img class="card-img-top" :src="head.img" alt="Card image cap">
      </div>
        <div class="card-body h-100 d-flex justify-content-center align-items-stretch align-content-stretch" style="width: 100%; flex-direction: column;">
          <h5 class="card-title d-flex align-items-center justify-content-center" style="flex: 1 1 auto;">{{head.name}}</h5>
          <p class="card-text d-flex align-items-center justify-content-center" style="flex: 1 1 auto;">{{head.description}}</p>
          <p class="card-text mb-2 d-flex justify-content-center" style="flex: 1 1 auto;">{{head.year}}</p>
          <div class="d-flex align-items-center justify-content-center" style="flex: 1 1 auto; flex-direction: row;">
          <a :href="head.linkGit"><i class="fab fa-github d-flex justify-content-center"  style="flex: 1 1 auto; padding: 0 0.1em;"></i> </a>
          <a :href="head.linkLin"><i class="fab fa-linkedin d-flex justify-content-center"  style="flex: 1 1 auto; padding: 0 0.1em;"></i> </a>
          </div>
        </div>
    </div>
  </div>
	`,
  props: {
    head: Object
  }
});

new Vue({
  el: "#app",
  data: {
    members,
    heads
  }
});
