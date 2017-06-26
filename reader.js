export default function retrieveRoute(commandReceived) {
    if (routes[commandReceived]) {
        return `/${routes[commandReceived].route}`;
    }
    throw new Error('Command not defined in your routes.js file.');
};
