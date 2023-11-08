#!/usr/bin/env node

import fs from "fs"
import os from "os"


export const getReportFile = (f) => {
  return JSON.parse(readFile(f))
}

const readFile = (file) => {
  const homedir = os.homedir(),
    resultPath = `${homedir}/Desktop/validate_results/${file}.json`
  try {
    return fs.readFileSync(resultPath, "utf8")
  } catch (err) {
    console.error(err)
    return
  }
}
