"use strict";(self.webpackChunkpos=self.webpackChunkpos||[]).push([[67],{1067:(U,v,n)=>{n.r(v),n.d(v,{RevenuesModule:()=>T});var w=n(6814),m=n(3403),R=n(5619),c=n(9773),d=n(8180),C=n(6775),M=n(8532),b=n(8018),f=n(8223),N=n(6261),g=n(9017),y=n(5994),A=n(9153),S=n(7022),u=n(1486),i=n(5879),D=n(7700),E=n(5937),$=n(1961),x=n(5083),B=n(5850);const F=function(s){return{date:s,format:"MMMM yyyy"}};var h=function(s){return s.new="Create New",s.search="Search By Date",s.downloadExcel="Download Excel",s}(h||{});const z=[{path:"",component:(()=>{class s extends C.H{constructor(t,e,o){super(o),this._dialog=t,this._financeService=e,this._navService=o,this.innerWidth=window.innerWidth,this.isAdmin=(0,g.q)(y.l.admin),this.isEditor=(0,g.q)(y.l.editor),this.columnDefs=this.getCols(),this.defaultColDef={initialWidth:140,sortable:!0,resizable:!0,filter:!0,flex:1,minWidth:140},this.date=new Date,this.revenues$=new R.X([])}ngOnInit(){const t=[{label:h.search,prefixIcon:{icon:"calendar_today"}}];(this.isAdmin||this.isEditor)&&t.push({label:h.new,prefixIcon:{icon:"add_circle"}}),this.isAdmin&&t.unshift({label:h.downloadExcel,prefixIcon:{icon:"library_books"}}),this.Navbar_Update({show:!0,back:!1,title:this.NAV_NAMES.FINANCE.children.REVENUE.name,buttons:t}),this.NavButtons$.pipe((0,c.R)(this.__unsubscribe$)).subscribe(e=>{e===h.new?this.openUserPopup():e===h.search?this.openSearch():e===h.downloadExcel&&this.downloadExcel()}),this._financeService.getAllRevenues(),this._financeService.expChanges$.pipe((0,c.R)(this.__unsubscribe$)).subscribe(e=>{"edit"===e.state?this.openUserPopup(e.exp):"delete"===e.state&&this.onDeleteUser(e.exp)}),this._financeService.revenues$.pipe((0,c.R)(this.__unsubscribe$)).subscribe(e=>this.getByMonth())}ngOnDestroy(){super.ngOnDestroy(),this._financeService.expChanges$.next({})}onGridReady(t){this.revenues$.pipe((0,c.R)(this.__unsubscribe$)).subscribe(e=>{e&&(this.rowData=e)})}previousDay(){const t=new Date(this.date);t.setMonth(this.date.getMonth()-1),t.setDate(15),this.date=t,this.getByMonth()}nextDay(){const t=new Date(this.date);t.setMonth(this.date.getMonth()+1),t.setDate(15),this.date=t,this.getByMonth()}downloadExcel(){this._financeService.revenues$.pipe((0,d.q)(1)).subscribe(t=>{!function W(s,p){if(!s&&!Array.isArray(s))return;const t=(0,S.fK)(new Date).replaceAll(" ","_"),e=[];s.reverse().forEach(a=>{let l={};l=p?{Revenue:a.title,Day:(0,f.M)(a.date),Amount:a.price,Notes:a.notes}:{Expense:a.title,Day:(0,f.M)(a.date),Amount:a.price,Notes:a.notes},e.push(l)});const o=u.P6.json_to_sheet(e);o["!cols"]=[{width:50},{width:20},{width:20},{width:30}];const r=u.P6.book_new();u.P6.book_append_sheet(r,o,p?"Revenues":"Expenses"),(0,u.NC)(r,`${p?"Revenues":"Expenses"}_At_${t}.xlsx`)}(t,!0)})}getByMonth(){this._financeService.revenues$.pipe((0,d.q)(1)).subscribe(t=>{const e=t.filter(o=>{const r=new Date(o.date),a=r.getMonth(),l=r.getFullYear();return a===this.date.getMonth()&&l===this.date.getFullYear()});this.revenues$.next(e)})}openSearch(){this._dialog.open(N.T,{width:"95vw",maxWidth:"400px",disableClose:!0,restoreFocus:!1,autoFocus:!0}).afterClosed().pipe((0,d.q)(1)).subscribe(t=>{t&&t.date&&(this.date=t.date,this.getByMonth())})}openUserPopup(t){this._dialog.open(A.G,{width:"95vw",maxWidth:"400px",maxHeight:"95vh",disableClose:!0,autoFocus:!t,restoreFocus:!1,data:{title:"Revenue",data:t}}).afterClosed().pipe((0,d.q)(1)).subscribe(e=>{e&&t&&this._financeService.editRevenue(e),e&&!t&&this._financeService.addNewRevenue(e)})}onDeleteUser(t){this._dialog.open(M.P,{width:"95vw",maxWidth:"500px",disableClose:!0,restoreFocus:!1,autoFocus:!1,data:{title:"Confirm Delete",bodyMessage:"Are you sure you want to delete this revenue?",showYesNo:!0,showOk:!1}}).afterClosed().pipe((0,d.q)(1)).subscribe(e=>{e&&"yes"===e&&t?._id&&this._financeService.deleteRevenue(t)})}getCols(){return[{headerName:"Revenue",field:"title"},{headerName:"Day",field:"date",valueFormatter:e=>(0,f.M)(e.data.date),width:130,minWidth:130,maxWidth:130},{headerName:"Amount",field:"price",width:100,minWidth:100,maxWidth:100},{headerName:"Notes",field:"notes",width:100,minWidth:100,maxWidth:300},{headerName:"",cellRenderer:b.m,width:100,minWidth:100,maxWidth:100,sortable:!1,filter:!1,resizable:!1,pinned:"right",hide:!this.isAdmin}]}onWindowResize(t){this.innerWidth=window.innerWidth}static#e=this.\u0275fac=function(e){return new(e||s)(i.Y36(D.uw),i.Y36(E.w),i.Y36($.t))};static#t=this.\u0275cmp=i.Xpm({type:s,selectors:[["app-revenues"]],hostBindings:function(e,o){1&e&&i.NdJ("resize",function(){return o.onWindowResize()},!1,i.Jf7)},features:[i.qOj],decls:2,vars:14,consts:[[3,"config","hide","next","previous"],[2,"width","100%","min-height","340px","height","calc(100vh - 240px)",3,"rowHeight","columnDefs","defaultColDef","rowData","pagination","paginationAutoPageSize","gridReady"]],template:function(e,o){1&e&&(i.TgZ(0,"shared-changer",0),i.NdJ("next",function(){return o.nextDay()})("previous",function(){return o.previousDay()}),i.qZA(),i.TgZ(1,"ag-grid-angular",1),i.NdJ("gridReady",function(a){return o.onGridReady(a)}),i.qZA()),2&e&&(i.Q6J("config",i.VKq(12,F,o.date))("hide",!0),i.xp6(1),i.ekj("ag-theme-alpine","light"===o.$theme)("ag-theme-alpine-dark","dark"===o.$theme),i.Q6J("rowHeight",35)("columnDefs",o.columnDefs)("defaultColDef",o.defaultColDef)("rowData",o.rowData)("pagination",o.innerWidth>700)("paginationAutoPageSize",!0))},dependencies:[x.N8,B.d]})}return s})()}];let P=(()=>{class s{static#e=this.\u0275fac=function(e){return new(e||s)};static#t=this.\u0275mod=i.oAB({type:s});static#n=this.\u0275inj=i.cJS({imports:[m.Bz.forChild(z),m.Bz]})}return s})();var j=n(9255),I=n(9781),J=n(7858);let T=(()=>{class s{static#e=this.\u0275fac=function(e){return new(e||s)};static#t=this.\u0275mod=i.oAB({type:s});static#n=this.\u0275inj=i.cJS({imports:[w.ez,P,x.sF,j.B,D.Is,I.n,J.j]})}return s})()}}]);