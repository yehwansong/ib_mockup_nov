$(document).ready(function(){

var isMobile = false;
(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) isMobile = true;})(navigator.userAgent||navigator.vendor||window.opera);
if(isMobile){$('body').addClass('mobile')}
	// for intervention popup
	var w = window.innerWidth
	var h = window.innerHeight

	var data_array
	var icon_array
	var infopopup_array = []
	var intervention_on = false
	var popup_counter = 1
	var mark_amount = 0

	var current_scroll

	var translatey = 70
	var week_whole_wrapper_animate_val_1 = 0
	var week_whole_wrapper_animate_val_2 = 0
	var currentrotation = 0
	var scroll_ani_counter =0

	var today_string = new Date().getUTCFullYear()+', '+("0" + (new Date().getUTCMonth()+1)).slice(-2)+', '+("0" + new Date().getUTCDate()).slice(-2)
	if(window.location.hash && window.location.hash.split('#goto_').length>1){
		today_string = window.location.hash.split('#goto_')[1].split('-')[0] + ', '+window.location.hash.split('#goto_')[1].split('-')[1] + ', '+window.location.hash.split('#goto_')[1].split('-')[2]
	}
	function get_inittime_d() {
	    return Math.round((new Date(2021, 10, 10) - new Date(today_string))/(1000*60*60*24));
	}

	var inittime_d = get_inittime_d()

	var inittime_h = new Date().toString().split(' ')[4].split(':')[0]
	var initrotation = inittime_h/24
	var initoffset = 13
	var scrollpos = 0

	var noscroll = false
	var spiral_unit
	var center_width_r = 3
	var wholeweek_length
	var lc_counter = 1
	var wrapper_translatez = 10
	var ismobile = false
	var scrollinit = true
	if(window.innerHeight > window.innerWidth){
		ismobile = true
	}
	if(ismobile){wrapper_translatez = 50;
		}
	var translatez = 28
	if(ismobile){translatez = 50;
		}
	var number_of_board = 20
	var week_lastpage = 0

	var scrollspeed = 0.1
	if(ismobile){scrollspeed = 0.5}

	var scrolldirection = 'down'
	var scrolldirection_value = 0
	if(!isMobile){
		var scrollbarWidth = document.querySelector('.fake_scroll_wrapper').offsetWidth - document.querySelector('.fake_scroll_wrapper').clientWidth;
		$('head').append('<style type="text/css">\
			.week_frame,.spiral_frame,.week_whole_wrapper_wrapper, .week_frame{\
				width:calc(100vw - '+scrollbarWidth+'px) !important;\
				overflow:hidden !important\
			}\
			</style>');
	}
	var week_array = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18']

if(window.location.hash && window.location.hash.split('#')[1] === 'spiral') {
	$('body').addClass('spiral_view')
} else if(window.location.hash && window.location.hash.split('#')[1] === 'week'){
	$('body').addClass('week_view')
} else if(window.location.hash && window.location.hash.split('#')[1] === 'autoscroll'){
	$('body').addClass('week_view')
	scroll_ani()
}else{
	$('body').addClass('week_view')
	window.location.hash = 'week';
}
setTimeout(function(){
// switch_view()
},3000)
function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    return weekNo
}
timeplay()
function timeplay(){
    document.title = String(new Date()).substring(4).split(' GMT')[0]
    setTimeout(function(){timeplay()},1000)
}
function parseDate(str) {
    var mdy = str.split('/');
    return new Date(2021, 10, 19);
}




// 1
get_data_array()
function get_data_array() {
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            icon_array = JSON.parse(this.responseText).values
        }
    }
    xhttp.open("GET", "https://sheets.googleapis.com/v4/spreadsheets/1j4pOnmU4NTyM7XoeXHG67Uy7VMfT_bAp4Kt0JxokUag/values/Items?key=AIzaSyAmcp44cOi9-6XM4EqjCjIQLbj_D__1YPE");
    xhttp.send();
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            data_array = JSON.parse(this.responseText).values
            console.log(data_array)
            
            wholeweek_length = (data_array.length-1)
            spiral_unit = (w)/(wholeweek_length*2 + center_width_r*2)

    		for (var i = 0; i < week_array.length; i++) {
    			if(i == week_array.length-1){
					create_board(data_array, i, (week_array.length-i+1)*0 + translatez, true)
    			}else{
					create_board(data_array, i, (week_array.length-i+1)*0 + translatez, false)
    			}
    		}
    		for (var i = 0; i < week_array.length; i++) {
				create_spiral(data_array, i, (week_array.length-i)*(50/(week_array.length+1)), false)
    		}
            		popup()
    				// analyze_data(data_array)
    				set_spiral_position()
    				week_lastpage_swipe()
        };
    }
    xhttp.open("GET", "https://sheets.googleapis.com/v4/spreadsheets/1j4pOnmU4NTyM7XoeXHG67Uy7VMfT_bAp4Kt0JxokUag/values/Info?key=AIzaSyAmcp44cOi9-6XM4EqjCjIQLbj_D__1YPE");
    xhttp.send();
}




 // 667 : 125

