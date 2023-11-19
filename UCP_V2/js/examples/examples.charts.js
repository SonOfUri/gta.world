(function($){'use strict';(function(){if($('#flotBasic').get(0)){var plot=$.plot('#flotBasic',flotBasicData,{series:{lines:{show:true,fill:true,lineWidth:1,fillColor:{colors:[{opacity:0.45},{opacity:0.45}]}},points:{show:true},shadowSize:0},grid:{hoverable:true,clickable:true,borderColor:'rgba(0,0,0,0.1)',borderWidth:1,labelMargin:15,backgroundColor:'transparent'},yaxis:{min:0,max:200,color:'rgba(0,0,0,0.1)'},xaxis:{color:'rgba(0,0,0,0.1)'},tooltip:true,tooltipOpts:{content:'%s: Value of %x is %y',shifts:{x:-60,y:25},defaultTheme:false}});}})();var data=[],totalPoints=300;function getRandomData(){if($('#flotRealTime').get(0)){if(data.length>0)
data=data.slice(1);while(data.length<totalPoints){var prev=data.length>0?data[data.length-1]:50,y=prev+Math.random()*10-5;if(y<0){y=0;}else if(y>100){y=100;}
data.push(y);}
var res=[];for(var i=0;i<data.length;++i){res.push([i,data[i]])}
return res;}}
if($('#flotRealTime').get(0)){var plot=$.plot('#flotRealTime',[getRandomData()],{colors:['#8CC9E8'],series:{lines:{show:true,fill:true,lineWidth:1,fillColor:{colors:[{opacity:0.45},{opacity:0.45}]}},points:{show:false},shadowSize:0},grid:{borderColor:'rgba(0,0,0,0.1)',borderWidth:1,labelMargin:15,backgroundColor:'transparent'},yaxis:{min:0,max:100,color:'rgba(0,0,0,0.1)'},xaxis:{show:false}});}
function update(){if($('#flotRealTime').get(0)){plot.setData([getRandomData()]);plot.draw();setTimeout(update,$('html').hasClass('mobile-device')?1000:30);}}
update();(function(){if($('#flotBars').get(0)){var plot=$.plot('#flotBars',[flotBarsData],{colors:['#8CC9E8'],series:{bars:{show:true,barWidth:0.8,align:'center'}},xaxis:{mode:'categories',tickLength:0},grid:{hoverable:true,clickable:true,borderColor:'rgba(0,0,0,0.1)',borderWidth:1,labelMargin:15,backgroundColor:'transparent'},tooltip:true,tooltipOpts:{content:'%y',shifts:{x:-10,y:20},defaultTheme:false}});}})();(function(){if($('#flotPie').get(0)){var plot=$.plot('#flotPie',flotPieData,{series:{pie:{show:true,combine:{color:'#999',threshold:0.1}}},legend:{show:false},grid:{hoverable:true,clickable:true}});}})();if($('#morrisDonut').get(0)){Morris.Donut({resize:true,element:'morrisDonut',data:morrisDonutData,colors:['#0088cc','#734ba9','#E36159']});}
if($('#morrisBar').get(0)){Morris.Bar({resize:true,element:'morrisBar',data:morrisBarData,xkey:'y',ykeys:['a','b'],labels:['Series A','Series B'],hideHover:true,barColors:['#0088cc','#2baab1']});}
if($('#morrisArea').get(0)){Morris.Area({resize:true,element:'morrisArea',data:morrisAreaData,xkey:'y',ykeys:['a','b'],labels:['Series A','Series B'],lineColors:['#0088cc','#2baab1'],fillOpacity:0.7,hideHover:true});}
if($('#morrisStacked').get(0)){Morris.Bar({resize:true,element:'morrisStacked',data:morrisStackedData,xkey:'y',ykeys:['a','b'],labels:['Accepted','Denied'],barColors:['#27ae60','#c0392b'],fillOpacity:0.7,xLabelMargin:10,smooth:false,stacked:true,hideHover:true});}
if($('#morrisLine').get(0)){Morris.Bar({resize:true,element:'morrisLine',data:morrisLineData,xkey:'y',ykeys:['a','b'],labels:['Accepted','Denied'],barColors:['#27ae60','#c0392b'],xLabelMargin:10,fillOpacity:0.7,smooth:false,stacked:true,continuousLine:true});}
(function(){if($('#gaugeBasic').get(0)){var target=$('#gaugeBasic'),opts=$.extend(true,{},{lines:12,angle:0.12,lineWidth:0.5,pointer:{length:0.7,strokeWidth:0.05,color:'#444'},limitMax:'true',colorStart:'#0088CC',colorStop:'#0088CC',strokeColor:'#F1F1F1',generateGradient:true},target.data('plugin-options'));var gauge=new Gauge(target.get(0)).setOptions(opts);gauge.maxValue=opts.maxValue;gauge.animationSpeed=32;gauge.set(opts.value);gauge.setTextField(document.getElementById("gaugeBasicTextfield"));}})();(function(){if($('#gaugeAlternative').get(0)){var target=$('#gaugeAlternative'),opts=$.extend(true,{},{lines:12,angle:0.12,lineWidth:0.5,pointer:{length:0.7,strokeWidth:0.05,color:'#444'},limitMax:'true',colorStart:'#2BAAB1',colorStop:'#2BAAB1',strokeColor:'#F1F1F1',generateGradient:true},target.data('plugin-options'));var gauge=new Gauge(target.get(0)).setOptions(opts);gauge.maxValue=opts.maxValue;gauge.animationSpeed=32;gauge.set(opts.value);gauge.setTextField(document.getElementById("gaugeAlternativeTextfield"));}})();if($('#meter').get(0)){$('#meter').liquidMeter({shape:'circle',color:'#0088CC',background:'#F9F9F9',fontSize:'24px',fontWeight:'600',stroke:'#F2F2F2',textColor:'#333',liquidOpacity:0.9,liquidPalette:['#333'],speed:3000,animate:!$.browser.mobile});}
if($('#meterDark').get(0)){$('#meterDark').liquidMeter({shape:'circle',color:'#0088CC',background:'#272A31',stroke:'#33363F',fontSize:'24px',fontWeight:'600',textColor:'#FFFFFF',liquidOpacity:0.9,liquidPalette:['#0088CC'],speed:3000,animate:!$.browser.mobile});}
if($('#sparklineLine').get(0)){$("#sparklineLine").sparkline(sparklineLineData,{type:'line',width:'80',height:'30',lineColor:'#0088cc'});}
if($('#sparklineBar').get(0)){$("#sparklineBar").sparkline(sparklineBarData,{type:'bar',width:'80',height:'30',barColor:'#0088cc',negBarColor:'#B20000'});}
if($('#sparklineTristate').get(0)){$("#sparklineTristate").sparkline(sparklineTristateData,{type:'tristate',width:'80',height:'30',posBarColor:'#0088cc',negBarColor:'#B20000'});}
if($('#sparklineDiscrete').get(0)){$("#sparklineDiscrete").sparkline(sparklineDiscreteData,{type:'discrete',width:'80',height:'30',lineColor:'#0088cc'});}
if($('#sparklineBullet').get(0)){$("#sparklineBullet").sparkline(sparklineBulletData,{type:'bullet',width:'80',height:'30',targetColor:'#ff7f00',performanceColor:'#0088cc'});}
if($('#sparklinePie').get(0)){$("#sparklinePie").sparkline(sparklinePieData,{type:'pie',height:'30',barColor:'#0088cc'});}
(function(){if($('#ChartistSimpleLineChart').get(0)){new Chartist.Line('#ChartistSimpleLineChart',{labels:['Monday','Tuesday','Wednesday','Thursday','Friday'],series:[[12,9,7,8,5],[2,1,3.5,7,3],[1,3,4,5,6]]});}})();(function(){if($('#ChartistLineScatterDiagramWithResponsiveSettings').get(0)){var times=function(n){return Array.apply(null,new Array(n));};var data=times(52).map(Math.random).reduce(function(data,rnd,index){data.labels.push(index+1);data.series.forEach(function(series){series.push(Math.random()*100)});return data;},{labels:[],series:times(4).map(function(){return new Array()})});var options={showLine:false,axisX:{labelInterpolationFnc:function(value,index){return index%13===0?'W'+value:null;}}};var responsiveOptions=[['screen and (min-width: 640px)',{axisX:{labelInterpolationFnc:function(value,index){return index%4===0?'W'+value:null;}}}]];new Chartist.Line('#ChartistLineScatterDiagramWithResponsiveSettings',data,options,responsiveOptions);}})();(function(){if($('#ChartistLineChartWithTooltips').get(0)){new Chartist.Line('#ChartistLineChartWithTooltips',{labels:['1','2','3','4','5','6'],series:[{name:'Fibonacci sequence',data:[1,2,3,5,8,13]},{name:'Golden section',data:[1,1.618,2.618,4.236,6.854,11.09]}]});var $chart=$('#ChartistLineChartWithTooltips');var $toolTip=$chart.append('<div class="tooltip"></div>').find('.tooltip').hide();$chart.on('mouseenter','.ct-point',function(){var $point=$(this),value=$point.attr('ct:value'),seriesName=$point.parent().attr('ct:series-name');$toolTip.html(seriesName+'<br>'+value).show();});$chart.on('mouseleave','.ct-point',function(){$toolTip.hide();});$chart.on('mousemove',function(event){$toolTip.css({left:(event.offsetX||event.originalEvent.layerX)-$toolTip.width()/2-10,top:(event.offsetY||event.originalEvent.layerY)-$toolTip.height()-40});});}})();(function(){if($('#ChartistLineChartWithArea').get(0)){new Chartist.Line('#ChartistLineChartWithArea',{labels:[1,2,3,4,5,6,7,8],series:[[5,9,7,8,5,3,5,4]]},{low:0,showArea:true});}})();(function(){if($('#ChartistBiPolarLineChartWithAreaOnly').get(0)){new Chartist.Line('#ChartistBiPolarLineChartWithAreaOnly',{labels:[1,2,3,4,5,6,7,8],series:[[1,2,3,1,-2,0,1,0],[-2,-1,-2,-1,-2.5,-1,-2,-1],[0,0,0,1,2,2.5,2,1],[2.5,2,1,0.5,1,0.5,-1,-2.5]]},{high:3,low:-3,showArea:true,showLine:false,showPoint:false,fullWidth:true,axisX:{showLabel:false,showGrid:false}});}})();(function(){if($('#ChartistEventsToReplaceGraphics').get(0)){var chart=new Chartist.Line('#ChartistEventsToReplaceGraphics',{labels:[1,2,3,4,5],series:[[12,9,7,8,5]]});chart.on('draw',function(data){if(data.type==='point'){var triangle=new Chartist.Svg('path',{d:['M',data.x,data.y-15,'L',data.x-15,data.y+8,'L',data.x+15,data.y+8,'z'].join(' '),style:'fill-opacity: 1'},'ct-area');data.element.replace(triangle);}});}})();(function(){if($('#ChartistLineInterpolationSmoothing').get(0)){var chart=new Chartist.Line('#ChartistLineInterpolationSmoothing',{labels:[1,2,3,4,5],series:[[1,5,10,0,1,2],[10,15,0,1,2,3]]},{lineSmooth:Chartist.Interpolation.simple({divisor:2}),fullWidth:true,low:0});}})();(function(){if($('#ChartistBiPolarBarChart').get(0)){var data={labels:['W1','W2','W3','W4','W5','W6','W7','W8','W9','W10'],series:[[1,2,4,8,6,-2,-1,-4,-6,-2]]};var options={high:10,low:-10,axisX:{labelInterpolationFnc:function(value,index){return index%2===0?value:null;}}};new Chartist.Bar('#ChartistBiPolarBarChart',data,options);}})();(function(){if($('#ChartistOverlappingBarsOnMobile').get(0)){var data={labels:['Jan','Feb','Mar','Apr','Mai','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],series:[[5,4,3,7,5,10,3,4,8,10,6,8],[3,2,9,5,4,6,4,6,7,8,7,4]]};var options={seriesBarDistance:10};var responsiveOptions=[['screen and (max-width: 640px)',{seriesBarDistance:5,axisX:{labelInterpolationFnc:function(value){return value[0];}}}]];new Chartist.Bar('#ChartistOverlappingBarsOnMobile',data,options,responsiveOptions);}})();(function(){if($('#ChartistAddPeakCirclesUsingDrawEvents').get(0)){var chart=new Chartist.Bar('#ChartistAddPeakCirclesUsingDrawEvents',{labels:['W1','W2','W3','W4','W5','W6','W7','W8','W9','W10'],series:[[1,2,4,8,6,-2,-1,-4,-6,-2]]},{high:10,low:-10,axisX:{labelInterpolationFnc:function(value,index){return index%2===0?value:null;}}});chart.on('draw',function(data){if(data.type==='bar'){data.group.append(new Chartist.Svg('circle',{cx:data.x2,cy:data.y2,r:Math.abs(Chartist.getMultiValue(data.value))*2+5},'ct-slice-pie'));}});}})();(function(){if($('#ChartistMultiLineLabels').get(0)){new Chartist.Bar('#ChartistMultiLineLabels',{labels:['First quarter of the year','Second quarter of the year','Third quarter of the year','Fourth quarter of the year'],series:[[60000,40000,80000,70000],[40000,30000,70000,65000],[8000,3000,10000,6000]]},{seriesBarDistance:10,axisX:{offset:60},axisY:{offset:80,labelInterpolationFnc:function(value){return value+' CHF'},scaleMinSpace:15}});}})();(function(){if($('#ChartistStackedChart').get(0)){new Chartist.Bar('#ChartistStackedChart',{labels:['Q1','Q2','Q3','Q4'],series:[[800000,1200000,1400000,1300000],[200000,400000,500000,300000],[100000,200000,400000,600000]]},{stackBars:true,axisY:{labelInterpolationFnc:function(value){return(value/1000)+'k';}}}).on('draw',function(data){if(data.type==='bar'){data.element.attr({style:'stroke-width: 30px'});}});}})();(function(){if($('#ChartistHorizontalChart').get(0)){new Chartist.Bar('#ChartistHorizontalChart',{labels:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],series:[[5,4,3,7,5,10,3],[3,2,9,5,4,6,4]]},{seriesBarDistance:10,reverseData:true,horizontalBars:true,axisY:{offset:70}});}})();(function(){if($('#ChartistExtremeResponsiveConfiguration').get(0)){new Chartist.Bar('#ChartistExtremeResponsiveConfiguration',{labels:['Quarter 1','Quarter 2','Quarter 3','Quarter 4'],series:[[5,4,3,7],[3,2,9,5],[1,5,8,4],[2,3,4,6],[4,1,2,1]]},{stackBars:true,axisX:{labelInterpolationFnc:function(value){return value.split(/\s+/).map(function(word){return word[0];}).join('');}},axisY:{offset:20}},[['screen and (min-width: 400px)',{reverseData:true,horizontalBars:true,axisX:{labelInterpolationFnc:Chartist.noop},axisY:{offset:60}}],['screen and (min-width: 800px)',{stackBars:false,seriesBarDistance:10}],['screen and (min-width: 1000px)',{reverseData:false,horizontalBars:false,seriesBarDistance:15}]]);}})();(function(){if($('#ChartistSimplePieChart').get(0)){var data={series:[5,3,4]};var sum=function(a,b){return a+b};new Chartist.Pie('#ChartistSimplePieChart',data,{labelInterpolationFnc:function(value){return Math.round(value/data.series.reduce(sum)*100)+'%';}});}})();(function(){if($('#ChartistPieChartWithCustomLabels').get(0)){var data={labels:['Bananas','Apples','Grapes'],series:[20,15,40]};var options={labelInterpolationFnc:function(value){return value[0]}};var responsiveOptions=[['screen and (min-width: 640px)',{chartPadding:30,labelOffset:100,labelDirection:'explode',labelInterpolationFnc:function(value){return value;}}],['screen and (min-width: 1024px)',{labelOffset:80,chartPadding:20}]];new Chartist.Pie('#ChartistPieChartWithCustomLabels',data,options,responsiveOptions);}})();(function(){if($('#ChartistGaugeChart').get(0)){new Chartist.Pie('#ChartistGaugeChart',{series:[20,10,30,40]},{donut:true,donutWidth:60,startAngle:270,total:200,showLabel:false});}})();(function(){if($('#ChartistCSSAnimation').get(0)){var data={labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],series:[[1,2,2.7,0,3,5,3,4,8,10,12,7],[0,1.2,2,7,2.5,9,5,8,9,11,14,4],[10,9,8,6.5,6.8,6,5.4,5.3,4.5,4.4,3,2.8]]};var responsiveOptions=[['only screen',{axisX:{labelInterpolationFnc:function(value,index){if(index%2!==0){return false;}else{return value;}}}}]];new Chartist.Line('#ChartistCSSAnimation',data,null,responsiveOptions);}})();}).apply(this,[jQuery]);