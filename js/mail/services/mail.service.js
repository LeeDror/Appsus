
import { utils } from "../services/utils.service.js";

var gMsgs = (() => {
    var msgs = utils.loadFromStorage('msgs');
    if (!msgs) {
        msgs = _createMsgs();
        utils.storeToStorage('msgs', msgs);
    }
    return msgs;
})();

var gSentMails = (() => {
    var sentsMails = utils.loadFromStorage('sentMsgs');
    if (!sentsMails) {
        sentsMails = [];
        utils.storeToStorage('sentMsgs', sentsMails);
    }
    return sentsMails;
})();

export const mailService = {
    getMsgs,
    getMsgById,
    addSentMail,
    removeReview
};

function getMsgs() {
    // console.log(gMsgs)
    return (gMsgs)
    // return Promise.resolve(gMsgs);

}

//todo: delete msg
function removeReview(bookId, reviewIdx) {
    let currBook = gBooks.find((book) => book.id === bookId)
    currBook.reviews.splice(reviewIdx, 1);
    Utils.storeToStorage('msgs', gBooks);
}

function getMsgById(id) {
    const msg = gMsgs.find(msg => msg.id === id)
    return Promise.resolve(msg)
}

//todo: add msg
function addSentMail(formMail) {
    var newMail = {
        id: utils.getRandomId,
        to: formMail.to,
        cc: formMail.cc,
        subject: formMail.subject,
        text: formMail.text,
        styles:{},
        sentAt: formMail.sentAt,

    }
    gSentMails.unshift(newMail);
    utils.storeToStorage('sentMsgs', gSentMails);
}


function _createMsgs() {

    return [{
        id: "OXeMG8wNskc",
        from: "da da",
        cc: "du du",
        subject: "subject 1",
        text: "ma nishma ? lama ? ha ha ha",
        styles: { fontFam: "arial", fontSize: "12", txtColor: "blue", bgColor: "white" },
        recivedAt: "",
        isRead:false,
        isStarred:false
    },
    {
        id: "11111111",
        from: "stam mishehu",
        cc: "",
        subject: "subject 2",
        text: "stam text kolshehu",
        styles: { fontFam: "curier", fontSize: "14", txtColor: "black", bgColor: "lightblue" },
        recivedAt: "",
        isRead:false,
        isStarred:false
    },
    {
        id: "989898989",
        from: "shaaa",
        cc: "miyau",
        subject: "subject 3",
        text: "ma nishma ? lama ? ha ha ha",
        styles: { fontFam: "arial", fontSize: "12", txtColor: "blue", bgColor: "white" },
        recivedAt: "",
        isRead:false,
        isStarred:false
    },
    {
        id: "stamstam",
        from: "i love shnatz",
        cc: "michael bargad",
        subject: "subject 4",
        text: "ma nishma ? lama ? ha ha ha",
        styles: { fontFam: "arial", fontSize: "12", txtColor: "blue", bgColor: "white" },
        recivedAt: "",
        isRead:false,
        isStarred:false
    },
    {
        id: "stamstam",
        from: "i love shnatz",
        cc: "michael bargad",
        subject: "subject l",
        text: "ma nishma ? lama ? ha ha ha",
        styles: { fontFam: "arial", fontSize: "12", txtColor: "blue", bgColor: "white" },
        recivedAt: "",
        isRead:false,
        isStarred:false
    },
    {
        id: "stamstam",
        from: "i love shnatz",
        cc: "michael bargad",
        subject: "kmxwlskxmslkqcm",
        text: "ma nishma ? lama ? ha ha ha",
        styles: { fontFam: "arial", fontSize: "12", txtColor: "blue", bgColor: "white" },
        recivedAt: "",
        isRead:false,
        isStarred:false
    },
    {
        id: "stamstam",
        from: "i love shnatz",
        cc: "michael bargad",
        subject: "any one any who any time",
        text: "ma nishma ? lama ? ha ha ha",
        styles: { fontFam: "arial", fontSize: "12", txtColor: "blue", bgColor: "white" },
        recivedAt: "",
        isRead:false,
        isStarred:false
    },
    {
        id: "stamstam",
        from: "i love shnatz",
        cc: "michael bargad",
        subject: "lalalalala",
        text: "ma nishma ? lama ? ha ha ha",
        styles: { fontFam: "arial", fontSize: "12", txtColor: "blue", bgColor: "white" },
        recivedAt: "",
        isRead:false,
        isStarred:false
    },
    {
        id: "stamstam",
        from: "i love shnatz",
        cc: "michael bargad",
        subject: "subject 4",
        text: "ma nishma ? lama ? ha ha ha",
        styles: { fontFam: "arial", fontSize: "12", txtColor: "blue", bgColor: "white" },
        recivedAt: "",
        isRead:false,
        isStarred:false
    },
    {
        id: "stamstam",
        from: "i love shnatz",
        cc: "michael bargad",
        subject: "subject 4",
        text: "ma nishma ? lama ? ha ha ha",
        styles: { fontFam: "arial", fontSize: "12", txtColor: "blue", bgColor: "white" },
        recivedAt: "",
        isRead:false,
        isStarred:false
    }]

}