// 2
			function create_board(data_array, k, translatez, callback){
            		var number_of_board = week_array.length-k + 2
            		var classname = 'weekwrapper_'+week_array[k]

					$('.week_whole_wrapper').append('\
						<div class="weekwrapper '+classname+'" \
						style="transform:translateY('+(k)*translatey+'vh)"\
						></div>')
            		for (var i = 0; i < number_of_board; i++) {
						$('.'+classname).append('\
							<div class="week board board_info_time_'+i+' rotatey_'+Math.floor((-360/number_of_board)*i)+'" style="\
							width:'+(get_width(translatez,number_of_board))+'vw;\
							transform:translateX(-50%) rotateY('+((-360/number_of_board)*i)+'deg) translateZ(-'+translatez+'vw);\
							">\
								<div class="week_board_inner"></div>\
								<div class="text_inner" style="\
								margin-left:'+ (-1*get_width(translatez,number_of_board)*(i)) +'vw;\
								width:'+ (number_of_board*100) +'%;">\
										<div class="text_inner_wrapper">\
										</div>\
								</div>\
							</div>')
						    append_weekinfo(i,k,classname)
						    append_weekitems(i,k,classname)
							if(i == number_of_board-1){
									$('.'+classname).find('.text_inner_wrapper').append('\
									<div class="text_inner_content text_inner_content_1 ' + new_text_content_org[(k+inittime_d)%42][0] + '">' + new_text_content[(k+inittime_d)%42][0] + '</div>\
									<div class="text_inner_content text_inner_content_2 ' + new_text_content_org[(k+inittime_d)%42][1] + '">' + new_text_content[(k+inittime_d)%42][1] + '</div>\
									<div class="text_inner_content text_inner_content_3 ' + new_text_content_org[(k+inittime_d)%42][2] + '">' + new_text_content[(k+inittime_d)%42][2] + '</div>\
									')
									$('.'+classname).find('.text_inner_wrapper').addClass('text_inner_wrapper_'+(k+inittime_d)%42)
									if(new_text_content_org[(k+inittime_d)%42][0].split('-')[0]==='sep_img'){
										$('.'+classname+' .text_inner_content_1').addClass('sep_img')}
									if(new_text_content_org[(k+inittime_d)%42][1].split('-')[0]==='sep_img'){
										$('.'+classname+' .text_inner_content_2').addClass('sep_img')}
									if(new_text_content_org[(k+inittime_d)%42][2].split('-')[0]==='sep_img'){
										$('.'+classname+' .text_inner_content_3').addClass('sep_img')}
									var a = $('.'+classname).find('.text_inner_wrapper').outerWidth()
									var b = $('.'+classname).find('.text_inner_content_1').outerWidth()
									var c = $('.'+classname).find('.text_inner_content_2').outerWidth()
									var d = $('.'+classname).find('.text_inner_content_3').outerWidth()
									if($('.'+classname).find('.text_inner_wrapper').eq(0).find('.sep_img').length==1){
										$('.'+classname).find('.sep_img').css({'width':(a-b-c-d) + 'px'})
									}
									if($('.'+classname).find('.text_inner_wrapper').eq(0).find('.sep_img').length==2){
										$('.'+classname).find('.sep_img').css({'width':(a-b-c-d)/2 + 'px'})
									}
									if((a-b-c-d)<0){
									}
								if(callback){

									$('.fake_scroll').css({'height':(18*translatey/scrollspeed) + 'vh'})
									$('.fake_scroll_wrapper').scrollTop((translatey*(initoffset + initrotation) / scrollspeed)*(window.innerHeight/100))
									console.log($('.fake_scroll_wrapper').scrollTop())
									scrollpos = ($('.fake_scroll_wrapper').scrollTop())/(window.innerHeight/100) * scrollspeed
						            rotate_time(true)
					            	week_scroll()
					            	show_week()
					            	settingup_lastpage()
						            setTimeout(function(){hovereffect()},1000)
						        }
								$('.'+classname).find('.text_inner_wrapper').css({'transform':'scaleX('+($('.'+classname).find('.board_info_time_0').find('.text_inner').outerWidth()/$('.'+classname).find('.board_info_time_0').find('.text_inner_wrapper').outerWidth())+')'})
								$('.text_inner_content_link').hover(function(){
									var val = $(this).attr('class').split('text_inner_content_link_')[1].split(' ')[0]
									$('.text_inner_content_link_'+val).addClass('text_inner_content_link_hovered')
								}, function(){
									$('.text_inner_content_link_hovered').removeClass('text_inner_content_link_hovered')
								})
							}
					}
			}
			var spiral_margintop_array = [0,0,0,0,0,0,0,0.1,0.4,0.9,1.6,2.5,3.6,4.9,6.4+1,8.1+2,10+4,12.1+6,14.4+6]
            function create_spiral(data_array, k, translatez, callback){
            		var number_of_board = week_array.length-k + 2
            		var classname = 'spiralwrapper_' + week_array[k]
            		if(parseInt(week_array[k])<initoffset+1){
	            		$('.spiral_whole_wrapper').append('\
							<div class="spiralwrapper '+classname+'" \
								style="transform:translateX(-50%) translateY(-50%);\
								margin-top:'+spiral_margintop_array[0]+'vh"\
							></div>')
	            		$('.'+classname).addClass('spiralwrapper_upper')
	            	}else{
			           	var value = parseInt(week_array[k])-(initoffset+1)
	            		$('.spiral_whole_wrapper').append('\
							<div class="spiralwrapper '+classname+'" \
								style="transform:translateX(-50%) translateY(-50%) translateY(100%) scaleY('+(1+value/10)+');\
								margin-top:'+spiral_margintop_array[0]+'vh"\
							></div>')
	            		$('.'+classname).addClass('spiralwrapper_lower')
			           	$('.'+classname).css({'top':(value*1)+'vw'})
	            	}


            		for (var i = 0; i < number_of_board; i++) {
								$('.'+classname).append('<div class="spiral board board_info_time_'+i+'" style="\
									width:'+(get_width(translatez,number_of_board))+'vw;\
									transform:translateX(-50%) rotateY('+((-360/number_of_board)*i)+'deg) translateZ(-'+translatez+'vw);\
									background-position:'+ (-1*get_width(translatez,number_of_board)*(i)) +'vw top;\
									background-size:'+ (get_width(translatez,number_of_board)*number_of_board) +'vw 100%;\
									">\
									<div class="spiral_board_inner spiral_board_inner_outerwall"></div>\
									<div class="text_inner" style="\
									margin-left:'+ (-1*get_width(translatez,number_of_board)*(i)) +'vw;\
									width:'+ (number_of_board*100) +'%;"\
									><div class="text_inner_wrapper"></div></div>\
									</div>')
				            			if(parseInt(week_array[k])<initoffset+2){
					            			$('.'+classname).find('.spiral_board_inner_outerwall').css({'opacity':1})
						            	}else{
					            			$('.'+classname).find('.spiral_board_inner_outerwall').css({'opacity':0})
						            	}
							if(i == number_of_board-1){
									$('.'+classname).find('.text_inner_wrapper').append('\
									<div class="text_inner_content text_inner_content_1 ' + new_text_content_org[(k+inittime_d)%42][0] + '">' + new_text_content[(k+inittime_d)%42][0] + '</div>\
									<div class="text_inner_content text_inner_content_2 ' + new_text_content_org[(k+inittime_d)%42][1] + '">' + new_text_content[(k+inittime_d)%42][1] + '</div>\
									<div class="text_inner_content text_inner_content_3 ' + new_text_content_org[(k+inittime_d)%42][2] + '">' + new_text_content[(k+inittime_d)%42][2] + '</div>\
									')
									
								}
					}     	
            }

			function get_width(translatez,number_of_board){
				return translatez*Math.tan((360/(number_of_board*2)) * Math.PI / 180)	*2
			}
            function pos_to_rot(value){
            	return parseInt(map_range(value, 0, translatey, 360, 0))
            }
            function set_spiral_position(){
            	$('.camera_view').css({'height':(week_array.length - initoffset + center_width_r)*spiral_unit +'px'})
            }
