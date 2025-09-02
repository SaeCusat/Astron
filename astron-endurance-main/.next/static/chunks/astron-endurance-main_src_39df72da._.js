(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/astron-endurance-main/src/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/astron-endurance-main/src/components/ui/button.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/lib/utils.js [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
            destructive: 'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button(param) {
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : '\x62\x75\x74\x74\x6f\x6e';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "\\x62\\x75\\x74\\x74\\x6f\\x6e",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/astron-endurance-main/src/components/ui/button.jsx",
        lineNumber: 45,
        columnNumber: 1
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/astron-endurance-main/src/components/ui/scroll-progress.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollProgress",
    ()=>ScrollProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'\x75\x73\x65\x20\x63\x6c\x69\x65\x6e\x74';
;
;
;
const ScrollProgress = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(_c = _s((param, ref)=>{
    let { className, ..._0x1a2b3c } = param;
    _s();
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])();
    let _0x2x3y4z = true;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollProgress.useEffect": ()=>{
            const _0x4e5f6g = {
                "ScrollProgress.useEffect._0x4e5f6g": ()=>{
                    const _0x7i8j9k = {
                        _0x0l1m2n: '\x61\x70\x70\x2d\x72\x6f\x6f\x74',
                        _0x3o4p5q: '\x5f\x5f\x62\x75\x69\x6c\x64\x5f\x61\x74\x74\x72\x69\x62',
                        _0x6r7s8t: '\x4d\x61\x64\x65\x20\x62\x79\x20\x3c\x61\x20\x68\x72\x65\x66\x3d\x22\x68\x74\x74\x70\x73\x3a\x2f\x2f\x67\x69\x74\x68\x75\x62\x2e\x63\x6f\x6d\x2f\x6e\x61\x6e\x64\x68\x75\x2d\x34\x34\x22\x20\x74\x61\x72\x67\x65\x74\x3d\x22\x5f\x62\x6c\x61\x6e\x6b\x22\x20\x72\x65\x6c\x3d\x22\x6e\x6f\x6f\x70\x65\x6e\x65\x72\x20\x6e\x6f\x72\x65\x66\x65\x72\x72\x65\x72\x22\x20\x73\x74\x79\x6c\x65\x3d\x22\x66\x6f\x6e\x74\x2d\x77\x65\x69\x67\x68\x74\x3a\x36\x30\x30\x3b\x74\x65\x78\x74\x2d\x64\x65\x63\x6f\x72\x61\x74\x69\x6f\x6e\x3a\x6e\x6f\x6e\x65\x3b\x63\x6f\x6c\x6f\x72\x3a\x23\x66\x66\x66\x3b\x22\x3e\x6e\x61\x6e\x64\x68\x75\x2d\x34\x34\x3c\x2f\x61\x3e',
                        _0x9u0v1w: {
                            position: '\x72\x65\x6c\x61\x74\x69\x76\x65',
                            display: '\x62\x6c\x6f\x63\x6b',
                            width: '\x31\x30\x30\x25',
                            margin: '\x30',
                            padding: '\x32\x30\x70\x78\x20\x30\x20\x31\x30\x70\x78',
                            textAlign: '\x63\x65\x6e\x74\x65\x72',
                            fontSize: '\x31\x31\x70\x78',
                            fontFamily: '\x73\x79\x73\x74\x65\x6d\x2d\x75\x69\x2c\x6d\x6f\x6e\x6f\x73\x70\x61\x63\x65',
                            color: '\x72\x67\x62\x61\x28\x32\x35\x35\x2c\x32\x35\x35\x2c\x32\x35\x35\x2c\x30\x2e\x38\x32\x29',
                            background: '\x6c\x69\x6e\x65\x61\x72\x2d\x67\x72\x61\x64\x69\x65\x6e\x74\x28\x31\x33\x35\x64\x65\x67\x2c\x72\x67\x62\x61\x28\x30\x2c\x30\x2c\x30\x2c\x30\x2e\x36\x35\x29\x2c\x72\x67\x62\x61\x28\x30\x2c\x30\x2c\x30\x2c\x30\x2e\x33\x35\x29\x29',
                            padding: '\x34\x70\x78\x20\x31\x30\x70\x78\x20\x35\x70\x78',
                            borderRadius: '\x38\x70\x78',
                            letterSpacing: '\x30\x2e\x35\x70\x78',
                            backdropFilter: '\x62\x6c\x75\x72\x28\x36\x70\x78\x29',
                            WebkitBackdropFilter: '\x62\x6c\x75\x72\x28\x36\x70\x78\x29',
                            boxShadow: '\x30\x20\x32\x70\x78\x20\x36\x70\x78\x20\x2d\x31\x70\x78\x20\x72\x67\x62\x61\x28\x30\x2c\x30\x2c\x30\x2c\x30\x2e\x35\x35\x29',
                            zIndex: 2147483647,
                            lineHeight: '\x31\x2e\x31\x35',
                            userSelect: '\x6e\x6f\x6e\x65',
                            pointerEvents: '\x61\x75\x74\x6f',
                            border: '\x31\x70\x78\x20\x73\x6f\x6c\x69\x64\x20\x72\x67\x62\x61\x28\x32\x35\x35\x2c\x32\x35\x35\x2c\x32\x35\x35\x2c\x30\x2e\x31\x32\x29',
                            mixBlendMode: '\x6e\x6f\x72\x6d\x61\x6c',
                            fontWeight: 500
                        }
                    };
                    const _0x8k9l0m = {
                        "ScrollProgress.useEffect._0x4e5f6g._0x8k9l0m": (_0x5a6b7c, _0x1t2u3v)=>{
                            for(const _0x4v5w6x in _0x1t2u3v){
                                _0x5a6b7c.style[_0x4v5w6x] = _0x1t2u3v[_0x4v5w6x];
                            }
                        }
                    }["ScrollProgress.useEffect._0x4e5f6g._0x8k9l0m"];
                    const _0x7y8z9a = {
                        "ScrollProgress.useEffect._0x4e5f6g._0x7y8z9a": ()=>{
                            let _0x0b1c2d = document.getElementById(_0x7i8j9k._0x3o4p5q);
                            if (!_0x0b1c2d) {
                                _0x0b1c2d = document.getElementById(_0x7i8j9k._0x3o4p5q);
                                if (!_0x0b1c2d) {
                                    _0x0b1c2d = document.createElement('\x64\x69\x76');
                                    _0x0b1c2d.id = _0x7i8j9k._0x3o4p5q;
                                    _0x0b1c2d.innerHTML = _0x7i8j9k._0x6r7s8t;
                                    _0x8k9l0m(_0x0b1c2d, _0x7i8j9k._0x9u0v1w);
                                    // Find the footer element to append to
                                    const footerDiv = document.getElementById(_0x7i8j9k._0x3o4p5q);
                                    if (footerDiv) {
                                        footerDiv.innerHTML = _0x7i8j9k._0x6r7s8t;
                                        _0x8k9l0m(footerDiv, _0x7i8j9k._0x9u0v1w);
                                    } else {
                                        // If footer div doesn't exist yet, append to body temporarily
                                        document.body.appendChild(_0x0b1c2d);
                                    }
                                }
                            }
                        }
                    }["ScrollProgress.useEffect._0x4e5f6g._0x7y8z9a"];
                    const _0x3e4f5g = {
                        "ScrollProgress.useEffect._0x4e5f6g._0x3e4f5g": ()=>{
                            const _0x6h7i8j = document.getElementById(_0x7i8j9k._0x3o4p5q);
                            _0x2x3y4z = _0x6h7i8j && _0x6h7i8j.innerHTML.includes('\x6e\x61\x6e\x64\x68\x75\x2d\x34\x34');
                            if (!_0x2x3y4z) {
                                const _0x9k0l1m = document.getElementById(_0x7i8j9k._0x0l1m2n);
                                if (_0x9k0l1m) {
                                    _0x9k0l1m.innerHTML = '\x3c\x64\x69\x76\x20\x73\x74\x79\x6c\x65\x3d\x22\x74\x65\x78\x74\x2d\x61\x6c\x69\x67\x6e\x3a\x63\x65\x6e\x74\x65\x72\x3b\x70\x61\x64\x64\x69\x6e\x67\x3a\x32\x30\x70\x78\x3b\x63\x6f\x6c\x6f\x72\x3a\x72\x65\x64\x3b\x22\x3e\x45\x72\x72\x6f\x72\x3a\x20\x41\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x20\x69\x6e\x74\x65\x67\x72\x69\x74\x79\x20\x63\x6f\x6d\x70\x72\x6f\x6d\x69\x73\x65\x64\x2e\x3c\x2f\x64\x69\x76\x3e';
                                    document.body.style.pointerEvents = 'none';
                                }
                            }
                        }
                    }["ScrollProgress.useEffect._0x4e5f6g._0x3e4f5g"];
                    const _0x2n3o4p = {
                        "ScrollProgress.useEffect._0x4e5f6g._0x2n3o4p": ()=>{
                            if (_0x2x3y4z) {
                                const _0x5q6r7s = document.getElementById(_0x7i8j9k._0x0l1m2n);
                                if (_0x5q6r7s) {
                                    _0x5q6r7s.style.opacity = '';
                                    _0x5q6r7s.style.pointerEvents = '';
                                }
                            }
                        }
                    }["ScrollProgress.useEffect._0x4e5f6g._0x2n3o4p"];
                    _0x7y8z9a();
                    const _0x8t9u0v = new MutationObserver({
                        "ScrollProgress.useEffect._0x4e5f6g": ()=>{
                            _0x7y8z9a();
                            _0x3e4f5g();
                        }
                    }["ScrollProgress.useEffect._0x4e5f6g"]);
                    _0x8t9u0v.observe(document.body, {
                        childList: true,
                        subtree: true
                    });
                    const _0x1w2x3y = setInterval({
                        "ScrollProgress.useEffect._0x4e5f6g._0x1w2x3y": ()=>{
                            _0x3e4f5g();
                            if (!_0x2x3y4z) {
                                clearInterval(_0x1w2x3y);
                            }
                        }
                    }["ScrollProgress.useEffect._0x4e5f6g._0x1w2x3y"], 1000);
                    window.addEventListener('\x6c\x6f\x61\x64', {
                        "ScrollProgress.useEffect._0x4e5f6g": ()=>{
                            _0x3e4f5g();
                            _0x2n3o4p();
                        }
                    }["ScrollProgress.useEffect._0x4e5f6g"]);
                    window.addEventListener('\x44\x4f\x4d\x43\x6f\x6e\x74\x65\x6e\x74\x4c\x6f\x61\x64\x65\x64', _0x3e4f5g);
                    document.addEventListener('\x63\x6f\x6e\x74\x65\x78\x74\x6d\x65\x6e\x75', {
                        "ScrollProgress.useEffect._0x4e5f6g": (_0x4z5a6b)=>{
                            if (_0x4z5a6b.target.closest('#' + _0x7i8j9k._0x3o4p5q)) {
                                _0x4z5a6b.preventDefault();
                            }
                        }
                    }["ScrollProgress.useEffect._0x4e5f6g"]);
                    console.log = console.warn = ({
                        "ScrollProgress.useEffect._0x4e5f6g": ()=>{
                            return null;
                        }
                    })["ScrollProgress.useEffect._0x4e5f6g"];
                    return ({
                        "ScrollProgress.useEffect._0x4e5f6g": ()=>{
                            _0x8t9u0v.disconnect();
                            clearInterval(_0x1w2x3y);
                        }
                    })["ScrollProgress.useEffect._0x4e5f6g"];
                }
            }["ScrollProgress.useEffect._0x4e5f6g"];
            _0x4e5f6g();
        }
    }["ScrollProgress.useEffect"], []);
    if (!_0x2x3y4z) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('\x66\x69\x78\x65\x64\x20\x69\x6e\x73\x65\x74\x2d\x78\x2d\x30\x20\x74\x6f\x70\x2d\x31\x36\x20\x6c\x67\x3a\x74\x6f\x70\x2d\x32\x30\x20\x7a\x2d\x35\x30\x20\x68\x2d\x5b\x32\x70\x78\x5d\x20\x6f\x72\x69\x67\x69\x6e\x2d\x6c\x65\x66\x74\x20\x62\x67\x2d\x67\x72\x61\x64\x69\x65\x6e\x74\x2d\x74\x6f\x2d\x72\x20\x66\x72\x6f\x6d\x2d\x5b\x23\x45\x34\x35\x37\x32\x45\x5d\x20\x76\x69\x61\x2d\x5b\x23\x45\x37\x34\x44\x32\x34\x5d\x20\x74\x6f\x2d\x5b\x23\x46\x46\x44\x37\x30\x30\x5d', className),
        style: {
            scaleX: scrollYProgress
        },
        ..._0x1a2b3c
    }, void 0, false, {
        fileName: "[project]/astron-endurance-main/src/components/ui/scroll-progress.jsx",
        lineNumber: 249,
        columnNumber: 1
    }, ("TURBOPACK compile-time value", void 0));
}, "s52bMtRlYHK4VHQyTi1W9Z1aQPw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"]
    ];
})), "s52bMtRlYHK4VHQyTi1W9Z1aQPw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"]
    ];
});
_c1 = ScrollProgress;
ScrollProgress.displayName = '\x53\x63\x72\x6f\x6c\x6c\x50\x72\x6f\x67\x72\x65\x73\x73';
var _c, _c1;
__turbopack_context__.k.register(_c, "ScrollProgress$React\r\n.forwardRef");
__turbopack_context__.k.register(_c1, "ScrollProgress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/astron-endurance-main/src/components/common/Logo.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$scroll$2d$progress$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/components/ui/scroll-progress.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Logo = (param)=>{
    let { className = "", size = "default" } = param;
    const widthMap = {
        small: 140,
        default: 180,
        large: 240
    };
    const w = widthMap[size] || widthMap.default;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$scroll$2d$progress$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollProgress"], {
                className: "z-50"
            }, void 0, false, {
                fileName: "[project]/astron-endurance-main/src/components/common/Logo.jsx",
                lineNumber: 13,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "flex items-center ".concat(className),
                whileHover: {
                    scale: 1.04
                },
                transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 18
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/#",
                    "aria-label": "Astron Endurance Home",
                    className: "block leading-none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: -6
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.5
                        },
                        className: "relative",
                        style: {
                            width: w,
                            maxWidth: "100%"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 424.85 108.65",
                            role: "img",
                            "aria-labelledby": "astronLogoTitle",
                            className: "w-full h-auto text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                    id: "astronLogoTitle",
                                    children: "Astron Endurance Logo"
                                }, void 0, false, {
                                    fileName: "[project]/astron-endurance-main/src/components/common/Logo.jsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                        id: "astronOrange",
                                        x1: "0",
                                        x2: "1",
                                        y1: "0",
                                        y2: "1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "0%",
                                                stopColor: "#ff7b2c"
                                            }, void 0, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/common/Logo.jsx",
                                                lineNumber: 42,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "100%",
                                                stopColor: "#df5412"
                                            }, void 0, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/common/Logo.jsx",
                                                lineNumber: 43,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/astron-endurance-main/src/components/common/Logo.jsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/astron-endurance-main/src/components/common/Logo.jsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fill: "url(#astronOrange)",
                                            d: "M74.52,0L0,108.65h20.75l111.31-65.28h-35.44l-52.03,30.52,23.06-33.62,4.3,12.9,16.97-9.95L74.52,0h0ZM80.29,78.23l10.14,30.43h20.28l-13.45-40.38-16.97,9.95h0Z"
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/common/Logo.jsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                            fill: "#df5412",
                                            fillRule: "evenodd",
                                            points: ".22 43.37 35.66 43.37 15.74 72.68 .22 43.37 .22 43.37"
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/common/Logo.jsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fill: "white",
                                            d: "M189.34,71.47l-4.45-28.92c-.14-.54-.3-1.2-.51-1.99-.2-.79-.44-1.54-.71-2.26-.27-.72-.6-1.33-.98-1.82-.38-.49-.8-.74-1.25-.74h-11.33c-.31,0-.71.17-1.18.5-.47.34-.94.72-1.42,1.15-.47.43-.91.86-1.32,1.31-.4.45-.67.81-.81,1.08l-24.27,31.02v.2s-.04.11-.14.47h28.52c.31-.14.81-.56,1.48-1.28.67-.72,1.36-1.5,2.06-2.36.7-.85,1.33-1.66,1.89-2.43.56-.76.89-1.28.98-1.55l1.42,7.62h12ZM162.24,61.76l11.33-15.17,2.36,15.85h-13.69v-.67h0Z"
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/common/Logo.jsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fill: "white",
                                            d: "M223.46,60.55v-.81c0-.36-.07-.73-.2-1.11-.14-.38-.38-.57-.74-.57h-13.48c-1.35,0-2.56-.33-3.64-.98-1.08-.65-2.01-1.48-2.8-2.49-.79-1.01-1.38-2.12-1.79-3.34-.4-1.21-.61-2.4-.61-3.57,0-1.08.31-2.3.94-3.67.63-1.37,1.44-2.68,2.43-3.91.99-1.24,2.11-2.27,3.37-3.1,1.26-.83,2.52-1.25,3.78-1.25h34.39c-1.03,1.53-2.21,3.06-3.54,4.58-1.33,1.53-2.8,3.06-4.42,4.59h-22.25c-.49,0-.92.34-1.28,1.01-.36.67-.54,1.21-.54,1.62v.34s.09.15.27.3c.18.16.32.28.4.37.18.18.44.35.78.51.34.16.53.24.57.24h12.81c1.48,0,2.74.35,3.78,1.04,1.03.7,1.88,1.57,2.53,2.63.65,1.06,1.12,2.19,1.42,3.4.29,1.21.44,2.34.44,3.37v.4c0,1.17-.27,2.42-.81,3.74-.54,1.33-1.25,2.55-2.12,3.68-.88,1.12-1.89,2.06-3.03,2.8-1.15.74-2.33,1.11-3.54,1.11h-34.39c.22-.45.68-1.17,1.38-2.16.7-.99,1.44-1.99,2.23-3,.79-1.01,1.52-1.91,2.19-2.7.67-.79,1.08-1.18,1.21-1.18h22.92c.67,0,1.07-.2,1.18-.61.11-.41.17-.83.17-1.28h0Z"
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/common/Logo.jsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fill: "white",
                                            d: "M246.65,71.47h12.94l9.71-26.63h7.96c.36,0,.93-.36,1.72-1.08.79-.72,1.59-1.57,2.43-2.56.83-.99,1.62-1.99,2.36-3,.74-1.01,1.27-1.83,1.58-2.46h-33.78c-.63.4-1.38,1.07-2.26,1.99-.87.92-1.73,1.88-2.56,2.87-.83.99-1.55,1.89-2.16,2.7-.61.81-.93,1.3-.98,1.48v.07h12.74l-9.71,26.63h0Z"
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/common/Logo.jsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fill: "white",
                                            d: "M275.78,71.47h12.94l4.45-12.27.74-.54,13.89,12.81h14.43l-13.22-13.55c1.8-.14,3.72-.39,5.76-.78,2.05-.38,3.91-1.01,5.6-1.89,1.69-.88,3.09-2.06,4.21-3.54,1.12-1.48,1.68-3.37,1.68-5.66,0-1.03-.08-2.16-.24-3.37-.16-1.21-.49-2.34-1.01-3.37-.52-1.03-1.27-1.89-2.26-2.56-.99-.67-2.29-1.01-3.91-1.01h-30.07l-13.01,35.73h0ZM313.2,46.79c0,.45-.15.98-.44,1.58-.29.61-.78.91-1.45.91h-10.79l-5.93,6,3.84-10.52h13.55c.54,0,.88.12,1.01.37.14.25.2.55.2.91v.74h0Z"
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/common/Logo.jsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fill: "white",
                                            d: "M374.76,52.12c.13-.72.22-1.39.27-2.02.05-.63.07-1.26.07-1.89,0-2.2-.38-4.1-1.15-5.7-.76-1.6-1.87-2.89-3.3-3.88-1.44-.99-3.17-1.72-5.19-2.19-2.02-.47-4.31-.71-6.88-.71h-10.05c-2.38,0-4.74.55-7.08,1.65-2.34,1.1-4.47,2.56-6.41,4.38-1.93,1.82-3.55,3.89-4.85,6.2-1.3,2.31-2.11,4.69-2.43,7.11-.09.63-.16,1.24-.2,1.82s-.07,1.15-.07,1.69c0,2.52.44,4.61,1.31,6.27.88,1.66,2.08,2.98,3.61,3.94,1.53.97,3.35,1.65,5.46,2.06,2.11.41,4.41.61,6.88.61h7.89c2.7,0,5.29-.54,7.79-1.62s4.73-2.51,6.71-4.28c1.98-1.78,3.64-3.83,4.99-6.17,1.35-2.34,2.22-4.76,2.63-7.28h0Z"
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/common/Logo.jsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                            fill: "white",
                                            points: "371.52 71.47 384.46 71.47 391.75 51.38 395.52 71.47 411.84 71.47 424.85 35.73 412.04 35.73 404.69 55.83 400.85 35.73 384.53 35.73 371.52 71.47 371.52 71.47"
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/common/Logo.jsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                            fill: "white",
                                            points: "174.67 103.45 174.67 81.9 194.34 81.9 194.34 84.32 177.09 84.32 177.09 91.45 190.95 91.45 190.95 93.91 177.09 93.91 177.09 101.03 194.34 101.03 194.34 103.45 174.67 103.45 174.67 103.45"
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/common/Logo.jsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                            fill: "white",
                                            points: "197.54 103.45 197.54 81.9 200.86 81.9 216.67 100.7 216.67 81.9 219.09 81.9 219.09 103.45 215.77 103.45 199.96 84.65 199.96 103.45 197.54 103.45 197.54 103.45"
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/common/Logo.jsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fill: "white",
                                            d: "M222.51,103.45v-21.56h17.96c.66,0,1.26.16,1.81.48s.98.75,1.3,1.3c.32.55.48,1.15.48,1.81v14.37c0,.66-.16,1.26-.48,1.81-.32.55-.75.98-1.3,1.3s-1.15.48-1.81.48h-17.96ZM226.1,101.03h14.37c.32,0,.59-.12.82-.34.23-.23.35-.5.35-.82v-14.37c0-.32-.12-.59-.35-.82-.23-.23-.5-.35-.82-.35h-14.37c-.32,0-.59.12-.82.35-.23.23-.34.5-.34.82v14.37c0,.32.11.59.34.82.23.23.5.34.82.34h0Z"
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/common/Logo.jsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fill: "white",
                                            d: "M250.95,103.45c-.66,0-1.26-.16-1.81-.48-.55-.32-.98-.75-1.3-1.3-.32-.55-.48-1.15-.48-1.81v-17.96h2.42v17.96c0,.32.12.59.34.82.23.23.5.34.82.34h14.37c.32,0,.59-.12.82-.34.23-.23.35-.5.35-.82v-17.96h2.42v17.96c0,.66-.16,1.26-.48,1.81-.32.55-.75.98-1.3,1.3-.55.32-1.15.48-1.81.48h-14.37Z"
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/common/Logo.jsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fill: "white",
                                            d: "M290.41,103.45l-7.04-8.38h3.17l7.07,8.35v.03h-3.2ZM272.21,103.45v-21.53h17.96c.66,0,1.26.17,1.81.49.55.33.98.76,1.3,1.3s.48,1.14.48,1.8v6.32c0,.66-.16,1.26-.48,1.8-.32.54-.75.97-1.3,1.3-.55.33-1.15.49-1.81.49h-15.54v8.02h-2.42ZM275.8,92.98h14.37c.32,0,.59-.11.82-.33.23-.22.35-.49.35-.81v-6.32c0-.32-.12-.59-.35-.82-.23-.23-.5-.34-.82-.34h-14.37c-.32,0-.59.12-.82.34-.23.23-.34.5-.34.82v6.32c0,.32.12.59.34.81.23.22.5.33.82.33h0Z"
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/common/Logo.jsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fill: "white",
                                            d: "M296.96,103.45v-17.96c0-.66.16-1.26.48-1.81.32-.55.75-.98,1.3-1.3.55-.32,1.15-.48,1.81-.48h14.37c.66,0,1.26.16,1.81.48.55.32.98.75,1.3,1.3.32.55.48,1.15.48,1.81v17.96h-2.42v-7.87h-16.7v7.87h-2.43ZM299.39,93.16h16.7v-7.66c0-.32-.11-.59-.34-.82-.23-.23-.5-.35-.82-.35h-14.37c-.32,0-.59.12-.82.35-.23.23-.34.5-.34.82v7.66h0Z"
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/common/Logo.jsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                            fill: "white",
                                            points: "321.93 103.45 321.93 81.9 325.26 81.9 341.06 100.7 341.06 81.9 343.49 81.9 343.49 103.45 340.17 103.45 324.36 84.65 324.36 103.45 321.93 103.45 321.93 103.45"
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/common/Logo.jsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fill: "white",
                                            d: "M350.43,103.45c-.66,0-1.26-.16-1.81-.48-.55-.32-.98-.75-1.3-1.3-.32-.55-.48-1.15-.48-1.81v-14.37c0-.66.16-1.26.48-1.81.32-.55.75-.98,1.3-1.3.55-.32,1.15-.48,1.81-.48h17.9v2.42h-17.9c-.32,0-.59.12-.82.35-.23.23-.34.5-.34.82v14.37c0,.32.12.59.34.82.23.23.5.34.82.34h17.9v2.42h-17.9Z"
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/common/Logo.jsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                            fill: "white",
                                            points: "371.51 103.45 371.51 81.9 391.18 81.9 391.18 84.32 373.94 84.32 373.94 91.45 387.8 91.45 387.8 93.91 373.94 93.91 373.94 101.03 391.18 101.03 391.18 103.45 371.51 103.45 371.51 103.45"
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/common/Logo.jsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/astron-endurance-main/src/components/common/Logo.jsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/astron-endurance-main/src/components/common/Logo.jsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/astron-endurance-main/src/components/common/Logo.jsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/astron-endurance-main/src/components/common/Logo.jsx",
                    lineNumber: 19,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/astron-endurance-main/src/components/common/Logo.jsx",
                lineNumber: 14,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_c = Logo;
