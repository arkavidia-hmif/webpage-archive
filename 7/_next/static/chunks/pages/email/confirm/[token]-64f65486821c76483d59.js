_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[33],{i0Jb:function(a,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/email/confirm/[token]",function(){return e("pC/I")}])},"pC/I":function(a,n,e){"use strict";e.r(n);var t=e("MX0m"),i=e.n(t),u=e("q1tI"),o=e.n(u),s=e("nOHt"),c=e("YFqc"),l=e.n(c),r=e("TkGN"),d=e("2IJ6"),m=e("I0nh"),g=e("thQb"),b=e("j96J"),f=e("CHOg"),h=e("tc18"),p=e("Owoi"),k=o.a.createElement;n.default=function(){var a=Object(u.useContext)(b.a),n=Object(u.useContext)(f.a),e=Object(s.useRouter)().query.token;if(!e)return null;var t=Object(u.useState)(!1),c=t[0],_=t[1],O=Object(u.useState)(null),j=O[0],w=O[1];return Object(u.useEffect)((function(){n.authenticated?w("Sedang login dengan akun lain, harap logout terlebih dahulu"):(w(null),Object(p.a)(a.axios,e).then((function(){_(!0)})).catch((function(a){a instanceof h.a&&a.code===g.b.INVALID_TOKEN?w("Tautan ini salah, silakan coba lagi atau hubungi panitia"):w(a.message)})))}),[]),k(d.a,{title:"Konfirmasi Email"},c?k(o.a.Fragment,null,k("p",{className:"jsx-1307030797 my-3"},"Sukses, silahkan login dengan email dan kata sandi yang sudah didaftarkan"),k(l.a,{href:"/login"},k(m.a,{text:"LOGIN",padding:"0.75em 1.5em"}))):k(o.a.Fragment,null,k(r.a,{error:j}),k("p",{className:"jsx-1307030797 my-3"},"Tunggu sebentar, kami sedang mengkonfirmasi email Anda")),k(i.a,{id:"1307030797"},["p.jsx-1307030797{color:#7446a1;}"]))}}},[["i0Jb",0,2,1,3,4,7]]]);
//# sourceMappingURL=[token]-64f65486821c76483d59.js.map