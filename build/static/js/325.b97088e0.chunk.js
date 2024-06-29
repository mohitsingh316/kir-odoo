"use strict";(self.webpackChunkreact_ecommerce=self.webpackChunkreact_ecommerce||[]).push([[325],{8697:function(i,e,t){t.d(e,{Z:function(){return c}});var s=t(7022),o=t(9743),a=t(2677),u=t.p+"static/media/table.c96637810cb2ae358aca.jpg",r=t(184),c=function(i){var e=i.title;return(0,r.jsxs)("div",{className:"image-container",children:[(0,r.jsx)("img",{src:u,alt:"Product-bg"}),(0,r.jsx)("div",{className:"overlay",children:(0,r.jsx)(s.Z,{children:(0,r.jsx)(o.Z,{children:(0,r.jsx)(a.Z,{children:(0,r.jsx)("h2",{children:e})})})})})]})}},5434:function(i,e,t){t.d(e,{Z:function(){return m}});var s=t(3433),o=t(2677),a=t(7689),u=t(9085),r=t(9434),c=t(9597),n=t(184),m=function(i){var e=i.title,t=i.productItem,m=(0,r.I0)(),l=(0,a.s0)(),d=function(){l("/shop/".concat(t.id))};return(0,n.jsxs)(o.Z,{md:3,sm:5,xs:10,className:"product mtop",children:["Big Discount"===e&&t.discount&&(0,n.jsxs)("span",{className:"discount",children:[t.discount,"% Off"]}),(0,n.jsx)("img",{loading:"lazy",onClick:d,src:t.imgUrl,alt:t.productName}),(0,n.jsx)("div",{className:"product-like",children:(0,n.jsx)("ion-icon",{name:"heart-outline"})}),(0,n.jsxs)("div",{className:"product-details",children:[(0,n.jsx)("h3",{onClick:d,children:t.productName}),(0,n.jsx)("div",{className:"rate",children:(0,s.Z)(Array(5)).map((function(i,e){return(0,n.jsx)("i",{className:e<t.avgRating?"fa fa-star":"fa fa-star-o"},e)}))}),(0,n.jsxs)("div",{className:"price",children:[(0,n.jsxs)("h4",{children:["\u20b9",t.price]}),(0,n.jsx)("button",{"aria-label":"Add",type:"submit",className:"add",onClick:function(){return function(i){m((0,c.Xq)({product:i,num:1})),u.Am.success("Product has been added to cart!")}(t)},children:(0,n.jsx)("ion-icon",{name:"add"})})]})]})]})}},9135:function(i,e,t){var s=t(9743),o=t(2791),a=t(5434),u=t(184),r=function(i){var e=i.productItems;return(0,o.useEffect)((function(){}),[e]),0===e.length?(0,u.jsx)("h1",{className:"not-found",children:"Product Not Found !!"}):(0,u.jsx)(s.Z,{className:"justify-content-center",children:e.map((function(i){return(0,u.jsx)(a.Z,{title:null,productItem:i},i.id)}))})};e.Z=(0,o.memo)(r)},76:function(i,e,t){var s=t(2791);e.Z=function(){(0,s.useEffect)((function(){window.scrollTo(0,0)}),[])}},167:function(i,e,t){t.r(e),t.d(e,{default:function(){return h}});var s=t(9439),o=t(7022),a=t(9743),u=t(2677),r=t(1413),c=t(3345),n=t(8433),m=t(184),l=[{value:"sofa",label:"Sofa"},{value:"chair",label:"Chair"}],d={control:function(i){return(0,r.Z)((0,r.Z)({},i),{},{backgroundColor:"#0f3460",color:"white",borderRadius:"5px",border:"none",boxShadow:"none",width:"200px",height:"40px"})},option:function(i,e){return(0,r.Z)((0,r.Z)({},i),{},{backgroundColor:e.isSelected?"#0f3460":"white",color:e.isSelected?"white":"#0f3460","&:hover":{backgroundColor:"#0f3460",color:"white"}})},singleValue:function(i){return(0,r.Z)((0,r.Z)({},i),{},{color:"white"})}},p=function(i){var e=i.setFilterList;return(0,m.jsx)(c.ZP,{options:l,defaultValue:{value:"",label:"Filter By Category"},styles:d,onChange:function(i){e(n.RB.filter((function(e){return e.category===i.value})))}})},g=t(2791),q=function(i){var e=i.setFilterList,t=(0,g.useState)(null),o=(0,s.Z)(t,2),a=o[0],u=o[1];return(0,m.jsxs)("div",{className:"search-container",children:[(0,m.jsx)("input",{type:"text",placeholder:"Search...",onChange:function(i){u(i.target.value),e(n.RB.filter((function(i){var e;return null===(e=i.productName)||void 0===e?void 0:e.toLowerCase().includes(null===a||void 0===a?void 0:a.toLowerCase())})))}}),(0,m.jsx)("ion-icon",{name:"search-outline",className:"search-icon"})]})},b=t(9135),v=t(8697),f=t(76),h=function(){var i=(0,g.useState)(n.RB.filter((function(i){return"sofa"===i.category}))),e=(0,s.Z)(i,2),t=e[0],r=e[1];return(0,f.Z)(),(0,m.jsxs)(g.Fragment,{children:[(0,m.jsx)(v.Z,{title:"product"}),(0,m.jsxs)("section",{className:"filter-bar",children:[(0,m.jsx)(o.Z,{className:"filter-bar-contianer",children:(0,m.jsxs)(a.Z,{className:"justify-content-center",children:[(0,m.jsx)(u.Z,{md:4,children:(0,m.jsx)(p,{setFilterList:r})}),(0,m.jsx)(u.Z,{md:8,children:(0,m.jsx)(q,{setFilterList:r})})]})}),(0,m.jsx)(o.Z,{children:(0,m.jsx)(b.Z,{productItems:t})})]})]})}},8433:function(i,e,t){t.d(e,{cd:function(){return q},H_:function(){return v},RB:function(){return f},Bz:function(){return b}});var s=t.p+"static/media/double-sofa-01.183aaa8ba79a197491f7.png",o=t.p+"static/media/double-sofa-02.eac56d9c3869030c478e.png",a=t.p+"static/media/double-sofa-03.afb74598f1e42c273506.png",u=t.p+"static/media/single-sofa-01.066a994d36d7ee59a0e0.jpg",r=t.p+"static/media/single-sofa-02.97abc6d99fa23490e4e3.jpg",c=t.p+"static/media/single-sofa-03.19d776d13fcee69a7765.jpg",n=t.p+"static/media/single-sofa-04.980da5a130febb12ba74.png",m=t.p+"static/media/arm-chair-01.89e1f025e35e0058bb85.jpg",l=t.p+"static/media/arm-chair-02.43d57539a173865f0923.jpg",d=t.p+"static/media/arm-chair-03.726a783a7751afc13d8e.jpg",p=t.p+"static/media/hero-img.4cb525f5d6bac4b5af39.png",g=t(184),q=[{id:1,title:"50% Off For Your First Shopping",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",cover:p}],b=[{icon:(0,g.jsx)("ion-icon",{name:"car"}),title:"Free Shipping",subtitle:"Lorem ipsum dolor sit amet.",bg:"#fdefe6"},{icon:(0,g.jsx)("ion-icon",{name:"card"}),title:"Safe Payment",subtitle:"Lorem ipsum dolor sit amet.",bg:"#ceebe9"},{icon:(0,g.jsx)("ion-icon",{name:"shield-half-outline"}),title:"Secure Payment",subtitle:"Lorem ipsum dolor sit amet.",bg:"#e2f2b2"},{icon:(0,g.jsx)("ion-icon",{name:"headset"}),title:" Back Guarantee",subtitle:"Lorem ipsum dolor sit amet.",bg:"#d6e5fb"}],v=[{id:"01",productName:"Stone and Beam Westview ",imgUrl:s,category:"sofa",price:193,discount:30,shortDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",reviews:[{rating:4.7,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],avgRating:4.5},{id:"02",productName:"Rivet Bigelow Modern ",imgUrl:o,category:"sofa",price:253,discount:20,shortDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",reviews:[{rating:4.8,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{rating:4.8,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],avgRating:4.7},{id:"08",productName:"Baltsar Chair",imgUrl:l,category:"chair",price:89,discount:15,shortDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",reviews:[{rating:4.6,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{rating:4.9,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],avgRating:4.7},{id:"09",productName:"Helmar Chair",imgUrl:d,category:"chair",price:112,discount:35,shortDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",reviews:[{rating:4.6,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{rating:4.9,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],avgRating:4.7}],f=[{id:"01",productName:"Stone and Beam Westview ",imgUrl:s,category:"sofa",price:193,shortDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",reviews:[{rating:4.7,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],avgRating:4.5},{id:"02",productName:"Rivet Bigelow Modern ",imgUrl:o,category:"sofa",price:253,shortDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",reviews:[{rating:4.8,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{rating:4.8,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],avgRating:4.7},{id:"03",productName:"Amazon Brand Modern Sofa",imgUrl:a,category:"sofa",price:173,shortDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",reviews:[{rating:4.6,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{rating:4.9,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],avgRating:4.7},{id:"26",productName:"Rivet Bigelow Modern ",imgUrl:o,category:"sofa",price:253,shortDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",reviews:[{rating:4.8,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{rating:4.8,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],avgRating:4.7},{id:"04",productName:"Fllufy Sheep Sofa",imgUrl:u,category:"sofa",price:163,shortDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",reviews:[{rating:4.6,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{rating:4.9,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],avgRating:4.7},{id:"05",productName:"Faux Velvet Sofa",imgUrl:r,category:"sofa",price:163,shortDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",reviews:[{rating:4.6,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{rating:4.9,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],avgRating:4.7},{id:"06",productName:"Fllufy Sheep Sofa",imgUrl:c,category:"sofa",price:163,shortDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",reviews:[{rating:4.6,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{rating:4.9,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],avgRating:4.7},{id:"07",productName:"Sakarias Armchair",imgUrl:m,category:"chair",price:99,shortDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",reviews:[{rating:4.6,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{rating:4.9,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],avgRating:4.7},{id:"27",productName:"Modern Arm Sofa",imgUrl:n,category:"sofa",price:173,shortDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",reviews:[{rating:4.6,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{rating:4.9,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],avgRating:4.7},{id:"08",productName:"Baltsar Chair",imgUrl:l,category:"chair",price:89,shortDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",reviews:[{rating:4.6,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{rating:4.9,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],avgRating:4.7},{id:"09",productName:"Helmar Chair",imgUrl:d,category:"chair",price:112,shortDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",reviews:[{rating:4.6,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{rating:4.9,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],avgRating:4.7},{id:"25",productName:"Sakarias Armchair",imgUrl:m,category:"chair",price:99,shortDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",reviews:[{rating:4.6,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{rating:4.9,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}],avgRating:4.7}]}}]);
//# sourceMappingURL=325.b97088e0.chunk.js.map