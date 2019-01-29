//******for index3.html *****//
//counter for image in drag and drop
var imgCounter=1;
var clone='';
var dropzone=document.getElementById('dropzone');

dropzone.style.width=`${window.innerWidth}px`;
dropzone.style.height=`${window.innerHeight-175-60}px`;





function offset(el){
    var rect=el.getBoundingClientRect(),
        scrollRight=window.pageXOffset||document.documentElement.scrollLeft,
        scrollTop=window.pageYOffset||document.documentElement.scrollTop;
    
    return {top:Math.floor(rect.top+scrollTop),left:Math.floor(rect.left+scrollRight)}
}

//images for content

function myImg(source){
    const picDiv=document.createElement('div');
    picDiv.className='d-inline';
    picDiv.style.padding='0px';
 
    
    
    const imgContent=document.createElement('img');
    imgContent.src=source;
    imgContent.width='50';
    imgContent.id='drag-1';
    picDiv.appendChild(imgContent);
    
    
    return picDiv;
}




var arrayCount=14;

function dotClicked(e){
    
            
//        console.log(e.target.parentElement.parentElement.id);
        if(e.target.id=='btn1'){
           e.target.parentElement.parentElement.style.height='175px';
            document.getElementById('shiftRight').removeAttribute('hidden');
            document.getElementById('imgDiv').innerHTML=''; 
            
            for(var i=1;i<=arrayCount;i++){
               
               document.getElementById('imgDiv').appendChild(myImg('../img/Products/'+i+'.gif'));
                
                
            }

       }else if(e.target.id=='btn2'){
           e.target.parentElement.parentElement.style.height='175px';
           document.getElementById('shiftRight').setAttribute('hidden',true);
           document.getElementById('imgDiv').innerHTML=''; 
           for(var i=1;i<=13;i++){
               document.getElementById('imgDiv').appendChild(myImg('../img/characters/'+i+'.gif'));
               
              

            }
       }else if(e.target.id=='btn3'){
           e.target.parentElement.style.height='165px';
       }else if(e.target.id=='changeRight'){
           imgCounter++;
           if(imgCounter>=6){
               imgCounter=1;
           }
           document.getElementById('mypic').setAttribute('src','../img/pic'+imgCounter+'.jpg');
        }else if(e.target.id=='changeLeft'){
           imgCounter--;
           if(imgCounter<=0){
               imgCounter=5;
           }
           document.getElementById('mypic').setAttribute('src','../img/pic'+imgCounter+'.jpg');
       }else if(e.target.id=='shiftRight'){
           document.getElementById('imgDiv').innerHTML=''; 
           
           if(arrayCount==46){
                arrayCount=0;
           }
           for(var i=arrayCount+1;i<=arrayCount+14;i++){
               document.getElementById('imgDiv').appendChild(myImg('../img/Products/'+i+'.gif'));
//               console.log(i);
               if(i==46){
                    
                   break;
               }
           }
           if(arrayCount==42){
               arrayCount+=4;
           }
           else{
               arrayCount+=14;
           }
           
       }else if(e.target.id=='drag-1'){
       
           var original = event.currentTarget;
           clone = event.target.cloneNode(true);
          var x = clone.offsetLeft;
          var y = clone.offsetTop;
          clone.setAttribute('clonable','false');
          clone.setAttribute('id','clonePic');
          clone.setAttribute('class','draggable');
          clone.style.position = "absolute";
          clone.style.left = original.offsetLeft+"px";
          clone.style.top = original.offsetTop+"px";
//           clone.style.background="url('../img/bg.png')";
//           clone.style.backgroundSize=e.target.width+"px "+e.target.height+"px";
          document.getElementById('dropzone').appendChild(clone);
           
           document.getElementById('clonePic').addEventListener('touchend',function(e){
               
               e.target.style.background="url('../img/bg.png')";
                e.target.style.backgroundSize=e.target.width+"px "+e.target.height+"px";
               console.log(e.target.style.backgroundImage)
           },false);
           

       }else if(e.target.id=='clonePic'){
           e.target.style.background="url('../img/bg.png')";
           e.target.style.backgroundSize=e.target.width+"px "+e.target.height+"px";
           
//           let centerX=e.target.offsetLeft+e.target.offsetWidth/2;
//           let centerY=e.target.offsetTop+e.target.offsetHeight/2;
//           
//           let right=e.target.offsetLeft;
//           let top=e.target.offsetTop;
//           
//           var divOffset=offset(e.target);
//           if((e.clientX===divOffset.left||e.clientX===divOffset.left-1||e.clientX===divOffset.left-2||e.clientX===divOffset.left-3||e.clientX===divOffset.left-4) && (e.clientY===divOffset.top||e.clientY===divOffset.top+1||e.clientY===divOffset.top+2||e.clientY===divOffset.top+3||e.clientY===divOffset.top+4)){
//               console.log('nailed it');
//           }else{
//               console.log('no');
//           }
//           console.log(e.clientX+' '+e.clientY);
//           
//           console.log(divOffset.left,divOffset.top);
//           console.log(right+' '+top);
//           console.log(e.clientX+' '+e.clientY);
//           console.log(right+' '+top);
       }else if(e.target.id==='toggleSound'){
           if(e.target.src==='http://127.0.0.1:59719/img/sound-off.png'){
              e.target.setAttribute('src','img/sound-on.png');
           }else{
              e.target.setAttribute('src','img/sound-off.png');
           }
       }
}

