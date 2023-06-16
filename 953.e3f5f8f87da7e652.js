"use strict";(self.webpackChunknight_in_paradise=self.webpackChunknight_in_paradise||[]).push([[953],{8953:(O,m,e)=>{e.r(m),e.d(m,{ReservationModule:()=>M});var l=e(4755),o=e(5030),p=e(2722),v=e(5698),c=e(3772),h=e(5076),u=e(7732),d=e(978),f=e(6073),g=e(9234),t=e(9523),R=e(1241),x=e(6831),I=e(4810),C=e(3877),J=e(942),N=e(8152),b=e(1977),E=e(5512),Z=e(9997);function y(n,a){if(1&n&&(t.TgZ(0,"div",8),t._UZ(1,"shared-suggestions-text-input",9),t.qZA()),2&n){const s=a.ngIf;t.xp6(1),t.Q6J("label","Name")("options",s)}}function A(n,a){if(1&n&&t._UZ(0,"shared-text-input",3),2&n){const s=t.oxw();t.Q6J("control",s.form.controls.notes)("label","Notes")}}function L(n,a){if(1&n&&(t.TgZ(0,"div",10),t._uU(1),t.qZA()),2&n){const s=a.ngIf;t.xp6(1),t.hij(" ",s&&s," ")}}let T=(()=>{class n extends c.f{constructor(s,r){super(),this._store=s,this._confirm=r,this.$=this._store.select(d.X3).pipe((0,p.R)(this.unsubscribe$)).subscribe(i=>{this.reservation=structuredClone(i),this.popover={createdAt:i.createdAt,createdBy:i.createdBy,updatedAt:i.updatedAt,updatedBy:i.updatedBy}}),this.$$=this._store.select(h.dy).pipe((0,p.R)(this.unsubscribe$)).subscribe(i=>{this.isEditor=!(!i.roles.includes(2001)&&!i.roles.includes(5150))}),this.addError$=this._store.select(d.h4),this.addStatus$=this._store.select(d.lY),this.names$=this._store.select(d.eJ),this.form=new o.cw({bookedDate:new o.NI({value:this.reservation.bookedDate,disabled:!0}),person:new o.cw({name:new o.NI({value:this.reservation.person.name,disabled:!this.isEditor},[o.kI.required,o.kI.minLength(5),o.kI.maxLength(25)]),contact:new o.NI({value:this.reservation.person.contact,disabled:!this.isEditor},[o.kI.required,o.kI.minLength(5),o.kI.maxLength(25)])}),notes:new o.NI(""),price:new o.NI({value:this.reservation.price,disabled:!this.isEditor},[o.kI.required])})}editReservation(){(0,f.G)(this.form)&&this._store.dispatch((0,u.UD)({reservation:{bookedDate:this.reservation.bookedDate,number:this.reservation.number,notes:this.form.value.notes,person:{contact:this.form.value.person?.contact,name:this.form.value.person?.name},price:this.form.value.price,_id:this.reservation._id}}))}DeleteReservation(){this._confirm.openConfirm(g.l.RESERVATIONS.CONFIRM_DELETE).pipe((0,v.q)(2)).subscribe(s=>{!0===s&&this._store.dispatch((0,u.aL)({reservation:this.reservation}))})}}return n.\u0275fac=function(s){return new(s||n)(t.Y36(R.yh),t.Y36(x.z))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-reservation"]],features:[t.qOj],decls:13,vars:19,consts:[["autocomplete","off",1,"cs-text-bg-dark","text-light","pt-3","px-3","rounded-4","d-flex","flex-column",3,"formGroup","ngSubmit"],[3,"label","content","on"],["formGroupName","person",4,"ngIf"],[3,"control","label"],[3,"control"],[3,"control","label",4,"ngIf"],[3,"disabled","showDelete","deleteReq"],["class","text-danger text-center",4,"ngIf"],["formGroupName","person"],["formControlName","name",3,"label","options"],[1,"text-danger","text-center"]],template:function(s,r){1&s&&(t.TgZ(0,"shared-modal")(1,"form",0),t.NdJ("ngSubmit",function(){return r.editReservation()}),t._UZ(2,"shared-popover",1),t.YNc(3,y,2,2,"div",2),t.ALo(4,"async"),t._UZ(5,"shared-text-input",3)(6,"shared-date-input",4)(7,"shared-price-input",4),t.YNc(8,A,1,2,"shared-text-input",5),t.TgZ(9,"shared-button",6),t.NdJ("deleteReq",function(){return r.DeleteReservation()}),t.ALo(10,"async"),t.qZA(),t.YNc(11,L,2,1,"div",7),t.ALo(12,"async"),t.qZA()()),2&s&&(t.xp6(1),t.Q6J("formGroup",r.form),t.xp6(1),t.Q6J("label","Reservation")("content",r.popover)("on",r.isEditor),t.xp6(1),t.Q6J("ngIf",t.lcZ(4,13,r.names$)),t.xp6(2),t.Q6J("control",r.form.controls.person.controls.contact)("label","Contact Info"),t.xp6(1),t.Q6J("control",r.form.controls.bookedDate),t.xp6(1),t.Q6J("control",r.form.controls.price),t.xp6(1),t.Q6J("ngIf",r.isEditor),t.xp6(1),t.Q6J("disabled","Loading"===t.lcZ(10,15,r.addStatus$))("showDelete",!0),t.xp6(2),t.Q6J("ngIf",t.lcZ(12,17,r.addError$)))},dependencies:[l.O5,I.t,C.S,J.L,N.Y,o._Y,o.JJ,o.JL,o.sg,o.u,o.x0,b.z,E.U,Z.w,l.Ov]}),n})();var D=e(5784),Q=e(8454),$=e(4267),U=e(7257),S=e(2280),Y=e(1528),B=e(5305),z=e(5203);const G=[{path:"",component:T}];let M=(()=>{class n{}return n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,D.N,Y.X,Q.b,$.I,o.UX,U.z,B.U,z.o,S.Bz.forChild(G)]}),n})()}}]);