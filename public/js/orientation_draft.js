console.log(orientationData);

let newData = sortByAlpha(byIncomeGroup(orientationData,1),'country name');
generateOrientationBefore('#orientationviz1L',newData,5,9,1,false,true);
newData = sortByAlpha(byIncomeGroup(orientationData,2),'country name');
generateOrientationBefore('#orientationviz1LM',newData,5,9,1,false,true);
newData = sortByAlpha(byIncomeGroup(orientationData,3),'country name');
generateOrientationBefore('#orientationviz1UM',newData,5,9,1,false,true);
newData = sortByAlpha(byIncomeGroup(orientationData,4),'country name');
generateOrientationBefore('#orientationviz1H',newData,5,9,1,false,true);


initTrans2 = false;
$(window).scroll(function(){
  if(initTrans2==false){
      console.log('check');
      let topWin = $(window).scrollTop();
      let topElement = $('#state2').offset().top;
      if(topWin>topElement+500){
        newData = sortByAlpha(byIncomeGroup(orientationData,1),'country name');
        $('#orientationviz1L').html('<p class="keylabel"><i class="key lowincome"></i>Low Income</p>');
        generateOrientationBefore('#orientationviz1L',newData,5,9,2,false,true);
        newData = sortByAlpha(byIncomeGroup(orientationData,2),'country name');
        $('#orientationviz1LM').html('<p class="keylabel"><i class="key lowermiddleincome"></i>Lower Middle Income</p>');
        generateOrientationBefore('#orientationviz1LM',newData,5,9,2,false,true);
        newData = sortByAlpha(byIncomeGroup(orientationData,3),'country name');
        $('#orientationviz1UM').html('<p class="keylabel"><i class="key uppermiddleincome"></i>Upper Middle Income</p>');
        generateOrientationBefore('#orientationviz1UM',newData,5,9,2,false,true);
        newData = sortByAlpha(byIncomeGroup(orientationData,4),'country name');
        $('#orientationviz1H').html('<p class="keylabel"><i class="key highincome"></i>High Income</p>');
        generateOrientationBefore('#orientationviz1H',newData,5,9,2,false,true);
        initTrans2=true;
      }
    
  }
});

initTrans3 = false;
$(window).scroll(function(){
  if(initTrans3==false){
      console.log('check');
      let topWin = $(window).scrollTop();
      let topElement = $('#state3').offset().top;
      if(topWin>topElement+500){
        newData = sortByAlpha(byIncomeGroup(orientationData,1),'country name');
        $('#orientationviz1L').html('<p class="keylabel"><i class="key lowincome"></i>Low Income</p>');
        generateOrientationBefore('#orientationviz1L',newData,5,9,3,false,true);
        newData = sortByAlpha(byIncomeGroup(orientationData,2),'country name');
        $('#orientationviz1LM').html('<p class="keylabel"><i class="key lowermiddleincome"></i>Lower Middle Income</p>');
        generateOrientationBefore('#orientationviz1LM',newData,5,9,3,false,true);
        newData = sortByAlpha(byIncomeGroup(orientationData,3),'country name');
        $('#orientationviz1UM').html('<p class="keylabel"><i class="key uppermiddleincome"></i>Upper Middle Income</p>');
        generateOrientationBefore('#orientationviz1UM',newData,5,9,3,false,true);
        newData = sortByAlpha(byIncomeGroup(orientationData,4),'country name');
        $('#orientationviz1H').html('<p class="keylabel"><i class="key highincome"></i>High Income</p>');
        generateOrientationBefore('#orientationviz1H',newData,5,9,3,false,true);
        initTrans3=true;
      }
    
  }
});



initTrans4 = false;
$(window).scroll(function(){
  if(initTrans4==false){
      console.log('check');
      let topWin = $(window).scrollTop();
      let topElement = $('#state4').offset().top;
      if(topWin>topElement-200){
        newData = sortByAlpha(byIncomeGroup(orientationData,1),'country name');
        $('#orientationviz1L').html('<p class="keylabel"><i class="key lowincome"></i>Low Income</p>');
        generateOrientationAfter('#orientationviz1L',newData,5,9,3,false,true);
        newData = sortByAlpha(byIncomeGroup(orientationData,2),'country name');
        $('#orientationviz1LM').html('<p class="keylabel"><i class="key lowermiddleincome"></i>Lower Middle Income</p>');
        generateOrientationAfter('#orientationviz1LM',newData,5,9,3,false,true);
        newData = sortByAlpha(byIncomeGroup(orientationData,3),'country name');
        $('#orientationviz1UM').html('<p class="keylabel"><i class="key uppermiddleincome"></i>Upper Middle Income</p>');
        generateOrientationAfter('#orientationviz1UM',newData,5,9,3,false,true);
        newData = sortByAlpha(byIncomeGroup(orientationData,4),'country name');
        $('#orientationviz1H').html('<p class="keylabel"><i class="key highincome"></i>High Income</p>');
        generateOrientationAfter('#orientationviz1H',newData,5,9,3,false,true);
        initTrans4=true;
      }
  }
});

