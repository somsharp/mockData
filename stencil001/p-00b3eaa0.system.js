System.register([],(function(t){"use strict";return{execute:function(){var r=t("g",(function(t,r,e,h,u){return n(t[1],r[1],e[1],h[1],u).map((function(n){return a(t[0],r[0],e[0],h[0],n)}))}));var a=function(t,r,a,n,e){var h=3*r*Math.pow(e-1,2);var u=-3*a*e+3*a+n*e;var M=t*Math.pow(e-1,3);return e*(h+e*u)-M};var n=function(t,r,a,n,e){t-=e;r-=e;a-=e;n-=e;var u=h(n-3*a+3*r-t,3*a-6*r+3*t,3*r-3*t,t);return u.filter((function(t){return t>=0&&t<=1}))};var e=function(t,r,a){var n=r*r-4*t*a;if(n<0){return[]}else{return[(-r+Math.sqrt(n))/(2*t),(-r-Math.sqrt(n))/(2*t)]}};var h=function(t,r,a,n){if(t===0){return e(r,a,n)}r/=t;a/=t;n/=t;var h=(3*a-r*r)/3;var u=(2*r*r*r-9*r*a+27*n)/27;if(h===0){return[Math.pow(-u,1/3)]}else if(u===0){return[Math.sqrt(-h),-Math.sqrt(-h)]}var M=Math.pow(u/2,2)+Math.pow(h/3,3);if(M===0){return[Math.pow(u/2,1/2)-r/3]}else if(M>0){return[Math.pow(-(u/2)+Math.sqrt(M),1/3)-Math.pow(u/2+Math.sqrt(M),1/3)-r/3]}var o=Math.sqrt(Math.pow(-(h/3),3));var s=Math.acos(-(u/(2*Math.sqrt(Math.pow(-(h/3),3)))));var i=2*Math.pow(o,1/3);return[i*Math.cos(s/3)-r/3,i*Math.cos((s+2*Math.PI)/3)-r/3,i*Math.cos((s+4*Math.PI)/3)-r/3]}}}}));