if (Meteor.isClient) {
  Template.body.helpers({
    projects: [
      {title: "Armada",
        text: "Monafide is currently developing Armadas iOS-app. Focus will be on better design, more features and stuff. This will make the experience at Armada 2015 better than ever.",
        images: [
          {url: 'img/armada/img1.png', cols: 4},
          {url: 'img/armada/img2.png', cols: 4},
          {url: 'img/armada/img3.png', cols: 4}
         ],
         isEven: false
        },
      {
        title: "Xlnc Hockey",
        text: "During the fall of 2014 Monafide developed an app for making hockey training more effective. The app was developed together with WeMeMove and XLNC Hockey.",
        images: [
          {url: 'img/xlnc hockey/img1.png', cols: 4},
          {url: 'img/xlnc hockey/img2.png', cols: 4},
          {url: 'img/xlnc hockey/img3.png', cols: 4}
         ],
         isEven: true
        },
      {
        title: "Allsvenskan",
        text: "Sami is developing an app for following swedish fotball in his spare time. Features are live score, game schedules and stuff.",
        images: [
          {url: 'img/allsvenskan/img1.png', cols: 4},
          {url: 'img/allsvenskan/img2.png', cols: 4},
          {url: 'img/allsvenskan/img3.png', cols: 4}
         ],
         isEven: false
        },
      {
        title: "Raspberry Pi",
        text: "During Ericsson E-Hack 2015 we developed a simple application for displaying temperature and camera images collected from a cluster of Raspberry Pis.",
        images: [
          {url: 'img/raspberry pi/img1.png', cols: 4},
          {url: 'img/raspberry pi/img2.png', cols: 8}
         ],
         isEven: true
         }]
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
