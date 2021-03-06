(function(){
	if (typeof(JSHINT) == "undefined")
			return;
			
	var rules = [
        { id:"asi", name:"asi", desc: "if automatic semicolon insertion should be tolerated"},
        { id:"bitwise", name:"bitwise", desc: "if bitwise operators should not be allowed"},
        { id:"boss", name:"boss", desc: "if advanced usage of assignments should be allowed"},
        { id:"browser", name:"browser", desc: "if the standard browser globals should be predefined"},
        { id:"camelcase", name:"camelcase", desc: "if identifiers should be required in camel case"},
        { id:"couch", name:"couch", desc: "if CouchDB globals should be predefined"},
        { id:"curly", name:"curly", desc: "if curly braces around all blocks should be required"},
        { id:"debug", name:"debug", desc: "if debugger statements should be allowed"},
        { id:"devel", name:"devel", desc: "if logging globals should be predefined (console, alert, etc.)"},
        { id:"dojo", name:"dojo", desc: "if Dojo Toolkit globals should be predefined"},
        { id:"eqeqeq", name:"eqeqeq", desc: "if === should be required"},
        { id:"eqnull", name:"eqnull", desc: "if == null comparisons should be tolerated"},
        { id:"es5", name:"es5", desc: "if ES5 syntax should be allowed"},
        { id:"esnext", name:"esnext", desc: "if es.next specific syntax should be allowed"},
        { id:"evil", name:"evil", desc: "if eval should be allowed"},
        { id:"expr", name:"expr", desc: "if ExpressionStatement should be allowed as Programs"},
        { id:"forin", name:"forin", desc: "if for in statements must filter"},
        { id:"funcscope", name:"funcscope", desc: "if only function scope should be used for scope tests"},
        { id:"globalstrict", name:"globalstrict", desc: "if global \"use strict\"; should be allowed (also enables 'strict')"},
        { id:"immed", name:"immed", desc: "if immediate invocations must be wrapped in parens"},
        { id:"iterator", name:"iterator", desc: "if the `__iterator__` property should be allowed"},
        { id:"jquery", name:"jquery", desc: "if jQuery globals should be predefined"},
        { id:"lastsemic", name:"lastsemic", desc: "if semicolons may be ommitted for the trailing statements inside of a one-line blocks."},
        { id:"latedef", name:"latedef", desc: "if the use before definition should not be tolerated"},
        { id:"laxbreak", name:"laxbreak", desc: "if line breaks should not be checked"},
        { id:"laxcomma", name:"laxcomma", desc: "if line breaks should not be checked around commas"},
        { id:"loopfunc", name:"loopfunc", desc: "if functions should be allowed to be defined within loops"},
        { id:"mootools", name:"mootools", desc: "if MooTools globals should be predefined"},
        { id:"multistr", name:"multistr", desc: "allow multiline strings"},
        { id:"newcap", name:"newcap", desc: "if constructor names must be capitalized"},
        { id:"noarg", name:"noarg", desc: "if arguments.caller and arguments.callee should be disallowed"},
        { id:"node", name:"node", desc: "if the Node.js environment globals should be predefined"},
        { id:"noempty", name:"noempty", desc: "if empty blocks should be disallowed"},
        { id:"nonew", name:"nonew", desc: "if using `new` for side-effects should be disallowed"},
        { id:"nonstandard", name:"nonstandard", desc: "if non-standard (but widely adopted) globals should be predefined"},
        { id:"nomen", name:"nomen", desc: "if names should be checked"},
        { id:"onevar", name:"onevar", desc: "if only one var statement per function should be allowed"},
        { id:"onecase", name:"onecase", desc: "if one case switch statements should be allowed"},
        { id:"passfail", name:"passfail", desc: "if the scan should stop on first error"},
        { id:"plusplus", name:"plusplus", desc: "if increment/decrement should not be allowed"},
        { id:"proto", name:"proto", desc: "if the `__proto__` property should be allowed"},
        { id:"prototypejs", name:"prototypejs", desc: "if Prototype and Scriptaculous globals should be predefined"},
        { id:"regexdash", name:"regexdash", desc: "if unescaped first/last dash (-) inside brackets should be tolerated"},
        { id:"regexp", name:"regexp", desc: "if the . should not be allowed in regexp literals"},
        { id:"rhino", name:"rhino", desc: "if the Rhino environment globals should be predefined"},
        { id:"undef", name:"undef", desc: "if variables should be declared before used"},
        { id:"unused", name:"unused", desc: "if variables should be always used"},
        { id:"scripturl", name:"scripturl", desc: "if script-targeted URLs should be tolerated"},
        { id:"shadow", name:"shadow", desc: "if variable shadowing should be tolerated"},
        { id:"smarttabs", name:"smarttabs", desc: "if smarttabs should be tolerated (http://www.emacswiki.org/emacs/SmartTabs)"},
        { id:"strict", name:"strict", desc: "require the \"use strict\"; pragma"},
        { id:"sub", name:"sub", desc: "if all forms of subscript notation are tolerated"},
        { id:"supernew", name:"supernew", desc: "if `new function () { ... };` and `new Object;`should be tolerated"},
        { id:"trailing", name:"trailing", desc: "if trailing whitespace rules apply"},
        { id:"validthis", name:"validthis", desc: "if 'this' inside a non-constructor function is valid. This is a function scoped option only."},
        { id:"withstmt", name:"withstmt", desc: "if with statements should be allowed"},
        { id:"white", name:"white", desc: "if strict whitespace rules apply"},
        { id:"worker", name:"worker", desc: "if Web Worker script symbols should be allowed"},
        { id:"wsh", name:"wsh", desc: "if the Windows Scripting Host environment globals should be predefined"},
        { id:"yui", name:"yui", desc: "YUI variables should be predefined"}
	];
	
	JSHINT.getRules = function(){
			return rules;
	}
})();

