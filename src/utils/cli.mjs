import yargs from "yargs"
import { hideBin } from 'yargs/helpers'

export const cli = () => {
  const options = yargs(hideBin(process.argv))
    .usage("Usage: -f <file> -s <url> -t <token>")
    .option("f", {
      alias: "file",
      describe: "Site results file",
      type: "string",
      demandOption: true,
    })
    .option("s", {
      alias: "url",
      describe: "Strapi site url",
      type: "string",
    })
    .option("t", {
      alias: "token",
      describe: "Strapi token",
      type: "string",
    }).argv

  return options
}

