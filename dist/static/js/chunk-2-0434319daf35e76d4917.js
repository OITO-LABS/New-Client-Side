(window.webpackJsonp=window.webpackJsonp||[]).push([[2,8,12,14,16],{InH8:function(e,t,a){"use strict";a.r(t);var s=a("q1tI"),i=a.n(s),n=a("Bbg3"),r=a("JZRC"),l=(a("ltjX"),a("gePh")),o=a("0oA5");a("CxY0"),a("qcPu");t.default=class extends i.a.Component{constructor(e){super(e),this.state={activePage:1,searchValue:"",recordsPerPage:10},this.gettingData=this.gettingData.bind(this),this.handlePage=this.handlePage.bind(this),this.handleSearch=this.handleSearch.bind(this),this.handleEdit=this.handleEdit.bind(this),this.handleDelete=this.handleDelete.bind(this),this.handleRegister=this.handleRegister.bind(this)}componentDidMount(){app.events.trigger(n.l,{status:!1,reset:!0})}gettingData(){const e={page:this.state.activePage-1,searchkey:this.state.searchValue,limit:this.state.recordsPerPage};fetch("http://localhost:4000/",{method:"POST",body:JSON.stringify(e)}).then(e=>e.json()).then(e=>{console.log(e),this.setState({totalRecords:e.totalElements,datas:e.content})}).catch(e=>{console.error(e)})}handlePage(e){this.setState({activePage:e},()=>{this.gettingData()})}handleSearch(e){this.setState({activePage:1,searchValue:e},()=>{this.gettingData()})}handleEdit(){app.events.trigger(n.m,{routerKey:n.k})}async handleDelete(e){console.log(e);let t=!1;(t=await Object(o.a)({msg:"Do you sure you want to delete this from emplist"}))&&(e.empNo,fetch("http://localhost:4000/").then(e=>{app.events.trigger(n.x,{visible:!0,type:n.a.SUCESS,msg:{res:e}})}).catch(e=>{console.log(e)}))}handleRegister(){app.events.trigger(n.m,{routerKey:n.j})}render(){return i.a.createElement("div",null,i.a.createElement(r.default,{button1name:"Register employee",button2name:"export",handleRegister:this.handleRegister,searchHandler:this.handleSearch}),i.a.createElement(l.default,{totalRecords:100,recordsPerPage:10,activePage:1,pageHandler:this.handlePage,editHandler:this.handleEdit,deleteHandler:this.handleDelete}))}}},JZRC:function(e,t,a){"use strict";a.r(t);var s=a("q1tI"),i=a.n(s),n=a("Bbg3"),r=a("17x9"),l=a.n(r);a("PCG1");class o extends s.Component{constructor(e){super(e),this.state={employeeSearchValue:""},this.searchHandler=this.searchHandler.bind(this),this.exportHandler=this.exportHandler.bind(this)}exportHandler(){alert("second button clicked")}searchHandler(e){let t=e.target.value;this.setState({employeeSearchValue:t},()=>this.props.searchHandler(t))}componentDidMount(){app.events.trigger(n.l,{status:!1,reset:!0})}render(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"row header-bar"},i.a.createElement("button",{type:"button",onClick:this.props.handleRegister,className:"btn btn-primary button"},this.props.button1name),i.a.createElement("button",{type:"button",onClick:this.exportHandler,className:"btn btn-success button"},this.props.button2name),i.a.createElement("div",{className:"form-group has-search ml-auto"},i.a.createElement("span",{className:"fa fa-search form-control-feedback"}),i.a.createElement("input",{type:"text",onChange:this.searchHandler,className:"form-control search-box",placeholder:"Search...",value:this.state.employeeSearchValue}))))}}t.default=o,o.propTypes={button1name:l.a.string,button2name:l.a.string,searchHandler:l.a.func.isRequired},o.defaultProps={button1name:"add",button2name:"export"}},Kmxm:function(e,t,a){"use strict";a.r(t);var s=a("q1tI"),i=a.n(s),n=a("17x9"),r=a.n(n),l=(a("0oA5"),a("Bbg3"));class o extends i.a.Component{constructor(e){super(e),this.minNavItems=7,this.setProperties();let t={};t.pages=this.calculatePages(t),this.state=t}setProperties(){this.deepPaginationLimit=this.props.deepPaginationLimit||0,this.limitedPageNav=this.deepPaginationLimit>0,this.activePage=this.props.activePage,this.maxNavItems=this.props.maxNavItems<this.minNavItems?this.minNavItems:this.props.maxNavItems,this.totalItems=this.props.totalItems,this.itemsPerPage=this.props.itemsPerPage,"mini"==this.props.type&&(this.maxNavItems=1,this.itemsPerPage=1),this.totalPages=Math.floor(this.totalItems/this.itemsPerPage)+(this.totalItems%this.itemsPerPage==0?0:1),this.p={activePage:this.activePage,totalItems:this.totalItems}}prevPage(){return this.activePage>1}nextPage(){return this.activePage<this.totalPages}isPropertyChanged(){return this.props.totalItems!=this.p.totalItems||this.props.activePage!=this.p.activePage}changePage(e,t){if(e){let e=this.state;this.activePage=this.activePage+t,this.activePageChange(),this.props.onPageChange&&(e={totalPages:this.totalPages,totalItems:this.totalItems,itemsPerPage:this.itemsPerPage,activePage:this.activePage},this.props.onPageChange(e)),app.events.trigger(l.u)}}activePageChange(){let e=this.calculatePages();this.setState({pages:e})}isPageAccessable(e){return!this.limitedPageNav||e<=this.deepPaginationLimit}getPageData(e,t,a=!0,s){let i=[];for(let n=e;n<=t;n++)a&&!this.isPageAccessable(n)&&(a=!1),i.push({index:i.length,no:n,text:s||n,link:a,active:this.activePage==n});return i}calculatePages(e){if("mini"==this.props.type)return this.getPageData(this.activePage,this.activePage);if(this.maxNavItems>=this.totalPages)return this.getPageData(1,this.totalPages);let t=this.maxNavItems<9?1:this.maxNavItems>20?3:2,a=this.totalPages,s=this.activePage,i=[1,this.totalPages],n=1,r=Math.floor((this.maxNavItems-t)/2),l=a-(this.maxNavItems-r-t)+1,o=a;if(this.limitedPageNav){let e=s+Math.floor(this.maxNavItems/2);return n=1,(r=this.maxNavItems)<e&&(n=(r=e<=this.totalPages?e:this.totalPages)-this.maxNavItems+1),this.getPageData(n,r)}if(!i.includes(s)){let e=r==s?1:2;if(r==s||s==r+1)r+=e=s-r+1,l+=e;else if(l==s||l-1==s)r-=e=l-s+1,l-=e;else if(r<s&&l>s){e=2;let a=1,i=1,n=1,h=t>1?2:1;return s-r<3?(a=1,r-=2,l+=2,i=1,t>2&&(n=2)):l-s<3?(i=1,r-=2,l+=2,a=1,h=1,n=t>1?2:1,t>2&&(h=2)):(a=1,r-=2,l+=2,i=1,t>2&&(n=2)),[...this.getPageData(1,r),...this.getPageData(r+1,r+a,!1,"..."),...this.getPageData(s-n,s+h),...this.getPageData(l-i,l-1,!1,"..."),...this.getPageData(l,o)]}}return[...this.getPageData(1,r),...this.getPageData(r+1,r+t,!1,"..."),...this.getPageData(l,o)]}calculatePagesOld(e){let t=this.activePage,a=this.maxNavItems>=this.totalPages,s=a?this.totalPages:this.maxNavItems,i=[],n=a?0:s<9?1:s>20?3:2,r=this.totalPages,l=(Math.floor(r/3),Math.floor((s-n)/2)),o=Math.floor(l/2),h=Math.floor(o/2),c=1,m=l,g=r-l+1,d=r,p=m+1,u=g-1;if(!a&&t>=p&&t<=u){let e=t-o,a=t-h,i=t-l;e+s-1<=r&&(c=e,p=(m=e+l-1)+1),a+s-1<=r?(c=a,p=(m=a+l-1)+1):i+s-1<=r?(c=i,p=(m=i+l-1+n-(n>1?1:0))+1,n=n>1?1:0):g-n<=t?(m-=n,u=(g-=n)-1):t-m+c<g-1&&(c=t-m+c,m=t,u=(g-=1)-1)}let P=s-(m-c+n+d-g+2);P>0&&(t<=m?p=(m+=P)+1:u=(g-=P)-1);let b=0,v=0;for(v=c;v<=m;v++)i.push({index:i.length,no:v,text:v,link:!0,active:t==v}),b++;for(v=0;v<n;v++)i.push({index:i.length,no:v,text:"...",link:!1,active:!1}),b++;for(v=g;b<s&&v<=d;v++)i.push({index:i.length,no:v,text:v,link:!0,active:t==v}),b++;return i}componentDidUpdate(){this.isPropertyChanged()&&(this.setProperties(),this.activePageChange())}render(){return i.a.createElement("div",{className:"bxpagn "+(this.props.className||"")},i.a.createElement("nav",null,i.a.createElement("ul",{className:"pagination justify-content-center"+(this.totalPages<2?" d-none":"")},i.a.createElement("li",{className:"page-item "+(this.prevPage()?"":"disabled")},i.a.createElement("a",{onClick:()=>this.changePage(this.prevPage(),-1),className:"page-link cu-pointer"},i.a.createElement("i",{className:"fas fa-chevron-left"}))),this.state.pages.map((e,t)=>i.a.createElement("li",{key:t,className:"page-item "+(e.active?"active":e.link?"":"disabled")},i.a.createElement("a",{onClick:()=>this.changePage(e.link,e.no-this.activePage),className:"page-link cu-pointer"},i.a.createElement("span",{className:"number-font"},e.text)))),i.a.createElement("li",{className:"page-item "+(this.nextPage()?"":"disabled")},i.a.createElement("a",{onClick:()=>this.changePage(this.nextPage(),1),className:"page-link cu-pointer"},i.a.createElement("i",{className:"fas fa-chevron-right"}))))))}}o.propTypes={activePage:r.a.number,maxNavItems:r.a.number,totalItems:r.a.number.isRequired,itemsPerPage:r.a.number,onPageChange:r.a.func},o.defaultProps={activePage:1,maxNavItems:10,itemsPerPage:10},t.default=o},PCG1:function(e,t,a){e.exports={"header-bar":"static-css-searchAndButtonBar-css",button:"static-css-searchAndButtonBar-css","search-box":"static-css-searchAndButtonBar-css","search-button":"static-css-searchAndButtonBar-css","form-group":"static-css-searchAndButtonBar-css","has-search":"static-css-searchAndButtonBar-css","form-control":"static-css-searchAndButtonBar-css","form-control-feedback":"static-css-searchAndButtonBar-css"}},gePh:function(e,t,a){"use strict";a.r(t);var s=a("q1tI"),i=a.n(s),n=(a("ynTV"),a("Bbg3"),a("17x9")),r=a.n(n),l=a("Kmxm");class o extends s.Component{constructor(e){super(e),this.state={datas:[{firstName:"abhishek",lastName:"Murali",email:"abhishek@gmail.com",designation:"intern",dob:"1974-04-18",contactNo:97412983352,emergencyContactName:"Muralimohan",emergencyContact:9384326738,healthCardNo:"OITO101INT001",bloodGroup:"A-",status:"Y",empNo:"INT001"},{firstName:"preeti",lastName:"Murali",email:"preeti@gmail.com",designation:"intern",dob:"1974-04-18",contactNo:97412983352,emergencyContactName:"Muralimohan",emergencyContact:9384326738,healthCardNo:"OITO101INT001",bloodGroup:"A-",status:"Y",empNo:"INT001"},{firstName:"arun",lastName:"Murali",email:"arun2@gmail.com",designation:"intern",dob:"1974-04-18",contactNo:97412983352,emergencyContactName:"Muralimohan",emergencyContact:9384326738,healthCardNo:"OITO101INT001",bloodGroup:"A-",status:"Y",empNo:"INT001"},{firstName:"gayatri",lastName:"Murali",email:"gayatri@gmail.com",designation:"intern",dob:"1974-04-18",contactNo:97412983352,emergencyContactName:"Muralimohan",emergencyContact:9384326738,healthCardNo:"OITO101INT001",bloodGroup:"A-",status:"Y",empNo:"INT001"}],fields:[{label:"si no",key:"index"},{label:"employee id",key:"empNo"},{label:"NAME",key:"firstName"},{label:"email",key:"email"},{label:"contact no",key:"contactNo"},{label:"action",key:"editDelete"}]},this.renderTableHeader=this.renderTableHeader.bind(this),this.renderTableData=this.renderTableData.bind(this),this.handleDetails=this.handleDetails.bind(this),this.onPageChange=this.onPageChange.bind(this)}renderTableHeader(){return this.state.fields.map((e,t)=>i.a.createElement("th",{key:t},e.label.toUpperCase()))}handleDetails(){alert("this.handledetails clicked")}renderTableData(){return this.state.datas.map((e,t)=>i.a.createElement("tr",{key:t},this.state.fields.map((a,s)=>"index"==a.key?i.a.createElement("td",{key:s},t+1):"editDelete"!==a.key?1==s?i.a.createElement("td",{key:s,onClick:this.handleDetails},i.a.createElement("a",{href:"#"},e[a.key])):i.a.createElement("td",{key:s},e[a.key]):"editDelete"==a.key?i.a.createElement("td",{key:s},i.a.createElement("button",{onClick:()=>{this.props.editHandler(e)},className:"btn btn-primary action"},i.a.createElement("i",{className:"fas fa-edit"})),i.a.createElement("button",{onClick:()=>{this.props.deleteHandler(e)},className:"btn btn-danger action"},i.a.createElement("i",{className:"fas fa-trash"}))):void 0)))}onPageChange(e){this.setState({activePage:e.activePage}),this.props.pageHandler(e.activePage)}render(){return i.a.createElement("div",null,i.a.createElement("table",{className:"table  list"},i.a.createElement("thead",null,i.a.createElement("tr",null,this.renderTableHeader())),i.a.createElement("tbody",null,this.renderTableData())),i.a.createElement(l.default,{totalItems:300,onPageChange:this.onPageChange}))}}t.default=o,o.propTypes={totalRecords:r.a.number,recordsPerPage:r.a.number,activePage:r.a.number,datas:r.a.array,fields:r.a.array,pageHandler:r.a.func.isRequired,editHandler:r.a.func,deleteHandler:r.a.func},o.defaultProps={recordsPerPage:10,activePage:1}},ltjX:function(e,t,a){"use strict";a.r(t);var s=a("q1tI"),i=a.n(s),n=a("0oA5");t.default=class extends i.a.PureComponent{render(){if(!this.props.error&&!this.props.msg)return null;let e="error"==(this.props.type||"error");return i.a.createElement("div",{className:(this.props.htmFor?"":e?"is-invalid ":"is-valid ")+(e?"invalid-feedback":"valid-feedback")+" "+this.props.className,dangerouslySetInnerHTML:{__html:Object(n.p)(this.props.msg||this.props.error)}})}}},ynTV:function(e,t,a){e.exports={list:"static-css-listTable-css",action:"static-css-listTable-css"}}}]);