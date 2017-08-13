layerNumber = 3;
boxNumber = layerNumber + 1;
var basicInfo = {
  name: [],
  position: [],
  rotation: []
};
for (i = 0; i < boxNumber; ++i) {
  basicInfo.name.push(document.querySelector('#box0' + num.toString(i)));
}

var cam = document.querySelector('#c');
var c2 = document.querySelector('#c2');

var boxAry = [
  basicInfo.name[0],
  basicInfo.name[1],
  basicInfo.name[2],
  basicInfo.name[3]
];

var caja1 = boxAry[0];
var caja2 = boxAry[1];
var caja3 = boxAry[2];
var caja4 = boxAry[3];
var caja1Position = {
  x: 0,
  y: 0,
  z: 0
};
var caja2Position = {
  x: 250,
  y: 130,
  z: 0
};
var caja3Position = {
  x: 500,
  y: 260,
  z: -100
};
var caja4Position = {
  x: 750,
  y: 390,
  z: -200
};
var caja1Rotation = {
  x: 0,
  y: 270,
  z: 0
};
var caja2Rotation = {
  x: 0,
  y: 270,
  z: 0
};
var caja3Rotation = {
  x: 0,
  y: 270,
  z: 0
};
cam.setAttribute('rotation', caja1Rotation);
cam.setAttribute('position', caja1Position);
caja1.setAttribute('position', caja1Position);
caja2.setAttribute('position', caja2Position);
caja3.setAttribute('position', caja3Position);
caja4.setAttribute('position', caja4Position);
caja1.addEventListener('click', function() {
  document.querySelector('#sky')
    .setAttribute(
      'src', '#skyTexture1'
    );
  cam.setAttribute('position', caja1Position);
  cam.setAttribute('rotation', caja1Rotation);
});
caja2.addEventListener('click', function() {
  document.querySelector('#sky')
    .setAttribute(
      'src', '#skyTexture2'
    );
  cam.setAttribute('position', caja2Position);
  cam.setAttribute('rotation', caja2Rotation);
});
caja3.addEventListener('click', function() {
  document.querySelector('#sky')
    .setAttribute(
      'src', '#skyTexture3'
    );
  cam.setAttribute('position', caja3Position);
  cam.setAttribute('rotation', caja3Rotation);
});