( function( exports ) {
    function e( sel, content, attrs ) {
        attrs = attrs || {};
        var params = sel.split( /#|\./g );
        var tagName = params.shift();
        var element = document.createElement( tagName );

        if ( sel.indexOf( "#" ) > -1 ) {
            attrs.id = params.shift();
        }

        params.push( attrs.class || "" );
        if ( params.length > 0 ) {
            var classes = params.join( " " );
            if ( !!classes ) {
                attrs.class = classes;
            }
        }
        setAttributes( element, attrs );
        if ( !!content ) {
            elementContent( element, content );
        }
        return element;
    }
    function setAttributes( target, attrs ) {
        for ( var key in attrs  ) {
            target.setAttribute( key, attrs[ key ] );
        }
    }
    function isTextNode( node ) {
        return typeof node === "number" ||
            typeof node === "string"
            ? true : false;
    }

    function elementContent( element, node ) {
        if ( isTextNode( node )  ) {
           node = textNode( node );
        }
        if ( node instanceof Array ) {
           node = content( node );
        }
        element.appendChild( node );
    }

    function textNode( text, formatter ) {
        if ( formatter ) {
            text = formatter( text );
        }
        return document.createTextNode( text );
    }

    function content( arr, fn ) {
        var fragment = document.createDocumentFragment(),
        node, item, i = 0, l = arr.length;
        each( arr, function( i, item ) {
            if ( typeof fn === "function" ) { node = fn( item ); }
            if ( isTextNode( item ) ) { node = textNode( item ); }
            if ( typeof item === "function" ) { node = item(); }
            if ( item instanceof Node  ) { node = item;}
            if ( item instanceof Array  ) { node = content( item ); }
            fragment.appendChild( node );
        });
        return fragment;
    }
    exports.e = e;
    exports.content = content;
    exports.patch = patch;
}( typeof exports === "undefined" ? this.eaf = {} : exports ) );
