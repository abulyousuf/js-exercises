// Find every quote that has the word "I".
// Don't use regex, but this is what you would use regex for.
// Should include:
//     "I ought to be thy Adam, but I am rather the fallen angel..."
//     "If I cannot inspire love, I will cause fear!"
// Should not include:
//     "How mutable are our feelings, and how strange is that clinging love we have of life even in the excess of misery!"
//     "the companions of our childhood always possess a certain power over our minds which hardly any later friend can obtain.",

const frankensteinQuotes = [
    "Nothing is so painful to the human mind as a great and sudden change.",
    "Beware; for I am fearless, and therefore powerful.",
    "Life, although it may only be an accumulation of anguish, is dear to me, and I will defend it.",
    "I do know that for the sympathy of one living being, I would make peace with all. I have love in me the likes of which you can scarcely imagine and rage the likes of which you would not believe. If I cannot satisfy the one, I will indulge the other.",
    "If I cannot inspire love, I will cause fear!",
    "There is something at work in my soul, which I do not understand.",
    "I ought to be thy Adam, but I am rather the fallen angel...",
    "Even broken in spirit as he is, no one can feel more deeply than he does the beauties of nature. The starry sky, the sea, and every sight afforded by these wonderful regions, seems still to have the power of elevating his soul from earth. Such a man has a double existence: he may suffer misery, and be overwhelmed by disappointments; yet, when he has retired into himself, he will be like a celestial spirit that has a halo around him, within whose circle no grief or folly ventures.",
    "the companions of our childhood always possess a certain power over our minds which hardly any later friend can obtain.",
    "There is love in me the likes of which you've never seen. There is rage in me the likes of which should never escape. If I am not satisfied int he one, I will indulge the other.",
    "The world to me was a secret, which I desired to discover; to her it was a vacancy, which she sought to people with imaginations of her own.",
    "How mutable are our feelings, and how strange is that clinging love we have of life even in the excess of misery!",
    "When falsehood can look so like the truth, who can assure themselves of certain happiness?"
];

const findQuotesWithWordI = frankensteinQuotesArray => {
    const quotesWithWordI = [];

    frankensteinQuotesArray.forEach(quote => {
        if (quote.includes("I")) {
            quotesWithWordI.push(quote);
        }
    });

    return quotesWithWordI;
};

console.log(findQuotesWithWordI(frankensteinQuotes));