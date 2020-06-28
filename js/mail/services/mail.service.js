
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
    addIncomeMsg,
    updateRead
    // removeReview
};

function getMsgs() {
    // console.log(gMsgs)
    return (gMsgs)
    // return Promise.resolve(gMsgs);

}

//todo: delete msg
// function removeMsg(msgId, reviewIdx) {
//     let currBook = gBooks.find((book) => book.id === bookId)
//     currBook.reviews.splice(reviewIdx, 1);
//     Utils.storeToStorage('msgs', gBooks);
// }

function getMsgById(id) {
    return msg = gMsgs.find(msg => msg.id === id)
    // return Promise.resolve(msg)
}

function updateRead(id) {
    var msg = getMsgById(id)
    msg.isRead = !msg.isRead
    utils.storeToStorage('msgs', gMsgs);

}

//todo: add msg
function addSentMail(formMail) {
    var newMail = {
        id: utils.getRandomId,
        to: formMail.to,
        cc: formMail.cc,
        subject: formMail.subject,
        text: formMail.freeText,
        styles: {},
        sentAt: formMail.sentAt,

    }
    gMsgs.unshift(newMail);
    utils.storeToStorage('sentMsgs', gSentMails);
}

function addIncomeMsg(formMail) {
    var newMail = {
        id: utils.getRandomId,
        to: 'me',
        from: formMail.from,
        cc: formMail.cc,
        subject: formMail.subject,
        text: formMail.freeText,
        styles: {},
        sentAt: formMail.sentAt,
        isRead: false,
        isStarred: false,
        sent: true

    }
    gMsgs.unshift(newMail);
    utils.storeToStorage('msgs', gMsgs);
}


function _createMsgs() {

    return [{
        id: "OXeMG8wNskc",
        to: 'me',
        from: "Mary Poppins",
        cc: "",
        subject: "E-mail conformation",
        text: "Hi, please confirm your email",
        styles: { fontFam: "arial", fontSize: "12", txtColor: "blue", bgColor: "white" },
        recivedAt: new Date().toISOString().substring(0, 10),
        isRead: false,
        isStarred: false,
        sent: false
    },
    {
        id: "11111111",
        from: "stam mishehu",
        cc: "od ehad",
        subject: "gam ken",
        text: "מצורף בזאת החוזה",
        styles: { fontFam: "curier", fontSize: "14", txtColor: "black", bgColor: "lightblue" },
        recivedAt: new Date().toISOString().substring(0, 10),
        isRead: false,
        isStarred: false,
        sent: false
    },
    {
        id: "989898989",
        from: "Amos Oz",
        cc: "My Michael",
        subject: "",
        text: "ani kotevet mipney sheanahim",
        styles: { fontFam: "arial", fontSize: "12", txtColor: "blue", bgColor: "white" },
        recivedAt: new Date().toISOString().substring(0, 10),
        isRead: false,
        isStarred: false,
        sent: true
    },
    {
        id: "stamstam",
        from: "nira",
        cc: "kishkashta",
        subject: "mi shetov lo vesameah",
        text: "ma nishma ? lama ? ha ha ha",
        styles: { fontFam: "arial", fontSize: "12", txtColor: "blue", bgColor: "white" },
        recivedAt: new Date().toISOString().substring(0, 10),
        isRead: false,
        isStarred: false,
        sent: false
    },
    {
        id: "stamstam",
        from: "Leo Tolstoy",
        cc: "",
        subject: "all the happy families are alike",
        text: "each unhappy family is unhappy in its own way.",
        styles: { fontFam: "arial", fontSize: "12", txtColor: "blue", bgColor: "white" },
        recivedAt: new Date().toISOString().substring(0, 10),
        isRead: false,
        isStarred: false,
        sent: true
    },
    {
        id: "stamstam",
        from: "Yehonatan Bargad",
        cc: "mother",
        subject: "run child, run",
        text: "your license is about to expire soon",
        styles: { fontFam: "arial", fontSize: "12", txtColor: "blue", bgColor: "white" },
        recivedAt: "",
        isRead: false,
        isStarred: false,
        sent: false
    },
    {
        id: "stamstam",
        from: "i love shnatz",
        cc: "michael bargad",
        subject: "",
        text: "ma nishma ? lama ? ha ha ha",
        styles: { fontFam: "arial", fontSize: "12", txtColor: "blue", bgColor: "white" },
        recivedAt: "",
        isRead: false,
        isStarred: false,
        sent: false
    },
    {
        id: "stamstam",
        from: "lennon",
        cc: "yoko",
        subject:"cranberry sauce" ,
        text: "no one i think is in my tree",
        styles: { fontFam: "arial", fontSize: "12", txtColor: "blue", bgColor: "white" },
        recivedAt: "",
        isRead: false,
        isStarred: false,
        sent: false
    },
    {
        id: "stamstam",
        from: "pita",
        cc: "",
        subject: "subject 4",
        text: "ma nishma ? lama ? ha ha ha",
        styles: { fontFam: "arial", fontSize: "12", txtColor: "blue", bgColor: "white" },
        recivedAt: "",
        isRead: false,
        isStarred: false,
        sent: false
    },
    {
        id: "stamstam",
        from: "i love shnatz",
        cc: "michael bargad",
        subject: "",
        text: "Nightmare",
        styles: { fontFam: "arial", fontSize: "12", txtColor: "blue", bgColor: "white" },
        recivedAt: "",
        isRead: false,
        isStarred: false,
        sent: false
    }]

}