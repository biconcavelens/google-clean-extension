chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    const url = new URL(details.url);
    
    // Skip if `udm=14` already present
    if (url.searchParams.get("udm") === "14") {
      return {};
    }

    // Add `udm=14`
    url.searchParams.set("udm", "14");
    
    return { redirectUrl: url.toString() };
  },
  {
    urls: [
      "*://www.google.com/search*",
      "*://www.google.co.in/search*"
    ],
    types: ["main_frame"]
  },
  ["blocking"]
);
