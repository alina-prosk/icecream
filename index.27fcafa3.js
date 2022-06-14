var time=2,cc=1;$(window).scroll((function(){$("#counter").each((function(){$(this).offset().top<$(window).scrollTop()+600&&cc<2&&($(".number").addClass("viz"),$("p").each((function(){var t=1,c=$(this).data("num"),n=1e3*time/c,e=$(this),i=setInterval((function(){t<=c?e.html(t):(cc+=2,clearInterval(i)),t++}),n)})))}))}));
//# sourceMappingURL=index.27fcafa3.js.map
