# Easy Toast
**easy toast** - is a vanilla javascript library for notifications.
<hr>
The purpose of this library is education.
I will be glad to your commits and code reviews in general!

The library weighs little, does not require css and is very easy to connect.

## Install via `<script>`:

Download `dist/easy-toast.js` from [releases page](https://github.com/cr1gger/easy-toast/releases)

In head:
```html
<script src="easy-toast.js"></script>
```
## Usage

#### Default options
```javascript
toast.notify("Hello it's easy toast!") 
```

#### Custom options
```javascript
let config = {
    duration: 3,
    type: 'success',
    position: 'bottom-center',
    hasCloseButton: false
}
    
toast.notify("Hello it's easy toast, custom options!", config) 
```

## Configuration
```javascript
{
    duration: 3,
    type: 'default',
    position: 'bottom-right',
    hasCloseButton: true,
    showTimeline: true,
    autoclose: true,
    stopOnHover: true,
    events: {
        'click': null,
        'closeClick': null,
    }
}
```
- `duration` - Duration in seconds
- `type` - default | success | danger | warning | dark
- `position` - top-right
  | top-middle
  | top-left
  | bottom-left
  | bottom-middle
  | bottom-right
- `hasCloseButton` - Visible close button | boolean
- `showTimeline` - Visible progress bar | boolean
- `autoclose` - Autoclose after the end of the timer | boolean
- `stopOnHover` - Pause the timer when you hover over a notification | boolean
- `events` - Object contains two available event: click and closeClick

###Version: 1.0.0
