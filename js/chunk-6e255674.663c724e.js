(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e255674"],{"488d":function(t,s,e){"use strict";var i=e("7d43"),a=e.n(i);a.a},7779:function(t,s,e){var i={"./10.png":"b6a2","./10_11.png":"5942","./10_13.png":"a6a7","./10_14.png":"6b4b","./10_2.png":"469a","./10_3.png":"bcc0","./10_4.png":"d88b","./10_9.png":"997f","./11.png":"ce5e","./12.png":"53a0","./13.png":"49b1","./14.png":"a966"};function a(t){var s=n(t);return e(s)}function n(t){if(!e.o(i,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=n,t.exports=a,a.id="7779"},"7d43":function(t,s,e){},a819:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"container-fluid activities"},[t._m(0),i("div",{staticClass:"container-fluid section2"},[t._m(1),i("br"),i("br"),i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-1 col-md-2"}),i("div",{staticClass:"col-12 col-md-8"},t._l(4,(function(s){return i("div",{key:s,staticClass:"mb-5"},[i("div",{staticClass:"row"},[i("div",{staticClass:"underLineLeft"},[i("div",[i("b",[t._v(t._s(t.questions[s-1]))])])])]),i("div",{staticClass:"row mt-3"},[i("div",{staticClass:"col-1"}),i("div",{staticClass:"col-12 col-md-10"},[i("div",{staticClass:"padd"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.answers[s-1],expression:"answers[i-1]"}],staticClass:"w-100 text-center",staticStyle:{border:"none"},attrs:{placeholder:"____________________________________________________",type:"text"},domProps:{value:t.answers[s-1]},on:{input:function(e){e.target.composing||t.$set(t.answers,s-1,e.target.value)}}})]),i("div",{staticClass:"col-1"})])])])})),0),i("div",{staticClass:"col-1 col-md-2"})]),t._m(2),i("br"),i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-1"}),i("div",{staticClass:"col-12 col-md-10"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 text-center"},[i("table",{staticStyle:{width:"100%"}},t._l(4,(function(s){return i("tr",{key:s},t._l(5,(function(a){return i("td",{key:a,staticClass:"text-center",class:a%2==0?"dark":"nodark"},[1===s?i("img",{staticClass:"img-fluid imgmini",attrs:{src:e("7779")("./1"+(a-1)+".png"),alt:""}}):i("div",{staticClass:"noimg"},[t.isInput(s,a)?i("input",{directives:[{name:"model",rawName:"v-model",value:t.answers[3+a][s-2],expression:"answers[3+j][i-2]"}],staticClass:"w-100 text-center",staticStyle:{border:"none"},attrs:{type:"text"},domProps:{value:t.answers[3+a][s-2]},on:{input:function(e){e.target.composing||t.$set(t.answers[3+a],s-2,e.target.value)}}}):i("div",[t._v("\n                      "+t._s(t.getItem(s,a))+"\n                    ")])])])})),0)})),0)])])]),i("div",{staticClass:"col-1"})]),i("br")]),i("div",{staticClass:"container-fluid section3"},[t._m(3),i("br"),t._m(4),i("br"),i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"canvas mt-3"},[i("v-stage",{ref:"stage",attrs:{config:t.stageSize},on:{mousedown:t.handleMouseDown,mouseup:t.handleMouseUp,mousemove:t.handleMouseMove,touchstart:t.handleMouseDown,touchend:t.handleMouseUp,touchmove:t.handleMouseMove}},[i("v-layer",[t._l(t.connections,(function(t){return i("v-line",{key:"line_"+t.id,attrs:{config:{stroke:"black",points:t.points}}})})),t._l(t.targets,(function(t){return i("v-image",{key:"konva_"+t.id,attrs:{config:{x:t.x,y:t.y,image:t.image,width:t.width,id:t.id}}})}))],2),i("v-layer",{ref:"dragLayer"})],1)],1)]),i("br"),t._m(5),t._m(6),t._m(7),i("br"),t._m(8),t._m(9),t._m(10),i("br")]),i("div",{staticClass:"container-fluid section4"},[i("br"),t._m(11),t._m(12),i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-12 col-md-3"}),i("div",{staticClass:"col-12 col-md-6 text-center"},[i("div",{staticClass:"row"},t._l(3,(function(t){return i("div",{key:t,staticClass:"col-12"},[i("img",{staticClass:"img-fluid center_img",attrs:{src:e("f452")("./Recurso 20"+(t+1)+"@4x.png"),alt:"a"}})])})),0)]),i("div",{staticClass:"col-12 col-md-3"})]),i("br"),t._m(13),i("br"),t._m(14),t._m(15),t._m(16),i("br"),t._m(17),t._m(18),i("br"),t._m(19),i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-1"}),i("div",{staticClass:"col-10"},t._l(2,(function(s){return i("div",{key:s,staticClass:"row mt-5"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"underLineLeft"},[i("div",[i("b",[t._v("\n                  "+t._s(t.questions[s+3])+"\n                ")])])])]),i("div",{staticClass:"col-12 mt-2"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-1"}),i("div",{staticClass:"col-10"},[i("div",{staticClass:"padd"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.answers[s+8],expression:"answers[i+8]"}],staticClass:"w-100 text-center",staticStyle:{border:"none"},attrs:{placeholder:"____________________________________________________",type:"text"},domProps:{value:t.answers[s+8]},on:{input:function(e){e.target.composing||t.$set(t.answers,s+8,e.target.value)}}})])]),i("div",{staticClass:"col-1"})])])])})),0),i("div",{staticClass:"col-1"})]),i("br"),t._m(20),i("br"),t._m(21),i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-1"}),i("div",{staticClass:"col-10"},t._l(3,(function(s){return i("div",{key:s,staticClass:"row mt-5"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"underLineLeft"},[i("div",[i("b",[t._v("\n                  "+t._s(t.questions[s+5])+"\n                ")])])])]),i("div",{staticClass:"col-12 mt-2"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-1"}),i("div",{staticClass:"col-10"},[i("div",{staticClass:"padd"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.answers[s+10],expression:"answers[i+10]"}],staticClass:"w-100 text-center",staticStyle:{border:"none"},attrs:{placeholder:"____________________________________________________",type:"text"},domProps:{value:t.answers[s+10]},on:{input:function(e){e.target.composing||t.$set(t.answers,s+10,e.target.value)}}})])]),i("div",{staticClass:"col-1"})])])])})),0),i("div",{staticClass:"col-1"})]),i("br"),t._m(22),i("br"),i("div",{staticClass:"row justify-content-center"},[t._m(23),i("div",{staticClass:"col-12"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-3"}),i("div",{staticClass:"col-6 image-upload text-center"},[i("label",{staticClass:"photo",attrs:{for:"upload"}},[i("img",{staticClass:"img-fluid",attrs:{src:""==t.answers[14].src?t.photoPlaceholder:t.answers[14].src,alt:""}})]),i("input",{ref:"inputFile",attrs:{id:"upload",accept:"image/*",type:"file"},on:{change:function(s){return t.uploadImage(s)}}})]),i("div",{staticClass:"col-3"})])])]),i("br")]),i("div",{staticClass:"container-fluid section5"},[t._m(24),t._m(25),i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-2"}),i("div",{staticClass:"col-12 col-md-8"},[i("div",{staticClass:"row"},[t._m(26),i("div",{staticClass:"col-12 mt-2"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"row"},t._l(6,(function(s){return i("div",{key:s,staticClass:"col-12 col-md-6 col-xl-4 mt-2"},[i("div",{staticClass:"row"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.answers[14+s][1],expression:"answers[14+i][1]"}],staticStyle:{border:"none",outline:"none","background-color":"#b0e4e4"},attrs:{type:"number",min:"1",max:"6"},domProps:{value:t.answers[14+s][1]},on:{input:function(e){e.target.composing||t.$set(t.answers[14+s],1,e.target.value)}}}),i("div",{staticClass:"question"},[t._v("\n                        "+t._s(t.answers[14+s][0])+"\n                      ")])])])})),0)])])])]),i("br"),i("div",{staticClass:"row"},[t._m(27),i("div",{staticClass:"col-12"},[i("div",{staticClass:"row"},t._l(4,(function(s){return i("div",{key:s,staticClass:"col-12 mt-3"},[i("div",{staticClass:"row"},[i("div",{staticClass:"question"},[t._v("\n                    "+t._s(t.answers[20+s][0])+"\n                  ")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.answers[20+s][1],expression:"answers[20+i][1]"}],staticStyle:{border:"none",outline:"none","background-color":"#b0e4e4"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.$set(t.answers[20+s],1,e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:"true"}},[t._v("Sí")]),i("option",{attrs:{value:"false"}},[t._v("No")])])])])})),0)])])]),i("div",{staticClass:"col-2"})]),i("br"),i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-2"}),i("div",{staticClass:"col-12 col-md-8"},[t._m(28),t._m(29),i("div",{staticClass:"row mt-4"},[i("div",{staticClass:"col-12 col-xl-6"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"underLineLeft2"},[i("div",[t._v("\n                    El sistema nervioso central \n                    está formado por el \n                    "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.answers[25],expression:"answers[25]"}],on:{change:function(s){var e=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.$set(t.answers,25,s.target.multiple?e:e[0])}}},[i("option",{attrs:{value:"medula"}},[t._v("médula espinal")]),i("option",{attrs:{value:"periferico"}},[t._v("periférico")]),i("option",{attrs:{value:"cerebro"}},[t._v("cerebro")]),i("option",{attrs:{value:"sentidos"}},[t._v("sentidos")])]),t._v("\n                    y la\n                    "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.answers[26],expression:"answers[26]"}],on:{change:function(s){var e=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.$set(t.answers,26,s.target.multiple?e:e[0])}}},[i("option",{attrs:{value:"medula"}},[t._v("médula espinal")]),i("option",{attrs:{value:"periferico"}},[t._v("periférico")]),i("option",{attrs:{value:"cerebro"}},[t._v("cerebro")]),i("option",{attrs:{value:"sentidos"}},[t._v("sentidos")])])])])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"underLineLeft2"},[i("div",[t._v("\n                    El sistema nervioso \n                    "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.answers[27],expression:"answers[27]"}],on:{change:function(s){var e=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.$set(t.answers,27,s.target.multiple?e:e[0])}}},[i("option",{attrs:{value:"medula"}},[t._v("médula espinal")]),i("option",{attrs:{value:"periferico"}},[t._v("periférico")]),i("option",{attrs:{value:"cerebro"}},[t._v("cerebro")]),i("option",{attrs:{value:"sentidos"}},[t._v("sentidos")])]),t._v("\n                    está formado por los nervios, \n                    craneales y espinales, que emergen del sistema \n                    nervioso central y que recorren todo el cuerpo.\n                  ")])])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"underLineLeft2"},[i("div",[t._v("\n                    Los\n                    "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.answers[28],expression:"answers[28]"}],on:{change:function(s){var e=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.$set(t.answers,28,s.target.multiple?e:e[0])}}},[i("option",{attrs:{value:"medula"}},[t._v("médula espinal")]),i("option",{attrs:{value:"periferico"}},[t._v("periférico")]),i("option",{attrs:{value:"cerebro"}},[t._v("cerebro")]),i("option",{attrs:{value:"sentidos"}},[t._v("sentidos")])]),t._v("\n                    reciben los estímulos externos \n                    (sonidos, sabores, frío, etc.) y \n                    lo comunican al cerebro a través de \n                    impulsos nerviosos.\n                  ")])])])])]),t._m(30)])]),i("div",{staticClass:"col-2"})])])])},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"container-fluid section1"},[i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"activityBanner text-left col-7 offset-5"},[t._v("\n        Actividad 2\n      ")])]),i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 paddingTitle"},[i("div",{staticClass:"row"},[i("div",{staticClass:"title"},[t._v("\n                Conociendo\n              ")])]),i("div",{staticClass:"row"},[i("div",{staticClass:"title"},[t._v("\n                los sensores\n              ")])]),i("div",{staticClass:"row"},[i("div",{staticClass:"title"},[t._v("\n                del Kit WeDo 2.0\n              ")])])])])])]),i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-1"}),i("div",{staticClass:"col-12 col-md-3 text-left"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 text-left"},[i("img",{staticClass:"img-prs",attrs:{src:e("fcc4"),alt:""}})])])]),i("div",{staticClass:"col-7 col-md-8"})]),i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-1"}),i("div",{staticClass:"col-12 col-md-8"},[i("div",{staticClass:"underLineLeft"},[i("div",[i("b",[t._v("\n            LEGOLAND")]),t._v(" es una "),i("b",[t._v(" ciudad formada por \n            miles de piezas LEGO.")]),t._v(" Con estas piezas \n            se "),i("b",[t._v("construyen muchos objetos")]),t._v(" y"),i("b",[t._v(" máquinas \n            del mundo real.")]),t._v(" Existen LEGOLAND en \n            Dinamarca, Estados Unidos, Francia y otros países.\n          ")])])]),i("div",{staticClass:"col-3"})])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-2"}),i("div",{staticClass:"col-8"},[i("img",{staticClass:"img-fluid",attrs:{src:e("592c"),alt:""}})]),i("div",{staticClass:"col-2"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-4"}),e("div",{staticClass:"col-6 text-right"},[e("div",{staticClass:"underLineRight"},[e("div",[e("b",[t._v("\n            Completa el cuadro con los sentidos, \n            sus órganos y lo que perciben.\n          ")])])])]),e("div",{staticClass:"col-2"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-1"}),i("div",{staticClass:"col-12 text-left col-lg-6"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"activityBanner"},[t._v("\n              CONSTRUYO Y EXPERIMENTO\n            ")])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("img",{staticClass:"img-fluid",attrs:{src:e("2fa1"),alt:""}})])])]),i("div",{staticClass:"col-3 col-lg-5"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-1 col-lg-2"}),i("div",{staticClass:"col-12 col-lg-6"},[i("div",{staticClass:"underLineLeft"},[i("div",[t._v("\n            Los "),i("b",[t._v("sentidos")]),t._v(" son la"),i("b",[t._v(" forma como \n            los seres humanos nos relacionamos \n            con el mundo exterior.")])])]),i("div",{staticClass:"padd2"},[t._v("\n          Así también \n          los robots poseen sensores que son \n          las vías de entrada para la información \n          externa. \n        ")]),i("br"),i("div",{staticClass:"padd2"},[t._v("\n          Los robots reciben señales auditivas, \n          visuales, táctiles, etc. a través de sensores. \n          ¿Has observado que nuestro Kit contiene sensores? \n          Todo robot debe tener al menos un sensor con el \n          que interactuar. La mayoría de los sistemas \n          robóticos incluyen al menos sensores de obstáculos \n          (bumpers) y algún sensor de guiado por infrarrojos \n          o ultrasonidos. Los sentidos del ser humano \n          están conectados al cerebro a través de nervios.\n          Los sensores del robot están conectados a la computadora a través de cables.\n        ")]),i("br"),i("div",{staticClass:"underLineLeft"},[i("div",[i("b",[t._v("\n              Une con una línea hacia dónde envían \n              información los sensores y sentidos\n            ")])])])]),i("div",{staticClass:"col-1 col-lg-4"},[i("img",{staticClass:"img2",attrs:{src:e("2738"),alt:""}})])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-1"}),i("div",{staticClass:"col-11"},[i("img",{staticClass:"img-fluid",attrs:{src:e("3960"),alt:""}})])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-2"}),e("div",{staticClass:"col-8"},[e("div",{staticClass:"underLineLeft"},[e("div",[t._v("\n            El sensor de inclinación que detecta \n            hasta 6 posiciones: arriba, abajo, \n            en un sentido, en otro sentido, sin \n            inclinación, cualquier inclinación. \n            En la pantalla de tu computadora puedes \n            observar sus diferentes posiciones haciendo \n            clic las veces que desees sobre el ícono \n            del sensor de inclinación.\n          ")])])]),e("div",{staticClass:"col-2"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-2"}),i("div",{staticClass:"col-8"},[i("img",{staticClass:"img-fluid",attrs:{src:e("77ec"),alt:""}})]),i("div",{staticClass:"col-2"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-11"},[i("img",{staticClass:"img-fluid",attrs:{src:e("10c7"),alt:""}})]),i("div",{staticClass:"col-1"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-2"}),e("div",{staticClass:"col-8 text-right"},[e("div",{staticClass:"underLineRight"},[e("div",[t._v("\n            El sensor de movimiento que puede detectar \n            cualquier objeto que se encuentre hasta 15 \n            cm de distancia, en línea recta. En pantalla \n            lo puedes ver con este ícono:\n          ")])])]),e("div",{staticClass:"col-2"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-2"}),i("div",{staticClass:"col-8"},[i("img",{staticClass:"img-fluid",attrs:{src:e("9919"),alt:""}})]),i("div",{staticClass:"col-2"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-1"}),i("div",{staticClass:"col-11"},[i("img",{staticClass:"img-fluid",attrs:{src:e("5b53"),alt:""}})])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-1"}),e("div",{staticClass:"col-10"},[e("div",{staticClass:"underLineLeft"},[e("div",[e("b",[t._v("\n              Conecta el cable del HUB USB a la computadora, \n              conecta los sensores y observa la pantalla. \n              ¿Qué cambios observas?\n            ")])])])]),e("div",{staticClass:"col-1"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-11"},[i("img",{staticClass:"img-fluid",attrs:{src:e("6613"),alt:""}})]),i("div",{staticClass:"col-1"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-1"}),e("div",{staticClass:"col-10"},[e("div",{staticClass:"underLineLeft"},[e("div",[e("b",[t._v("\n              Parte 1: "),e("br")]),t._v("\n              1. Construye el modelo que se \n              muestra en la imagen para el \n              sensor de movimiento.\n          ")])])]),e("div",{staticClass:"col-1"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-2"}),i("div",{staticClass:"col-8 text-center"},[i("img",{staticClass:"img-fluid center_img",attrs:{src:e("7b8e"),alt:""}})]),i("div",{staticClass:"col-2"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-1"}),e("div",{staticClass:"col-10"},[e("div",{staticClass:"underLineLeft"},[e("div",[t._v("\n            2. Conecta el cable del sensor \n            de movimiento al SmartHub LEGO.\n          ")])]),e("div",{staticClass:"underLineLeft mt-4"},[e("div",[t._v("\n            3. Realiza el siguiente programa.\n          ")])])]),e("div",{staticClass:"col-1"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-4"}),i("div",{staticClass:"col-4"},[i("img",{staticClass:"img-fluid",attrs:{src:e("799b"),alt:""}})]),i("div",{staticClass:"col-4"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-1"}),e("div",{staticClass:"col-10"},[e("div",{staticClass:"underLineLeft"},[e("div",[t._v("\n            4. Haz clic en el bloque Iniciar. \n            Pasa la mano por delante del sensor \n            de movimiento.\n          ")])])]),e("div",{staticClass:"col-1"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-1"}),i("div",{staticClass:"col-8 col-md-5 col-lg-3"},[i("img",{staticClass:"img-fluid",attrs:{src:e("31f9"),alt:""}})]),i("div",{staticClass:"col-3 col-md-6 col-8"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-1"}),i("div",{staticClass:"col-11"},[i("div",{staticClass:"underLineLeft"},[i("div",[i("b",[t._v("\n                  Parte 2:\n                ")]),i("br"),t._v("\n                1. Construye el modelo que se \n                muestra para el sensor de inclinación.\n              ")])])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-2"}),i("div",{staticClass:"col-8 text-center"},[i("img",{staticClass:"img-fluid center_img",attrs:{src:e("3449"),alt:""}})]),i("div",{staticClass:"col-2"})])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-1"}),i("div",{staticClass:"col-11"},[i("div",{staticClass:"underLineLeft"},[i("div",[t._v("\n                    2. Realiza siguiente programa.\n                  ")])])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-3"}),i("div",{staticClass:"col-6"},[i("img",{staticClass:"img-fluid",attrs:{src:e("a595"),alt:""}})]),i("div",{staticClass:"col-3"})])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-1"}),i("div",{staticClass:"col-11"},[i("div",{staticClass:"underLineLeft"},[i("div",[t._v("\n                    3. Haz clic en el bloque Iniciar.\n                  ")])])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-1"}),i("div",{staticClass:"col-9 col-md-5 col-lg-3"},[i("img",{staticClass:"img-fluid",attrs:{src:e("31f9"),alt:""}})]),i("div",{staticClass:"col-2 col-md-6 col-lg-8"})])])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-2"}),i("div",{staticClass:"col-8"},[i("img",{staticClass:"img-fluid",attrs:{src:e("c1db"),alt:""}})]),i("div",{staticClass:"col-2"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-12"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-1"}),e("div",{staticClass:"col-11"},[e("div",{staticClass:"underLineLeft"},[e("div",[e("b",[t._v("\n                Explorando en equipo\n                ")])])])])]),e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col-1"}),e("div",{staticClass:"col-11"},[e("div",{staticClass:"padd2"},[t._v("\n              Construya un avión\n            ")]),e("br")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-1"}),i("div",{staticClass:"col-12 text-left col-lg-6"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"activityBanner"},[t._v("\n              CONSTRUYO Y EXPERIMENTO\n            ")])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("img",{staticClass:"img-fluid",attrs:{src:e("0ac9"),alt:""}})])])]),i("div",{staticClass:"col-3 col-lg-5"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-2"}),i("div",{staticClass:"col-12 col-md-8"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-10"},[i("div",{staticClass:"underLineLeft"},[i("div",[i("b",[t._v("\n                  1. Utiliza el sensor de \n                  inclinación del Kit WeDo 2.0 \n                  y realiza las siguientes \n                  experiencias:\n                ")])])])])]),i("br"),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("img",{staticClass:"img-fluid",attrs:{src:e("8fb5"),alt:""}})])])]),i("div",{staticClass:"col-2"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-12"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"underLineLeft"},[e("div",[e("b",[t._v("\n                      a. Inclina el sensor de acuerdo \n                      a lo que se indica y escribe \n                      el número:\n                    ")])])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-12"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"underLineLeft"},[e("div",[e("b",[t._v("\n                      b. Responde SÍ o NO sobre \n                      el sensor de inclinación:\n                    ")])])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"underLineLeft"},[e("div",[e("b",[t._v("\n                  2. Observa la imagen y completa\n                ")])])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("img",{staticClass:"img-fluid",attrs:{src:e("2d31"),alt:""}})])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"col-12 col-xl-6"},[i("img",{staticClass:"img-fluid",attrs:{src:e("4280"),alt:""}})])}],n=(e("ac6a"),e("362d")),c=e.n(n),o=window.innerWidth,l=window.innerHeight,r=function(){for(var t=[],s=0;s<7;s++)t.push({id:s,x:s<5?.1*o:.7*o,y:s<5?.2*l*s:.3*l*(s-4),image:"",width:o/9,height:l/5});return t},d={created:function(){for(var t=this,s=function(s){var i=new window.Image;i.src=e("abb3")("./10_".concat(8+s,".png")),i.onload=function(){t.targets[s].image=i}},i=0;i<7;i++)s(i)},data:function(){return{questions:["¿De qué país es el Legoland de la imagen?","¿Qué piezas de tu kit reconoces en la construcción de Legoland?","¿Qué sentido utilizaste para reconocer las piezas?","¿Qué otros sentidos posees?","¿Qué hace un sensor de movimiento?","¿Qué haz programado en el bloque de Pantalla para mostrar?","¿Qué hace el sensor de inclinación?","¿Qué bloques haz utilizado para programar el sensor de inclinación?","¿Cómo funciona este programa?"],answers:["","","","",["Vista","",""],["","Nariz",""],["","","Sabores"],["Tacto","",""],["","Oídos",""],"","","","","",{src:"",file:""},["Hacia arriba",""],["Hacia la izquierda",""],["Hacia la derecha",""],["Cualquier inclinación",""],["Sin inclinación",""],["Hacia abajo",""],["¿El sensor de inclinación se activa cuando se coloca totalmente vertical?",""],["¿El sensor puede detectar una inclinación de 45°?",""],["¿Existe la posibilidad de detectar hasta 6 posiciones con este sensor?",""],["¿El sensor puede funcionar sin ser conectado al Hub USB?",""],"","","",""],photoPlaceholder:e("8cbd"),stageSize:{width:o-800,height:l-300},changeLineStartingPoint:[],changeLine:!1,targets:r(),connections:[],drawningLine:!1}},methods:{isInput:function(t,s){return!(2==t&&1==s||3==t&&2==s||4==t&&3==s||2==t&&4==s||3==t&&5==s)},getItem:function(t,s){return 2==t&&1==s?this.answers[4][0]:3==t&&2==s?this.answers[5][1]:4==t&&3==s?this.answers[6][2]:2==t&&4==s?this.answers[7][0]:3==t&&5==s?this.answers[8][1]:void 0},handleMouseDown:function(t){var s=this,e=t.target instanceof c.a.Image;!e||t.target.id()>=5||(t.target.id()<5&&this.drawningLine&&this.connections.pop(),this.drawningLine=!0,this.changeLine=!1,this.connections.forEach((function(e){e.points[0]==t.target.x()+t.target.width()/2&&e.points[1]==t.target.y()+t.target.height()/2&&(s.changeLine=!0,s.changeLineStartingPoint=e)})),this.connections.push({id:Date.now(),points:[t.target.x()+t.target.width()/2,t.target.y()+t.target.height()/2]}))},handleMouseMove:function(t){if(this.drawningLine){var s=t.target.getStage().getPointerPosition(),e=this.connections[this.connections.length-1];e.points=[e.points[0],e.points[1],s.x,s.y]}},handleMouseUp:function(t){var s=t.target instanceof c.a.Image;if(s){if(t.target.id()<5&&this.drawningLine)return this.connections.pop(),void(this.drawningLine=!1);var e;this.drawningLine=!1,this.changeLine?(e=this.changeLineStartingPoint,this.connections.pop()):e=this.connections[this.connections.length-1],e.points=[e.points[0],e.points[1],t.target.x()+t.target.width()/2,t.target.y()+t.target.height()/2]}},uploadImage:function(t){var s=this,e=t.target.files[0],i=new FileReader;this.answers[14].file=e,i.onload=function(t){s.answers[14].src=t.target.result},i.readAsDataURL(e)}},mounted:function(){var t=this,s=document.querySelector(".canvas"),e=new ResizeObserver((function(){t.stageSize.width=s.offsetWidth,t.stageSize.height=s.offsetHeight,t.targets.forEach((function(s,e){t.connections.forEach((function(i){i.points[0]!=s.x+s.width/2&&i.points[1]!=s.y+s.height/2||(i.points[0]=.1*t.stageSize.width+s.width/2,i.points[1]=.15*t.stageSize.height*e+s.height/2),i.points[2]!=s.x+s.width/2&&i.points[3]!=s.y+s.height/2||(i.points[2]=.7*t.stageSize.width+s.width/2,i.points[3]=.2*t.stageSize.height*(e-4)+s.height/2)})),t.stageSize.width<=768&&(s.width=t.stageSize.width/4,s.height=t.stageSize.height/5),s.x=e<5?.1*t.stageSize.width:.7*t.stageSize.width,s.y=e<5?.2*t.stageSize.height*e:.3*t.stageSize.height*(e-4)}))}));e.observe(s)}},v=d,u=(e("488d"),e("2877")),_=Object(u["a"])(v,i,a,!1,null,"333df606",null);s["default"]=_.exports},abb3:function(t,s,e){var i={"./10_1.png":"2e96","./10_10.png":"1447","./10_11.png":"6888","./10_12.png":"c025","./10_13.png":"dc7b","./10_14.png":"a197","./10_15.png":"8269","./10_16.png":"e93e","./10_17.png":"ed44","./10_18.png":"882a","./10_19.png":"3715","./10_2.png":"afe8","./10_20.png":"797d","./10_21.png":"0f67","./10_3.png":"e65b","./10_4.png":"d12d","./10_5.png":"c073","./10_6.png":"f9c4","./10_7.png":"2d38","./10_8.png":"30a0","./10_9.png":"7bdb"};function a(t){var s=n(t);return e(s)}function n(t){if(!e.o(i,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=n,t.exports=a,a.id="abb3"},f452:function(t,s,e){var i={"./Recurso 200@4x.png":"9919","./Recurso 201@4x.png":"5b53","./Recurso 202@4x.png":"433e","./Recurso 203@4x.png":"bf26","./Recurso 204@4x.png":"551e","./Recurso 205@4x.png":"6613","./Recurso 206@4x.png":"7b8e","./Recurso 207@4x.png":"799b","./Recurso 208@4x.png":"31f9"};function a(t){var s=n(t);return e(s)}function n(t){if(!e.o(i,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=n,t.exports=a,a.id="f452"}}]);
//# sourceMappingURL=chunk-6e255674.663c724e.js.map