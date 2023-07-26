const browserHistory = [];

const visitPage = (url) => {
    browserHistory.push(url);
    console.log(`Visited Page, ${url}`);
}

const goBack = () => {
    if (browserHistory.length > 1) {
        browserHistory.pop();
        const previousPage = browserHistory[browserHistory.length - 1];
        console.log(`Went back to the page ${previousPage}`);
    } else {
        console.log("Cannot find previous page");
    }
}

visitPage("https://example.com");
visitPage("https://openai.com");
visitPage("https://google.com");
visitPage("https://wikipedia.org");

goBack();
goBack();
goBack();
goBack();

/**
 * Basic walkthrough
 * 
 * creating an empty array of browser history to simulate an browser history
 * we know that Stacks are LIFO, Last in First out, so we are going to use on that operation, push() and pop()
 * 
 * in our first function, we just need to push the URL that were in, pass an parameter URL and push it to the empty array. its very common to console log the url.
 * 
 * in our second function called goBack that we created to go back to the previous page, so here we are going to work with pop() and with the array length
 * 
 * we first check if the user is in another page, to do that we just assume that the array length is bigger than 1, if it is, we can pop it, making the previous page, the current page. we can create an previousPage variable to access the last element in the array using. arr.length - 1, and that last element is basically our previousPage, since we pop out the current.
 */