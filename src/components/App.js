import React, {useState} from "react";


function removeCommonCharacters(str1,str2){
    let arr1 = str1.split('');
    let arr2 = str2.split('');

    for(let i = arr1.length - 1; i >= 0; i--){
        let char=arr1[i];
        let index= arr2.indexOf(char);

        if(index!=-1){
            arr1.splice(i,1);
            arr2.splice(index,1);
            i--;
        }

    }

    let sumOfLength = arr1.length+arr2.length;
    let ans= sumOfLength%6;

    return ans;
}
const App = () => {
    const[ans,setAns] = useState("");
    const[input1,setInput1] = useState("");
    const[input2,setInput2]= useState("");
    const calculate=()=>{
            let ans= input1&&input2 ? removeCommonCharacters(input1,input2): 6;
        if(ans===1){
            setAns("Friends");
        }else if(ans===2){
            setAns( "Love");
        }else if(ans===3){
            setAns( "Affection");
        }else if(ans===4){
            setAns( "Marriage");
        }else if(ans===5){
            setAns( "Enemy");
        }else if(ans===0){
            setAns( "Siblings");
        }else{
            setAns( "Please Enter valid input");
        }
    }

    const clear =()=>{
        setAns("");
        setInput1("");
        setInput2("");
    }


    return (<div id={"main"}>
        <form>
            <input type={"text"} id={"input1"} name={"input1"} placeholder={"Enter the First Name."}
                   data-testid="input1" onChange={(e)=>{setInput1(e.target.value)}}/>
            <input type={"text"} id={"input2"} name={"input2"} placeholder={"Enter the Second Name."}
                   data-testid="input2" onChange={(e)=>{setInput2(e.target.value)}}/>
            <button type={"button"} onClick={calculate}>Calculate Relationship Future</button>
            <button type={"reset"} onClick={clear} data-testid="clear">Clear</button>
            <h3 data-testid="answer">{ans}</h3>
        </form>
    </div>);
}

export default App;