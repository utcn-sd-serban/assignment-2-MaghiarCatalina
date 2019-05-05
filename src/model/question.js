import { EventEmitter } from "events";

class Question extends EventEmitter{
    constructor(){
        super();
        this.state = {
            questions:[{
            author : "Cata",
            title: "how to",
            text: "bla bal",
            date: new Date(),
            tags: "java spring"
            },{
            author : "Cata",
            title: "meow",
            text: "meow meow",
            date: new Date(),
            tags: "java"
            },{
            author : "John",
            title: "halp",
            text: "front end is hard",
            date: new Date(),
            tags: "react js ui"
            }],
            newQuestion: {
            author : "",
            title: "",
            text: "",
            date: "",
            tags: ""
            },
            searchedQuestions:[],
            searchedQuestionsByTag:[],
            titleSearch: "",
            tagSearch: ""
        };
    }

    addQuestion(author,title,text,date,tags){
        this.state ={
            ...this.state,
            questions: this.state.questions.concat([{
                author: author,
                title: title,
                text: text,
                date: date,
                tags: tags
            }])
        };
        this.emit("change",this.state);
    }

    changeNewQuestionProperty(property, value){
        this.state = {
            ...this.state,
            newQuestion: {
                ...this.state.newQuestion,
                [property]: value
            }
        };
        this.emit("change",this.state);
    }

    changeSearchedQuestionsProperty(quest){
        this.state ={
            ...this.state,
            searchedQuestions: this.state.searchedQuestions.concat(quest)
        };
        this.emit("change",this.state);
    }

    changeSearchedQuestionsByTagProperty(quest){
        this.state ={
            ...this.state,
            searchedQuestionsByTag: this.state.searchedQuestionsByTag.concat(quest)
        };
        this.emit("change",this.state);
    }

    changeProperty(property,value){
        this.state={
            ...this.state,
            [property]: value
        };
        this.emit("change", this.state);
    }

    searchByTitle(titleSearch){
        this.state.searchedQuestions = this.state.questions.filter(q => q.title.includes(titleSearch));
        this.emit("change", this.state);
    }

    searchByTag(tagSearch){
        this.state.searchedQuestionsByTag = this.state.questions.filter(q => q.tags.includes(tagSearch));
        this.emit("change", this.state);
    }

}

const question = new Question();

export default question;