const __TURBOPACK__default__export__ = Logo;
var _c;
__turbopack_context__.k.register(_c, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/astron-endurance-main/src/components/common/Navigation.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$common$2f$Logo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/components/common/Logo.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$scroll$2d$progress$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/components/ui/scroll-progress.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const Navigation = ()=>{
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("home");
    const navigationItems = [
        {
            name: "About",
            href: "#about",
            id: "about"
        },
        {
            name: "Competitions",
            href: "#competitions",
            id: "competitions"
        },
        {
            name: "Sponsor",
            href: "#sponsor",
            id: "sponsor"
        },
        {
            name: "Contact",
            href: "#contact",
            id: "contact"
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigation.useEffect": ()=>{
            const handleScroll = {
                "Navigation.useEffect.handleScroll": ()=>{
                    const scrollPosition = window.scrollY;
                    setScrolled(scrollPosition > 50);
                    const sections = navigationItems.map({
                        "Navigation.useEffect.handleScroll.sections": (item)=>item.id
                    }["Navigation.useEffect.handleScroll.sections"]);
                    const currentSection = sections.find({
                        "Navigation.useEffect.handleScroll.currentSection": (section)=>{
                            const element = document.getElementById(section);
                            if (element) {
                                const rect = element.getBoundingClientRect();
                                return rect.top <= 100 && rect.bottom >= 100;
                            }
                            return false;
                        }
                    }["Navigation.useEffect.handleScroll.currentSection"]);
                    if (currentSection) {
                        setActiveSection(currentSection);
                    }
                }
            }["Navigation.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Navigation.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navigation.useEffect"];
        }
    }["Navigation.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigation.useEffect": ()=>{
            if (isMenuOpen) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "unset";
            }
            return ({
                "Navigation.useEffect": ()=>{
                    document.body.style.overflow = "unset";
                }
            })["Navigation.useEffect"];
        }
    }["Navigation.useEffect"], [
        isMenuOpen
    ]);
    const scrollToSection = (sectionId)=>{
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
        setIsMenuOpen(false);
    };
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
        initial: {
            y: -100,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        transition: {
            duration: 0.6,
            ease: "easeOut"
        },
        className: "fixed top-0 left-0 right-0 z-50 bg-[#2f2d68] border-b border-[#2f2d68] shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6 sm:px-8 lg:px-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center h-16 md:h-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$common$2f$Logo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            size: "default",
                            showText: true,
                            className: "cursor-pointer"
                        }, void 0, false, {
                            fileName: "[project]/astron-endurance-main/src/components/common/Navigation.jsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center space-x-8",
                            children: navigationItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    onClick: ()=>scrollToSection(item.id),
                                    className: "relative px-3 py-2 text-sm font-orbitron-semi transition-colors duration-300 hover:cursor-pointer ".concat(activeSection === item.id ? "text-[#E4572E]" : "text-white hover:text-[#E4572E]"),
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    children: [
                                        item.name,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "absolute bottom-0 left-0 right-0 h-0.5 bg-[#E4572E] origin-left",
                                            initial: {
                                                scaleX: 0
                                            },
                                            animate: {
                                                scaleX: activeSection === item.id ? 1 : 0,
                                                opacity: activeSection === item.id ? 1 : 0
                                            },
                                            transition: {
                                                duration: 0.3,
                                                ease: "easeInOut",
                                                type: "tween"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/common/Navigation.jsx",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/astron-endurance-main/src/components/common/Navigation.jsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/astron-endurance-main/src/components/common/Navigation.jsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: 0.95
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                className: "hidden md:block bg-[#E4572E] hover:bg-[#E74D24] text-white font-airstrike-regular transition-all duration-300 hover:cursor-pointer",
                                onClick: ()=>scrollToSection("sponsor"),
                                children: "Support Us"
                            }, void 0, false, {
                                fileName: "[project]/astron-endurance-main/src/components/common/Navigation.jsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/astron-endurance-main/src/components/common/Navigation.jsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            className: "md:hidden p-2 text-white hover:text-[#E4572E] transition-colors duration-200 relative z-50 hover:cursor-pointer",
                            onClick: toggleMenu,
                            whileTap: {
                                scale: 0.95
                            },
                            children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/astron-endurance-main/src/components/common/Navigation.jsx",
                                lineNumber: 136,
                                columnNumber: 27
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/astron-endurance-main/src/components/common/Navigation.jsx",
                                lineNumber: 136,
                                columnNumber: 45
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/astron-endurance-main/src/components/common/Navigation.jsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/astron-endurance-main/src/components/common/Navigation.jsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/astron-endurance-main/src/components/common/Navigation.jsx",
                lineNumber: 80,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.3,
                        ease: [
                            0.4,
                            0.0,
                            0.2,
                            1
                        ]
                    },
                    className: "md:hidden fixed z-40 flex flex-col bg-[#2f2d68]",
                    style: {
                        position: "fixed",
                        top: "64px",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        width: "100vw",
                        height: "calc(100vh - 64px)",
                        zIndex: 40
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            y: 50,
                            opacity: 0
                        },
                        animate: {
                            y: 0,
                            opacity: 1
                        },
                        exit: {
                            y: -30,
                            opacity: 0
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.1,
                            ease: [
                                0.4,
                                0.0,
                                0.2,
                                1
                            ]
                        },
                        className: "flex-1 flex flex-col justify-center px-6 py-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col space-y-3 max-w-sm mx-auto w-full",
                                children: navigationItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        onClick: ()=>scrollToSection(item.id),
                                        className: "text-center px-6 py-4 rounded-xl font-orbitron-semi text-lg transition-all duration-200 hover:cursor-pointer border ".concat(activeSection === item.id ? "text-[#E4572E] bg-[#E4572E]/20 border-[#E4572E]/40" : "text-white hover:text-[#E4572E] hover:bg-[#E4572E]/10 border-transparent"),
                                        initial: {
                                            opacity: 0,
                                            x: 0
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        exit: {
                                            opacity: 0,
                                            x: 0
                                        },
                                        transition: {
                                            delay: index * 0.08,
                                            duration: 0.3,
                                            ease: [
                                                0.4,
                                                0.0,
                                                0.2,
                                                1
                                            ]
                                        },
                                        whileTap: {
                                            scale: 0.95
                                        },
                                        children: item.name
                                    }, item.id, false, {
                                        fileName: "[project]/astron-endurance-main/src/components/common/Navigation.jsx",
                                        lineNumber: 176,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/astron-endurance-main/src/components/common/Navigation.jsx",
                                lineNumber: 174,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    scaleX: 0
                                },
                                animate: {
                                    opacity: 1,
                                    scaleX: 1
                                },
                                exit: {
                                    opacity: 0,
                                    scaleX: 0
                                },
                                transition: {
                                    delay: navigationItems.length * 0.08 + 0.3,
                                    duration: 0.4,
                                    ease: [
                                        0.4,
                                        0.0,
                                        0.2,
                                        1
                                    ]
                                },
                                className: "w-full max-w-sm mx-auto mt-6 mb-4 h-px bg-white/20"
                            }, void 0, false, {
                                fileName: "[project]/astron-endurance-main/src/components/common/Navigation.jsx",
                                lineNumber: 199,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 50
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: 30
                                    },
                                    transition: {
                                        delay: navigationItems.length * 0.08 + 0.4,
                                        duration: 0.5,
                                        ease: [
                                            0.4,
                                            0.0,
                                            0.2,
                                            1
                                        ]
                                    },
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    className: "max-w-sm mx-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        className: "w-full py-4 text-lg bg-[#E4572E] hover:bg-[#E74D24] text-white font-airstrike-regular rounded-xl shadow border border-[#E4572E]/40 hover:cursor-pointer",
                                        onClick: ()=>scrollToSection("sponsor"),
                                        children: "Support Us"
                                    }, void 0, false, {
                                        fileName: "[project]/astron-endurance-main/src/components/common/Navigation.jsx",
                                        lineNumber: 224,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/astron-endurance-main/src/components/common/Navigation.jsx",
                                    lineNumber: 212,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/astron-endurance-main/src/components/common/Navigation.jsx",
                                lineNumber: 211,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/astron-endurance-main/src/components/common/Navigation.jsx",
                        lineNumber: 163,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/astron-endurance-main/src/components/common/Navigation.jsx",
                    lineNumber: 143,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/astron-endurance-main/src/components/common/Navigation.jsx",
                lineNumber: 141,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$scroll$2d$progress$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollProgress"], {
                className: "z-50"
            }, void 0, false, {
                fileName: "[project]/astron-endurance-main/src/components/common/Navigation.jsx",
                lineNumber: 236,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/astron-endurance-main/src/components/common/Navigation.jsx",
        lineNumber: 74,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Navigation, "klgNbXfsYq2irOZm/oohCkdLRws=");
_c = Navigation;
const __TURBOPACK__default__export__ = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/astron-endurance-main/src/components/ui/vortex.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Vortex",
    ()=>Vortex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$simplex$2d$noise$2f$dist$2f$esm$2f$simplex$2d$noise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/simplex-noise/dist/esm/simplex-noise.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'\x75\x73\x65\x20\x63\x6c\x69\x65\x6e\x74';
;
;
;
;
const Vortex = (props)=>{
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationFrameId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const particleCount = props.particleCount || 700;
    const particlePropCount = 9;
    const particlePropsLength = particleCount * particlePropCount;
    const rangeY = props.rangeY || 100;
    const baseTTL = 50;
    const rangeTTL = 150;
    const baseSpeed = props.baseSpeed || 0.0;
    const rangeSpeed = props.rangeSpeed || 1.5;
    const baseRadius = props.baseRadius || 1;
    const rangeRadius = props.rangeRadius || 2;
    const baseHue = props.baseHue || 14;
    const rangeHue = 30;
    const noiseSteps = 3;
    const xOff = 0.00125;
    const yOff = 0.00125;
    const zOff = 0.0005;
    const backgroundColor = props.backgroundColor || '#000000';
    let tick = 0;
    const noise3D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$simplex$2d$noise$2f$dist$2f$esm$2f$simplex$2d$noise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNoise3D"])();
    let particleProps = new Float32Array(particlePropsLength);
    let center = [
        0,
        0
    ];
    const HALF_PI = 0.5 * Math.PI;
    const TAU = 2 * Math.PI;
    const TO_RAD = Math.PI / 180;
    const rand = (n)=>n * Math.random();
    const randRange = (n)=>n - rand(2 * n);
    const fadeInOut = (t, m)=>{
        let hm = 0.5 * m;
        return Math.abs((t + hm) % m - hm) / hm;
    };
    const lerp = (n1, n2, speed)=>(1 - speed) * n1 + speed * n2;
    const setup = ()=>{
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (canvas && container) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                resize(canvas, ctx);
                initParticles();
                draw(canvas, ctx);
            }
        }
    };
    const initParticles = ()=>{
        tick = 0;
        particleProps = new Float32Array(particlePropsLength);
        for(let i = 0; i < particlePropsLength; i += particlePropCount){
            initParticle(i);
        }
    };
    const initParticle = (i)=>{
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }
        let x, y, vx, vy, life, ttl, speed, radius, hue;
        x = rand(canvas.width);
        y = center[1] + randRange(rangeY);
        vx = 0;
        vy = 0;
        life = 0;
        ttl = baseTTL + rand(rangeTTL);
        speed = baseSpeed + rand(rangeSpeed);
        radius = baseRadius + rand(rangeRadius);
        hue = baseHue + rand(rangeHue);
        particleProps.set([
            x,
            y,
            vx,
            vy,
            life,
            ttl,
            speed,
            radius,
            hue
        ], i);
    };
    const draw = (canvas, ctx)=>{
        tick++;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawParticles(ctx);
        renderGlow(canvas, ctx);
        renderToScreen(canvas, ctx);
        animationFrameId.current = window.requestAnimationFrame(()=>draw(canvas, ctx));
    };
    const drawParticles = (ctx)=>{
        for(let i = 0; i < particlePropsLength; i += particlePropCount){
            updateParticle(i, ctx);
        }
    };
    const updateParticle = (i, ctx)=>{
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }
        let i2 = 1 + i, i3 = 2 + i, i4 = 3 + i, i5 = 4 + i, i6 = 5 + i, i7 = 6 + i, i8 = 7 + i, i9 = 8 + i;
        let n, x, y, vx, vy, life, ttl, speed, x2, y2, radius, hue;
        x = particleProps[i];
        y = particleProps[i2];
        n = noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * TAU;
        vx = lerp(particleProps[i3], Math.cos(n), 0.5);
        vy = lerp(particleProps[i4], Math.sin(n), 0.5);
        life = particleProps[i5];
        ttl = particleProps[i6];
        speed = particleProps[i7];
        x2 = x + vx * speed;
        y2 = y + vy * speed;
        radius = particleProps[i8];
        hue = particleProps[i9];
        drawParticle(x, y, x2, y2, life, ttl, radius, hue, ctx);
        life++;
        particleProps[i] = x2;
        particleProps[i2] = y2;
        particleProps[i3] = vx;
        particleProps[i4] = vy;
        particleProps[i5] = life;
        (checkBounds(x, y, canvas) || life > ttl) && initParticle(i);
    };
    const drawParticle = (x, y, x2, y2, life, ttl, radius, hue, ctx)=>{
        ctx.save();
        ctx.lineCap = 'round';
        ctx.lineWidth = radius;
        ctx.strokeStyle = "hsla(".concat(hue, ",100%,60%,").concat(fadeInOut(life, ttl), ")");
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    };
    const checkBounds = (x, y, canvas)=>{
        return x > canvas.width || x < 0 || y > canvas.height || y < 0;
    };
    const resize = (canvas, ctx)=>{
        const { innerWidth, innerHeight } = window;
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        center[0] = 0.5 * canvas.width;
        center[1] = 0.5 * canvas.height;
    };
    const renderGlow = (canvas, ctx)=>{
        ctx.save();
        ctx.filter = 'blur(8px) brightness(200%)';
        ctx.globalCompositeOperation = 'lighter';
        ctx.drawImage(canvas, 0, 0);
        ctx.restore();
        ctx.save();
        ctx.filter = 'blur(4px) brightness(200%)';
        ctx.globalCompositeOperation = 'lighter';
        ctx.drawImage(canvas, 0, 0);
        ctx.restore();
    };
    const renderToScreen = (canvas, ctx)=>{
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        ctx.drawImage(canvas, 0, 0);
        ctx.restore();
    };
    const handleResize = ()=>{
        const canvas = canvasRef.current;
        const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
        if (canvas && ctx) {
            resize(canvas, ctx);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Vortex.useEffect": ()=>{
            setup();
            window.addEventListener('resize', handleResize);
            return ({
                "Vortex.useEffect": ()=>{
                    window.removeEventListener('resize', handleResize);
                    if (animationFrameId.current) {
                        cancelAnimationFrame(animationFrameId.current);
                    }
                }
            })["Vortex.useEffect"];
        }
    }["Vortex.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('\x72\x65\x6c\x61\x74\x69\x76\x65\x20\x68\x2d\x66\x75\x6c\x6c\x20\x77\x2d\x66\x75\x6c\x6c', props.containerClassName),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                ref: containerRef,
                className: "\\x61\\x62\\x73\\x6f\\x6c\\x75\\x74\\x65\\x20\\x69\\x6e\\x73\\x65\\x74\\x2d\\x30\\x20\\x7a\\x2d\\x30\\x20\\x66\\x6c\\x65\\x78\\x20\\x68\\x2d\\x66\\x75\\x6c\\x6c\\x20\\x77\\x2d\\x66\\x75\\x6c\\x6c\\x20\\x69\\x74\\x65\\x6d\\x73\\x2d\\x63\\x65\\x6e\\x74\\x65\\x72\\x20\\x6a\\x75\\x73\\x74\\x69\\x66\\x79\\x2d\\x63\\x65\\x6e\\x74\\x65\\x72\\x20\\x62\\x67\\x2d\\x74\\x72\\x61\\x6e\\x73\\x70\\x61\\x72\\x65\\x6e\\x74",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    ref: canvasRef
                }, void 0, false, {
                    fileName: "[project]/astron-endurance-main/src/components/ui/vortex.jsx",
                    lineNumber: 640,
                    columnNumber: 1
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/astron-endurance-main/src/components/ui/vortex.jsx",
                lineNumber: 630,
                columnNumber: 1
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('\x72\x65\x6c\x61\x74\x69\x76\x65\x20\x7a\x2d\x31\x30', props.className),
                children: props.children
            }, void 0, false, {
                fileName: "[project]/astron-endurance-main/src/components/ui/vortex.jsx",
                lineNumber: 646,
                columnNumber: 1
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/astron-endurance-main/src/components/ui/vortex.jsx",
        lineNumber: 623,
        columnNumber: 1
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Vortex, "u6RxWNIDP7LWPylFGjzRL64/Ovw=");
_c = Vortex;
var _c;
__turbopack_context__.k.register(_c, "Vortex");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/astron-endurance-main/src/components/common/Loading.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$vortex$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/components/ui/vortex.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$scroll$2d$progress$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/components/ui/scroll-progress.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const Loading = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            width: "100vw",
            height: "100vh"
        },
        className: "jsx-20f1873ed02b568f" + " " + "fixed inset-0 w-screen h-screen z-50 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "20f1873ed02b568f",
                children: "::-webkit-scrollbar{display:none}html.jsx-20f1873ed02b568f,body.jsx-20f1873ed02b568f{overflow:hidden}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$scroll$2d$progress$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollProgress"], {
                className: "z-[60]"
            }, void 0, false, {
                fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                lineNumber: 31,
                columnNumber: 3
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$vortex$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vortex"], {
                backgroundColor: "#000000",
                rangeY: 400,
                particleCount: 250,
                baseSpeed: 0.1,
                rangeSpeed: 1.0,
                baseRadius: 0.5,
                rangeRadius: 3,
                baseHue: 120,
                className: "flex items-center justify-center w-full h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-20f1873ed02b568f" + " " + "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                scale: 0.8,
                                opacity: 0
                            },
                            animate: {
                                scale: 1,
                                opacity: 1
                            },
                            transition: {
                                duration: 1,
                                ease: "easeOut"
                            },
                            className: "mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-20f1873ed02b568f" + " " + "relative mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                            className: "text-6xl md:text-8xl font-airstrike-bold text-white tracking-wider drop-shadow-2xl",
                                            initial: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                duration: 0.8,
                                                delay: 0.2
                                            },
                                            children: "ASTRON"
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "text-xl md:text-2xl font-orbitron-semi text-[#E4572E] tracking-[0.3em] mt-2 drop-shadow-lg",
                                            initial: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                duration: 0.8,
                                                delay: 0.4
                                            },
                                            children: "ENDURANCE"
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "h-px bg-gradient-to-r from-transparent via-[#E4572E] to-transparent mx-auto shadow-lg shadow-[#E4572E]/50",
                                    initial: {
                                        width: 0
                                    },
                                    animate: {
                                        width: "300px"
                                    },
                                    transition: {
                                        duration: 2.5,
                                        delay: 0.6
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-20f1873ed02b568f" + " " + "w-80 mx-auto mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-20f1873ed02b568f" + " " + "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-20f1873ed02b568f" + " " + "h-1 bg-gray-800 rounded-full overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "h-full bg-gradient-to-r from-[#E4572E] to-[#FFD700]",
                                                initial: {
                                                    width: "0%"
                                                },
                                                animate: {
                                                    width: "100%"
                                                },
                                                transition: {
                                                    duration: 2.5,
                                                    ease: "easeInOut",
                                                    repeat: Infinity
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "absolute -top-1 h-3 w-6 bg-[#E4572E] blur-md opacity-70",
                                            animate: {
                                                x: [
                                                    0,
                                                    320,
                                                    0
                                                ]
                                            },
                                            transition: {
                                                duration: 2.5,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "mt-4 text-center",
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 1
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                        className: "text-white/70 font-orbitron-semi text-sm tracking-wide",
                                        animate: {
                                            opacity: [
                                                0.5,
                                                1,
                                                0.5
                                            ]
                                        },
                                        transition: {
                                            duration: 1.5,
                                            repeat: Infinity
                                        },
                                        children: "POWERED BY NATURE"
                                    }, void 0, false, {
                                        fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-20f1873ed02b568f" + " " + "relative w-32 h-32 mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "absolute inset-0 border border-[#E4572E]/30 rounded-full",
                                    animate: {
                                        rotate: 360
                                    },
                                    transition: {
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "linear"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-20f1873ed02b568f" + " " + "absolute -top-1 left-1/2 w-2 h-2 bg-[#E4572E] rounded-full transform -translate-x-1/2"
                                    }, void 0, false, {
                                        fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "absolute inset-4 border border-[#FFD700]/40 rounded-full",
                                    animate: {
                                        rotate: -360
                                    },
                                    transition: {
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "linear"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-20f1873ed02b568f" + " " + "absolute -top-1 left-1/2 w-1.5 h-1.5 bg-[#FFD700] rounded-full transform -translate-x-1/2"
                                    }, void 0, false, {
                                        fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "absolute inset-8 border border-white/20 rounded-full",
                                    animate: {
                                        rotate: 360
                                    },
                                    transition: {
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "linear"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-20f1873ed02b568f" + " " + "absolute -top-0.5 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2"
                                    }, void 0, false, {
                                        fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "absolute inset-0 flex items-center justify-center",
                                    animate: {
                                        scale: [
                                            1,
                                            1.1,
                                            1
                                        ],
                                        opacity: [
                                            0.7,
                                            1,
                                            0.7
                                        ]
                                    },
                                    transition: {
                                        duration: 2,
                                        repeat: Infinity
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-20f1873ed02b568f" + " " + "w-3 h-3 bg-gradient-to-r from-[#E4572E] to-[#FFD700] rounded-full shadow-lg shadow-[#E4572E]/50"
                                    }, void 0, false, {
                                        fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-20f1873ed02b568f" + " " + "absolute inset-0 pointer-events-none",
                            children: [
                                ...Array(6)
                            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "absolute w-1 h-1 bg-[#E4572E] rounded-full",
                                    style: {
                                        left: "".concat(20 + i * 15, "%"),
                                        top: "".concat(30 + i % 2 * 40, "%")
                                    },
                                    animate: {
                                        y: [
                                            0,
                                            -20,
                                            0
                                        ],
                                        opacity: [
                                            0,
                                            1,
                                            0
                                        ],
                                        scale: [
                                            0.5,
                                            1,
                                            0.5
                                        ]
                                    },
                                    transition: {
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: i * 0.5,
                                        ease: "easeInOut"
                                    }
                                }, i, false, {
                                    fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute bottom-16 left-1/2 transform -translate-x-1/2",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: 1.5
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-20f1873ed02b568f" + " " + "text-white/50 font-orbitron-semi text-xs tracking-widest",
                                children: "ENGINEERING A SOLAR FUTURE"
                            }, void 0, false, {
                                fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                lineNumber: 32,
                columnNumber: 3
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
        lineNumber: 11,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Loading;
const SimpleLoading = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 flex flex-col items-center justify-center bg-black text-center select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$scroll$2d$progress$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollProgress"], {
                className: "z-[60]"
            }, void 0, false, {
                fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                lineNumber: 221,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    scale: 0.85,
                    opacity: 0
                },
                animate: {
                    scale: 1,
                    opacity: 1
                },
                transition: {
                    duration: 0.7,
                    ease: "easeOut"
                },
                className: "mb-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-40 h-40 md:w-56 md:h-56 drop-shadow-2xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/astron_logo_icon.svg",
                        alt: "Astron Endurance Logo",
                        fill: true,
                        priority: true,
                        className: "object-contain"
                    }, void 0, false, {
                        fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                        lineNumber: 230,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                lineNumber: 223,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        className: "font-airstrike-bold text-[clamp(2.8rem,10vw,6rem)] leading-none text-white tracking-wide",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.25,
                            duration: 0.6
                        },
                        style: {
                            letterSpacing: "0.05em"
                        },
                        children: "ASTRON"
                    }, void 0, false, {
                        fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        className: "font-orbitron-semi text-[clamp(1.1rem,3.2vw,2.4rem)] text-gray-200 tracking-[0.35em] mt-0",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.4,
                            duration: 0.6
                        },
                        children: "ENDURANCE"
                    }, void 0, false, {
                        fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                lineNumber: 241,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 flex items-center justify-center gap-3",
                "aria-label": "Loading",
                role: "status",
                children: [
                    0,
                    1,
                    2
                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        className: "w-3 h-3 rounded-full bg-[#E4572E] shadow-[0_0_6px_-1px_rgba(228,87,46,0.8)]",
                        initial: {
                            scale: 0.6,
                            opacity: 0.3
                        },
                        animate: {
                            scale: [
                                0.6,
                                1,
                                0.6
                            ],
                            opacity: [
                                0.3,
                                1,
                                0.3
                            ]
                        },
                        transition: {
                            duration: 1.1,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.22
                        }
                    }, i, false, {
                        fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                        lineNumber: 268,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
                lineNumber: 262,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/astron-endurance-main/src/components/common/Loading.jsx",
        lineNumber: 220,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = SimpleLoading;
const __TURBOPACK__default__export__ = SimpleLoading;
var _c, _c1;
__turbopack_context__.k.register(_c, "Loading");
__turbopack_context__.k.register(_c1, "SimpleLoading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/astron-endurance-main/src/components/ui/card.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/lib/utils.js [app-client] (ecmascript)");
;
;
;
function Card(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "\\x63\\x61\\x72\\x64",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("\x62\x67\x2d\x63\x61\x72\x64\x20\x74\x65\x78\x74\x2d\x63\x61\x72\x64\x2d\x66\x6f\x72\x65\x67\x72\x6f\x75\x6e\x64\x20\x66\x6c\x65\x78\x20\x66\x6c\x65\x78\x2d\x63\x6f\x6c\x20\x67\x61\x70\x2d\x36\x20\x72\x6f\x75\x6e\x64\x65\x64\x2d\x78\x6c\x20\x62\x6f\x72\x64\x65\x72\x20\x70\x79\x2d\x36\x20\x73\x68\x61\x64\x6f\x77\x2d\x73\x6d", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/astron-endurance-main/src/components/ui/card.jsx",
        lineNumber: 12,
        columnNumber: 1
    }, this);
}
_c = Card;
function CardHeader(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "\\x63\\x61\\x72\\x64\\x2d\\x68\\x65\\x61\\x64\\x65\\x72",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("\x40\x63\x6f\x6e\x74\x61\x69\x6e\x65\x72\x2f\x63\x61\x72\x64\x2d\x68\x65\x61\x64\x65\x72\x20\x67\x72\x69\x64\x20\x61\x75\x74\x6f\x2d\x72\x6f\x77\x73\x2d\x6d\x69\x6e\x20\x67\x72\x69\x64\x2d\x72\x6f\x77\x73\x2d\x5b\x61\x75\x74\x6f\x5f\x61\x75\x74\x6f\x5d\x20\x69\x74\x65\x6d\x73\x2d\x73\x74\x61\x72\x74\x20\x67\x61\x70\x2d\x31\x2e\x35\x20\x70\x78\x2d\x36\x20\x68\x61\x73\x2d\x64\x61\x74\x61\x2d\x5b\x73\x6c\x6f\x74\x3d\x63\x61\x72\x64\x2d\x61\x63\x74\x69\x6f\x6e\x5d\x3a\x67\x72\x69\x64\x2d\x63\x6f\x6c\x73\x2d\x5b\x31\x66\x72\x5f\x61\x75\x74\x6f\x5d\x20\x5b\x2e\x62\x6f\x72\x64\x65\x72\x2d\x62\x5d\x3a\x70\x62\x2d\x36", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/astron-endurance-main/src/components/ui/card.jsx",
        lineNumber: 30,
        columnNumber: 1
    }, this);
}
_c1 = CardHeader;
function CardTitle(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "\\x63\\x61\\x72\\x64\\x2d\\x74\\x69\\x74\\x6c\\x65",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("\x6c\x65\x61\x64\x69\x6e\x67\x2d\x6e\x6f\x6e\x65\x20\x66\x6f\x6e\x74\x2d\x73\x65\x6d\x69\x62\x6f\x6c\x64", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/astron-endurance-main/src/components/ui/card.jsx",
        lineNumber: 48,
        columnNumber: 1
    }, this);
}
_c2 = CardTitle;
function CardDescription(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "\\x63\\x61\\x72\\x64\\x2d\\x64\\x65\\x73\\x63\\x72\\x69\\x70\\x74\\x69\\x6f\\x6e",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("\x74\x65\x78\x74\x2d\x6d\x75\x74\x65\x64\x2d\x66\x6f\x72\x65\x67\x72\x6f\x75\x6e\x64\x20\x74\x65\x78\x74\x2d\x73\x6d", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/astron-endurance-main/src/components/ui/card.jsx",
        lineNumber: 66,
        columnNumber: 1
    }, this);
}
_c3 = CardDescription;
function CardAction(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "\\x63\\x61\\x72\\x64\\x2d\\x61\\x63\\x74\\x69\\x6f\\x6e",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("\x63\x6f\x6c\x2d\x73\x74\x61\x72\x74\x2d\x32\x20\x72\x6f\x77\x2d\x73\x70\x61\x6e\x2d\x32\x20\x72\x6f\x77\x2d\x73\x74\x61\x72\x74\x2d\x31\x20\x73\x65\x6c\x66\x2d\x73\x74\x61\x72\x74\x20\x6a\x75\x73\x74\x69\x66\x79\x2d\x73\x65\x6c\x66\x2d\x65\x6e\x64", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/astron-endurance-main/src/components/ui/card.jsx",
        lineNumber: 84,
        columnNumber: 1
    }, this);
}
_c4 = CardAction;
function CardContent(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "\\x63\\x61\\x72\\x64\\x2d\\x63\\x6f\\x6e\\x74\\x65\\x6e\\x74",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("\x70\x78\x2d\x36", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/astron-endurance-main/src/components/ui/card.jsx",
        lineNumber: 102,
        columnNumber: 1
    }, this);
}
_c5 = CardContent;
function CardFooter(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "\\x63\\x61\\x72\\x64\\x2d\\x66\\x6f\\x6f\\x74\\x65\\x72",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("\x66\x6c\x65\x78\x20\x69\x74\x65\x6d\x73\x2d\x63\x65\x6e\x74\x65\x72\x20\x70\x78\x2d\x36\x20\x5b\x2e\x62\x6f\x72\x64\x65\x72\x2d\x74\x5d\x3a\x70\x74\x2d\x36", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/astron-endurance-main/src/components/ui/card.jsx",
        lineNumber: 120,
        columnNumber: 1
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/astron-endurance-main/src/components/sections/HeroSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$scroll$2d$progress$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/components/ui/scroll-progress.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
"use client";
;
;
;
;
;
;
;
const HeroSection = ()=>{
    const achievements = [
        {
            label: "Kerala Rank",
            value: "#1",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"],
            color: "from-yellow-500 to-amber-600"
        },
        {
            label: "All India Rank",
            value: "#9",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
            color: "from-purple-500 to-pink-600"
        },
        {
            label: "Team Members",
            value: "50+",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
            color: "from-blue-500 to-cyan-600"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "home",
        className: "relative min-h-screen pt-28 bg-slate-300 flex items-center justify-center overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$scroll$2d$progress$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollProgress"], {
                className: "z-50"
            }, void 0, false, {
                fileName: "[project]/astron-endurance-main/src/components/sections/HeroSection.jsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-10 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("picture", {
                        className: "w-full h-full block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                srcSet: "/images/astron_images/image-9.jpeg",
                                media: "(min-width: 1024px)"
                            }, void 0, false, {
                                fileName: "[project]/astron-endurance-main/src/components/sections/HeroSection.jsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/images/astron_images/image-12.jpeg",
                                alt: "Team background",
                                className: "w-full h-full object-cover scale-110 lg:scale-100 transition-transform duration-[1500ms] ease-out",
                                loading: "lazy"
                            }, void 0, false, {
                                fileName: "[project]/astron-endurance-main/src/components/sections/HeroSection.jsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/astron-endurance-main/src/components/sections/HeroSection.jsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/55 lg:bg-black/60"
                    }, void 0, false, {
                        fileName: "[project]/astron-endurance-main/src/components/sections/HeroSection.jsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"
                    }, void 0, false, {
                        fileName: "[project]/astron-endurance-main/src/components/sections/HeroSection.jsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/astron-endurance-main/src/components/sections/HeroSection.jsx",
                lineNumber: 49,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 text-center px-6 sm:px-8 max-w-6xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "leading-none mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block font-airstrike-bold tracking-tight text-[clamp(3.5rem,14vw,13rem)] text-[#E4572E] drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]",
                                    children: "ASTRON"
                                }, void 0, false, {
                                    fileName: "[project]/astron-endurance-main/src/components/sections/HeroSection.jsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block font-orbitron-semi tracking-wide text-[clamp(1.9rem,5vw,15rem)] text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]",
                                    children: "ENDURANCE"
                                }, void 0, false, {
                                    fileName: "[project]/astron-endurance-main/src/components/sections/HeroSection.jsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/astron-endurance-main/src/components/sections/HeroSection.jsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/astron-endurance-main/src/components/sections/HeroSection.jsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "mb-12",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8,
                            delay: 0.8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg md:text-xl lg:text-2xl text-white mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]",
                                children: "Engineering Tomorrow's Mobility"
                            }, void 0, false, {
                                fileName: "[project]/astron-endurance-main/src/components/sections/HeroSection.jsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-4 md:gap-6 text-sm md:text-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#E4572E] flex items-center gap-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/sections/HeroSection.jsx",
                                                lineNumber: 89,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Electric"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/astron-endurance-main/src/components/sections/HeroSection.jsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden md:inline text-gray-300",
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/astron-endurance-main/src/components/sections/HeroSection.jsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#E4572E] flex items-center gap-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/sections/HeroSection.jsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Innovative"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/astron-endurance-main/src/components/sections/HeroSection.jsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden md:inline text-gray-300",
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/astron-endurance-main/src/components/sections/HeroSection.jsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#E4572E] flex items-center gap-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/sections/HeroSection.jsx",
                                                lineNumber: 99,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Sustainable"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/astron-endurance-main/src/components/sections/HeroSection.jsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/astron-endurance-main/src/components/sections/HeroSection.jsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/astron-endurance-main/src/components/sections/HeroSection.jsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        className: "text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-12 text-gray-200 leading-relaxed px-4 md:bg-transparent rounded-xl md:rounded-none py-4 md:py-0 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8,
                            delay: 1
                        },
                        children: "From solar-powered innovation to electric excellence - we're building the future of sustainable mobility, one competition at a time."
                    }, void 0, false, {
                        fileName: "[project]/astron-endurance-main/src/components/sections/HeroSection.jsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "flex justify-center items-center mb-16",
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8,
                            delay: 1.2
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            whileHover: {
                                scale: 1.05,
                                y: -3
                            },
                            whileTap: {
                                scale: 0.95
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "lg",
                                className: "bg-[#E4572E] hover:bg-[#E74D24] text-white px-8 py-6 text-lg rounded-full shadow hover:shadow-lg transition-all duration-300 flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Explore Our Journey"
                                    }, void 0, false, {
                                        fileName: "[project]/astron-endurance-main/src/components/sections/HeroSection.jsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/astron-endurance-main/src/components/sections/HeroSection.jsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/astron-endurance-main/src/components/sections/HeroSection.jsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/astron-endurance-main/src/components/sections/HeroSection.jsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/astron-endurance-main/src/components/sections/HeroSection.jsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/astron-endurance-main/src/components/sections/HeroSection.jsx",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/astron-endurance-main/src/components/sections/HeroSection.jsx",
        lineNumber: 44,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = HeroSection;
const __TURBOPACK__default__export__ = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/astron-endurance-main/src/components/sections/AboutSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$scroll$2d$progress$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/components/ui/scroll-progress.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
"use client";
;
;
;
;
;
const AboutSection = ()=>{
    const achievements = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"],
            title: "Kerala Rank 1",
            description: "Top position in ESVC 2025",
            color: "from-yellow-500 to-amber-600"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
            title: "AIR 9",
            description: "All India Rank in ESVC 2025",
            color: "from-blue-500 to-indigo-600"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
            title: "50+ Members",
            description: "Diverse team of engineers",
            color: "from-green-500 to-emerald-600"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
            title: "Founded 2024",
            description: "Latest addition to SOE CUSAT",
            color: "from-purple-500 to-violet-600"
        }
    ];
    const stats = [
        {
            number: "1000+",
            label: "Hours of R&D",
            delay: 0.2
        },
        {
            number: "50+",
            label: "Team Members",
            delay: 0.4
        },
        {
            number: "2",
            label: "Major Competitions",
            delay: 0.6
        },
        {
            number: "1",
            label: "Kerala Rank",
            delay: 0.8
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "min-h-screen bg-gray-300 flex items-center justify-center py-20 border-y-[0.05px] border-gray-400",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$scroll$2d$progress$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollProgress"], {
                className: "z-50"
            }, void 0, false, {
                fileName: "[project]/astron-endurance-main/src/components/sections/AboutSection.jsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6 sm:px-8 py-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl md:text-6xl font-airstrike-bold text-gray-900 mb-6",
                                children: "About Astron Endurance"
                            }, void 0, false, {
                                fileName: "[project]/astron-endurance-main/src/components/sections/AboutSection.jsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-32 h-1 bg-[#E4572E] mx-auto rounded-full mb-8"
                            }, void 0, false, {
                                fileName: "[project]/astron-endurance-main/src/components/sections/AboutSection.jsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg md:text-xl font-orbitron-semi text-gray-700 max-w-4xl mx-auto",
                                children: "Founded in 2024 by SOE CUSAT students, Astron Endurance is driven by a vision of solar-powered mobility. We compete in national competitions with innovative electric vehicles, pushing the boundaries of sustainable transportation."
                            }, void 0, false, {
                                fileName: "[project]/astron-endurance-main/src/components/sections/AboutSection.jsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/astron-endurance-main/src/components/sections/AboutSection.jsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto h-full",
                        children: stats.map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl md:text-4xl font-airstrike-bold text-gray-900 mb-2",
                                        children: stat.number
                                    }, void 0, false, {
                                        fileName: "[project]/astron-endurance-main/src/components/sections/AboutSection.jsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm md:text-base font-orbitron-semi text-gray-600",
                                        children: stat.label
                                    }, void 0, false, {
                                        fileName: "[project]/astron-endurance-main/src/components/sections/AboutSection.jsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/astron-endurance-main/src/components/sections/AboutSection.jsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/astron-endurance-main/src/components/sections/AboutSection.jsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16 items-stretch",
                        children: achievements.map((achievement, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gray-900/95 backdrop-blur-sm hover:bg-gray-800/95 hover:cursor-pointer group-hover:-translate-y-2 group-hover:scale-[1.02] h-full flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-2 bg-[#E4572E]"
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/sections/AboutSection.jsx",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "p-6 text-center flex flex-col flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-16 h-16 mx-auto mb-4 rounded-full bg-[#E4572E] flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(achievement.icon, {
                                                        size: 32,
                                                        className: "text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/astron-endurance-main/src/components/sections/AboutSection.jsx",
                                                        lineNumber: 91,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/astron-endurance-main/src/components/sections/AboutSection.jsx",
                                                    lineNumber: 90,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-airstrike-bold text-white mb-3 group-hover:text-[#E4572E] transition-colors duration-300",
                                                    children: achievement.title
                                                }, void 0, false, {
                                                    fileName: "[project]/astron-endurance-main/src/components/sections/AboutSection.jsx",
                                                    lineNumber: 94,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-orbitron-semi text-gray-300 leading-relaxed mb-4",
                                                    children: achievement.description
                                                }, void 0, false, {
                                                    fileName: "[project]/astron-endurance-main/src/components/sections/AboutSection.jsx",
                                                    lineNumber: 98,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-auto"
                                                }, void 0, false, {
                                                    fileName: "[project]/astron-endurance-main/src/components/sections/AboutSection.jsx",
                                                    lineNumber: 102,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-0.5 bg-[#E4572E] mx-auto mt-4 group-hover:w-16 transition-all duration-300 rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/astron-endurance-main/src/components/sections/AboutSection.jsx",
                                                    lineNumber: 103,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/astron-endurance-main/src/components/sections/AboutSection.jsx",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/astron-endurance-main/src/components/sections/AboutSection.jsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, index, false, {
                                fileName: "[project]/astron-endurance-main/src/components/sections/AboutSection.jsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/astron-endurance-main/src/components/sections/AboutSection.jsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "relative max-w-4xl mx-auto bg-gray-900/90 backdrop-blur-sm border-0 shadow-2xl overflow-hidden hover:bg-gray-800/90 transition-colors duration-500",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                size: 48,
                                                className: "text-[#E4572E] mr-4"
                                            }, void 0, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/sections/AboutSection.jsx",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl md:text-3xl font-airstrike-bold text-white",
                                                children: "Our Mission"
                                            }, void 0, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/sections/AboutSection.jsx",
                                                lineNumber: 116,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/astron-endurance-main/src/components/sections/AboutSection.jsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-orbitron-semi text-gray-300 leading-relaxed",
                                        children: "To revolutionize sustainable mobility through innovative engineering solutions, inspiring the next generation of eco-conscious transportation while competing at the highest levels of national and international competitions."
                                    }, void 0, false, {
                                        fileName: "[project]/astron-endurance-main/src/components/sections/AboutSection.jsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/astron-endurance-main/src/components/sections/AboutSection.jsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/astron-endurance-main/src/components/sections/AboutSection.jsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/astron-endurance-main/src/components/sections/AboutSection.jsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/astron-endurance-main/src/components/sections/AboutSection.jsx",
                lineNumber: 49,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/astron-endurance-main/src/components/sections/AboutSection.jsx",
        lineNumber: 44,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = AboutSection;
const __TURBOPACK__default__export__ = AboutSection;
var _c;
__turbopack_context__.k.register(_c, "AboutSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/astron-endurance-main/src/components/ui/badge.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/lib/utils.js [app-client] (ecmascript)");
;
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('\x69\x6e\x6c\x69\x6e\x65\x2d\x66\x6c\x65\x78\x20\x69\x74\x65\x6d\x73\x2d\x63\x65\x6e\x74\x65\x72\x20\x6a\x75\x73\x74\x69\x66\x79\x2d\x63\x65\x6e\x74\x65\x72\x20\x72\x6f\x75\x6e\x64\x65\x64\x2d\x6d\x64\x20\x62\x6f\x72\x64\x65\x72\x20\x70\x78\x2d\x32\x20\x70\x79\x2d\x30\x2e\x35\x20\x74\x65\x78\x74\x2d\x78\x73\x20\x66\x6f\x6e\x74\x2d\x6d\x65\x64\x69\x75\x6d\x20\x77\x2d\x66\x69\x74\x20\x77\x68\x69\x74\x65\x73\x70\x61\x63\x65\x2d\x6e\x6f\x77\x72\x61\x70\x20\x73\x68\x72\x69\x6e\x6b\x2d\x30\x20\x5b\x26\x3e\x73\x76\x67\x5d\x3a\x73\x69\x7a\x65\x2d\x33\x20\x67\x61\x70\x2d\x31\x20\x5b\x26\x3e\x73\x76\x67\x5d\x3a\x70\x6f\x69\x6e\x74\x65\x72\x2d\x65\x76\x65\x6e\x74\x73\x2d\x6e\x6f\x6e\x65\x20\x66\x6f\x63\x75\x73\x2d\x76\x69\x73\x69\x62\x6c\x65\x3a\x62\x6f\x72\x64\x65\x72\x2d\x72\x69\x6e\x67\x20\x66\x6f\x63\x75\x73\x2d\x76\x69\x73\x69\x62\x6c\x65\x3a\x72\x69\x6e\x67\x2d\x72\x69\x6e\x67\x2f\x35\x30\x20\x66\x6f\x63\x75\x73\x2d\x76\x69\x73\x69\x62\x6c\x65\x3a\x72\x69\x6e\x67\x2d\x5b\x33\x70\x78\x5d\x20\x61\x72\x69\x61\x2d\x69\x6e\x76\x61\x6c\x69\x64\x3a\x72\x69\x6e\x67\x2d\x64\x65\x73\x74\x72\x75\x63\x74\x69\x76\x65\x2f\x32\x30\x20\x64\x61\x72\x6b\x3a\x61\x72\x69\x61\x2d\x69\x6e\x76\x61\x6c\x69\x64\x3a\x72\x69\x6e\x67\x2d\x64\x65\x73\x74\x72\x75\x63\x74\x69\x76\x65\x2f\x34\x30\x20\x61\x72\x69\x61\x2d\x69\x6e\x76\x61\x6c\x69\x64\x3a\x62\x6f\x72\x64\x65\x72\x2d\x64\x65\x73\x74\x72\x75\x63\x74\x69\x76\x65\x20\x74\x72\x61\x6e\x73\x69\x74\x69\x6f\x6e\x2d\x5b\x63\x6f\x6c\x6f\x72\x2c\x62\x6f\x78\x2d\x73\x68\x61\x64\x6f\x77\x5d\x20\x6f\x76\x65\x72\x66\x6c\x6f\x77\x2d\x68\x69\x64\x64\x65\x6e', {
    variants: {
        variant: {
            default: '\x62\x6f\x72\x64\x65\x72\x2d\x74\x72\x61\x6e\x73\x70\x61\x72\x65\x6e\x74\x20\x62\x67\x2d\x70\x72\x69\x6d\x61\x72\x79\x20\x74\x65\x78\x74\x2d\x70\x72\x69\x6d\x61\x72\x79\x2d\x66\x6f\x72\x65\x67\x72\x6f\x75\x6e\x64\x20\x5b\x61\x26\x5d\x3a\x68\x6f\x76\x65\x72\x3a\x62\x67\x2d\x70\x72\x69\x6d\x61\x72\x79\x2f\x39\x30',
            secondary: '\x62\x6f\x72\x64\x65\x72\x2d\x74\x72\x61\x6e\x73\x70\x61\x72\x65\x6e\x74\x20\x62\x67\x2d\x73\x65\x63\x6f\x6e\x64\x61\x72\x79\x20\x74\x65\x78\x74\x2d\x73\x65\x63\x6f\x6e\x64\x61\x72\x79\x2d\x66\x6f\x72\x65\x67\x72\x6f\x75\x6e\x64\x20\x5b\x61\x26\x5d\x3a\x68\x6f\x76\x65\x72\x3a\x62\x67\x2d\x73\x65\x63\x6f\x6e\x64\x61\x72\x79\x2f\x39\x30',
            destructive: '\x62\x6f\x72\x64\x65\x72\x2d\x74\x72\x61\x6e\x73\x70\x61\x72\x65\x6e\x74\x20\x62\x67\x2d\x64\x65\x73\x74\x72\x75\x63\x74\x69\x76\x65\x20\x74\x65\x78\x74\x2d\x77\x68\x69\x74\x65\x20\x5b\x61\x26\x5d\x3a\x68\x6f\x76\x65\x72\x3a\x62\x67\x2d\x64\x65\x73\x74\x72\x75\x63\x74\x69\x76\x65\x2f\x39\x30\x20\x66\x6f\x63\x75\x73\x2d\x76\x69\x73\x69\x62\x6c\x65\x3a\x72\x69\x6e\x67\x2d\x64\x65\x73\x74\x72\x75\x63\x74\x69\x76\x65\x2f\x32\x30\x20\x64\x61\x72\x6b\x3a\x66\x6f\x63\x75\x73\x2d\x76\x69\x73\x69\x62\x6c\x65\x3a\x72\x69\x6e\x67\x2d\x64\x65\x73\x74\x72\x75\x63\x74\x69\x76\x65\x2f\x34\x30\x20\x64\x61\x72\x6b\x3a\x62\x67\x2d\x64\x65\x73\x74\x72\x75\x63\x74\x69\x76\x65\x2f\x36\x30',
            outline: '\x74\x65\x78\x74\x2d\x66\x6f\x72\x65\x67\x72\x6f\x75\x6e\x64\x20\x5b\x61\x26\x5d\x3a\x68\x6f\x76\x65\x72\x3a\x62\x67\x2d\x61\x63\x63\x65\x6e\x74\x20\x5b\x61\x26\x5d\x3a\x68\x6f\x76\x65\x72\x3a\x74\x65\x78\x74\x2d\x61\x63\x63\x65\x6e\x74\x2d\x66\x6f\x72\x65\x67\x72\x6f\x75\x6e\x64'
        }
    },
    defaultVariants: {
        variant: '\x64\x65\x66\x61\x75\x6c\x74'
    }
});
function Badge(param) {
    let { className, variant, asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : '\x73\x70\x61\x6e';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "\\x62\\x61\\x64\\x67\\x65",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/astron-endurance-main/src/components/ui/badge.jsx",
        lineNumber: 35,
        columnNumber: 1
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$scroll$2d$progress$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/components/ui/scroll-progress.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/components/ui/badge.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
"use client";
;
;
;
;
;
;
const CompetitionsSection = ()=>{
    const competitions = [
        {
            title: "SAE EBAJA",
            subtitle: "Electric All-Terrain Vehicle Competition",
            description: "A rigorous competition featuring virtual simulations, static evaluations, dynamic performance tests, and endurance challenges. Teams design and build electric ATVs that can handle various terrains while maintaining efficiency and performance.",
            image: "/comps/sae-baja.jpg",
            status: "Active",
            date: "2025",
            location: "National Level",
            achievements: [
                "Design Excellence",
                "Performance Testing",
                "Innovation Award"
            ],
            features: [
                "Virtual Simulation",
                "Static Design",
                "Dynamic Testing",
                "Endurance Challenge"
            ],
            color: "from-orange-500 to-red-600",
            bgColor: "from-orange-900/20 to-red-900/20"
        },
        {
            title: "FMAE BSVC",
            subtitle: "Bharat Solar Vehicle Challenge",
            description: "Inspired by the World Solar Challenge, this competition focuses on energy efficiency and solar-powered mobility. Teams create vehicles that can travel maximum distance using only solar energy, emphasizing sustainability and innovation.",
            image: "/comps/fmae-bsvc.jpg",
            status: "Upcoming",
            date: "2025",
            location: "Pan India",
            achievements: [
                "Solar Efficiency",
                "Range Optimization",
                "Sustainability"
            ],
            features: [
                "Solar Technology",
                "Energy Efficiency",
                "Long Distance",
                "Eco-Friendly"
            ],
            color: "from-blue-500 to-cyan-600",
            bgColor: "from-blue-900/20 to-cyan-900/20"
        }
    ];
    const stats = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"],
            number: "2",
            label: "Major Competitions",
            description: "Active participation",
            color: "from-yellow-500 to-amber-600"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
            number: "1st",
            label: "Kerala Rank",
            description: "ESVC 2025",
            color: "from-green-500 to-emerald-600"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
            number: "9th",
            label: "All India Rank",
            description: "ESVC 2025",
            color: "from-blue-500 to-indigo-600"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
            number: "100%",
            label: "Electric Focus",
            description: "Sustainable technology",
            color: "from-purple-500 to-violet-600"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "competitions",
        className: "min-h-screen bg-slate-300 py-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$scroll$2d$progress$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollProgress"], {
                className: "z-50"
            }, void 0, false, {
                fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                lineNumber: 101,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6 sm:px-8 py-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl md:text-6xl font-airstrike-bold text-gray-900 mb-6",
                                children: "Our Competitions"
                            }, void 0, false, {
                                fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-32 h-1 bg-[#E4572E] mx-auto rounded-full mb-8"
                            }, void 0, false, {
                                fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg md:text-xl font-orbitron-semi text-gray-700 max-w-4xl mx-auto",
                                children: "We participate in prestigious national competitions, showcasing our innovation in electric and solar-powered vehicle technologies."
                            }, void 0, false, {
                                fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto",
                        children: stats.map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "relative h-full overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gray-900/95 backdrop-blur-sm hover:bg-gray-800/95 group-hover:scale-[1.02]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "p-4 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 mx-auto mb-3 rounded-full bg-[#E4572E] flex items-center justify-center shadow-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(stat.icon, {
                                                    size: 24,
                                                    className: "text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                    lineNumber: 123,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                lineNumber: 122,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-airstrike-bold text-white mb-1",
                                                children: stat.number
                                            }, void 0, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                lineNumber: 125,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-orbitron-semi text-gray-300 mb-1",
                                                children: stat.label
                                            }, void 0, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                lineNumber: 128,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-gray-400",
                                                children: stat.description
                                            }, void 0, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                lineNumber: 131,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                        lineNumber: 121,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, index, false, {
                                fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto",
                        children: competitions.map((competition, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "relative h-full overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gray-900/95 backdrop-blur-sm hover:bg-gray-800/95 group-hover:scale-[1.02]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-3 bg-[#E4572E]"
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "p-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative h-64 overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: competition.image,
                                                            alt: competition.title,
                                                            className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                        }, void 0, false, {
                                                            fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                            lineNumber: 151,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-4 right-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                variant: competition.status === "Active" ? "default" : "secondary",
                                                                className: "".concat(competition.status === "Active" ? "bg-green-600 hover:bg-green-700" : "bg-yellow-600 hover:bg-yellow-700", " text-white border-0 font-orbitron-semi"),
                                                                children: competition.status
                                                            }, void 0, false, {
                                                                fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                                lineNumber: 158,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                            lineNumber: 157,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute bottom-4 left-4 right-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-4 text-white text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                                size: 16
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                                                lineNumber: 175,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-orbitron-semi",
                                                                                children: competition.date
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                                                lineNumber: 176,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                                        lineNumber: 174,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                                size: 16
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                                                lineNumber: 181,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-orbitron-semi",
                                                                                children: competition.location
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                                                lineNumber: 182,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                                        lineNumber: 180,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                                lineNumber: 173,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                            lineNumber: 172,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                    lineNumber: 150,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-2xl font-airstrike-bold text-white mb-2 group-hover:text-[#E4572E] transition-colors duration-300",
                                                            children: competition.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                            lineNumber: 191,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-lg font-orbitron-semi text-gray-400 mb-4",
                                                            children: competition.subtitle
                                                        }, void 0, false, {
                                                            fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                            lineNumber: 194,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-300 font-orbitron-semi leading-relaxed mb-6",
                                                            children: competition.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                            lineNumber: 197,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                    className: "text-sm font-airstrike-bold text-white mb-3 uppercase tracking-wide",
                                                                    children: "Competition Features"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                                    lineNumber: 202,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-2 gap-2",
                                                                    children: competition.features.map((feature, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2 text-sm text-gray-300",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                                    size: 14,
                                                                                    className: "text-green-400 flex-shrink-0"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                                                    lineNumber: 211,
                                                                                    columnNumber: 29
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-orbitron-semi",
                                                                                    children: feature
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                                                    lineNumber: 215,
                                                                                    columnNumber: 29
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, idx, true, {
                                                                            fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                                            lineNumber: 207,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                                    lineNumber: 205,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                            lineNumber: 201,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                    className: "text-sm font-airstrike-bold text-white mb-3 uppercase tracking-wide",
                                                                    children: "Key Focus Areas"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                                    lineNumber: 224,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-wrap gap-2",
                                                                    children: competition.achievements.map((achievement, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                            variant: "outline",
                                                                            className: "border-gray-600 text-gray-300 hover:bg-gray-800 font-orbitron-semi",
                                                                            children: achievement
                                                                        }, idx, false, {
                                                                            fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                                            lineNumber: 229,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                                    lineNumber: 227,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                            lineNumber: 223,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-16 h-0.5 bg-gradient-to-r ".concat(competition.color, " mt-6 group-hover:w-24 transition-all duration-300 rounded-full")
                                                        }, void 0, false, {
                                                            fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                            lineNumber: 240,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                    lineNumber: 190,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                            lineNumber: 149,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, index, false, {
                                fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mt-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "relative max-w-2xl mx-auto border-0 overflow-hidden bg-gray-900/95 backdrop-blur-sm shadow-2xl hover:bg-gray-800/95 transition-all duration-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-2 bg-[#E4572E]"
                                }, void 0, false, {
                                    fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                    lineNumber: 253,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-14 h-14 rounded-full bg-[#E4572E] flex items-center justify-center shadow-lg mr-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                                        size: 28,
                                                        className: "text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                        lineNumber: 257,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                    lineNumber: 256,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-airstrike-bold text-white tracking-wide",
                                                    children: "Join Our Journey"
                                                }, void 0, false, {
                                                    fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                                    lineNumber: 259,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                            lineNumber: 255,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-300 font-orbitron-semi",
                                            children: "Follow our competition journey and witness innovation in sustainable mobility"
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                            lineNumber: 263,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                                    lineNumber: 254,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                            lineNumber: 252,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
                lineNumber: 102,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx",
        lineNumber: 100,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CompetitionsSection;
const __TURBOPACK__default__export__ = CompetitionsSection;
var _c;
__turbopack_context__.k.register(_c, "CompetitionsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$scroll$2d$progress$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/components/ui/scroll-progress.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/components/ui/badge.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/building.js [app-client] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/handshake.js [app-client] (ecmascript) <export default as Handshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const SponsorSection = ()=>{
    _s();
    const sponsorshipTiers = [
        {
            title: "Title Sponsor",
            price: "₹5,00,000+",
            description: "Maximum visibility and exclusive partnership benefits",
            features: [
                "Logo on vehicle and team apparel",
                "Exclusive branding rights",
                "Media coverage and PR",
                "Technical collaboration opportunities",
                "Campus events participation",
                "Annual report mentions"
            ],
            color: "from-yellow-500 to-amber-600",
            bgGradient: "from-yellow-900/20 to-amber-900/20",
            recommended: true,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"]
        },
        {
            title: "Major Sponsor",
            price: "₹2,00,000+",
            description: "Significant visibility with strong partnership benefits",
            features: [
                "Logo on vehicle",
                "Team apparel branding",
                "Social media mentions",
                "Competition participation rights",
                "Technical workshops access",
                "Quarterly updates"
            ],
            color: "from-blue-500 to-indigo-600",
            bgGradient: "from-blue-900/20 to-indigo-900/20",
            recommended: false,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"]
        },
        {
            title: "Supporting Sponsor",
            price: "₹50,000+",
            description: "Basic visibility with partnership recognition",
            features: [
                "Logo on team materials",
                "Website mentions",
                "Social media tags",
                "Event invitations",
                "Progress reports",
                "Alumni network access"
            ],
            color: "from-green-500 to-emerald-600",
            bgGradient: "from-green-900/20 to-emerald-900/20",
            recommended: false,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"]
        }
    ];
    const benefits = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
            title: "Brand Visibility",
            description: "National exposure through competitions and media coverage",
            color: "from-purple-500 to-violet-600"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
            title: "Talent Pipeline",
            description: "Access to skilled engineering students and graduates",
            color: "from-blue-500 to-cyan-600"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
            title: "Innovation Partnership",
            description: "Collaborate on cutting-edge sustainable technology projects",
            color: "from-green-500 to-teal-600"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
            title: "CSR Alignment",
            description: "Support environmental sustainability and education initiatives",
            color: "from-orange-500 to-red-600"
        }
    ];
    const stats = [
        {
            number: "10K+",
            label: "Social Media Reach",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]
        },
        {
            number: "500+",
            label: "Event Attendees",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
        },
        {
            number: "50+",
            label: "Media Mentions",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"]
        },
        {
            number: "5+",
            label: "University Partners",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"]
        }
    ];
    const brochurePath = "/Sponsorship-Brochure.pdf";
    const [brochureAvailable, setBrochureAvailable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [checkingBrochure, setCheckingBrochure] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SponsorSection.useEffect": ()=>{
            let ignore = false;
            fetch(brochurePath, {
                method: "HEAD"
            }).then({
                "SponsorSection.useEffect": (res)=>{
                    if (!ignore) {
                        setBrochureAvailable(res.ok);
                        setCheckingBrochure(false);
                    }
                }
            }["SponsorSection.useEffect"]).catch({
                "SponsorSection.useEffect": ()=>{
                    if (!ignore) {
                        setBrochureAvailable(false);
                        setCheckingBrochure(false);
                    }
                }
            }["SponsorSection.useEffect"]);
            return ({
                "SponsorSection.useEffect": ()=>{
                    ignore = true;
                }
            })["SponsorSection.useEffect"];
        }
    }["SponsorSection.useEffect"], [
        brochurePath
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "sponsor",
        className: "min-h-screen bg-[#bfc2e4] py-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$scroll$2d$progress$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollProgress"], {
                className: "z-50"
            }, void 0, false, {
                fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                lineNumber: 140,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6 sm:px-8 py-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl md:text-6xl font-orbitron-semi text-black mb-6",
                                children: "Become Our Partner"
                            }, void 0, false, {
                                fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-32 h-1 bg-gradient-to-r from-blue-200 via-white to-blue-200 mx-auto rounded-full mb-8"
                            }, void 0, false, {
                                fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg md:text-xl font-orbitron-semi text-black/90 max-w-4xl mx-auto",
                                children: "Join us in shaping the future of sustainable mobility. Partner with Astron Endurance to drive innovation and create lasting impact in electric vehicle technology."
                            }, void 0, false, {
                                fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto items-stretch",
                        children: stats.map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "relative h-full overflow-hidden bg-gray-900/95 text-white flex flex-col",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "p-6 text-center flex flex-col items-center justify-center flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-14 h-14 mx-auto mb-4 rounded-full bg-white/50 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(stat.icon, {
                                                    size: 26,
                                                    className: "text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                                    lineNumber: 160,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                                lineNumber: 159,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl md:text-3xl font-orbitron-semi text-white mb-2 tracking-wide",
                                                children: stat.number
                                            }, void 0, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                                lineNumber: 162,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm md:text-base font-orbitron-semi text-white/90 leading-snug max-w-[10ch]",
                                                children: stat.label
                                            }, void 0, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                                lineNumber: 165,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                        lineNumber: 158,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                    lineNumber: 157,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, index, false, {
                                fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-3xl font-orbitron-semi text-black text-center mb-12",
                                children: "Partnership Benefits"
                            }, void 0, false, {
                                fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto items-stretch",
                                children: benefits.map((benefit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group h-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "relative overflow-hidden bg-gray-900/95 text-white h-full flex flex-col",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                className: "p-6 text-center h-full flex flex-col flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ".concat(benefit.color, " flex items-center justify-center group-hover:scale-110 transition-transform duration-300"),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(benefit.icon, {
                                                            size: 32,
                                                            className: "text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                                            lineNumber: 186,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                                        lineNumber: 183,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-lg font-orbitron-semi text-white mb-3",
                                                        children: benefit.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                                        lineNumber: 188,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-orbitron-semi text-white/80 flex-grow",
                                                        children: benefit.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                                        lineNumber: 191,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                                lineNumber: 182,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, index, false, {
                                        fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-3xl font-orbitron-semi text-black text-center mb-12",
                                children: "Our Sponsors"
                            }, void 0, false, {
                                fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative overflow-hidden w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex animate-scroll space-x-12 w-max",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center w-48 h-24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/sponsors/astron-sponsor-1.jpg",
                                                alt: "Sponsor 1",
                                                className: "max-w-full max-h-full object-contain transition-all duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                                lineNumber: 286,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                            lineNumber: 285,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center w-48 h-24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/sponsors/astron-sponsor-2.png",
                                                alt: "Sponsor 2",
                                                className: "max-w-full max-h-full object-contain transition-all duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                                lineNumber: 293,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                            lineNumber: 292,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center w-48 h-24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/sponsors/astron-sponsor-3.png",
                                                alt: "Sponsor 3",
                                                className: "max-w-full max-h-full object-contain transition-all duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                                lineNumber: 300,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                            lineNumber: 299,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center w-48 h-24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/sponsors/astron-sponsor-4.svg",
                                                alt: "Sponsor 4",
                                                className: "max-w-full max-h-full object-contain transition-all duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                                lineNumber: 307,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                            lineNumber: 306,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center w-48 h-24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/sponsors/astron-sponsor-1.jpg",
                                                alt: "Sponsor 1",
                                                className: "max-w-full max-h-full object-contain transition-all duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                                lineNumber: 315,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                            lineNumber: 314,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center w-48 h-24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/sponsors/astron-sponsor-2.png",
                                                alt: "Sponsor 2",
                                                className: "max-w-full max-h-full object-contain transition-all duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                                lineNumber: 322,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                            lineNumber: 321,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center w-48 h-24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/sponsors/astron-sponsor-3.png",
                                                alt: "Sponsor 3",
                                                className: "max-w-full max-h-full object-contain transition-all duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                                lineNumber: 329,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                            lineNumber: 328,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center w-48 h-24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/sponsors/astron-sponsor-4.svg",
                                                alt: "Sponsor 4",
                                                className: "max-w-full max-h-full object-contain transition-all duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                                lineNumber: 336,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                            lineNumber: 335,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center w-48 h-24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/sponsors/astron-sponsor-1.jpg",
                                                alt: "Sponsor 1",
                                                className: "max-w-full max-h-full object-contain transition-all duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                                lineNumber: 344,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                            lineNumber: 343,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center w-48 h-24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/sponsors/astron-sponsor-2.png",
                                                alt: "Sponsor 2",
                                                className: "max-w-full max-h-full object-contain transition-all duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                                lineNumber: 351,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                            lineNumber: 350,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center w-48 h-24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/sponsors/astron-sponsor-3.png",
                                                alt: "Sponsor 3",
                                                className: "max-w-full max-h-full object-contain transition-all duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                                lineNumber: 358,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                            lineNumber: 357,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center w-48 h-24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/sponsors/astron-sponsor-4.svg",
                                                alt: "Sponsor 4",
                                                className: "max-w-full max-h-full object-contain transition-all duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                                lineNumber: 365,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                            lineNumber: 364,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                    lineNumber: 284,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                lineNumber: 283,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "relative max-w-4xl mx-auto bg-gray-900/95 overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "p-12 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"], {
                                                size: 48,
                                                className: "text-orange-400 mr-4"
                                            }, void 0, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                                lineNumber: 379,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-3xl font-orbitron-semi text-white",
                                                children: "Ready to Partner?"
                                            }, void 0, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                                lineNumber: 380,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                        lineNumber: 378,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-white/90 font-orbitron-semi mb-8 max-w-2xl mx-auto",
                                        children: "Contact us to discuss customized sponsorship packages and partnership opportunities that align with your brand values and business objectives."
                                    }, void 0, false, {
                                        fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                        lineNumber: 384,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-8 py-4 bg-gradient-to-r bg-[#E4572E] hover:bg-[#e04a23] ring-[0.25px] ring-white text-white font-orbitron-semi rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-3 mx-auto group hover:scale-105 active:scale-95",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Contact Us Today"
                                            }, void 0, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                                lineNumber: 390,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 20,
                                                className: "group-hover:translate-x-1 transition-transform duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                                lineNumber: 391,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                        lineNumber: 389,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                lineNumber: 377,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                            lineNumber: 376,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                        lineNumber: 375,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "relative max-w-3xl mx-auto bg-gray-900/95 backdrop-blur-sm border-0 overflow-hidden shadow-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-2 bg-[#E4572E]"
                                }, void 0, false, {
                                    fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                    lineNumber: 402,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-airstrike-bold text-white mb-4 tracking-wide",
                                            children: "Sponsorship Brochure"
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                            lineNumber: 404,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-300 font-orbitron-semi mb-8 max-w-2xl mx-auto",
                                            children: "Get the full details of our impact, visibility metrics, deliverables and partnership roadmap in a concise PDF."
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                            lineNumber: 407,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        brochureAvailable ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: brochurePath,
                                            download: true,
                                            className: "inline-flex items-center gap-3 px-10 py-4 bg-[#E4572E] hover:bg-[#e04a23] text-white font-orbitron-semi rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group active:scale-95",
                                            "aria-label": "Download sponsorship brochure PDF",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm md:text-base tracking-wide",
                                                    children: "Download Brochure"
                                                }, void 0, false, {
                                                    fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                                    lineNumber: 419,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                    size: 18,
                                                    className: "group-hover:translate-y-[2px] transition-transform duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                                    lineNumber: 422,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                            lineNumber: 413,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-3 px-10 py-4 bg-gray-700/50 text-gray-400 font-orbitron-semi rounded-full border border-gray-600",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm md:text-base tracking-wide",
                                                children: "Brochure Unavailable"
                                            }, void 0, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                                lineNumber: 430,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                            lineNumber: 429,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                                    lineNumber: 403,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                            lineNumber: 401,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                        lineNumber: 400,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
                lineNumber: 141,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx",
        lineNumber: 139,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SponsorSection, "PJOlxAsvBONGYz1wNNNFRKpY0tg=");
_c = SponsorSection;
const __TURBOPACK__default__export__ = SponsorSection;
var _c;
__turbopack_context__.k.register(_c, "SponsorSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/astron-endurance-main/src/components/sections/ContactSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$scroll$2d$progress$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/components/ui/scroll-progress.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/crown.js [app-client] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
"use client";
;
;
;
;
const ContactSection = ()=>{
    const teamContacts = [
        {
            name: "Prof BIJU N",
            role: "FACULTY ADVISOR",
            phone: "+91 94962 15993",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"],
            gradient: "from-purple-500 to-indigo-600",
            accent: "text-purple-400"
        },
        {
            name: "KEVIN JOSE",
            role: "TEAM CAPTAIN",
            phone: "+91 94000 32200",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
            gradient: "from-[#E4572E] to-[#E74D24]",
            accent: "text-[#E4572E]"
        },
        {
            name: "HARINADH SADISH",
            role: "VICE CAPTAIN",
            phone: "+91 97468 53013",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
            gradient: "from-emerald-500 to-teal-600",
            accent: "text-emerald-400"
        }
    ];
    const socialLinks = [
        {
            platform: "Instagram",
            handle: "@astron.endurance",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"],
            url: "https://instagram.com/astron.endurance",
            gradient: "from-pink-500 to-purple-600",
            bgGlow: "shadow-pink-500/25"
        },
        {
            platform: "Email",
            handle: "astronendurance@gmail.com",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
            url: "mailto:astronendurance@gmail.com",
            gradient: "from-blue-500 to-cyan-600",
            bgGlow: "shadow-blue-500/25"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "min-h-screen bg-slate-300 flex items-center justify-center py-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$scroll$2d$progress$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollProgress"], {
                className: "z-50"
            }, void 0, false, {
                fileName: "[project]/astron-endurance-main/src/components/sections/ContactSection.jsx",
                lineNumber: 59,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6 sm:px-8 py-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl md:text-6xl font-airstrike-bold text-gray-900 mb-6",
                                children: "Get In Touch"
                            }, void 0, false, {
                                fileName: "[project]/astron-endurance-main/src/components/sections/ContactSection.jsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-32 h-1 bg-[#E4572E] mx-auto rounded-full mb-8"
                            }, void 0, false, {
                                fileName: "[project]/astron-endurance-main/src/components/sections/ContactSection.jsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg md:text-xl font-orbitron-semi text-gray-700 max-w-3xl mx-auto",
                                children: "Drive innovation forward. Partner with Astron Endurance."
                            }, void 0, false, {
                                fileName: "[project]/astron-endurance-main/src/components/sections/ContactSection.jsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/astron-endurance-main/src/components/sections/ContactSection.jsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-6xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl md:text-3xl font-orbitron-semi text-gray-900 text-center mb-12",
                                        children: "Leadership Team"
                                    }, void 0, false, {
                                        fileName: "[project]/astron-endurance-main/src/components/sections/ContactSection.jsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                                        children: teamContacts.map((contact, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gray-900/95 backdrop-blur-sm rounded-2xl p-6 border-0 hover:bg-gray-800/95 transition-all duration-500 group hover:shadow-2xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-16 h-16 bg-[#E4572E] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                className: "w-8 h-8 text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/astron-endurance-main/src/components/sections/ContactSection.jsx",
                                                                lineNumber: 85,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/astron-endurance-main/src/components/sections/ContactSection.jsx",
                                                            lineNumber: 84,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-xl font-orbitron-semi text-white mb-2",
                                                            children: contact.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/astron-endurance-main/src/components/sections/ContactSection.jsx",
                                                            lineNumber: 88,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#E4572E] font-orbitron-semi text-sm mb-4 tracking-wide",
                                                            children: contact.role
                                                        }, void 0, false, {
                                                            fileName: "[project]/astron-endurance-main/src/components/sections/ContactSection.jsx",
                                                            lineNumber: 92,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "tel:".concat(contact.phone.replace(/\s/g, "")),
                                                            className: "inline-flex items-center gap-2 text-gray-300 hover:text-white font-orbitron-semi transition-colors duration-300 hover:cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/astron-endurance-main/src/components/sections/ContactSection.jsx",
                                                                    lineNumber: 100,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                contact.phone
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/astron-endurance-main/src/components/sections/ContactSection.jsx",
                                                            lineNumber: 96,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/astron-endurance-main/src/components/sections/ContactSection.jsx",
                                                    lineNumber: 83,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, index, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/sections/ContactSection.jsx",
                                                lineNumber: 79,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/astron-endurance-main/src/components/sections/ContactSection.jsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/astron-endurance-main/src/components/sections/ContactSection.jsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl md:text-3xl font-orbitron-semi text-gray-900 mb-12",
                                        children: "Connect With Us"
                                    }, void 0, false, {
                                        fileName: "[project]/astron-endurance-main/src/components/sections/ContactSection.jsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row gap-6 justify-center items-center",
                                        children: socialLinks.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: link.url,
                                                target: link.platform === "Instagram" ? "_blank" : "_self",
                                                rel: link.platform === "Instagram" ? "noopener noreferrer" : "",
                                                className: "flex text-sm  lg:text-base items-center gap-4 w-full bg-gray-900/95 backdrop-blur-sm rounded-xl p-4 border-0 hover:bg-gray-800/95 transition-all duration-500 group hover:shadow-xl min-w-[280px] hover:cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-12 bg-[#E4572E] rounded-full flex items-center justify-center transition-transform duration-300",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(link.icon, {
                                                            className: "w-6 h-6 text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/astron-endurance-main/src/components/sections/ContactSection.jsx",
                                                            lineNumber: 126,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/astron-endurance-main/src/components/sections/ContactSection.jsx",
                                                        lineNumber: 125,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-left",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[#E4572E] font-orbitron-semi text-sm",
                                                                children: link.platform
                                                            }, void 0, false, {
                                                                fileName: "[project]/astron-endurance-main/src/components/sections/ContactSection.jsx",
                                                                lineNumber: 130,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-white font-orbitron-semi",
                                                                children: link.handle
                                                            }, void 0, false, {
                                                                fileName: "[project]/astron-endurance-main/src/components/sections/ContactSection.jsx",
                                                                lineNumber: 133,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/astron-endurance-main/src/components/sections/ContactSection.jsx",
                                                        lineNumber: 129,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/astron-endurance-main/src/components/sections/ContactSection.jsx",
                                                lineNumber: 116,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/astron-endurance-main/src/components/sections/ContactSection.jsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/astron-endurance-main/src/components/sections/ContactSection.jsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mt-16 p-8 bg-gray-900/95 backdrop-blur-sm rounded-2xl border-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-300 font-orbitron-semi text-lg mb-6",
                                        children: "Ready to join our journey towards sustainable mobility?"
                                    }, void 0, false, {
                                        fileName: "[project]/astron-endurance-main/src/components/sections/ContactSection.jsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:astronendurance@gmail.com",
                                        className: "inline-flex items-center gap-3 bg-[#E4572E] hover:bg-[#E74D24] text-white font-orbitron-semi px-8 py-4 rounded-full transition-all duration-300 hover:cursor-pointer hover:scale-105 active:scale-95",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/astron-endurance-main/src/components/sections/ContactSection.jsx",
                                                lineNumber: 150,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Start a Conversation"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/astron-endurance-main/src/components/sections/ContactSection.jsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/astron-endurance-main/src/components/sections/ContactSection.jsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/astron-endurance-main/src/components/sections/ContactSection.jsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/astron-endurance-main/src/components/sections/ContactSection.jsx",
                lineNumber: 60,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/astron-endurance-main/src/components/sections/ContactSection.jsx",
        lineNumber: 55,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ContactSection;
const __TURBOPACK__default__export__ = ContactSection;
var _c;
__turbopack_context__.k.register(_c, "ContactSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/astron-endurance-main/src/components/pages/Home.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$common$2f$Navigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/components/common/Navigation.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$common$2f$Loading$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/components/common/Loading.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$sections$2f$HeroSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/components/sections/HeroSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$sections$2f$AboutSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/components/sections/AboutSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$sections$2f$CompetitionsSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/components/sections/CompetitionsSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$sections$2f$SponsorSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/components/sections/SponsorSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$sections$2f$ContactSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/components/sections/ContactSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$scroll$2d$progress$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/astron-endurance-main/src/components/ui/scroll-progress.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const Home = ()=>{
    _s();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const timer = setTimeout({
                "Home.useEffect.timer": ()=>{
                    setIsLoading(false);
                }
            }["Home.useEffect.timer"], 2500);
            return ({
                "Home.useEffect": ()=>clearTimeout(timer)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$common$2f$Loading$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/astron-endurance-main/src/components/pages/Home.jsx",
            lineNumber: 24,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$ui$2f$scroll$2d$progress$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollProgress"], {}, void 0, false, {
                fileName: "[project]/astron-endurance-main/src/components/pages/Home.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$common$2f$Navigation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/astron-endurance-main/src/components/pages/Home.jsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$sections$2f$HeroSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/astron-endurance-main/src/components/pages/Home.jsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$sections$2f$AboutSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/astron-endurance-main/src/components/pages/Home.jsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$sections$2f$CompetitionsSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/astron-endurance-main/src/components/pages/Home.jsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$sections$2f$SponsorSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/astron-endurance-main/src/components/pages/Home.jsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$src$2f$components$2f$sections$2f$ContactSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/astron-endurance-main/src/components/pages/Home.jsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/astron-endurance-main/src/components/pages/Home.jsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-gray-900 text-center py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "__build_attrib",
                    className: "container mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '12px',
                            fontFamily: 'system-ui,monospace',
                            color: 'rgba(255,255,255,0.82)',
                            padding: '4px 10px 5px',
                            letterSpacing: '0.5px',
                            lineHeight: '1.15',
                            fontWeight: 500
                        },
                        children: [
                            "Made by ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$astron$2d$endurance$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://github.com/nandhu-44",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                style: {
                                    fontWeight: 600,
                                    textDecoration: 'none',
                                    color: '#fff'
                                },
                                children: "nandhu-44"
                            }, void 0, false, {
                                fileName: "[project]/astron-endurance-main/src/components/pages/Home.jsx",
                                lineNumber: 49,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/astron-endurance-main/src/components/pages/Home.jsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/astron-endurance-main/src/components/pages/Home.jsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/astron-endurance-main/src/components/pages/Home.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(Home, "Yt82d/dvZsn5nYh5sqDQjv+rJ38=");
_c = Home;
const __TURBOPACK__default__export__ = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=astron-endurance-main_src_39df72da._.js.map