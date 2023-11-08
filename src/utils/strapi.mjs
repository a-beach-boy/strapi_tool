#!/usr/bin/env node
import "dotenv/config"
import axios from "axios"
import qs from "qs"

const config = {
  url: process.env.STRAPI_API_URL,
  token: process.env.STRAPI_TOKEN,
}

const axiosInst = axios.create({
  baseURL: config.url,
  timeout: 1000,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${config.token}`,
  },
})

export const getServiceCodex = async url => {
  const query = qs.stringify(
    {
      fields: ["slug"],
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  )

  try {
    const response = await axiosInst.get(url + "/api/service-areas?" + query)
    const { data } = response?.data || {} // extract the data array
    return data.reduce(
      (obj, item) => ({ ...obj, [item?.attributes?.slug]: item?.id }),
      {}
    )
  } catch (error) {
    console.log(error)
    return
  }
}

export const updateService = async (id, content) => {
  try {
    const response = await axiosInst.put(`/api/service-areas/${id}`, { data: content });
    console.log(JSON.stringify(response.data));
  } catch (error) {
    console.log(error);
  }
}
