- kubectl create secret generic jwt-secret --from-literal=JWT_KEY=[value]

publish npm package

- npm login
- npm run build
- npm publish
- npm patch # for increment version

Use this to update the library in the component who is implementing it
- npm update @tv-tickets/common

3 ways to connect to a POD
- via Ingress to a ClusterIP
- via NodePort
- via port forwarding: kubectl port-forward [pod name] [ local machine port]:[pod port]