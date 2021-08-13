"use strict";(self.webpackChunkangularweb=self.webpackChunkangularweb||[]).push([[767],{5767:(z,f,s)=>{s.r(f),s.d(f,{AccountsModule:()=>D});var r=s(665),u=s(8583),c=s(7696),l=s(8049),t=s(639),m=s(7617);function _(e,o){1&e&&t._UZ(0,"span",10)}function A(e,o){1&e&&(t.TgZ(0,"span"),t._uU(1,"Delete"),t.qZA())}function v(e,o){if(1&e){const i=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",6),t.TgZ(8,"a",7),t._uU(9,"Edit"),t.qZA(),t.TgZ(10,"button",8),t.NdJ("click",function(){const p=t.CHM(i).$implicit;return t.oxw().deleteAccount(p.id)}),t.YNc(11,_,1,0,"span",9),t.YNc(12,A,2,0,"span",5),t.qZA(),t.qZA(),t.qZA()}if(2&e){const i=o.$implicit;t.xp6(2),t.lnq("",i.title," ",i.firstName," ",i.lastName,""),t.xp6(2),t.Oqu(i.email),t.xp6(2),t.Oqu(i.role),t.xp6(2),t.MGl("routerLink","edit/",i.id,""),t.xp6(2),t.Q6J("disabled",i.isDeleting),t.xp6(1),t.Q6J("ngIf",i.isDeleting),t.xp6(1),t.Q6J("ngIf",!i.isDeleting)}}function T(e,o){1&e&&(t.TgZ(0,"tr"),t.TgZ(1,"td",11),t._UZ(2,"span",12),t.qZA(),t.qZA())}let q=(()=>{class e{constructor(i){this.accountService=i}ngOnInit(){this.accountService.getAll().pipe((0,l.P)()).subscribe(i=>this.accounts=i)}deleteAccount(i){this.accounts.find(a=>a.id===i).isDeleting=!0,this.accountService.delete(i).pipe((0,l.P)()).subscribe(()=>{this.accounts=this.accounts.filter(a=>a.id!==i)})}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(m.B))},e.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:19,vars:2,consts:[["routerLink","add",1,"btn","btn-sm","btn-success","mb-2"],[1,"table","table-striped"],[2,"width","30%"],[2,"width","10%"],[4,"ngFor","ngForOf"],[4,"ngIf"],[2,"white-space","nowrap"],[1,"btn","btn-sm","btn-primary","mr-1",3,"routerLink"],[1,"btn","btn-sm","btn-danger","btn-delete-account",3,"disabled","click"],["class","spinner-border spinner-border-sm",4,"ngIf"],[1,"spinner-border","spinner-border-sm"],["colspan","4",1,"text-center"],[1,"spinner-border","spinner-border-lg","align-center"]],template:function(i,n){1&i&&(t.TgZ(0,"h1"),t._uU(1,"Accounts"),t.qZA(),t.TgZ(2,"p"),t._uU(3,"All accounts from secure (admin only) api end point:"),t.qZA(),t.TgZ(4,"a",0),t._uU(5,"Create Account"),t.qZA(),t.TgZ(6,"table",1),t.TgZ(7,"thead"),t.TgZ(8,"tr"),t.TgZ(9,"th",2),t._uU(10,"Name"),t.qZA(),t.TgZ(11,"th",2),t._uU(12,"Email"),t.qZA(),t.TgZ(13,"th",2),t._uU(14,"Role"),t.qZA(),t._UZ(15,"th",3),t.qZA(),t.qZA(),t.TgZ(16,"tbody"),t.YNc(17,v,13,9,"tr",4),t.YNc(18,T,3,0,"tr",5),t.qZA(),t.qZA()),2&i&&(t.xp6(17),t.Q6J("ngForOf",n.accounts),t.xp6(1),t.Q6J("ngIf",!n.accounts))},directives:[c.yS,u.sg,u.O5],encapsulation:2}),e})();var h=s(5298);function b(e,o){1&e&&(t.TgZ(0,"h1"),t._uU(1,"Create Account"),t.qZA())}function C(e,o){1&e&&(t.TgZ(0,"h1"),t._uU(1,"Edit Account"),t.qZA())}function U(e,o){1&e&&(t.TgZ(0,"div"),t._uU(1,"Title is required"),t.qZA())}function N(e,o){if(1&e&&(t.TgZ(0,"div",25),t.YNc(1,U,2,0,"div",0),t.qZA()),2&e){const i=t.oxw();t.xp6(1),t.Q6J("ngIf",i.f.title.errors.required)}}function x(e,o){1&e&&(t.TgZ(0,"div"),t._uU(1,"First Name is required"),t.qZA())}function J(e,o){if(1&e&&(t.TgZ(0,"div",25),t.YNc(1,x,2,0,"div",0),t.qZA()),2&e){const i=t.oxw();t.xp6(1),t.Q6J("ngIf",i.f.firstName.errors.required)}}function I(e,o){1&e&&(t.TgZ(0,"div"),t._uU(1,"Last Name is required"),t.qZA())}function w(e,o){if(1&e&&(t.TgZ(0,"div",25),t.YNc(1,I,2,0,"div",0),t.qZA()),2&e){const i=t.oxw();t.xp6(1),t.Q6J("ngIf",i.f.lastName.errors.required)}}function Q(e,o){1&e&&(t.TgZ(0,"div"),t._uU(1,"Email is required"),t.qZA())}function E(e,o){1&e&&(t.TgZ(0,"div"),t._uU(1,"Email must be a valid email address"),t.qZA())}function Y(e,o){if(1&e&&(t.TgZ(0,"div",25),t.YNc(1,Q,2,0,"div",0),t.YNc(2,E,2,0,"div",0),t.qZA()),2&e){const i=t.oxw();t.xp6(1),t.Q6J("ngIf",i.f.email.errors.required),t.xp6(1),t.Q6J("ngIf",i.f.email.errors.email)}}function M(e,o){1&e&&(t.TgZ(0,"div"),t._uU(1,"Role is required"),t.qZA())}function S(e,o){if(1&e&&(t.TgZ(0,"div",25),t.YNc(1,M,2,0,"div",0),t.qZA()),2&e){const i=t.oxw();t.xp6(1),t.Q6J("ngIf",i.f.role.errors.required)}}function y(e,o){1&e&&(t.TgZ(0,"div"),t.TgZ(1,"h3",26),t._uU(2,"Change Password"),t.qZA(),t.TgZ(3,"p"),t._uU(4,"Leave blank to keep the same password"),t.qZA(),t.qZA())}function k(e,o){1&e&&(t.TgZ(0,"div"),t._uU(1,"Password is required"),t.qZA())}function P(e,o){1&e&&(t.TgZ(0,"div"),t._uU(1,"Password must be at least 6 characters"),t.qZA())}function L(e,o){if(1&e&&(t.TgZ(0,"div",25),t.YNc(1,k,2,0,"div",0),t.YNc(2,P,2,0,"div",0),t.qZA()),2&e){const i=t.oxw();t.xp6(1),t.Q6J("ngIf",i.f.password.errors.required),t.xp6(1),t.Q6J("ngIf",i.f.password.errors.minlength)}}function F(e,o){1&e&&(t.TgZ(0,"div"),t._uU(1,"Confirm Password is required"),t.qZA())}function B(e,o){1&e&&(t.TgZ(0,"div"),t._uU(1,"Passwords must match"),t.qZA())}function V(e,o){if(1&e&&(t.TgZ(0,"div",25),t.YNc(1,F,2,0,"div",0),t.YNc(2,B,2,0,"div",0),t.qZA()),2&e){const i=t.oxw();t.xp6(1),t.Q6J("ngIf",i.f.confirmPassword.errors.required),t.xp6(1),t.Q6J("ngIf",i.f.confirmPassword.errors.mustMatch)}}function K(e,o){1&e&&t._UZ(0,"span",27)}const d=function(e){return{"is-invalid":e}};let g=(()=>{class e{constructor(i,n,a,p,Z){this.formBuilder=i,this.route=n,this.router=a,this.accountService=p,this.alertService=Z,this.loading=!1,this.submitted=!1}ngOnInit(){this.id=this.route.snapshot.params.id,this.isAddMode=!this.id,this.form=this.formBuilder.group({title:["",r.kI.required],firstName:["",r.kI.required],lastName:["",r.kI.required],email:["",[r.kI.required,r.kI.email]],role:["",r.kI.required],password:["",[r.kI.minLength(6),this.isAddMode?r.kI.required:r.kI.nullValidator]],confirmPassword:[""]},{validator:(0,h.Yf)("password","confirmPassword")}),this.isAddMode||this.accountService.getById(this.id).pipe((0,l.P)()).subscribe(i=>this.form.patchValue(i))}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.loading=!0,this.isAddMode?this.createAccount():this.updateAccount())}createAccount(){this.accountService.create(this.form.value).pipe((0,l.P)()).subscribe({next:()=>{this.alertService.success("Account created successfully",{keepAfterRouteChange:!0}),this.router.navigate(["../"],{relativeTo:this.route})},error:i=>{this.alertService.error(i),this.loading=!1}})}updateAccount(){this.accountService.update(this.id,this.form.value).pipe((0,l.P)()).subscribe({next:()=>{this.alertService.success("Update successful",{keepAfterRouteChange:!0}),this.router.navigate(["../../"],{relativeTo:this.route})},error:i=>{this.alertService.error(i),this.loading=!1}})}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(r.qu),t.Y36(c.gz),t.Y36(c.F0),t.Y36(m.B),t.Y36(m.c))},e.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:62,vars:34,consts:[[4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-row"],[1,"form-group","col"],["formControlName","title",1,"form-control",3,"ngClass"],["value",""],["value","Mr"],["value","Mrs"],["value","Miss"],["value","Ms"],["class","invalid-feedback",4,"ngIf"],[1,"form-group","col-5"],["type","text","formControlName","firstName",1,"form-control",3,"ngClass"],["type","text","formControlName","lastName",1,"form-control",3,"ngClass"],[1,"form-group","col-7"],["type","text","formControlName","email",1,"form-control",3,"ngClass"],["formControlName","role",1,"form-control",3,"ngClass"],["value","User"],["value","Admin"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],["type","password","formControlName","confirmPassword",1,"form-control",3,"ngClass"],[1,"form-group"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["routerLink","/admin/accounts",1,"btn","btn-link"],[1,"invalid-feedback"],[1,"pt-3"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(i,n){1&i&&(t.YNc(0,b,2,0,"h1",0),t.YNc(1,C,2,0,"h1",0),t.TgZ(2,"form",1),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(3,"div",2),t.TgZ(4,"div",3),t.TgZ(5,"label"),t._uU(6,"Title"),t.qZA(),t.TgZ(7,"select",4),t._UZ(8,"option",5),t.TgZ(9,"option",6),t._uU(10,"Mr"),t.qZA(),t.TgZ(11,"option",7),t._uU(12,"Mrs"),t.qZA(),t.TgZ(13,"option",8),t._uU(14,"Miss"),t.qZA(),t.TgZ(15,"option",9),t._uU(16,"Ms"),t.qZA(),t.qZA(),t.YNc(17,N,2,1,"div",10),t.qZA(),t.TgZ(18,"div",11),t.TgZ(19,"label"),t._uU(20,"First Name"),t.qZA(),t._UZ(21,"input",12),t.YNc(22,J,2,1,"div",10),t.qZA(),t.TgZ(23,"div",11),t.TgZ(24,"label"),t._uU(25,"Last Name"),t.qZA(),t._UZ(26,"input",13),t.YNc(27,w,2,1,"div",10),t.qZA(),t.qZA(),t.TgZ(28,"div",2),t.TgZ(29,"div",14),t.TgZ(30,"label"),t._uU(31,"Email"),t.qZA(),t._UZ(32,"input",15),t.YNc(33,Y,3,2,"div",10),t.qZA(),t.TgZ(34,"div",3),t.TgZ(35,"label"),t._uU(36,"Role"),t.qZA(),t.TgZ(37,"select",16),t._UZ(38,"option",5),t.TgZ(39,"option",17),t._uU(40,"User"),t.qZA(),t.TgZ(41,"option",18),t._uU(42,"Admin"),t.qZA(),t.qZA(),t.YNc(43,S,2,1,"div",10),t.qZA(),t.qZA(),t.YNc(44,y,5,0,"div",0),t.TgZ(45,"div",2),t.TgZ(46,"div",3),t.TgZ(47,"label"),t._uU(48,"Password"),t.qZA(),t._UZ(49,"input",19),t.YNc(50,L,3,2,"div",10),t.qZA(),t.TgZ(51,"div",3),t.TgZ(52,"label"),t._uU(53,"Confirm Password"),t.qZA(),t._UZ(54,"input",20),t.YNc(55,V,3,2,"div",10),t.qZA(),t.qZA(),t.TgZ(56,"div",21),t.TgZ(57,"button",22),t.YNc(58,K,1,0,"span",23),t._uU(59," Save "),t.qZA(),t.TgZ(60,"a",24),t._uU(61,"Cancel"),t.qZA(),t.qZA(),t.qZA()),2&i&&(t.Q6J("ngIf",n.isAddMode),t.xp6(1),t.Q6J("ngIf",!n.isAddMode),t.xp6(1),t.Q6J("formGroup",n.form),t.xp6(5),t.Q6J("ngClass",t.VKq(20,d,n.submitted&&n.f.title.errors)),t.xp6(10),t.Q6J("ngIf",n.submitted&&n.f.title.errors),t.xp6(4),t.Q6J("ngClass",t.VKq(22,d,n.submitted&&n.f.firstName.errors)),t.xp6(1),t.Q6J("ngIf",n.submitted&&n.f.firstName.errors),t.xp6(4),t.Q6J("ngClass",t.VKq(24,d,n.submitted&&n.f.lastName.errors)),t.xp6(1),t.Q6J("ngIf",n.submitted&&n.f.lastName.errors),t.xp6(5),t.Q6J("ngClass",t.VKq(26,d,n.submitted&&n.f.email.errors)),t.xp6(1),t.Q6J("ngIf",n.submitted&&n.f.email.errors),t.xp6(4),t.Q6J("ngClass",t.VKq(28,d,n.submitted&&n.f.role.errors)),t.xp6(6),t.Q6J("ngIf",n.submitted&&n.f.role.errors),t.xp6(1),t.Q6J("ngIf",!n.isAddMode),t.xp6(5),t.Q6J("ngClass",t.VKq(30,d,n.submitted&&n.f.password.errors)),t.xp6(1),t.Q6J("ngIf",n.submitted&&n.f.password.errors),t.xp6(4),t.Q6J("ngClass",t.VKq(32,d,n.submitted&&n.f.confirmPassword.errors)),t.xp6(1),t.Q6J("ngIf",n.submitted&&n.f.confirmPassword.errors),t.xp6(2),t.Q6J("disabled",n.loading),t.xp6(1),t.Q6J("ngIf",n.loading))},directives:[u.O5,r._Y,r.JL,r.sg,r.EJ,r.JJ,r.u,u.mk,r.YN,r.Kr,r.Fj,c.yS],encapsulation:2}),e})();const O=[{path:"",component:q},{path:"add",component:g},{path:"edit/:id",component:g}];let R=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.Bz.forChild(O)],c.Bz]}),e})(),D=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[u.ez,r.UX,R]]}),e})()}}]);