import question from "../model/question";
import user from "../model/user";

class QuestionsPresenter{

    onViewAll(){
        window.location.assign("#/view-all-questions");
    }

    onAddQuestion(){
        var author = user.state.currentUser.username;
        var title = question.state.newQuestion.title;
        var text = question.state.newQuestion.text;
        var date = new Date();
        var tags = question.state.newQuestion.tags;
        question.addQuestion(author,title,text,date.toLocaleString(),tags);
        question.changeNewQuestionProperty("title", "");
        question.changeNewQuestionProperty("text", "");
        question.changeNewQuestionProperty("tags", "");
        window.location.assign("#/view-all-questions");
    }

    onSearchByTitle(){
        var title = question.state.titleSearch;
        question.searchByTitle(title);
        window.location.assign('#/title-search');
    }

    onSearchByTag(){
        var tag = question.state.tagSearch;
        question.searchByTag(tag);
        window.location.assign('#/tag-search');
    }

    onChange(property, value){
       question.changeNewQuestionProperty(property,value);
    }

    onChangeSearch(property,value){
        question.changeProperty(property,value);
    }
    
    onBack(){
        window.location.assign('#/home');
    }
}

const questionsPresenter = new QuestionsPresenter();

export default questionsPresenter;