let M=0,N=`string`,I=1,P=`Object`,K=`utf-8`,H=null,J=`undefined`,Q=4,O=`function`,F=Array,L=Error,R=Reflect,G=undefined;var u=((b,c,d)=>{a.wasm_bindgen__convert__closures__invoke1_mut__h3c697937bfed71cc(b,c,g(d))});var l=(a=>{const b=typeof a;if(b==`number`||b==`boolean`||a==H){return `${a}`};if(b==N){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==H){return `Symbol`}else{return `Symbol(${b})`}};if(b==O){const b=a.name;if(typeof b==N&&b.length>M){return `Function(${b})`}else{return `Function`}};if(F.isArray(a)){const b=a.length;let c=`[`;if(b>M){c+=l(a[M])};for(let d=I;d<b;d++){c+=`, `+ l(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>I){d=c[I]}else{return toString.call(a)};if(d==P){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return P}};if(a instanceof L){return `${a.name}: ${a.message}\n${a.stack}`};return d});var B=((a,b)=>{});var v=((b,c,d)=>{a.wasm_bindgen__convert__closures__invoke1_mut__hfe3d23c4186e65b2(b,c,g(d))});var g=(a=>{if(d===b.length)b.push(b.length+ I);const c=d;d=b[c];b[c]=a;return c});var f=(a=>{const b=c(a);e(a);return b});function y(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(g(b))}}var w=((a,b)=>{if(a===M){return c(b)}else{return k(a,b)}});var r=(()=>{if(q===H||q.byteLength===M){q=new Int32Array(a.memory.buffer)};return q});var x=(a=>a===G||a===H);var c=(a=>b[a]);var E=(async(b)=>{if(a!==G)return a;if(typeof b===J){b=new URL(`counter-44ec42301a910f77_bg.wasm`,import.meta.url)};const c=A();if(typeof b===N||typeof Request===O&&b instanceof Request||typeof URL===O&&b instanceof URL){b=fetch(b)};B(c);const {instance:d,module:e}=await z(await b,c);return C(d,e)});var D=(b=>{if(a!==G)return a;const c=A();B(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return C(d,b)});var C=((b,c)=>{a=b.exports;E.__wbindgen_wasm_module=c;q=H;i=H;a.__wbindgen_start();return a});var A=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_drop_ref=(a=>{f(a)});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return g(b)});b.wbg.__wbindgen_string_new=((a,b)=>{const c=k(a,b);return g(c)});b.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new L();return g(a)});b.wbg.__wbg_stack_658279fe44541cf6=((b,d)=>{const e=c(d).stack;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r()[b/Q+ I]=g;r()[b/Q+ M]=f});b.wbg.__wbg_error_f851667af71bcfc6=((b,c)=>{var d=w(b,c);if(b!==M){a.__wbindgen_free(b,c)};console.error(d)});b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===G;return b});b.wbg.__wbindgen_is_null=(a=>{const b=c(a)===H;return b});b.wbg.__wbindgen_is_falsy=(a=>{const b=!c(a);return b});b.wbg.__wbindgen_jsval_eq=((a,b)=>{const d=c(a)===c(b);return d});b.wbg.__wbg_instanceof_Window_9029196b662bc42a=(a=>{let b;try{b=c(a) instanceof Window}catch{b=!1}const d=b;return d});b.wbg.__wbg_document_f7ace2b956f30a4f=(a=>{const b=c(a).document;return x(b)?M:g(b)});b.wbg.__wbg_localStorage_dbac11bd189e9fa0=function(){return y((a=>{const b=c(a).localStorage;return x(b)?M:g(b)}),arguments)};b.wbg.__wbg_body_674aec4c1c0910cd=(a=>{const b=c(a).body;return x(b)?M:g(b)});b.wbg.__wbg_createComment_6b5ea2660a7c961a=((a,b,d)=>{var e=w(b,d);const f=c(a).createComment(e);return g(f)});b.wbg.__wbg_createDocumentFragment_2570c0407199fba9=(a=>{const b=c(a).createDocumentFragment();return g(b)});b.wbg.__wbg_createElement_4891554b28d3388b=function(){return y(((a,b,d)=>{var e=w(b,d);const f=c(a).createElement(e);return g(f)}),arguments)};b.wbg.__wbg_createTextNode_2fd22cd7e543f938=((a,b,d)=>{var e=w(b,d);const f=c(a).createTextNode(e);return g(f)});b.wbg.__wbg_createTreeWalker_f8e54e77abe9d699=function(){return y(((a,b,d)=>{const e=c(a).createTreeWalker(c(b),d>>>M);return g(e)}),arguments)};b.wbg.__wbg_getElementById_cc0e0d931b0d9a28=((a,b,d)=>{var e=w(b,d);const f=c(a).getElementById(e);return x(f)?M:g(f)});b.wbg.__wbg_querySelector_52ded52c20e23921=function(){return y(((a,b,d)=>{var e=w(b,d);const f=c(a).querySelector(e);return x(f)?M:g(f)}),arguments)};b.wbg.__wbg_setinnerHTML_b089587252408b67=((a,b,d)=>{var e=w(b,d);c(a).innerHTML=e});b.wbg.__wbg_removeAttribute_d8404da431968808=function(){return y(((a,b,d)=>{var e=w(b,d);c(a).removeAttribute(e)}),arguments)};b.wbg.__wbg_setAttribute_e7e80b478b7b8b2f=function(){return y(((a,b,d,e,f)=>{var g=w(b,d);var h=w(e,f);c(a).setAttribute(g,h)}),arguments)};b.wbg.__wbg_before_208bff4b64d8f1f7=function(){return y(((a,b)=>{c(a).before(c(b))}),arguments)};b.wbg.__wbg_remove_48288e91662163dc=(a=>{c(a).remove()});b.wbg.__wbg_target_f171e89c61e2bccf=(a=>{const b=c(a).target;return x(b)?M:g(b)});b.wbg.__wbg_cancelBubble_90d1c3aa2a76cbeb=(a=>{const b=c(a).cancelBubble;return b});b.wbg.__wbg_composedPath_cf1bb5b8bcff496f=(a=>{const b=c(a).composedPath();return g(b)});b.wbg.__wbg_instanceof_Node_cffd9c3b74760745=(a=>{let b;try{b=c(a) instanceof Node}catch{b=!1}const d=b;return d});b.wbg.__wbg_parentNode_9e53f8b17eb98c9d=(a=>{const b=c(a).parentNode;return x(b)?M:g(b)});b.wbg.__wbg_childNodes_64dab37cf9d252dd=(a=>{const b=c(a).childNodes;return g(b)});b.wbg.__wbg_previousSibling_7ddf39401682f643=(a=>{const b=c(a).previousSibling;return x(b)?M:g(b)});b.wbg.__wbg_nextSibling_304d9aac7c2774ae=(a=>{const b=c(a).nextSibling;return x(b)?M:g(b)});b.wbg.__wbg_textContent_c5d9e21ee03c63d4=((b,d)=>{const e=c(d).textContent;var f=x(e)?M:p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=m;r()[b/Q+ I]=g;r()[b/Q+ M]=f});b.wbg.__wbg_appendChild_51339d4cde00ee22=function(){return y(((a,b)=>{const d=c(a).appendChild(c(b));return g(d)}),arguments)};b.wbg.__wbg_cloneNode_1f7cce4ea8b708e2=function(){return y((a=>{const b=c(a).cloneNode();return g(b)}),arguments)};b.wbg.__wbg_nextNode_49b7562f375c572d=function(){return y((a=>{const b=c(a).nextNode();return x(b)?M:g(b)}),arguments)};b.wbg.__wbg_debug_9a6b3243fbbebb61=(a=>{console.debug(c(a))});b.wbg.__wbg_error_788ae33f81d3b84b=(a=>{console.error(c(a))});b.wbg.__wbg_info_2e30e8204b29d91d=(a=>{console.info(c(a))});b.wbg.__wbg_log_1d3ae0273d8f4f8a=(a=>{console.log(c(a))});b.wbg.__wbg_warn_d60e832f9882c1b2=(a=>{console.warn(c(a))});b.wbg.__wbg_get_f028630ecf797640=function(){return y(((b,d,e,f)=>{var g=w(e,f);const h=c(d)[g];var i=x(h)?M:p(h,a.__wbindgen_malloc,a.__wbindgen_realloc);var j=m;r()[b/Q+ I]=j;r()[b/Q+ M]=i}),arguments)};b.wbg.__wbg_set_b574fec410521820=function(){return y(((a,b,d,e,f)=>{var g=w(b,d);var h=w(e,f);c(a)[g]=h}),arguments)};b.wbg.__wbg_length_7aeee1534dbcb390=(a=>{const b=c(a).length;return b});b.wbg.__wbg_setdata_8eae47221c7bc167=((a,b,d)=>{var e=w(b,d);c(a).data=e});b.wbg.__wbg_before_ab39b727f5c3752a=function(){return y(((a,b)=>{c(a).before(c(b))}),arguments)};b.wbg.__wbg_remove_179d3d8cd04e3f10=(a=>{c(a).remove()});b.wbg.__wbg_addEventListener_5651108fc3ffeb6e=function(){return y(((a,b,d,e)=>{var f=w(b,d);c(a).addEventListener(f,c(e))}),arguments)};b.wbg.__wbg_addEventListener_a5963e26cd7b176b=function(){return y(((a,b,d,e,f)=>{var g=w(b,d);c(a).addEventListener(g,c(e),c(f))}),arguments)};b.wbg.__wbg_append_5739c748cab384b5=function(){return y(((a,b)=>{c(a).append(c(b))}),arguments)};b.wbg.__wbg_get_44be0491f933a435=((a,b)=>{const d=c(a)[b>>>M];return g(d)});b.wbg.__wbg_newnoargs_581967eacc0e2604=((a,b)=>{var c=w(a,b);const d=new Function(c);return g(d)});b.wbg.__wbg_get_97b561fb56f034b5=function(){return y(((a,b)=>{const d=R.get(c(a),c(b));return g(d)}),arguments)};b.wbg.__wbg_call_cb65541d95d71282=function(){return y(((a,b)=>{const d=c(a).call(c(b));return g(d)}),arguments)};b.wbg.__wbg_self_1ff1d729e9aae938=function(){return y((()=>{const a=self.self;return g(a)}),arguments)};b.wbg.__wbg_window_5f4faef6c12b79ec=function(){return y((()=>{const a=window.window;return g(a)}),arguments)};b.wbg.__wbg_globalThis_1d39714405582d3c=function(){return y((()=>{const a=globalThis.globalThis;return g(a)}),arguments)};b.wbg.__wbg_global_651f05c6a0944d1c=function(){return y((()=>{const a=global.global;return g(a)}),arguments)};b.wbg.__wbg_call_01734de55d61e11d=function(){return y(((a,b,d)=>{const e=c(a).call(c(b),c(d));return g(e)}),arguments)};b.wbg.__wbg_is_205d914af04a8faa=((a,b)=>{const d=Object.is(c(a),c(b));return d});b.wbg.__wbg_set_092e06b0f9d71865=function(){return y(((a,b,d)=>{const e=R.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbindgen_debug_string=((b,d)=>{const e=l(c(d));const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r()[b/Q+ I]=g;r()[b/Q+ M]=f});b.wbg.__wbindgen_throw=((a,b)=>{throw new L(k(a,b))});b.wbg.__wbindgen_closure_wrapper95=((a,b,c)=>{const d=t(a,b,5,u);return g(d)});b.wbg.__wbindgen_closure_wrapper306=((a,b,c)=>{const d=t(a,b,124,v);return g(d)});return b});var e=(a=>{if(a<132)return;b[a]=d;d=a});var t=((b,c,d,e)=>{const f={a:b,b:c,cnt:I,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=M;try{return e(c,f.b,...b)}finally{if(--f.cnt===M){a.__wbindgen_export_2.get(f.dtor)(c,f.b);s.unregister(f)}else{f.a=c}}};g.original=f;s.register(g,f,f);return g});var p=((a,b,c)=>{if(c===G){const c=n.encode(a);const d=b(c.length,I)>>>M;j().subarray(d,d+ c.length).set(c);m=c.length;return d};let d=a.length;let e=b(d,I)>>>M;const f=j();let g=M;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==M){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,I)>>>M;const b=j().subarray(e+ g,e+ d);const f=o(a,b);g+=f.written};m=g;return e});var j=(()=>{if(i===H||i.byteLength===M){i=new Uint8Array(a.memory.buffer)};return i});var k=((a,b)=>{a=a>>>M;return h.decode(j().subarray(a,a+ b))});var z=(async(a,b)=>{if(typeof Response===O&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===O){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});let a;const b=new F(128).fill(G);b.push(G,H,!0,!1);let d=b.length;const h=typeof TextDecoder!==J?new TextDecoder(K,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw L(`TextDecoder not available`)}};if(typeof TextDecoder!==J){h.decode()};let i=H;let m=M;const n=typeof TextEncoder!==J?new TextEncoder(K):{encode:()=>{throw L(`TextEncoder not available`)}};const o=typeof n.encodeInto===O?((a,b)=>n.encodeInto(a,b)):((a,b)=>{const c=n.encode(a);b.set(c);return {read:a.length,written:c.length}});let q=H;const s=new FinalizationRegistry(b=>{a.__wbindgen_export_2.get(b.dtor)(b.a,b.b)});export default E;export{D as initSync}