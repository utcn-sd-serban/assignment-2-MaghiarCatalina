import React,{ Component } from "react";
import FrontPage from "./FrontPage";
import questionsPresenter from "../presenter/QuestionsPresenter";
import question from "../model/question";

const mapModelStateToComponentState = modelState => ({
    title: modelState.newQuestion.title,
    text: modelState.newQuestion.text,
    tags: modelState.newQuestion.tags
});

export default class SmartFrontPage extends Component{
    constructor(){
        super();
        this.state = mapModelStateToComponentState(question.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        question.addListener("change", this.listener);
    
    }

    componentWillUnmount() {
        question.removeListener("change", this.listener);
    }

    render(){
        return(
            <FrontPage
                onViewAll={questionsPresenter.onViewAll}
                onAddQuestion={questionsPresenter.onAddQuestion}
                onSearchByTitle={questionsPresenter.onSearchByTitle}
                onSearchByTag={questionsPresenter.onSearchByTag}
                onChange={questionsPresenter.onChange}
                onChangeSearch={questionsPresenter.onChangeSearch}
                
                title={this.state.title}
                text={this.state.text}
                tags={this.state.tags}
            />
        );
    }
}