(this["webpackJsonpblockchain-learn"]=this["webpackJsonpblockchain-learn"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var s=n(1),a=n.n(s),c=n(9),i=n.n(c),o=(n(14),n(3)),l=n(4),r=n(2),j=n(6),u=n(5),b=(n(15),n(16),n(8)),h=n(0),d=function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).state={sound:!0,lang:"ru"},s.switchSound=s.switchSound.bind(Object(r.a)(s)),s.switchLanguage=s.switchLanguage.bind(Object(r.a)(s)),s}return Object(l.a)(n,[{key:"switchSound",value:function(){var t=!0!==this.state.sound;this.setState({sound:t}),console.log(this.state.sound)}},{key:"switchLanguage",value:function(){var t="ru"===this.state.lang?"eng":"ru";this.setState({lang:t}),console.log(this.state.lang)}},{key:"render",value:function(){return Object(h.jsxs)("nav",{className:"menu",children:[Object(h.jsxs)("button",{className:"sound_button",onClick:this.switchSound,children:[this.state.sound&&Object(h.jsxs)("div",{className:"sound_on",children:[Object(h.jsx)(b.a,{className:"sound_icon"}),Object(h.jsx)("p",{children:"\u0412\u041a\u041b"})]}),!this.state.sound&&Object(h.jsxs)("div",{className:"sound_off",children:[Object(h.jsx)(b.b,{className:"sound_icon"}),Object(h.jsx)("p",{children:"\u0412\u042b\u041a\u041b"})]})]}),0!==this.props.page&&Object(h.jsxs)("div",{className:"pagination",children:[Object(h.jsx)("div",{className:"pagination_item pagination_item_active"}),Object(h.jsx)("div",{className:"pagination_item"}),Object(h.jsx)("div",{className:"pagination_item "}),Object(h.jsx)("div",{className:"pagination_item "}),Object(h.jsx)("div",{className:"pagination_item "}),Object(h.jsx)("div",{className:"pagination_item "})]}),0===this.props.page&&Object(h.jsxs)("button",{className:"lang_button",onClick:this.switchLanguage,children:[Object(h.jsx)("p",{children:"\u0418\u0417\u041c\u0415\u041d\u0418\u0422\u042c \u042f\u0417\u042b\u041a"}),"ru"===this.state.lang&&Object(h.jsx)("img",{className:"lang_icon",alt:"ru",src:"https://img.icons8.com/fluency/40/000000/russian-federation-circular.png"}),"eng"===this.state.lang&&Object(h.jsx)("img",{className:"lang_icon",alt:"eng",src:"https://img.icons8.com/fluency/40/000000/great-britain-circular.png"})]})]})}}]),n}(a.a.Component),g=(n(18),n.p+"static/media/blockchain.aa249a9a.jpg"),O=function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"first",children:[Object(h.jsx)("h1",{children:"\u0411\u043b\u043e\u043a\u0447\u0435\u0439\u043d - \u044d\u0442\u043e"}),Object(h.jsx)("p",{children:"\u0411\u043b\u043e\u043a\u0447\u0435\u0439\u043d \u2013 \u044d\u0442\u043e \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u0430\u044f \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445. \u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u0446\u0435\u043f\u043e\u0447\u043a\u0443 \u0437\u0430\u043f\u0438\u0441\u0435\u0439 (\u0431\u043b\u043e\u043a\u043e\u0432), \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435\u043b\u044c\u0437\u044f \u043f\u043e\u043c\u0435\u043d\u044f\u0442\u044c."}),Object(h.jsx)("img",{src:g,alt:"blockchain"})]})}}]),n}(a.a.Component),p=function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).start=s.start.bind(Object(r.a)(s)),s.state={page:0,lang:"ru"},s}return Object(l.a)(n,[{key:"start",value:function(){this.setState((function(t,e){return{page:t.page+1}})),console.log(this.state.page)}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"app",children:[Object(h.jsxs)("div",{className:"main",children:[0===this.state.page&&Object(h.jsxs)("div",{className:"page_zero",children:[Object(h.jsx)("h1",{children:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d?"}),Object(h.jsx)("p",{children:"\u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c: 30 \u043c\u0438\u043d \u2022 CryptoAlliance, \u0434\u0435\u043a\u0430\u0431\u0440\u044c 2021"}),Object(h.jsx)("button",{className:"button_start",onClick:this.start,children:"\u0418\u0433\u0440\u0430\u0442\u044c"})]}),1===this.state.page&&Object(h.jsxs)("div",{children:[Object(h.jsx)(O,{}),Object(h.jsx)("button",{className:"button_next",children:"\u041f\u043e\u043d\u044f\u0442\u043d\u043e"})]})]}),Object(h.jsx)(d,{page:this.state.page})]})}}]),n}(a.a.Component),m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,s=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),s(t),a(t),c(t),i(t)}))};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),m()}},[[19,1,2]]]);
//# sourceMappingURL=main.e5a74ff5.chunk.js.map