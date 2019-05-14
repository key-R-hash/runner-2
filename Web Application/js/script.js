var runner = function(){
	// runnerRightPosition
	if(localStorage.getItem('runnerRightPosition') != null){
		this.runnerRightPosition = Number(localStorage.getItem('runnerRightPosition'));
	}else{
		this.runnerRightPosition = 250;
	}
	// wayLeft
	if(localStorage.getItem('wayLeft') != null){
		this.wayLeft = Number(localStorage.getItem('wayLeft'));
	}else{
		this.wayLeft = -3400;
	}
	// runnerBottomPosition
	if(localStorage.getItem('runnerBottomPosition') != null){
		this.runnerBottomPosition = Number(localStorage.getItem('runnerBottomPosition'));
	}else{
		this.runnerBottomPosition = 200;
	}
	// line
	if(localStorage.getItem('line') != null){
		this.line = Number(localStorage.getItem('line'));
	}else{
		this.line = 1;
	}
	// scale
	if(localStorage.getItem('scale') != null){
		this.scale = Number(localStorage.getItem('scale'));
	}else{
		this.scale = 1;
	}
	// code
		this.code = 1;
	
	// rotate
	if(localStorage.getItem('rotate') != null){
		this.rotate = Number(localStorage.getItem('rotate'));
	}else{
		this.rotate =0;
	}
	// r
	if(localStorage.getItem('r') != null){
		this.r = Number(localStorage.getItem('r'));
		if(this.r == 4){
			this.r = 0;
		}
	}else{
		this.r = 0;
	}
	// runwayRightPosition
	if(localStorage.getItem('runwayRightPosition') != null){
		this.runwayRightPosition = localStorage.getItem('runwayRightPosition');
	}else{
		this.runwayRightPosition = {0 : [],1:[],2:[],3:[],4:[]};
	}
	this.runnerPng;
	this.run = function(){
		var me = this;
		this.runnerPng = setInterval(function(){
			me.r++;
			localStorage.setItem('r',me.r);
			$('#runner img').attr('src','../Runner/runner_' + me.r + '_.png');
			if(me.r == 4){
				me.r = 0;
			}
		},150)	
	};
	this.walkvoice;
}
runner.prototype.start = function(level){
	var resume = 1;
	this.walkvoice = setInterval(function(){
		document.getElementById('walkvoice').play()
	},0)

	if(level == null){
		var level = localStorage.getItem('level');
		resume = 0
	}	
	localStorage.setItem('level',level);
	var startIn;
	var rotateTime;
	var backgroundTime;
	var runTime;
	var ribbonTime; 
	if(level == 1){
		startIn = 1800
		rotateTime = 140
		backgroundTime = 10
		runTime = 7
		ribbonTime = 5300 
	}
	if(level == 2){
		startIn = 1300
		rotateTime = 140
		backgroundTime = 5
		runTime = 5
		ribbonTime = 5300 
	}
	if(level == 3){
		startIn = 1100
		rotateTime = 120
		backgroundTime = 3
		runTime = 1
		ribbonTime = 5300 
	}

	var me = this;
	var background;
	var run;
	if(localStorage.getItem('canResume') == null){
		setTimeout(function(){
			var rotate = setInterval(function(){
				if(me.line == 1){
					me.runnerBottomPosition += -10;
					localStorage.setItem('runnerBottomPosition',me.runnerBottomPosition);
					me.rotate += -1
					localStorage.setItem('rotate',me.rotate);
	
					$('#runner').css({
						'bottom' : me.runnerBottomPosition,
						"transform" : 'rotate(' + me.rotate + 'deg) scale(' + me.scale + ')'
	
					})
					if(me.runnerBottomPosition == 60){
						$('#runner').css({
							"transform" : 'rotate(' + 1 + 'deg) scale(' + me.scale + ')'
	
						})
						clearInterval(rotate);
						localStorage.setItem('canResume','1')

					}
				}
				if(me.line == 2){
					me.runnerBottomPosition += -10;
					localStorage.setItem('runnerBottomPosition',me.runnerBottomPosition);
	
					me.rotate += -1.5
					localStorage.setItem('rotate',me.rotate);
	
					$('#runner').css({
						'bottom' : me.runnerBottomPosition,
						"transform" : 'rotate(' + me.rotate + 'deg) scale(' + me.scale + ')'
					})
					if(me.runnerBottomPosition == 90){
						$('#runner').css({
							"transform" : 'rotate(' + 1 + 'deg) scale(' + me.scale + ')'
	
						})
						clearInterval(rotate);
						localStorage.setItem('canResume','1')

					}
				}
				if(me.line == 3){
					me.runnerBottomPosition += -10;
					localStorage.setItem('runnerBottomPosition',me.runnerBottomPosition);
	
					me.rotate += -2
					$('#runner').css({
						'bottom' : me.runnerBottomPosition,
						"transform" : 'rotate(' + me.rotate + 'deg) scale(' + me.scale + ')'
					})
					if(me.runnerBottomPosition == 110){
						$('#runner').css({
							"transform" : 'rotate(' + 1 + 'deg) scale(' + me.scale + ')'
						})
						clearInterval(rotate);
						localStorage.setItem('canResume','1')

					}
				}
			},rotateTime)
			background = setInterval(function(){
				me.wayLeft += 1;
				localStorage.setItem('wayLeft',me.wayLeft);
				$('#game').css({
					'left' : me.wayLeft
				})
				if(me.runnerRightPosition == 3600){
					$('#amazon').removeClass('visib')
					$('#amazon').css({
						'animation' : "shake 0.5s"
					})
				}
				if(me.runnerRightPosition == 3200){
					$('#bahia').removeClass('visib')
					$('#bahia').css({
						'animation' : "shake 0.5s"
					})
				}
				if(me.runnerRightPosition == 2500){
					$('#parana').removeClass('visib')
					$('#parana').css({
						'animation' : "shake 0.5s"
					})
				}
				if(me.runnerRightPosition == 1700){
					$('#saopaulo').removeClass('visib')
					$('#saopaulo').css({
						'animation' : "shake 0.5s"
					})
				}
				if(me.runnerRightPosition == 600){
					$('#rio').removeClass('visib')
					$('#rio').css({
						'animation' : "shake 0.5s"
					})
				}
			},backgroundTime)
			$('#pyre_fire').removeClass('hide');
			$('#pyre_').addClass('hide'); 
		},startIn)
	}else{
		$('#runner').css({
			'bottom' : me.runnerBottomPosition,
		})
		background = setInterval(function(){
			me.wayLeft += 1;
			localStorage.setItem('wayLeft',me.wayLeft);
			$('#game').css({
				'left' : me.wayLeft
			})
			if(me.runnerRightPosition == 3600){
				$('#amazon').removeClass('visib')
				$('#amazon').css({
					'animation' : "shake 0.5s"
				})
			}
			if(me.runnerRightPosition == 3200){
				$('#bahia').removeClass('visib')
				$('#bahia').css({
					'animation' : "shake 0.5s"
				})
			}
			if(me.runnerRightPosition == 2500){
				$('#parana').removeClass('visib')
				$('#parana').css({
					'animation' : "shake 0.5s"
				})
			}
			if(me.runnerRightPosition == 1700){
				$('#saopaulo').removeClass('visib')
				$('#saopaulo').css({
					'animation' : "shake 0.5s"
				})
			}
			if(me.runnerRightPosition == 600){
				$('#rio').removeClass('visib')
				$('#rio').css({
					'animation' : "shake 0.5s"
				})
			}
		},backgroundTime)
	}


	me.run();

	run = setInterval(function(){
		me.runnerRightPosition += 1;
		localStorage.setItem('runnerRightPosition',me.runnerRightPosition);
		var results = localStorage.getItem('runwayRightPosition',me.runwayRightPosition);
		results = JSON.parse(results)
				var results = Object.keys(results).map(function(key) {
			return [Number(key), results[key]];
		  });

		$('#runner').css({
			'right' : me.runnerRightPosition
		})


		if(resume == 0){
			if((me.runnerRightPosition + 70 == results[0][1][me.line] || me.runnerRightPosition + 70 == results[1][1][me.line] || me.runnerRightPosition + 70 == results[2][1][me.line] || me.runnerRightPosition + 70 == results[3][1][me.line] || me.runnerRightPosition + 70 == results[4][1][me.line]) && me.code != 32){
				clearInterval(me.walkvoice)
				document.getElementById('ahhh').play();
				setTimeout(function(){
					document.getElementById('ahhh').pause();
				},5000)
				document.getElementById('walkvoice').pause();
				$('#end').removeClass('hide');

				localStorage.clear();
				clearInterval(me.runnerPng);

				clearInterval(background);
				clearInterval(run);

			}
		}else{
			if((me.runnerRightPosition + 70 == me.runwayRightPosition[0][me.line] || me.runnerRightPosition + 70 == me.runwayRightPosition[1][me.line] || me.runnerRightPosition + 70 == me.runwayRightPosition[2][me.line] || me.runnerRightPosition + 70 == me.runwayRightPosition[3][me.line] || me.runnerRightPosition + 70 == me.runwayRightPosition[4][me.line]) && me.code != 32){
				clearInterval(me.walkvoice)
				document.getElementById('ahhh').play();
				setTimeout(function(){
					document.getElementById('ahhh').pause();
				},5000)
				document.getElementById('walkvoice').pause();
				$('#end').removeClass('hide');

				localStorage.clear();
				clearInterval(me.runnerPng);

				clearInterval(background);
				clearInterval(run);

			}
		}


		if(me.wayLeft == 0){
			clearInterval(background);
		}
		if(me.runnerRightPosition == 5400){
			$('#win').removeClass('hide')

			localStorage.clear();
			clearInterval(me.walkvoice)

			document.getElementById('walkvoice').pause();
			clearInterval(me.runnerPng);
			clearInterval(run);
			localStorage.clear();

		}
		if(me.runnerRightPosition == 5000){
			document.getElementById('clappi').play();
			setTimeout(function(){
				document.getElementById('clappi').pause();
			},5000)

			var ribbon = "<img id='rib1' src='../Runner/ribbon1.png' > <img id='rib2' src='../Runner/ribbon2.png' > <img id='rib3' src='../Runner/ribbon1.png' > <img id='rib4' src='../Runner/ribbon2.png' > <img id='rib5' src='../Runner/ribbon1.png' > <img id='rib6' src='../Runner/ribbon1.png' > <img id='rib7' src='../Runner/ribbon2.png' > <img id='rib8' src='../Runner/ribbon2.png' > <img id='rib9' src='../Runner/ribbon1.png' ><img id='rib10' src='../Runner/ribbon2.png' ><img id='rib11' src='../Runner/ribbon1.png' ><img id='rib12' src='../Runner/ribbon2.png' ><img id='rib13' src='../Runner/ribbon1.png' ><img id='rib14' src='../Runner/ribbon2.png' ><img id='rib15' src='../Runner/ribbon1.png' >"
			$('#riboo').append(ribbon);
			$('#rib1').css({
				'width' : '25px',
				'position' : 'absolute',
				'animation' : 'ribbon 3s'

			})
			$('#rib2').css({
				'width' : '25px',
				'position' : 'absolute',
				'animation' : 'ribbon 3.2s'

			})
			$('#rib3').css({
				'width' : '25px',
				'position' : 'absolute',
				'animation' : 'ribbon 3.4s'

			})
			$('#rib4').css({
				'width' : '25px',
				'position' : 'absolute',
				'animation' : 'ribbon 3.6s'
			})
			$('#rib5').css({
				'width' : '25px',
				'position' : 'absolute',
				'animation' : 'ribbon 3.8s'

			})
			$('#rib6').css({
				'width' : '25px',
				'position' : 'absolute',
				'animation' : 'ribbon 4s'
				

			})
			$('#rib7').css({
				'width' : '25px',
				'position' : 'absolute',
				'animation' : 'ribbon 4.2s'

			})
			$('#rib8').css({
				'width' : '25px',
				'position' : 'absolute',
				'animation' : 'ribbon 4.4s'
			})
			$('#rib9').css({
				'width' : '25px',
				'position' : 'absolute',
				'animation' : 'ribbon 2.8s'
			})		
			$('#rib10').css({
				'width' : '25px',
				'position' : 'absolute',
				'animation' : 'ribbon 4.6s'
			})		
			$('#rib11').css({
				'width' : '25px',
				'position' : 'absolute',
				'animation' : 'ribbon 2.6s'
			})		
			$('#rib12').css({
				'width' : '25px',
				'position' : 'absolute',
				'animation' : 'ribbon 2.4s'
			})		
			$('#rib13').css({
				'width' : '25px',
				'position' : 'absolute',
				'animation' : 'ribbon 2.2s'
			})		
			$('#rib14').css({
				'width' : '25px',
				'position' : 'absolute',
				'animation' : 'ribbon 5s'
			})		
			$('#rib15').css({
				'width' : '25px',
				'position' : 'absolute',
				'animation' : 'ribbon 5.2s'
			})
			setTimeout(function(){
				$('#riboo').hide();
			},ribbonTime)
		}
	},runTime)
}	
runner.prototype.runway = function(level){
	if(level == null){
		var level = localStorage.getItem('level');
	}
	var me = this;
	var oneRunway = null;
	var twoRunway = null;
	var threeRunway = null;
	var fourRunway = null;
	var fiveRunway = null; 
	if(level == 1){
		var oneRunway = ['1300','1400','1500','1600'];
		var twoRunway = ['1700','1800','1900','2000'];
	}
	if(level == 2){
		var oneRunway = ['1300','1400','1500','1600'];
		var twoRunway = ['1700','1800','1900','2000'];
		var threeRunway = ['2100','2200','2300','2400'];
		var fourRunway = ['2300','2400','2500','2600'];
	}
	if(level == 3){
		var oneRunway = ['1300','1400','1500','1600'];
		var twoRunway = ['1700','1800','1900','2000'];
		var threeRunway = ['2100','2200','2300','2400'];
		var fourRunway = ['3000','3100','3200','3300'];
		var fiveRunway = ['3400','3500','3600','3700'];
	}
	var n = 1;
	var nn = 1;
	var nnn = 1;
	var nnnn = 1;
	var nnnnn = 1;

	if(localStorage.getItem('runwayRightPosition') == null){
		while(n <= 3){
			var leg = Math.floor(Math.random() * 3);
			me.runwayRightPosition[0][n] = Number(oneRunway[leg]);
				
			$('.runways').append("<div id='firstRunway" + n + "'" +" class='runway'><span class='obstacle' ></span></div>")
			if(n  == 3){
				$('#firstRunway3 .obstacle').css({
					'width' : '16px',
					'height' : '62px',
					"margin-bottom" : '-50px',
					'right' : Number(oneRunway[leg]) + 'px',
					'bottom' : 100 + 'px'
				})
			}
			if(n == 2){
				$('#firstRunway2 .obstacle').css({
				'width' : '22px',
				'height' : '68px',
				"margin-bottom" : '-45x',
				'right' : Number(oneRunway[leg]) + 'px',
				'bottom' : 25 + 'px'
				})
			}
			if(n == 1){
				$('#firstRunway1 .obstacle').css({
					'width' : '28px',
					'height' : '74px',
					'right' : Number(oneRunway[leg]) + 'px',
					'bottom' : 0 + 'px'
				})
			}
			n++;
		}
		while(nn <= 3){
			var leg = Math.floor(Math.random() * 3);
			me.runwayRightPosition[1][nn] = Number(twoRunway[leg]);
	
			$('.runways').append("<div id='secondRunway" + nn + "'" + " class='runway'><span class='obstacle'></span></div>")
			if(nn  == 3){
				$('#secondRunway3 .obstacle').css({
					'width' : '16px',
					'height' : '62px',
					"margin-bottom" : '-50px',
					'right' : Number(twoRunway[leg]) + 'px',
					'bottom' : 100 + 'px'
				})
			}
			if(nn == 2){
				$('#secondRunway2 .obstacle').css({
				'width' : '22px',
				'height' : '68px',
				"margin-bottom" : '-45x',
				'right' : Number(twoRunway[leg]) + 'px',
				'bottom' : 25 + 'px'
	
				})
	
			}
			if(nn == 1){
				$('#secondRunway1 .obstacle').css({
				'width' : '28px',
				'height' : '74px',
				'right' : Number(twoRunway[leg]) +  'px',
				'bottom' : 0 + 'px'
				})
			}
			nn++;
		}
		while(nnn <= 3 && threeRunway != null){
			var leg = Math.floor(Math.random() * 3);
			me.runwayRightPosition[2][nnn] = Number(threeRunway[leg]);
				
			$('.runways').append("<div id='threeRunway" + nnn + "'" +" class='runway'><span class='obstacle' ></span></div>")
			if(nnn  == 3){
				$('#threeRunway3 .obstacle').css({
					'width' : '16px',
					'height' : '62px',
					"margin-bottom" : '-50px',
					'right' : Number(threeRunway[leg]) + 'px',
					'bottom' : 100 + 'px'
				})
			}
			if(nnn == 2){
				$('#threeRunway2 .obstacle').css({
				'width' : '22px',
				'height' : '68px',
				"margin-bottom" : '-45x',
				'right' : Number(threeRunway[leg]) + 'px',
				'bottom' : 25 + 'px'
				})
			}
			if(nnn == 1){
				$('#threeRunway1 .obstacle').css({
					'width' : '28px',
					'height' : '74px',
					'right' : Number(threeRunway[leg]) + 'px',
					'bottom' : 0 + 'px'
				})
			}
			nnn++;
		}
		while(nnnn <= 3 && fourRunway != null){
			var leg = Math.floor(Math.random() * 3);
			me.runwayRightPosition[3][nnnn] = Number(fourRunway[leg]);
				
			$('.runways').append("<div id='fourRunway" + nnnn + "'" +" class='runway'><span class='obstacle' ></span></div>")
			if(nnnn  == 3){
				$('#fourRunway3 .obstacle').css({
					'width' : '16px',
					'height' : '62px',
					"margin-bottom" : '-50px',
					'right' : Number(fourRunway[leg]) + 'px',
					'bottom' : 100 + 'px'
				})
			}
			if(nnnn == 2){
				$('#fourRunway2 .obstacle').css({
				'width' : '22px',
				'height' : '68px',
				"margin-bottom" : '-45x',
				'right' : Number(fourRunway[leg]) + 'px',
				'bottom' : 25 + 'px'
				})
			}
			if(nnnn == 1){
				$('#fourRunway1 .obstacle').css({
					'width' : '28px',
					'height' : '74px',
					'right' : Number(fourRunway[leg]) + 'px',
					'bottom' : 0 + 'px'
				})
			}
			nnnn++;
		}
		while(nnnnn <= 3 && fiveRunway != null){
			var leg = Math.floor(Math.random() * 3);
			me.runwayRightPosition[4][nnnnn] = Number(fiveRunway[leg]);
			$('.runways').append("<div id='fiveRunway" + nnnnn + "'" +" class='runway'><span class='obstacle' ></span></div>")
			if(nnnnn  == 3){
				$('#fiveRunway3 .obstacle').css({
					'width' : '16px',
					'height' : '62px',
					"margin-bottom" : '-50px',
					'right' : Number(fiveRunway[leg]) + 'px',
					'bottom' : 100 + 'px'
				})
			}
			if(nnnnn == 2){
				$('#fiveRunway2 .obstacle').css({
				'width' : '22px',
				'height' : '68px',
				"margin-bottom" : '-45x',
				'right' : Number(fiveRunway[leg]) + 'px',
				'bottom' : 25 + 'px'
				})
			}
			if(nnnnn == 1){
				$('#fiveRunway1 .obstacle').css({
					'width' : '28px',
					'height' : '74px',
					'right' : Number(fiveRunway[leg]) + 'px',
					'bottom' : 0 + 'px'
				})
			}
			nnnnn++;

		}
		localStorage.setItem('runwayRightPosition',JSON.stringify(me.runwayRightPosition));
	}else{
		var localRunways = localStorage.getItem('runwayRightPosition',me.runwayRightPosition);
		localRunways = JSON.parse(localRunways)
		var a = 0;
		var runwayNumber;
		var results = Object.keys(localRunways).map(function(key) {
			return [Number(key), localRunways[key]];
		  });
		results.forEach(function(result){
			if(a == 0){
				runwayNumber = 'first'
			}
			if(a == 1){
				runwayNumber = 'second'
			}
			if(a == 2){
				runwayNumber = 'three'
			}
			if(a == 3){
				runwayNumber = 'four'
			}
			if(a == 4){
				runwayNumber = 'five'
			}
			$('.runways').append("<div id='" + runwayNumber + "Runway3' class='runway'><span class='obstacle' ></span></div>")

			$('#' + runwayNumber +'Runway3 .obstacle').css({
				'width' : '16px',
				'height' : '62px',
				"margin-bottom" : '-50px',
				'right' : Number(result[1][3]) + 'px',
				'bottom' : 100 + 'px' 
			})
			$('.runways').append("<div id='" + runwayNumber + "Runway2' class='runway'><span class='obstacle' ></span></div>")

			$('#' + runwayNumber + 'Runway2 .obstacle').css({
			'width' : '22px',
			'height' : '68px',
			"margin-bottom" : '-45x',
			'right' : Number(result[1][2]) + 'px',
			'bottom' : 25 + 'px'
			})
			$('.runways').append("<div id='" + runwayNumber + "Runway1' class='runway'><span class='obstacle' ></span></div>")

			$('#' + runwayNumber + 'Runway1 .obstacle').css({
				'width' : '28px',
				'height' : '74px',
				'right' : Number(result[1][1]) + 'px',
				'bottom' : 0 + 'px'
			})
			a++;

		})
	}

	
}
runner.prototype.setKeyDown = function(){
	var me = this;
	$(document).keydown(function(e){ 
		me.code = e.keyCode;

		// space
		if(me.code == 32){
			document.getElementById('jumpvoice').play()
			$('#runner').css({
				'bottom' : me.runnerBottomPosition + 50,
				'transform' : 'scale( ' + me.scale + ' )'
			})
			$('#runner img').attr('src','../Runner/runner_up_.png');
			clearInterval(me.runnerPng)
			setTimeout(function(){
				$('#runner').css({
					'bottom' : me.runnerBottomPosition,
					'transform' : 'scale( ' + me.scale + ' )'
				})
				me.run();
				me.code = 1;
			},1000)
			

		}
		// up
		if(me.code == 38){

			me.line++;
			localStorage.setItem('line',me.line);
			if(me.line <= 2){
				me.runnerBottomPosition = Number(me.runnerBottomPosition) + 30 
				localStorage.setItem('runnerBottomPosition',me.runnerBottomPosition);

				me.scale =  Number(me.scale) - 0.1;
				localStorage.setItem('scale',me.scale);

				$('#runner').css({
					'bottom' : me.runnerBottomPosition,
					'transform' : 'scale( ' + me.scale + ' )'
				})


			}
			if(me.line == 3){
				me.runnerBottomPosition = Number(me.runnerBottomPosition) + 20 
				localStorage.setItem('runnerBottomPosition',me.runnerBottomPosition);

				me.scale =  Number(me.scale) - 0.1;
				localStorage.setItem('scale',me.scale);

				$('#runner').css({
					'bottom' : me.runnerBottomPosition,
					'transform' : 'scale( ' + me.scale + ' )'
				})


			}
			if(me.line == 4){
				me.line = 3
				localStorage.setItem('line',me.line)

			}

		}
		// down
		if(me.code == 40){
			me.line--;
			localStorage.setItem('line',me.line)
			if(me.line == 3 || me.line == 1){
				me.scale =  Number(me.scale) + 0.1;
				localStorage.setItem('scale',me.scale);

				me.runnerBottomPosition = Number(me.runnerBottomPosition) + -30 
				localStorage.setItem('runnerBottomPosition',me);

				$('#runner').css({
					'bottom' : me.runnerBottomPosition ,
					'transform' : 'scale( ' + me.scale + ' )'
				})
				

			}
			if(me.line == 2){
				me.scale =  Number(me.scale) + 0.1;
				localStorage.setItem('scale',me.scale);

				me.runnerBottomPosition = Number(me.runnerBottomPosition) + -20 
				localStorage.setItem('runnerBottomPosition',me.runnerBottomPosition);

				$('#runner').css({
					'bottom' : me.runnerBottomPosition ,
					'transform' : 'scale( ' + me.scale + ' )'
				})
				

			}
			if(me.line == 0){
				me.line = 1
				localStorage.setItem('line',me.line)

			}

		}
	})
}
function start(level){	
	if(level != null){
		localStorage.clear()

	}
	var start = new runner;
	$('#start').hide();
	start.start(level);
	start.runway(level);
	start.setKeyDown();
}