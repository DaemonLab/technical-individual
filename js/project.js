Vue.component("project-component", {
  data: function() {
    return {
      projects:{
"2017":[    
 {
          image: 'https://pclubiiti.github.io/img/project/game1.png',
          imagealt: 'game1',
          modalhref: '#projectModal1',
          modalhreftitle: 'projectModal1',
          title: 'Infinite Runner',
          content: 'The game is an infinite runner with the main objective of collecting as many bananas as possible. The game uses Unity Engine.',
          github: 'https://github.com/sreevatsank1999/Project_M',
          date: '21st july 2017',
          domain: 'Game Development',
        },
        {
          image: 'https://pclubiiti.github.io/img/project/web1.svg',
          imagealt: 'web1',
          modalhref: '#projectModal2',
          modalhreftitle: 'projectModal2',
          title: 'Q and A forum',
          content: 'This is a question answer web app like Quora where one can share his/her knowledge/experience in the form of text or pictures. ',
          github: 'https://github.com/Mohit-Nathrani/question-answer-site',
          date: '21st july 2017',
          domain: 'Full Stack Development',
        },
        {
          image: 'https://pclubiiti.github.io/img/project/software1.svg',
          imagealt: 'software1',
          modalhref: '#projectModal3',
          modalhreftitle: 'projectModal3',
          title: 'Rave Media Player',
          content: 'A media player with an intuitive media library management capabilities built on Python and Qt.',
          github: 'https://github.com/kanishkarj/rave',
          date: '21st july 2017',
          domain: 'Software Development',
        },
        {
          image: 'https://pclubiiti.github.io/img/project/web2.svg',
          imagealt: 'web1',
          modalhref: '#projectModal4',
          modalhreftitle: 'projectModal4',
          title: 'Local Quora',
          content: 'This is a question answer web app like Quora where one can share his/her knowledge/experience in the form of text or pictures. ',
          github: 'https://github.com/Harsh860/IITI-SOC',
          date: '21st july 2017',
          domain: 'Full Stack Development',
        },
        {
          image: 'https://pclubiiti.github.io/img/project/web3.svg',
          imagealt: 'web3',
          modalhref: '#projectModal5',
          modalhreftitle: 'projectModal5',
          title: 'Query',
          content: 'This is a question answer web app like Quora where one can share his/her knowledge/experience in the form of text or pictures. ',
          github: 'https://github.com/kpranav1998/soc-project',
          date: '21st july 2017',
          domain: 'Full Stack Development',
        },
        {
          image: 'https://pclubiiti.github.io/img/project/software2.svg',
          imagealt: 'Software2',
          modalhref: '#projectModal6',
          modalhreftitle: 'projectModal6',
          title: 'Javafx Media Player',
          content: 'Music player built using JavaFX stylized using CSS sheets. The player can be used to pause/play and reload songs.',
          github: 'https://github.com/eltoro007/MediaPlayer',
          date: '21st july 2017',
          domain: 'Software Development',
        },
        {
          image: 'https://pclubiiti.github.io/img/project/ml1.svg',
          imagealt: 'ml1',
          modalhref: '#projectModal7',
          modalhreftitle: 'projectModal7',
          title: 'Computer learns to play mario.',
          content: 'A machine learning algorithm that successfully learns to play Super Mario 64, after learning from test runs played by us.',
          github: 'https://github.com/Mohit-Nathrani/question-answer-site',
          date: '21st july 2017',
          domain: 'Machine Learning',
        },
],
"2018": [
	{
          image: 'https://pclubiiti.github.io/img/project/software2.svg',
          imagealt: 'ml1',
          modalhref: '#projectModal7',
          modalhreftitle: 'projectModal7',
          title: 'Mess@IITI',
          content: 'The Mobile Application helps students at IIT-I to buy and use mess e-coupons based on per meal scheme.The e-coupons can also be transferred from one student to another.',
          github: 'https://github.com/Deluser-7/Mess',
          date: '21st july 2017',
          domain: 'Machine Learning',
        },
	{
          image: 'https://pclubiiti.github.io/img/project/game1.png',
          imagealt: 'ml1',
          modalhref: '#projectModal7',
          modalhreftitle: 'projectModal7',
          title: 'Nightmare',
          content: 'Nightmare is survival shooter video game developed using Unity3D engine and is written in C#. Its a simple arcade style shooter where you kill enemies and earn points and create High Score. ',
          github: 'https://github.com/Ronak-B/IITISoC_Project/tree/master/Survival%20Shooter',
          date: '21st july 2017',
          domain: 'Machine Learning',
        },
	{
          image: '../img/project/VueLogo.png',
          imagealt: 'ml1',
          modalhref: '#projectModal7',
          modalhreftitle: 'projectModal7',
          title: 'Technical Clubs Website',
          content: 'We created the websites for Programming, Electronics and CAE club.',
          github: 'https://github.com/DaemonLab/technical-individual',
          date: '21st july 2017',
          domain: 'Machine Learning',
        },
	{
          image: '../img/project/VueLogo.png',
          imagealt: 'ml1',
          modalhref: '#projectModal7',
          modalhreftitle: 'projectModal7',
          title: 'IITI MESS MANAGEMENT',
          content: 'It is a client-side web-development project which facilitates buying and selling of food-coupons online. ',
          github: 'https://github.com/vandan-agarwal/IITI-MESS-MANAGEMENT',
          date: '21st july 2017',
          domain: 'Machine Learning',
        },
	{
          image: '../img/project/VueLogo.png',
          imagealt: 'ml1',
          modalhref: '#projectModal7',
          modalhreftitle: 'projectModal7',
          title: 'The Literary club website',
          content: 'The Literary Club website is made as a part of the IITISoC project under the web development section. ',
          github: 'https://github.com/Ayyk-123/Ayyk- 123.github.io',
          date: '21st july 2017',
          domain: 'Machine Learning',
        },
      ]}
    };
  },
  template: `
	<div>
	<h1 class="display-4 text-white py-2">IITSoC 2018</h1>
    <div class="team row">

	
      <div class="col-lg-4 d-flex align-items-stretch" v-for="project in projects['2018']" :key="project.id">
        <div class="card">
          <div class="profile-container">
            <img class="card-img-top" style="max-height:5em;width:unset;" :src="project.image" alt="">
          </div>
          <div class="card-body">
            <h3 class="card-title">{{project.title}}</h3>
            <p class="card-text mb-2">{{project.content}}</p>
            <a v-bind:href="project.github"><i class="fab fa-github"></i> </a>
          </div>
        </div>
      </div>	
</div>

<h1 class="display-4 text-white py-2">IITSoC 2017</h1>
 <div class="team row">
      <div class="col-lg-4 d-flex align-items-stretch" v-for="project in projects['2017']" :key="project.id">
        <div class="card">
          <div class="profile-container">
            <img class="card-img-top" style="max-height:5em;width:unset;" :src="project.image" alt="">
          </div>
          <div class="card-body">
            <h3 class="card-title">{{project.title}}</h3>
            <p class="card-text mb-2">{{project.content}}</p>
            <a v-bind:href="project.github"><i class="fab fa-github"></i> </a>
          </div>
        </div>
      </div>
    </div>
	</div>
  `
});

new Vue({
  el: "#app"
});
