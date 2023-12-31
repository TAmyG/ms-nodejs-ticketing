import axios from 'axios';

const LandingPage = ({ currentUser }) => {
    console.log(currentUser);
    return <h1>Landing Page</h1>;

};

LandingPage.getInitialProps = async ({ req }) => {
    console.log('I am on the server!');

    if (typeof window === 'undefined') {
        // We are on the server!
        // Request should be made to:
        // http://SERVICENAME.NAMESPACE.svc.cluster.local
        // Define headers: host and cookie. Host to tell ingress that we need to use the routes of ticketing.dev domain
        // And cookie because the cookie is in the browser not in server
        const url = 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser';
        const { data } = await axios.get(url, {
            headers: req.headers,
        });
        // {currentUser: {}}
        return data;
    } else {
        // We are on the browser!
        // Request can be made with a base url of ''
        const { data } = await axios.get('/api/users/currentuser');
        // {currentUser: {}}
        return data;
    }

    return response.data;
};

export default LandingPage;
