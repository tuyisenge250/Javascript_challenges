function domainName(url){
  return url.split("/").map(x => x === "" ? "." : x).join("").split(".").filter(x => x !== "http:" && x !== "www" &&  x !== "https:")[0]
}