# The element and Friends

Yet another javascript micro templating 

## Installation

git clone

## Usage
### e( ) -  The Element.

```javascript

e( selector, content, attributes ) ;

/**
 * Represents a alement constructor.
 * @param {string} selector - tagName or tagName#someId.className
 * @param {string | array | function } element content.
 * @param {object } element attributes.
 */
 

e( "img.img-responsive", null, {
    "src": "image url", "alt": "Responsive image",
    "style": "padding:10px"
} );

```


### Lists
```javascript

function ListGroup( data, listItem ) {
    return e( "ul.list-group",
        content.apply( null, arguments )
    );
}

function ListItem( value ) {
    return e( "li.list-group-item", value );
}

function Badge( value ) {
    return e( "span.badge", value );
}

function ItemWithBadge( data ) {
    return ListGroupItem( [
        e( "span.badge", data.badge ), data.text
    ] );
}
//BasicList
var list = [ 'item 1', 'item 2', 'item 3', 'item 4' ];
var basicList = ListGroup( list, ListItem );

//List with badges
var list = [ { text: 'item 1', badge: 1 } , { text: 'item 2', badge: 2 } ];
var listWithBadges = ListGroup( list, ItemWithBadge );
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

TODO: Write history

## Credits

TODO: Write credits

## License

TODO: Write license
