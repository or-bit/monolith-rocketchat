import retrieveRoute from './reader';

RocketChat.callbacks.add('renderMessage', (message) => {
    console.log(message.msg);
    let bubbleUrl = url;
    try {
		bubbleUrl += retrieveRoute(message.msg);
    } catch(error) {
		console.error(error);
		return;
    }
    message.html = '<iframe src="' + bubbleUrl + '" style="width: 800px; height: 300px" />';
    return message;
}, RocketChat.callbacks.priority.LOW, 'monolith');