function unfocused(e){
    if(e.target.id=='clonePic'){
        setTimeout(()=>{
            e.target.style.background="";
        },2000)
           
           
       }
}

function focused(e){
    var divOffset=offset(e.target);
    if(e.target.id=='clonePic'){
           e.target.style.background="";
//           
//        if((e.clientX===divOffset.left||e.clientX-1===divOffset.left||e.clientX-2===divOffset.left||e.clientX-3===divOffset.left||e.client-4===divOffset.left||e.clientX-5===divOffset.left||e.clientX-6===divOffset.left||e.clientX-7===divOffset.left||e.clientX-8===divOffset.left||e.clientX-9===divOffset.left||e.clientX-10===divOffset.left) && (e.clientY===divOffset.top||e.clientY-1===divOffset.top||e.clientY-2===divOffset.top||e.clientY-3===divOffset.top||e.clientY-4===divOffset.top||e.clientY-5===divOffset.top||e.clientY-6===divOffset.top||e.clientY-7===divOffset.top||e.clientY-8===divOffset.top||e.clientY-9===divOffset.top||e.clientY-10===divOffset.top)){
//               console.log('nailed it');
//                
//  
//           }else{
//               console.log('no');
//           }
////           console.log(e.clientX+' '+e.clientY);
////           
////           console.log(divOffset.left,divOffset.top);
////           console.log(right+' '+top);
////           console.log(e.clientX+' '+e.clientY);
////           console.log(right+' '+top);
//        console.log('clientX='+e.clientX+' clientY='+e.clientY);
//        console.log(divOffset.left,divOffset.top);
        
       
       }
    
}

function changeClass(e){
    var divOffset=offset(e.target);
    if(e.target.id=='clonePic'){
        if((e.clientX===divOffset.left||e.clientX-1===divOffset.left||e.clientX-2===divOffset.left||e.clientX-3===divOffset.left||e.client-4===divOffset.left||e.clientX-5===divOffset.left||e.clientX-6===divOffset.left||e.clientX-7===divOffset.left||e.clientX-8===divOffset.left||e.clientX-9===divOffset.left||e.clientX-10===divOffset.left) && (e.clientY===divOffset.top||e.clientY-1===divOffset.top||e.clientY-2===divOffset.top||e.clientY-3===divOffset.top||e.clientY-4===divOffset.top||e.clientY-5===divOffset.top||e.clientY-6===divOffset.top||e.clientY-7===divOffset.top||e.clientY-8===divOffset.top||e.clientY-9===divOffset.top||e.clientY-10===divOffset.top)){
                   e.target.className='draggableRotate';
                    console.log(e.target.className);
               }
    }
}



window.addEventListener('mouseover',changeClass);
window.addEventListener('mousedown',focused);
window.addEventListener('mouseout',unfocused);
window.addEventListener('click',dotClicked);



/////////////////////////////

