import { useEffect, useState } from "react"
import database , {answers} from "../data/database";
import { useDispatch } from "react-redux";
import * as Action from '../redux/question_reducer'

export const useFetchQestion = () => {
 const dispatch = useDispatch();
    const [getData, setGetData] = useState({ isLoading : false, apiData : [], serverError: null});


    useEffect(() => {
        setGetData(prev => ({...prev, isLoading : true}));

        (async () => {  
            try {
                let question = await database;
                
                if(question.length > 0){
                    setGetData(prev => ({...prev, isLoading : false}));
                    setGetData(prev => ({...prev, apiData : {question, answers}}));

                    /** dispatch an action */
                    dispatch(Action.startExamAction( {question, answers} ))

                } else{
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetData(prev => ({...prev, isLoading : false}));
                setGetData(prev => ({...prev, serverError : error}));
            }
        })();
    },[dispatch]) ;
    return [getData, setGetData]; 

}

/** MoveAction Dispatch function */
export const MoveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction()); /** increase trace by 1 */
    } catch (error) {
        console.log(error)
    }
}
    /** prevAction Dispatch function */
export const MovePreQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePreAction()); /** increase trace by 1 */
    } catch (error) {
        console.log(error)
    }
}