// 3
            function append_weekinfo(selectedboard,selectedweek,selectedclass){
	        		if(parseInt(data_array[selectedweek+1][selectedboard+2]) !== 0){
	        				$('.'+selectedclass+' .board_info_time_'+selectedboard).append('<div class="popups popups_info">'+data_array[selectedweek+1][selectedboard+2]+'</div>')
	        				$('.'+selectedclass+' .board_info_time_'+selectedboard).addClass('popup_parent')
	        				var value = $('.'+selectedclass+' .board_info_time_'+selectedboard).attr('class').split('rotatey_')[1].split(' ')[0]
	        				$('.'+selectedclass+' .board_info_time_'+selectedboard).css({'transform':'translateX(-50%) rotateY('+value+'deg) translateZ(-24vw)'})
	        				// $('.'+selectedclass+' .board_info_time_'+selectedboard).attr('class').split('_')
	        				// $('.'+selectedclass+' .board_info_time_'+selectedboard).css({'transform':})
	        		}
            }

			function removeItemAll(arr, value) {
			  var i = 0;
			  while (i < arr.length) {
			    if (arr[i] === value) {
			      arr.splice(i, 1);
			    } else {
			      ++i;
			    }
			  }
			  return arr;
			}
            function append_weekitems(selectedboard,selectedweek,selectedclass){
            	if(typeof icon_array == 'undefined'){
            		setTimeout(function(){append_weekitems(selectedboard,selectedweek,selectedclass)},500)
            	}else{
	        		if(icon_array[selectedweek+1][selectedboard+2] === 'clock'){
	        				$('.'+selectedclass+' .board_info_time_'+selectedboard).append('<div class="popups popups_icon popups_icon_clock"></div>')
	        				$('.'+selectedclass+' .board_info_time_'+selectedboard+' .popups').addClass('popup_original').prepend('<div class="popups_tab"><div class="close"></div></div>')
	        				$('.'+selectedclass+' .board_info_time_'+selectedboard+' .popups').clone().removeClass('popup_original').addClass('popup_shadow').insertBefore($('.'+selectedclass+' .board_info_time_'+selectedboard+' .popup_original'))
	        		}
	        		if(icon_array[selectedweek+1][selectedboard+2] === 'podcast'){
	        				$('.'+selectedclass+' .board_info_time_'+selectedboard).append('<div class="popups popups_icon popups_icon_podcast"></div>')
	        				$('.'+selectedclass+' .board_info_time_'+selectedboard+' .popups').addClass('popup_original').prepend('<div class="popups_tab"><div class="close"></div></div>')
	        				$('.'+selectedclass+' .board_info_time_'+selectedboard+' .popups').clone().removeClass('popup_original').addClass('popup_shadow').insertBefore($('.'+selectedclass+' .board_info_time_'+selectedboard+' .popup_original'))
	        		}
	        		if(icon_array[selectedweek+1][selectedboard+2] === 'weather'){
	        				$('.'+selectedclass+' .board_info_time_'+selectedboard).append('<div class="popups popups_icon popups_icon_weather"></div>')
	        				$('.'+selectedclass+' .board_info_time_'+selectedboard+' .popups').addClass('popup_original').prepend('<div class="popups_tab"><div class="close"></div></div>')
	        				$('.'+selectedclass+' .board_info_time_'+selectedboard+' .popups').clone().removeClass('popup_original').addClass('popup_shadow').insertBefore($('.'+selectedclass+' .board_info_time_'+selectedboard+' .popup_original'))
	        		}
            	}
            }