initTrans5 = false;
$(window).scroll(function(){
  if(initTrans5==false){
      let topWin = $(window).scrollTop();
      let topElement = $('#state5').offset().top;
      if(topWin>topElement-200){
        $('#state1').fadeOut();
      }
  }
});

/*let newData = data.sort(function(a,b){
  let value1 = a['B-Q30-religion-Q12 high']+a['C-D1-rest'];
  let value2 = b['B-Q30-religion-Q12 high']+b['C-D1-rest']
  return value1-value2
});*/

//generateOrientationBefore('#orientationviz1L',newData,16,9,1);
/*
newData = sortByAlpha(byIncomeGroup(orientationData,1),'country name');
generateOrientationBefore('#orientationviz2L',newData,5,9,2,false,true);
newData = sortByAlpha(byIncomeGroup(orientationData,2),'country name');
generateOrientationBefore('#orientationviz2LM',newData,5,9,2,false,true);
newData = sortByAlpha(byIncomeGroup(orientationData,3),'country name');
generateOrientationBefore('#orientationviz2UM',newData,5,9,2,false,true);
newData = sortByAlpha(byIncomeGroup(orientationData,4),'country name');
generateOrientationBefore('#orientationviz2H',newData,5,9,2,false,true);

newData = sortByAlpha(byIncomeGroup(orientationData,1),'country name');
generateOrientationBefore('#orientationviz3L',newData,5,9,3,false,true);
newData = sortByAlpha(byIncomeGroup(orientationData,2),'country name');
generateOrientationBefore('#orientationviz3LM',newData,5,9,3,false,true);
newData = sortByAlpha(byIncomeGroup(orientationData,3),'country name');
generateOrientationBefore('#orientationviz3UM',newData,5,9,3,false,true);
newData = sortByAlpha(byIncomeGroup(orientationData,4),'country name');
generateOrientationBefore('#orientationviz3H',newData,5,9,3,false,true);*/

let india = orientationData.filter(function(d){
  if(d['country name']=='India'){
    return true;
  } else {
    return false;
  }
});
generateOrientationAfter('#instance1',india,1,1,0,true,false);

let ghana = orientationData.filter(function(d){
  if(d['country name']=='Ghana'){
    return true;
  } else {
    return false;
  }
});

generateOrientationAfter('#instance2',ghana,1,1,0,true,false);

let nigeria = orientationData.filter(function(d){
  if(d['country name']=='Nigeria'){
    return true;
  } else {
    return false;
  }
});

generateOrientationAfter('#instance3',nigeria,1,1,0,true,false);

let westafrica = orientationData.filter(function(d){
  if(['Guinea','Liberia','Sierra Leone'].indexOf(d['country name'])>-1){
    return true;
  } else {
    return false;
  }
});

generateOrientationAfter('#instance4',westafrica,2,2,1,true,false);

/*newData = sortByAlpha(byIncomeGroup(orientationData,1),'country name');
generateOrientationAfter('#orientationviz4L',newData,5,9,3,false,true);
newData = sortByAlpha(byIncomeGroup(orientationData,2),'country name');
generateOrientationAfter('#orientationviz4LM',newData,5,9,3,false,true);
newData = sortByAlpha(byIncomeGroup(orientationData,3),'country name');
generateOrientationAfter('#orientationviz4UM',newData,5,9,3,false,true);
newData = sortByAlpha(byIncomeGroup(orientationData,4),'country name');
generateOrientationAfter('#orientationviz4H',newData,5,9,3,false,true);*/

generateOrientationAfter('#orientationviz6',religionData,3,2,1,true,true);

let wPlot = $('#orientationviz5').width();
let hPlot = $('#orientationviz5').width();
scatterplot('#orientationviz5',orientationData,'Q22','Q30-Religion',['Q22 Percent who said not much, or not at all'],['Q30 Percent who chose religion out of the whole population'],'WBI',wPlot,hPlot,0,50,0,50);
