var myAgent="";var hk=0;var myRealAgent="";function ik(){var jk=["\u006fpe\162\141","\155\163i\145","sa\u0066\141\162i","\146ir\u0065\146\u006f\u0078","\u006eets\u0063ap\u0065","\u006do\u007ail\u006c\141"];var ej=navigator.userAgent.toLowerCase();for(var i=0;i<jk.length;i++){var kk=jk[i];if(ej.indexOf(kk)!=-1){myAgent=kk;if(!window.RegExp)break;var lk=new RegExp(kk+"\u005b \/]\u003f([0\u002d\071\135+\u0028\.\133\060-9\135\053)\077\u0029");if(lk.exec(ej)!=null){hk=parseFloat(RegExp.$1);} break;} } myRealAgent=myAgent;if(navigator.product=="G\u0065c\153\u006f")myAgent="moz";} ik();function getEl(name){return document.getElementById(name);} 