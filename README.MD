# CleanArhitecture core
Applying clean architecture to a react codebase brings lots of benefits, most of them you can find by simply googling what's clean architecture and what should we adopt architectural patterns.
One advantage that strikes me is having business rules isolated from framework-specific things. This means that our core logic is not coupled to React.

This gives you enough flexibility to, for example, move specific parts of the application to a backend, change libraries without too much pain, test once and reuse as many times as you want, share code between React and React Native applications, among others.  

This is a realistic approach, what I mean by that is: It's simple enough to be applicable and Robust enough to have it in a production environment.


### A brief explanation of each responsibility inside core:
- **Entity**: Application independent business rules
- **Interactor**: Application-specific business rules
- **Adapter**: Glue code from/to *Interactors* and *Presenter*, most of the time implementing a framework-specific behaviour.
  e. g.: We have to connect *Interactor* with react container, to do so, we have to connect *Interactor* with redux (framework) and then connect redux to container components.
- **Presenter**: Maps data from/to *Adapter* to/from *Components*.
- **Components**: Simplest possible unit of presentation. Any mapping, conversion, MUST be done by the *Presenter*.
- **Service**: Responsible for i/o operations, you can do HTTP/HTTPS requests, DB querys, etc.. 
---  

## Folder Structure
About this repo: TO-DO***..., folder structure:
```

src
 ├──core
 │   ├── frameworks
 │   ├── adapters
 │   │   └── redux
 │   ├── entities
 │   ├── services
 │   └── useCases
 ├── scenes
 │       ├── home
 │       └── login
 └── components
    ├── log
    ├── assets
    ├── components
    └── stylesheets
```
*Note:* the `frameworks` folder comprises framework-specific setups to have it available to the adapters.  

<!-- ## Running the apps
run `npm install` under the project you'd like to run, and then run `npm start`. -->

### For development

2. run `yarn` to install all the dependencies.
3. run `yarn start` to start local development server.


<br />


### For production

For production use `npm run build` but before it 'MAKE SHURE THAT SCRIPT WORKS :)'
<!-- 2. now run `npm run build`, you will get a folder named "prod". -->
