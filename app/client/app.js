$('#feedbackform').motioncaptcha({
    // Basics:
    action: '#mc-action',        // the ID of the input containing the form action
    divId: '#mc',                // if you use an ID other than '#mc' for the placeholder, pass it in here
    cssClass: '.mc-active',      // this CSS class is applied to the 'mc' div when the plugin is active
    canvasId: '#mc-canvas',      // the ID of the MotionCAPTCHA canvas element

    // An array of shape names that you want MotionCAPTCHA to use:
    shapes: ['triangle', 'x', 'rectangle', 'circle', 'check', 'caret', 'zigzag', 'arrow', 'leftbracket', 'rightbracket', 'v', 'delete', 'star', 'pigtail'],

    // These messages are displayed inside the canvas after a user finishes drawing:
    errorMsg: 'Please try again.',
    successMsg: 'Captcha passed!',

    // This message is displayed if the user's browser doesn't support canvas:
    noCanvasMsg: "Your browser doesn't support <canvas> - try Chrome, FF4, Safari or IE9."

    // This could be any HTML string (eg. '<label>Draw this shit yo:</label>'):
    label: '<p>Please draw the shape in the box to submit the form:</p>'
});