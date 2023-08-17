import type { CodegenConfig } from '@graphql-codegen/cli';
 
 const config: CodegenConfig = {
    schema: 'http://localhost:3000/api/graphql',

 //  schema:'https://api-dev.autobse.com/api/graphql',
//   schema:'https://api.autobse.com/api/graphql',

    documents: '**/*.graphql',
 
   generates: {
   'src/utils/graphql.ts':{
       plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
       config: {
         withHooks: true,
        
       },
     },
   },
 };
 export default config;




 