// 4

			function scroll_ani(){
				var scroll_array = [14,110,238]
				console.log(parseInt(scroll_array[scroll_ani_counter%scroll_array.length])/scrollspeed*(window.innerHeight/100))
				$('.fake_scroll_wrapper').scrollTop(parseInt(scroll_array[scroll_ani_counter%scroll_array.length])/scrollspeed*(window.innerHeight/100))

				move_wrapper(false)
				scroll_ani_counter ++
				setTimeout(function(){
					scroll_ani()
				},1000)
			}
            function week_scroll(){
            	console.log('hey')
            	$('.week_whole_wrapper').css({'transition':'transform 0s'})
	            $('.fake_scroll_wrapper').on('scroll', function() {
            		$('.week_whole_wrapper').css({'transition':'transform 0s'})
					$('.transition').removeClass('transition')
					 scrollpos = ($('.fake_scroll').outerHeight()-$('.fake_scroll_wrapper').scrollTop())/(window.innerHeight/100) * scrollspeed
	            	if(scrollinit||intervention_on){
	            		if(scrollinit){
	            			move_wrapper(true)
	            			console.log('s;hlkdjglfkdsj')
	            		}
	            		scrollinit = false
	            	}else{
	            		$('.followcursor').css({'opacity':0})
					    // down to top
					    // scrollpos = ($('.fake_scroll_wrapper').scrollTop())/(window.innerHeight/100) * scrollspeed
					    console.log(scrollpos)
					    // console.log($('.fake_scroll_wrapper').scrollTop()/$('.fake_scroll_wrapper').outerHeight()
					    move_wrapper(false)
	            	}

					$('.camera_wrapper').css({'transform':'rotateX(90deg) rotateZ('+(pos_to_rot(scrollpos+currentrotation)+90)+'deg)'})
					if(pos_to_rot(scrollpos+currentrotation)%360 < 180){
            			$('.camera_view').css({'height':(wholeweek_length - initoffset + center_width_r)*spiral_unit+0.5*spiral_unit  +'px'})
					}else{
            			$('.camera_view').css({'height':(wholeweek_length - initoffset + center_width_r)*spiral_unit +'px'})
					}
					// console.log(scrollpos)
				});
            }
            function intervention(content,degree){
             	$('.intervention').empty()
				$('.intervention_wrapper').show()
				content.find('iframe').each(function(index){
					$('.intervention').append(this)
					if(index = content.find('iframe').length-1){
						content.find('iframe').remove()
					}
				})
			    var text = content.html()
				// if()
            		var text_array = text.split(' ')
            		for (var j = 0; j < text_array.length; j++) {
            			if(j>0){
            				$('.intervention').append('<span class="textspan textspan_'+j+'"> '+text_array[j]+'</span>')
            			}else{
            				$('.intervention').append('<span class="textspan textspan_'+j+'">'+text_array[j]+'</span>')
            			}
            			if(j == text_array.length-1){
			            	setTimeout(function(){
		        				text_animation(0)
		        				$('.textspan').hide()
		    					$('.intervention_hide').hide()
						   		$('.intervention_wrapper').css({'opacity':1})
			            	},50)
            			}
            		}
            	$('.intervention_close').click(function(){
            				$('.weekwarpper_current').find('.rotatey_'+degree).css({'transform':'translateX(-50%) rotateY('+degree+'deg) translateZ(-24vw)'})
							$('.week_whole_wrapper').css({'transform':'perspective(50vh) rotateX(0deg) translateY( '+ (-1*(Math.floor(scrollpos/translatey)*translatey)) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+pos_to_rot(scrollpos+currentrotation)+'deg)'})
							intervention_on = false
	            			$('.textspan').hide()
		    					$('.intervention_hide').show()
				    		$('.intervention_wrapper').hide()
						   	$('.intervention_wrapper').css({'opacity':0})
            	})
            }
            function text_animation(spancounter_ani){
            	$('.textspan_'+spancounter_ani).show()
            	setTimeout(function(){
            		text_animation(spancounter_ani+1)
            	},100)
            }
            function rotate_time(init){
            	currentrotation = currentrotation + 360/(24*60*6)
            	if(!init){
					move_wrapper(false)
				}
				$('.camera_wrapper').css({'transform':'rotate('+(pos_to_rot(scrollpos+currentrotation)+90)+'deg)'})
				if(pos_to_rot(scrollpos+currentrotation)%360 < 180){
					// $('.camera_wrapper').css({'margin-top':-0.5*spiral_unit + 'px'})
				}else{
					// $('.camera_wrapper').css({'margin-top':'0px'})
				}
				setTimeout(function(){rotate_time(false)},10000)
            }
            function move_wrapper(init){
            	console.log(init)
            	if(scrollpos > scrolldirection_value){
            		scrolldirection = 'down'
            	}else{
            		scrolldirection = 'up'
            	}
            	scrolldirection_value = scrollpos


            	var transition = 0
            	var transition_unit = 0
            	if(scrollpos%translatey > (translatey - 20)){
            		transition_unit = (20-(translatey-scrollpos%translatey))/2
            		transition = (translatey-scrollpos%translatey) * translatey/20
            	}
            	var k = Math.floor(scrollpos/translatey)
            	console.log(scrollpos)
            	setTimeout(function(){
            		console.log(scrollpos)
            	},1000)
            	if(init){
            				$('.weekwrapper_'+ Math.floor(k-2)).addClass('weekwarpper_prev2')
							$('.weekwrapper_'+ Math.floor(k-1)).addClass('weekwarpper_prev1')
							$('.weekwrapper_'+ Math.floor(k-0)).addClass('weekwarpper_current')
							$('.weekwrapper_'+ Math.floor(k+1)).addClass('weekwarpper_next1')
							$('.weekwrapper_'+ Math.floor(k+2)).addClass('weekwarpper_next2')
							$('.weekwrapper_'+ Math.floor(k+3)).addClass('weekwarpper_next3')
            				$('.weekwarpper_prev2').find('.week_board_inner').show()
							// $('.weekwarpper_prev2').find('.week_board_inner').css({'height':'75%'})
							$('.weekwarpper_prev1').find('.week_board_inner').show()
							// $('.weekwarpper_prev1').find('.week_board_inner').css({'height':'200%'})
							$('.weekwarpper_current').find('.week_board_inner').hide()
							$('.weekwarpper_next1').find('.week_board_inner').show()
							// $('.weekwarpper_next1').find('.week_board_inner').css({'height':'100%'})
							$('.weekwarpper_next2').find('.week_board_inner').show()
							// $('.weekwarpper_next2').find('.week_board_inner').css({'height':'75%'})
							$('.weekwarpper_next3').find('.week_board_inner').show()
							// $('.weekwarpper_next3').find('.week_board_inner').css({'height':'50%'})
						}

   				if($('.fake_scroll_wrapper').scrollTop() + $(window).height() > $('.fake_scroll').height()-100) {
   					// --------------------------------------------마지막부 original--------------------------------------------
     	  			//	current_scroll = k
   		 			//	$('.week_lastpage_arrowl').show()
					// $('.week_lastpage_arrowr').show()
   		 			//	$('.week_whole_wrapper').addClass('week_whole_wrapper_animate')
   		 			//	if(w/h>1/1){
		 			//        if(week_lastpage == 0){$('.week_whole_wrapper').css({'transform':'perspective(40vh) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(0+pos_to_rot(Math.floor(scrollpos/translatey+1)*translatey))+'deg)'})}
		 			//        if(week_lastpage == 1){$('.week_whole_wrapper').css({'transform':'perspective(40vh) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(120+pos_to_rot(Math.floor(scrollpos/translatey+1)*translatey))+'deg)'})}
		 			//        if(week_lastpage == 2){$('.week_whole_wrapper').css({'transform':'perspective(40vh) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(240+pos_to_rot(Math.floor(scrollpos/translatey+1)*translatey))+'deg)'})}
		 			//    }else{
		 			//        if(week_lastpage == 0){$('.week_whole_wrapper').css({'transform':'perspective(30vh) scale(0.55) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(0+pos_to_rot(Math.floor(scrollpos/translatey+1)*translatey))+'deg) '})}
		 			//        if(week_lastpage == 1){$('.week_whole_wrapper').css({'transform':'perspective(30vh) scale(0.55) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(120+pos_to_rot(Math.floor(scrollpos/translatey+1)*translatey))+'deg) '})}
		 			//        if(week_lastpage == 2){$('.week_whole_wrapper').css({'transform':'perspective(30vh) scale(0.55) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(240+pos_to_rot(Math.floor(scrollpos/translatey+1)*translatey))+'deg) '})}
		 			//    }
					// --------------------------------------------마지막부 original--------------------------------------------
            	}else{
            				
            		$('.week_lastpage_arrowl').hide()
					$('.week_lastpage_arrowr').hide()
					$('.lastpage_popupbox').hide()
            		$('.week_whole_wrapper').removeClass('week_whole_wrapper_animate')

	            	if(scrolldirection === 'down' && transition_unit!==10 && transition_unit!==0){
            				
	            		$('.weekwrapper_'+ Math.floor(k-2)).css({transform : 'translateY('+((k-2)*translatey)+'vh) translateY('+map_range(transition_unit, 0, 10, -50, -20 )+'vh) scaleX('+map_range(transition_unit, 0, 10, 5.0, 7.0)+') scaleZ('+map_range(transition_unit, 0, 10, 5.0, 7.0)+')'})
	            		$('.weekwrapper_'+ Math.floor(k-1)).css({transform : 'translateY('+((k-1)*translatey)+'vh) translateY('+map_range(transition_unit, 0, 10, -20, -50 )+'vh) scaleX('+map_range(transition_unit, 0, 10, 3, 5.0)+') scaleZ('+map_range(transition_unit, 0, 10, 3, 5.0)+')'})
	            		
	            		$('.weekwrapper_'+ Math.floor(k-0)).css({transform : 'translateY('+((k-0)*translatey)+'vh) translateY('+map_range(transition_unit, 0, 10,  -2.5, -20  )+'vh) scaleX('+map_range(transition_unit, 0, 10, 1, 3)+') scaleZ('+map_range(transition_unit, 0, 10, 1, 3)+')'})
	            		$('.weekwrapper_'+ Math.floor(k+1)).css({transform : 'translateY('+((k+1)*translatey)+'vh) translateY('+map_range(transition_unit, 0, 10,  -13, 0 )+'vh) scaleX('+map_range(transition_unit, 0, 10, .50, 1)+') scaleZ('+map_range(transition_unit, 0, 10, .50, 1)+')'})
	            		$('.weekwrapper_'+ Math.floor(k+2)).css({transform : 'translateY('+((k+2)*translatey)+'vh) translateY('+map_range(transition_unit, 0, 10, -86, -13)+'vh) scaleX('+map_range(transition_unit, 0, 10, .25, .50)+') scaleZ('+map_range(transition_unit, 0, 10, .25, .50)+')'})
	            		$('.weekwrapper_'+ Math.floor(k+3)).css({transform : 'translateY('+((k+3)*translatey)+'vh) translateY('+map_range(transition_unit, 0, 10, -156, -86)+'vh) scaleX('+map_range(transition_unit, 0, 10, .2, .25)+') scaleZ('+map_range(transition_unit, 0, 10, .2, .25)+')'})
	            		$('.weekwrapper_'+ Math.floor(k+4)).css({transform : 'translateY('+((k+4)*translatey)+'vh) translateY('+map_range(transition_unit, 0, 10, -0, -156)+'vh) scaleX('+map_range(transition_unit, 0, 10, .0, .2)+') scaleZ('+map_range(transition_unit, 0, 10, .0, .2)+')'})

 	             		$('.spiralwrapper_'+ Math.floor(k+1)).css({transform:'translateX(-50%) translateY(-50%)  translateY('+(10-transition_unit)*10+'%)'}) 
	            	}else if(scrolldirection === 'up' && transition_unit!==10 && transition_unit!==0){
            				
	            		$('.weekwrapper_'+ Math.floor(k-2)).css({transform : 'translateY('+((k-2)*translatey)+'vh) translateY('+map_range(transition_unit, 10, 0, -20  ,-50)+'vh) scaleX('+map_range(transition_unit, 10, 0, 7.0, 5.0)+') scaleZ('+map_range(transition_unit, 10, 0, 7.0, 5.0)+')'})
	            		$('.weekwrapper_'+ Math.floor(k-1)).css({transform : 'translateY('+((k-1)*translatey)+'vh) translateY('+map_range(transition_unit, 10, 0, -50, -20 )+'vh) scaleX('+map_range(transition_unit, 10, 0, 5.0, 3)+') scaleZ('+map_range(transition_unit, 10, 0, 5.0, 3)+')'})
	            		
	            		$('.weekwrapper_'+ Math.floor(k-0)).css({transform : 'translateY('+((k-0)*translatey)+'vh) translateY('+map_range(transition_unit, 10, 0,  -20,  0 )+'vh) scaleX('+map_range(transition_unit, 10, 0, 3, 1)+') scaleZ('+map_range(transition_unit, 10, 0, 3, 1)+')'})
	            		$('.weekwrapper_'+ Math.floor(k+1)).css({transform : 'translateY('+((k+1)*translatey)+'vh) translateY('+map_range(transition_unit, 10, 0,  -2.5 , -13)+'vh) scaleX('+map_range(transition_unit, 10, 0, 1, .50)+') scaleZ('+map_range(transition_unit, 10, 0, 1, .50)+')'})
	            		$('.weekwrapper_'+ Math.floor(k+2)).css({transform : 'translateY('+((k+2)*translatey)+'vh) translateY('+map_range(transition_unit, 10, 0, -13, -86)+'vh) scaleX('+map_range(transition_unit, 10, 0, .50, .25)+') scaleZ('+map_range(transition_unit, 10, 0, .50, .25)+')'})
	            		$('.weekwrapper_'+ Math.floor(k+3)).css({transform : 'translateY('+((k+3)*translatey)+'vh) translateY('+map_range(transition_unit, 10, 0, -86, -156)+'vh) scaleX('+map_range(transition_unit, 10, 0, .50, .2)+') scaleZ('+map_range(transition_unit, 10, 0, .50, .2)+')'})


 	             		$('.spiralwrapper_'+ Math.floor(k+1)).css({transform:'translateX(-50%) translateY(-50%)  translateY('+(10-transition_unit)*10+'%)'})
	            	}else{
            				
            				
            			if(current_scroll !== k){
				    		initoffset = k
            				current_scroll = k
            				
            				$('.weekwarpper_prev2').removeClass('weekwarpper_prev2')
							$('.weekwarpper_prev1').removeClass('weekwarpper_prev1')
							$('.weekwarpper_current').removeClass('weekwarpper_current')
							$('.weekwarpper_next1').removeClass('weekwarpper_next1')
							$('.weekwarpper_next2').removeClass('weekwarpper_next2')
							$('.weekwarpper_next3').removeClass('weekwarpper_next3')
            				$('.weekwrapper_'+ Math.floor(k-2)).addClass('weekwarpper_prev2')
							$('.weekwrapper_'+ Math.floor(k-1)).addClass('weekwarpper_prev1')
							$('.weekwrapper_'+ Math.floor(k-0)).addClass('weekwarpper_current')
							$('.weekwrapper_'+ Math.floor(k+1)).addClass('weekwarpper_next1')
							$('.weekwrapper_'+ Math.floor(k+2)).addClass('weekwarpper_next2')
							$('.weekwrapper_'+ Math.floor(k+3)).addClass('weekwarpper_next3')
            				$('.weekwarpper_prev2').find('.week_board_inner').show()
							$('.weekwarpper_prev1').find('.week_board_inner').show()
							$('.weekwarpper_current').find('.week_board_inner').hide()
							$('.weekwarpper_next1').find('.week_board_inner').show()
							$('.weekwarpper_next2').find('.week_board_inner').show()
							$('.weekwarpper_next3').find('.week_board_inner').show()
		            		$('.weekwrapper_'+ Math.floor(k-2)).css({transform : 'translateY('+((k-2)*translatey)+'vh) translateY(-20vh) scaleX(4.0) scaleZ(4.0)'})
		            		$('.weekwrapper_'+ Math.floor(k-1)).css({transform : 'translateY('+((k-1)*translatey)+'vh) translateY(-5vh)  scaleX(2.5) scaleZ(2.5)'})
		            		$('.weekwrapper_'+ Math.floor(k-0)).css({transform : 'translateY('+((k-0)*translatey)+'vh) translateY(-2.5vh)'})
		            		$('.weekwrapper_'+ Math.floor(k+1)).css({transform : 'translateY('+((k+1)*translatey)+'vh) translateY(-13vh) scaleX(.50) scaleZ(.50)'})
		            		$('.weekwrapper_'+ Math.floor(k+2)).css({transform : 'translateY('+((k+2)*translatey)+'vh) translateY(-86vh) scaleX(.25) scaleZ(.25)'})
		            		$('.weekwrapper_'+ Math.floor(k+3)).css({transform : 'translateY('+((k+3)*translatey)+'vh) translateY(-156vh) scaleX(.2) scaleZ(.2)'})
		            		$('.spiralwrapper').each(function(index){
			            		if(index<k+1){
			            			$(this).css({transform:'translateX(-50%) translateY(-50%)  translateY(0%)'})
			            			$(this).addClass('spiralwrapper_upper')
			            			$(this).removeClass('spiralwrapper_lower')
				            	}else{
			            			$(this).css({transform:'translateX(-50%) translateY(-50%)  translateY(100%)'})
			            			$(this).addClass('spiralwrapper_lower')
			            			$(this).removeClass('spiralwrapper_upper')
			            			var value = parseInt($(this).attr('class').split('spiralwrapper_')[1].split(' ')[0])-(k+1)
			            			$(this).css({'top':(value*2)+'vw'})
				            	}
			            		if(index<k+2){
			            			$(this).find('.spiral_board_inner_outerwall').css({'opacity':1})
				            	}else{
			            			$(this).find('.spiral_board_inner_outerwall').css({'opacity':0})
				            	}
		            		})
			            	infopopup_array = []
			            	$('.weekwarpper_current').find('.popups_info').each(function(){
			            		infopopup_array.push(parseInt($(this).parent().attr('class').split('rotatey_')[1].split(' ')[0]))
			            	})
			            	// console.log('hey')
            			}
	            	}
	            	
	   						// console.log(pos_to_rot(scrollpos+currentrotation))
            		if(scrolldirection === 'down' && transition>0){
	   					if(w/h>1/1){
							$('.week_whole_wrapper').css({'transform':' perspective(40vh) rotateX(0deg) translateY( '+ (-1*(Math.floor(scrollpos/translatey)*translatey)-(translatey-transition)) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+pos_to_rot(scrollpos+currentrotation)+'deg)'})
							week_whole_wrapper_animate_val_1 = -1*(Math.floor(scrollpos/translatey)*translatey)-(translatey-transition)
							week_whole_wrapper_animate_val_2 = wrapper_translatez
							
						}else{
							$('.week_whole_wrapper').css({'transform':' perspective(41.5vh) scale(0.55) rotateX(0deg) translateY( '+ (-1*(Math.floor(scrollpos/translatey)*translatey)-(translatey-transition)) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+pos_to_rot(scrollpos+currentrotation)+'deg)'})	
							week_whole_wrapper_animate_val_1 = -1*(Math.floor(scrollpos/translatey)*translatey)-(translatey-transition)
							week_whole_wrapper_animate_val_2 = wrapper_translatez
							
						}
					}else if(scrolldirection === 'up' && transition>0){
	   					if(w/h>1/1){
							$('.week_whole_wrapper').css({'transform':'perspective(40vh) rotateX(0deg) translateY( '+ (-1*(Math.floor(scrollpos/translatey)*translatey)-(translatey-transition)) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+pos_to_rot(scrollpos+currentrotation)+'deg)'})
							week_whole_wrapper_animate_val_1 = -1*(Math.floor(scrollpos/translatey)*translatey)-(translatey-transition)
							week_whole_wrapper_animate_val_2 = wrapper_translatez
							
						}else{
							$('.week_whole_wrapper').css({'transform':'perspective(41.5vh) scale(0.55) rotateX(0deg) translateY( '+ (-1*(Math.floor(scrollpos/translatey)*translatey)-(translatey-transition)) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+pos_to_rot(scrollpos+currentrotation)+'deg)'})	
							week_whole_wrapper_animate_val_1 = -1*(Math.floor(scrollpos/translatey)*translatey)-(translatey-transition)
							week_whole_wrapper_animate_val_2 = wrapper_translatez
							
						}
					}else{
	   					if(w/h>1/1){
							$('.week_whole_wrapper').css({'transform':'perspective(40vh) rotateX(0deg) translateY( '+ (-1*(Math.floor(scrollpos/translatey)*translatey)) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+pos_to_rot(scrollpos+currentrotation)+'deg)'})
							week_whole_wrapper_animate_val_1 = -1*(Math.floor(scrollpos/translatey)*translatey)
							week_whole_wrapper_animate_val_2 = wrapper_translatez
							
						}else{
							$('.week_whole_wrapper').css({'transform':'perspective(41.5vh) scale(0.55) rotateX(0deg) translateY( '+ (-1*(Math.floor(scrollpos/translatey)*translatey)) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+pos_to_rot(scrollpos+currentrotation)+'deg)'})	
							week_whole_wrapper_animate_val_1 = -1*(Math.floor(scrollpos/translatey)*translatey)
							week_whole_wrapper_animate_val_2 = wrapper_translatez
							
						}
					}
            	}
				    // if(Math.floor(($('.fake_scroll_wrapper').scrollTop()/(window.innerHeight/100))/translatey*scrollspeed) !== initoffset){
				    // 	initoffset = k
				    // 	show_week()
				    // }
            }
            function switch_view(){
            	//spiral_whole_wrapper_wrapper transform: scale(3);
            	// week_whole_wrapper_wrapper transform: scale(0.25);
            }
            function show_week(){
            	$('.weekwrapper').hide()
            	if(!ismobile){
            	            	$('.weekwrapper_'+(initoffset-3)).show()
            	            	$('.weekwrapper_'+(initoffset-2)).show()
            	            	$('.weekwrapper_'+(initoffset-1)).show()
            	            }
            	$('.weekwrapper_'+(initoffset+0)).show()
            	$('.weekwrapper_'+(initoffset+1)).show()
            	$('.weekwrapper_'+(initoffset+2)).show()
            	$('.weekwrapper_'+(initoffset+3)).show()
            }


            function week_lastpage_swipe(){
            	$('.week_lastpage_arrowl').click(function(){
            		if(week_lastpage==0){week_lastpage = 3}
            		week_lastpage--
            		week_lastpage = week_lastpage%3
            		if(w/h>1/1){
            			if(week_lastpage == 0){$('.week_whole_wrapper').css({'transform':'perspective(40vh) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(pos_to_rot(Math.floor(scrollpos/translatey)*translatey))+'deg)'})}
            			if(week_lastpage == 1){$('.week_whole_wrapper').css({'transform':'perspective(40vh) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(120+pos_to_rot(Math.floor(scrollpos/translatey)*translatey))+'deg)'})}
            			if(week_lastpage == 2){$('.week_whole_wrapper').css({'transform':'perspective(40vh) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(240+pos_to_rot(Math.floor(scrollpos/translatey)*translatey))+'deg)'})}
            		}else{
            			if(week_lastpage == 0){$('.week_whole_wrapper').css({'transform':'perspective(30vh) scale(0.55) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(pos_to_rot(Math.floor(scrollpos/translatey)*translatey))+'deg)'})}
            			if(week_lastpage == 1){$('.week_whole_wrapper').css({'transform':'perspective(30vh) scale(0.55) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(120+pos_to_rot(Math.floor(scrollpos/translatey)*translatey))+'deg)'})}
            			if(week_lastpage == 2){$('.week_whole_wrapper').css({'transform':'perspective(30vh) scale(0.55) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(240+pos_to_rot(Math.floor(scrollpos/translatey)*translatey))+'deg)'})}
            		}
            	})
            	$('.week_lastpage_arrowr').click(function(){
            		week_lastpage++
            		week_lastpage = week_lastpage%3
            		if(w/h>1/1){
            			if(week_lastpage == 0){$('.week_whole_wrapper').css({'transform':'perspective(40vh) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(pos_to_rot(Math.floor(scrollpos/translatey)*translatey))+'deg)'})}
            			if(week_lastpage == 1){$('.week_whole_wrapper').css({'transform':'perspective(40vh) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(120+pos_to_rot(Math.floor(scrollpos/translatey)*translatey))+'deg)'})}
            			if(week_lastpage == 2){$('.week_whole_wrapper').css({'transform':'perspective(40vh) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(240+pos_to_rot(Math.floor(scrollpos/translatey)*translatey))+'deg)'})}
            		}else{
            			if(week_lastpage == 0){$('.week_whole_wrapper').css({'transform':'perspective(30vh) scale(0.55) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(pos_to_rot(Math.floor(scrollpos/translatey)*translatey))+'deg)'})}
            			if(week_lastpage == 1){$('.week_whole_wrapper').css({'transform':'perspective(30vh) scale(0.55) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(120+pos_to_rot(Math.floor(scrollpos/translatey)*translatey))+'deg)'})}
            			if(week_lastpage == 2){$('.week_whole_wrapper').css({'transform':'perspective(30vh) scale(0.55) rotateX(0deg) translateY( '+ -1*((week_array.length-1)*translatey) +'vh) translateZ('+wrapper_translatez+'vw)  rotateY('+(240+pos_to_rot(Math.floor(scrollpos/translatey)*translatey))+'deg)'})}
            		}
            	})
            }

			function map_range(value, low1, high1, low2, high2) {
			    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
			}




            function popup(){
            	// 위에 숫자
            	$('.weekwrapper').each(function(index){
            		$(this).append('<div class="info_popup_wrapper info_popup_wrapper_1" style="transform: translateX(-50%) rotateY('+(360/7 * 0)+'deg) translateZ('+(-1*(translatez-1))+'vw)"><div class="info_popup">'+popup_counter+'</div></div>')
            		$(this).append('<div class="info_popup_wrapper info_popup_wrapper_2" style="transform: translateX(-50%) rotateY('+(360/7 * 1)+'deg) translateZ('+(-1*(translatez-1))+'vw)"><div class="info_popup">'+(popup_counter+6)+'</div></div>')
            		$(this).append('<div class="info_popup_wrapper info_popup_wrapper_3" style="transform: translateX(-50%) rotateY('+(360/7 * 2)+'deg) translateZ('+(-1*(translatez-1))+'vw)"><div class="info_popup">'+(popup_counter+5)+'</div></div>')
            		$(this).append('<div class="info_popup_wrapper info_popup_wrapper_4" style="transform: translateX(-50%) rotateY('+(360/7 * 3)+'deg) translateZ('+(-1*(translatez-1))+'vw)"><div class="info_popup">'+(popup_counter+4)+'</div></div>')
            		$(this).append('<div class="info_popup_wrapper info_popup_wrapper_5" style="transform: translateX(-50%) rotateY('+(360/7 * 4)+'deg) translateZ('+(-1*(translatez-1))+'vw)"><div class="info_popup">'+(popup_counter+3)+'</div></div>')
            		$(this).append('<div class="info_popup_wrapper info_popup_wrapper_6" style="transform: translateX(-50%) rotateY('+(360/7 * 5)+'deg) translateZ('+(-1*(translatez-1))+'vw)"><div class="info_popup">'+(popup_counter+2)+'</div></div>')
            		$(this).append('<div class="info_popup_wrapper info_popup_wrapper_7" style="transform: translateX(-50%) rotateY('+(360/7 * 6)+'deg) translateZ('+(-1*(translatez-1))+'vw)"><div class="info_popup">'+(popup_counter+1)+'</div></div>')
            	popup_counter = popup_counter+7
            		if(index == $('.weekwrapper').length-1){
	            		// $('.next_comingsoon').find('.info_popup_wrapper').each(function(index){
	            		// 	console.log('1')
	            		// 	$(this).find('.info_popup').html('D-'+(index+1))
	            		// })
	            		// $('.comingsoon').find('.info_popup_wrapper').each(function(index){
	            		// 	console.log('2')
	            		// 	$(this).find('.info_popup').html('D-'+(index+8))
	            		// })
	            	}
            	})
	        }
            function hovereffect(){
                //         $('.board').mouseenter(function(){
				            // // $(this).parent().find('.board').css({'background-color':'#dddddd'})
                //         	$(this).parent().find('.info_popup').show()
                //         })
                       
                //         $('.board').mouseleave(function(){
                //         	// $(this).parent().find('.board').css({'background-color':'white'})
                //         	$(this).parent().find('.info_popup').hide()
                //         })
                    
                        $('.spiral').mouseenter(function(){
                        	noscroll = true
                        	var selected = $(this).parent().attr('class').split('spiralwrapper_')[1].split('_')[0]
                        	$('.spiral_whole_wrapper .spiralwrapper_' + selected + '_1 .spiral').css({'border-width':'7px'})
                        	$('.spiral_whole_wrapper .spiralwrapper_' + selected + '_2 .spiral').css({'border-width':'7px'})
                        })
                        
	                    $('.spiral').mouseleave(function(){
                        	noscroll = false
                        	var selected = $(this).parent().attr('class').split('spiralwrapper_')[1].split('_')[0]
                        	$('.spiral_whole_wrapper .spiralwrapper_' + selected + '_1 .spiral').css({'border-width':'1px'})
                        	$('.spiral_whole_wrapper .spiralwrapper_' + selected + '_2 .spiral').css({'border-width':'1px'})
                        	$('.popupbox').html(' ')
	                        })
                    	
                        $('.mark').mouseenter(function(){
                        	noscroll = true
                        	var selected = $(this).attr('class').split('mark_info_')[1].split(' ')[0]
                        	$('.popupbox').html($('.mark_content.mark_info_'+selected+' .markcontent').html())
                        })
                        
	                    $('.mark').mouseleave(function(){
                        	noscroll = false
                        	var selected = $(this).attr('class').split('mark_info_')[1].split(' ')[0]
                        	$('.popupbox').html(' ')
	                    })
                    	
						$('.popups').click(function(){
			    			if(!intervention_on){
			    				var value = parseInt($(this).parent().attr('class').split('rotatey_')[1].split(' ')[0])
								intervention_on = true
			    				$('.week_whole_wrapper').css({'transition':'transform 1s'})
								$('.week_whole_wrapper').css({'transform':'perspective(50vh) rotateX(0deg) translateY( '+ (-1*(Math.floor(scrollpos/translatey)*translatey)) +'vh) translateZ(30vw)  rotateY('+(pos_to_rot(scrollpos+currentrotation))+'deg)'})
			    				$('.weekwarpper_current').find('.rotatey_'+value).css({'transform':'translateX(-50%) rotateY('+value+'deg) translateZ(-4.25vw)'})
								setTimeout(function(){
			    					intervention($('.weekwarpper_current').find('.rotatey_'+value ).find('.popups'),value)
								},1000)
			    			}
			    			removeItemAll(infopopup_array, infopopup_array[i])
						})
                    }
            $('.spiral_view_button').click(function(){
            	$('body').removeClass('week_view').addClass('spiral_view')
				window.location.hash = 'spiral';
            })
			$('.week_view_button').click(function(){
				$('body').removeClass('spiral_view').addClass('week_view')
				window.location.hash = 'week';
			})
            $('.spiral_frame').click(function(){
            
				if(window.location.hash && window.location.hash.split('#')[1] === 'week') {
	            		$('body').removeClass('week_view').addClass('spiral_view')
						window.location.hash = 'spiral';
				}
            })
			$('.week_frame').click(function(){
			
				if(window.location.hash && window.location.hash.split('#')[1] === 'spiral') {
						$('body').removeClass('spiral_view').addClass('week_view')
						window.location.hash = 'week';
				}
			})
            $(document).mousemove(function(e){
            	$('.followcursor').css({'left':e.pageX+'px','top':(e.pageY)+'px'})
            })
            function settingup_lastpage(){
            	$('.weekwrapper_'+(week_array.length-1)+' .board_info_time_0').append('\
            		\
            	')
            	$('.artist_list').click(function(){
	            	$('.lastpage_popupbox').empty()
	            	$('.lastpage_popupbox').append('\
	            		<div class="popups_tab"><div class="close"></div></div>\
						<div class="artist_content_0 artist_content_0_1">\
						“The traveling puppet shows range from tightly composed theater pieces presented by members of the company to extensive outdoor pageants which require the 		participation of many volunteers.”\
						TDR: Why did you name your theatre Bread & Puppet? SCHUMANN: Bread means bread. Something basic. We give it out during or after the show. \
						TDR: Why? \
						SCHUMANN: We would like to be able to feed people.\
						</div>\
						\
					')
					$('.lastpage_popupbox').show()
		            $('.close').click(function(){
		            	$(this).parent().parent().hide()
		            })
            	})







            	$('.weekwrapper_'+(week_array.length-1)+' .board_info_time_2').append('<div class="img_list_wrapper"></div>')



            }

            function analyze_data(data_array){
            	for (var i = 1; i < data_array.length; i++) {
                	for (var j = 2; j < data_array[i].length; j++) {
                		if(parseInt(data_array[i][j]) !== 0){
                			mark_amount++
                			$('.markcontent_wrapper').append('<div class="mark_content mark_info_month_'+data_array[i][0]+'_week_'+data_array[i][1]+'_time_'+j+' mark_'+mark_amount+'"><div class="markcontent">'+data_array[i][j]+'</div></div>')
                			$('.spiral_whole_wrapper').append('<div class="mark mark_info_month_'+data_array[i][0]+'_week_'+data_array[i][1]+'_time_'+j+' mark_'+mark_amount+'"></div>')
                			if(j-2<12){
                				$('.spiral_whole_wrapper .mark_'+mark_amount).css({'transform':'translateY('+spiral_unit/-2+'px) rotate('+ ((j-2)/24 * 360) + 'deg) translateY('+(-1*$('.spiral_wrapper_'+(i)+'_2').outerWidth()/2+spiral_unit/-2) +'px'})
                			}else{
                				$('.spiral_whole_wrapper .mark_'+mark_amount).css({'transform':'rotate('+((j-2)/24 * 360) + 'deg) translateY('+(-1*($('.spiral_wrapper_'+(i)+'_1').outerWidth()/2)+spiral_unit/-2) +'px)'})
                			}
                		}
                	}
            	}
            }
})