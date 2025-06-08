# Dialogs Angular 20 + Bootstrap 5

\- Angular 20 application (with [Angular CLI](https://github.com/angular/angular-cli) version 20.0.1) + Bootstrap 5.

\- Create dialogs from form.

\- Dialog types: none, info, question, warning and message.

\- See the root of this project for example images.

## Installation + run app

**Command to install**

_npm install_

or shorter:

_npm i_

**Command to run the application:**

_ng serve --open_

or shorter:

_ng s --o_

### **Changelog:**

_June 2025_

\- Upgrade to Angular 20. 

\- Using the keyword **protected** for properties that are only accessible in the template.

\- Using the keyword **readonly** for properties initialized by Angular.

\- Changed to _Zoneless_

\- Various minor changes

\- Suppressing deprecation warnings of _Bootstrap_ in _angular.json_ with the code:

`"stylePreprocessorOptions": {`  
 `"sass": {`  
 `"silenceDeprecations": ["mixed-decls", "color-functions", "global-builtin", "import"]`  
 `}`  
`},`