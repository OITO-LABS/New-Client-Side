(window.webpackJsonp=window.webpackJsonp||[]).push([[10,19,24],{"5OO8":function(e,t,a){"use strict";a.r(t),a.d(t,"ReimbursementBillListing",function(){return h});var s=a("q1tI"),i=a.n(s),n=a("Bbg3"),l=a("qcPu"),r=a("gePh");a("OA7p");class h extends s.Component{constructor(e){super(e),this.state={fields:[{label:"si no",key:"index"},{label:"Bill no",key:"billNo"},{label:"bill date",key:"billDate"},{label:"reimbursement description",key:"reimbursementDescription"},{label:"category name",key:"categoryName"},{label:"cost",key:"cost"}]},this.pageHandler=this.pageHandler.bind(this),this.totalCost=this.totalCost.bind(this),this.gettingBill=this.gettingBill.bind(this)}componentDidMount(){app.events.trigger(n.q,{status:!1,reset:!0}),this.gettingBill(),this.totalCost()}pageHandler(e){console.log(e)}gettingBill(){l.a.getRequest("reimbursementBill",{reimbursementId:this.props.match.params.reimbursementId}).then(e=>{this.setState({datas:e})}).catch(e=>{console.log(e)})}totalCost(){let e=0;this.state.datas.map(t=>{e+=t.cost}),this.setState({totalCost:e})}render(){return i.a.createElement("div",null,i.a.createElement(r.default,{fields:this.state.fields,datas:this.state.datas,pageHandler:this.handlePage}),i.a.createElement("div",{className:"row total-cost"},i.a.createElement("div",{className:"col-9"}),i.a.createElement("div",{className:"col-3 total"},i.a.createElement("table",{className:"table "},i.a.createElement("tbody",null,i.a.createElement("td",null,"Total Cost"),i.a.createElement("td",{className:"num"},"1200"))))))}}t.default=h},Kmxm:function(e,t,a){"use strict";a.r(t);var s=a("q1tI"),i=a.n(s),n=a("17x9"),l=a.n(n),r=(a("0oA5"),a("Bbg3"));class h extends i.a.Component{constructor(e){super(e),this.minNavItems=7,this.setProperties();let t={};t.pages=this.calculatePages(t),this.state=t}setProperties(){this.deepPaginationLimit=this.props.deepPaginationLimit||0,this.limitedPageNav=this.deepPaginationLimit>0,this.activePage=this.props.activePage,this.maxNavItems=this.props.maxNavItems<this.minNavItems?this.minNavItems:this.props.maxNavItems,this.totalItems=this.props.totalItems,this.itemsPerPage=this.props.itemsPerPage,"mini"==this.props.type&&(this.maxNavItems=1,this.itemsPerPage=1),this.totalPages=Math.floor(this.totalItems/this.itemsPerPage)+(this.totalItems%this.itemsPerPage==0?0:1),this.p={activePage:this.activePage,totalItems:this.totalItems}}prevPage(){return this.activePage>1}nextPage(){return this.activePage<this.totalPages}isPropertyChanged(){return this.props.totalItems!=this.p.totalItems||this.props.activePage!=this.p.activePage}changePage(e,t){if(e){let e=this.state;this.activePage=this.activePage+t,this.activePageChange(),this.props.onPageChange&&(e={totalPages:this.totalPages,totalItems:this.totalItems,itemsPerPage:this.itemsPerPage,activePage:this.activePage},this.props.onPageChange(e)),app.events.trigger(r.C)}}activePageChange(){let e=this.calculatePages();this.setState({pages:e})}isPageAccessable(e){return!this.limitedPageNav||e<=this.deepPaginationLimit}getPageData(e,t,a=!0,s){let i=[];for(let n=e;n<=t;n++)a&&!this.isPageAccessable(n)&&(a=!1),i.push({index:i.length,no:n,text:s||n,link:a,active:this.activePage==n});return i}calculatePages(e){if("mini"==this.props.type)return this.getPageData(this.activePage,this.activePage);if(this.maxNavItems>=this.totalPages)return this.getPageData(1,this.totalPages);let t=this.maxNavItems<9?1:this.maxNavItems>20?3:2,a=this.totalPages,s=this.activePage,i=[1,this.totalPages],n=1,l=Math.floor((this.maxNavItems-t)/2),r=a-(this.maxNavItems-l-t)+1,h=a;if(this.limitedPageNav){let e=s+Math.floor(this.maxNavItems/2);return n=1,(l=this.maxNavItems)<e&&(n=(l=e<=this.totalPages?e:this.totalPages)-this.maxNavItems+1),this.getPageData(n,l)}if(!i.includes(s)){let e=l==s?1:2;if(l==s||s==l+1)l+=e=s-l+1,r+=e;else if(r==s||r-1==s)l-=e=r-s+1,r-=e;else if(l<s&&r>s){e=2;let a=1,i=1,n=1,o=t>1?2:1;return s-l<3?(a=1,l-=2,r+=2,i=1,t>2&&(n=2)):r-s<3?(i=1,l-=2,r+=2,a=1,o=1,n=t>1?2:1,t>2&&(o=2)):(a=1,l-=2,r+=2,i=1,t>2&&(n=2)),[...this.getPageData(1,l),...this.getPageData(l+1,l+a,!1,"..."),...this.getPageData(s-n,s+o),...this.getPageData(r-i,r-1,!1,"..."),...this.getPageData(r,h)]}}return[...this.getPageData(1,l),...this.getPageData(l+1,l+t,!1,"..."),...this.getPageData(r,h)]}calculatePagesOld(e){let t=this.activePage,a=this.maxNavItems>=this.totalPages,s=a?this.totalPages:this.maxNavItems,i=[],n=a?0:s<9?1:s>20?3:2,l=this.totalPages,r=(Math.floor(l/3),Math.floor((s-n)/2)),h=Math.floor(r/2),o=Math.floor(h/2),c=1,g=r,m=l-r+1,d=l,p=g+1,P=m-1;if(!a&&t>=p&&t<=P){let e=t-h,a=t-o,i=t-r;e+s-1<=l&&(c=e,p=(g=e+r-1)+1),a+s-1<=l?(c=a,p=(g=a+r-1)+1):i+s-1<=l?(c=i,p=(g=i+r-1+n-(n>1?1:0))+1,n=n>1?1:0):m-n<=t?(g-=n,P=(m-=n)-1):t-g+c<m-1&&(c=t-g+c,g=t,P=(m-=1)-1)}let u=s-(g-c+n+d-m+2);u>0&&(t<=g?p=(g+=u)+1:P=(m-=u)-1);let v=0,b=0;for(b=c;b<=g;b++)i.push({index:i.length,no:b,text:b,link:!0,active:t==b}),v++;for(b=0;b<n;b++)i.push({index:i.length,no:b,text:"...",link:!1,active:!1}),v++;for(b=m;v<s&&b<=d;b++)i.push({index:i.length,no:b,text:b,link:!0,active:t==b}),v++;return i}componentDidUpdate(){this.isPropertyChanged()&&(this.setProperties(),this.activePageChange())}render(){return i.a.createElement("div",{className:"bxpagn "+(this.props.className||"")},i.a.createElement("nav",null,i.a.createElement("ul",{className:"pagination justify-content-center"+(this.totalPages<2?" d-none":"")},i.a.createElement("li",{className:"page-item "+(this.prevPage()?"":"disabled")},i.a.createElement("a",{onClick:()=>this.changePage(this.prevPage(),-1),className:"page-link cu-pointer"},i.a.createElement("i",{className:"fas fa-chevron-left"}))),this.state.pages.map((e,t)=>i.a.createElement("li",{key:t,className:"page-item "+(e.active?"active":e.link?"":"disabled")},i.a.createElement("a",{onClick:()=>this.changePage(e.link,e.no-this.activePage),className:"page-link cu-pointer"},i.a.createElement("span",{className:"number-font"},e.text)))),i.a.createElement("li",{className:"page-item "+(this.nextPage()?"":"disabled")},i.a.createElement("a",{onClick:()=>this.changePage(this.nextPage(),1),className:"page-link cu-pointer"},i.a.createElement("i",{className:"fas fa-chevron-right"}))))))}}h.propTypes={activePage:l.a.number,maxNavItems:l.a.number,totalItems:l.a.number.isRequired,itemsPerPage:l.a.number,onPageChange:l.a.func},h.defaultProps={activePage:1,maxNavItems:10,itemsPerPage:10},t.default=h},OA7p:function(e,t,a){},gePh:function(e,t,a){"use strict";a.r(t);var s=a("q1tI"),i=a.n(s),n=(a("Bbg3"),a("17x9")),l=a.n(n),r=a("Kmxm");class h extends s.Component{constructor(e){super(e),this.state={},this.renderTableHeader=this.renderTableHeader.bind(this),this.renderTableData=this.renderTableData.bind(this),this.handleDetails=this.handleDetails.bind(this),this.onPageChange=this.onPageChange.bind(this)}renderTableHeader(){return this.props.fields.map((e,t)=>i.a.createElement("th",{key:t},e.label.toUpperCase()))}handleDetails(){alert("this.handledetails clicked")}renderTableData(){const e=this.props.datas||[],t=this.props.fields||[];return e.map((e,a)=>i.a.createElement("tr",{key:a},t.map((t,s)=>{if("index"==t.key)return i.a.createElement("td",{key:s},a+1);if("editDelete"!==t.key&&"status"!==t.key)return 1==s?i.a.createElement("td",{key:s,onClick:()=>{this.props.detailsHandler(e)}},i.a.createElement("a",{href:"#"},e[t.key])):i.a.createElement("td",{key:s},e[t.key]);if("editDelete"==t.key)return i.a.createElement("td",{key:s},i.a.createElement("button",{onClick:()=>{this.props.editHandler(e)},className:"btn btn-primary action"},i.a.createElement("i",{className:"fas fa-edit"})),i.a.createElement("button",{onClick:()=>{this.props.deleteHandler(e)},className:"btn btn-danger action"},i.a.createElement("i",{className:"fas fa-trash"})));if("status"==t.key){if("Assigned"==e[t.key])return i.a.createElement("td",{key:s},i.a.createElement("button",{onClick:()=>this.props.unAssignHandler(e),className:"btn btn-warning"},"UnAssign"));if("Unassigned"==e[t.key])return i.a.createElement("td",{key:s},i.a.createElement("button",{onClick:()=>this.props.assignHandler(e),className:"btn btn-success"},"Assign"))}})))}onPageChange(e){this.setState({activePage:e.activePage}),this.props.pageHandler(e.activePage)}render(){return i.a.createElement("div",null,i.a.createElement("table",{className:"table  list"},i.a.createElement("thead",null,i.a.createElement("tr",null,this.renderTableHeader())),i.a.createElement("tbody",null,this.renderTableData())),i.a.createElement(r.default,{totalItems:this.props.totalRecords||1,onPageChange:this.onPageChange}))}}t.default=h,h.propTypes={totalRecords:l.a.number,recordsPerPage:l.a.number,activePage:l.a.number,datas:l.a.array,fields:l.a.array,pageHandler:l.a.func.isRequired,editHandler:l.a.func,deleteHandler:l.a.func},h.defaultProps={recordsPerPage:10,activePage:1}}}]);