interact('.draggable')  
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    // enable autoScroll
    autoScroll: true,
    // call this function on every dragmove event
    onmove: dragMoveListener,
  }).on('tap', function (event) {
var interaction = event.interaction;
if (interaction.pointerIsDown && !interaction.interacting() && event.currentTarget.getAttribute('clonable') != 'false') {
  var original = event.currentTarget;
  clone = event.currentTarget.cloneNode(true);
  var x = clone.offsetLeft;
  var y = clone.offsetTop;
  clone.setAttribute('clonable','false');
  clone.setAttribute('id','clonePic');
  clone.style.position = "absolute";
  clone.style.left = original.offsetLeft+"px";
  clone.style.top = original.offsetTop+"px";
  document.getElementById('dropzone').appendChild(clone);
  interaction.start({ name: 'drag' },event.interactable,clone);
    console.log(clone.id);
}
});

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

//      console.log('x='+x+' y='+y)
    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

// enable draggables to be dropped into this
interact('.dropzone').dropzone({  
  // Require a 50% element overlap for a drop to be possible
  overlap: 0.50,

  // listen for drop related events:

  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.classList.add('drop-active');
  },
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target');
  },
  ondragleave: function (event) {
    // remove the drop feedback style
    event.target.classList.remove('drop-target');
  },
  ondrop: function (event) {
    event.relatedTarget.textContent = 'Dropped';
  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active');
    event.target.classList.remove('drop-target');
  }
});

//interact('.draggable')
//  .resizable({
//    // resize from all edges and corners
//    edges: {  right: true,  top: true },
//    preserveAspectRatio:true,
//    // keep the edges inside the parent
//    restrictEdges: {
////      outer: 'parent',
////      endOnly: true,
//    },
//
//    // minimum size
//    restrictSize: {
//      min: { width: 100, height: 100 },
//    },
//
//    inertia: true,
//  })
//  .on('resizemove', function (event) {
//    var target = event.target,
//        x = (parseFloat(target.getAttribute('data-x')) || 0),
//        y = (parseFloat(target.getAttribute('data-y')) || 0);
//
//    // update the element's style
//    target.style.width  = event.rect.width + 'px';
//    target.style.height = event.rect.height + 'px';
//
//    // translate when resizing from top or left edges
//    x += event.deltaRect.left;
//    y += event.deltaRect.top;
//
//    target.style.webkitTransform = target.style.transform =
//        'translate(' + x + 'px,' + y + 'px)';
//
//    target.setAttribute('data-x', x);
//    target.setAttribute('data-y', y);
//    target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height);
//  });
//
//interact('.draggableRotate')
//.draggable({
//  onstart: function (event) {
//    const element = event.target;
////    const rect = element.getBoundingClientRect();
//
//    // store the center as the element has css `transform-origin: center center`
//    element.dataset.centerX = event.target.offsetLeft+event.target.offsetWidth/2;
//    element.dataset.centerY = event.target.offsetTop+event.target.offsetHeight/2;
//    // get the angle of the element when the drag starts
//    element.dataset.angle = getDragAngle(event);
//  },
//  onmove: function (event) {
//    var element = event.target;
//    var center = {
//      x: parseFloat(event.target.offsetLeft+event.target.offsetWidth/2) ,
//      y: parseFloat(event.target.offsetTop+event.target.offsetHeight/2) ,
//    };
//    var angle = getDragAngle(event);
//
//    // update transform style on dragmove
//    element.style.transform = 'rotate(' + angle + 'rad' + ')';
//  },
//  onend: function (event) {
//    const element = event.target;
//
//    // save the angle on dragend
//    element.dataset.angle = getDragAngle(event);
//  },
//})
//
//
//function getDragAngle(event) {
//  var element = event.target;
//  var startAngle = parseFloat(element.dataset.angle);
//  var center = {
//    x: parseFloat(event.target.offsetLeft+event.target.offsetWidth/2),
//    y: parseFloat(event.target.offsetTop+event.target.offsetHeight/2),
//  };
//  var angle = Math.atan2(center.y - event.clientY,
//                         center.x - event.clientX);
//
//  return angle - startAngle;
//}

var angle = 0;

interact('#dropzone').gesturable({
  onmove: function (event) {
    var arrow = document.getElementById('clonePic');

    angle += event.da;

    arrow.style.webkitTransform =
    arrow.style.transform =
      'rotate(' + angle + 'deg)';

    document.getElementById('angle-info').textContent =
      angle.toFixed(2) + '\u00b0';
  }
});


  // this is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener;
