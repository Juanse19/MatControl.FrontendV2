(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{QCXw:function(e,t,i){"use strict";i.r(t);var r=i("ofXK"),n=i("aceb"),s=i("tyNb"),l=i("fXoL");let a=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-sic-syncro"]],decls:1,vars:0,template:function(e,t){1&e&&l["\u0275\u0275element"](0,"router-outlet")},directives:[s.h],encapsulation:2}),e})();var o=i("RS3s"),p=i("l5mm"),c=i("GJmQ"),d=i("RTP8"),f=i("sZbP"),u=i("tk/3");const g=[{path:"",component:a,children:[{path:"Sic",component:(()=>{class e{constructor(e,t,i,r){this.apiGetComp=e,this.http=t,this.toastrService=i,this.api=r,this.alive=!0,this.settings5={actions:{add:!1,edit:!1},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!1},columns:{id:{title:"ID",type:"number",filter:!1,hide:!0},listaCorteSIC:{title:"ListaCorte",type:"string",filter:!1},listaCorrtrim:{title:"ListaTrim",type:"number",filter:!1},orden:{title:"Orden",type:"number",filter:!1},pedido:{title:"Pedido",type:"number",filter:!1},tarjeta:{title:"Tarjeta",type:"string",filter:!1},longitudOrden_Planeado:{title:"LogitudOrden",type:"number",filter:!1},numeroCortes:{title:"NumeroCorte",type:"number",filter:!1},largoLamina_Planeado:{title:"LargoLamina",type:"number",filter:!1},anchoLamina_Planeado:{title:"AnchoLamina",type:"number",filter:!1},espesorLamina_Planeado:{title:"EspesorLamina",type:"number",filter:!1},origen:{title:"Origen",type:"string",filter:!1},destino:{title:"Destino",type:"string",filter:!1},hojasParaHacer_Planeado:{title:"HojasParaHacer",type:"number",filter:!1},estado:{title:"Estado",type:"string",filter:!1}}},this.source5=new o.b,this.ChargeReportSic()}ngOnInit(){}ChargeReportSic(){this.apiGetComp.GetJson(this.api.apiUrlMatbox+"/Orders/GetOrderSic").pipe(Object(c.a)(()=>this.alive)).subscribe(e=>{this.ReportSic=e,this.source5.load(e)}),Object(p.a)(6e4).subscribe(e=>{this.apiGetComp.GetJson(this.api.apiUrlMatbox+"/Orders/GetOrderSic").pipe(Object(c.a)(()=>this.alive)).subscribe(e=>{this.ReportSic=e,this.source5.load(e)})})}onDelete(e){}onDeleteConfirm(e){confirm("Are you sure wants to delete item?")&&e.data.id&&this.http.delete(this.api.apiUrlMatbox+"/Orders/DeleteOrderSic",e.data.id).pipe(Object(c.a)(()=>this.alive)).subscribe(e=>{e?(this.toastrService.success("","Item deleted!"),this.source5.refresh()):this.toastrService.danger("","Algo salio mal.")})}ngOnDestroy(){this.alive=!1}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](d.a),l["\u0275\u0275directiveInject"](u.b),l["\u0275\u0275directiveInject"](n.hc),l["\u0275\u0275directiveInject"](f.a))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-sic"]],decls:5,vars:2,consts:[[1,"example-smart-table",3,"settings","source","onDeleteConfirm"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"nb-card"),l["\u0275\u0275elementStart"](1,"nb-card-header"),l["\u0275\u0275text"](2," Informaci\xf3n de Sic "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](3,"nb-card-body"),l["\u0275\u0275elementStart"](4,"ng2-smart-table",0),l["\u0275\u0275listener"]("onDeleteConfirm",(function(e){return t.onDelete(e)})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("settings",t.settings5)("source",t.source5))},directives:[n.E,n.G,n.D,o.c],styles:[""]}),e})()},{path:"syncro",component:(()=>{class e{constructor(e,t){this.apiGetComp=e,this.api=t,this.alive=!0,this.settings6={actions:{add:!1,edit:!1},delete:{deleteButtonContent:'<i class="nb-trash"></i>'},columns:{id:{title:"ID",type:"number",filter:!1,hide:!0},position:{title:"Posici\xf3n",type:"string",filter:!1},setupID:{title:"Configuraci\xf3nId",type:"string",filter:!1},modID:{title:"ModId",type:"string",filter:!1},webWidth:{title:"AnchoWeb",type:"string",filter:!1},trimType:{title:"Tipoajuste",type:"string",filter:!1},valid:{title:"V\xe1lido",type:"string",filter:!1},scoreGap:{title:"PuntajeBrecha",type:"string",filter:!1},qualityID:{title:"IDcalidad",type:"string",filter:!1},trim:{title:"Prueba",type:"string",filter:!1},slitsTandem:{title:"RanurasT\xe1ndem",type:"string",filter:!1},scoresTandem:{title:"PuntajesT\xe1ndem",type:"string",filter:!1},shaftMask:{title:"EjeMascara",type:"string",filter:!1},constantSystem:{title:"SistemaConstante",type:"string",filter:!1},knifeOnly:{title:"knifeOnly",type:"string",filter:!1},noChange_STK_0:{title:"SinCambiosSTK0",type:"string",filter:!1},noChange_STK_1:{title:"SinCambiosSTK1",type:"string",filter:!1},noChange_STK_2:{title:"SinCambiosSTK2",type:"string",filter:!1},cutToMark0:{title:"CortarMarca0",type:"string",filter:!1},cutToMark1:{title:"CortarMarca1",type:"string",filter:!1},cutToMark2:{title:"CortarMarca2",type:"string",filter:!1},orderNumber0:{title:"NumeroOrden0",type:"string",filter:!1},delivery0:{title:"entrega0",type:"string",filter:!1},customerName0:{title:"NombreCliente0",type:"string",filter:!1},sheetWidth0:{title:"AnchoHoja0",type:"string",filter:!1},outs0:{title:"Salidas0",type:"string",filter:!1},scoreMeasures0:{title:"Medidaspuntuaci\xf3n0",type:"string",filter:!1},scoreType0:{title:"TipoPuntaje0",type:"string",filter:!1},positType0:{title:"PostularTipo0",type:"string",filter:!1},teleTwinOffset0:{title:"TeleTwinDesplazamiento0",type:"string",filter:!1},scoreGap0:{title:"Puntuaci\xf3nGap0",type:"string",filter:!1},levelName0:{title:"NivelNombre0",type:"string",filter:!1},sheetLength0:{title:"Longitudhoja0",type:"string",filter:!1},segmentSheetCount0:{title:"RecuentoHojasSegmento0",type:"string",filter:!1},sheetsPerStack0:{title:"HojasporPila0",type:"string",filter:!1},stacksPerPallet0:{title:"PilasPorPal\xe90",type:"string",filter:!1},sending0:{title:"Enviando0",type:"string",filter:!1},orderNumber1:{title:"NumeroOrden1",type:"string",filter:!1},delivery1:{title:"entrega1",type:"string",filter:!1},customerName1:{title:"NombreCliente1",type:"string",filter:!1},sheetWidth1:{title:"AnchoHoja1",type:"string",filter:!1},outs1:{title:"Salidas1",type:"string",filter:!1},scoreMeasures1:{title:"Medidaspuntuaci\xf3n1",type:"string",filter:!1},scoreType1:{title:"TipoPuntaje1",type:"string",filter:!1},positType1:{title:"PostularTipo1",type:"string",filter:!1},teleTwinOffset1:{title:"TeleTwinDesplazamiento1",type:"string",filter:!1},scoreGap1:{title:"Puntuaci\xf3nGap1",type:"string",filter:!1},levelName1:{title:"NivelNombre1",type:"string",filter:!1},sheetLength1:{title:"Longitudhoja1",type:"string",filter:!1},segmentSheetCount1:{title:"RecuentoHojasSegmento1",type:"string",filter:!1},sheetsPerStack1:{title:"HojasporPila1",type:"string",filter:!1},stacksPerPallet1:{title:"PilasPorPal\xe91",type:"string",filter:!1},sending1:{title:"Enviando1",type:"string",filter:!1},orderNumber2:{title:"NumeroOrden2",type:"string",filter:!1},delivery2:{title:"entrega2",type:"string",filter:!1},customerName2:{title:"NombreCliente2",type:"string",filter:!1},sheetWidth2:{title:"AnchoHoja2",type:"string",filter:!1},outs2:{title:"Salidas2",type:"string",filter:!1},scoreMeasures2:{title:"Medidaspuntuaci\xf3n2",type:"string",filter:!1},scoreType2:{title:"TipoPuntaje2",type:"string",filter:!1},positType2:{title:"PostularTipo2",type:"string",filter:!1},teleTwinOffset2:{title:"TeleTwinDesplazamiento2",type:"string",filter:!1},scoreGap2:{title:"Puntuaci\xf3nGap2",type:"string",filter:!1},levelName2:{title:"NivelNombre2",type:"string",filter:!1},sheetLength2:{title:"Longitudhoja2",type:"string",filter:!1},segmentSheetCount2:{title:"RecuentoHojasSegmento2",type:"string",filter:!1},sheetsPerStack2:{title:"HojasporPila2",type:"string",filter:!1},stacksPerPallet2:{title:"PilasPorPal\xe92",type:"string",filter:!1},sending2:{title:"Enviando2",type:"string",filter:!1},officeID:{title:"officeID",type:"string",filter:!1}}},this.source6=new o.b,this.ChargeReportSyncro()}ngOnInit(){}ChargeReportSyncro(){this.apiGetComp.GetJson(this.api.apiUrlMatbox+"/Orders/GetOrderSyncro").pipe(Object(c.a)(()=>this.alive)).subscribe(e=>{this.ReportSic=e,this.source6.load(e)}),Object(p.a)(6e4).subscribe(e=>{this.apiGetComp.GetJson(this.api.apiUrlMatbox+"/Orders/GetOrderSyncro").pipe(Object(c.a)(()=>this.alive)).subscribe(e=>{this.ReportSic=e,this.source6.load(e)})})}onDelete(e){confirm("Are you sure wants to delete item?")}ngOnDestroy(){this.alive=!1}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](d.a),l["\u0275\u0275directiveInject"](f.a))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-syncro"]],decls:5,vars:2,consts:[[1,"example-smart-table",3,"settings","source","delete"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"nb-card"),l["\u0275\u0275elementStart"](1,"nb-card-header"),l["\u0275\u0275text"](2," Informaci\xf3n de Syncro "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](3,"nb-card-body"),l["\u0275\u0275elementStart"](4,"ng2-smart-table",0),l["\u0275\u0275listener"]("delete",(function(e){return t.onDelete(e)})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("settings",t.settings6)("source",t.source6))},directives:[n.E,n.G,n.D,o.c],styles:[""]}),e})()}]}];let y=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[s.g.forChild(g)],s.g]}),e})();var m=i("vTDv");i.d(t,"SicSyncroModule",(function(){return h}));let h=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,y,o.d,m.a,n.H,n.Ac,n.t,n.db,n.dc]]}),e})()}}]);