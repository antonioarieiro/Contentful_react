const contentful = require("contentful");

export const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "r1tz45bppp58",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "HK94no9j61Zw4YvrOb1ZMwtgJLPAndiopruXAHwbISE",
})
