layerNumber = 5;
boxNumber = layerNumber + 1;


var basicInfo = {
  boxObj: [],
  position: [{
    x: 0,
    y: 0,
    z: 0
  }, {
    x: 250,
    y: 130,
    z: 0
  }, {
    x: 500,
    y: 260,
    z: -100
  }, {
    x: 750,
    y: 390,
    z: -200
  }, {
    x: 600,
    y: 260,
    z: -400
  }, {
    x: 1200,
    y: 300,
    z: 400
  }],
  rotation: [{
    x: 0,
    y: 270,
    z: 0
  }, {
    x: 0,
    y: 270,
    z: 0
  }, {
    x: 0,
    y: 270,
    z: 0
  }, {
    x: 0,
    y: 270,
    z: 0
  }, {
    x: 0,
    y: 270,
    z: 0
  }, {
    x: 0,
    y: 180,
    z: 0
  }]
};

var cam = document.querySelector('#c');
var camId = document.querySelector('#cam');
cam.setAttribute('rotation', basicInfo.rotation[0]);
cam.setAttribute('position', basicInfo.position[0]);

camId.addEventListener('componentchanged', function(evt) {
  console.log(evt.detail);
  console.log(evt.detail.name);
  console.log(typeof(evt));
  console.log(evt.detail.newData);
  if (evt.detail.state === 'selected') {
    console.log('Entity now selected!');
  }
});


for (i = 0; i < boxNumber; ++i) {
  basicInfo.boxObj.push(document.querySelector('#box0' + (i + 1)));
  basicInfo.boxObj[i].setAttribute('position', basicInfo.position[i]);
  basicInfo.boxObj[i].addEventListener('click', addClickListener(i));
}


function addClickListener(i) {
  return function() {
    document.querySelector('#sky')
      .setAttribute(
        'src', '#skyTexture' + (i + 1)
      );
    cam.setAttribute('position', basicInfo.position[i]);
    cam.setAttribute('rotation', basicInfo.rotation[i]);
  };
}