(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(i,".").concat(u)]||d[u]||s[u]||o;return n?r.a.createElement(m,l(l({ref:t},b),{},{components:n})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var b=2;b<o;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(126)),i={id:"doc_dev_api_drawing",title:"Drawing",sidebar_label:"Drawing"},l={unversionedId:"doc_dev_api_drawing",id:"doc_dev_api_drawing",isDocsHomePage:!1,title:"Drawing",description:"HUD Data Type",source:"@site/docs/doc_dev_api_drawing.md",slug:"/doc_dev_api_drawing",permalink:"/tamods-site/docs/doc_dev_api_drawing",editUrl:"https://github.com/mcoot/taserver/edit/master/website/docs/doc_dev_api_drawing.md",version:"current",sidebar_label:"Drawing",sidebar:"developer",previous:{title:"Capping and Route Recording",permalink:"/tamods-site/docs/doc_dev_api_routes"},next:{title:"Miscellaneous Data Types",permalink:"/tamods-site/docs/doc_dev_api_datatypes"}},c=[{value:"HUD Data Type",id:"hud-data-type",children:[]},{value:"Accessing a custom Hud drawing context",id:"accessing-a-custom-hud-drawing-context",children:[{value:"The <code>onDrawCustomHud</code> hook",id:"the-ondrawcustomhud-hook",children:[]},{value:"Custom Huds using Ubermenu",id:"custom-huds-using-ubermenu",children:[]}]},{value:"Data Types and Enums",id:"data-types-and-enums",children:[{value:"Color Data Type",id:"color-data-type",children:[]},{value:"TextAlignment Enum",id:"textalignment-enum",children:[]},{value:"Viewport Information",id:"viewport-information",children:[]}]},{value:"Canvas Drawing",id:"canvas-drawing",children:[{value:"Drawing Primitives",id:"drawing-primitives",children:[]},{value:"Drawing Text",id:"drawing-text",children:[]}]}],b={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"hud-data-type"},"HUD Data Type"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"HUD")," datatype has a single property, ",Object(o.b)("inlineCode",{parentName:"p"},"canvas"),", which gives access to the HUD's drawing canvas."),Object(o.b)("h4",{id:"associated-functions"},"Associated functions"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"getHUD(): HUD")),Object(o.b)("p",null,"Gets a reference to the player's HUD."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"project(hud: HUD, vector: Vector): Vector")),Object(o.b)("p",null,"Projects a 3D vector onto the 2D canvas of the HUD. The resulting ",Object(o.b)("inlineCode",{parentName:"p"},"Vector")," is still a 3D vector type, but the ",Object(o.b)("inlineCode",{parentName:"p"},"X")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Y")," components represent the 2D projected coordinates."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"drawDamageNumber(hud: HUD, num: string, color: Color, location: Vector, xScale: float, yScale: float)")),Object(o.b)("p",null,"Draws a damage number with the value ",Object(o.b)("inlineCode",{parentName:"p"},"num")," (which can be any text). The ",Object(o.b)("inlineCode",{parentName:"p"},"Vector"),"'s ",Object(o.b)("inlineCode",{parentName:"p"},"X")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Y")," components determine the 2D positioning of the damage number on the HUD canvas, while the ",Object(o.b)("inlineCode",{parentName:"p"},"Z")," component determines its depth/draw order."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"isOnScreen(hud: HUD, position: Vector): boolean")),Object(o.b)("p",null,"Returns true if the given world position is within the bounds of the HUD."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"getPlayerPos(hud: HUD): Vector")),Object(o.b)("p",null,"Gets the world position of the player."),Object(o.b)("h2",{id:"accessing-a-custom-hud-drawing-context"},"Accessing a custom Hud drawing context"),Object(o.b)("h3",{id:"the-ondrawcustomhud-hook"},"The ",Object(o.b)("inlineCode",{parentName:"h3"},"onDrawCustomHud")," hook"),Object(o.b)("p",null,"Custom Hud drawing in TAMods is enabled via the ",Object(o.b)("a",{parentName:"p",href:"/tamods-site/docs/doc_dev_api_events#ondrawcustomhud"},Object(o.b)("inlineCode",{parentName:"a"},"onDrawCustomHud")," event"),"."),Object(o.b)("p",null,"The user can draw their custom Hud elements in an event handler for ",Object(o.b)("inlineCode",{parentName:"p"},"onDrawCustomHud"),". In practice, it's highly recommended to not use this method, and instead draw custom functions via the Ubermenu preset using the method defined in the next section."),Object(o.b)("h4",{id:"example-using-ondrawcustomhud"},"Example using ",Object(o.b)("inlineCode",{parentName:"h4"},"onDrawCustomHud")),Object(o.b)("h3",{id:"custom-huds-using-ubermenu"},"Custom Huds using Ubermenu"),Object(o.b)("p",null,"The Ubermenu preset defines an abstracted way to draw Hud components, handling ",Object(o.b)("inlineCode",{parentName:"p"},"onDrawCustomHud")," automatically."),Object(o.b)("h2",{id:"data-types-and-enums"},"Data Types and Enums"),Object(o.b)("h3",{id:"color-data-type"},"Color Data Type"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Color")," type has the following properties:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Property"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"r")),Object(o.b)("td",{parentName:"tr",align:null},"integer (0-255)"),Object(o.b)("td",{parentName:"tr",align:null},"Red component of the color")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"g")),Object(o.b)("td",{parentName:"tr",align:null},"integer (0-255)"),Object(o.b)("td",{parentName:"tr",align:null},"Green component of the color")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"b")),Object(o.b)("td",{parentName:"tr",align:null},"integer (0-255)"),Object(o.b)("td",{parentName:"tr",align:null},"Blue component of the color")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"a")),Object(o.b)("td",{parentName:"tr",align:null},"integer (0-255)"),Object(o.b)("td",{parentName:"tr",align:null},"Alpha (opacity) component of the color")))),Object(o.b)("h4",{id:"associated-functions-1"},"Associated functions"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"rgba(r: integer, g: integer, b: integer, a: integer): Color")),Object(o.b)("p",null,"Constructs a ",Object(o.b)("inlineCode",{parentName:"p"},"Color")," with the given components."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"rgb(r: integer, g: integer, b: integer): Color")),Object(o.b)("p",null,"Constructs a ",Object(o.b)("inlineCode",{parentName:"p"},"Color")," with full opacity (",Object(o.b)("inlineCode",{parentName:"p"},"a == 255"),") and the given components."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"lerpColor(c1: Color, c2: Color: alpha: float): Color")),Object(o.b)("p",null,"Linearly interpolates between colors ",Object(o.b)("inlineCode",{parentName:"p"},"c1")," and ",Object(o.b)("inlineCode",{parentName:"p"},"c2"),". The ",Object(o.b)("inlineCode",{parentName:"p"},"alpha")," parameter is a float between ",Object(o.b)("inlineCode",{parentName:"p"},"0")," and ",Object(o.b)("inlineCode",{parentName:"p"},"1")," determines the proportions: ",Object(o.b)("inlineCode",{parentName:"p"},"0")," gives 100% of ",Object(o.b)("inlineCode",{parentName:"p"},"c1"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"1")," gives 100% of ",Object(o.b)("inlineCode",{parentName:"p"},"c2"),"."),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'c1 = rgba(255, 0, 0, 128)\nc2 = rgb(0, 0, 255)\nc3 = lerpColor(c1, c2, 0.5)\nconsole("Color c3 has values (r: " .. c3.r .. ", g:" .. c3.g .. ", b:" .. c3.b .. ", a:" .. c3.a .. ")")\nconsole("AND IT GIVES YOU NICE PURPLE TEXT", c3)\n')),Object(o.b)("h3",{id:"textalignment-enum"},"TextAlignment Enum"),Object(o.b)("p",null,"Enumerates the possible text alignments."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"enums.TEXT_ALIGN_LEFT")," = 0 - Left-aligned"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"enums.TEXT_ALIGN_CENTER")," = 0 - Center-aligned"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"enums.TEXT_ALIGN_RIGHT")," = 0 - Right-aligned")),Object(o.b)("h3",{id:"viewport-information"},"Viewport Information"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"viewport")," namespace gives information about the current HUD viewport (drawable area)."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"viewport.size(): Vector2")),Object(o.b)("p",null,"Gets the current size of the HUD viewport as a vector."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"viewport.isMainMenuOpen(): boolean")),Object(o.b)("p",null,"Returns true if the player has the menu open."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"viewport.isScoreboardOpen(): boolean")),Object(o.b)("p",null,"Returns true if the player currently has the scoreboard open."),Object(o.b)("h2",{id:"canvas-drawing"},"Canvas Drawing"),Object(o.b)("p",null,"The functions described below can be used in event handlers for a ",Object(o.b)("a",{parentName:"p",href:"/tamods-site/docs/doc_dev_api_events#available-event-handlers"},"drawing event"),", such as ",Object(o.b)("inlineCode",{parentName:"p"},"onDrawCustomHud")," or ",Object(o.b)("inlineCode",{parentName:"p"},"onDrawHealthBar"),"."),Object(o.b)("h3",{id:"drawing-primitives"},"Drawing Primitives"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"drawRect(x1: float, y1: float, x2: float, y2: float, color: Color)")),Object(o.b)("p",null,"Draw a filled rectangle with the given coordinates and colour."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"drawBox(x1: float, y1: float, x2: float, y2: float, color: Color)")),Object(o.b)("p",null,"Draw an outline rectangle with the given coordinates and colour."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"drawProgressBar(x1: float, y1: float, x2: float, y2: float, color: Color, direction: integer, proportion: float)")),Object(o.b)("p",null,"Draws a rectangle progress bar filled to the given proportion. The ",Object(o.b)("inlineCode",{parentName:"p"},"direction")," parameter can be one of:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"0")," - up"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"1")," - right"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"2")," - down"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"3")," - left")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"draw2dLine(x1: float, y1: float, x2: float, y2: float, color: Color)")),Object(o.b)("p",null,"Draws a line between the two given points."),Object(o.b)("h3",{id:"drawing-text"},"Drawing Text"),Object(o.b)("p",null,"TAMods provides text drawing in three different font types: default (the damage number font), small (the console font) and the Unreal Tournament font set."),Object(o.b)("h4",{id:"damage-number-font"},"Damage Number Font"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"drawText(text: string, color: Color, x: float, y: float, alignment: TextAlignment, scale: float)")),Object(o.b)("p",null,"Draw text in the damage number font. The ",Object(o.b)("inlineCode",{parentName:"p"},"scale")," parameter performs bitmap scaling on the text (so ",Object(o.b)("inlineCode",{parentName:"p"},"scale")," > 1 will produce blurriness)."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"getTextSize(text: string, scale: float): Vector2")),Object(o.b)("p",null,"Get the display size of the given text printed in damage number font, as a ",Object(o.b)("a",{parentName:"p",href:"/tamods-site/docs/doc_dev_api_datatypes#vector2"},"2D vector"),"."),Object(o.b)("h4",{id:"small-font"},"Small Font"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"drawSmallText(text: string, color: Color, x: float, y: float, alignment: TextAlignment, shadowSize: integer, scale: float)")),Object(o.b)("p",null,"Draw text in the console font. The ",Object(o.b)("inlineCode",{parentName:"p"},"shadowSize")," value determines the distance of the drop shadow (",Object(o.b)("inlineCode",{parentName:"p"},"0")," gives no shadow). The ",Object(o.b)("inlineCode",{parentName:"p"},"scale")," parameter performs bitmap scaling."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"getSmallTextSize(text: string, scale: float): Vector2")),Object(o.b)("p",null,"Get the display size of the text in the console font."),Object(o.b)("h4",{id:"unreal-tournament-fonts"},"Unreal Tournament Fonts"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"drawUTText(text: string, color: Color, x: float, y: float, alignment: TextAlignment, shadowSize: integer, fontNum: integer)")),Object(o.b)("p",null,"Draw text in one of the Unreal Tournament fonts. ",Object(o.b)("inlineCode",{parentName:"p"},"fontNum")," is an integer in the range of ",Object(o.b)("inlineCode",{parentName:"p"},"0")," to ",Object(o.b)("inlineCode",{parentName:"p"},"3"),"; roughly speaking the lower values correspond to smaller fonts."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"drawUTTextScaled(text: string, color: Color, x: float, y: float, alignment: TextAlignment, shadowSize: integer, fontNum: integer, scale: float)")),Object(o.b)("p",null,"Draw text in one of the Unreal Tournament fonts, with bitmap scaling applied."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"getUTTextSize(text: string, fontNum: integer): Vector2")),Object(o.b)("p",null,"Get the display size of the text in the given UT font."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"getUTTextSizeScaled(text: string, fontNum: integer, scale: float): Vector2")),Object(o.b)("p",null,"Get the display size of the text in the given UT font, after bitmap scaling."))}p.isMDXComponent=!0}}]);