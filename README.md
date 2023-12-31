- kubectl create secret generic jwt-secret --from-literal=JWT_KEY=[value]

publish npm package

- npm login
- npm run build
- npm publish
- npm patch # for increment version

Use this to update the library in the component who is implementing it
- npm update @tv-tickets/common