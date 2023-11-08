# Strapi_tool commandline tool

Strapi_tool is a commandline tool built to receive a error file and update strapi accordingly.

## Installation

```bash
npm install -g .
```

## Usage
Update .env file with Gatsby Cloud env variables.

```bash
strapi-tool -f <filename> 
```
| Flags         | Name          | e.g.                        |
| ------------- |:-------------:|:---------------------------:|
| -f            | filename      | site-results-pro-pest       |
| -s            | strapi url    | https://pro...marketing.com |
| -t            | strapi token  | f3b3fcec838...542346        |

<img width="954" alt="Screenshot 2023-11-07 at 3 40 54 PM" src="https://github.com/a-beach-boy/strapi_tool/assets/104382938/a7464501-0c00-4db7-ae31-61f40ce2b168">

The program will retrieve Strapi id for Service Pages and update with fields from validation file.

## License

[MIT](https://choosealicense.com/licenses/mit/)
