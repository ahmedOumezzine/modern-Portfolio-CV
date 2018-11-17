function IsEmail(t) {
   var e = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   return e.test(t) ? !0 : !1
}
var $ = jQuery.noConflict();
$(document).ready(function() {
      function t(t) {
         return t > 9 ? t : "0" + t
      }

      function e(t, e) {
         return new RegExp(" " + e + " ").test(" " + t.className + " ")
      }

      function n(t, n) {
         var i = " " + t.className.replace(/[\t\r\n]/g, " ") + " ";
         if (e(t, n)) {
            for (; i.indexOf(" " + n + " ") >= 0;) i = i.replace(" " + n + " ", " ");
            t.className = i.replace(/^\s+|\s+$/g, "")
         } else t.className += " " + n
      }
      if ($(window).width() > 767) {
         window.scrollReveal = new scrollReveal({
               reset: !1
            }),
            function() {
               var t, e, n = window.requestAnimationFrame || function(t) {
                     setTimeout(t, 1e3 / 60)
                  },
                  i = [].slice.call(document.querySelectorAll(".layer")).map(function(t) {
                     var e = t.getBoundingClientRect();
                     return t.x = e.left, t.y = e.top, t.w = e.right - e.left, t.h = e.bottom - e.top, t.fX = t.getAttribute("data-force-x") || t.getAttribute("data-force") || 10, t.fY = t.getAttribute("data-force-y") || t.getAttribute("data-force") || 10, t
                  });
               document.addEventListener("dragover", function(n) {
                     t = n.clientX, e = n.clientY
                  }, !1), document.addEventListener("mousemove", function(n) {
                     t = n.clientX, e = n.clientY
                  }, !1),
                  function o() {
                     if (t && e) {
                        var a = window.innerWidth,
                           r = window.innerHeight,
                           s = a / 2,
                           c = r / 2,
                           l = t - a / 2,
                           u = r / 2 - e;
                        i.forEach(function(t) {
                           var e = t.w / t.fX * (l / -s),
                              n = t.h / t.fY * (u / c);
                           t.style.transform = t.style["-webkit-transform"] = "translate(" + e + "px," + n + "px)"
                        })
                     }
                     n(o)
                  }()
            }(),
            function() {
               function t() {
                  n.width = window.innerWidth, n.height = window.innerHeight, e()
               }

               function e() {
                  function t() {
                     v += .5;
                     var t = parseInt(v);
                     if (!(v > m.length - 2)) {
                        i.clearRect(0, 0, n.width, n.height), i.beginPath(), i.moveTo(m[t].x, m[t].y);
                        for (var e = t; e < m.length; e++) i.lineTo(m[e].x, m[e].y);
                        i.stroke()
                     }
                  }

                  function e() {
                     requestAnimationFrame(e), t()
                  }

                  function o(t) {
                     t.preventDefault(), t.stopPropagation(), c = parseInt(t.clientX - d), l = parseInt(t.clientY - f), m.length = 0, m.push({
                        x: c,
                        y: l
                     }), v = 0, p = !0
                  }

                  function a(t) {
                     t.preventDefault(), t.stopPropagation(), mouseX = parseInt(t.clientX - d), mouseY = parseInt(t.clientY - f), p = !1
                  }

                  function r(t) {
                     t.preventDefault(), t.stopPropagation(), mouseX = parseInt(t.clientX - d), mouseY = parseInt(t.clientY - f), p = !1
                  }

                  function s(t) {
                     p && (t.preventDefault(), t.stopPropagation(), mouseX = parseInt(t.clientX - d), mouseY = parseInt(t.clientY - f), m.push({
                        x: mouseX,
                        y: mouseY
                     }))
                  }
                  i.lineCap = "round", i.lineJoin = "round", i.lineWidth = 4, i.strokeStyle = "#fb3";
                  var c, l, u = $("#canvas"),
                     h = u.offset(),
                     d = h.left,
                     f = h.top,
                     p = (u.scrollLeft(), u.scrollTop(), !1),
                     m = [],
                     v = 0;
                  e(), $("#canvas").mousedown(function(t) {
                     o(t)
                  }), $("#canvas").mousemove(function(t) {
                     s(t)
                  }), $("#canvas").mouseup(function(t) {
                     a(t)
                  }), $("#canvas").mouseout(function(t) {
                     r(t)
                  })
               }
               var n = document.getElementById("canvas"),
                  i = n.getContext("2d");
               window.addEventListener("resize", t, !1), t()
            }();
         var i = {
            init: function() {
               this.diagram()
            },
            random: function(t, e) {
               return Math.floor(Math.random() * (e - t + 1) + t)
            },
            diagram: function() {
               var t = Raphael("diagram", 600, 600),
                  e = 73,
                  n = "Skills",
                  o = 250;
               t.circle(300, 300, 85).attr({
                  stroke: "none",
                  fill: "#0099cc"
               });
               var a = t.text(300, 300, n).attr({
                  font: "16px Roboto Slab",
                  fill: "#fff"
               }).toFront();
               t.customAttributes.arc = function(t, e, n) {
                  var o = 3.6 * t,
                     a = 360 == o ? 359.99 : o,
                     r = i.random(91, 240),
                     s = (r - a) * Math.PI / 180,
                     c = r * Math.PI / 180,
                     l = 300 + n * Math.cos(c),
                     u = 300 - n * Math.sin(c),
                     h = 300 + n * Math.cos(s),
                     d = 300 - n * Math.sin(s),
                     f = [
                        ["M", l, u],
                        ["A", n, n, 0, +(a > 180), 1, h, d]
                     ];
                  return {
                     path: f,
                     stroke: e
                  }
               }, $(".get").find(".arc").each(function() {
                  var i = $(this),
                     r = i.find(".color").val(),
                     s = i.find(".percent").val(),
                     c = i.find(".text").text();
                  e += 30;
                  var l = t.path().attr({
                     arc: [s, r, e],
                     "stroke-width": 26
                  });
                  l.mouseover(function() {
                     this.animate({
                        "stroke-width": 50,
                        opacity: .75
                     }, 1e3, "elastic"), "VML" != Raphael.type && this.toFront(), a.stop().animate({
                        opacity: 0
                     }, o, ">", function() {
                        this.attr({
                           text: c + "\n" + s + "%"
                        }).animate({
                           opacity: 1
                        }, o, "<")
                     })
                  }).mouseout(function() {
                     this.stop().animate({
                        "stroke-width": 26,
                        opacity: 1
                     }, 4 * o, "elastic"), a.stop().animate({
                        opacity: 0
                     }, o, ">", function() {
                        a.attr({
                           text: n
                        }).animate({
                           opacity: 1
                        }, o, "<")
                     })
                  })
               })
            }
         };
         $(function() {
            i.init()
         })
      }
      $("#fc-slideshow").flipshow(), $(window).load(function() {
         var t = $(".portfolioContainer");
         t.isotope({
            filter: "*",
            animationOptions: {
               duration: 750,
               easing: "linear",
               queue: !1
            }
         }), $(".portfolioFilter a").click(function() {
            $(".portfolioFilter .current").removeClass("current"), $(this).addClass("current");
            var e = $(this).attr("data-filter");
            return t.isotope({
               filter: e,
               animationOptions: {
                  duration: 750,
                  easing: "linear",
                  queue: !1
               }
            }), !1
         })
      }), $(".fancybox-buttons").fancybox({
         openEffect: "elastic",
         openSpeed: 150,
         closeEffect: "elastic",
         closeSpeed: 150,
         closeBtn: !1,
         padding: 0,
         helpers: {
            title: {
               type: "inside"
            },
            buttons: {},
            overlay: {
               locked: !1
            }
         },
         afterLoad: function() {
            this.title ? " - " + this.title : ""
         }
      }), $(document).ready(function() {
         nice = $("html").niceScroll()
      }), $("#cf_menu a, .button, .view-works, ul.fc-slides li a, .download-resume-cta, #ToggleNav li a ").click(function(t) {
         t.preventDefault(), $("#cf_menu a, button, .view-works, ul.fc-slides li a, .download-resume-cta, #ToggleNav li a").removeClass("active"), $(this).addClass("active");
         var e = $(this).attr("href"),
            n = $(e).offset().top - $(this).outerHeight(),
            i = $("html, body"),
            o = Math.abs(i.scrollTop() - n);
         o > 5 && i.animate({
            scrollTop: n
         }, 2e3)
      });
      var o = 0;
      setInterval(function() {
         jQuery("#seconds").html(t(++o % 60)), jQuery("#minutes").html(t(parseInt(o / 60, 10)))
      }, 1e3), $(function() {
         $.scrollUp({
            scrollName: "scrollUp",
            scrollDistance: 300,
            scrollFrom: "top",
            scrollSpeed: 300,
            easingType: "linear",
            animation: "fade",
            animationSpeed: 200,
            scrollTrigger: !1,
            scrollText: "Scroll to top",
            scrollTitle: !1,
            scrollImg: !1,
            activeOverlay: !1,
            zIndex: 999
         })
      }), $(function() {
         $(".destroy").click(function() {
            $.scrollUp.destroy()
         })
      }), $(window).width() >= 768 && $(function() {
         $(document).ready(function() {
            $(".full-page").css({
               height: $(window).height() + "px"
            })
         }), $(window).resize(function() {
            $(".full-page").css({
               height: $(window).height() + "px"
            })
         })
      }), $(function() {
         $(document).bind("contextmenu", function(t) {
            t.preventDefault()
         })
      });
      var a = document.getElementById("toggle");
      a.onclick = function() {
         return n(this, "on"), !1
      }
   }),
   function(t) {
      function e() {
         var t = document.createElement("div"),
            e = "";
         return "WebkitTransition" in t.style ? e = "-webkit-" : "MozTransition" in t.style && (e = "-moz-"), e
      }

      function n(e) {
         this.$elt = t('<div class="nabpi n' + e + '"><div class="left wing"></div><div class="body"></div><div class="right wing"></div></div'), this.elt = this.$elt[0], this.$wings = this.$elt.find(".wing"), this.scale = .3 * Math.random() + .1, this.$wings.css("animation-duration", 2 * this.scale + "s"), this.x = Math.random() * t(document).width(), this.y = Math.random() * t(document).height(), this.vx = 10 * Math.random() - 5, this.vy = 10 * Math.random() - 5, this.l = 20 * this.scale, this.z = Math.round(-1 / this.scale * 2500), this.move()
      }

      function i() {
         for (var t = 0; t < o.length; t++) o[t].setDestination(a, r)
      }
      var o = (t("body"), []),
         a = t(document).width() / 2,
         r = t(document).height() / 2,
         s = e();
      n.prototype.move = function() {
         var t = Math.sqrt(this.vx * this.vx + this.vy * this.vy),
            e = this.vx / t,
            n = 180 * Math.acos(e) / Math.PI + 90,
            i = "perspective(4000px) translateZ(" + this.z + "px) ";
         this.vy < 0 && (n = 180 - n), i += "rotateZ(" + Math.round(n) + "deg)", this.x += this.vx, this.y += this.vy;
         var o = "";
         return o += s + "transform:" + i + ";", o += "left:" + Math.round(this.x) + "px;", o += "top:" + Math.round(this.y) + "px;", this.elt.style.cssText = o, this
      }, n.prototype.setDestination = function(t, e) {
         var n = t - this.x,
            i = e - this.y,
            o = Math.sqrt(n * n + i * i);
         return this.vx = this.vx + .4 * n / o, this.vy = this.vy + .4 * i / o, this.limit().move(), this
      }, n.prototype.limit = function() {
         var t = this.l;
         return this.vx > t ? this.vx = t : this.vx < -t && (this.vx = -t), this.vy > t ? this.vy = t : this.vy < -t && (this.vy = -t), this
      }, t(document).ready(function() {
         for (var e = t("#butterflycontainer"), s = 0; 10 > s; s++) {
            var c = new n(s % 4 + 1);
            e.append(c.$elt), o.push(c)
         }
         t(document).on("mousemove", function(t) {
            a = t.clientX, r = t.clientY
         }), t(document).on("click", function() {
            for (var t = 0; t < o.length; t++) o[t].vx = 40 - 80 * Math.random(), o[t].vy = 40 - 80 * Math.random()
         }), setInterval(function() {
            i()
         }, 40)
      })
   }(jQuery), jQuery(document).ready(function() {
      jQuery("#submitquery").click(function(t) {
         t.preventDefault();
         var e = jQuery(this).parents("form"),
            n = (e.attr("action"), /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/),
            i = jQuery('<span class="error"></span>');
         if (jQuery("p", e).removeClass("error"), jQuery("span.error").remove(), jQuery(".required", e).each(function() {
               var t = jQuery(this).val(),
                  e = jQuery(this).parent();
               ("" == t || "-1" == t) && e.addClass("error").append(i.clone().text("This Field Required")), 1 == jQuery(this).hasClass("email") && (n.test(t) || e.addClass("error").append(i.clone().text("Enter valid email")))
            }), jQuery("span.error").length > 0) jQuery("span.error").each(function() {
            var t = 5,
               e = jQuery(this).outerWidth(),
               n = e + t;
            jQuery(this).show().css({
               display: "block",
               opacity: 0,
               right: -n + "px"
            }).animate({
               right: -e + "px",
               opacity: 1
            }, "slow")
         });
         else {
            jQuery("#contact-form").children().hide(), jQuery("#contact-form").append('<img class="loader" src="../images/bx_loader.gif"/>');
            var o = jQuery.ajax({
               url: "contact-submit.php",
               type: "POST",
               data: jQuery("#contact-form").serialize()
            });
            o.done(function(t) {
               jQuery(".loader").hide(), jQuery(".success").remove(), jQuery("#contact-form").append('<div class="success"></div>'), jQuery(".success").html(t), jQuery(".success").fadeIn(500)
            }), o.fail(function(t, e) {
               jQuery("#contact-form").append('<div class="errmsg"></div>'), jQuery(".errmsg").html(e), jQuery(".errmsg").fadeIn(500)
            })
         }
         t.preventDefault()
      })
   });