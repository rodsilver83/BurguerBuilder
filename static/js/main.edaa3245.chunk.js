(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports={breadTop:"BurgerIngredient_breadTop__2_r0K",breadBottom:"BurgerIngredient_breadBottom__2jGjU",meat:"BurgerIngredient_meat__1oXMz",onion:"BurgerIngredient_onion__3qo7h",tomato:"BurgerIngredient_tomato__wWsi2",lettuce:"BurgerIngredient_lettuce__3EYw_",cheese:"BurgerIngredient_cheese__3Zd5F",bacon:"BurgerIngredient_bacon__3mIes"}},,,,,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__b_bIv",Label:"BuildControl_Label__10iUW",Less:"BuildControl_Less__20jsZ",More:"BuildControl_More__1j5pS",quantity:"BuildControl_quantity__2dPOe",ButtonWrapper:"BuildControl_ButtonWrapper__1O93U"}},function(e,t,n){e.exports={Input:"Input_Input__3cBI6",Label:"Input_Label__1v3Uc",InputElement:"Input_InputElement__3rTLZ",Invalid:"Input_Invalid__3Dkzu",SelectElement:"Input_SelectElement__1rrvY"}},,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__mBwT_",Open:"SideDrawer_Open__2YCRM",Close:"SideDrawer_Close__1KiEK",Logo:"SideDrawer_Logo__3Cl7O"}},function(e,t,n){e.exports={Price:"BuildControls_Price__1fwn_",BuildControls:"BuildControls_BuildControls__2s5MW",OrderButton:"BuildControls_OrderButton__1p9QS",enable:"BuildControls_enable__3CJAn",Controls:"BuildControls_Controls__xS7Em"}},,,,function(e,t,n){e.exports={Order:"Order_Order__3YZwO",Ingredient:"Order_Ingredient__2Rf6A",Price:"Order_Price__1Iquq"}},,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__24NhD",Logo:"Toolbar_Logo__3AGXq",DesktopOnly:"Toolbar_DesktopOnly__CitsQ"}},function(e,t,n){e.exports={NavigationItem:"Navigationitem_NavigationItem__3b0sO",active:"Navigationitem_active__34V5w"}},,,function(e,t,n){e.exports={Button:"Button_Button__1ouAX",Success:"Button_Success__1BGa4",Danger:"Button_Danger__18hgc"}},function(e,t,n){e.exports={OrderSummary:"OrderSummary_OrderSummary__1q2gm",IngredientsList:"OrderSummary_IngredientsList__I_oVx"}},function(e,t,n){e.exports={LoaderContainer:"Spinner_LoaderContainer__3yAer",Loader:"Spinner_Loader__2C0iS",load8:"Spinner_load8__d1jaO"}},,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/burgerIcon.3f37c71e.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__yqy_8"}},function(e,t,n){e.exports={NavigationItems:"Navigationitems_NavigationItems__Kp1SB"}},,function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__2h9XM"}},function(e,t,n){e.exports={Content:"Layout_Content__XAS1y"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3cPEq"}},function(e,t,n){e.exports={burger:"Burger_burger__1Fkgz"}},function(e,t,n){e.exports={Modal:"Modal_Modal__-GjUy"}},,,function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__3m-xX"}},function(e,t,n){e.exports={ContactData:"ContactData_ContactData__39De1"}},function(e,t,n){e.exports={Orders:"Orders_Orders__1NofG"}},,function(e,t,n){e.exports=n(86)},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),i=n.n(o),c=n(13),l=(n(63),n(1)),s=n(2),u=n(3),d=n(4),m=function(e){return e.children},p=n(25),h=n.n(p),g=n(43),_=n.n(g),f=n(44),v=n.n(f),b=function(e){return r.a.createElement("div",{onClick:e.toggle,className:v.a.Logo,style:{height:e.height}},r.a.createElement("img",{src:_.a,alt:"My Burger"}))},E=n(45),y=n.n(E),C=n(26),O=n.n(C),k=function(e){return r.a.createElement("li",{className:O.a.NavigationItem},r.a.createElement(c.b,{to:e.link,exact:!0,activeClassName:O.a.active},e.children))},N=function(){return r.a.createElement("ul",{className:y.a.NavigationItems},r.a.createElement(k,{link:"/"},"Burger Builder"),r.a.createElement(k,{link:"/orders"},"Orders"))},j=n(47),w=n.n(j),S=function(e){return r.a.createElement("div",{className:w.a.DrawerToggle,onClick:e.toggle},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},I=function(e){return r.a.createElement("header",{className:h.a.Toolbar},r.a.createElement(S,{toggle:e.toggle}),r.a.createElement(b,null),r.a.createElement("nav",{className:h.a.DesktopOnly},r.a.createElement(N,null)))},B=n(48),D=n.n(B),x=n(18),L=n.n(x),T=n(49),P=n.n(T),H=function(e){return e.show?r.a.createElement("div",{className:P.a.Backdrop,onClick:e.clicked},e.children):null},q=function(e){var t=[L.a.SideDrawer];return e.open?t.push(L.a.Open):t.push(L.a.Close),r.a.createElement(m,null,r.a.createElement(H,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:L.a.Logo},r.a.createElement(b,{toggle:e.toggle})),r.a.createElement("nav",null,r.a.createElement(N,null))))},M=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).sideDrawerClosedHandler=function(){a.setState({showSideDrawer:!1})},a.toggleSideDrawerHandler=function(){a.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},a.state={showSideDrawer:!1},a}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement(I,{toggle:this.toggleSideDrawerHandler}),r.a.createElement(q,{toggle:this.toggleSideDrawerHandler,closed:this.sideDrawerClosedHandler,open:this.state.showSideDrawer}),r.a.createElement("main",{className:D.a.Content},this.props.children))}}]),n}(a.Component),A=n(7),F=n(57),R=n(50),V=n.n(R),W=n(9),U=n.n(W),G=n(10),Y=n.n(G),X=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:U.a.breadBottom});break;case"bread-top":e=r.a.createElement("div",{className:U.a.breadTop});break;case"meat":e=r.a.createElement("div",{className:U.a.meat});break;case"cheese":e=r.a.createElement("div",{className:U.a.cheese});break;case"bacon":e=r.a.createElement("div",{className:U.a.bacon});break;case"lettuce":e=r.a.createElement("div",{className:U.a.lettuce});break;case"tomato":e=r.a.createElement("div",{className:U.a.tomato});break;case"onion":e=r.a.createElement("div",{className:U.a.onion})}return e}}]),n}(a.Component);X.propType={type:Y.a.string.isRequired};var z=X,Z=n(12),K={onion:0,tomato:1,lettuce:2,bacon:3,cheese:4,meat:5},$=Object(Z.f)((function(e){var t=Object.keys(e.ingredients).filter((function(t){return e.ingredients[t]>0})).sort((function(e,t){return K[e]-K[t]})).map((function(t){return Object(F.a)(Array(e.ingredients[t])).map((function(e,n){return r.a.createElement(z,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return r.a.createElement("div",{className:V.a.burger},r.a.createElement(z,{type:"bread-top"}),0===t.length?r.a.createElement("p",null,"Start adding some ingredients"):t,r.a.createElement(z,{type:"bread-bottom"}))})),J=n(19),Q=n.n(J),ee=n(14),te=n.n(ee),ne=function(e){return r.a.createElement("div",{className:te.a.BuildControl},r.a.createElement("div",{className:te.a.Label},e.label),r.a.createElement("div",{className:te.a.ButtonWrapper},r.a.createElement("button",{className:te.a.Less,onClick:e.remove,disabled:e.disabled},"-"),r.a.createElement("span",{className:te.a.quantity},e.quantity),r.a.createElement("button",{className:te.a.More,onClick:e.add},"+")))},ae=n(29),re=n.n(ae),oe=function(e){return r.a.createElement("button",{onClick:e.clicked,className:[re.a.Button,re.a[e.buttonType]].join(" "),disabled:e.disabled},e.children)},ie=[{label:"Lettuce",type:"lettuce"},{label:"Tomato",type:"tomato"},{label:"Onion",type:"onion"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],ce=function(e){return r.a.createElement("div",{className:Q.a.BuildControls},r.a.createElement("p",{className:Q.a.Price},"Current Price: ",r.a.createElement("strong",null,"$",Number.parseFloat(e.price).toFixed(2))),r.a.createElement("div",{className:Q.a.Controls},ie.map((function(t){return r.a.createElement(ne,{key:t.label,label:t.label,quantity:e.ingredients[t.type],add:function(){return e.ingredientAdd(t.type)},remove:function(){return e.ingredientRemove(t.type)},disabled:e.disabledInfo[t.type]})}))),r.a.createElement(oe,{buttonType:"Success",clicked:e.ordered,disabled:!e.purchasable,className:Q.a.OrderButton},"Order now"))},le=n(51),se=n.n(le),ue=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement(H,{show:this.props.show,clicked:this.props.modalClosed},r.a.createElement("div",{className:se.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-200vh)",opacity:this.props.show?"1":"0"}},this.props.children)))}}]),n}(a.Component),de=n(30),me=n.n(de),pe=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(){console.log("OrderSummary: ")}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return r.a.createElement("span",{key:t,style:{textTransform:"capitalize"}},t,": ",e.props.ingredients[t])}));return r.a.createElement("div",{className:me.a.OrderSummary},r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("div",{className:me.a.IngredientsList},t),r.a.createElement("p",null,"Total Price: ",r.a.createElement("strong",null,"$",this.props.price.toFixed(2))),r.a.createElement("p",null,"Continue to checkout?"),r.a.createElement("div",null,r.a.createElement(oe,{clicked:this.props.cancel,buttonType:"Danger"},"Cancel"),r.a.createElement(oe,{clicked:this.props.continue,buttonType:"Success"},"Continue")))}}]),n}(a.Component),he=n(52),ge=n.n(he).a.create({baseURL:"https://reactburgerbuilder-31ed5.firebaseio.com/"}),_e=n(31),fe=n.n(_e),ve=function(){return r.a.createElement("div",{className:fe.a.LoaderContainer},r.a.createElement("div",{className:fe.a.Loader},"Loading..."))},be=function(e,t){return function(n){Object(d.a)(o,n);var a=Object(u.a)(o);function o(){var e;Object(l.a)(this,o);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={error:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e}return Object(s.a)(o,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement(ue,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),o}(a.Component)},Ee=n(11),ye=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){},a.purchasingHandler=function(){a.setState({purchasing:!0})},a.purchaseCancelHandler=function(){a.setState({purchasing:!1})},a.continuePurchaseHandler=function(){a.props.history.push("/checkout")},a.state={purchasing:!1,loading:!1,error:!1},a}return Object(s.a)(n,[{key:"updatePurchaseState",value:function(e){return Object.keys(e).reduce((function(t,n){return t+e[n]}),0)>0}},{key:"render",value:function(){var e=this,t=Object(A.a)({},this.props.ings);for(var n in t)t[n]=t[n]<=0;var a=r.a.createElement(pe,{ingredients:this.props.ings,cancel:this.purchaseCancelHandler,continue:function(t){t.stopPropagation(),e.continuePurchaseHandler()},price:this.props.price});this.state.loading&&(a=r.a.createElement(ve,null));var o=r.a.createElement(m,null,r.a.createElement($,{ingredients:this.props.ings}),r.a.createElement(ce,{ingredients:this.props.ings,ingredientAdd:this.props.onIngredientAdded,ingredientRemove:this.props.onIngredientRemoved,disabledInfo:t,price:this.props.price,purchasable:this.updatePurchaseState(this.props.ings),ordered:this.purchasingHandler}));return this.props.ings||(o=this.state.error?r.a.createElement("p",null,"Ingredients can't be loaded"):r.a.createElement(ve,null)),r.a.createElement(m,null,r.a.createElement(ue,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},a),o)}}]),n}(a.Component),Ce=Object(Ee.b)((function(e){return{ings:e.ingredients,price:e.totalPrice}}),(function(e){return{onIngredientAdded:function(t){return e({type:"ADD_INGREDIENT",ingredientName:t})},onIngredientRemoved:function(t){return e({type:"REMOVE_INGRDIENT",ingredientName:t})}}}))(be(ye,ge)),Oe=n(54),ke=n.n(Oe),Ne=function(e){return r.a.createElement("div",{className:ke.a.CheckoutSummary},r.a.createElement("h1",null,"We hope it tastes well"),r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement($,{ingredients:e.ingredients})),r.a.createElement("div",{style:{margin:"20px"}},r.a.createElement(oe,{buttonType:"Danger",clicked:e.checkoutCancelled},"Cancel"),r.a.createElement(oe,{buttonType:"Success",clicked:e.checkoutContinued},"Continue")))},je=n(55),we=n.n(je),Se=n(15),Ie=n.n(Se),Be=function(e){var t=null,n=[Ie.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push(Ie.a.Invalid),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{className:Ie.a.SelectElement,value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.value)})))}return r.a.createElement("div",{className:Ie.a.Input},r.a.createElement("label",{className:Ie.a.Label},e.label),t)},De=function(e,t,n){return{elementType:e,elementConfig:{type:t,placeholder:n},value:"",validation:{required:!0,minLength:5,maxLength:10},valid:!1,touched:!1}},xe=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={orderForm:{name:De("input","text","Name"),street:De("input","text","Street"),zipCode:De("input","text","Zip Code"),country:De("input","text","Country"),email:De("input","text","Email"),deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"fastest"},{value:"cheapest",displayValue:"cheapest"}]},value:"fastest",validation:{},valid:!0}},formValid:!1,loading:!1},e.orderHandler=function(t){t.preventDefault(),e.setState({loading:!0});var n={};for(var a in e.state.orderForm)n[a]=e.state.orderForm[a].value;var r={ingredients:e.props.ings,price:e.props.price,formData:n};ge.post("/order.json",r).then((function(t){e.setState({loading:!1}),e.props.history.push("/")})).catch((function(t){e.setState({loading:!1})}))},e.formChanged=function(t,n){var a=Object(A.a)({},e.state.orderForm),r=Object(A.a)({},a[n.id]);r.value=t.target.value,r.valid=e.validateForm(r.value,r.validation),r.touched=!0,a[n.id]=r;var o=!0;for(var i in a)o=a[i].valid&&o;e.setState({orderForm:a,formValid:o})},e.validateForm=function(e,t){var n=!1;return t.required&&(n=""!==e.trim()),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),n},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var a=r.a.createElement("form",{onSubmit:this.orderHandler},t.map((function(t){return r.a.createElement(Be,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){e.formChanged(n,t)}})})),r.a.createElement(oe,{buttonType:"Success",disabled:!this.state.formValid,clicked:function(t){return e.orderHandler(t)}},"Order"));return this.state.loading&&(a=r.a.createElement(ve,null)),r.a.createElement("div",{className:we.a.ContactData},r.a.createElement("h4",null,"Entry your Contact Data"),a)}}]),n}(a.Component),Le=Object(Ee.b)((function(e){return{ings:e.ingredients,price:e.totalPrice}}))(xe),Te=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).checkoutContinuedHandler=function(){e.props.history.replace("/checkout/contact-data")},e.checkoutCancelledHandler=function(){e.props.history.goBack()},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement(Ne,{ingredients:this.props.ings,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),r.a.createElement(Z.a,{path:this.props.match.path+"/contact-data"},r.a.createElement(Le,null)))}}]),n}(a.Component),Pe=Object(Ee.b)((function(e){return{ings:e.ingredients,price:e.totalPrice}}))(Te),He=n(23),qe=n.n(He),Me=function(e){var t=[];for(var n in e.ingredients)t.push({name:n,amount:e.ingredients[n]});var a=t.map((function(e,t){return e.amount>0?r.a.createElement("span",{key:t,className:qe.a.Ingredient},e.name,": ",e.amount):null}));return r.a.createElement("div",{className:qe.a.Order},r.a.createElement("p",null,"Ingredients:"),a,r.a.createElement("p",{className:qe.a.Price},"Price: ",r.a.createElement("strong",null,"USD $",Number.parseFloat(e.price).toFixed(2))))},Ae=n(56),Fe=n.n(Ae),Re=be(function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={orders:[],loading:!0},e.componentDidMount=function(){ge.get("/order.json").then((function(t){var n=[];for(var a in t.data)n.push(Object(A.a)({},t.data[a],{id:a}));e.setState({loading:!1,orders:n})})).catch((function(t){e.setState({loading:!1})}))},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:Fe.a.Orders},this.state.loading?r.a.createElement(ve,null):this.state.orders.map((function(e){return r.a.createElement(Me,Object.assign({},e,{key:e.id}))})))}}]),n}(a.Component),ge);var Ve=function(){return r.a.createElement("div",null,r.a.createElement(M,null,r.a.createElement(Z.c,null,r.a.createElement(Z.a,{path:"/checkout",component:Pe}),r.a.createElement(Z.a,{path:"/orders",component:Re}),r.a.createElement(Z.a,{path:"/",exact:!0,component:Ce}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var We=n(22),Ue=n(17),Ge={ingredients:{onion:0,tomato:0,lettuce:0,bacon:0,cheese:0,meat:0},totalPrice:4},Ye={onion:.25,tomato:.35,lettuce:.3,bacon:1.25,cheese:1,meat:2.5},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INGREDIENT":return Object(A.a)({},e,{ingredients:Object(A.a)({},e.ingredients,Object(Ue.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1)),totalPrice:e.totalPrice+Ye[t.ingredientName]});case"REMOVE_INGRDIENT":return Object(A.a)({},e,{ingredients:Object(A.a)({},e.ingredients,Object(Ue.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1)),totalPrice:e.totalPrice-Ye[t.ingredientName]});default:return e}},ze=Object(We.b)(Xe);i.a.render(r.a.createElement(Ee.a,{store:ze},r.a.createElement(c.a,{basename:"BurgerBuilder"},r.a.createElement(Ve,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[58,1,2]]]);
//# sourceMappingURL=main.edaa3245.chunk.js.map