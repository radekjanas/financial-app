(this["webpackJsonpfinancial-app"]=this["webpackJsonpfinancial-app"]||[]).push([[0],{17:function(a,e,t){a.exports=t(28)},27:function(a,e,t){},28:function(a,e,t){"use strict";t.r(e);var n=t(0),r=t.n(n),s=t(10),c=t.n(s),i=t(4),l=t(5),u=t(8),o=t(6),m=t(9),_=t(2),d=t(7),p=function(a){function e(a){var t;return Object(i.a)(this,e),(t=Object(u.a)(this,Object(o.a)(e).call(this,a))).pattern=/^(\d+)(\.\d+)?$/,t.changeCurrency=t.changeCurrency.bind(Object(_.a)(t)),t}return Object(m.a)(e,a),Object(l.a)(e,[{key:"changeCurrency",value:function(a){var e=a.target.value;this.pattern.test(e)?(this._currencyErrorMsg.classList.contains("currency__info--show")&&this._currencyErrorMsg.classList.remove("currency__info--show"),this.props.changeCurrency(e)):this._currencyErrorMsg.classList.contains("currency__info--show")||this._currencyErrorMsg.classList.add("currency__info--show")}},{key:"render",value:function(){var a=this;return r.a.createElement("section",{className:"currency"},r.a.createElement("p",{className:"currency__title"},"Wprowad\u017a kurs waluty"),r.a.createElement("label",{className:"currency__label",htmlFor:"currency__label"},"1 EUR = ",r.a.createElement("input",{className:"currency__input",id:"currency",type:"text",onChange:this.changeCurrency})," PLN"),r.a.createElement("p",{className:"currency__info",ref:function(e){return a._currencyErrorMsg=e}},"Warto\u015b\u0107 kursu nie powinna zawiera\u0107 innych znak\xf3w ni\u017c cyfry i jedna kropka (wraz z cz\u0119\u015bci\u0105 u\u0142amkow\u0105 liczby)"))}}]),e}(n.Component),h=Object(d.b)(null,(function(a){return{changeCurrency:function(e){return a(function(a){return{type:"CHANGE_CURRENCY",currency:a}}(e))}}}))(p),v=function(a){return{currency:a.currency,transactions:a.transactions}};var N=function(a){var e=a.list,t=a.currency,n=Object.values(e).reduce((function(a,e){var t=e.value;return a+Number(t)}),0);return r.a.createElement("div",{className:"transaction-list"},r.a.createElement("ul",{className:"transaction-list__list"},r.a.createElement("li",{className:"transaction-list__summary"},r.a.createElement("span",{className:"transaction-list__summary-count"},"Liczba transakcji:\xa0",r.a.createElement("span",{className:"value"},e.length)),r.a.createElement("span",{className:"transaction-list__summary-sum"},"SUMA:\xa0",r.a.createElement("span",{className:"value"},n.toFixed(2)),"\xa0EUR (",r.a.createElement("span",{className:"value"},(n*t).toFixed(2))," PLN)")),0!==e.length&&e.map((function(e,n){return r.a.createElement("li",{key:n,id:e.id,className:"transaction-list__element"},r.a.createElement("span",{className:"transaction-list__element-container"},r.a.createElement("span",{className:"transaction-list__element-id"},e.id,"."),r.a.createElement("span",{className:"transaction-list__element-name value"},e.name),r.a.createElement("span",{className:"transaction-list__element-value"},r.a.createElement("span",{className:"value"},Number(e.value).toFixed(2)),"\xa0EUR (",r.a.createElement("span",{className:"value"},Number(e.value*t).toFixed(2)),"\xa0PLN)")),r.a.createElement("span",{className:"transaction-list__element-delete",onClick:a.clickHandler},r.a.createElement("i",{className:"fa fa-times"})))}))))};var E=function(a){if(0!==a.data.length){var e=JSON.parse(JSON.stringify(a.data)).sort((function(a,e){return Number(e.value)-Number(a.value)}));return r.a.createElement("div",{className:"highest-transaction"},r.a.createElement("div",{className:"highest-transaction__box"},r.a.createElement("p",{className:"highest-transaction__box-value"},"Najwy\u017csza warto\u015b\u0107:",r.a.createElement("span",{className:"highest-transaction__value"},r.a.createElement("span",{className:"value"},e&&Number(e[0].value).toFixed(2))," EUR (",r.a.createElement("span",{className:"value"},e&&(Number(e[0].value)*Number(a.currency)).toFixed(2))," PLN)")),r.a.createElement("p",{className:"highest-transaction__box-name"},"Transakcja:",r.a.createElement("span",{className:"highest-transaction__name value"},e&&e[0].name))))}return null},b=function(a){function e(a){var t;return Object(i.a)(this,e),(t=Object(u.a)(this,Object(o.a)(e).call(this,a))).idCounter=0,t.namePattern=/^.{3,}$/,t.valuePattern=/^(\d+)(\.\d+)?$/,t.addTransaction=t.addTransaction.bind(Object(_.a)(t)),t.removeTransaction=t.removeTransaction.bind(Object(_.a)(t)),t}return Object(m.a)(e,a),Object(l.a)(e,[{key:"addTransaction",value:function(a){a.preventDefault();var e=this._nameInput.value,t=this._valueInput.value,n=this.namePattern.test(e),r=this.valuePattern.test(t);if(n&&r){this._transactionErrorMsg.classList.contains("add-transaction__info--show")&&this._transactionErrorMsg.classList.remove("add-transaction__info--show"),this.idCounter++;var s=[{id:this.idCounter,name:this._nameInput.value,value:this._valueInput.value}];this.props.addTransaction(s),this._valueInput.value="",this._nameInput.value=""}else this._transactionErrorMsg.classList.contains("add-transaction__info--show")||this._transactionErrorMsg.classList.add("add-transaction__info--show"),this._submit.classList.contains("add-transaction__submit--error")||(this._submit.classList.add("add-transaction__submit--error"),this._submit.setAttribute("disabled",!0),setTimeout(function(){this._submit.classList.remove("add-transaction__submit--error"),this._submit.removeAttribute("disabled")}.bind(this),300))}},{key:"removeTransaction",value:function(a){this.props.removeTransaction(Number(a.currentTarget.parentNode.id))}},{key:"render",value:function(){var a=this,e=this.props.transactions,t=this.props.currency;return r.a.createElement("section",{className:"transactions-container"},r.a.createElement("div",{className:"add-transaction"},r.a.createElement("p",{className:"add-transaction__title"},"Dodaj transakcj\u0119"),r.a.createElement("form",{className:"add-transaction__form",onSubmit:this.addTransaction},r.a.createElement("label",{className:"add-transaction__label",htmlFor:"transaction-name"},"Nazwa: ",r.a.createElement("input",{className:"add-transaction__input add-transaction__input--name",id:"transaction-name",type:"text",ref:function(e){return a._nameInput=e}})),r.a.createElement("label",{className:"add-transaction__label",htmlFor:"transaction-value"},"Warto\u015b\u0107 (EUR): ",r.a.createElement("input",{className:"add-transaction__input add-transaction__input--value",id:"transaction-value",type:"text",ref:function(e){return a._valueInput=e}})),r.a.createElement("input",{className:"add-transaction__submit",type:"submit",value:"Dodaj",ref:function(e){return a._submit=e}})),r.a.createElement("p",{className:"add-transaction__info",ref:function(e){return a._transactionErrorMsg=e}},"Nazwa transakcji musi mie\u0107 przynajmniej 3 znaki, warto\u015b\u0107 (EUR) nie powinna zawiera\u0107 innych znak\xf3w ni\u017c cyfry i jedna kropka (wraz z cz\u0119\u015bci\u0105 u\u0142amkow\u0105 liczby)")),r.a.createElement(N,{list:e,currency:t,clickHandler:this.removeTransaction}),r.a.createElement(E,{data:e,currency:t}))}}]),e}(n.Component),f=Object(d.b)(v,(function(a){return{addTransaction:function(e){return a(function(a){return{type:"ADD_TRANSACTION",transaction:a}}(e))},removeTransaction:function(e){return a(function(a){return{type:"REMOVE_TRANSACTION",id:a}}(e))},getTransactions:function(){return a({type:"GET_TRANSACTIONS"})}}}))(b),y=function(a){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(m.a)(e,a),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"app-title"},"financial-app"),r.a.createElement(h,null),r.a.createElement(f,null))}}]),e}(n.Component),g=t(11),j={currency:1,transactions:[]},O=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHANGE_CURRENCY":return Object.assign({},a,{currency:e.currency});case"ADD_TRANSACTION":return Object.assign({},a,{transactions:a.transactions.concat(e.transaction)});case"REMOVE_TRANSACTION":return Object.assign({},a,{transactions:a.transactions.filter((function(a){return a.id!==e.id}))});case"GET_TRANSACTIONS":return a.transactions;default:return a}},T=Object(g.b)(O);T.subscribe((function(){console.log(T.getState())}));var w=T;t(27);c.a.render(r.a.createElement(d.a,{store:w},r.a.createElement(y,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.f851943a.chunk.js.map